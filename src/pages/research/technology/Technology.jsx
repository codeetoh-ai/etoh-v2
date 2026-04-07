import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import PageLayout from '../../../components/PageLayout'
import { useResponsive } from '../../../hooks/useResponsive'
import heroImg from './hero1.png'
import IconSvg from './iconsvg'

const ease = [0.22, 1, 0.36, 1]
const sharp = [0.25, 0.46, 0.45, 0.94]

const benchmarks = [
    { label: 'Algorithm Specificity (Validated)', value: '89.2%', width: '89%', color: '#006970' },
    { label: 'Inference Latency (Avg)', value: '240ms', width: '95%', color: '#006970' },
    { label: 'False Discovery Rate', value: 'Low (6.4%)', width: '6%', color: '#BA1A1A' },
]

const resources = [
    { icon: 'doc', title: 'Technical Architecture Overview', meta: 'PDF · 4.2 MB · v2.4', action: 'Download' },
    { icon: 'chart', title: 'AI Clinical Validation Study', meta: 'PDF · 8.1 MB · 2024', action: 'Download' },
    { icon: 'api', title: 'API Integration Guide', meta: 'HTML · Dev Docs', action: 'Read Online' },
    { icon: 'shield', title: 'Cybersecurity Architecture', meta: 'PDF · 2.1 MB · v1.9', action: 'Download' },
]

const complianceTags = ['ISO 27001', 'HIPAA Compliant', 'SOC2 Type II']

const QUOTE_TEXT = '"Transparency about methodology is not a weakness in a clinical technology platform. It is the minimum standard of intellectual honesty."'

function TypewriterQuote({ active, isMobile }) {
    const [count, setCount] = useState(0)
    const [showCursor, setShowCursor] = useState(false)
    const [cursorFading, setCursorFading] = useState(false)
    const startedRef = useRef(false)

    const slowStart = QUOTE_TEXT.indexOf('minimum standard')
    const pauseAt = QUOTE_TEXT.indexOf('not a weakness')

    useEffect(() => {
        if (!active || startedRef.current) return
        startedRef.current = true

        // Wait for divider-grow animation then show cursor
        const t1 = setTimeout(() => {
            setShowCursor(true)

            // 200ms pause — cursor visible, not yet typing
            let cumulative = 200

            for (let i = 0; i < QUOTE_TEXT.length; i++) {
                const prev = i > 0 ? QUOTE_TEXT[i - 1] : ''
                let delay = i >= slowStart ? 44 : 28

                if (prev === ',') delay += 150
                if (prev === '.') delay += 300
                if (i === pauseAt) delay += 200  // deliberate pause before "not a weakness"

                cumulative += delay;
                ((idx, ms) => setTimeout(() => setCount(idx + 1), ms))(i, cumulative)
            }

            // Cursor blinks then fades after typing completes
            setTimeout(() => setCursorFading(true), cumulative + 1600)
            setTimeout(() => setShowCursor(false), cumulative + 2500)
        }, 600)

        return () => clearTimeout(t1)
    }, [active])

    // Render char by char; whole-word color transition once word completes (word-confirm)
    const chars = QUOTE_TEXT.split('').map((char, i) => {
        const typed = count > i
        // Find word end: next space or end of string
        const nextSpace = QUOTE_TEXT.indexOf(' ', i)
        const wordEnd = nextSpace === -1 ? QUOTE_TEXT.length : nextSpace
        const wordDone = count >= wordEnd

        const color = typed
            ? (wordDone ? '#002B5B' : 'rgba(0,43,91,0.38)')
            : 'transparent'

        return (
            <span
                key={i}
                style={{
                    color,
                    transition: wordDone && typed ? 'color 0.4s ease' : 'none',
                }}
            >
                {char}
            </span>
        )
    })

    return (
        <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: isMobile ? 20 : 30, lineHeight: isMobile ? '30px' : '36px', margin: 0 }}>
            {chars}
            {showCursor && (
                <span style={{
                    display: 'inline-block',
                    width: 0,
                    borderRight: '2px solid #1FC9C3',
                    height: '0.85em',
                    verticalAlign: 'text-bottom',
                    marginLeft: 3,
                    opacity: cursorFading ? 0 : 1,
                    transition: cursorFading ? 'opacity 0.9s ease' : 'none',
                    animation: !cursorFading ? 'cursorBlink 0.8s ease-in-out infinite' : 'none',
                }} />
            )}
        </p>
    )
}

