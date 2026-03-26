import privateHero from '../../../assets/privateimg.png'
import privateOverlay from '../../../assets/Private.png'
import private3 from '../../../assets/private3.png'
import private4 from '../../../assets/private4.png'
import private5 from '../../../assets/private5.png'
import PrivatecardIcon1 from './icons/PrivatecardIcon1'
import PrivatecardIcon2 from './icons/PrivatecardIcon2'
import PageLayout from '../../../components/PageLayout'
import { BarChart2, ShieldCheck, Database, Zap, Link2, ArrowRight, Layers, Activity } from 'lucide-react'

export default function PrivateHospitalNetworksPage() {
    return (
        <PageLayout fullWidth={true}>

            {/* ── Hero Section ── */}
            <div style={{
                width: '100%',
                paddingTop: 192,
                paddingBottom: 160,
                paddingLeft: 24,
                paddingRight: '35%',
                position: 'relative',
                background: '#001736',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            }}>
                {/* Base background image */}
                <img
                    src={privateHero}
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                        left: 0,
                        top: 0,
                        position: 'absolute',
                        objectFit: 'cover',
                        opacity: 1,
                    }}
                />
                {/* Private.png overlay — right-anchored, fully visible building */}
                <img
                    src={privateOverlay}
                    alt=""
                    style={{
                        height: '100%',
                        width: '55%',
                        right: 0,
                        top: 0,
                        position: 'absolute',
                        objectFit: 'cover',
                        objectPosition: 'left center',
                    }}
                />
                {/* Gradient to protect text legibility on the left */}
                <div style={{
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    background: 'linear-gradient(90deg, #001736 0%, rgba(0, 23, 54, 0.92) 45%, rgba(0, 23, 54, 0.20) 75%, rgba(0, 23, 54, 0) 100%)',
                }} />

                <div style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 32,
                    maxWidth: 760,
                }}>
                    {/* Headline */}
                    <div style={{
                        color: 'white',
                        fontSize: 60,
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 800,
                        lineHeight: '60px',
                    }}>
                        The ambition of a modern<br />
                        hospital network requires<br />
                        operating infrastructure<br />
                        built to match it.
                    </div>

                    {/* Subheadline */}
                    <div style={{
                        maxWidth: 672,
                        color: '#7594CA',
                        fontSize: 20,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 300,
                        lineHeight: '28px',
                    }}>
                        Scale without coordination is just complexity. ETOH gives private
                        hospital networks the institutional backbone to run at their full capability.
                    </div>

                    {/* Buttons */}
                    <div style={{
                        paddingTop: 16,
                        display: 'flex',
                        gap: 24,
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <button style={{
                            paddingLeft: 32,
                            paddingRight: 32,
                            paddingTop: 17,
                            paddingBottom: 17,
                            background: '#006970',
                            borderRadius: 6,
                            border: 'none',
                            cursor: 'pointer',
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            lineHeight: '24px',
                            boxShadow: '0px 8px 10px -6px rgba(0, 105, 112, 0.20), 0px 20px 25px -5px rgba(0, 105, 112, 0.20)',
                        }}>
                            Request Private Network Consultation
                        </button>
                        <button style={{
                            paddingLeft: 32,
                            paddingRight: 32,
                            paddingTop: 16,
                            paddingBottom: 16,
                            borderRadius: 6,
                            border: '1px solid rgba(196, 198, 208, 0.20)',
                            background: 'transparent',
                            cursor: 'pointer',
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            lineHeight: '24px',
                        }}>
                            View Network Capabilities
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Challenge Section ── */}
            <div style={{
                width: '100%',
                paddingTop: 64,
                paddingBottom: 96,
                paddingLeft: 24,
                paddingRight: 24,
                background: '#F3F4F5',
                display: 'flex',
                flexDirection: 'row',
                gap: 32,
                alignItems: 'stretch',
                boxSizing: 'border-box',
            }}>
                {/* LEFT COLUMN — label, title, description, cards */}
                <div style={{
                    flex: '0 0 45%',
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
                        width: 'fit-content',
                    }}>
                        <span style={{
                            color: '#43474F',
                            fontSize: 12,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            lineHeight: '16px',
                            letterSpacing: 1.2,
                        }}>
                            The Challenge
                        </span>
                    </div>

                    {/* Section Title */}
                    <div style={{
                        color: '#001736',
                        fontSize: 36,
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 700,
                        lineHeight: '40px',
                    }}>
                        Complexity at Scale
                    </div>

                    {/* Section Description */}
                    <div style={{
                        paddingTop: 8,
                        color: '#43474F',
                        fontSize: 18,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        lineHeight: '29.25px',
                    }}>
                        Traditional healthcare software was designed for individual points
                        of care. When facilities are stitched together into a network, the
                        gaps in visibility and operational friction create significant
                        institutional risk. Current technology simply isn&apos;t designed for
                        multi-facility coordination.
                    </div>

                    {/* Cards */}
                    <div style={{
                        paddingTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16,
                    }}>
                        {/* Card 1 – Fragmented Data */}
                        <div style={{
                            background: 'white',
                            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                            borderRadius: 8,
                            borderLeft: '2px solid #006970',
                            padding: '28px 34px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12,
                        }}>
                            <PrivatecardIcon1 />
                            <div style={{
                                color: '#001736',
                                fontSize: 16,
                                fontFamily: 'Manrope, sans-serif',
                                fontWeight: 700,
                                lineHeight: '24px',
                            }}>
                                Fragmented Data
                            </div>
                            <div style={{
                                color: '#43474F',
                                fontSize: 14,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: '20px',
                            }}>
                                Siloed systems across campuses lead to delayed decision-making
                                and redundant administrative labor.
                            </div>
                        </div>

                        {/* Card 2 – Coordination Gap */}
                        <div style={{
                            background: 'white',
                            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                            borderRadius: 8,
                            borderLeft: '2px solid #006970',
                            padding: '28px 34px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12,
                        }}>
                            <PrivatecardIcon2 />
                            <div style={{
                                color: '#001736',
                                fontSize: 16,
                                fontFamily: 'Manrope, sans-serif',
                                fontWeight: 700,
                                lineHeight: '24px',
                            }}>
                                Coordination Gap
                            </div>
                            <div style={{
                                color: '#43474F',
                                fontSize: 14,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: '20px',
                            }}>
                                Manual hand-offs between sites increase error rates and
                                reduce throughput efficiency.
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN — Operational Thesis */}
                <div style={{
                    flex: 1,
                    padding: '48px 48px',
                    position: 'relative',
                    background: '#001736',
                    overflow: 'hidden',
                    borderRadius: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    {/* Label */}
                    <div style={{
                        paddingLeft: 12,
                        paddingRight: 12,
                        paddingTop: 4,
                        paddingBottom: 4,
                        background: 'rgba(255, 255, 255, 0.10)',
                        marginBottom: 24,
                        width: 'fit-content',
                    }}>
                        <span style={{
                            color: '#7594CA',
                            fontSize: 12,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            lineHeight: '16px',
                            letterSpacing: 1.2,
                        }}>
                            Our Thesis
                        </span>
                    </div>

                    {/* Title */}
                    <div style={{
                        color: 'white',
                        fontSize: 30,
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 700,
                        lineHeight: '36px',
                        marginBottom: 32,
                    }}>
                        Operational Thesis
                    </div>

                    {/* Description */}
                    <div style={{
                        color: '#7594CA',
                        fontSize: 18,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        lineHeight: '29.25px',
                        marginBottom: 32,
                    }}>
                        We don&apos;t impose a rigid workflow. The ETOH approach
                        begins by analyzing the institution&apos;s unique facility mix,
                        clinical model, and specific growth trajectory.
                    </div>

                    {/* Points */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                            <div style={{ flexShrink: 0, marginTop: 2 }}>
                                <Layers size={20} color="#006970" strokeWidth={1.5} />
                            </div>
                            <div>
                                <div style={{
                                    color: 'white',
                                    fontSize: 16,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 600,
                                    lineHeight: '24px',
                                    marginBottom: 4,
                                }}>
                                    Institutional Blueprinting
                                </div>
                                <div style={{
                                    color: '#7594CA',
                                    fontSize: 14,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '20px',
                                }}>
                                    Aligning software architecture with regional hub-and-spoke models.
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                            <div style={{ flexShrink: 0, marginTop: 2 }}>
                                <Activity size={20} color="#006970" strokeWidth={1.5} />
                            </div>
                            <div>
                                <div style={{
                                    color: 'white',
                                    fontSize: 16,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 600,
                                    lineHeight: '24px',
                                    marginBottom: 4,
                                }}>
                                    Elastic Resource Allocation
                                </div>
                                <div style={{
                                    color: '#7594CA',
                                    fontSize: 14,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '20px',
                                }}>
                                    Dynamically routing clinical resources based on real-time network load.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 3: Cross-Site Operational Intelligence ── */}
            <div style={{
                width: '100%',
                paddingTop: 128,
                paddingBottom: 128,
                background: 'white',
            }}>
                <div style={{
                    maxWidth: 1280,
                    margin: '0 auto',
                    paddingLeft: 24,
                    paddingRight: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 96,
                }}>
                    {/* Header */}
                    <div style={{ maxWidth: 768, display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <div style={{
                            color: '#006970',
                            fontSize: 14,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            lineHeight: '20px',
                            letterSpacing: 2.8,
                        }}>
                            System Architecture
                        </div>
                        <div style={{
                            color: '#001736',
                            fontSize: 48,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            lineHeight: '48px',
                        }}>
                            Cross-Site Operational Intelligence
                        </div>
                        <div style={{
                            paddingTop: 16,
                            color: '#43474F',
                            fontSize: 20,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            lineHeight: '28px',
                        }}>
                            The network is your greatest asset. We transform disconnected hospitals into a singular, intelligent organism.
                        </div>
                    </div>

                    {/* 3-column cards */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 32,
                        alignItems: 'start',
                    }}>
                        {[
                            {
                                img: private3,
                                title: 'Shared Clinical Standards',
                                desc: "Enforce uniform protocols across all facilities. Ensure that excellence isn't site-dependent, but an institutional constant.",
                            },
                            {
                                img: private4,
                                title: 'Real-time Visibility',
                                desc: "A bird's-eye view of every bed, clinician, and surgical suite in your network. Predict bottlenecks before they impact care delivery.",
                            },
                            {
                                img: private5,
                                title: 'Seamless Transitions',
                                desc: 'Move patients between facilities without data friction. Comprehensive records, imaging, and logistics follow the patient automatically.',
                            },
                        ].map(({ img, title, desc }) => (
                            <div key={title} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                <div style={{
                                    background: '#F3F4F5',
                                    borderRadius: 8,
                                    overflow: 'hidden',
                                    marginBottom: 24,
                                }}>
                                    <img
                                        src={img}
                                        alt={title}
                                        style={{ width: '100%', height: 213, objectFit: 'cover', display: 'block' }}
                                    />
                                </div>
                                <div style={{
                                    color: '#001736',
                                    fontSize: 24,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '32px',
                                    marginBottom: 12,
                                }}>
                                    {title}
                                </div>
                                <div style={{
                                    color: '#43474F',
                                    fontSize: 16,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '26px',
                                }}>
                                    {desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Section 4: Bento Grid ── */}
            <div style={{
                width: '100%',
                paddingTop: 96,
                paddingBottom: 96,
                paddingLeft: 24,
                paddingRight: 24,
                background: '#F3F4F5',
                boxSizing: 'border-box',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: 'auto auto auto',
                    gap: 16,
                }}>
                    {/* Large left card — spans 2 rows */}
                    <div style={{
                        gridColumn: '1',
                        gridRow: '1 / 3',
                        padding: 48,
                        background: 'white',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                        borderRadius: 16,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        gap: 16,
                    }}>
                        <BarChart2 size={40} color="#006970" strokeWidth={1.5} />
                        <div style={{
                            color: '#001736',
                            fontSize: 24,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            lineHeight: '32px',
                        }}>
                            Predictive Load Balancing
                        </div>
                        <div style={{
                            color: '#43474F',
                            fontSize: 16,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            lineHeight: '24px',
                        }}>
                            Using proprietary algorithms to forecast admission spikes across the network up to 72 hours in advance.
                        </div>
                    </div>

                    {/* Top-right: Institutional Compliance — dark */}
                    <div style={{
                        gridColumn: '2',
                        gridRow: '1',
                        padding: 32,
                        background: '#001736',
                        borderRadius: 16,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 24,
                    }}>
                        <ShieldCheck size={28} color="#006970" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <div style={{
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Manrope, sans-serif',
                                fontWeight: 700,
                                lineHeight: '24px',
                            }}>
                                Institutional Compliance
                            </div>
                            <div style={{
                                color: '#7594CA',
                                fontSize: 14,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: '20px',
                            }}>
                                Centralized auditing for network-wide regulatory adherence.
                            </div>
                        </div>
                    </div>

                    {/* Middle-right: two side-by-side small cards */}
                    <div style={{
                        gridColumn: '2',
                        gridRow: '2',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 16,
                    }}>
                        {/* Unified Health Records — grey */}
                        <div style={{
                            padding: 32,
                            background: '#E7E8E9',
                            borderRadius: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            gap: 24,
                            minHeight: 160,
                        }}>
                            <Database size={22} color="#001736" strokeWidth={1.5} />
                            <div style={{
                                color: '#001736',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                lineHeight: '20px',
                            }}>
                                Unified Health Records
                            </div>
                        </div>

                        {/* Zero-Latency Sync — teal */}
                        <div style={{
                            padding: 32,
                            background: '#006970',
                            borderRadius: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            gap: 24,
                            minHeight: 160,
                        }}>
                            <Zap size={20} color="white" strokeWidth={1.5} />
                            <div style={{
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                lineHeight: '20px',
                            }}>
                                Zero-Latency Sync
                            </div>
                        </div>
                    </div>

                    {/* Bottom full-width: Partner Interoperability */}
                    <div style={{
                        gridColumn: '1 / 3',
                        gridRow: '3',
                        padding: 32,
                        background: 'white',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                        borderRadius: 16,
                        borderTop: '4px solid #006970',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <div style={{
                                color: '#001736',
                                fontSize: 16,
                                fontFamily: 'Manrope, sans-serif',
                                fontWeight: 700,
                                lineHeight: '24px',
                            }}>
                                Partner Interoperability
                            </div>
                            <div style={{
                                color: '#43474F',
                                fontSize: 14,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: '20px',
                            }}>
                                Secure data bridges for third-party lab and pharmacy networks.
                            </div>
                        </div>
                        <Link2 size={28} color="#D9DADB" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                    </div>
                </div>
            </div>

            {/* ── Section 5: CTA ── */}
            <div style={{
                width: '100%',
                paddingTop: 128,
                paddingBottom: 128,
                position: 'relative',
                background: '#001736',
                overflow: 'hidden',
            }}>
                {/* Subtle overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(255, 255, 255, 0.03)',
                    pointerEvents: 'none',
                }} />
                <div style={{
                    maxWidth: 1280,
                    margin: '0 auto',
                    paddingLeft: 24,
                    paddingRight: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 32,
                    position: 'relative',
                }}>
                    <div style={{
                        color: 'white',
                        fontSize: 48,
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 700,
                        lineHeight: '48px',
                        textAlign: 'center',
                    }}>
                        Institutional-Grade Operations
                    </div>
                    <div style={{
                        maxWidth: 672,
                        color: '#7594CA',
                        fontSize: 20,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        lineHeight: '28px',
                        textAlign: 'center',
                    }}>
                        Deployment details available to hospital leadership and institutional counterparties on request.
                    </div>
                    <div style={{
                        paddingTop: 16,
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
                            background: '#006970',
                            borderRadius: 6,
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            lineHeight: '24px',
                        }}>
                            Request Private Network Consultation
                            <ArrowRight size={16} color="white" />
                        </button>
                        <button style={{
                            paddingLeft: 40,
                            paddingRight: 40,
                            paddingTop: 20,
                            paddingBottom: 20,
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: 6,
                            border: 'none',
                            cursor: 'pointer',
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            lineHeight: '24px',
                        }}>
                            Speak with our Deployment Team
                        </button>
                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
