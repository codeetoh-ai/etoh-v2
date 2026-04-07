import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PageLayout from '../../../components/PageLayout'
import hero1 from './assets/hero1.png'
import doctor from './assets/doctor.png'
import section3 from './assets/section3.png'
import { useResponsive } from '../../../hooks/useResponsive'

const ease = [0.22, 1, 0.36, 1]
const sharp = [0.25, 0.46, 0.45, 0.94]

function useCounter(target, active, duration = 1100, decimals = 0) {
    const [value, setValue] = useState(0)
    const startedRef = useRef(false)

    useEffect(() => {
        if (!active || startedRef.current) return
        startedRef.current = true
        const steps = 60
        const interval = duration / steps
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
            current += increment
            if (current >= target) {
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
    'Reaching the patients',
    'who have the most to',
    'gain and the fewest',
    'alternatives.',
]

export default function HealthcareAccessPage() {
    const { isMobile, isTablet } = useResponsive()
    const compact = isMobile || isTablet
    const px = isMobile ? 16 : 32

    const narrativeRef = useRef(null)
    const deployRef    = useRef(null)

    const narrativeInView = useInView(narrativeRef, { once: true, amount: 0.15 })
    const deployInView    = useInView(deployRef,    { once: true, amount: 0.08 })

    // Counters
    const facilitiesCount = useCounter(240, deployInView, 1200, 0)
    const careGapsCount   = useCounter(68,  deployInView, 1000, 0)
    const communityCount  = useCounter(42,  deployInView, 1000, 0)

    // Coverage fill
    const [coverageActive, setCoverageActive] = useState(false)
    useEffect(() => {
        if (!deployInView) return
        const t = setTimeout(() => setCoverageActive(true), 600)
        return () => clearTimeout(t)
    }, [deployInView])

    return (
        <PageLayout title="Healthcare Access" fullWidth={true} seoDescription="ETOH Health's impact on healthcare access — expanding quality care to underserved populations through scalable hospital infrastructure.">
            <style>{`
                @keyframes glassSweep {
                    0%   { left: -70%; }
                    100% { left: 140%; }
                }
                .dark-card-sweep {
                    position: relative;
                    overflow: hidden;
                }
                .dark-card-sweep::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -70%;
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
                    pointer-events: none;
                    animation: glassSweep 9s ease-in-out infinite;
                    animation-delay: 3s;
                }
                @keyframes waveShift {
                    0%   { background-position: 0% 50%; }
                    50%  { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .wave-card {
                    transition: box-shadow 0.2s ease;
                }
                .wave-card:hover {
                    box-shadow: 0px 0px 24px 4px rgba(0, 105, 112, 0.18);
                }
                .stat-card-white {
                    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
                }
                .stat-card-white:hover {
                    transform: translateY(-4px);
                    box-shadow: 0px 16px 32px -8px rgba(0,0,0,0.12);
                    border-left-color: #1FC9C3 !important;
                }
                .btn-access {
                    transition: transform 0.15s ease, box-shadow 0.15s ease;
                }
                .btn-access:hover {
                    transform: translateY(-2px);
                    box-shadow: 0px 12px 24px -4px rgba(0,105,112,0.45);
                }
                .narrative-card {
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .narrative-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0px 12px 24px -6px rgba(0,0,0,0.12);
                }
            `}</style>

            {/* ── Section 1: Hero ── */}
            <div style={{ alignSelf: 'stretch', width: '100%', minHeight: isMobile ? 'auto' : 870, paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 80 : 227, paddingBottom: isMobile ? 80 : 227, position: 'relative', background: 'linear-gradient(146deg, #001736 0%, #002B5B 100%)', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                {/* corridor-drift: background slowly pulls forward */}
                <motion.div
                    initial={{ scale: 1.04 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: 'absolute', inset: 0, opacity: 0.20, pointerEvents: 'none' }}
                >
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 84.64% 124.53% at 70.00% 30.00%, rgba(0, 105, 112, 0.40) 0%, rgba(0, 105, 112, 0) 70%)' }} />
                    <img style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'overlay' }} src={hero1} alt="" />
                </motion.div>

                <div style={{ width: '100%', maxWidth: 1280, position: 'relative', display: 'flex', flexDirection: compact ? 'column' : 'row', alignItems: compact ? 'flex-start' : 'center', gap: compact ? 40 : 80 }}>

                    {/* Left: reach-reveal */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
                        <div style={{ color: 'white', fontSize: isMobile ? 40 : isTablet ? 52 : 72, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '44px' : isTablet ? '56px' : '72px' }}>
                            {heroLines.map((line, i) => {
                                const isLast = i === heroLines.length - 1
                                return (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        transition={{ duration: isLast ? 0.9 : 0.75, ease, delay: i * 0.08 + (isLast ? 0.1 : 0) }}
                                        style={{ display: 'block', fontWeight: isLast ? 900 : 800 }}
                                    >
                                        {line}
                                    </motion.span>
                                )
                            })}
                        </div>

                        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
                            {/* access-line-draw */}
                            <div style={{ paddingTop: 16, flexShrink: 0 }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: 64 }}
                                    transition={{ duration: 0.55, ease: sharp, delay: 0.52 }}
                                    style={{ height: 2, background: '#006970' }}
                                />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.65, ease, delay: 0.58 }}
                                style={{ color: '#7594CA', fontSize: isMobile ? 16 : 24, fontFamily: 'Inter', fontWeight: 300, lineHeight: '32px' }}
                            >
                                Access is measured in facilities reached, patient volumes, and care gaps closed—especially in under-resourced communities where precision matters most.
                            </motion.div>
                        </div>
                    </div>

                    {/* cta-slide */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease, delay: 0.72 }}
                        style={{ flexShrink: 0 }}
                    >
                        <div
                            className="btn-access"
                            onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=View Full Access Report'}
                            style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 20, paddingBottom: 20, background: '#006970', borderRadius: 6, boxShadow: '0px 8px 10px -6px rgba(0,0,0,0.10), 0px 20px 25px -5px rgba(0,0,0,0.10)', display: 'inline-flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}
                        >
                            <div style={{ color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: 700, lineHeight: '24px' }}>View Full Access Report</div>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/></svg>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Section 2: Impact Narrative ── */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 96, paddingBottom: isMobile ? 64 : 96, background: '#F8F9FA', display: 'flex', justifyContent: 'center' }}>
                <div ref={narrativeRef} style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: compact ? 'column' : 'row', gap: compact ? 48 : 80, alignItems: 'flex-start' }}>

                    {/* team-reveal */}
                    <motion.div
                        initial={{ opacity: 0, x: -40, scale: 1.02 }}
                        animate={narrativeInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                        transition={{ duration: 0.85, ease, delay: 0.05 }}
                        style={{ flex: 1, position: 'relative' }}
                    >
                        <div style={{ background: '#F3F4F5', boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)', overflow: 'hidden', borderRadius: 8 }}>
                            <img style={{ width: '100%', height: isMobile ? 300 : 560, objectFit: 'cover', display: 'block' }} src={doctor} alt="Clinical team" />
                        </div>
                    </motion.div>

                    {/* visibility-slide */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={narrativeInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.85, ease, delay: 0.18 }}
                        style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 40 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={narrativeInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: sharp, delay: 0.28 }}
                            style={{ color: '#006970', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 2.8 }}
                        >
                            Impact Narrative
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={narrativeInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, ease, delay: 0.35 }}
                                style={{ color: '#001736', fontSize: isMobile ? 32 : 48, fontFamily: 'Manrope', fontWeight: 700, lineHeight: isMobile ? '36px' : '48px' }}
                            >
                                Operational visibility as a clinical right.
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={narrativeInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.6, ease, delay: 0.5 }}
                                style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
                            >
                                <div style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: '29.25px' }}>
                                    For the first time, public health facilities are operating with genuinely capable infrastructure. We are bridging the divide between resource-constrained environments and high-precision clinical excellence.
                                </div>
                                <div style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: '29.25px' }}>
                                    By deploying institutional-grade systems into the heart of community medicine, we give clinical teams in these settings the same operational visibility and diagnostic speed as the world&apos;s best-equipped private hospitals.
                                </div>
                            </motion.div>
                        </div>

                        {/* divider-grow */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={narrativeInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.55, ease, delay: 0.65 }}
                            style={{ paddingTop: 24 }}
                        >
                            <div
                                className="narrative-card"
                                style={{ padding: 16, background: '#F3F4F5', borderLeft: '4px solid #006970', display: 'inline-flex', alignItems: 'center', gap: 16 }}
                            >
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    animate={narrativeInView ? { scaleY: 1 } : {}}
                                    transition={{ duration: 0.4, ease: sharp, delay: 0.7 }}
                                    style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: '#006970', transformOrigin: 'bottom' }}
                                />
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 15.11 16.1 17.78 12 18.93V12H5V6.3L12 3.19V11.99Z" fill="#006970"/>
                                </svg>
                                <div style={{ color: '#001736', fontSize: 14, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.4 }}>Genuinely Capable Infrastructure</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ── Section 3: Deployment Reach & Access Data ── */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 128, paddingBottom: isMobile ? 64 : 128, background: '#F3F4F5', display: 'flex', justifyContent: 'center' }}>
                <div ref={deployRef} style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: 'column', gap: 80 }}>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={deployInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: sharp }}
                        style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
                    >
                        <div style={{ color: '#001736', fontSize: isMobile ? 28 : 36, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '34px' : '40px' }}>Deployment Reach &amp; Access Data</div>
                        <div style={{ maxWidth: 576, color: '#43474F', fontSize: 16, fontFamily: 'Inter', fontWeight: 400, lineHeight: '24px' }}>
                            Real-time metrics defining the footprint of ETOH operational excellence across under-resourced networks.
                        </div>
                    </motion.div>

                    {/* 2-column grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '1fr 1fr', gap: 16 }}>

                        {/* Left column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

                            {/* metric-rise: 240+ card */}
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={deployInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, ease, delay: 0.1 }}
                                className="stat-card-white"
                                style={{ padding: 40, background: 'white', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: 8, borderLeft: '4px solid #006970', display: 'flex', flexDirection: 'column', gap: 20, position: 'relative', overflow: 'hidden' }}
                            >
                                {/* line-grow on left edge */}
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    animate={deployInView ? { scaleY: 1 } : {}}
                                    transition={{ duration: 0.55, ease: sharp, delay: 0.3 }}
                                    style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: '#006970', transformOrigin: 'bottom' }}
                                />
                                <svg width="25" height="23" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#006970"/>
                                </svg>
                                {/* metric-count */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                    <div style={{ color: '#001736', fontSize: isMobile ? 48 : 60, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '52px' : '60px' }}>
                                        {deployInView ? `${facilitiesCount}+` : '0+'}
                                    </div>
                                    <div style={{ color: '#64748B', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.4 }}>Total Facilities Reached</div>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={deployInView ? { opacity: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 1.2 }}
                                    style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22.75px' }}
                                >
                                    Scaling infrastructure across District Hospitals and primary clinics with zero compromise on diagnostic integrity.
                                </motion.div>
                            </motion.div>

                            {/* stat-stagger: 68% + 42% */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                {[
                                    { count: careGapsCount, label: 'Care Gaps Closed', desc: 'Reduction in Diagnostic Latency across integrated networks.', delay: 0.28 },
                                    { count: communityCount, label: 'Community Impact', desc: 'Increase in Successful Referrals within clinical pathways.', delay: 0.38 },
                                ].map(({ count, label, desc, delay }) => (
                                    <motion.div
                                        key={label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={deployInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.65, ease, delay }}
                                        className="stat-card-white"
                                        style={{ padding: 32, background: 'white', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 16, borderLeft: '4px solid transparent' }}
                                    >
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                            <div style={{ color: '#001736', fontSize: 36, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '40px' }}>
                                                {deployInView ? `${count}%` : '0%'}
                                            </div>
                                            <div style={{ color: '#64748B', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.2 }}>{label}</div>
                                        </div>
                                        <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px' }}>{desc}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

                            {/* impact-card-slide: 1.8M+ dark card */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={deployInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.85, ease, delay: 0.18 }}
                                className="dark-card-sweep"
                                style={{ padding: 40, background: '#001736', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 20 }}
                            >
                                <svg width="28" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="#7AD5DD"/>
                                </svg>
                                {/* reach-count */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                    <motion.div
                                        style={{ color: 'white', fontSize: isMobile ? 48 : 60, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '52px' : '60px' }}
                                    >
                                        {deployInView ? '1.8M+' : '0'}
                                    </motion.div>
                                    <div style={{ color: '#7594CA', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.4 }}>Annual Patient Volume Supported</div>
                                </div>
                                {/* coverage-fill */}
                                <div>
                                    <div style={{ height: 3, background: 'rgba(122,213,221,0.15)', borderRadius: 12, overflow: 'hidden', marginBottom: 12 }}>
                                        <div style={{
                                            width: coverageActive ? '78%' : '0%',
                                            height: '100%',
                                            background: 'linear-gradient(90deg, #006970, #7AD5DD)',
                                            borderRadius: 12,
                                            transition: 'width 1.0s cubic-bezier(0.22, 1, 0.36, 1)',
                                        }} />
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M0 8L6 0L12 8H0Z" fill="#7AD5DD"/></svg>
                                        <div style={{ color: '#7AD5DD', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.2 }}>12% Year-over-year increase</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* wave image card — signal-flow */}
                            <motion.div
                                initial={{ opacity: 0, scale: 1.03 }}
                                animate={deployInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.9, ease, delay: 0.32 }}
                                className="wave-card"
                                style={{ position: 'relative', background: '#E1E3E4', overflow: 'hidden', borderRadius: 8, flex: 1, minHeight: 300 }}
                            >
                                <img
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: 300 }}
                                    src={section3}
                                    alt="Precision Mapping of Clinical Gaps"
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,23,54,0.80) 0%, rgba(0,23,54,0) 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 32 }}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={deployInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, ease, delay: 0.55 }}
                                        style={{ color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: 600, lineHeight: '28px' }}
                                    >
                                        Precision Mapping of Clinical Gaps
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
