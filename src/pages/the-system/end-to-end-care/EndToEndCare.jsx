import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useResponsive } from '../../../hooks/useResponsive'
import PageLayout from '../../../components/PageLayout'
import hero1 from '../../../assets/END-END-CARE/HERO1.png'
import endEndImg from '../../../assets/END-END-CARE/end-end.png'
import { ArrowRight, DatabaseZap, Lock } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]
const sharp = [0.25, 0.46, 0.45, 0.94]

const heroLines = [
    { text: 'From the first', last: false },
    { text: 'contact to the last', last: false },
    { text: 'follow-up. The', last: false },
    { text: 'complete episode of', last: false },
    { text: 'care, connected.', last: true },
]

const stageCards = [
    { num: '01', title: 'Pre-Admission', sub: null, desc: 'Early data gathering and risk assessment before the patient even enters the facility.' },
    { num: '02', title: 'Admission', sub: 'Automated\nHandoff', desc: 'Instant verification and record matching. No duplicate data entry required.' },
    { num: '03', title: 'Inpatient Care', sub: null, desc: 'Dynamic clinical monitoring and diagnostics integrated into the primary thread.', active: true },
    { num: '04', title: 'Discharge', sub: null, desc: 'Intelligent discharge planning starts on day one, ensuring a prepared exit.' },
    { num: '05', title: 'Recovery', sub: null, desc: 'Continuous remote monitoring and follow-up loops to prevent readmission.' },
]

