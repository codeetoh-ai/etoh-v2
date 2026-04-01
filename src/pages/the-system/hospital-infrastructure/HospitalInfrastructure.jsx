import { useEffect, useState } from 'react'
import PageLayout from '../../../components/PageLayout'
import hero1 from '../../../assets/Clinicians/hero1.png'
import realTimeRhythm from '../../../assets/Clinicians/reltimerhythm.png'
import { BedDouble, GitBranch, FlaskConical, BellDot, Zap } from 'lucide-react'
import { useInView } from '../../../hooks/useInView'
import { useResponsive } from '../../../hooks/useResponsive'

export default function HospitalInfrastructurePage() {
    const { isMobile, isTablet } = useResponsive()

    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 60)
        return () => clearTimeout(t)
    }, [])

    const [sec2Ref, sec2Visible] = useInView()
    const [sec3Ref, sec3Visible] = useInView()
    const [sec4Ref, sec4Visible] = useInView()
    const [ctaRef,  ctaVisible]  = useInView()

    return (
        <PageLayout fullWidth={true} lightHero>

            {/* ── Section 1: Hero ── */}
            <div style={{
                width: '100%',
                minHeight: isMobile ? 'auto' : 921,
                paddingTop: isMobile ? 80 : 172,
                paddingBottom: isMobile ? 80 : 172,
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box',
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: 1280,
                    paddingLeft: isMobile ? 16 : 32,
                    paddingRight: isMobile ? 16 : 32,
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    gap: isMobile ? 40 : 64,
                }}>
                    {/* Left: text */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>

                        {/* Label — device-boot */}
                        <div
                            className={mounted ? 'device-boot' : ''}
                            style={{
                                display: 'inline-flex',
                                paddingLeft: 12, paddingRight: 12,
                                paddingTop: 4, paddingBottom: 4,
                                background: '#E7E8E9',
                                borderRadius: 12,
                                width: 'fit-content',
                                opacity: mounted ? undefined : 0,
                            }}
                        >
                            <span style={{
                                color: '#006970', fontSize: 10,
                                fontFamily: 'Inter, sans-serif', fontWeight: 700,
                                textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2,
                            }}>
                                Operational Excellence
                            </span>
                        </div>

                        {/* Headline — scanline-reveal */}
                        <div
                            className={mounted ? 'scanline-reveal' : ''}
                            style={{
                                fontSize: isMobile ? 40 : isTablet ? 56 : 72,
                                fontFamily: 'Manrope, sans-serif',
                                fontWeight: 800,
                                lineHeight: isMobile ? '44px' : isTablet ? '60px' : '72px',
                                opacity: mounted ? undefined : 0,
                                animationDelay: '0.2s',
                            }}
                        >
                            <span style={{ color: '#001736' }}>
                                Every patient.<br />
                                Every decision.<br />
                                Every moment.<br />
                            </span>
                            <span style={{ color: '#006970' }}>One view.</span>
                        </div>

                        {/* Subtext — stack-align */}
                        <div
                            className={mounted ? 'stack-align' : ''}
                            style={{
                                maxWidth: 576, paddingTop: 8,
                                color: '#43474F',
                                fontSize: isMobile ? 16 : 20,
                                fontFamily: 'Inter, sans-serif', fontWeight: 400,
                                lineHeight: isMobile ? '26px' : '32px',
                                animationDelay: '0.45s',
                                opacity: mounted ? undefined : 0,
                            }}
                        >
                            ETOH&apos;s clinical terminal is the institution&apos;s operating center
                            — the place where the full complexity of a hospital becomes
                            legible, manageable, and responsive.
                        </div>

                        {/* Buttons — signal-rise staggered */}
                        <div style={{
                            paddingTop: 16, display: 'flex', gap: 16,
                            alignItems: isMobile ? 'stretch' : 'center',
                            flexDirection: isMobile ? 'column' : 'row',
                            flexWrap: 'wrap',
                        }}>
                            <button
                                className={mounted ? 'signal-rise' : ''}
                                onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=Request Infrastructure Audit'}
                                style={{
                                    paddingLeft: 32, paddingRight: 32,
                                    paddingTop: 17, paddingBottom: 17,
                                    background: '#001736', borderRadius: 6,
                                    border: 'none', cursor: 'pointer',
                                    color: 'white', fontSize: 16,
                                    fontFamily: 'Inter, sans-serif', fontWeight: 700,
                                    lineHeight: '24px',
                                    boxShadow: '0px 8px 10px -6px rgba(0,23,54,0.10), 0px 20px 25px -5px rgba(0,23,54,0.10)',
                                    animationDelay: '0.6s',
                                    opacity: mounted ? undefined : 0,
                                    width: isMobile ? '100%' : 'auto',
                                }}
                            >
                                Request Infrastructure Audit
                            </button>
                            <button
                                className={mounted ? 'signal-rise' : ''}
                                onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=View Documentation'}
                                style={{
                                    paddingLeft: 32, paddingRight: 32,
                                    paddingTop: 16, paddingBottom: 16,
                                    background: 'transparent', borderRadius: 6,
                                    border: 'none', outline: '1px solid #C4C6D0',
                                    cursor: 'pointer', color: '#001736',
                                    fontSize: 16, fontFamily: 'Inter, sans-serif',
                                    fontWeight: 700, lineHeight: '24px',
                                    animationDelay: '0.72s',
                                    opacity: mounted ? undefined : 0,
                                    width: isMobile ? '100%' : 'auto',
                                }}
                            >
                                View Documentation
                            </button>
                        </div>
                    </div>

                    {/* Right: image */}
                    {!isMobile && (
                        <div style={{
                            flex: isTablet ? '0 0 400px' : '0 0 576px',
                            position: 'relative',
                            background: '#F3F4F5', borderRadius: 16,
                            boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
                            overflow: 'hidden',
                        }}>
                            <img
                                src={hero1}
                                alt="Clinical Terminal"
                                style={{
                                    width: '100%',
                                    height: isTablet ? 400 : 576,
                                    objectFit: 'cover', display: 'block',
                                    opacity: 0.9,
                                }}
                            />
                            {/* Overlay */}
                            <div style={{
                                position: 'absolute', left: 0, top: 0,
                                width: '100%', height: '100%',
                                background: 'linear-gradient(45deg, rgba(0,23,54,0.40) 0%, rgba(0,23,54,0) 100%)',
                            }} />

                            {/* Screen power-on */}
                            <div
                                className={mounted ? 'screen-on' : ''}
                                style={{
                                    position: 'absolute',
                                    top: '16%',
                                    left: '12%',
                                    width: '76%',
                                    height: '54%',
                                    background: 'rgba(10, 22, 40, 0.08)',
                                    borderRadius: 4,
                                    pointerEvents: 'none',
                                    opacity: mounted ? undefined : 0.12,
                                }}
                            />

                            {/* Scanline sweep */}
                            <div
                                className={mounted ? 'screen-scanline' : ''}
                                style={{
                                    position: 'absolute',
                                    left: '12%',
                                    width: '76%',
                                    height: 3,
                                    top: '16%',
                                    background: 'linear-gradient(180deg, transparent, rgba(150, 241, 250, 0.6), transparent)',
                                    borderRadius: 2,
                                    pointerEvents: 'none',
                                    opacity: 0,
                                }}
                            />

                            {/* Live System Pulse widget */}
                            <div style={{
                                position: 'absolute', right: 24, top: 32,
                                maxWidth: 200, padding: 16,
                                background: 'rgba(255,255,255,0.80)',
                                borderRadius: 8,
                                outline: '1px rgba(255,255,255,0.20) solid',
                                outlineOffset: -1,
                                backdropFilter: 'blur(12px)',
                                display: 'flex', flexDirection: 'column', gap: 12,
                                boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <div
                                        className="signal-pulse"
                                        style={{
                                            width: 8, height: 8,
                                            background: '#006970',
                                            borderRadius: 12, flexShrink: 0,
                                        }}
                                    />
                                    <span style={{
                                        color: '#001736', fontSize: 10,
                                        fontFamily: 'Inter, sans-serif', fontWeight: 700,
                                        textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1,
                                    }}>
                                        Live System Pulse
                                    </span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                    <div style={{
                                        height: 8, background: '#E7E8E9',
                                        borderRadius: 12, overflow: 'hidden', position: 'relative',
                                    }}>
                                        <div
                                            className={mounted ? 'metric-fill-bar' : ''}
                                            style={{
                                                position: 'absolute', left: 0, top: 0,
                                                width: mounted ? undefined : '0%',
                                                height: '100%', background: '#006970',
                                            }}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{
                                            color: '#43474F', fontSize: 10,
                                            fontFamily: 'Inter, sans-serif', fontWeight: 700, lineHeight: '15px',
                                        }}>CAPACITY UTILIZATION</span>
                                        <span style={{
                                            color: '#43474F', fontSize: 10,
                                            fontFamily: 'Inter, sans-serif', fontWeight: 700, lineHeight: '15px',
                                        }}>78%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ── Section 2: Complexity Managed ── */}
            <div
                ref={sec2Ref}
                style={{
                    width: '100%',
                    paddingLeft: isMobile ? 16 : 32,
                    paddingRight: isMobile ? 16 : 32,
                    paddingTop: isMobile ? 48 : 90,
                    paddingBottom: isMobile ? 48 : 90,
                    background: '#F3F4F5', boxSizing: 'border-box',
                }}
            >
                <div style={{
                    width: '100%', maxWidth: 1280,
                    margin: '0 auto', display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? 32 : 64,
                    alignItems: 'flex-start',
                }}>
                    {/* Left: title — stack-align */}
                    <div
                        className={sec2Visible ? 'stack-align' : ''}
                        style={{
                            flex: isMobile ? 'none' : '0 0 190px',
                            opacity: sec2Visible ? undefined : 0,
                        }}
                    >
                        <div style={{
                            fontSize: isMobile ? 28 : 36,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            lineHeight: isMobile ? '34px' : '40px',
                        }}>
                            <span style={{ color: '#001736' }}>Complexity{!isMobile && <br />} </span>
                            <span style={{ color: '#006970' }}>Managed.</span>
                        </div>
                    </div>

                    {/* Right column */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: isMobile ? 24 : 48 }}>

                        {/* Body text — scanline-reveal */}
                        <div
                            className={sec2Visible ? 'scanline-reveal' : ''}
                            style={{
                                color: '#43474F',
                                fontSize: isMobile ? 20 : 30,
                                fontFamily: 'Inter, sans-serif', fontWeight: 300,
                                lineHeight: isMobile ? '32px' : '48px',
                                opacity: sec2Visible ? undefined : 0,
                                animationDelay: '0.15s',
                            }}
                        >
                            A modern hospital is a system of extraordinary
                            complexity. Hundreds of patients at different stages of
                            care. Dozens of clinical teams making decisions in
                            parallel.
                        </div>

                        {/* Two boxes — panel-snap staggered */}
                        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 16, alignItems: 'stretch' }}>
                            <div
                                className={`${sec2Visible ? 'panel-snap' : ''} ${sec2Visible ? 'edge-pulse' : ''}`}
                                style={{
                                    flex: 1, padding: isMobile ? 20 : 32, background: 'white',
                                    boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
                                    borderRadius: 8, borderLeft: '4px solid #006970',
                                    animationDelay: '0.25s',
                                    opacity: sec2Visible ? undefined : 0,
                                }}
                            >
                                <div style={{
                                    color: '#191C1D',
                                    fontSize: isMobile ? 15 : 18,
                                    fontFamily: 'Inter, sans-serif', fontWeight: 400,
                                    lineHeight: isMobile ? '24px' : '29px',
                                }}>
                                    Diagnostic pipelines, bed flows,
                                    medication cycles, and specialist
                                    referrals happening simultaneously
                                    across every ward and every hour.
                                </div>
                            </div>
                            <div
                                className={sec2Visible ? 'panel-snap' : ''}
                                style={{
                                    flex: 1, padding: isMobile ? 20 : 32, background: 'white',
                                    boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
                                    borderRadius: 8, border: '1px solid #EDEEEF',
                                    animationDelay: '0.38s',
                                    opacity: sec2Visible ? undefined : 0,
                                }}
                            >
                                <div style={{
                                    color: '#43474F',
                                    fontSize: isMobile ? 14 : 16,
                                    fontFamily: 'Inter, sans-serif', fontWeight: 400,
                                    lineHeight: isMobile ? '22px' : '26px',
                                }}>
                                    The institutions that deliver consistently
                                    excellent care are the ones whose
                                    operating infrastructure matches that
                                    complexity — whose leadership can see
                                    what is happening.
                                </div>
                            </div>
                        </div>

                        {/* Dark card — panel-snap */}
                        <div
                            className={sec2Visible ? 'panel-snap' : ''}
                            style={{
                                padding: isMobile ? 24 : 48, position: 'relative',
                                background: '#001736', overflow: 'hidden',
                                borderRadius: isMobile ? 12 : 16, display: 'flex',
                                flexDirection: 'column', gap: 24,
                                animationDelay: '0.5s',
                                opacity: sec2Visible ? undefined : 0,
                            }}
                        >
                            <div style={{
                                position: 'absolute', width: 256, height: 256,
                                right: -30, top: 41,
                                background: 'rgba(0,105,112,0.20)',
                                borderRadius: 12, filter: 'blur(50px)',
                            }} />
                            <div style={{
                                color: 'white',
                                fontSize: isMobile ? 20 : 24,
                                fontFamily: 'Inter, sans-serif', fontWeight: 600,
                                lineHeight: '32px', position: 'relative',
                            }}>
                                Operational Clarity
                            </div>
                            <div style={{
                                color: '#7594CA',
                                fontSize: isMobile ? 16 : 20,
                                fontFamily: 'Inter, sans-serif', fontWeight: 400,
                                lineHeight: isMobile ? '26px' : '32px', position: 'relative',
                            }}>
                                Clinical teams can act without friction, and operational gaps surface as
                                warnings rather than incidents.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 3: The Infrastructure ── */}
            <div style={{
                width: '100%',
                paddingTop: isMobile ? 64 : 128,
                paddingBottom: isMobile ? 64 : 128,
                background: '#F8F9FA', boxSizing: 'border-box',
            }}>
                <div style={{
                    maxWidth: 1280, margin: '0 auto',
                    paddingLeft: isMobile ? 16 : 32,
                    paddingRight: isMobile ? 16 : 32,
                    display: 'flex', flexDirection: 'column',
                    gap: isMobile ? 40 : 80,
                }}>
                    <div ref={sec3Ref} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <div
                            className={sec3Visible ? 'scanline-reveal' : ''}
                            style={{
                                color: '#001736',
                                fontSize: isMobile ? 32 : 48,
                                fontFamily: 'Manrope, sans-serif', fontWeight: 800,
                                lineHeight: isMobile ? '36px' : '48px',
                                opacity: sec3Visible ? undefined : 0,
                            }}
                        >
                            The Infrastructure
                        </div>
                        <div
                            className={sec3Visible ? 'underline-expand' : ''}
                            style={{
                                height: 3, width: 80,
                                background: '#006970', borderRadius: 2,
                                transformOrigin: 'left center',
                                opacity: sec3Visible ? 1 : 0,
                            }}
                        />
                        <div
                            className={sec3Visible ? 'stack-align' : ''}
                            style={{
                                maxWidth: 672, color: '#43474F',
                                fontSize: isMobile ? 16 : 20,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: isMobile ? '26px' : '28px',
                                animationDelay: '0.2s',
                                opacity: sec3Visible ? undefined : 0,
                            }}
                        >
                            A shared, live picture of the facility for every stakeholder. From
                            medical directors to nursing floor leads.
                        </div>
                    </div>

                    {/* module-stagger grid */}
                    <div
                        className={`module-stagger${sec3Visible ? ' visible' : ''}`}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                            gap: 16,
                        }}
                    >
                        {[
                            {
                                icon: <BedDouble size={24} color="#006970" strokeWidth={1.5} />,
                                title: 'Bed Status',
                                desc: 'Real-time patient flow monitoring across all wards and surgical suites.',
                            },
                            {
                                icon: <GitBranch size={24} color="#006970" strokeWidth={1.5} />,
                                title: 'Care Pathways',
                                desc: 'Visual progress tracking for every admitted patient against clinical benchmarks.',
                            },
                            {
                                icon: <FlaskConical size={24} color="#006970" strokeWidth={1.5} />,
                                title: 'Diagnostic Cycles',
                                desc: 'End-to-end visibility from diagnostic order to verified laboratory results.',
                            },
                            {
                                icon: <BellDot size={24} color="#006970" strokeWidth={1.5} />,
                                title: 'Operational Alerts',
                                desc: 'AI-driven resource allocation and proactive care team assignment warnings.',
                            },
                        ].map(({ icon, title, desc }) => (
                            <div key={title} style={{
                                background: 'white',
                                padding: isMobile ? '24px 20px' : '40px 40px',
                                border: '1px solid #EDEEEF',
                                borderRadius: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: isMobile ? 'auto' : 268,
                            }}>
                                <div style={{ marginBottom: isMobile ? 20 : 40 }}>{icon}</div>
                                <div style={{
                                    color: '#001736',
                                    fontSize: isMobile ? 18 : 20,
                                    fontFamily: 'Manrope, sans-serif', fontWeight: 700,
                                    lineHeight: '28px', marginBottom: 12,
                                }}>
                                    {title}
                                </div>
                                <div style={{
                                    color: '#43474F',
                                    fontSize: isMobile ? 14 : 16,
                                    fontFamily: 'Inter, sans-serif', fontWeight: 400,
                                    lineHeight: isMobile ? '22px' : '24px',
                                }}>
                                    {desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Section 4: Real-Time Rhythm ── */}
            <div style={{
                width: '100%',
                paddingTop: isMobile ? 64 : 128,
                paddingBottom: isMobile ? 80 : 224,
                overflow: 'hidden', boxSizing: 'border-box',
            }}>
                <div
                    ref={sec4Ref}
                    style={{
                        maxWidth: 1280, margin: '0 auto',
                        paddingLeft: isMobile ? 16 : 32,
                        paddingRight: isMobile ? 16 : 32,
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: isMobile ? 40 : 80,
                        alignItems: 'flex-start',
                    }}
                >
                    {/* Left: image card */}
                    <div style={{
                        flex: isMobile ? 'none' : isTablet ? '0 0 380px' : '0 0 552px',
                        width: isMobile ? '100%' : 'auto',
                        padding: 4,
                        background: '#EDEEEF', borderRadius: isMobile ? 16 : 24, overflow: 'hidden',
                    }}>
                        <div style={{
                            background: 'white',
                            borderRadius: isMobile ? 14 : 22,
                            overflow: 'hidden', display: 'flex', flexDirection: 'column',
                        }}>
                            <img
                                src={realTimeRhythm}
                                alt="Real-Time Rhythm"
                                className={sec4Visible ? 'focus-in' : ''}
                                style={{
                                    width: '100%',
                                    height: isMobile ? 240 : 414,
                                    objectFit: 'cover', display: 'block',
                                    opacity: sec4Visible ? undefined : 0,
                                }}
                            />
                            <div style={{
                                padding: isMobile ? 20 : 32,
                                borderTop: '1px solid #EDEEEF',
                                display: 'flex', justifyContent: 'space-between',
                                alignItems: 'center', gap: isMobile ? 16 : 24,
                            }}>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
                                    <div style={{
                                        height: 4, background: '#E7E8E9',
                                        borderRadius: 12, overflow: 'hidden', position: 'relative',
                                    }}>
                                        <div
                                            className={sec4Visible ? 'wave-trace-bar' : ''}
                                            style={{
                                                position: 'absolute', left: 0, top: 0,
                                                width: sec4Visible ? undefined : '0%',
                                                height: '100%', background: '#006970',
                                            }}
                                        />
                                    </div>
                                    <span style={{
                                        color: '#43474F', fontSize: 10,
                                        fontFamily: 'Inter, sans-serif', fontWeight: 700,
                                        textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1,
                                    }}>
                                        Infrastructure Load
                                    </span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
                                    <span style={{
                                        color: '#001736', fontSize: isMobile ? 20 : 24,
                                        fontFamily: 'Manrope, sans-serif', fontWeight: 900, lineHeight: '32px',
                                    }}>0.02s</span>
                                    <span style={{
                                        color: '#006970', fontSize: 10,
                                        fontFamily: 'Inter, sans-serif', fontWeight: 700,
                                        textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1,
                                    }}>Latency</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: text */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: isMobile ? 24 : 40 }}>
                        <div
                            className={sec4Visible ? 'scanline-reveal' : ''}
                            style={{
                                color: '#001736',
                                fontSize: isMobile ? 32 : 48,
                                fontFamily: 'Manrope, sans-serif', fontWeight: 800,
                                lineHeight: isMobile ? '38px' : '60px',
                                opacity: sec4Visible ? undefined : 0,
                            }}
                        >
                            Real-Time Rhythm
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 20 : 32 }}>
                            <div
                                className={sec4Visible ? 'stack-align' : ''}
                                style={{
                                    color: '#43474F',
                                    fontSize: isMobile ? 16 : 20,
                                    fontFamily: 'Inter, sans-serif', fontWeight: 400,
                                    lineHeight: isMobile ? '26px' : '32px',
                                    animationDelay: '0.2s',
                                    opacity: sec4Visible ? undefined : 0,
                                }}
                            >
                                The terminal is designed around the rhythm of clinical
                                work, not the rhythm of administrative reporting.
                            </div>
                            <div
                                className={sec4Visible ? 'stack-align' : ''}
                                style={{
                                    color: '#191C1D',
                                    fontSize: isMobile ? 16 : 20,
                                    fontFamily: 'Inter, sans-serif', fontWeight: 600,
                                    lineHeight: isMobile ? '26px' : '32px',
                                    animationDelay: '0.35s',
                                    opacity: sec4Visible ? undefined : 0,
                                }}
                            >
                                It does not describe yesterday. It shows today — and it
                                shapes what tomorrow looks like for every patient
                                currently in the system.
                            </div>
                        </div>

                        <div style={{ paddingTop: isMobile ? 24 : 56, borderTop: '1px solid #E7E8E9' }}>
                            <div
                                className={sec4Visible ? 'signal-rise' : ''}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: 16,
                                    animationDelay: '0.5s',
                                    opacity: sec4Visible ? undefined : 0,
                                }}
                            >
                                <div
                                    className="orbital-loop"
                                    style={{
                                        width: 48, height: 48, flexShrink: 0,
                                        background: '#96F1FA', borderRadius: 12,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}
                                >
                                    <Zap size={20} color="#006F77" strokeWidth={1.5} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <span style={{
                                        color: '#001736', fontSize: 16,
                                        fontFamily: 'Inter, sans-serif', fontWeight: 700, lineHeight: '24px',
                                    }}>Instant Intelligence</span>
                                    <span style={{
                                        color: '#43474F', fontSize: 14,
                                        fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '20px',
                                    }}>Sub-millisecond data synchronization across facility networks.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── CTA ── */}
            <div style={{
                width: '100%',
                paddingLeft: isMobile ? 16 : 32,
                paddingRight: isMobile ? 16 : 32,
                paddingBottom: isMobile ? 64 : 128,
                boxSizing: 'border-box',
                display: 'flex', justifyContent: 'center',
            }}>
                <div
                    ref={ctaRef}
                    className={ctaVisible ? 'panel-snap' : ''}
                    style={{
                        width: '100%', maxWidth: 1216,
                        padding: isMobile ? 32 : 64,
                        position: 'relative',
                        background: '#002B5B', overflow: 'hidden',
                        borderRadius: isMobile ? 16 : 32,
                        display: 'flex',
                        flexDirection: 'column', alignItems: 'center',
                        gap: isMobile ? 24 : 32,
                        opacity: ctaVisible ? undefined : 0,
                    }}
                >
                    <div style={{
                        position: 'absolute', right: 0, top: 0,
                        width: 474, height: 322,
                        background: 'linear-gradient(270deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
                        pointerEvents: 'none',
                    }} />
                    <div style={{
                        color: 'white',
                        fontSize: isMobile ? 28 : 48,
                        fontFamily: 'Manrope, sans-serif', fontWeight: 700,
                        lineHeight: isMobile ? '34px' : '48px',
                        textAlign: 'center', position: 'relative',
                    }}>
                        Standardize excellence.<br />
                        Infrastructure for the next era of care.
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: 16,
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'center', position: 'relative',
                        width: isMobile ? '100%' : 'auto',
                    }}>
                        <button
                            className={ctaVisible ? 'signal-rise' : ''}
                            onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=Contact Sales Engineering'}
                            style={{
                                paddingLeft: 40, paddingRight: 40,
                                paddingTop: 21, paddingBottom: 21,
                                background: '#006970', borderRadius: 6,
                                border: 'none', cursor: 'pointer',
                                color: 'white', fontSize: 16,
                                fontFamily: 'Inter, sans-serif', fontWeight: 700,
                                lineHeight: '24px',
                                animationDelay: '0.25s',
                                opacity: ctaVisible ? undefined : 0,
                                width: isMobile ? '100%' : 'auto',
                            }}
                        >
                            Contact Sales Engineering
                        </button>
                        <button
                            className={ctaVisible ? 'signal-rise' : ''}
                            onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=View Performance Data'}
                            style={{
                                paddingLeft: 40, paddingRight: 40,
                                paddingTop: 20, paddingBottom: 20,
                                background: 'rgba(255,255,255,0.10)',
                                borderRadius: 6, border: 'none',
                                outline: '1px rgba(255,255,255,0.20) solid',
                                outlineOffset: -1, backdropFilter: 'blur(6px)',
                                cursor: 'pointer', color: 'white',
                                fontSize: 16, fontFamily: 'Inter, sans-serif',
                                fontWeight: 700, lineHeight: '24px',
                                animationDelay: '0.4s',
                                opacity: ctaVisible ? undefined : 0,
                                width: isMobile ? '100%' : 'auto',
                            }}
                        >
                            View Performance Data
                        </button>
                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
