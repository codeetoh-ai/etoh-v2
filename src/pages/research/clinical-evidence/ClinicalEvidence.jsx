import { useState, useEffect } from 'react'
import PageLayout from '../../../components/PageLayout'
import { useInView } from '../../../hooks/useInView'
import { useResponsive } from '../../../hooks/useResponsive'
import labImg from './section2.png'
import clinicalEvidenceImg from './clinical-evidence.jpg'

const outcomeMeasures = [
    {
        title: 'Diagnostic cycle times',
        desc: 'Reduction in mean time from ingestion to actionable diagnostic output.',
        icon: (
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path d="M1 8H19M10 1V15M4 3L1 8L4 13M16 3L19 8L16 13" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Care pathway adherence',
        desc: 'Statistical compliance with evidence-based clinical guidelines at scale.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1L11.5 6.5L17 7.3L13 11.2L14 17L9 14.3L4 17L5 11.2L1 7.3L6.5 6.5L9 1Z" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Avoidable adverse events',
        desc: 'Longitudinal monitoring of sentinel events and near-miss prevention.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#006970" strokeWidth="1.5" />
                <path d="M10 6V10M10 14H10.01" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'Patient experience',
        desc: 'Patient-reported experience measures across the full episode of care.',
        icon: (
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                <path d="M1 8H4L6 2L10 14L13 8H18" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
]

const publications = [
    {
        journal: 'JAMA NEUROLOGY / 2024',
        title: 'Algorithmic Accountability in Acute Stroke Diagnosis',
    },
    {
        journal: 'THE LANCET DIGITAL HEALTH / 2023',
        title: 'Real-world Validation of Autonomous Triage in ICU Settings',
    },
]

const tableRows = [
    { tier: 'Tertiary Academic', metric: '99.4% Uptime', status: 'Verified', verified: true },
    { tier: 'Community Rural', metric: 'Edge-Case Alerting', status: 'Verified', verified: true },
    { tier: 'Specialty Surgical', metric: 'Pathway Adherence', status: 'In-Progress', verified: false },
]

const headingLines = [
    'A clinical AI platform',
    'that cannot account',
    'for its own outcomes',
    'has no business',
    'operating in a hospital.',
]

function useCounter(target, inView, duration = 1400, delay = 300) {
    const [value, setValue] = useState(0)
    useEffect(() => {
        if (!inView) return
        let frameId
        let startTime = null
        const absTarget = Math.abs(target)
        const isNeg = target < 0
        const tick = (ts) => {
            if (!startTime) startTime = ts + delay
            const elapsed = ts - startTime
            if (elapsed < 0) { frameId = requestAnimationFrame(tick); return }
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(eased * absTarget)
            setValue(isNeg ? -current : current)
            if (progress < 1) frameId = requestAnimationFrame(tick)
            else setValue(target)
        }
        frameId = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frameId)
    }, [inView, target, duration, delay])
    return value
}

export default function ClinicalEvidencePage() {
    const { isMobile } = useResponsive()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 60)
        return () => clearTimeout(t)
    }, [])

    const [sec2Ref, sec2Visible] = useInView()
    const [sec3Ref, sec3Visible] = useInView()
    const [pubRef, pubVisible]   = useInView()
    const [studyRef, studyVisible] = useInView()
    const [tableRef, tableVisible] = useInView()

    const pct88 = useCounter(88,  studyVisible, 1400, 450)
    const min22 = useCounter(-22, studyVisible, 1200, 620)

    return (
        <PageLayout fullWidth lightHero>
            <div style={{ background: 'white', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
                <div style={{ width: '100%', paddingLeft: isMobile ? 20 : 32, paddingRight: isMobile ? 20 : 32, paddingTop: isMobile ? 48 : 80, paddingBottom: isMobile ? 48 : 80 }}>
                <div style={{ maxWidth: 1216, marginLeft: 'auto', marginRight: 'auto' }}>

                    {/* ── Section 1: Hero ── */}
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'flex-start', gap: isMobile ? 32 : 72, marginBottom: isMobile ? 64 : 128 }}>

                        {/* Left: copy */}
                        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>

                            {/* Badge */}
                            <div
                                className={mounted ? 'soft-fade-up' : ''}
                                style={{
                                    display: 'inline-flex',
                                    alignSelf: 'flex-start',
                                    padding: '4px 12px',
                                    background: '#F3F4F5',
                                    opacity: mounted ? undefined : 0,
                                }}
                            >
                                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 10, lineHeight: '15px', letterSpacing: 2, textTransform: 'uppercase', color: '#006970' }}>
                                    Position Statement 01-A
                                </span>
                            </div>

                            {/* Heading — line by line reveal */}
                            <div style={{
                                fontFamily: "'Manrope', sans-serif",
                                fontWeight: 800,
                                fontSize: isMobile ? 32 : 52,
                                lineHeight: isMobile ? '40px' : '58px',
                                color: '#001736',
                                margin: 0,
                            }}>
                                {headingLines.map((line, i) => {
                                    const isLast = i === headingLines.length - 1
                                    return (
                                        <div
                                            key={i}
                                            className={mounted ? 'evidence-reveal' : ''}
                                            style={{
                                                opacity: mounted ? undefined : 0,
                                                animationDelay: `${i * 70}ms`,
                                                animationDuration: isLast ? '0.85s' : '0.65s',
                                                fontWeight: isLast ? 900 : 800,
                                            }}
                                        >
                                            {line}
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Intro paragraph */}
                            <p
                                className={mounted ? 'soft-fade-up' : ''}
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 400,
                                    fontSize: 20,
                                    lineHeight: '32.5px',
                                    color: '#43474F',
                                    margin: '8px 0 0',
                                    opacity: mounted ? undefined : 0,
                                    animationDelay: `${headingLines.length * 70 + 120}ms`,
                                }}
                            >
                                ETOH holds its systems to clinical evidence standards, not marketing standards. What we publish reflects both what the evidence supports and where it is still being built.
                            </p>
                        </div>

                        {/* Right: image */}
                        <div
                            className={mounted ? 'soft-fade-up' : ''}
                            style={{
                                flex: isMobile ? 'none' : '0 0 520px',
                                width: isMobile ? '100%' : undefined,
                                height: isMobile ? 240 : 560,
                                borderRadius: 8,
                                overflow: 'hidden',
                                position: 'relative',
                                boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
                                opacity: mounted ? undefined : 0,
                                animationDelay: '220ms',
                            }}
                        >
                            <img
                                src={clinicalEvidenceImg}
                                alt="Clinical Research"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,23,54,0.40) 0%, rgba(0,23,54,0) 100%)' }} />
                        </div>
                    </div>

                    {/* ── Section 2: Honest record ── */}
                    <div
                        ref={sec2Ref}
                        style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 32 : 80, alignItems: 'center', marginBottom: isMobile ? 64 : 128 }}
                    >
                        {/* Left: image — focus-in */}
                        <div
                            className={sec2Visible ? 'img-focus-in' : ''}
                            style={{
                                borderRadius: 8,
                                overflow: 'hidden',
                                boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
                                height: 360,
                                position: 'relative',
                                opacity: sec2Visible ? undefined : 0,
                            }}
                        >
                            <img
                                src={labImg}
                                alt="Clinical Lab"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,23,54,0.40) 0%, rgba(0,23,54,0) 100%)' }} />
                        </div>

                        {/* Right: copy */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <h2
                                className={sec2Visible ? 'statement-slide' : ''}
                                style={{
                                    fontFamily: "'Manrope', sans-serif",
                                    fontWeight: 700,
                                    fontSize: 30,
                                    lineHeight: '36px',
                                    color: '#001736',
                                    margin: 0,
                                    opacity: sec2Visible ? undefined : 0,
                                    animationDelay: '0.18s',
                                }}
                            >
                                The honest record of what ETOH does and does not change.
                            </h2>
                            <p
                                className={sec2Visible ? 'soft-fade-up' : ''}
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 400,
                                    fontSize: 16,
                                    lineHeight: '26px',
                                    color: '#43474F',
                                    margin: 0,
                                    opacity: sec2Visible ? undefined : 0,
                                    animationDelay: '0.34s',
                                }}
                            >
                                Clinical evidence for ETOH is built prospectively, in real deployment settings, against outcome measures that reflect actual clinical value.
                            </p>
                            <p
                                className={sec2Visible ? 'soft-fade-up' : ''}
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 400,
                                    fontSize: 16,
                                    lineHeight: '26px',
                                    color: '#43474F',
                                    margin: 0,
                                    opacity: sec2Visible ? undefined : 0,
                                    animationDelay: '0.48s',
                                }}
                            >
                                We do not calibrate our research agenda to produce favorable results — we calibrate it to produce accurate ones, because accurate results are the only foundation on which a clinical platform can be responsibly scaled.
                            </p>
                        </div>
                    </div>

                    {/* ── Section 3: Primary Outcome Measures ── */}
                    <div
                        ref={sec3Ref}
                        style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 32 : 48, marginBottom: isMobile ? 64 : 128 }}
                    >
                        {/* Section label */}
                        <div
                            className={sec3Visible ? 'soft-fade-up' : ''}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 32,
                                opacity: sec3Visible ? undefined : 0,
                            }}
                        >
                            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#747780', flexShrink: 0 }}>
                                Primary Outcome Measures
                            </span>
                            <div style={{ flex: 1, height: 1, background: 'rgba(196,198,208,0.20)' }} />
                        </div>

                        {/* 4 principle cards */}
                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 16 }}>
                            {outcomeMeasures.map((item, i) => (
                                <div
                                    key={item.title}
                                    className={`evidence-card-hover${sec3Visible ? ' principle-enter' : ''}`}
                                    style={{
                                        padding: '32px 34px',
                                        background: 'white',
                                        border: '1px solid #C4C6D0',
                                        borderLeft: 'none',
                                        borderRadius: 8,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 0,
                                        position: 'relative',
                                        overflow: 'hidden',
                                        opacity: sec3Visible ? undefined : 0,
                                        animationDelay: `${i * 80}ms`,
                                    }}
                                >
                                    {/* Animated left border — divider-rise */}
                                    <div
                                        className={sec3Visible ? 'divider-rise' : ''}
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            width: 3,
                                            height: '100%',
                                            background: '#006970',
                                            transformOrigin: 'bottom center',
                                            transform: sec3Visible ? undefined : 'scaleY(0)',
                                            animationDelay: `${i * 80 + 120}ms`,
                                        }}
                                    />
                                    <div style={{ marginBottom: 24 }}>{item.icon}</div>
                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#001736', marginBottom: 8 }}>
                                        {item.title}
                                    </div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F' }}>
                                        {item.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Section 4: Publications + Outcomes + Table ── */}
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '280px 1fr', gap: isMobile ? 40 : 48, alignItems: 'start' }}>

                        {/* Left: Publications */}
                        <div ref={pubRef} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <h3
                                className={pubVisible ? 'soft-fade-up' : ''}
                                style={{
                                    fontFamily: "'Manrope', sans-serif",
                                    fontWeight: 700,
                                    fontSize: 20,
                                    lineHeight: '28px',
                                    color: '#001736',
                                    margin: 0,
                                    opacity: pubVisible ? undefined : 0,
                                }}
                            >
                                Publications
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                {publications.map((pub, i) => (
                                    <div
                                        key={pub.journal}
                                        className={pubVisible ? 'citation-reveal' : ''}
                                        style={{
                                            padding: 24,
                                            background: '#F3F4F5',
                                            borderRadius: 4,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 8,
                                            opacity: pubVisible ? undefined : 0,
                                            animationDelay: `${i * 150 + 80}ms`,
                                        }}
                                    >
                                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 10, lineHeight: '15px', color: '#006970' }}>
                                            {pub.journal}
                                        </div>
                                        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#191C1D' }}>
                                            {pub.title}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                            <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                                                <path d="M1 1H5L7 3V9H1V1Z" stroke="#747780" strokeWidth="1" />
                                                <path d="M5 1V3H7" stroke="#747780" strokeWidth="1" />
                                            </svg>
                                            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', color: '#747780' }}>PDF</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Outcome Studies + Deployment table */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>

                            {/* Outcome Studies dark card — study-card-rise + glass-sweep */}
                            <div
                                ref={studyRef}
                                className={`glass-sweep-auto${studyVisible ? ' study-card-rise' : ''}`}
                                style={{
                                    padding: isMobile ? 24 : 48,
                                    background: '#001736',
                                    borderRadius: 8,
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 16,
                                    opacity: studyVisible ? undefined : 0,
                                    animationDelay: '0.12s',
                                }}
                            >
                                {/* Teal glow */}
                                <div style={{ position: 'absolute', right: -80, top: 50, width: 256, height: 256, background: 'rgba(0,105,112,0.20)', borderRadius: 12, filter: 'blur(32px)', pointerEvents: 'none' }} />

                                <h3 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: 'white', margin: 0, position: 'relative' }}>
                                    Outcome Studies
                                </h3>
                                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#7594CA', margin: 0, maxWidth: 512, position: 'relative' }}>
                                    Active longitudinal studies evaluating clinical impact across 14 global health systems.
                                </p>

                                {/* Stats row */}
                                <div style={{ display: 'flex', gap: isMobile ? 32 : 64, paddingTop: 16, position: 'relative' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                        <div
                                            className={studyVisible ? 'verification-confirm' : ''}
                                            style={{
                                                fontFamily: "'Manrope', sans-serif",
                                                fontWeight: 900,
                                                fontSize: 36,
                                                lineHeight: '40px',
                                                color: '#96F1FA',
                                                opacity: studyVisible ? undefined : 0,
                                                animationDelay: '0.5s',
                                            }}
                                        >
                                            {pct88}%
                                        </div>
                                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: 'white' }}>
                                            Pathway Consistency
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                        <div
                                            className={studyVisible ? 'verification-confirm' : ''}
                                            style={{
                                                fontFamily: "'Manrope', sans-serif",
                                                fontWeight: 900,
                                                fontSize: 36,
                                                lineHeight: '40px',
                                                color: '#96F1FA',
                                                opacity: studyVisible ? undefined : 0,
                                                animationDelay: '0.65s',
                                            }}
                                        >
                                            {min22}min
                                        </div>
                                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: 'white' }}>
                                            Mean Triage Latency
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Deployment Validation table */}
                            <div
                                ref={tableRef}
                                style={{ padding: 32, outline: '1px solid #C4C6D0', outlineOffset: '-1px', borderRadius: 4, display: 'flex', flexDirection: 'column', gap: 24 }}
                            >
                                <h3
                                    className={tableVisible ? 'soft-fade-up' : ''}
                                    style={{
                                        fontFamily: "'Manrope', sans-serif",
                                        fontWeight: 700,
                                        fontSize: 20,
                                        lineHeight: '28px',
                                        color: '#001736',
                                        margin: 0,
                                        opacity: tableVisible ? undefined : 0,
                                    }}
                                >
                                    Deployment Validation Data
                                </h3>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '1px solid #C4C6D0' }}>
                                            {['Facility Tier', 'Metric', 'Verification'].map((col) => (
                                                <th key={col} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 10, lineHeight: '12px', letterSpacing: 1, textTransform: 'uppercase', color: '#747780', textAlign: 'left', padding: '16px 2px' }}>
                                                    {col}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableRows.map((row, i) => (
                                            <tr
                                                key={row.tier}
                                                className={tableVisible ? 'table-row-reveal' : ''}
                                                style={{
                                                    borderBottom: i < tableRows.length - 1 ? '1px solid #EDEEEF' : 'none',
                                                    opacity: tableVisible ? undefined : 0,
                                                    animationDelay: `${i * 100 + 80}ms`,
                                                }}
                                            >
                                                <td style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#191C1D', padding: '16px 2px' }}>
                                                    {row.tier}
                                                </td>
                                                <td style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#191C1D', padding: '16px 2px' }}>
                                                    {row.metric}
                                                </td>
                                                <td style={{ padding: '16px 2px' }}>
                                                    {row.verified ? (
                                                        <span
                                                            className={tableVisible ? 'verification-confirm' : ''}
                                                            style={{
                                                                fontFamily: "'Inter', sans-serif",
                                                                fontWeight: 400,
                                                                fontSize: 14,
                                                                lineHeight: '20px',
                                                                color: '#006970',
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: 6,
                                                                opacity: tableVisible ? undefined : 0,
                                                                animationDelay: `${i * 100 + 220}ms`,
                                                            }}
                                                        >
                                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                                                                <path d="M1 4.5L4.5 8L11 1" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            {row.status}
                                                        </span>
                                                    ) : (
                                                        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#747780', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                                                            <span
                                                                className="progress-pulse-dot"
                                                                style={{ width: 6, height: 6, borderRadius: '50%', background: '#747780', display: 'inline-block', flexShrink: 0 }}
                                                            />
                                                            {row.status}
                                                        </span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                </div>
                </div>
            </div>
        </PageLayout>
    )
}