function ResourceIcon({ type }) {
    const icons = {
        doc: <svg width="16" height="20" viewBox="0 0 16 20" fill="none"><path d="M10 1H3C1.9 1 1 1.9 1 3V17C1 18.1 1.9 19 3 19H13C14.1 19 15 18.1 15 17V6L10 1Z" stroke="#001736" strokeWidth="1.5" strokeLinejoin="round"/><path d="M10 1V6H15" stroke="#001736" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
        chart: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="1" y="8" width="4" height="9" rx="1" stroke="#001736" strokeWidth="1.5"/><rect x="7" y="1" width="4" height="16" rx="1" stroke="#001736" strokeWidth="1.5"/><rect x="13" y="5" width="4" height="12" rx="1" stroke="#001736" strokeWidth="1.5"/></svg>,
        api: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#001736" strokeWidth="1.5"/><path d="M7 11H15M11 7V15" stroke="#001736" strokeWidth="1.5" strokeLinecap="round"/></svg>,
        shield: <svg width="16" height="20" viewBox="0 0 16 20" fill="none"><path d="M8 1L1 4.5V9.5C1 14.2 3.87 18.55 8 19.5C12.13 18.55 15 14.2 15 9.5V4.5L8 1Z" stroke="#001736" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
    }
    return icons[type] || icons.doc
}

