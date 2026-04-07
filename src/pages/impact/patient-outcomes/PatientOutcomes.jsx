import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PageLayout from '../../../components/PageLayout'
import section4 from './section4.png'
import { useResponsive } from '../../../hooks/useResponsive'

const ease = [0.22, 1, 0.36, 1]
const sharp = [0.25, 0.46, 0.45, 0.94]

function useCounter(target, active, duration = 1100, decimals = 0) {
    const [value, setValue] = useState(0)
    const startedRef = useRef(false)

    useEffect(() => {
        if (!active || startedRef.current) return
        startedRef.current = true
        const steps = 55
        const interval = duration / steps
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
            current += increment
            if (Math.abs(current) >= Math.abs(target)) {
                setValue(target)
                clearInterval(timer)
            } else {
                setValue(parseFloat(current.toFixed(decimals)))
            }
        }, interval)
        return () => clearInterval(timer)
    }, [active, target, duration, decimals])

    return value
}

const heroLines = [
    'What has actually',
    'changed. In the facilities',
    'we operate in, and the',
    'lives of the patients they',
    'serve.',
]

const bars = [
    { h: 102, teal: false },
    { h: 96,  teal: false },
    { h: 77,  teal: false },
    { h: 70,  teal: false },
    { h: 51,  teal: true  },
    { h: 45,  teal: true  },
    { h: 32,  teal: true  },
]

