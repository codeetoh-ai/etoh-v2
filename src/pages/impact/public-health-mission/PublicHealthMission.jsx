import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PageLayout from '../../../components/PageLayout'
import hero1 from './assets/hero1.png'
import section3 from './assets/section3.png'
import { useResponsive } from '../../../hooks/useResponsive'

const ease = [0.22, 1, 0.36, 1]

export default function PublicHealthMissionPage() {
    const { isMobile, isTablet } = useResponsive()
    const compact = isMobile || isTablet
    const px = isMobile ? 16 : isTablet ? 24 : 32

    const hardestRef    = useRef(null)
    const outcomesRef   = useRef(null)
    const disciplineRef = useRef(null)

    const hardestInView    = useInView(hardestRef,    { once: true, amount: 0.15 })
    const outcomesInView   = useInView(outcomesRef,   { once: true, amount: 0.1 })
    const disciplineInView = useInView(disciplineRef, { once: true, amount: 0.15 })

    // Reduce x offsets on mobile to prevent horizontal overflow
    const xSm = isMobile ? 24 : 60
    const xLg = isMobile ? 24 : 80

    return (
        <PageLayout title="Public Health Mission" fullWidth={true} lightHero seoDescription="ETOH Health's public health mission — building infrastructure for population-level health management across government and public healthcare networks.">
            <style>{`
                @keyframes glassSweep {
                    0%   { left: -70%; }
                    100% { left: 140%; }
                }
                .glass-sweep { position: relative; overflow: hidden; }
                .glass-sweep::after {
                    content: '';
                    position: absolute; top: 0; left: -70%;
                    width: 50%; height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
                    pointer-events: none;
                    animation: glassSweep 8s ease-in-out infinite;
                    animation-delay: 2s;
                }
            `}</style>

            {/* ── Section 1: Hero ── */}
            <div style={{ width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 48 : 96, paddingBottom: isMobile ? 48 : 96, background: 'white', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: compact ? 'column' : 'row', gap: compact ? 36 : 80, alignItems: 'flex-start' }}>

                    {/* Left: text */}
                    <motion.div
                        initial={{ opacity: 0, x: -xLg }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease, delay: 0.1 }}
                        style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: isMobile ? 16 : 24 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease, delay: 0.35 }}
                            style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: '#E7E8E9', display: 'inline-flex' }}
                        >
                            <div style={{ color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2 }}>
                                Foundational Infrastructure
                            </div>
                        </motion.div>

                        <div style={{ color: '#001736', fontSize: isMobile ? 32 : isTablet ? 40 : 52, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '38px' : isTablet ? '46px' : '58px' }}>
                            {[
                                'The floor of healthcare',
                                'quality is where the',
                                'transformation happens.',
                                'ETOH is built to raise it.',
                            ].map((line, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease, delay: 0.4 + i * 0.08 }}
                                    style={{ display: 'block' }}
                                >
                                    {line}
                                </motion.span>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease, delay: 0.75 }}
                            style={{ paddingTop: isMobile ? 4 : 8 }}
                        >
                            <div style={{ color: '#43474F', fontSize: isMobile ? 15 : isTablet ? 18 : 22, fontFamily: 'Inter', fontWeight: 400, lineHeight: isMobile ? '24px' : '32px' }}>
                                Improving the best hospitals is important. Bringing operational excellence to the hospitals that serve the most people — and have always had the least — is the challenge that defines a generation of health infrastructure.
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: rotated image */}
                    <motion.div
                        initial={{ opacity: 0, x: xLg }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease }}
                        style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{ width: 192, height: 192, position: 'absolute', right: -22, bottom: 0, background: 'rgba(0,105,112,0.10)', borderRadius: 12, filter: 'blur(32px)', pointerEvents: 'none' }} />
                        <motion.div
                            initial={{ scale: 1.04 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.0, ease }}
                            style={{ transform: 'rotate(-2deg)', background: '#F3F4F5', boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)', overflow: 'hidden', borderRadius: 8, width: '100%', maxWidth: 452 }}
                        >
                            <img style={{ width: '100%', height: isMobile ? 260 : isTablet ? 400 : 580, objectFit: 'cover', display: 'block' }} src={hero1} alt="Public health infrastructure" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ── Section 2: The Hardest Problem ── */}
            <div ref={hardestRef} style={{ width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 56 : 128, paddingBottom: isMobile ? 56 : 128, background: '#F3F4F5', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: compact ? 'column' : 'row', gap: compact ? 36 : 80, alignItems: 'flex-start' }}>

                    {/* Left: heading + paragraphs */}
                    <motion.div
                        initial={{ opacity: 0, x: -xSm }}
                        animate={hardestInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.85, ease }}
                        style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: isMobile ? 20 : 32 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                            <div style={{ width: 36, height: 2, background: '#006970', flexShrink: 0 }} />
                            <div style={{ color: '#001736', fontSize: isMobile ? 22 : 30, fontFamily: 'Manrope', fontWeight: 700, lineHeight: isMobile ? '28px' : '36px' }}>
                                The Hardest Problem
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 16 : 24 }}>
                            <div style={{ color: '#43474F', fontSize: isMobile ? 15 : 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: isMobile ? '24px' : '29.25px' }}>
                                Healthcare systems are not transformed at their peaks. They are transformed when the standard of care delivered at their most stretched, most under-resourced, most remote facilities begins to approach the standard of care delivered at their most capable ones.
                            </div>
                            <div style={{ color: '#43474F', fontSize: isMobile ? 15 : 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: isMobile ? '24px' : '29.25px' }}>
                                This is the hardest problem in public health infrastructure, and it is the one that ETOH&apos;s public health mission is oriented around.
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: quote card */}
                    <motion.div
                        initial={{ opacity: 0, x: xSm }}
                        animate={hardestInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.85, ease, delay: 0.1 }}
                        style={{ flex: 1, padding: isMobile ? 24 : 40, position: 'relative', background: 'white', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 24 }}
                    >
                        {/* divider-grow */}
                        <motion.div
                            initial={{ scaleY: 0 }}
                            animate={hardestInView ? { scaleY: 1 } : {}}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.55 }}
                            style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: '#006970', transformOrigin: 'top', borderRadius: '8px 0 0 8px' }}
                        />
                        <div style={{ position: 'absolute', right: 20, top: -20, opacity: 0.20 }}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28 26C26.3333 26 24.9167 25.4167 23.75 24.25C22.5833 23.0833 22 21.6667 22 20C22 18.3333 22.5833 16.9167 23.75 15.75C24.9167 14.5833 26.3333 14 28 14C29.6667 14 31.0833 14.5833 32.25 15.75C33.4167 16.9167 34 18.3333 34 20C34 21.6667 33.4167 23.0833 32.25 24.25C31.0833 25.4167 29.6667 26 28 26ZM28 22C28.5667 22 29.0417 21.8083 29.425 21.425C29.8083 21.0417 30 20.5667 30 20C30 19.4333 29.8083 18.9583 29.425 18.575C29.0417 18.1917 28.5667 18 28 18C27.4333 18 26.9583 18.1917 26.575 18.575C26.1917 18.9583 26 19.4333 26 20C26 20.5667 26.1917 21.0417 26.575 21.425C26.9583 21.8083 27.4333 22 28 22ZM16 40V34.2C16 33.5 16.1667 32.8417 16.5 32.225C16.8333 31.6083 17.3 31.1167 17.9 30.75C18.9667 30.1167 20.0917 29.5917 21.275 29.175C22.4583 28.7583 23.6667 28.45 24.9 28.25L28 32L31.1 28.25C32.3333 28.45 33.5333 28.7583 34.7 29.175C35.8667 29.5917 36.9833 30.1167 38.05 30.75C38.65 31.1167 39.125 31.6083 39.475 32.225C39.825 32.8417 40 33.5 40 34.2V40H16ZM19.95 36H26.1L23.4 32.7C22.8 32.8667 22.2167 33.0833 21.65 33.35C21.0833 33.6167 20.5167 33.9 19.95 34.2V36ZM29.9 36H36V34.2C35.4667 33.8667 34.9167 33.575 34.35 33.325C33.7833 33.075 33.2 32.8667 32.6 32.7L29.9 36ZM4 36C2.9 36 1.95833 35.6083 1.175 34.825C0.391667 34.0417 0 33.1 0 32V4C0 2.9 0.391667 1.95833 1.175 1.175C1.95833 0.391667 2.9 0 4 0H32C33.1 0 34.0417 0.391667 34.825 1.175C35.6083 1.95833 36 2.9 36 4V14C35.4667 13.3333 34.8833 12.7 34.25 12.1C33.6167 11.5 32.8667 11.1 32 10.9V4H4V32H12.3C12.2 32.3667 12.125 32.7333 12.075 33.1C12.025 33.4667 12 33.8333 12 34.2V36H4ZM8 12H22C22.8667 11.3333 23.8167 10.8333 24.85 10.5C25.8833 10.1667 26.9333 10 28 10V8H8V12ZM8 20H18C18 19.3 18.075 18.6167 18.225 17.95C18.375 17.2833 18.5833 16.6333 18.85 16H8V20ZM8 28H14.9C15.2667 27.7 15.6583 27.4333 16.075 27.2C16.4917 26.9667 16.9167 26.75 17.35 26.55V24H8V28ZM4 32V4V10.85C4 10.5833 4 10.375 4 10.225C4 10.075 4 10 4 10C4 10 4 10.975 4 12.925C4 14.875 4 17.2333 4 20C4 20.9333 4 21.8667 4 22.8C4 23.7333 4 24.6667 4 25.6C4 25.8667 4 26.15 4 26.45C4 26.75 4 27.0333 4 27.3C4 28.0667 4 28.85 4 29.65C4 30.45 4 31.2333 4 32Z" fill="#006970"/>
                            </svg>
                        </div>
                        <div style={{ color: '#001736', fontSize: isMobile ? 17 : 24, fontFamily: 'Manrope', fontWeight: 700, lineHeight: isMobile ? '26px' : '34px', position: 'relative' }}>
                            &quot;We don&apos;t change the medicine. We change the infrastructure that medicine works through.&quot;
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* ── Section 3: Material Outcomes ── */}
            <div ref={outcomesRef} style={{ width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 56 : 128, paddingBottom: isMobile ? 56 : 128, background: '#F8F9FA', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: 'column', gap: isMobile ? 32 : 64 }}>

                    {/* Header */}
                    <div style={{ display: 'flex', flexDirection: compact ? 'column' : 'row', justifyContent: 'space-between', alignItems: compact ? 'flex-start' : 'baseline', gap: compact ? 6 : 0 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={outcomesInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, ease }}
                            style={{ color: '#001736', fontSize: isMobile ? 24 : 36, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '30px' : '40px' }}
                        >
                            Material Outcomes
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={outcomesInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, ease, delay: 0.1 }}
                            style={{ color: '#006970', fontSize: isMobile ? 10 : 14, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.4 }}
                        >
                            Operational Visibility Cluster
                        </motion.div>
                    </div>

                    {/* 2×2 grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '1fr 1fr', gap: isMobile ? 12 : 20 }}>

                        {/* Card 1: Systems Integration */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={outcomesInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.75, ease, delay: 0.05 }}
                            style={{ padding: isMobile ? 20 : 32, background: 'white', borderRadius: 8, border: '1px solid rgba(196,198,208,0.25)', display: 'flex', flexDirection: 'column', gap: 12 }}
                        >
                            <div style={{ height: 4, background: '#006970', borderRadius: 2, width: 40 }} />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 4 }}>
                                <div style={{ color: '#001736', fontSize: isMobile ? 17 : 20, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '26px' }}>Systems Integration</div>
                                <div style={{ color: '#43474F', fontSize: isMobile ? 13 : 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px' }}>
                                    Replacing fragmented manual logs with a unified digital nervous system for district facilities.
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: 98% Resource Uptime */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={outcomesInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.75, ease, delay: 0.12 }}
                            style={{ padding: isMobile ? 20 : 32, background: '#006970', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 12 }}
                        >
                            <div style={{ color: 'white', fontSize: isMobile ? 28 : 36, fontFamily: 'Inter', fontWeight: 600, lineHeight: '40px' }}>98%</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                <div style={{ color: 'white', fontSize: isMobile ? 15 : 18, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '26px' }}>Resource Uptime</div>
                                <div style={{ color: '#96F1FA', fontSize: isMobile ? 12 : 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px', opacity: 0.90 }}>
                                    Achieving consistency across the most remote facilities in the network.
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3: Patient-Centric Deployment */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={outcomesInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.75, ease, delay: 0.2 }}
                            style={{ padding: isMobile ? 20 : 32, background: '#E7E8E9', borderRadius: 8, border: '1px solid rgba(196,198,208,0.20)', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: isMobile ? 16 : 32 }}
                        >
                            <div style={{ width: isMobile ? 64 : 96, height: isMobile ? 64 : 96, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
                                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={hero1} alt="Patient-centric deployment" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                <div style={{ color: '#001736', fontSize: isMobile ? 15 : 20, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '24px' }}>Patient-Centric Deployment</div>
                                <div style={{ color: '#43474F', fontSize: isMobile ? 12 : 16, fontFamily: 'Inter', fontWeight: 400, lineHeight: isMobile ? '18px' : '26px' }}>
                                    Designing for the patients whose clinical experience ETOH is designed to change: those in limited-staff, high-volume environments.
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 4: Real-Time Coordination */}
                        <motion.div
                            initial={{ opacity: 0, x: 40, y: 20 }}
                            animate={outcomesInView ? { opacity: 1, x: 0, y: 0 } : {}}
                            transition={{ duration: 0.8, ease, delay: 0.28 }}
                            className="glass-sweep"
                            style={{ minHeight: isMobile ? 220 : 300, padding: isMobile ? 24 : 48, position: 'relative', background: '#001736', overflow: 'hidden', borderRadius: 8, display: 'flex', alignItems: 'flex-end' }}
                        >
                            <img style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.40 }} src={section3} alt="" />
                            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <div style={{ color: 'white', fontSize: isMobile ? 20 : 30, fontFamily: 'Manrope', fontWeight: 700, lineHeight: isMobile ? '26px' : '36px' }}>Real-Time Coordination</div>
                                <div style={{ color: '#D6E3FF', fontSize: isMobile ? 13 : 16, fontFamily: 'Inter', fontWeight: 400, lineHeight: isMobile ? '20px' : '26px' }}>
                                    A clinical team with full operational visibility and coordination tools delivers materially better care. ETOH installs the visibility that handles complexity rather than adding to it.
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* ── Section 4: A Disciplined Organization ── */}
            <div ref={disciplineRef} style={{ width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 56 : 128, paddingBottom: isMobile ? 56 : 128, position: 'relative', background: '#001736', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
                <img style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.10, pointerEvents: 'none' }} src={section3} alt="" />

                <div style={{ width: '100%', maxWidth: 1280, position: 'relative', display: 'flex', flexDirection: compact ? 'column' : 'row', gap: compact ? 36 : 80, alignItems: 'flex-start' }}>

                    {/* Left: text + pills */}
                    <motion.div
                        initial={{ opacity: 0, x: -xLg }}
                        animate={disciplineInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.9, ease }}
                        style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: isMobile ? 24 : 32 }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <div style={{ color: 'white', fontSize: isMobile ? 24 : 36, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '30px' : '40px' }}>
                                A Disciplined Organization
                            </div>
                            <div style={{ color: '#D6E3FF', fontSize: isMobile ? 14 : 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: isMobile ? '22px' : '29.25px' }}>
                                We have real operating costs and a long-term sustainability requirement. We believe a sustainable institution and a genuinely public health-oriented one are the same institution, built correctly.
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: 12 }}>
                            {[
                                {
                                    icon: <svg width="22" height="16" viewBox="0 0 24 24" fill="none"><path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.63 16.18 8.52 15H6.32C6.44 17.19 8.08 18.42 10 18.83V21H13V18.85C14.95 18.48 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.49 11.8 10.9Z" fill="#96F1FA"/></svg>,
                                    label: 'Public Sector Pricing',
                                    delay: 0.35,
                                },
                                {
                                    icon: <svg width="22" height="21" viewBox="0 0 24 24" fill="none"><path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 15.11 16.1 17.78 12 18.93V12H5V6.3L12 3.19V11.99Z" fill="#96F1FA"/></svg>,
                                    label: 'Long-term Ethics',
                                    delay: 0.47,
                                },
                            ].map((pill) => (
                                <motion.div
                                    key={pill.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={disciplineInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.55, ease, delay: pill.delay }}
                                    style={{ flex: 1, padding: isMobile ? 12 : 16, background: 'rgba(255,255,255,0.05)', borderRadius: 4, outline: '1px rgba(255,255,255,0.10) solid', outlineOffset: '-1px', display: 'flex', flexDirection: 'column', gap: 8 }}
                                >
                                    {pill.icon}
                                    <div style={{ color: '#96F1FA', fontSize: 10, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1 }}>{pill.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: quote card — quote-swipe */}
                    <motion.div
                        initial={{ opacity: 0, x: xLg, rotate: 2 }}
                        animate={disciplineInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
                        transition={{ duration: 0.9, ease, delay: 0.12 }}
                        style={{ flex: 1, padding: isMobile ? 24 : 48, position: 'relative', background: 'rgba(255,255,255,0.80)', overflow: 'hidden', borderRadius: 8, backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', gap: 20 }}
                    >
                        <div style={{ width: 128, height: 128, position: 'absolute', right: -32, top: -64, background: 'rgba(0,105,112,0.10)', borderRadius: 12, pointerEvents: 'none' }} />
                        <div style={{ color: '#001736', fontSize: isMobile ? 15 : 20, fontFamily: 'Inter', fontWeight: 500, lineHeight: isMobile ? '24px' : '32.5px', position: 'relative' }}>
                            &quot;Every design decision in ETOH reflects a commitment to the public health mission that precedes the commercial one.&quot;
                        </div>
                        <div style={{ color: '#43474F', fontSize: isMobile ? 12 : 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px', position: 'relative' }}>
                            — The ETOH Governance Charter, 2024
                        </div>
                    </motion.div>

                </div>
            </div>

        </PageLayout>
    )
}