export default function TechnologyPage() {
    const { isMobile } = useResponsive()
    const quoteRef = useRef(null)
    const backboneRef = useRef(null)
    const validationRef = useRef(null)
    const resourcesRef = useRef(null)
    const ctaRef = useRef(null)

    const quoteInView = useInView(quoteRef, { once: true, amount: 0.6 })
    const backboneInView = useInView(backboneRef, { once: true, amount: 0.15 })
    const validationInView = useInView(validationRef, { once: true, amount: 0.2 })
    const resourcesInView = useInView(resourcesRef, { once: true, amount: 0.2 })
    const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

    return (
        <PageLayout fullWidth lightHero seoTitle="Technology" seoDescription="ETOH Health's technology stack — AI-powered clinical decision support, real-time data architecture, enterprise security, and APIs powering modern hospital operations.">
            <style>{`
                @keyframes glassSweep {
                    0%   { left: -70%; }
                    100% { left: 140%; }
                }
                .dark-card {
                    position: relative;
                    overflow: hidden;
                }
                .dark-card::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -70%;
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
                    pointer-events: none;
                    animation: glassSweep 8s ease-in-out infinite;
                    animation-delay: 2.5s;
                }
                .card-hover-lift {
                    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
                }
                .card-hover-lift:hover {
                    transform: translateY(-4px);
                    box-shadow: 0px 16px 32px -8px rgba(0,0,0,0.10);
                    border-color: #1FC9C3 !important;
                }
                .dark-hover {
                    transition: transform 0.18s ease, box-shadow 0.18s ease;
                }
                .dark-hover:hover {
                    transform: translateY(-4px);
                    box-shadow: 0px 20px 40px -8px rgba(0,0,0,0.40);
                }
                .resource-card {
                    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
                    cursor: pointer;
                }
                .resource-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0px 12px 24px -6px rgba(0,0,0,0.10);
                    border-color: #006970 !important;
                }
                .resource-card:hover .arrow-icon {
                    transform: translateX(4px);
                }
                .arrow-icon {
                    transition: transform 0.18s ease;
                }
                .btn-teal {
                    transition: transform 0.15s ease, box-shadow 0.15s ease;
                }
                .btn-teal:hover {
                    transform: translateY(-2px);
                    box-shadow: 0px 8px 20px -4px rgba(0,105,112,0.40);
                }
                .btn-outline-light {
                    transition: transform 0.15s ease, outline-color 0.2s ease;
                }
                .btn-outline-light:hover {
                    transform: translateY(-2px);
                    outline-color: rgba(125,244,255,0.5) !important;
                }
                @keyframes cursorBlink {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0; }
                }
            `}</style>

            <div style={{ fontFamily: "'Inter', sans-serif" }}>

                {/* ── Section 1: Hero ── */}
                <div style={{ background: '#F8F9FA', padding: isMobile ? '64px 20px' : '128px 24px', overflow: 'hidden' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'flex-start', gap: isMobile ? 32 : 64 }}>
                        {/* Left copy */}
                        <div style={{ maxWidth: isMobile ? '100%' : 620, display: 'flex', flexDirection: 'column', gap: 24, flexShrink: 0 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.5, ease: sharp }}
                                style={{ display: 'inline-flex', alignSelf: 'flex-start', padding: '4px 12px', background: '#96F1FA', borderRadius: 2 }}
                            >
                                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 10, lineHeight: '15px', letterSpacing: 1, textTransform: 'uppercase', color: '#004F54' }}>
                                    Architectural Blueprint
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: ease, delay: 0.1 }}
                                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: isMobile ? 36 : 72, lineHeight: isMobile ? '42px' : '72px', margin: 0 }}
                            >
                                <span style={{ color: '#001736' }}>The architecture behind the system.</span>
                                <br />
                                <span style={{ color: '#006970' }}>Transparent by design.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: ease, delay: 0.25 }}
                                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: isMobile ? 16 : 20, lineHeight: isMobile ? '26px' : '28px', color: '#43474F', maxWidth: 576, margin: 0, paddingTop: 8 }}
                            >
                                ETOH publishes technical documentation for clinical AI researchers, health informaticists, and hospital technology leadership who want to understand not just what the platform does, but how it works.
                            </motion.p>
                        </div>

                        {/* Right image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30, scale: 0.97 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: ease, delay: 0.2 }}
                            style={{ flex: 1, position: 'relative', display: isMobile ? 'none' : undefined }}
                        >
                            <div style={{ position: 'absolute', left: -22, top: 1, width: 613, height: 422, background: 'rgba(0,23,54,0.05)', borderRadius: 8, transform: 'rotate(-2deg)' }} />
                            <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)', outline: '1px solid rgba(196,198,208,0.20)' }}>
                                <img src={heroImg} alt="System Architecture" style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block', opacity: 0.9 }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,23,54,0.40) 0%, rgba(0,23,54,0) 100%)' }} />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ── Section 2: Quote — clinical-typewriter ── */}
                <div style={{ background: '#F3F4F5', padding: isMobile ? '48px 20px' : '80px 216px' }}>
                    <div ref={quoteRef} style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 0 }}>
                        {/* divider-grow */}
                        <motion.div
                            initial={{ scaleY: 0 }}
                            animate={quoteInView ? { scaleY: 1 } : {}}
                            transition={{ duration: 0.45, ease: 'easeOut' }}
                            style={{ width: 4, background: '#006970', borderRadius: 2, flexShrink: 0, transformOrigin: 'top', marginRight: 32 }}
                        />
                        <TypewriterQuote active={quoteInView} isMobile={isMobile} />
                    </div>
                </div>

                {/* ── Section 3: System Operational Backbone ── */}
                <div style={{ background: '#F8F9FA', padding: isMobile ? '60px 20px' : '96px 24px' }}>
                    <div ref={backboneRef} style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: isMobile ? 40 : 64 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={backboneInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: sharp }}
                        >
                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14, lineHeight: '20px', letterSpacing: 2.8, textTransform: 'uppercase', color: '#006970', marginBottom: 16 }}>
                                Core Infrastructure
                            </div>
                            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 36, lineHeight: '40px', color: '#001736', margin: 0 }}>
                                System Operational Backbone
                            </h2>
                        </motion.div>

                        {/* Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>

                            {/* Unified Clinical Data Fabric — module-slide-left */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={backboneInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.65, ease: ease, delay: 0.1, type: 'spring', stiffness: 280, damping: 26 }}
                                className="card-hover-lift"
                                style={{ padding: 32, background: 'white', borderRadius: 12, border: '1px solid rgba(196,198,208,0.40)', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                            >
                                {/* grid-build: background diagram */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={backboneInView ? { opacity: 0.1, scale: 1 } : {}}
                                    transition={{ duration: 0.8, ease: ease, delay: 0.5 }}
                                    style={{
                                        position: 'absolute',
                                        right: isMobile ? -30 : -60,
                                        bottom: isMobile ? -20 : -40,
                                        transform: isMobile ? 'scale(0.55)' : undefined,
                                        transformOrigin: 'bottom right',
                                    }}
                                >
                                    <IconSvg />
                                </motion.div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <rect x="1" y="1" width="6" height="6" rx="1" stroke="#006970" strokeWidth="1.5" />
                                        <rect x="11" y="1" width="6" height="6" rx="1" stroke="#006970" strokeWidth="1.5" />
                                        <rect x="6" y="11" width="6" height="6" rx="1" stroke="#006970" strokeWidth="1.5" />
                                        <path d="M4 7V11M14 7V11M9 7V11" stroke="#006970" strokeWidth="1" strokeDasharray="2 2" />
                                    </svg>
                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#001736' }}>
                                        Unified Clinical Data Fabric
                                    </div>
                                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '26px', color: '#43474F', margin: 0, maxWidth: 512 }}>
                                        Our ingestion engine supports HL7 FHIR v4.0.1 natively, with a proprietary normalization layer that maps disparate EHR schemas into a high-fidelity clinical graph.
                                    </p>
                                </div>
                                <div style={{ display: 'flex', gap: 16, paddingTop: 48 }}>
                                    {complianceTags.map((tag, i) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={backboneInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.4, ease: sharp, delay: 0.55 + i * 0.07 }}
                                            style={{ padding: '4px 8px', background: '#E7E8E9', borderRadius: 2, fontFamily: "'Courier New', monospace", fontSize: 12, lineHeight: '16px', color: '#006970' }}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Zero-Trust Architecture — module-slide-right */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={backboneInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.65, ease: ease, delay: 0.22, type: 'spring', stiffness: 280, damping: 26 }}
                                className="dark-card dark-hover"
                                style={{ padding: 32, background: '#001736', borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 32 }}
                            >
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                                        <path d="M8 1L1 4.5V9.5C1 14.2 3.87 18.55 8 19.5C12.13 18.55 15 14.2 15 9.5V4.5L8 1Z" stroke="#7DF4FF" strokeWidth="1.5" strokeLinejoin="round" />
                                    </svg>
                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: 'white' }}>
                                        Zero-Trust Architecture
                                    </div>
                                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '26px', color: '#D6E3FF', margin: 0, opacity: 0.8 }}>
                                        End-to-end encryption with hardware-level security modules (HSM) for key management and automated threat detection.
                                    </p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#7DF4FF' }}>Security Whitepaper</span>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M1 9L9 1M9 1H3M9 1V7" stroke="#7DF4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </motion.div>

                            {/* Hybrid Multi-Cloud — foundation-rise */}
                            <motion.div
                                initial={{ opacity: 0, y: 32 }}
                                animate={backboneInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, ease: ease, delay: 0.38 }}
                                className="card-hover-lift"
                                style={{ padding: 32, background: '#F3F4F5', borderRadius: 12, border: '1px solid rgba(196,198,208,0.40)', display: 'flex', flexDirection: 'column', gap: 8 }}
                            >
                                <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                                    <path d="M17 15H5C2.79 15 1 13.21 1 11C1 9.14 2.28 7.59 4 7.14C4 7.09 4 7.05 4 7C4 4.24 6.24 2 9 2C11.05 2 12.82 3.23 13.58 5C13.71 5 13.85 5 14 5C16.76 5 19 7.24 19 10" stroke="#001736" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: '28px', color: '#001736', marginTop: 16 }}>
                                    Hybrid Multi-Cloud
                                </div>
                                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '22.75px', color: '#43474F', margin: 0 }}>
                                    Resilient infrastructure distributed across isolated regions to ensure 99.99% uptime for critical clinical operations.
                                </p>
                            </motion.div>

                            {/* Bi-Directional Interoperability — foundation-rise (+100ms) */}
                            <motion.div
                                initial={{ opacity: 0, y: 32 }}
                                animate={backboneInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, ease: ease, delay: 0.48 }}
                                className="card-hover-lift"
                                style={{ padding: 32, background: 'white', borderRadius: 12, border: '1px solid rgba(196,198,208,0.40)', borderLeft: '4px solid #006970', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 16 : 32 }}
                            >
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: '28px', color: '#001736', marginBottom: 8 }}>
                                        Bi-Directional Interoperability
                                    </div>
                                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '22.75px', color: '#43474F', margin: 0 }}>
                                        ETOH doesn't just read data; it writes structured clinical notes and orders back to your core system via secure, audited API gateways.
                                    </p>
                                </div>
                                <svg width="40" height="36" viewBox="0 0 40 36" fill="none">
                                    <path d="M4 12H36M36 12L28 4M36 12L28 20" stroke="#006970" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M36 24H4M4 24L12 16M4 24L12 32" stroke="#006970" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* ── Section 4: AI Validation & Boundaries ── */}
                <div style={{ background: '#F3F4F5', padding: isMobile ? '60px 20px' : '96px 24px' }}>
                    <div
                        ref={validationRef}
                        style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 32 : 48, alignItems: 'start' }}
                    >
                        {/* Left: copy + cards — clarity-rise */}
                        <motion.div
                            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                            animate={validationInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                            transition={{ duration: 0.7, ease: ease }}
                        >
                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14, lineHeight: '20px', letterSpacing: 2.8, textTransform: 'uppercase', color: '#006970', marginBottom: 16 }}>
                                Methodological Honesty
                            </div>
                            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 36, lineHeight: '40px', color: '#001736', margin: '0 0 16px' }}>
                                AI Validation &amp; Current Boundaries
                            </h2>
                            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '26px', color: '#43474F', margin: '0 0 40px' }}>
                                We believe that understanding where an AI system fails is as important as knowing where it succeeds. Our validation protocols involve rigorous internal testing and external clinical peer review.
                            </p>

                            {/* row-stagger: Current Capabilities */}
                            <motion.div
                                initial={{ opacity: 0, x: -16 }}
                                animate={validationInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, ease: sharp, delay: 0.2 }}
                                style={{ padding: 24, background: 'white', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: 2, marginBottom: 24 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="9" stroke="#006970" strokeWidth="1.5" />
                                        <path d="M6 10L9 13L14 7" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#001736' }}>Current Capabilities</span>
                                </div>
                                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F', margin: 0 }}>
                                    Validated for identifying early-stage sepsis markers with 94% sensitivity across diverse patient demographics.
                                </p>
                            </motion.div>

                            {/* row-stagger: Identified Boundaries (+150ms) */}
                            <motion.div
                                initial={{ opacity: 0, x: -16 }}
                                animate={validationInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, ease: sharp, delay: 0.35 }}
                                style={{ padding: 24, background: 'white', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: 2, opacity: 0.8 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="9" stroke="#BA1A1A" strokeWidth="1.5" />
                                        <path d="M10 6V10M10 14H10.01" stroke="#BA1A1A" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#747780' }}>Identified Boundaries</span>
                                </div>
                                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F', margin: 0 }}>
                                    Currently not validated for pediatric intensive care or high-acuity trauma triage where data streams are highly intermittent.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Right: Performance Benchmarks — graph-build */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={validationInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease: ease, delay: 0.15 }}
                            style={{ background: 'white', borderRadius: 4, boxShadow: '0px 8px 10px -6px rgba(0,0,0,0.10), 0px 20px 25px -5px rgba(0,0,0,0.10)', overflow: 'hidden' }}
                        >
                            <div style={{ padding: 16, background: '#002B5B', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: 'white' }}>
                                    Performance Benchmarks
                                </span>
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                                    <path d="M1 5.5H10M5.5 1V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div style={{ padding: '32px 24px 36px', display: 'flex', flexDirection: 'column', gap: 32 }}>
                                {benchmarks.map((b, i) => (
                                    <motion.div
                                        key={b.label}
                                        initial={{ opacity: 0, x: b.color === '#BA1A1A' ? 20 : -10 }}
                                        animate={validationInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, ease: sharp, delay: 0.35 + i * 0.12 }}
                                        style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', color: '#001736' }}>{b.label}</span>
                                            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', color: b.color }}>{b.value}</span>
                                        </div>
                                        {/* metric-fill */}
                                        <div style={{ height: 6, background: '#E7E8E9', borderRadius: 12, overflow: 'hidden' }}>
                                            <motion.div
                                                initial={{ width: '0%' }}
                                                animate={validationInView ? { width: b.width } : {}}
                                                transition={{ duration: 0.8, ease: sharp, delay: 0.5 + i * 0.12 }}
                                                style={{ height: '100%', background: b.color, borderRadius: 12 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                                <div style={{ borderTop: '1px solid rgba(196,198,208,0.20)', paddingTop: 24 }}>
                                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 10, lineHeight: '12.5px', color: '#43474F', margin: 0 }}>
                                        *Benchmarks updated October 2024. Data based on multi-site clinical validation trials involving 14,000+ patient records.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ── Section 5: Technical Resources ── */}
                <div style={{ background: '#F8F9FA', padding: isMobile ? '60px 20px' : '96px 24px' }}>
                    <div ref={resourcesRef} style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: isMobile ? 32 : 48 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={resourcesInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: sharp }}
                            style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: isMobile ? 12 : 0 }}
                        >
                            <div>
                                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: '20px', letterSpacing: 2.8, textTransform: 'uppercase', color: '#006970', marginBottom: 16 }}>
                                    Knowledge Base
                                </div>
                                <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 36, lineHeight: '40px', color: '#001736', margin: 0 }}>
                                    Technical Resources
                                </h2>
                            </div>
                            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#006970', textDecoration: 'underline', cursor: 'pointer' }}>
                                View all documentation
                            </span>
                        </motion.div>

                        {/* resource-stagger */}
                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 16 }}>
                            {resources.map((r, i) => (
                                <motion.div
                                    key={r.title}
                                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                                    animate={resourcesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                    transition={{ duration: 0.55, ease: ease, delay: i * 0.08 }}
                                    className="resource-card"
                                    style={{ padding: 25, background: 'white', borderRadius: 12, border: '1px solid rgba(196,198,208,0.40)', display: 'flex', flexDirection: 'column', gap: 0, minHeight: 202 }}
                                >
                                    <div style={{ marginBottom: 18 }}>
                                        <ResourceIcon type={r.icon} />
                                    </div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#001736', marginBottom: 8 }}>
                                        {r.title}
                                    </div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', color: '#43474F', marginBottom: 24 }}>
                                        {r.meta}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto' }}>
                                        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 10, lineHeight: '15px', letterSpacing: 1, textTransform: 'uppercase', color: '#006970' }}>
                                            {r.action}
                                        </span>
                                        <svg className="arrow-icon" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <path d="M1 7L7 1M7 1H2M7 1V6" stroke="#006970" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Section 6: CTA ── */}
                <div style={{ background: '#001736', padding: isMobile ? '60px 20px' : '96px 192px', position: 'relative', overflow: 'hidden' }}>
                    {/* Subtle grid lines */}
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', opacity: 0.1, pointerEvents: 'none' }}>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} style={{ flex: 1, borderRight: i < 11 ? '1px solid rgba(255,255,255,0.20)' : 'none' }} />
                        ))}
                    </div>
                    <div ref={ctaRef} style={{ maxWidth: 896, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32, position: 'relative' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease: ease }}
                            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: isMobile ? 28 : 48, lineHeight: isMobile ? '36px' : '48px', textAlign: 'center', margin: 0 }}
                        >
                            <span style={{ color: 'white' }}>Review our infrastructure with your </span>
                            <span style={{ color: '#7DF4FF' }}>IT Security Council.</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: sharp, delay: 0.2 }}
                            style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 12 : 24, justifyContent: 'center', width: isMobile ? '100%' : undefined }}
                        >
                            <button className="btn-teal" onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=Request Full Audit Report'} style={{ padding: '16px 32px', background: '#006970', borderRadius: 4, border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: 'white' }}>
                                Request Full Audit Report
                            </button>
                            <button className="btn-outline-light" onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=Speak to an Architect'} style={{ padding: '16px 32px', background: 'transparent', borderRadius: 4, border: 'none', outline: '1px solid rgba(255,255,255,0.30)', outlineOffset: '-1px', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: 'white' }}>
                                Speak to an Architect
                            </button>
                        </motion.div>
                    </div>
                </div>

            </div>
        </PageLayout>
    )
}
