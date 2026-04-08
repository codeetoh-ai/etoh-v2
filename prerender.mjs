/**
 * prerender.mjs
 * 
 * Runs AFTER `vite build`. Opens each route in headless Chromium,
 * waits for React to render, then saves the complete HTML to dist/.
 * 
 * Usage: node prerender.mjs
 */

import { createServer } from 'http'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import puppeteerCore from 'puppeteer-core'
import puppeteer from 'puppeteer'

let chromiumModule
try {
    chromiumModule = await import('@sparticuz/chromium')
} catch {
    chromiumModule = null
}

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const DIST = join(__dirname, 'dist')

// All static public routes to prerender (excludes admin + dynamic :slug routes)
const ROUTES = [
    '/',
    '/about/our-mission',
    '/about/how-we-work',
    '/about/team',
    '/about/careers',
    '/the-system',
    '/the-system/hospital-infrastructure',
    '/the-system/for-clinicians',
    '/the-system/for-patients/pre-admission',
    '/the-system/for-patients/patient-app',
    '/the-system/for-patients/health-journey',
    '/the-system/for-patients/post-discharge',
    '/the-system/end-to-end-care',
    '/deployments',
    '/deployments/government-health-systems',
    '/deployments/private-hospital-networks',
    '/research',
    '/research/clinical-evidence',
    '/research/technology',
    '/research/outcomes-index',
    '/impact',
    '/impact/patient-outcomes',
    '/impact/healthcare-access',
    '/impact/public-health-mission',
    '/news-insights',
    '/news-insights/news',
    '/news-insights/news/list',
    '/news-insights/insights',
    '/news-insights/insights/list',
]

// Simple MIME lookup
const MIME = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.ico': 'image/x-icon',
}

/**
 * Start a minimal static file server for the dist/ folder.
 * SPA fallback: any path without an extension serves index.html.
 */
function startServer(port) {
    return new Promise((resolve) => {
        const server = createServer((req, res) => {
            let filePath = join(DIST, req.url === '/' ? '/index.html' : req.url)

            // SPA fallback: if no extension → serve index.html
            if (!extname(filePath)) {
                filePath = join(DIST, 'index.html')
            }

            if (!existsSync(filePath)) {
                filePath = join(DIST, 'index.html')
            }

            try {
                const data = readFileSync(filePath)
                const ext = extname(filePath)
                res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
                res.end(data)
            } catch {
                res.writeHead(404)
                res.end('Not found')
            }
        })

        server.listen(port, () => {
            console.log(`  📦 Static server running on http://localhost:${port}`)
            resolve(server)
        })
    })
}

async function prerender() {
    const PORT = 4173
    const server = await startServer(PORT)

    console.log('\n🚀 Starting prerender...')
    console.log(`  📄 ${ROUTES.length} routes to prerender\n`)

    let browser
    if (chromiumModule) {
        const chromium = chromiumModule.default
        browser = await puppeteerCore.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath(),
            headless: true,
        })
    } else {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        })
    }

    let success = 0
    let failed = 0
    const failures = []

    for (const route of ROUTES) {
        const page = await browser.newPage()
        const url = `http://localhost:${PORT}${route}`

        try {
            // Set a tall viewport so all whileInView elements trigger immediately
            await page.setViewport({ width: 1280, height: 50000 })

            await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 })

            // Wait for React to render and animations to fire
            await page.evaluate(() => new Promise(r => setTimeout(r, 3000)))

            // Also scroll to trigger any remaining IntersectionObserver elements
            await page.evaluate(async () => {
                window.scrollTo(0, document.body.scrollHeight)
                await new Promise(r => setTimeout(r, 1000))
                window.scrollTo(0, 0)
            })

            // Wait for animations to complete
            await page.evaluate(() => new Promise(r => setTimeout(r, 2000)))

            // Force ALL elements visible — override framer-motion opacity/transform
            await page.evaluate(() => {
                // 1. Override any inline opacity:0 or transform styles
                document.querySelectorAll('*').forEach(el => {
                    const style = el.style
                    if (style.opacity === '0' || style.opacity === '0.0') {
                        style.opacity = '1'
                    }
                    if (style.transform && style.transform !== 'none') {
                        style.transform = 'none'
                    }
                })

                // 2. Remove framer-motion data attributes that may re-hide on hydration
                document.querySelectorAll('[data-framer-appear-id]').forEach(el => {
                    el.removeAttribute('data-framer-appear-id')
                })

                // 3. Force computed hidden elements visible via a global style override
                const overrideStyle = document.createElement('style')
                overrideStyle.textContent = `
                    [style*="opacity: 0"], [style*="opacity:0"] {
                        opacity: 1 !important;
                    }
                    [style*="transform"] {
                        transform: none !important;
                    }
                `
                document.head.appendChild(overrideStyle)
            })

            const html = await page.content()

            // Write the rendered HTML to the correct path
            const dir = route === '/'
                ? DIST
                : join(DIST, ...route.split('/').filter(Boolean))

            mkdirSync(dir, { recursive: true })
            writeFileSync(join(dir, 'index.html'), html, 'utf-8')

            console.log(`  ✅ ${route}`)
            success++
        } catch (err) {
            console.error(`  ❌ ${route} — ${err.message}`)
            failures.push(route)
            failed++
        } finally {
            await page.close()
        }
    }

    await browser.close()
    server.close()

    console.log(`\n🏁 Prerender complete: ${success} succeeded, ${failed} failed`)
    if (failures.length > 0) {
        console.log(`  Failed routes: ${failures.join(', ')}`)
    }
    console.log('')
}

prerender().catch((err) => {
    console.error('Prerender failed:', err)
    process.exit(1)
})