export default function EndtoEndCarePage() {
    const { isMobile, isTablet } = useResponsive()
    const threadRef = useRef(null)
    const noGapsRef = useRef(null)
    const continuousRef = useRef(null)
    const ctaRef = useRef(null)

    const threadInView = useInView(threadRef, { once: true, amount: 0.2 })
    const noGapsInView = useInView(noGapsRef, { once: true, amount: 0.25 })
    const continuousInView = useInView(continuousRef, { once: true, amount: 0.25 })
    const ctaInView = useInView(ctaRef, { once: true, amount: 0.25 })

    return (
        <PageLayout fullWidth={true} lightHero>
            <style>{`
                @keyframes connectionPulse {
                    0%   { text-shadow: 0 0 0px rgba(0,105,112,0); }
                    40%  { text-shadow: 0 0 18px rgba(0,105,112,0.5); }
                    100% { text-shadow: 0 0 0px rgba(0,105,112,0); }
                }
                @keyframes statusDotPulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(0, 105, 112, 0.4); }
                    50%       { box-shadow: 0 0 0 6px rgba(0, 105, 112, 0); }
                }
                @keyframes glassSwipe {
                    0%   { left: -80%; }
                    100% { left: 140%; }
                }
                @keyframes activeGlow {
                    0%, 100% { box-shadow: 0px 8px 10px -6px rgba(0,0,0,0.10), 0px 20px 25px -5px rgba(0,0,0,0.10); }
                    50%       { box-shadow: 0px 8px 10px -6px rgba(0,105,112,0.20), 0px 20px 40px -5px rgba(0,105,112,0.20); }
                }
                .btn-primary {
                    transition: transform 0.15s ease, box-shadow 0.15s ease;
                }
                .btn-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0px 16px 24px -6px rgba(0, 23, 54, 0.25);
                }
                .btn-primary:active { transform: scale(0.98); }
                .btn-secondary {
                    transition: transform 0.15s ease, outline-color 0.2s ease;
                }
                .btn-secondary:hover {
                    transform: translateY(-2px);
                    outline: 2px solid rgba(0,105,112,0.4);
                    outline-offset: -2px;
                }
                .card-hover {
                    transition: transform 0.18s ease, box-shadow 0.18s ease;
                }
                .card-hover:hover {
                    transform: translateY(-4px);
                    box-shadow: 0px 16px 32px -8px rgba(0,0,0,0.12);
                }
                .glass-card {
                    position: relative;
                    overflow: hidden;
                }
                .glass-card::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -80%;
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
                    pointer-events: none;
                    animation: glassSwipe 7s ease-in-out infinite;
                    animation-delay: 2s;
                }
                .active-stage {
                    animation: activeGlow 2.5s ease-in-out 1.2s 2;
                }
                .status-dot {
                    animation: statusDotPulse 2s ease-in-out infinite;
                }
            `}</style>

            {/* ── Section 1: Hero ── */}
            <div style={{
                width: '100%',
                paddingTop: isMobile ? 80 : 128,
                paddingBottom: isMobile ? 64 : 128,
                paddingLeft: isMobile ? 16 : 24,
                paddingRight: isMobile ? 16 : 24,
                background: 'white',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div style={{
                    maxWidth: 1232,
                    width: '100%',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'stretch' : 'center',
                    gap: isMobile ? 32 : 48,
                }}>
                    {/* Left: text content */}
                    <div style={{
                        flex: '1 1 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24,
                    }}>
                        {/* Label — eyebrow-fade */}
                        <motion.div
                            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5, ease: sharp }}
                            style={{
                                display: 'inline-flex',
                                paddingLeft: 12,
                                paddingRight: 12,
                                paddingTop: 4,
                                paddingBottom: 4,
                                background: '#E7E8E9',
                                borderRadius: 2,
                                width: 'fit-content',
                            }}>
                            <span style={{
                                color: '#006970',
                                fontSize: 12,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                lineHeight: '16px',
                                letterSpacing: 2.4,
                            }}>
                                End-to-End Care
                            </span>
                        </motion.div>

                        {/* Headline — journey-line-reveal */}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {heroLines.map((line, i) => (
                                <div key={i} style={{ overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -24 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.7,
                                            ease: ease,
                                            delay: 0.1 + i * 0.09,
                                        }}
                                        style={{
                                            color: '#001736',
                                            fontSize: isMobile ? 36 : isTablet ? 48 : 72,
                                            fontFamily: 'Manrope, sans-serif',
                                            fontWeight: 800,
                                            lineHeight: isMobile ? '40px' : isTablet ? '52px' : '72px',
                                            ...(line.last && {
                                                animation: 'connectionPulse 1.4s ease-out 0.9s 1 forwards',
                                                display: 'inline-block',
                                            }),
                                        }}
                                    >
                                        {line.text}
                                    </motion.div>
                                </div>
                            ))}
                        </div>

                        {/* Subtext — soft-rise */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: ease, delay: 0.6 }}
                            style={{
                                maxWidth: 672,
                                paddingTop: 8,
                                color: '#43474F',
                                fontSize: isMobile ? 16 : 24,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: '32px',
                            }}>
                            ETOH is built around a simple architectural conviction: the
                            episode of care is one thing, not many.
                        </motion.div>

                        {/* Button — button-rise */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: sharp, delay: 0.75 }}
                            style={{ paddingTop: 16 }}
                        >
                            <button className="btn-primary" style={{
                                paddingLeft: 32,
                                paddingRight: 32,
                                paddingTop: 16,
                                paddingBottom: 16,
                                background: '#001736',
                                borderRadius: 6,
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                lineHeight: '24px',
                                boxShadow: '0px 8px 10px -6px rgba(0, 23, 54, 0.10), 0px 20px 25px -5px rgba(0, 23, 54, 0.10)',
                            }}>
                                Explore the Platform
                                <ArrowRight size={16} color="white" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right: hero image — panel-emerge */}
                    <div style={{
                        flex: isMobile ? '1 1 auto' : '0 0 474px',
                        position: 'relative',
                    }}>
                        {/* Blue panel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: ease, delay: 0.3 }}
                            style={{
                                borderRadius: 8,
                                overflow: 'hidden',
                                boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            }}>
                            <img
                                src={hero1}
                                alt="End-to-End Care Platform"
                                style={{
                                    width: '100%',
                                    height: isMobile ? 300 : 500,
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </motion.div>

                        {/* Quote card — note-dock */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: ease, delay: 0.7 }}
                            style={{
                                position: isMobile ? 'relative' : 'absolute',
                                left: isMobile ? 0 : -24,
                                bottom: isMobile ? 'auto' : 107,
                                marginTop: isMobile ? -24 : 0,
                                maxWidth: isMobile ? '100%' : 320,
                                paddingTop: 24,
                                paddingBottom: 24,
                                paddingLeft: 24,
                                paddingRight: 24,
                                background: 'white',
                                borderRadius: 4,
                                borderLeft: '4px solid #006970',
                                boxShadow: '0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 8,
                            }}>
                            <div style={{
                                color: '#001736',
                                fontSize: 16,
                                fontFamily: 'Manrope, sans-serif',
                                fontWeight: 700,
                                lineHeight: '24px',
                            }}>
                                &quot;The clinical record is a living<br />thread, not a series of snapshots.&quot;
                            </div>
                            <div style={{
                                color: '#43474F',
                                fontSize: 12,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                lineHeight: '16px',
                                letterSpacing: 1.2,
                            }}>
                                — Dr. Elias Vance, Chief of<br />Operations
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── Section 2: The Single Thread ── */}
            <div style={{
                width: '100%',
                paddingTop: isMobile ? 56 : 96,
                paddingBottom: isMobile ? 56 : 96,
                background: '#F3F4F5',
                boxSizing: 'border-box',
            }}>
                <div
                    ref={threadRef}
                    style={{
                        maxWidth: 1280,
                        margin: '0 auto',
                        paddingLeft: 24,
                        paddingRight: 24,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 80,
                    }}>
                    {/* Header */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={threadInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease: ease }}
                            style={{
                                color: '#001736',
                                fontSize: 36,
                                fontFamily: 'Manrope, sans-serif',
                                fontWeight: 700,
                                lineHeight: '40px',
                            }}>
                            The Single Thread
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={threadInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: ease, delay: 0.1 }}
                            style={{
                                maxWidth: 672,
                                color: '#43474F',
                                fontSize: 18,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: '28px',
                            }}>
                            A seamless architectural flow that transforms fragmented episodes into a
                            continuous, data-driven journey.
                        </motion.div>
                    </div>

                    {/* Cards row — stage-arrival */}
                    <div style={{ position: 'relative' }}>
                        {/* thread-draw: connecting line */}
                        <div style={{ position: 'absolute', left: 0, right: 0, top: 58, height: 2, overflow: 'hidden', zIndex: 0, display: isMobile ? 'none' : 'block' }}>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={threadInView ? { scaleX: 1 } : {}}
                                transition={{ duration: 1.0, ease: sharp, delay: 0.1 }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, #001736 0%, #006970 50%, #A9C7FF 100%)',
                                    opacity: 0.15,
                                    transformOrigin: 'left',
                                }}
                            />
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
                            gap: isMobile ? 16 : 12,
                            position: 'relative',
                            zIndex: 1,
                        }}>
                            {stageCards.map((card, i) => (
                                card.active ? (
                                    /* Active card — active-stage-focus */
                                    <motion.div
                                        key={card.num}
                                        initial={{ opacity: 0, y: 30, scale: 0.92 }}
                                        animate={threadInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                        transition={{ duration: 0.75, ease: ease, delay: i * 0.12 }}
                                        className="active-stage"
                                        style={{
                                            background: '#001736',
                                            borderRadius: 12,
                                            border: '1px solid rgba(0, 105, 112, 0.30)',
                                            borderBottom: '4px solid #006970',
                                            padding: isMobile ? '24px 20px' : '34px 32px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 0,
                                            minHeight: isMobile ? 'auto' : 324,
                                            boxShadow: '0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
                                        }}>
                                        {/* Stage dot light */}
                                        <div style={{ position: 'relative', marginBottom: 24 }}>
                                            <div style={{
                                                width: 50,
                                                height: 50,
                                                background: '#006970',
                                                borderRadius: 12,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <span style={{
                                                    color: 'white',
                                                    fontSize: 18,
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontWeight: 700,
                                                    lineHeight: '28px',
                                                }}>{card.num}</span>
                                            </div>
                                        </div>
                                        <div style={{
                                            color: 'white',
                                            fontSize: 20,
                                            fontFamily: 'Manrope, sans-serif',
                                            fontWeight: 700,
                                            lineHeight: '28px',
                                            marginBottom: 12,
                                        }}>{card.title}</div>
                                        <div style={{
                                            color: 'rgba(255,255,255,0.80)',
                                            fontSize: 14,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 400,
                                            lineHeight: '22px',
                                        }}>{card.desc}</div>
                                    </motion.div>
                                ) : (
                                    /* Regular cards */
                                    <motion.div
                                        key={card.num}
                                        initial={{ opacity: 0, y: 30, scale: 0.96 }}
                                        animate={threadInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                        transition={{ duration: 0.65, ease: ease, delay: i * 0.12 }}
                                        className="card-hover"
                                        style={{
                                            background: 'white',
                                            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                                            borderRadius: 12,
                                            border: '1px solid rgba(196, 198, 208, 0.40)',
                                            padding: isMobile ? '24px 20px' : '34px 32px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 0,
                                            minHeight: isMobile ? 'auto' : 309,
                                        }}>
                                        <div style={{
                                            width: 48,
                                            height: 48,
                                            background: '#001736',
                                            borderRadius: 12,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: 24,
                                        }}>
                                            <span style={{
                                                color: 'white',
                                                fontSize: 18,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 700,
                                                lineHeight: '28px',
                                            }}>{card.num}</span>
                                        </div>
                                        <div style={{
                                            color: '#001736',
                                            fontSize: 20,
                                            fontFamily: 'Manrope, sans-serif',
                                            fontWeight: 700,
                                            lineHeight: '28px',
                                            marginBottom: card.sub ? 8 : 12,
                                        }}>{card.title}</div>
                                        {card.sub && (
                                            <div style={{
                                                color: '#006970',
                                                fontSize: 12,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                                lineHeight: '16px',
                                                letterSpacing: 1.2,
                                                marginBottom: 12,
                                                whiteSpace: 'pre-line',
                                            }}>{card.sub}</div>
                                        )}
                                        <div style={{
                                            color: '#43474F',
                                            fontSize: 14,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 400,
                                            lineHeight: '22px',
                                        }}>{card.desc}</div>
                                    </motion.div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 3: No More Gaps ── */}
            <div style={{
                width: '100%',
                paddingTop: isMobile ? 56 : 96,
                paddingBottom: isMobile ? 56 : 96,
                paddingLeft: isMobile ? 16 : 24,
                paddingRight: isMobile ? 16 : 24,
                background: '#F8F9FA',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div
                    ref={noGapsRef}
                    style={{
                        maxWidth: 1232,
                        width: '100%',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: isMobile ? 32 : 64,
                        alignItems: isMobile ? 'stretch' : 'center',
                    }}>
                    {/* Left: text content — point-stagger */}
                    <div style={{
                        flex: isMobile ? '1 1 auto' : '0 0 520px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 32,
                    }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={noGapsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease: ease }}
                            style={{
                                color: '#001736',
                                fontSize: 36,
                                fontFamily: 'Manrope, sans-serif',
                                fontWeight: 800,
                                lineHeight: '45px',
                            }}>
                            No More Gaps. No More<br />Reconstructions.
                        </motion.div>

                        {[
                            {
                                Icon: DatabaseZap,
                                title: 'Zero Data Drift',
                                desc: 'Patients never carry information between departments. The platform ensures that diagnostic data from radiology flows as seamlessly as the initial triage report.',
                            },
                            {
                                Icon: Lock,
                                title: 'Immutable Integrity',
                                desc: "The clinical record is never reconstructed. It is a persistent digital asset that matures with the patient's journey, maintaining absolute clinical context.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={noGapsInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.65, ease: ease, delay: 0.15 + i * 0.12 }}
                                style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}
                            >
                                <motion.div
                                    initial={{ scale: 0.7, opacity: 0 }}
                                    animate={noGapsInView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ duration: 0.4, ease: ease, delay: 0.2 + i * 0.12 }}
                                    style={{
                                        width: 48,
                                        height: 48,
                                        flexShrink: 0,
                                        background: 'rgba(0, 105, 112, 0.10)',
                                        borderRadius: 12,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <item.Icon size={20} color="#006970" strokeWidth={1.5} />
                                </motion.div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={noGapsInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, ease: sharp, delay: 0.25 + i * 0.12 }}
                                        style={{
                                            color: '#001736',
                                            fontSize: 20,
                                            fontFamily: 'Manrope, sans-serif',
                                            fontWeight: 700,
                                            lineHeight: '28px',
                                        }}>
                                        {item.title}
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={noGapsInView ? { opacity: 1 } : {}}
                                        transition={{ duration: 0.5, ease: sharp, delay: 0.35 + i * 0.12 }}
                                        style={{
                                            color: '#43474F',
                                            fontSize: 16,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 400,
                                            lineHeight: '24px',
                                        }}>
                                        {item.desc}
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: UI mockup — frame-build */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={noGapsInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: ease, delay: 0.2 }}
                        style={{
                            flex: 1,
                            padding: 8,
                            background: '#E7E8E9',
                            borderRadius: 8,
                        }}>
                        <div style={{
                            background: 'white',
                            borderRadius: 4,
                            padding: 32,
                            boxShadow: '0px 2px 4px 1px rgba(0, 0, 0, 0.05) inset',
                            outline: '1px rgba(196, 198, 208, 0.10) solid',
                            outlineOffset: -1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 0,
                            overflow: 'hidden',
                            position: 'relative',
                        }}>
                            <img
                                src={endEndImg}
                                alt="System synchronized status"
                                style={{
                                    width: '100%',
                                    display: 'block',
                                    borderRadius: 2,
                                }}
                            />
                            {/* status-dot-pulse */}
                            <div style={{
                                position: 'absolute',
                                bottom: 20,
                                right: 20,
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                background: '#006970',
                            }} className="status-dot" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Section 4: Continuous Care ── */}
            <div style={{
                width: '100%',
                paddingTop: isMobile ? 56 : 96,
                paddingBottom: isMobile ? 56 : 96,
                position: 'relative',
                background: '#002B5B',
                overflow: 'hidden',
                boxSizing: 'border-box',
            }}>
                <div
                    ref={continuousRef}
                    style={{
                        maxWidth: 1280,
                        margin: '0 auto',
                        paddingLeft: 24,
                        paddingRight: 24,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 80,
                        position: 'relative',
                        zIndex: 1,
                    }}>
                    {/* Header — headline-rise */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={continuousInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: ease }}
                            style={{
                                color: 'white',
                                fontSize: 48,
                                fontFamily: 'Manrope, sans-serif',
                                fontWeight: 700,
                                lineHeight: '48px',
                                textAlign: 'center',
                            }}>
                            Continuous Care
                        </motion.div>
                        {/* soft-fade */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={continuousInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: ease, delay: 0.2 }}
                            style={{
                                maxWidth: 768,
                                color: '#A9C7FF',
                                fontSize: 20,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: '32px',
                                textAlign: 'center',
                            }}>
                            The transition home is not a cliff edge, but a continuation of hospital care. ETOH
                            bridges the gap between clinical supervision and home recovery.
                        </motion.div>
                    </div>

                    {/* Two cards — care-card-left / care-card-right */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={continuousInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: ease, delay: 0.2 }}
                            className="glass-card"
                            style={{
                                padding: '47px 41px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: 8,
                                outline: '1px rgba(255, 255, 255, 0.10) solid',
                                outlineOffset: -1,
                                backdropFilter: 'blur(6px)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
                            }}>
                            <div style={{
                                width: 48,
                                height: 48,
                                background: 'rgba(0, 105, 112, 0.30)',
                                borderRadius: 12,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 32,
                            }}>
                                <svg width="24" height="27" viewBox="0 0 24 27" fill="none">
                                    <path d="M3 3h18v12a9 9 0 01-18 0V3z" stroke="#006970" strokeWidth="2" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div style={{
                                color: 'white',
                                fontSize: 24,
                                fontFamily: 'Manrope, sans-serif',
                                fontWeight: 700,
                                lineHeight: '32px',
                                marginBottom: 16,
                            }}>
                                Post-Discharge Intelligence
                            </div>
                            <div style={{
                                color: '#7594CA',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: '26px',
                            }}>
                                Our platform maintains a direct telemetry link with patients post-discharge,
                                alerting clinical teams to early markers of regression before they become
                                emergencies.
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={continuousInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: ease, delay: 0.35 }}
                            className="glass-card"
                            style={{
                                padding: '47px 41px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: 8,
                                outline: '1px rgba(255, 255, 255, 0.10) solid',
                                outlineOffset: -1,
                                backdropFilter: 'blur(6px)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
                            }}>
                            <div style={{
                                width: 48,
                                height: 48,
                                background: 'rgba(0, 105, 112, 0.30)',
                                borderRadius: 12,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 32,
                            }}>
                                <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
                                    <path d="M15 2C8.373 2 3 7.373 3 14s5.373 12 12 12 12-5.373 12-12S21.627 2 15 2zm0 4l4 6h-8l4-6z" fill="#006970"/>
                                </svg>
                            </div>
                            <div style={{
                                color: 'white',
                                fontSize: 24,
                                fontFamily: 'Manrope, sans-serif',
                                fontWeight: 700,
                                lineHeight: '32px',
                                marginBottom: 16,
                            }}>
                                The Digital Lifeline
                            </div>
                            <div style={{
                                color: '#7594CA',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: '26px',
                            }}>
                                Wearable integration and patient-reported outcomes (PROMs) ensure that
                                &quot;care&quot; doesn&apos;t end when the patient leaves the ward. We extend
                                the clinical perimeter.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── Section 5: CTA — cta-build ── */}
            <div style={{
                width: '100%',
                paddingTop: 128,
                paddingBottom: 128,
                background: '#F8F9FA',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div
                    ref={ctaRef}
                    style={{
                        maxWidth: 896,
                        paddingLeft: 24,
                        paddingRight: 24,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 40,
                    }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                        {['Connect Every Stage.', 'Eliminate Every Gap.'].map((line, i) => (
                            <div key={line} style={{ overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 28 }}
                                    animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: i === 0 ? 0.7 : 0.8,
                                        ease: i === 0 ? ease : [0.16, 1, 0.3, 1],
                                        delay: i * 0.14,
                                    }}
                                    style={{
                                        color: '#001736',
                                        fontSize: 60,
                                        fontFamily: 'Manrope, sans-serif',
                                        fontWeight: 800,
                                        lineHeight: '64px',
                                        textAlign: 'center',
                                    }}>
                                    {line}
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: ease, delay: 0.3 }}
                        style={{
                            color: '#43474F',
                            fontSize: 20,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            lineHeight: '32px',
                            textAlign: 'center',
                        }}>
                        Ready to transform your clinical workflow into a single, seamless thread of operational
                        excellence? See ETOH in action.
                    </motion.div>

                    {/* button-stagger */}
                    <div style={{
                        paddingTop: 8,
                        display: 'flex',
                        gap: 24,
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>
                        {[
                            { label: 'Request Technical Demo', primary: true },
                            { label: 'View Clinical Whitepaper', primary: false },
                        ].map((btn, i) => (
                            <motion.button
                                key={btn.label}
                                initial={{ opacity: 0, y: 16 }}
                                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, ease: sharp, delay: 0.45 + i * 0.12 }}
                                className={btn.primary ? 'btn-primary' : 'btn-secondary'}
                                style={{
                                    paddingLeft: 40,
                                    paddingRight: 40,
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    background: btn.primary ? '#001736' : '#E7E8E9',
                                    borderRadius: 6,
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: btn.primary ? 'white' : '#001736',
                                    fontSize: 16,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '24px',
                                    boxShadow: btn.primary ? '0px 25px 50px -12px rgba(0, 23, 54, 0.20)' : 'none',
                                }}>
                                {btn.label}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
