import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PageLayout from '../../../components/PageLayout'
import { useResponsive } from '../../../hooks/useResponsive'
import hero1 from './assets/hero1.png'
import section3 from './assets/section3.png'
import {
    User, X, Clock, CheckCircle2,
    FlaskConical, Activity, AlertTriangle,
    Users, Bell, Package,
    MonitorCheck, Zap
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]
const sharpEase = [0.25, 0.46, 0.45, 0.94]

const heroLines = [
    'The full picture of every patient.',
    'In the pocket of every clinician.',
]

export default function ForCliniciansPage() {
    const { isMobile } = useResponsive()

    // Refs
    const heroTextRef = useRef(null)
    const heroImageRef = useRef(null)
    const imperativeRef = useRef(null)
    const liveRecordRef = useRef(null)
    const closingRef = useRef(null)
    const stepsRef = useRef(null)
    const confirmRef = useRef(null)

    // InView
    useInView(heroTextRef, { once: true, amount: 0.3 })
    useInView(heroImageRef, { once: true, amount: 0.2 })
    const imperativeInView = useInView(imperativeRef, { once: true, amount: 0.15 })
    const liveRecordInView = useInView(liveRecordRef, { once: true, amount: 0.1 })
    const closingInView = useInView(closingRef, { once: true, amount: 0.1 })
    useInView(stepsRef, { once: true, amount: 0.2 })
    const confirmInView = useInView(confirmRef, { once: true, amount: 0.5 })

    return (
        <PageLayout fullWidth={true} seoTitle="For Clinicians" seoDescription="ETOH Health's clinician platform — zero-latency patient records, AI-assisted triage tools, and intelligent clinical decision support at the point of care.">
            <style>{`
                @keyframes accentPulse {
                    0%   { opacity: 1; }
                    40%  { opacity: 0.6; }
                    100% { opacity: 1; }
                }
                @keyframes edgeGlow {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(150, 241, 250, 0); }
                    50%       { box-shadow: 0 0 18px 4px rgba(150, 241, 250, 0.18); }
                }
                @keyframes dataFill {
                    from { width: 0%; }
                    to   { width: 66%; }
                }
                @keyframes barFill {
                    from { transform: scaleY(0); }
                    to   { transform: scaleY(1); }
                }
                @keyframes networkPulse {
                    0%, 100% { transform: scale(1); }
                    50%       { transform: scale(1.08); }
                }
                @keyframes shadowExpand {
                    from { box-shadow: 0px 4px 10px -4px rgba(0,0,0,0.10); }
                    to   { box-shadow: 0px 25px 50px -12px rgba(0,0,0,0.25); }
                }
                .hover-raise {
                    transition: transform 0.18s ease, box-shadow 0.18s ease;
                }
                .hover-raise:hover {
                    transform: translateY(-4px);
                    box-shadow: 0px 20px 40px -8px rgba(0,0,0,0.12);
                }
                .dark-hover-raise {
                    transition: transform 0.18s ease, box-shadow 0.18s ease;
                }
                .dark-hover-raise:hover {
                    transform: translateY(-4px);
                    box-shadow: 0px 20px 40px -8px rgba(0,0,0,0.40);
                }
                .glass-sweep {
                    position: relative;
                    overflow: hidden;
                }
                .glass-sweep::after {
                    content: '';
                    position: absolute;
                    top: 0; left: -100%;
                    width: 60%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
                    transition: left 0.5s ease;
                    pointer-events: none;
                }
                .glass-sweep:hover::after {
                    left: 140%;
                }
                .btn-press {
                    transition: transform 0.12s ease, opacity 0.12s ease;
                }
                .btn-press:hover {
                    transform: translateY(-2px);
                    opacity: 0.92;
                }
                .btn-press:active {
                    transform: translateY(0px) scale(0.98);
                }
                .edge-glow-card {
                    animation: edgeGlow 3s ease-in-out infinite;
                    animation-delay: 1.5s;
                }
                .bar-animated {
                    transform-origin: bottom;
                    animation: barFill 0.5s ease forwards;
                    transform: scaleY(0);
                }
            `}</style>

            {/* ── Section 1: Hero ── */}
            <div style={{
                width: '100%',
                paddingLeft: isMobile ? 20 : 32,
                paddingRight: isMobile ? 20 : 32,
                paddingTop: isMobile ? 80 : 128,
                paddingBottom: isMobile ? 64 : 128,
                position: 'relative',
                background: '#001736',
                overflow: 'hidden',
                boxSizing: 'border-box',
                display: 'flex',
            }}>
                {/* Background image overlay */}
                <motion.img
                    src={hero1}
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.10 }}
                    transition={{ duration: 1.6, ease: sharpEase }}
                    style={{
                        width: 427,
                        height: '100%',
                        right: 0,
                        top: 0,
                        position: 'absolute',
                        objectFit: 'cover',
                    }}
                />
                <div style={{
                    width: '100%',
                    maxWidth: 1216,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? 40 : 64,
                    alignItems: 'flex-start',
                }}>
                    {/* Left: text content */}
                    <div ref={heroTextRef} style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 32,
                    }}>
                        {/* Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: sharpEase, delay: 0.1 }}
                            style={{
                                display: 'inline-flex',
                                paddingLeft: 12,
                                paddingRight: 12,
                                paddingTop: 4,
                                paddingBottom: 4,
                                background: 'rgba(0, 105, 112, 0.20)',
                                borderRadius: 2,
                                width: 'fit-content',
                            }}>
                            <span style={{
                                color: '#96F1FA',
                                fontSize: 10,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                textTransform: 'uppercase',
                                lineHeight: '15px',
                                letterSpacing: 1,
                            }}>
                                Clinician Experience
                            </span>
                        </motion.div>

                        {/* Headline — clinical-line-stagger */}
                        <div style={{ overflow: 'hidden' }}>
                            {heroLines.map((line, i) => (
                                <div key={line} style={{ overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ y: 24, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.38,
                                            ease: sharpEase,
                                            delay: 0.2 + i * 0.08,
                                        }}
                                        style={{
                                            fontSize: isMobile ? 32 : 52,
                                            fontFamily: 'Manrope, sans-serif',
                                            fontWeight: 800,
                                            lineHeight: isMobile ? '40px' : '62px',
                                            color: 'white',
                                        }}
                                    >
                                        {line}
                                    </motion.div>
                                </div>
                            ))}
                        </div>

                        {/* Subtext */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: sharpEase, delay: 0.78 }}
                            style={{
                                maxWidth: 512,
                                color: '#7594CA',
                                fontSize: isMobile ? 16 : 20,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: isMobile ? '26px' : '32.5px',
                            }}>
                            Clinical decisions happen at the bedside, in the
                            corridor, and between consultations. ETOH goes
                            where the clinician goes — and it brings
                            everything they need with it.
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: sharpEase, delay: 0.92 }}
                            style={{
                                paddingTop: 16,
                                display: 'flex',
                                gap: 16,
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}>
                            <button className="btn-press" onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=Request Deployment'} style={{
                                paddingLeft: 32,
                                paddingRight: 32,
                                paddingTop: 16,
                                paddingBottom: 16,
                                background: 'linear-gradient(90deg, #001736 0%, #002B5B 100%)',
                                borderRadius: 6,
                                border: 'none',
                                outline: '1px rgba(196, 198, 208, 0.20) solid',
                                outlineOffset: -1,
                                cursor: 'pointer',
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                lineHeight: '24px',
                            }}>
                                Request Deployment
                            </button>
                            <button className="btn-press" onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=System Specs'} style={{
                                paddingLeft: 32,
                                paddingRight: 32,
                                paddingTop: 16,
                                paddingBottom: 16,
                                background: 'transparent',
                                borderRadius: 6,
                                border: 'none',
                                outline: '1px rgba(196, 198, 208, 0.30) solid',
                                outlineOffset: -1,
                                cursor: 'pointer',
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                lineHeight: '24px',
                            }}>
                                System Specs
                            </button>
                        </motion.div>
                    </div>

                    {/* Right: image card — device-activate */}
                    <div ref={heroImageRef} style={{
                        flex: '0 0 auto',
                        maxWidth: isMobile ? '100%' : 710,
                        width: isMobile ? '100%' : undefined,
                        position: 'relative',
                        display: isMobile ? 'none' : 'flex',
                        flexDirection: 'column',
                    }}>
                        {/* Glow */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, ease: sharpEase, delay: 0.5 }}
                            style={{
                                width: 710,
                                height: 600,
                                position: 'absolute',
                                background: 'rgba(0, 105, 112, 0.10)',
                                borderRadius: 12,
                                filter: 'blur(32px)',
                            }}
                        />
                        {/* Device frame — device-activate */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: ease, delay: 0.4 }}
                            style={{
                                height: 600,
                                position: 'relative',
                                background: 'rgba(255, 255, 255, 0)',
                                boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                overflow: 'hidden',
                                borderRadius: 16,
                                outline: '1px rgba(255, 255, 255, 0.10) solid',
                                outlineOffset: -1,
                            }}>
                            {/* screen-wake: image fades in with slight brightness */}
                            <motion.img
                                src={hero1}
                                alt="Clinical Terminal"
                                initial={{ opacity: 0, filter: 'brightness(0.3)' }}
                                animate={{ opacity: 1, filter: 'brightness(1)' }}
                                transition={{ duration: 0.9, ease: sharpEase, delay: 0.65 }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                            {/* Patient info overlay — card-dock */}
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.55, ease: ease, delay: 1.0 }}
                                style={{
                                    position: 'absolute',
                                    left: 25,
                                    bottom: 25,
                                    right: 25,
                                    padding: 24,
                                    background: 'rgba(255, 255, 255, 0.80)',
                                    borderRadius: 8,
                                    outline: '1px rgba(255, 255, 255, 0.20) solid',
                                    outlineOffset: -1,
                                    backdropFilter: 'blur(10px)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 16,
                                }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        <div style={{
                                            width: 40,
                                            height: 40,
                                            background: '#006970',
                                            borderRadius: 12,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <User size={16} color="white" strokeWidth={2} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{
                                                color: '#43474F',
                                                fontSize: 10,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 400,
                                                textTransform: 'uppercase',
                                                lineHeight: '15px',
                                            }}>
                                                Active Patient
                                            </span>
                                            <span style={{
                                                color: '#001736',
                                                fontSize: 14,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 700,
                                                lineHeight: '20px',
                                            }}>
                                                Case #882-Alpha
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                        <span style={{
                                            color: '#43474F',
                                            fontSize: 10,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 400,
                                            textTransform: 'uppercase',
                                            lineHeight: '15px',
                                        }}>
                                            Live Vitals
                                        </span>
                                        <span style={{
                                            color: '#006970',
                                            fontSize: 14,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 700,
                                            lineHeight: '20px',
                                            animation: 'accentPulse 1.2s ease-out 1.4s 1 forwards',
                                        }}>
                                            STABLE
                                        </span>
                                    </div>
                                </div>
                                {/* Progress bar — data-fill */}
                                <div style={{
                                    height: 4,
                                    background: '#EDEEEF',
                                    borderRadius: 12,
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}>
                                    <motion.div
                                        initial={{ width: '0%' }}
                                        animate={{ width: '66%' }}
                                        transition={{ duration: 0.8, ease: sharpEase, delay: 1.3 }}
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            height: '100%',
                                            background: '#006970',
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── Section 2: The Clinical Imperative ── */}
            <div style={{
                width: '100%',
                paddingTop: 96,
                paddingBottom: 96,
                background: '#F8F9FA',
                boxSizing: 'border-box',
            }}>
                <div
                    ref={imperativeRef}
                    style={{
                        maxWidth: 1280,
                        margin: '0 auto',
                        paddingLeft: isMobile ? 20 : 32,
                        paddingRight: isMobile ? 20 : 32,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: isMobile ? 40 : 80,
                    }}>
                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={imperativeInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, ease: sharpEase }}
                        style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
                    >
                        <div style={{
                            color: '#001736',
                            fontSize: 36,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            lineHeight: '40px',
                        }}>
                            The Clinical Imperative
                        </div>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={imperativeInView ? { width: 96 } : {}}
                            transition={{ duration: 0.5, ease: sharpEase, delay: 0.2 }}
                            style={{ height: 4, background: '#006970' }}
                        />
                    </motion.div>

                    {/* Comparison cards */}
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 24, alignItems: 'stretch' }}>
                        {/* Legacy Workflow — comparison-slide-left */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={imperativeInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.55, ease: ease, delay: 0.15 }}
                            className="hover-raise"
                            style={{
                                flex: 1,
                                paddingTop: isMobile ? 28 : 48,
                                paddingBottom: isMobile ? 28 : 80,
                                paddingLeft: isMobile ? 24 : 48,
                                paddingRight: isMobile ? 24 : 48,
                                background: '#F3F4F5',
                                borderRadius: 16,
                                borderLeft: '4px rgba(196, 198, 208, 0.30) solid',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 32,
                            }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <Clock size={18} color="#43474F" strokeWidth={2} />
                                <span style={{
                                    color: '#43474F',
                                    fontSize: 24,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '32px',
                                }}>
                                    The Legacy Workflow
                                </span>
                            </div>
                            {/* issue-stagger */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                {[
                                    { title: 'Fragmented Memory', desc: 'Clinicians rely on scribbled notes on paper or physical charts that stay at the nursing station.' },
                                    { title: 'Information Lag', desc: 'Waiting for physical lab printouts or returning to a central PC to check for updates.' },
                                    { title: 'Administrative Friction', desc: 'High cognitive load from reconciling disparate data sources while standing at the bedside.' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={imperativeInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, ease: sharpEase, delay: 0.3 + i * 0.1 }}
                                        style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}
                                    >
                                        <X size={14} color="#BA1A1A" strokeWidth={3} style={{ marginTop: 5, flexShrink: 0 }} />
                                        <div>
                                            <div style={{
                                                color: '#001736',
                                                fontSize: 16,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 700,
                                                lineHeight: '24px',
                                            }}>
                                                {item.title}
                                            </div>
                                            <div style={{
                                                color: '#64748B',
                                                fontSize: 14,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 400,
                                                lineHeight: '20px',
                                            }}>
                                                {item.desc}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* ETOH Standard — comparison-slide-right */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={imperativeInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.55, ease: ease, delay: 0.3 }}
                            className="dark-hover-raise glass-sweep"
                            style={{
                                flex: 1,
                                paddingTop: isMobile ? 28 : 80,
                                paddingBottom: isMobile ? 28 : 48,
                                paddingLeft: isMobile ? 24 : 48,
                                paddingRight: isMobile ? 24 : 48,
                                position: 'relative',
                                background: '#001736',
                                boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                overflow: 'hidden',
                                borderRadius: 16,
                                borderLeft: '4px #006970 solid',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 32,
                            }}>
                            {/* Decorative SVG icon */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7 }}
                                animate={imperativeInView ? { opacity: 0.12, scale: 1 } : {}}
                                transition={{ duration: 0.6, ease: ease, delay: 0.5 }}
                                style={{
                                    position: 'absolute',
                                    right: 32,
                                    top: 32,
                                }}>
                                <svg width="86" height="107" viewBox="0 0 86 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M34.9333 86.4L62.5333 53.3333H41.2L45.0667 23.0667L20.4 58.6667H38.9333L34.9333 86.4ZM21.3333 106.667L26.6667 69.3333H0L48 0H58.6667L53.3333 42.6667H85.3333L32 106.667H21.3333Z" fill="white"/>
                                </svg>
                            </motion.div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={imperativeInView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ duration: 0.35, ease: sharpEase, delay: 0.5 }}
                                >
                                    <Zap size={22} color="#96F1FA" strokeWidth={2} />
                                </motion.div>
                                <span style={{
                                    color: '#96F1FA',
                                    fontSize: 24,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '32px',
                                }}>
                                    The ETOH Standard
                                </span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                {[
                                    { title: 'Instant Truth', desc: 'Live synchronization ensures that the device in your hand matches the reality of the ward.' },
                                    { title: 'Frictionless Decisions', desc: 'Integrated diagnostic data allows for immediate verification and prescription adjustments.' },
                                    { title: 'Closed-Loop Precision', desc: "Commands issued on-app trigger immediate workflows, eliminating the 'wait for clerk' phase." },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, x: 16 }}
                                        animate={imperativeInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, ease: sharpEase, delay: 0.45 + i * 0.1 }}
                                        style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}
                                    >
                                        <motion.div
                                            initial={{ scale: 0.8 }}
                                            animate={imperativeInView ? { scale: 1 } : {}}
                                            transition={{ duration: 0.3, ease: ease, delay: 0.5 + i * 0.1 }}
                                        >
                                            <CheckCircle2 size={20} color="#96F1FA" strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                                        </motion.div>
                                        <div>
                                            <div style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 700,
                                                lineHeight: '24px',
                                            }}>
                                                {item.title}
                                            </div>
                                            <div style={{
                                                color: '#7594CA',
                                                fontSize: 14,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 400,
                                                lineHeight: '20px',
                                            }}>
                                                {item.desc}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── Section 3: The Full Live Record ── */}
            <div style={{
                width: '100%',
                paddingTop: 96,
                paddingBottom: 96,
                background: '#F3F4F5',
                overflow: 'hidden',
                boxSizing: 'border-box',
            }}>
                <div
                    ref={liveRecordRef}
                    style={{
                        maxWidth: 1280,
                        margin: '0 auto',
                        paddingLeft: isMobile ? 20 : 32,
                        paddingRight: isMobile ? 20 : 32,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: isMobile ? 40 : 80,
                    }}>
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={liveRecordInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, ease: sharpEase }}
                        style={{
                            maxWidth: 672,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 8,
                        }}>
                        <span style={{
                            color: '#006970',
                            fontSize: 11,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            lineHeight: '16.5px',
                            letterSpacing: 1.1,
                            textAlign: 'center',
                        }}>
                            Comprehensive Visualization
                        </span>
                        <div style={{
                            color: '#001736',
                            fontSize: 36,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            lineHeight: '40px',
                            textAlign: 'center',
                        }}>
                            The Full Live Record
                        </div>
                        <div style={{
                            paddingTop: 8,
                            color: '#43474F',
                            fontSize: 16,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            lineHeight: '24px',
                            textAlign: 'center',
                        }}>
                            No more scrolling through static PDFs. Explore clinical data through an interactive, live-updating architectural interface.
                        </div>
                    </motion.div>

                    {/* Bento grid — module-wave / focus-card */}
                    <div style={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                        gridTemplateRows: 'auto',
                        gap: 16,
                    }}>
                        {/* Row 1 */}
                        <div style={{ display: 'contents' }}>
                            {/* Live Diagnostics */}
                            <motion.div
                                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                                animate={liveRecordInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                                transition={{ duration: 0.5, ease: ease, delay: 0.0 }}
                                className="hover-raise"
                                style={{
                                    padding: 32,
                                    background: 'white',
                                    borderRadius: 16,
                                    border: '1px solid rgba(196, 198, 208, 0.40)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}>
                                <div>
                                    <FlaskConical size={24} color="#006970" strokeWidth={1.5} />
                                    <div style={{
                                        marginTop: 20,
                                        color: '#001736',
                                        fontSize: 20,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 700,
                                        lineHeight: '28px',
                                    }}>
                                        Live Diagnostics
                                    </div>
                                    <div style={{
                                        marginTop: 8,
                                        color: '#43474F',
                                        fontSize: 14,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '20px',
                                    }}>
                                        Real-time lab results with historical trend overlays and predictive drift analysis.
                                    </div>
                                </div>
                                {/* Bar chart — bar-fill-stagger */}
                                <div style={{
                                    marginTop: 32,
                                    height: 64,
                                    padding: 8,
                                    background: '#EDEEEF',
                                    borderRadius: 2,
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    gap: 4,
                                    overflow: 'hidden',
                                }}>
                                    {[
                                        { h: '20%', op: 0.3 },
                                        { h: '45%', op: 0.5 },
                                        { h: '65%', op: 0.7 },
                                        { h: '90%', op: 1 },
                                        { h: '55%', op: 0.8 },
                                    ].map((bar, bi) => (
                                        <motion.div
                                            key={bi}
                                            initial={{ scaleY: 0 }}
                                            animate={liveRecordInView ? { scaleY: 1 } : {}}
                                            transition={{ duration: 0.4, ease: sharpEase, delay: 0.35 + bi * 0.08 }}
                                            style={{
                                                flex: 1,
                                                height: bar.h,
                                                opacity: bar.op,
                                                background: '#006970',
                                                transformOrigin: 'bottom',
                                            }}
                                        />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Nursing Obs */}
                            <motion.div
                                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                                animate={liveRecordInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                                transition={{ duration: 0.5, ease: ease, delay: 0.1 }}
                                className="hover-raise"
                                style={{
                                    padding: 32,
                                    background: 'white',
                                    borderRadius: 16,
                                    border: '1px solid rgba(196, 198, 208, 0.40)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}>
                                <div style={{ paddingBottom: 16 }}>
                                    <Activity size={25} color="#006970" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div style={{
                                        color: '#001736',
                                        fontSize: 18,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 600,
                                        lineHeight: '28px',
                                    }}>
                                        Nursing Obs
                                    </div>
                                    <div style={{
                                        color: '#43474F',
                                        fontSize: 12,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '15px',
                                        marginTop: 4,
                                    }}>
                                        Vitals, pain scales, and fluid balance
                                        charts updated by the minute.
                                    </div>
                                </div>
                            </motion.div>

                            {/* Critical Flags — edge-glow */}
                            <motion.div
                                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                                animate={liveRecordInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                                transition={{ duration: 0.5, ease: ease, delay: 0.2 }}
                                className="edge-glow-card dark-hover-raise"
                                style={{
                                    padding: 32,
                                    position: 'relative',
                                    background: '#001736',
                                    borderRadius: 16,
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}>
                                <div style={{ paddingBottom: 16 }}>
                                    <AlertTriangle size={22.5} color="#96F1FA" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div style={{
                                        color: 'white',
                                        fontSize: 18,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 600,
                                        lineHeight: '28px',
                                    }}>
                                        Critical Flags
                                    </div>
                                    <div style={{
                                        color: '#7594CA',
                                        fontSize: 12,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '15px',
                                        marginTop: 4,
                                    }}>
                                        AI-driven early warning scores (EWS)
                                        that alert you before a crisis occurs.
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Row 2 */}
                        <div style={{ display: 'contents' }}>
                            {/* Prescription Integrity */}
                            <motion.div
                                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                                animate={liveRecordInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                                transition={{ duration: 0.5, ease: ease, delay: 0.3 }}
                                className="hover-raise"
                                style={{
                                    padding: isMobile ? 20 : 32,
                                    background: 'white',
                                    borderRadius: 16,
                                    border: '1px solid rgba(196, 198, 208, 0.40)',
                                    display: 'flex',
                                    flexDirection: isMobile ? 'column' : 'row',
                                    alignItems: isMobile ? 'flex-start' : 'center',
                                    gap: isMobile ? 16 : 32,
                                    gridColumn: isMobile ? 'span 1' : 'span 2',
                                }}>
                                <div style={{
                                    width: 128,
                                    height: 128,
                                    flexShrink: 0,
                                    padding: 16,
                                    borderRadius: 12,
                                    outline: '4px rgba(0, 105, 112, 0.20) solid',
                                    outlineOffset: -4,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <img
                                        src={section3}
                                        alt="Prescription"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                        }}
                                    />
                                </div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                    <div style={{
                                        color: '#001736',
                                        fontSize: 20,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 600,
                                        lineHeight: '28px',
                                    }}>
                                        Prescription Integrity
                                    </div>
                                    <div style={{
                                        color: '#43474F',
                                        fontSize: 14,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '20px',
                                    }}>
                                        Full medication history including reconciliation notes,
                                        dosage schedules, and contraindication alerts.
                                    </div>
                                </div>
                            </motion.div>

                            {/* MDT Collaboration */}
                            <motion.div
                                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                                animate={liveRecordInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                                transition={{ duration: 0.5, ease: ease, delay: 0.4 }}
                                className="hover-raise"
                                style={{
                                    padding: 32,
                                    background: 'white',
                                    borderRadius: 16,
                                    border: '1px solid rgba(196, 198, 208, 0.40)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                <Users size={25} color="#006970" strokeWidth={1.5} />
                                <div style={{
                                    marginTop: 20,
                                    color: '#001736',
                                    fontSize: 20,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '28px',
                                }}>
                                    MDT Collaboration
                                </div>
                                <div style={{
                                    marginTop: 8,
                                    color: '#43474F',
                                    fontSize: 14,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '20px',
                                }}>
                                    Read input from specialists, physios, and social care in one unified timeline.
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 4: Closing the Loop ── */}
            <div
                ref={closingRef}
                style={{
                    width: '100%',
                    paddingLeft: isMobile ? 20 : 32,
                    paddingRight: isMobile ? 20 : 32,
                    paddingTop: isMobile ? 60 : 96,
                    paddingBottom: isMobile ? 60 : 96,
                    background: '#F8F9FA',
                    boxSizing: 'border-box',
                }}>
                <div style={{
                    maxWidth: 1216,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? 48 : 0,
                }}>
                    {/* Left: text + steps — workflow-stagger */}
                    <div ref={stepsRef} style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16,
                    }}>
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            animate={closingInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, ease: sharpEase }}
                            style={{
                                color: '#006970',
                                fontSize: 11,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                lineHeight: '16.5px',
                                letterSpacing: 1.1,
                            }}>
                            The Technical Core
                        </motion.span>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={closingInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.45, ease: sharpEase, delay: 0.1 }}
                            style={{
                                color: '#001736',
                                fontSize: 36,
                                fontFamily: 'Manrope, sans-serif',
                                fontWeight: 700,
                                lineHeight: '40px',
                            }}>
                            Closing the Loop
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={closingInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.45, ease: sharpEase, delay: 0.2 }}
                            style={{
                                paddingTop: 8,
                                color: '#43474F',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: '26px',
                            }}>
                            The ETOH App isn&apos;t just a viewer—it&apos;s an actor. When you sign
                            off on a clinical decision, the system initiates an immediate
                            chain of operational events. This is &quot;Zero-Lag&quot; Clinical
                            Operations.
                        </motion.div>

                        {/* Steps — workflow-stagger */}
                        <div style={{
                            paddingTop: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            gap: 24,
                        }}>
                            {[
                                { step: '1. Decision Input', desc: "Clinician enters an order (e.g., 'Escalate IV Fluids').", indent: 0 },
                                { step: '2. Automated Validation', desc: 'System checks against patient allergy profile and hospital protocol.', indent: 1 },
                                { step: '3. Action Trigger', desc: 'Pharmacy is notified, nursing task list is updated, and ward capacity is adjusted.', indent: 2 },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={closingInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.45, ease: ease, delay: 0.3 + i * 0.15 }}
                                    className="hover-raise"
                                    style={{
                                        width: isMobile ? '100%' : (i === 0 ? '100%' : i === 1 ? 'calc(100% - 32px)' : 'calc(100% - 48px)'),
                                        padding: 24,
                                        background: 'white',
                                        borderRadius: 4,
                                        borderLeft: '2px #006970 solid',
                                    }}>
                                    <div style={{
                                        color: '#001736',
                                        fontSize: 16,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 600,
                                        lineHeight: '24px',
                                    }}>
                                        {item.step}
                                    </div>
                                    <div style={{
                                        color: '#64748B',
                                        fontSize: 14,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '20px',
                                    }}>
                                        {item.desc}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: The Loop Is Sealed card */}
                    <div style={{
                        flex: 1,
                        padding: isMobile ? 0 : 48,
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {/* Background molecule image */}
                        <img
                            src={section3}
                            alt=""
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                opacity: 0.001,
                                transform: 'rotate(12deg)',
                                transformOrigin: 'top left',
                            }}
                        />

                        {/* confirmation-pop */}
                        <motion.div
                            ref={confirmRef}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={closingInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, ease: ease, delay: 0.2 }}
                            style={{
                                width: '100%',
                                maxWidth: 448,
                                paddingTop: isMobile ? 48 : 111,
                                paddingBottom: isMobile ? 48 : 111,
                                position: 'relative',
                                background: 'rgba(255, 255, 255, 0.80)',
                                borderRadius: 12,
                                outline: '1px rgba(196, 198, 208, 0.30) solid',
                                outlineOffset: -1,
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            }}>
                            {/* Top floating icon — network-connect */}
                            <motion.div
                                initial={{ y: -16, opacity: 0 }}
                                animate={confirmInView ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.8, ease: ease, delay: 0.2 }}
                                style={{
                                    display: isMobile ? 'none' : 'flex',
                                    position: 'absolute',
                                    top: -24,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 50,
                                    height: 50,
                                    background: 'white',
                                    borderRadius: 8,
                                    outline: '1px rgba(196, 198, 208, 0.20) solid',
                                    outlineOffset: -1,
                                    boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <motion.div
                                    animate={confirmInView ? { rotate: [0, 15, -10, 0] } : {}}
                                    transition={{ duration: 0.6, ease: sharpEase, delay: 0.6 }}
                                >
                                    <Bell size={24} color="#006970" strokeWidth={1.5} />
                                </motion.div>
                            </motion.div>

                            {/* Bottom-left floating icon */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={confirmInView ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.8, ease: ease, delay: 0.35 }}
                                style={{
                                    display: isMobile ? 'none' : 'flex',
                                    position: 'absolute',
                                    bottom: 60,
                                    left: -24,
                                    width: 50,
                                    height: 50,
                                    background: 'white',
                                    borderRadius: 8,
                                    outline: '1px rgba(196, 198, 208, 0.20) solid',
                                    outlineOffset: -1,
                                    boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Users size={24} color="#006970" strokeWidth={1.5} />
                            </motion.div>

                            {/* Bottom-right floating icon */}
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={confirmInView ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.8, ease: ease, delay: 0.5 }}
                                style={{
                                    display: isMobile ? 'none' : 'flex',
                                    position: 'absolute',
                                    bottom: 60,
                                    right: -24,
                                    width: 50,
                                    height: 50,
                                    background: 'white',
                                    borderRadius: 8,
                                    outline: '1px rgba(196, 198, 208, 0.20) solid',
                                    outlineOffset: -1,
                                    boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Package size={24} color="#006970" strokeWidth={1.5} />
                            </motion.div>

                            {/* Center content */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={closingInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, ease: sharpEase, delay: 0.4 }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 8,
                                }}>
                                {/* Logo icon — network-connect pulse */}
                                <motion.div
                                    animate={closingInView ? { scale: [1, 1.06, 1] } : {}}
                                    transition={{ duration: 0.5, ease: sharpEase, delay: 0.75 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 24 }}
                                >
                                    <MonitorCheck size={55} color="#001736" strokeWidth={1.2} />
                                    <div style={{
                                        position: 'relative',
                                        marginLeft: -8,
                                        marginTop: -20,
                                        width: 24,
                                        height: 24,
                                        background: '#006970',
                                        borderRadius: 12,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <span style={{
                                            color: 'white',
                                            fontSize: 10,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 700,
                                            lineHeight: '15px',
                                        }}>
                                            LIVE
                                        </span>
                                    </div>
                                </motion.div>
                                <div style={{
                                    color: '#001736',
                                    fontSize: 18,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 800,
                                    lineHeight: '28px',
                                    textAlign: 'center',
                                }}>
                                    The Loop Is Sealed
                                </div>
                                <div style={{
                                    color: '#43474F',
                                    fontSize: 14,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '20px',
                                    textAlign: 'center',
                                    maxWidth: 300,
                                }}>
                                    &quot;Documentation is no longer a separate task.
                                    Documentation IS the clinical action.&quot;
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
