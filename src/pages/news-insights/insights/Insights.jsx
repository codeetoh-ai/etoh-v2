import { useRef, useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import PageLayout from '../../../components/PageLayout'
import { useResponsive } from '../../../hooks/useResponsive'
import { useInsights } from '../../../context/InsightsContext'
import doctor1 from '../../the-system/for-patients/pre-admission/assets/doctor1.png'
import doctor2 from '../../the-system/for-patients/pre-admission/assets/doctor2.png'

const ease = [0.22, 1, 0.36, 1]
const sharp = [0.25, 0.46, 0.45, 0.94]

// ── typewriter headline: types the full headline line by line ────────────────
const HEADLINE_LINES = [
    'We operate at scale. That',
    'vantage point produces',
    'knowledge no analyst can',
    'manufacture from the',
    'outside.',
]
const HEADLINE_FULL = HEADLINE_LINES.join('\n')

function TypewriterHeadline() {
    const [count, setCount]           = useState(0)
    const [showCursor, setShowCursor] = useState(true)
    const [cursorFading, setCursorFading] = useState(false)
    const startedRef = useRef(false)

    useEffect(() => {
        if (startedRef.current) return
        startedRef.current = true

        let cumulative = 150  // brief pause before typing starts
        for (let i = 0; i < HEADLINE_FULL.length; i++) {
            const ch   = HEADLINE_FULL[i]
            const prev = i > 0 ? HEADLINE_FULL[i - 1] : ''
            let delay  = 28
            if (ch === '\n') delay = 80          // pause at line breaks
            if (prev === '.') delay += 220        // longer pause after sentence
            if (prev === ',') delay += 100
            cumulative += delay;
            ((idx, ms) => setTimeout(() => setCount(idx + 1), ms))(i, cumulative)
        }
        // cursor fades out after typing ends
        setTimeout(() => setCursorFading(true), cumulative + 1400)
        setTimeout(() => setShowCursor(false),  cumulative + 2200)
    }, [])

    // Split typed text back into lines for rendering
    const typed = HEADLINE_FULL.slice(0, count)
    const lines  = typed.split('\n')
    // Pad to always render all 5 line slots so layout doesn't jump
    while (lines.length < HEADLINE_LINES.length) lines.push('')

    return (
        <>
            {lines.map((line, i) => (
                <span key={i} style={{ display: 'block' }}>
                    {line}
                    {/* cursor sits after last char on the active line */}
                    {i === lines.length - 1 && showCursor && (
                        <span style={{
                            display: 'inline-block',
                            width: 0,
                            borderRight: '3px solid #1FC9C3',
                            height: '0.82em',
                            verticalAlign: 'text-bottom',
                            marginLeft: 4,
                            opacity: cursorFading ? 0 : 1,
                            transition: cursorFading ? 'opacity 0.8s ease' : 'none',
                            animation: !cursorFading ? 'cursorBlink 0.75s ease-in-out infinite' : 'none',
                        }} />
                    )}
                </span>
            ))}
        </>
    )
}

// ── metric-count: animates 0 → end ──────────────────────────────────────────
function CountUp({ end, duration = 1.2, active, decimals = 0, suffix = '' }) {
    const [value, setValue] = useState(0)
    const startedRef = useRef(false)

    useEffect(() => {
        if (!active || startedRef.current) return
        startedRef.current = true
        const startTime = performance.now()
        const tick = (now) => {
            const t = Math.min((now - startTime) / (duration * 1000), 1)
            const eased = 1 - Math.pow(1 - t, 3)
            setValue(parseFloat((end * eased).toFixed(decimals)))
            if (t < 1) requestAnimationFrame(tick)
            else setValue(end)
        }
        requestAnimationFrame(tick)
    }, [active])

    return <>{decimals > 0 ? value.toFixed(decimals) : value}{suffix}</>
}

// ────────────────────────────────────────────────────────────────────────────
const insightTypeLabels = {
    whitepaper: 'Whitepaper',
    report: 'Report',
    research_brief: 'Research Brief',
    case_study: 'Case Study',
}

const insightTypeColors = {
    whitepaper: { bg: '#EEF2FF', color: '#4F46E5' },
    report: { bg: '#FEF3C7', color: '#D97706' },
    research_brief: { bg: '#E7F6F6', color: '#006970' },
    case_study: { bg: '#FCE7F3', color: '#DB2777' },
}

export default function InsightsPage() {
    const navigate = useNavigate()
    const { isMobile } = useResponsive()
    const { insights, loading: insightsLoading } = useInsights()
    const insightsGridRef = useRef(null)
    const insightsGridInView = useInView(insightsGridRef, { once: true, amount: 0.1 })
    const sectionHeaderRef = useRef(null)
    const metricCardRef    = useRef(null)
    const lowerGridRef     = useRef(null)
    const rightCardsRef    = useRef(null)
    const accessRef        = useRef(null)
    const hubRef           = useRef(null)

    const sectionHeaderInView = useInView(sectionHeaderRef, { once: true, amount: 0.4 })
    const metricCardInView    = useInView(metricCardRef,    { once: true, amount: 0.3 })
    const lowerGridInView     = useInView(lowerGridRef,     { once: true, amount: 0.2 })
    const rightCardsInView    = useInView(rightCardsRef,    { once: true, amount: 0.15 })
    const accessInView        = useInView(accessRef,        { once: true, amount: 0.2 })

    // hub parallax state
    const [hubXY, setHubXY] = useState({ x: 0, y: 0 })
    const handleHubMove  = useCallback((e) => {
        const r = hubRef.current?.getBoundingClientRect()
        if (!r) return
        setHubXY({
            x: ((e.clientX - r.left - r.width  / 2) / r.width)  * 8,
            y: ((e.clientY - r.top  - r.height / 2) / r.height) * 6,
        })
    }, [])
    const handleHubLeave = useCallback(() => setHubXY({ x: 0, y: 0 }), [])

    return (
        <PageLayout title="" fullWidth={true} lightHero>
            {/* ── global styles ── */}
            <style>{`
                @keyframes glassSweep {
                    0%   { left: -70%; }
                    100% { left: 140%; }
                }
                @keyframes nodePulse {
                    0%, 100% { box-shadow: 0 0 0 0   rgba(31,201,195,0);    }
                    50%       { box-shadow: 0 0 0 10px rgba(31,201,195,0.18); }
                }
                @keyframes underlineExpand {
                    from { width: 0; }
                    to   { width: 100%; }
                }
                @keyframes cursorBlink {
                    0%, 100% { opacity: 1; }
                    50%      { opacity: 0; }
                }

                /* glass-sweep on dark cards */
                .dark-intel-card { position: relative; overflow: hidden; }
                .dark-intel-card::after {
                    content: '';
                    position: absolute; top: 0; left: -70%;
                    width: 50%; height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
                    pointer-events: none;
                    animation: glassSweep 8s ease-in-out infinite;
                    animation-delay: 2s;
                }

                /* hover-raise on white cards */
                .hover-raise {
                    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
                    cursor: default;
                }
                .hover-raise:hover {
                    transform: translateY(-6px);
                    box-shadow: 0px 20px 40px -8px rgba(0,0,0,0.11);
                }
                .hover-raise-border:hover {
                    border-color: rgba(0,105,112,0.35) !important;
                }

                /* node-activate pulse on dark card icon */
                .node-pulse {
                    animation: nodePulse 3.5s ease-in-out infinite;
                    animation-delay: 2.2s;
                    border-radius: 50%;
                    display: inline-flex;
                }

                /* active teal tab underline */
                .tab-active {
                    position: relative;
                    display: inline-block;
                }
                .tab-active::after {
                    content: '';
                    position: absolute; bottom: -4px; left: 0;
                    height: 2px; background: #006970;
                    animation: underlineExpand 0.45s ease forwards;
                    animation-delay: 0.5s;
                    width: 0;
                }

                /* arrow-shift on Q3 footer */
                .arrow-shift { display: flex; align-items: center; }
                .arrow-shift svg { transition: transform 0.18s ease; }
                .arrow-shift:hover svg { transform: translateX(5px); }

                /* button hovers */
                .btn-dark  { transition: transform 0.15s ease, box-shadow 0.15s ease; }
                .btn-dark:hover  { transform: translateY(-2px); box-shadow: 0 8px 20px -4px rgba(0,23,54,0.35); }
                .btn-ghost { transition: transform 0.15s ease, outline-color 0.2s ease; }
                .btn-ghost:hover { transform: translateY(-2px); outline-color: rgba(0,105,112,0.45) !important; }
            `}</style>

            <div style={{ paddingLeft: isMobile ? 16 : 24, paddingRight: isMobile ? 16 : 24, width: '100%', boxSizing: 'border-box' }}>

                {/* ══ SECTION 1 — Hero ══════════════════════════════════════════ */}
                <div style={{ paddingTop: isMobile ? 48 : 80, paddingBottom: isMobile ? 48 : 96, display: 'flex', flexDirection: 'column', gap: 24 }}>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.45, ease: sharp }}
                        style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: '#96F1FA', borderRadius: 12, display: 'inline-flex', alignSelf: 'flex-start' }}
                    >
                        <span style={{ color: '#006F77', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2 }}>
                            Proprietary Vantage
                        </span>
                    </motion.div>

                    {/* typing headline */}
                    <div style={{ paddingBottom: 8 }}>
                        <h1 style={{ margin: 0, color: '#001736', fontSize: isMobile ? 22 : 72, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '30px' : '72px', minHeight: isMobile ? 'auto' : '360px', wordBreak: 'break-word', overflowWrap: 'break-word', maxWidth: '100%' }}>
                            <TypewriterHeadline />
                        </h1>
                    </div>

                    {/* signal-draw: teal line width 0 → 96, fires after typing */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 0.65, ease: ease, delay: 4.2 }}
                        style={{ height: 4, background: '#006970' }}
                    />
                </div>

                {/* ══ SECTION 2 — Two columns ═══════════════════════════════════ */}
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 40 : 32, paddingBottom: isMobile ? 48 : 96 }}>

                    {/* ── Left column ─────────────────────────────────── */}
                    <div ref={sectionHeaderRef} style={{ flex: 1.4, display: 'flex', flexDirection: 'column', gap: 32 }}>

                        {/* tab-fade: section headers */}
                        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'baseline', gap: isMobile ? 4 : 0 }}>
                            <motion.span
                                initial={{ opacity: 0, y: 8 }}
                                animate={sectionHeaderInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, ease: sharp }}
                                style={{ color: '#001736', fontSize: 24, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '32px' }}
                            >
                                System Intelligence
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 8 }}
                                animate={sectionHeaderInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, ease: sharp, delay: 0.1 }}
                                className={sectionHeaderInView ? 'tab-active' : ''}
                                style={{ color: '#006970', fontSize: 12, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20 }}
                            >
                                Real-time Operational Flow
                            </motion.span>
                        </div>

                        {/* ── Main metric card — dashboard wake-up ── */}
                        <div ref={metricCardRef}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={metricCardInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, ease: ease }}
                                className="hover-raise hover-raise-border"
                                style={{ position: 'relative', background: 'white', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', overflow: 'hidden', borderRadius: 8, padding: isMobile ? 20 : 34, borderLeft: '2px transparent solid' }}
                            >
                                {/* border-grow: left teal bar scaleY 0 → 1 */}
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    animate={metricCardInView ? { scaleY: 1 } : {}}
                                    transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
                                    style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: '#006970', transformOrigin: 'top', borderRadius: '2px 0 0 2px' }}
                                />

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: isMobile ? 32 : 64 }}>
                                    {/* icon appears */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.75 }}
                                        animate={metricCardInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.4, ease: ease, delay: 0.3 }}
                                        style={{ padding: 16, background: '#E7E8E9', borderRadius: 4, display: 'inline-flex' }}
                                    >
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <ellipse cx="11" cy="6" rx="9" ry="4" stroke="#001736" strokeWidth="1.5" />
                                            <path d="M2 6v5c0 2.21 4.03 4 9 4s9-1.79 9-4V6" stroke="#001736" strokeWidth="1.5" />
                                            <path d="M2 11v5c0 2.21 4.03 4 9 4s9-1.79 9-4v-5" stroke="#001736" strokeWidth="1.5" />
                                        </svg>
                                    </motion.div>

                                    {/* metric-count 0 → 94.2% */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={metricCardInView ? { opacity: 1 } : {}}
                                        transition={{ duration: 0.3, delay: 0.42 }}
                                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
                                    >
                                        <span style={{ textAlign: 'right', color: '#001736', fontSize: isMobile ? 26 : 36, fontFamily: 'Manrope', fontWeight: 900, lineHeight: isMobile ? '32px' : '40px' }}>
                                            <CountUp end={94.2} duration={1.2} active={metricCardInView} decimals={1} suffix="%" />
                                        </span>
                                        <span style={{ textAlign: 'right', color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px' }}>
                                            Standardization Index
                                        </span>
                                    </motion.div>
                                </div>

                                {/* body text fades in */}
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={metricCardInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, ease: sharp, delay: 0.58 }}
                                >
                                    <div style={{ marginBottom: 12, color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '28px' }}>
                                        Operational patterns across deployed facilities.
                                    </div>
                                    <div style={{ marginBottom: 24, color: '#43474F', fontSize: 16, fontFamily: 'Inter', fontWeight: 400, lineHeight: '26px' }}>
                                        Our network architecture allows us to observe non-obvious correlations between facility staffing ratios and patient outcome stability that singular entities overlook.
                                    </div>
                                </motion.div>

                                {/* chip-stagger */}
                                <div style={{ display: 'flex', gap: 8 }}>
                                    {['Network Load', 'Efficiency Delta'].map((chip, i) => (
                                        <motion.div
                                            key={chip}
                                            initial={{ opacity: 0, y: 6, scale: 0.88 }}
                                            animate={metricCardInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                            transition={{ duration: 0.3, ease: sharp, delay: 0.78 + i * 0.1 }}
                                            style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: '#EDEEEF', borderRadius: 2 }}
                                        >
                                            <span style={{ color: '#191C1D', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1 }}>
                                                {chip}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* ── grid-wave: lower two cards ── */}
                        <div ref={lowerGridRef} style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 16 }}>

                            {/* node-activate: dark 320+ card */}
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={lowerGridInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, ease: ease, delay: 0 }}
                                className="dark-intel-card"
                                style={{ flex: 1, padding: 24, background: '#001736', borderRadius: 8, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: 200, cursor: 'default' }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={lowerGridInView ? { opacity: 0.20, scale: 1 } : {}}
                                    transition={{ duration: 0.5, ease: ease, delay: 0.28 }}
                                    className="node-pulse"
                                    style={{ position: 'absolute', top: 16, right: 24 }}
                                >
                                    <svg width="55" height="43" viewBox="0 0 55 43" fill="none">
                                        <path d="M0 43L27.5 0L55 43H0Z" fill="white" />
                                    </svg>
                                </motion.div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, position: 'relative', zIndex: 1 }}>
                                    <div style={{ color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: 600, lineHeight: '32px' }}>320+ Units</div>
                                    <div style={{ color: '#7594CA', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px' }}>
                                        Coordinated facility nodes<br />providing continuous feedback<br />loops.
                                    </div>
                                </div>
                            </motion.div>

                            {/* chart-rise: Predictive Staffing */}
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={lowerGridInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, ease: ease, delay: 0.08 }}
                                className="hover-raise"
                                style={{ flex: 1, padding: 24, background: '#F3F4F5', borderRadius: 8, outline: '1px rgba(196,198,208,0.10) solid', outlineOffset: '-1px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 200, overflow: 'hidden' }}
                            >
                                {/* chart bar grows upward from bottom */}
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    animate={lowerGridInView ? { scaleY: 1 } : {}}
                                    transition={{ duration: 0.6, ease: ease, delay: 0.22 }}
                                    style={{ alignSelf: 'stretch', height: 27, background: '#006970', transformOrigin: 'bottom' }}
                                />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto', paddingTop: 24 }}>
                                    <div style={{ color: '#001736', fontSize: 16, fontFamily: 'Inter', fontWeight: 600, lineHeight: '24px' }}>Predictive Staffing</div>
                                    <div style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, lineHeight: '16px' }}>
                                        Advanced algorithms predicting surge requirements 72 hours in advance based on system-wide trends.
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* ── Right column ─────────────────────────────────── */}
                    <div ref={rightCardsRef} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>

                        {/* tab-fade: header */}
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            animate={sectionHeaderInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, ease: sharp, delay: 0.15 }}
                            style={{ color: '#001736', fontSize: 24, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '32px', display: 'block' }}
                        >
                            Clinical Perspectives
                        </motion.span>

                        {/* feed-slide: testimonial card 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            animate={rightCardsInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, ease: ease, delay: 0 }}
                            className="hover-raise"
                            style={{ background: 'white', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: 8, outline: '1px rgba(196,198,208,0.05) solid', outlineOffset: '-1px', overflow: 'hidden' }}
                        >
                            <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 15 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                    {/* avatar scale 0.9 → 1 */}
                                    <motion.div
                                        initial={{ scale: 0.9 }}
                                        animate={rightCardsInView ? { scale: 1 } : {}}
                                        transition={{ duration: 0.4, ease: ease, delay: 0.18 }}
                                        style={{ width: 48, height: 48, background: '#E7E8E9', overflow: 'hidden', borderRadius: 12, flexShrink: 0 }}
                                    >
                                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={doctor1} alt="Dr. Elias Thorne" />
                                    </motion.div>
                                    <div>
                                        <div style={{ color: '#001736', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, lineHeight: '20px' }}>Dr. Elias Thorne</div>
                                        <div style={{ color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1 }}>Chief Clinical Officer</div>
                                    </div>
                                </div>
                                <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22.75px' }}>
                                    &quot;Where clinical advisors and facility leadership have a view, we see the transition from raw data into actionable wisdom. We aren&apos;t just observing; we are sculpting the future of care.&quot;
                                </div>
                            </div>
                            {/* arrow-shift footer — proper arrow SVG */}
                            <div
                                className="arrow-shift"
                                style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: '#F3F4F5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                            >
                                <span style={{ color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1 }}>
                                    Q3 Protocol Review
                                </span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </motion.div>

                        {/* feed-slide: testimonial card 2 — 150ms later */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            animate={rightCardsInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, ease: ease, delay: 0.15 }}
                            className="hover-raise"
                            style={{ padding: 24, background: 'white', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: 8, outline: '1px rgba(196,198,208,0.05) solid', outlineOffset: '-1px', display: 'flex', flexDirection: 'column', gap: 14 }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                <motion.div
                                    initial={{ scale: 0.9 }}
                                    animate={rightCardsInView ? { scale: 1 } : {}}
                                    transition={{ duration: 0.4, ease: ease, delay: 0.32 }}
                                    style={{ width: 48, height: 48, background: '#E7E8E9', overflow: 'hidden', borderRadius: 12, flexShrink: 0 }}
                                >
                                    <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={doctor2} alt="Sarah Jenkins" />
                                </motion.div>
                                <div>
                                    <div style={{ color: '#001736', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, lineHeight: '20px' }}>Sarah Jenkins</div>
                                    <div style={{ color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1 }}>Head of Operational Excellence</div>
                                </div>
                            </div>
                            <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22.75px' }}>
                                &quot;The scalability of our insights is what separates us from consultants. We live the operational reality every hour.&quot;
                            </div>
                        </motion.div>

                        {/* hub-reveal: Global Operations Hub — scale + parallax */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={rightCardsInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.55, ease: ease, delay: 0.25 }}
                            style={{ position: 'relative', overflow: 'hidden', borderRadius: 16 }}
                        >
                            {/* scale-down reveal wrapper */}
                            <motion.div
                                initial={{ scale: 1.06 }}
                                animate={rightCardsInView ? { scale: 1 } : {}}
                                transition={{ duration: 0.9, ease: ease }}
                            >
                                {/* parallax layer */}
                                <div
                                    ref={hubRef}
                                    onMouseMove={handleHubMove}
                                    onMouseLeave={handleHubLeave}
                                    style={{
                                        transform: `translate(${hubXY.x}px, ${hubXY.y}px) scale(1.04)`,
                                        transition: 'transform 0.28s ease',
                                    }}
                                >
                                    <img
                                        style={{ width: '100%', height: 259, objectFit: 'cover', display: 'block' }}
                                        src="https://placehold.co/600x259/001736/001736"
                                        alt="Global Operations Hub"
                                    />
                                </div>
                            </motion.div>
                            <div style={{ position: 'absolute', inset: 0, padding: 32, background: 'linear-gradient(0deg, rgba(0,23,54,0.80) 0%, rgba(0,23,54,0) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', pointerEvents: 'none' }}>
                                <div style={{ color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: 600, lineHeight: '22.5px' }}>Global Operations Hub</div>
                                <div style={{ paddingTop: 4, color: '#96F1FA', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, lineHeight: '16px' }}>Direct telemetric feed from 42 states</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ══ SECTION 3 — Access the Full Architecture ══════════════════ */}
                <div
                    ref={accessRef}
                    style={{ paddingTop: isMobile ? 40 : 80, paddingBottom: isMobile ? 40 : 48, paddingLeft: isMobile ? 24 : 48, paddingRight: isMobile ? 24 : 48, position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 24, display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: isMobile ? 32 : 48, marginBottom: 48 }}
                >
                    <div style={{ position: 'absolute', right: 0, top: 32, bottom: 0, width: '50%', background: 'linear-gradient(270deg, rgba(0,105,112,0.05) 0%, rgba(0,105,112,0) 100%)', pointerEvents: 'none' }} />

                    {/* portal-rise: left block */}
                    <motion.div
                        initial={{ opacity: 0, y: 22 }}
                        animate={accessInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.65, ease: ease }}
                        style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, position: 'relative', zIndex: 1 }}
                    >
                        <div style={{ color: '#001736', fontSize: isMobile ? 24 : 30, fontFamily: 'Manrope', fontWeight: 700, lineHeight: isMobile ? '30px' : '36px' }}>
                            Access the Full<br />Architecture
                        </div>
                        <div style={{ color: '#43474F', fontSize: isMobile ? 15 : 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: isMobile ? '24px' : '29.25px' }}>
                            Our proprietary Insights portal is restricted to authorized facility leadership and strategic partners. Get full access to live operational deltas and clinical benchmarks.
                        </div>
                        <div style={{ paddingTop: 8, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                            <div className="btn-dark" style={{ paddingTop: 12, paddingBottom: 13, paddingLeft: 32, paddingRight: 32, background: '#001736', borderRadius: 6, display: 'flex', cursor: 'pointer' }}>
                                <span style={{ color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, lineHeight: '20px' }}>Request Access</span>
                            </div>
                            <div className="btn-ghost" style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 12, paddingBottom: 12, borderRadius: 6, outline: '1px #C4C6D0 solid', outlineOffset: '-1px', display: 'flex', cursor: 'pointer' }}>
                                <span style={{ color: '#001736', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, lineHeight: '20px' }}>Documentation</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* stat-reveal: stats grid with count-up */}
                    <div style={{ flex: 1, width: isMobile ? '100%' : undefined, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, position: 'relative', zIndex: 1 }}>
                        {[
                            { raw: 1.2,  suffix: 'M+', label: 'Daily Data Points',   countable: true,  decimals: 1, delay: 0.12 },
                            { raw: 15,   suffix: 'ms', label: 'Processing\nLatency', countable: true,  decimals: 0, delay: 0.22 },
                            { raw: null, suffix: '',   label: 'Active Monitoring',   countable: false, text: '24/7', delay: 0.32 },
                            { raw: null, suffix: '',   label: 'External Reliance',   countable: false, text: 'Zero', delay: 0.42 },
                        ].map((stat) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 16 }}
                                animate={accessInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, ease: sharp, delay: stat.delay }}
                                style={{ padding: 24, background: '#F3F4F5', borderRadius: 8, display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ color: '#006970', fontSize: 24, fontFamily: 'Inter', fontWeight: 600, lineHeight: '32px' }}>
                                    {stat.countable
                                        ? <CountUp end={stat.raw} duration={1.2} active={accessInView} decimals={stat.decimals} suffix={stat.suffix} />
                                        : stat.text}
                                </div>
                                <div style={{ color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, whiteSpace: 'pre-line' }}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ══ SECTION 4 — Published Insights Grid ═════════════════════════ */}
                {!insightsLoading && insights.length > 0 && (
                    <div ref={insightsGridRef} style={{ paddingTop: isMobile ? 40 : 64, paddingBottom: isMobile ? 48 : 80, display: 'flex', flexDirection: 'column', gap: 40 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={insightsGridInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: sharp }}
                            style={{ paddingBottom: 16, borderBottom: '1px rgba(196, 198, 208, 0.20) solid', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}
                        >
                            <span style={{ color: '#001736', fontSize: 28, fontFamily: 'Manrope', fontWeight: 800, lineHeight: '36px' }}>PUBLISHED INSIGHTS</span>
                            <span style={{ color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 3 }}>Whitepapers, Reports & Research</span>
                        </motion.div>

                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? 32 : 28 }}>
                            {insights.slice(0, 6).map((item, i) => {
                                const tc = insightTypeColors[item.insightType] || { bg: '#E7E8E9', color: '#43474F' }
                                return (
                                    <motion.div
                                        key={item.slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={insightsGridInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, ease: ease, delay: 0.1 + i * 0.08 }}
                                        style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                                        onClick={() => navigate(`/news-insights/insights/${item.slug}`)}
                                    >
                                        {item.heroImage && (
                                            <div style={{ background: '#E7E8E9', overflow: 'hidden', marginBottom: 20, borderRadius: 4 }}>
                                                <img style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} src={item.heroImage} alt={item.title} />
                                            </div>
                                        )}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                                            <span style={{ display: 'inline-block', padding: '3px 10px', background: tc.bg, borderRadius: 20, color: tc.color, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                                {insightTypeLabels[item.insightType] || item.insightType}
                                            </span>
                                            <span style={{ color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1 }}>
                                                {item.category}
                                            </span>
                                        </div>
                                        <div style={{ color: '#001736', fontSize: 18, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '26px', marginBottom: 10 }}>
                                            {item.title}
                                        </div>
                                        <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '21px', marginBottom: 16, flex: 1 }}>
                                            {item.excerpt || ''}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <span style={{ color: '#43474F', fontSize: 11, fontFamily: 'Inter', fontWeight: 500 }}>
                                                {item.author.name} · {item.date}
                                            </span>
                                            <span style={{ color: '#001736', fontSize: 12, fontFamily: 'Inter', fontWeight: 600, textDecoration: 'underline', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20 }}>
                                                READ
                                            </span>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                )}

            </div>
        </PageLayout>
    )
}