export default function PatientOutcomesPage() {
    const { isMobile, isTablet } = useResponsive()
    const compact = isMobile || isTablet
    const px = isMobile ? 16 : 24

    // Section refs
    const narrativeRef  = useRef(null)
    const dataRef       = useRef(null)
    const quoteRef      = useRef(null)

    const narrativeInView = useInView(narrativeRef,  { once: true, amount: 0.15 })
    const dataInView      = useInView(dataRef,       { once: true, amount: 0.08 })
    const quoteInView     = useInView(quoteRef,      { once: true, amount: 0.25 })

    // Counters
    const diagCount   = useCounter(-22, dataInView, 1000, 0)
    const confCount   = useCounter(94,  dataInView, 1100, 0)
    const medCount    = useCounter(-41, dataInView, 1000, 0)
    const readCount   = useCounter(12.4, dataInView, 1100, 1)

    // Bar wave
    const [barsActive, setBarsActive] = useState(false)
    const [confLine, setConfLine]     = useState(false)

    useEffect(() => {
        if (!dataInView) return
        const t1 = setTimeout(() => setBarsActive(true), 500)
        const t2 = setTimeout(() => setConfLine(true),   700)
        return () => { clearTimeout(t1); clearTimeout(t2) }
    }, [dataInView])

    return (
        <PageLayout title="Patient Outcomes" fullWidth={true} lightHero seoDescription="ETOH Health patient outcomes — real data on reduced readmissions, improved recovery timelines, and enhanced clinical outcomes through unified infrastructure.">
            <style>{`
                @keyframes scanLine {
                    0%   { top: -10%; opacity: 0.18; }
                    50%  { opacity: 0.10; }
                    100% { top: 110%; opacity: 0.04; }
                }
                .screen-scan::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    width: 100%;
                    height: 6%;
                    background: linear-gradient(180deg, transparent, rgba(0,255,210,0.07), transparent);
                    pointer-events: none;
                    animation: scanLine 5s linear infinite;
                    animation-delay: 1.2s;
                }
                .stat-card {
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .stat-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0px 12px 24px -6px rgba(0,0,0,0.10);
                }
            `}</style>

            {/* ── Section 1: Hero ── */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 128, paddingBottom: isMobile ? 64 : 128, position: 'relative', background: '#F8F9FA', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 384, height: 384, position: 'absolute', right: 0, bottom: 0, background: 'rgba(0, 105, 112, 0.05)', borderRadius: 12, filter: 'blur(32px)', pointerEvents: 'none' }} />

                <div style={{ width: '100%', maxWidth: 1376, position: 'relative', display: 'flex', flexDirection: compact ? 'column' : 'row', alignItems: compact ? 'flex-start' : 'flex-end', gap: compact ? 40 : 80 }}>

                    {/* outcome-reveal: line-by-line */}
                    <div style={{ flex: 1.5 }}>
                        <div style={{ color: '#001736', fontSize: isMobile ? 40 : isTablet ? 52 : 72, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '44px' : isTablet ? '56px' : '72px' }}>
                            {heroLines.map((line, i) => {
                                const isLast = i === heroLines.length - 1
                                const delay  = i * 0.09 + (isLast ? 0.14 : 0)
                                return (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        transition={{ duration: 0.8, ease, delay }}
                                        style={{ display: 'block' }}
                                    >
                                        {line}
                                    </motion.span>
                                )
                            })}
                        </div>
                    </div>

                    {/* quote-slide: teal line grows first, then text slides in */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75, ease, delay: 0.72 }}
                        style={{ flex: 1, display: 'flex', paddingLeft: compact ? 0 : 24, paddingTop: compact ? 16 : 0 }}
                    >
                        {/* line-grow */}
                        {!compact && (
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.45, ease: sharp, delay: 0.65 }}
                                style={{ width: 2, background: '#006970', transformOrigin: 'top', flexShrink: 0, marginRight: 24, alignSelf: 'stretch' }}
                            />
                        )}
                        {compact && (
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.4, ease: sharp, delay: 0.65 }}
                                style={{ height: 2, background: '#006970', transformOrigin: 'left', width: '100%', position: 'absolute', top: 0 }}
                            />
                        )}
                        <div style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: '29.25px' }}>
                            The true measure of clinical architecture is found in the delta between traditional care and precision operations.
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Section 2a: Narrative ── */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 96, paddingBottom: isMobile ? 64 : 96, background: '#F3F4F5', display: 'flex', justifyContent: 'center' }}>
                <div ref={narrativeRef} style={{ width: '100%', maxWidth: 1376, display: 'flex', flexDirection: compact ? 'column' : 'row', gap: compact ? 40 : 80, alignItems: 'flex-start' }}>

                    {/* statement-build */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={narrativeInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.55, ease: sharp }}
                            style={{ color: '#006970', fontSize: 12, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 2.4 }}
                        >
                            Section 01 / Patient Outcomes
                        </motion.div>
                        {/* First clause */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={narrativeInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.75, ease, delay: 0.1 }}
                            style={{ color: '#001736', fontSize: isMobile ? 32 : 48, fontFamily: 'Manrope', fontWeight: 700, lineHeight: isMobile ? '36px' : '48px' }}
                        >
                            If the patient&apos;s care did not improve,
                        </motion.div>
                        {/* Second clause — slight pause */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={narrativeInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.75, ease, delay: 0.28 }}
                            style={{ color: '#001736', fontSize: isMobile ? 32 : 48, fontFamily: 'Manrope', fontWeight: 700, lineHeight: isMobile ? '36px' : '48px', marginTop: -16 }}
                        >
                            nothing we built mattered.
                        </motion.div>
                    </div>

                    {/* evidence-slide */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={narrativeInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.75, ease, delay: 0.38 }}
                        style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, paddingTop: compact ? 0 : 48 }}
                    >
                        <div style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 300, lineHeight: '29.25px' }}>
                            ETOH tracks clinical outcomes across every deployed facility: diagnostic cycle times, care pathway adherence, medication safety incidents, avoidable readmission rates, length-of-stay efficiency, and patient-reported experience from admission through post-discharge recovery.
                        </div>
                        <div style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 300, lineHeight: '29.25px' }}>
                            These numbers are published not because they are uniformly favorable but because they are honest — and because the discipline of tracking them, and being willing to publish them, is part of what it means to operate a clinical platform responsibly.
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Section 2b: Outcome data cards ── */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 96, paddingBottom: isMobile ? 64 : 96, background: '#F8F9FA', display: 'flex', justifyContent: 'center' }}>
                <div ref={dataRef} style={{ width: '100%', maxWidth: 1376, display: 'flex', flexDirection: 'column', gap: 64 }}>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={dataInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: sharp }}
                        style={{ display: 'flex', flexDirection: compact ? 'column' : 'row', justifyContent: 'space-between', alignItems: compact ? 'flex-start' : 'center', gap: 16 }}
                    >
                        <div style={{ color: '#001736', fontSize: isMobile ? 22 : 30, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '36px' }}>Outcome data from deployed facilities</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <motion.div
                                animate={dataInView ? { opacity: [0.4, 1, 0.4] } : {}}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                style={{ width: 8, height: 8, background: '#006970', borderRadius: 12 }}
                            />
                            <div style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.2 }}>Live System Verification</div>
                        </div>
                    </motion.div>

                    {/* Cards grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : 'repeat(3, 1fr)', gap: 16 }}>

                        {/* Diagnostic Cycle Times — metric-card-rise + bar-wave */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={dataInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.85, ease, delay: 0.1 }}
                            className="stat-card"
                            style={{ gridColumn: compact ? '1' : '1 / 3', padding: 40, position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 16 }}
                        >
                            <div style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 2.4 }}>Diagnostic Cycle Times</div>
                            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
                                {/* delta-count */}
                                <div style={{ color: '#001736', fontSize: isMobile ? 48 : 60, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '52px' : '60px' }}>
                                    {dataInView ? `${diagCount}%` : '0%'}
                                </div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={dataInView ? { opacity: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 1.1 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: 4, paddingBottom: 6 }}
                                >
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M0 8L6 0L12 8H0Z" fill="#006970"/></svg>
                                    <div style={{ color: '#006970', fontSize: 16, fontFamily: 'Inter', fontWeight: 600, lineHeight: '24px' }}>improvement</div>
                                </motion.div>
                            </div>

                            {/* bar-wave + result-fill */}
                            <div style={{ paddingTop: 24, display: 'flex', alignItems: 'flex-end', gap: 4, height: 128 }}>
                                {bars.map((bar, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            flex: 1,
                                            height: barsActive ? bar.h : 0,
                                            background: bar.teal ? '#006970' : '#E7E8E9',
                                            borderTopLeftRadius: 2,
                                            borderTopRightRadius: 2,
                                            transition: `height 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${i * 80}ms`,
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Care Pathway Adherence — confidence-card-slide */}
                        <motion.div
                            initial={{ opacity: 0, x: 32 }}
                            animate={dataInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.85, ease, delay: 0.22 }}
                            className="stat-card"
                            style={{ padding: 40, background: '#001736', borderRadius: 8, borderLeft: '4px solid #006970', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 32 }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                <div style={{ color: '#A9C7FF', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 2.4 }}>Care Pathway Adherence</div>
                                {/* confidence-count */}
                                <div style={{ color: 'white', fontSize: 72, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '72px' }}>
                                    {dataInView ? `${confCount}%` : '0%'}
                                </div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={dataInView ? { opacity: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 1.2 }}
                                    style={{ color: '#7594CA', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22.75px' }}
                                >
                                    Precision adherence across 12,000+ individual patient journeys in Q3-Q4.
                                </motion.div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ color: 'white', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, lineHeight: '16px', opacity: 0.60 }}>TARGET: 90%</div>
                                {/* confidence-line-draw */}
                                <div style={{ width: 96, height: 4, background: '#264778', borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
                                    <div style={{
                                        width: confLine ? '94%' : '0%',
                                        height: '100%',
                                        background: '#006970',
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        transition: 'width 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                                    }} />
                                </div>
                            </div>
                        </motion.div>

                        {/* Medication Safety Incidents — stat-stagger [0] */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={dataInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease, delay: 0.38 }}
                            className="stat-card"
                            style={{ padding: 40, background: '#F3F4F5', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 16 }}
                        >
                            <div style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 2.4 }}>Medication Safety Incidents</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <svg width="20" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#BA1A1A"/></svg>
                                <div style={{ color: '#001736', fontSize: 36, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '40px' }}>
                                    {dataInView ? `${medCount}%` : '0%'}
                                </div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={dataInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.4, delay: 1.3 }}
                                style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22.75px' }}
                            >
                                Significant reduction in near-miss events through automated cross-check infrastructure.
                            </motion.div>
                        </motion.div>

                        {/* Avoidable Readmission Rates — stat-stagger [1] */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={dataInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease, delay: 0.5 }}
                            className="stat-card"
                            style={{ padding: 40, background: '#F3F4F5', borderRadius: 8, borderLeft: '2px solid rgba(0, 105, 112, 0.20)', display: 'flex', flexDirection: 'column', gap: 16 }}
                        >
                            <div style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 2.4 }}>Avoidable Readmission Rates</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <svg width="22" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 6.5L12 15.5L7 10.5L3 14.5" stroke="#006970" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M17 6.5H21V10.5" stroke="#006970" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <div style={{ color: '#001736', fontSize: 36, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '40px' }}>
                                    {dataInView ? `${readCount}%` : '0%'}
                                </div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={dataInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.4, delay: 1.4 }}
                                style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22.75px' }}
                            >
                                A 15% delta versus national averages for comparable acuity facilities.
                            </motion.div>
                        </motion.div>

                        {/* Patient Experience Scores — stat-stagger [2] */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={dataInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease, delay: 0.62 }}
                            className="stat-card"
                            style={{ padding: 40, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 24 }}
                        >
                            <div style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 2.4 }}>Patient Experience Scores</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                {[
                                    { label: 'Facility Trust',   score: '4.8/5' },
                                    { label: 'Care Clarity',     score: '4.9/5' },
                                    { label: 'Post-Op Support',  score: '4.7/5' },
                                ].map(({ label, score }, i) => (
                                    <motion.div
                                        key={label}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={dataInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.45, ease: sharp, delay: 0.72 + i * 0.1 }}
                                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 8, borderBottom: '1px solid #EDEEEF' }}
                                    >
                                        <div style={{ color: '#191C1D', fontSize: 14, fontFamily: 'Inter', fontWeight: 500, lineHeight: '20px' }}>{label}</div>
                                        <div style={{ color: '#191C1D', fontSize: 16, fontFamily: 'Inter', fontWeight: 700, lineHeight: '24px' }}>{score}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* ── Section 3: Quote banner — evidence-image-reveal ── */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 96, paddingBottom: isMobile ? 64 : 96, background: '#F3F4F5', display: 'flex', justifyContent: 'center' }}>
                <div ref={quoteRef} style={{ width: '100%', maxWidth: 1376 }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
                        animate={quoteInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
                        transition={{ duration: 1.0, ease }}
                        className="screen-scan"
                        style={{ height: isMobile ? 'auto' : 500, position: 'relative', overflow: 'hidden', borderRadius: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <img style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} src={section4} alt="Clinical data review" />
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 23, 54, 0.60)', backdropFilter: 'blur(1px)' }} />

                        {/* quote-rise */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.85, ease, delay: 0.45 }}
                            style={{ position: 'relative', maxWidth: 672, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, padding: isMobile ? '64px 16px' : 48, textAlign: 'center' }}
                        >
                            <div style={{ color: 'white', fontSize: isMobile ? 24 : 36, fontFamily: 'Manrope', fontWeight: 700, lineHeight: isMobile ? '32px' : '49.5px' }}>
                                &quot;Data is not just a metric; it is the evidence of our commitment to the patient.&quot;
                            </div>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={quoteInView ? { scaleX: 1 } : {}}
                                transition={{ duration: 0.5, ease: sharp, delay: 0.85 }}
                                style={{ width: 96, height: 4, background: '#006970', flexShrink: 0, transformOrigin: 'left' }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

        </PageLayout>
    )
}
