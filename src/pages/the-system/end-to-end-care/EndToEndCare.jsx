import PageLayout from '../../../components/PageLayout'
import hero1 from '../../../assets/END-END-CARE/HERO1.png'
import endEndImg from '../../../assets/END-END-CARE/end-end.png'
import { ArrowRight, DatabaseZap, Lock } from 'lucide-react'

export default function EndtoEndCarePage() {
    return (
        <PageLayout fullWidth={true}>

            {/* ── Section 1: Hero ── */}
            <div style={{
                width: '100%',
                paddingTop: 128,
                paddingBottom: 128,
                paddingLeft: 24,
                paddingRight: 24,
                background: 'white',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div style={{
                    maxWidth: 1232,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 48,
                }}>
                    {/* Left: text content */}
                    <div style={{
                        flex: '1 1 0',
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
                        </div>

                        {/* Headline */}
                        <div style={{
                            color: '#001736',
                            fontSize: 72,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 800,
                            lineHeight: '72px',
                        }}>
                            From the first<br />
                            contact to the last<br />
                            follow-up. The<br />
                            complete episode of<br />
                            care, connected.
                        </div>

                        {/* Subtext */}
                        <div style={{
                            maxWidth: 672,
                            paddingTop: 8,
                            color: '#43474F',
                            fontSize: 24,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            lineHeight: '32px',
                        }}>
                            ETOH is built around a simple architectural conviction: the
                            episode of care is one thing, not many.
                        </div>

                        {/* Button */}
                        <div style={{ paddingTop: 16 }}>
                            <button style={{
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
                        </div>
                    </div>

                    {/* Right: hero image with quote card */}
                    <div style={{
                        flex: '0 0 474px',
                        position: 'relative',
                    }}>
                        <div style={{
                            borderRadius: 8,
                            overflow: 'hidden',
                            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        }}>
                            <img
                                src={hero1}
                                alt="End-to-End Care Platform"
                                style={{
                                    width: '100%',
                                    height: 500,
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </div>

                        {/* Quote card */}
                        <div style={{
                            position: 'absolute',
                            left: -24,
                            bottom: 107,
                            maxWidth: 320,
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
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 2: The Single Thread ── */}
            <div style={{
                width: '100%',
                paddingTop: 96,
                paddingBottom: 96,
                background: '#F3F4F5',
                boxSizing: 'border-box',
            }}>
                <div style={{
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
                        <div style={{
                            color: '#001736',
                            fontSize: 36,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            lineHeight: '40px',
                        }}>
                            The Single Thread
                        </div>
                        <div style={{
                            maxWidth: 672,
                            color: '#43474F',
                            fontSize: 18,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            lineHeight: '28px',
                        }}>
                            A seamless architectural flow that transforms fragmented episodes into a
                            continuous, data-driven journey.
                        </div>
                    </div>

                    {/* Cards row */}
                    <div style={{ position: 'relative' }}>
                        {/* Connecting line */}
                        <div style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 152,
                            height: 4,
                            opacity: 0.2,
                            background: 'linear-gradient(90deg, #001736 0%, #006970 50%, #A9C7FF 100%)',
                            zIndex: 0,
                        }} />

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(5, 1fr)',
                            gap: 0,
                            position: 'relative',
                            zIndex: 1,
                        }}>
                            {/* Card 1 — Pre-Admission */}
                            <div style={{
                                background: 'white',
                                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                                borderRadius: 4,
                                padding: '34px 32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
                                minHeight: 309,
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
                                    }}>01</span>
                                </div>
                                <div style={{
                                    color: '#001736',
                                    fontSize: 20,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '28px',
                                    marginBottom: 12,
                                }}>
                                    Pre-Admission
                                </div>
                                <div style={{
                                    color: '#43474F',
                                    fontSize: 14,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '22px',
                                }}>
                                    Early data gathering and risk assessment before the patient even enters the facility.
                                </div>
                            </div>

                            {/* Card 2 — Admission */}
                            <div style={{
                                background: 'white',
                                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                                borderRadius: 4,
                                padding: '34px 32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
                                minHeight: 309,
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
                                    }}>02</span>
                                </div>
                                <div style={{
                                    color: '#001736',
                                    fontSize: 20,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '28px',
                                    marginBottom: 8,
                                }}>
                                    Admission
                                </div>
                                <div style={{
                                    color: '#006970',
                                    fontSize: 12,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    lineHeight: '16px',
                                    letterSpacing: 1.2,
                                    marginBottom: 12,
                                }}>
                                    Automated<br />Handoff
                                </div>
                                <div style={{
                                    color: '#43474F',
                                    fontSize: 14,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '22px',
                                }}>
                                    Instant verification and record matching. No duplicate data entry required.
                                </div>
                            </div>

                            {/* Card 3 — Inpatient Care (highlighted) */}
                            <div style={{
                                background: '#001736',
                                borderRadius: 4,
                                borderBottom: '4px solid #006970',
                                padding: '34px 32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
                                minHeight: 324,
                                boxShadow: '0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
                            }}>
                                <div style={{
                                    width: 50,
                                    height: 50,
                                    background: '#006970',
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
                                    }}>03</span>
                                </div>
                                <div style={{
                                    color: 'white',
                                    fontSize: 20,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '28px',
                                    marginBottom: 12,
                                }}>
                                    Inpatient Care
                                </div>
                                <div style={{
                                    color: 'rgba(255,255,255,0.80)',
                                    fontSize: 14,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '22px',
                                }}>
                                    Dynamic clinical monitoring and diagnostics integrated into the primary thread.
                                </div>
                            </div>

                            {/* Card 4 — Discharge */}
                            <div style={{
                                background: 'white',
                                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                                borderRadius: 4,
                                padding: '34px 32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
                                minHeight: 309,
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
                                    }}>04</span>
                                </div>
                                <div style={{
                                    color: '#001736',
                                    fontSize: 20,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '28px',
                                    marginBottom: 12,
                                }}>
                                    Discharge
                                </div>
                                <div style={{
                                    color: '#43474F',
                                    fontSize: 14,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '22px',
                                }}>
                                    Intelligent discharge planning starts on day one, ensuring a prepared exit.
                                </div>
                            </div>

                            {/* Card 5 — Recovery */}
                            <div style={{
                                background: 'white',
                                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                                borderRadius: 4,
                                padding: '34px 32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
                                minHeight: 309,
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
                                    }}>05</span>
                                </div>
                                <div style={{
                                    color: '#001736',
                                    fontSize: 20,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '28px',
                                    marginBottom: 12,
                                }}>
                                    Recovery
                                </div>
                                <div style={{
                                    color: '#43474F',
                                    fontSize: 14,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '22px',
                                }}>
                                    Continuous remote monitoring and follow-up loops to prevent readmission.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 3: No More Gaps ── */}
            <div style={{
                width: '100%',
                paddingTop: 96,
                paddingBottom: 96,
                paddingLeft: 24,
                paddingRight: 24,
                background: '#F8F9FA',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div style={{
                    maxWidth: 1232,
                    width: '100%',
                    display: 'flex',
                    gap: 64,
                    alignItems: 'center',
                }}>
                    {/* Left: text content */}
                    <div style={{
                        flex: '0 0 520px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 32,
                    }}>
                        <div style={{
                            color: '#001736',
                            fontSize: 36,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 800,
                            lineHeight: '45px',
                        }}>
                            No More Gaps. No More<br />Reconstructions.
                        </div>

                        {/* Feature 1 */}
                        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                            <div style={{
                                width: 48,
                                height: 48,
                                flexShrink: 0,
                                background: 'rgba(0, 105, 112, 0.10)',
                                borderRadius: 12,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <DatabaseZap size={20} color="#006970" strokeWidth={1.5} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <div style={{
                                    color: '#001736',
                                    fontSize: 20,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '28px',
                                }}>
                                    Zero Data Drift
                                </div>
                                <div style={{
                                    color: '#43474F',
                                    fontSize: 16,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '24px',
                                }}>
                                    Patients never carry information between departments. The
                                    platform ensures that diagnostic data from radiology flows as
                                    seamlessly as the initial triage report.
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                            <div style={{
                                width: 48,
                                height: 48,
                                flexShrink: 0,
                                background: 'rgba(0, 105, 112, 0.10)',
                                borderRadius: 12,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Lock size={20} color="#006970" strokeWidth={1.5} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <div style={{
                                    color: '#001736',
                                    fontSize: 20,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '28px',
                                }}>
                                    Immutable Integrity
                                </div>
                                <div style={{
                                    color: '#43474F',
                                    fontSize: 16,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '24px',
                                }}>
                                    The clinical record is never reconstructed. It is a persistent digital
                                    asset that matures with the patient&apos;s journey, maintaining absolute
                                    clinical context.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: UI mockup image */}
                    <div style={{
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
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 4: Continuous Care ── */}
            <div style={{
                width: '100%',
                paddingTop: 96,
                paddingBottom: 96,
                position: 'relative',
                background: '#002B5B',
                overflow: 'hidden',
                boxSizing: 'border-box',
            }}>
                <div style={{
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
                    {/* Header */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 24,
                    }}>
                        <div style={{
                            color: 'white',
                            fontSize: 48,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            lineHeight: '48px',
                            textAlign: 'center',
                        }}>
                            Continuous Care
                        </div>
                        <div style={{
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
                        </div>
                    </div>

                    {/* Two cards */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 24,
                    }}>
                        {/* Card 1 */}
                        <div style={{
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
                        </div>

                        {/* Card 2 */}
                        <div style={{
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
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 5: CTA ── */}
            <div style={{
                width: '100%',
                paddingTop: 128,
                paddingBottom: 128,
                background: '#F8F9FA',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div style={{
                    maxWidth: 896,
                    paddingLeft: 24,
                    paddingRight: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 40,
                }}>
                    <div style={{
                        color: '#001736',
                        fontSize: 60,
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 800,
                        lineHeight: '60px',
                        textAlign: 'center',
                    }}>
                        Connect Every Stage.<br />Eliminate Every Gap.
                    </div>

                    <div style={{
                        color: '#43474F',
                        fontSize: 20,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        lineHeight: '32px',
                        textAlign: 'center',
                    }}>
                        Ready to transform your clinical workflow into a single, seamless thread of operational
                        excellence? See ETOH in action.
                    </div>

                    <div style={{
                        paddingTop: 8,
                        display: 'flex',
                        gap: 24,
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>
                        <button style={{
                            paddingLeft: 40,
                            paddingRight: 40,
                            paddingTop: 20,
                            paddingBottom: 20,
                            background: '#001736',
                            borderRadius: 6,
                            border: 'none',
                            cursor: 'pointer',
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            lineHeight: '24px',
                            boxShadow: '0px 25px 50px -12px rgba(0, 23, 54, 0.20)',
                        }}>
                            Request Technical Demo
                        </button>
                        <button style={{
                            paddingLeft: 40,
                            paddingRight: 40,
                            paddingTop: 20,
                            paddingBottom: 20,
                            background: '#E7E8E9',
                            borderRadius: 6,
                            border: 'none',
                            cursor: 'pointer',
                            color: '#001736',
                            fontSize: 16,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            lineHeight: '24px',
                        }}>
                            View Clinical Whitepaper
                        </button>
                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
