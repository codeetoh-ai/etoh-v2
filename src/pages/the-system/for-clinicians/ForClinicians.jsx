import PageLayout from '../../../components/PageLayout'
import hero1 from '../../../assets/Clinicians/hero1.png'
import realTimeRhythm from '../../../assets/Clinicians/reltimerhythm.png'
import { BedDouble, GitBranch, FlaskConical, BellDot, Zap } from 'lucide-react'

export default function ForCliniciansPage() {
    return (
        <PageLayout fullWidth={true}>

            {/* ── Section 1: Hero ── */}
            <div style={{
                width: '100%',
                minHeight: 921,
                paddingTop: 172,
                paddingBottom: 172,
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box',
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: 1280,
                    paddingLeft: 32,
                    paddingRight: 32,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 64,
                }}>
                    {/* Left: text content */}
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24,
                    }}>
                        {/* Label */}
                        <div style={{
                            display: 'inline-flex',
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 4,
                            paddingBottom: 4,
                            background: '#E7E8E9',
                            borderRadius: 12,
                            width: 'fit-content',
                        }}>
                            <span style={{
                                color: '#006970',
                                fontSize: 10,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                lineHeight: '15px',
                                letterSpacing: 2,
                            }}>
                                Operational Excellence
                            </span>
                        </div>

                        {/* Headline */}
                        <div style={{
                            fontSize: 72,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 800,
                            lineHeight: '72px',
                        }}>
                            <span style={{ color: '#001736' }}>
                                Every patient.<br />
                                Every decision.<br />
                                Every moment.<br />
                            </span>
                            <span style={{ color: '#006970' }}>
                                One view.
                            </span>
                        </div>

                        {/* Subtext */}
                        <div style={{
                            maxWidth: 576,
                            paddingTop: 8,
                            color: '#43474F',
                            fontSize: 20,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            lineHeight: '32px',
                        }}>
                            ETOH&apos;s clinical terminal is the institution&apos;s operating center
                            — the place where the full complexity of a hospital becomes
                            legible, manageable, and responsive.
                        </div>

                        {/* Buttons */}
                        <div style={{
                            paddingTop: 16,
                            display: 'flex',
                            gap: 16,
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <button style={{
                                paddingLeft: 32,
                                paddingRight: 32,
                                paddingTop: 17,
                                paddingBottom: 17,
                                background: '#001736',
                                borderRadius: 6,
                                border: 'none',
                                cursor: 'pointer',
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                lineHeight: '24px',
                                boxShadow: '0px 8px 10px -6px rgba(0, 23, 54, 0.10), 0px 20px 25px -5px rgba(0, 23, 54, 0.10)',
                            }}>
                                Request Infrastructure Audit
                            </button>
                            <button style={{
                                paddingLeft: 32,
                                paddingRight: 32,
                                paddingTop: 16,
                                paddingBottom: 16,
                                background: 'transparent',
                                borderRadius: 6,
                                border: 'none',
                                outline: '1px solid #C4C6D0',
                                cursor: 'pointer',
                                color: '#001736',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                lineHeight: '24px',
                            }}>
                                View Documentation
                            </button>
                        </div>
                    </div>

                    {/* Right: image card */}
                    <div style={{
                        flex: '0 0 576px',
                        position: 'relative',
                        background: '#F3F4F5',
                        borderRadius: 16,
                        boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        overflow: 'hidden',
                    }}>
                        <img
                            src={hero1}
                            alt="Clinical Terminal"
                            style={{
                                width: '100%',
                                height: 576,
                                objectFit: 'cover',
                                display: 'block',
                                opacity: 0.9,
                            }}
                        />
                        {/* Dark gradient overlay */}
                        <div style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(45deg, rgba(0, 23, 54, 0.40) 0%, rgba(0, 23, 54, 0) 100%)',
                        }} />

                        {/* Live System Pulse widget */}
                        <div style={{
                            position: 'absolute',
                            right: 24,
                            top: 32,
                            maxWidth: 200,
                            padding: 16,
                            background: 'rgba(255, 255, 255, 0.80)',
                            borderRadius: 8,
                            outline: '1px rgba(255, 255, 255, 0.20) solid',
                            outlineOffset: -1,
                            backdropFilter: 'blur(12px)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12,
                            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div style={{
                                    width: 8,
                                    height: 8,
                                    background: '#006970',
                                    borderRadius: 12,
                                    flexShrink: 0,
                                }} />
                                <span style={{
                                    color: '#001736',
                                    fontSize: 10,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    lineHeight: '15px',
                                    letterSpacing: 1,
                                }}>
                                    Live System Pulse
                                </span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                <div style={{
                                    height: 8,
                                    background: '#E7E8E9',
                                    borderRadius: 12,
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        width: '78%',
                                        height: '100%',
                                        background: '#006970',
                                    }} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{
                                        color: '#43474F',
                                        fontSize: 10,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 700,
                                        lineHeight: '15px',
                                    }}>
                                        CAPACITY UTILIZATION
                                    </span>
                                    <span style={{
                                        color: '#43474F',
                                        fontSize: 10,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 700,
                                        lineHeight: '15px',
                                    }}>
                                        78%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 2: Complexity Managed ── */}
            <div style={{
                width: '100%',
                paddingLeft: 120,
                paddingRight: 120,
                paddingTop: 90,
                paddingBottom: 90,
                background: '#F3F4F5',
                boxSizing: 'border-box',
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: 1216,
                    display: 'flex',
                    gap: 64,
                    alignItems: 'flex-start',
                }}>
                    {/* Left column: title only */}
                    <div style={{ flex: '0 0 190px' }}>
                        <div style={{
                            fontSize: 36,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            lineHeight: '40px',
                        }}>
                            <span style={{ color: '#001736' }}>Complexity<br /></span>
                            <span style={{ color: '#006970' }}>Managed.</span>
                        </div>
                    </div>

                    {/* Right column: all content stacked */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 48 }}>

                        {/* Body text */}
                        <div style={{
                            color: '#43474F',
                            fontSize: 30,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 300,
                            lineHeight: '48px',
                        }}>
                            A modern hospital is a system of extraordinary
                            complexity. Hundreds of patients at different stages of
                            care. Dozens of clinical teams making decisions in
                            parallel.
                        </div>

                        {/* Two boxes side by side */}
                        <div style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>
                            <div style={{
                                flex: 1,
                                padding: 32,
                                background: 'white',
                                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                                borderRadius: '8px 0 0 8px',
                                borderLeft: '4px solid #006970',
                            }}>
                                <div style={{
                                    color: '#191C1D',
                                    fontSize: 18,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '29px',
                                }}>
                                    Diagnostic pipelines, bed flows,
                                    medication cycles, and specialist
                                    referrals happening simultaneously
                                    across every ward and every hour.
                                </div>
                            </div>
                            <div style={{
                                flex: 1,
                                padding: 32,
                                background: 'white',
                                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                                borderRadius: '0 8px 8px 0',
                                borderLeft: '1px solid #EDEEEF',
                            }}>
                                <div style={{
                                    color: '#43474F',
                                    fontSize: 16,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '26px',
                                }}>
                                    The institutions that deliver consistently
                                    excellent care are the ones whose
                                    operating infrastructure matches that
                                    complexity — whose leadership can see
                                    what is happening.
                                </div>
                            </div>
                        </div>

                        {/* Dark card */}
                        <div style={{
                            padding: 48,
                            position: 'relative',
                            background: '#001736',
                            overflow: 'hidden',
                            borderRadius: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 24,
                        }}>
                            <div style={{
                                position: 'absolute',
                                width: 256,
                                height: 256,
                                right: -30,
                                top: 41,
                                background: 'rgba(0, 105, 112, 0.20)',
                                borderRadius: 12,
                                filter: 'blur(50px)',
                            }} />
                            <div style={{
                                color: 'white',
                                fontSize: 24,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                lineHeight: '32px',
                                position: 'relative',
                            }}>
                                Operational Clarity
                            </div>
                            <div style={{
                                color: '#7594CA',
                                fontSize: 20,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: '32px',
                                position: 'relative',
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
                paddingTop: 128,
                paddingBottom: 128,
                background: '#F8F9FA',
                boxSizing: 'border-box',
            }}>
                <div style={{
                    maxWidth: 1280,
                    margin: '0 auto',
                    paddingLeft: 32,
                    paddingRight: 32,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 80,
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                        <div style={{
                            color: '#001736',
                            fontSize: 48,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 800,
                            lineHeight: '48px',
                        }}>
                            The Infrastructure
                        </div>
                        <div style={{
                            maxWidth: 672,
                            color: '#43474F',
                            fontSize: 20,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            lineHeight: '28px',
                        }}>
                            A shared, live picture of the facility for every stakeholder. From
                            medical directors to nursing floor leads.
                        </div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 0,
                        border: '1px solid #EDEEEF',
                        borderRadius: 8,
                        overflow: 'hidden',
                    }}>
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
                        ].map(({ icon, title, desc }, i) => (
                            <div key={title} style={{
                                background: 'white',
                                padding: '40px 40px',
                                borderRight: i < 3 ? '1px solid #EDEEEF' : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: 268,
                            }}>
                                <div style={{ marginBottom: 40 }}>{icon}</div>
                                <div style={{
                                    color: '#001736',
                                    fontSize: 20,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '28px',
                                    marginBottom: 12,
                                }}>
                                    {title}
                                </div>
                                <div style={{
                                    color: '#43474F',
                                    fontSize: 16,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '24px',
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
                paddingTop: 128,
                paddingBottom: 224,
                overflow: 'hidden',
                boxSizing: 'border-box',
            }}>
                <div style={{
                    maxWidth: 1280,
                    margin: '0 auto',
                    paddingLeft: 32,
                    paddingRight: 32,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 80,
                    alignItems: 'flex-start',
                }}>
                    {/* Left: image card */}
                    <div style={{
                        flex: '0 0 552px',
                        padding: 4,
                        background: '#EDEEEF',
                        borderRadius: 24,
                        overflow: 'hidden',
                    }}>
                        <div style={{
                            background: 'white',
                            borderRadius: 22,
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <img
                                src={realTimeRhythm}
                                alt="Real-Time Rhythm"
                                style={{
                                    width: '100%',
                                    height: 414,
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                            <div style={{
                                padding: 32,
                                borderTop: '1px solid #EDEEEF',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 24,
                            }}>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
                                    <div style={{
                                        height: 4,
                                        background: '#E7E8E9',
                                        borderRadius: 12,
                                        overflow: 'hidden',
                                        position: 'relative',
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            width: '50%',
                                            height: '100%',
                                            background: '#006970',
                                        }} />
                                    </div>
                                    <span style={{
                                        color: '#43474F',
                                        fontSize: 10,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        lineHeight: '15px',
                                        letterSpacing: 1,
                                    }}>
                                        Infrastructure Load
                                    </span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
                                    <span style={{
                                        color: '#001736',
                                        fontSize: 24,
                                        fontFamily: 'Manrope, sans-serif',
                                        fontWeight: 900,
                                        lineHeight: '32px',
                                    }}>
                                        0.02s
                                    </span>
                                    <span style={{
                                        color: '#006970',
                                        fontSize: 10,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        lineHeight: '15px',
                                        letterSpacing: 1,
                                    }}>
                                        Latency
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: text content */}
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 40,
                    }}>
                        <div style={{
                            color: '#001736',
                            fontSize: 48,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 800,
                            lineHeight: '60px',
                        }}>
                            Real-Time Rhythm
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                            <div style={{
                                color: '#43474F',
                                fontSize: 20,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: '32px',
                            }}>
                                The terminal is designed around the rhythm of clinical
                                work, not the rhythm of administrative reporting.
                            </div>
                            <div style={{
                                color: '#191C1D',
                                fontSize: 20,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                lineHeight: '32px',
                            }}>
                                It does not describe yesterday. It shows today — and it
                                shapes what tomorrow looks like for every patient
                                currently in the system.
                            </div>
                        </div>

                        <div style={{ paddingTop: 56, borderTop: '1px solid #E7E8E9' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div style={{
                                    width: 48,
                                    height: 48,
                                    flexShrink: 0,
                                    background: '#96F1FA',
                                    borderRadius: 12,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Zap size={20} color="#006F77" strokeWidth={1.5} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <span style={{
                                        color: '#001736',
                                        fontSize: 16,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 700,
                                        lineHeight: '24px',
                                    }}>
                                        Instant Intelligence
                                    </span>
                                    <span style={{
                                        color: '#43474F',
                                        fontSize: 14,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '20px',
                                    }}>
                                        Sub-millisecond data synchronization across facility networks.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Final Section: CTA ── */}
            <div style={{
                width: '100%',
                paddingLeft: 32,
                paddingRight: 32,
                paddingBottom: 128,
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: 1216,
                    padding: 64,
                    position: 'relative',
                    background: '#002B5B',
                    overflow: 'hidden',
                    borderRadius: 32,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 32,
                }}>
                    <div style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        width: 474,
                        height: 322,
                        background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
                        pointerEvents: 'none',
                    }} />
                    <div style={{
                        color: 'white',
                        fontSize: 48,
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 700,
                        lineHeight: '48px',
                        textAlign: 'center',
                        position: 'relative',
                    }}>
                        Standardize excellence.<br />
                        Infrastructure for the next era of care.
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: 16,
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        position: 'relative',
                    }}>
                        <button style={{
                            paddingLeft: 40,
                            paddingRight: 40,
                            paddingTop: 21,
                            paddingBottom: 21,
                            background: '#006970',
                            borderRadius: 6,
                            border: 'none',
                            cursor: 'pointer',
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            lineHeight: '24px',
                        }}>
                            Contact Sales Engineering
                        </button>
                        <button style={{
                            paddingLeft: 40,
                            paddingRight: 40,
                            paddingTop: 20,
                            paddingBottom: 20,
                            background: 'rgba(255, 255, 255, 0.10)',
                            borderRadius: 6,
                            border: 'none',
                            outline: '1px rgba(255, 255, 255, 0.20) solid',
                            outlineOffset: -1,
                            backdropFilter: 'blur(6px)',
                            cursor: 'pointer',
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            lineHeight: '24px',
                        }}>
                            View Performance Data
                        </button>
                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
