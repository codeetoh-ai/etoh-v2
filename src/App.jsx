import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import SEO from './components/SEO'
import CrawlableNav from './components/CrawlableNav'
import videoSrc from './assets/Video/etoh d3.mp4'
import { useResponsive } from './hooks/useResponsive'


export default function App() {
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { isMobile } = useResponsive()

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 120)
        return () => clearTimeout(t)
    }, [])

    // Open sidebar on scroll
    useEffect(() => {
        let triggered = false
        const handleWheel = (e) => {
            if (triggered || open) return
            if (Math.abs(e.deltaY) > 15) {
                triggered = true
                setOpen(true)
            }
        }
        let touchStartY = 0
        const handleTouchStart = (e) => { touchStartY = e.touches[0].clientY }
        const handleTouchMove = (e) => {
            if (triggered || open) return
            if (Math.abs(e.touches[0].clientY - touchStartY) > 30) {
                triggered = true
                setOpen(true)
            }
        }
        window.addEventListener('wheel', handleWheel, { passive: true })
        window.addEventListener('touchstart', handleTouchStart, { passive: true })
        window.addEventListener('touchmove', handleTouchMove, { passive: true })
        return () => {
            window.removeEventListener('wheel', handleWheel)
            window.removeEventListener('touchstart', handleTouchStart)
            window.removeEventListener('touchmove', handleTouchMove)
        }
    }, [open])

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100dvh', overflow: 'hidden', background: '#000' }}>
            <SEO
                title={null}
                description="ETOH Health builds the operational infrastructure for modern hospitals — connecting clinicians, patients, and systems into a unified platform for end-to-end care."
                path="/"
            />
            <style>{`
                video {
                    display: block;
                }
                /* Hide native video controls on all platforms */
                video::-webkit-media-controls {
                    display: none !important;
                }
                video::--webkit-media-controls-panel {
                    display: none !important;
                }
                @supports (-webkit-appearance: none) {
                    video {
                        -webkit-appearance: none;
                    }
                }
            `}</style>

            {/* Fullscreen video */}
            <video
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
            />

            {/* Gradient overlay — heavy at bottom for legibility */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.28) 100%)',
            }} />

            {/* ── TOP BAR ── */}
            <header style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 30,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '20px 28px',
            }}>
                {/* Hamburger */}
                <button
                    onClick={() => setOpen(true)}
                    aria-label="Open navigation"
                    style={{
                        display: 'flex', flexDirection: 'column', gap: 6, padding: 8,
                        background: 'none', border: 'none', cursor: 'pointer',
                        opacity: open ? 0 : 1,
                        pointerEvents: open ? 'none' : 'auto',
                        transition: 'opacity 0.3s ease',
                    }}
                    className="group"
                >
                    <span className="block w-[28px] h-[1.5px] bg-white transition-all duration-300 group-hover:w-[22px]" />
                    <span className="block w-[18px] h-[1.5px] bg-white transition-all duration-300 group-hover:w-[28px]" />
                    <span className="block w-[28px] h-[1.5px] bg-white transition-all duration-300 group-hover:w-[22px]" />
                </button>

                {/* Logo */}
                <div style={{
                    fontFamily: "'Cormorant', serif",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: '0.28em',
                    color: 'rgba(255,255,255,0.9)',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    lineHeight: 1.35,
                    userSelect: 'none',
                }}>
                    ETOH<br />HEALTH
                </div>

                <div style={{ width: 35 }} />
            </header>

            {/* ── BOTTOM CONTENT ── */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 20, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', pointerEvents: 'none' }}>

                {/* Headline + sub */}
                <div style={{ padding: isMobile ? '0 20px 20px' : '0 40px 28px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>

                    {/* Left: copy */}
                    <div style={{ pointerEvents: 'auto', flex: 1, minWidth: 0 }}>
                        <h1 style={{
                            margin: 0,
                            fontFamily: "'Cormorant SC', 'Cormorant', serif",
                            fontSize: 'clamp(24px, 8vw, 76px)',
                            fontWeight: 300,
                            lineHeight: 1.05,
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            background: 'linear-gradient(135deg, #c9a84c 0%, #f0d78a 25%, #b8922a 50%, #e8c96a 75%, #c9a84c 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            maxWidth: '100%',
                            overflowWrap: 'break-word',
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? 'translateY(0)' : 'translateY(22px)',
                            transition: 'opacity 1s ease 0.15s, transform 1s ease 0.15s',
                        }}>
                            Infrastructure for the<br />modern hospital.
                        </h1>

                    </div>

                    {/* Right: signal bars icon */}
                    <div style={{
                        display: isMobile ? 'none' : 'flex', alignItems: 'flex-end', gap: 3, paddingBottom: 6,
                        opacity: mounted ? 0.55 : 0,
                        transition: 'opacity 1s ease 0.7s',
                        pointerEvents: 'none',
                    }}>
                        {[10, 16, 22, 16, 10].map((h, i) => (
                            <div key={i} style={{ width: 3, height: h, background: 'rgba(255,255,255,0.7)', borderRadius: 1 }} />
                        ))}
                    </div>
                </div>


                {/* ── COPYRIGHT BAR ── */}
                <div style={{
                    background: 'rgba(0,0,0,0.4)',
                    padding: isMobile ? '9px 20px' : '9px 40px',
                    display: 'flex', alignItems: isMobile ? 'flex-start' : 'center',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between', gap: isMobile ? 6 : 0,
                    pointerEvents: 'auto',
                    opacity: mounted ? 1 : 0,
                    transition: 'opacity 1s ease 0.9s',
                }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.03em' }}>
                        © 2026 ETOH Health
                    </span>
                    <div style={{ display: 'flex', gap: isMobile ? 12 : 24, flexWrap: 'wrap' }}>
                        {['Terms of Use', 'Privacy Policy'].map(item => (
                            <a key={item} href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)', textDecoration: 'none', letterSpacing: '0.03em' }}>
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <Sidebar open={open} onClose={() => setOpen(false)} />
            <CrawlableNav />
        </div>
    )
}
