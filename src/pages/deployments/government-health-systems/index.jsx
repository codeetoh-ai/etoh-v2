import PageLayout from '../../../components/PageLayout'
import { useResponsive } from '../../../hooks/useResponsive'
import govtImg from '../../../assets/Govthealthsystem.png'
import govtHospitalImg from '../../../assets/Govthospital.png'
import Bedicon from './public-health-facilities/Assets/bedicon'
import Resourceicon from './public-health-facilities/Assets/Resourceicon'
import clinicalicon from './public-health-facilities/clinicalicon'

const ClinicalRegisterIcon = () => (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 22.5C4.3125 22.5 3.72396 22.2552 3.23438 21.7656C2.74479 21.276 2.5 20.6875 2.5 20V5C2.5 4.3125 2.74479 3.72396 3.23438 3.23438C3.72396 2.74479 4.3125 2.5 5 2.5H9.375C9.58333 1.875 9.96354 1.36458 10.5156 0.96875C11.0677 0.572917 11.7 0.375 12.4125 0.375C13.125 0.375 13.7656 0.572917 14.3344 0.96875C14.9031 1.36458 15.2917 1.875 15.5 2.5H20C20.6875 2.5 21.276 2.74479 21.7656 3.23438C22.2552 3.72396 22.5 4.3125 22.5 5V20C22.5 20.6875 22.2552 21.276 21.7656 21.7656C21.276 22.2552 20.6875 22.5 20 22.5H5ZM5 20H20V5H5V20ZM7.5 17.5H15V15H7.5V17.5ZM7.5 13.75H17.5V11.25H7.5V13.75ZM7.5 10H17.5V7.5H7.5V10ZM12.5 3.4375C12.7604 3.4375 12.9792 3.34896 13.1562 3.17188C13.3333 2.99479 13.4219 2.77604 13.4219 2.51562C13.4219 2.25521 13.3333 2.03646 13.1562 1.85938C12.9792 1.68229 12.7604 1.59375 12.5 1.59375C12.2396 1.59375 12.0208 1.68229 11.8438 1.85938C11.6667 2.03646 11.5781 2.25521 11.5781 2.51562C11.5781 2.77604 11.6667 2.99479 11.8438 3.17188C12.0208 3.34896 12.2396 3.4375 12.5 3.4375Z" fill="#006970"/>
    </svg>
)

export default function GovernmentHealthSystemsPage() {
    const { isMobile, isTablet } = useResponsive()

    return (
        <PageLayout title="Government Health Systems" fullWidth={true}>

            {/* Section 1: Hero */}
            <div style={{
                width: '100%',
                paddingTop: isMobile ? 80 : 160,
                paddingBottom: isMobile ? 80 : 128,
                paddingLeft: isMobile ? 16 : 32,
                paddingRight: isMobile ? 16 : 32,
                position: 'relative',
                background: '#002B5B',
                overflow: 'hidden',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
            }}>
                {/* Background image overlay */}
                <div style={{
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    opacity: 0.10,
                    mixBlendMode: 'overlay',
                    pointerEvents: 'none',
                    overflow: 'hidden',
                }}>
                    <img
                        src={govtImg}
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                </div>

                {/* Content */}
                <div style={{
                    width: '100%',
                    maxWidth: 896,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 24,
                    display: 'flex',
                    position: 'relative',
                    zIndex: 1,
                }}>
                    <div style={{
                        color: '#006970',
                        fontSize: 12,
                        fontFamily: 'Inter',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        lineHeight: '16px',
                        letterSpacing: 2.40,
                    }}>
                        Government Health Systems
                    </div>

                    <div style={{
                        alignSelf: 'stretch',
                        fontFamily: 'Manrope',
                        fontWeight: '800',
                        fontSize: isMobile ? 40 : isTablet ? 56 : 72,
                        lineHeight: isMobile ? '48px' : isTablet ? '64px' : '72px',
                        wordWrap: 'break-word',
                    }}>
                        <span style={{ color: 'white' }}>
                            Where healthcare access matters most, the operating infrastructure has always been weakest.{' '}
                        </span>
                        <span style={{ color: '#7594CA' }}>
                            We are changing that.
                        </span>
                    </div>

                    <div style={{ maxWidth: 768, paddingTop: 8 }}>
                        <div style={{
                            color: '#7594CA',
                            fontSize: isMobile ? 18 : 24,
                            fontFamily: 'Inter',
                            fontWeight: '300',
                            lineHeight: isMobile ? '28px' : '32px',
                            wordWrap: 'break-word',
                        }}>
                            Public health facilities serve the patients with the fewest alternatives. ETOH&apos;s commitment to government health systems is built on that fact and does not apologize for it.
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: A Different Version of Progress */}
            <div style={{
                width: '100%',
                paddingLeft: isMobile ? 16 : 32,
                paddingRight: isMobile ? 16 : 32,
                paddingTop: isMobile ? 64 : 96,
                paddingBottom: isMobile ? 64 : 96,
                background: '#F8F9FA',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: 1216,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? 48 : 80,
                    alignItems: 'flex-start',
                }}>
                    {/* Left: text + comparison cards */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 48 }}>
                        <div style={{
                            color: '#001736',
                            fontSize: isMobile ? 28 : 36,
                            fontFamily: 'Manrope',
                            fontWeight: '700',
                            lineHeight: '40px',
                            wordWrap: 'break-word',
                        }}>
                            A Different Version of Progress
                        </div>
                        <div style={{
                            color: '#43474F',
                            fontSize: 18,
                            fontFamily: 'Inter',
                            fontWeight: '400',
                            lineHeight: '29px',
                            wordWrap: 'break-word',
                        }}>
                            While global technology focuses on the high-margin corridors of private medicine, the backbone of societal health—the public clinic—is often left with legacy tools or empty promises. We reject the notion that public infrastructure should be a secondary thought.
                        </div>

                        {/* Comparison cards */}
                        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 16 }}>
                            {/* Industry Standard */}
                            <div style={{
                                padding: '32px 32px 52px 32px',
                                background: '#F3F4F5',
                                borderRadius: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12,
                            }}>
                                <div style={{ color: '#001736', fontSize: 16, fontFamily: 'Manrope', fontWeight: '700', lineHeight: '24px' }}>
                                    Industry Standard
                                </div>
                                <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px' }}>
                                    Focuses on patient convenience for those with private insurance and high-speed fiber access.
                                </div>
                            </div>

                            {/* The ETOH Mandate */}
                            <div style={{
                                padding: 32,
                                background: 'white',
                                boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
                                borderLeft: '4px solid #006970',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12,
                            }}>
                                <div style={{ color: '#006970', fontSize: 16, fontFamily: 'Manrope', fontWeight: '700', lineHeight: '24px' }}>
                                    The ETOH Mandate
                                </div>
                                <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px' }}>
                                    Optimized for high-volume public environments where resilience and clinical continuity are the only metrics that matter.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: image with teal overlay badge */}
                    <div style={{
                        flex: isMobile ? 'none' : '0 0 auto',
                        width: isMobile ? '100%' : isTablet ? 380 : 461,
                        position: 'relative',
                        alignSelf: isMobile ? 'stretch' : 'flex-start',
                        marginBottom: isMobile ? 24 : 0,
                    }}>
                        <div style={{
                            width: '100%',
                            borderRadius: 16,
                            overflow: 'hidden',
                            boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
                        }}>
                            <img
                                src={govtHospitalImg}
                                alt="Government hospital facility"
                                style={{
                                    width: '100%',
                                    height: isMobile ? 320 : 576,
                                    objectFit: 'cover',
                                    display: 'block',
                                    filter: 'grayscale(100%)',
                                }}
                            />
                        </div>
                        <div style={{
                            position: 'absolute',
                            left: -24,
                            bottom: 100,
                            maxWidth: 200,
                            paddingTop: 32,
                            paddingBottom: 32,
                            paddingLeft: 32,
                            paddingRight: 32,
                            background: '#006970',
                            borderRadius: 4,
                            boxShadow: '0px 8px 10px -6px rgba(0,0,0,0.10), 0px 20px 25px -5px rgba(0,0,0,0.10)',
                        }}>
                            <div style={{ color: 'white', fontSize: 24, fontFamily: 'Manrope', fontWeight: '700', lineHeight: '30px' }}>
                                Built for the frontline.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: What We Deploy */}
            <div style={{
                width: '100%',
                paddingLeft: isMobile ? 16 : 32,
                paddingRight: isMobile ? 16 : 32,
                paddingTop: isMobile ? 64 : 96,
                paddingBottom: isMobile ? 64 : 96,
                background: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: 1216,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? 48 : 80,
                    alignItems: 'flex-start',
                }}>
                    {/* Left: heading */}
                    <div style={{
                        flex: '0 0 auto',
                        width: isMobile ? '100%' : isTablet ? 280 : 352,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 20,
                        position: isMobile ? 'relative' : 'sticky',
                        top: isMobile ? 'auto' : 120,
                    }}>
                        <div style={{
                            color: '#006970',
                            fontSize: 12,
                            fontFamily: 'Inter',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: 2.40,
                            lineHeight: '16px',
                        }}>
                            What We Deploy
                        </div>
                        <div style={{
                            color: '#001736',
                            fontSize: isMobile ? 32 : 40,
                            fontFamily: 'Manrope',
                            fontWeight: '800',
                            lineHeight: isMobile ? '40px' : '48px',
                            letterSpacing: '-0.02em',
                        }}>
                            Infrastructure built for the realities of public health.
                        </div>
                        <div style={{
                            color: '#43474F',
                            fontSize: 16,
                            fontFamily: 'Inter',
                            fontWeight: '400',
                            lineHeight: '26px',
                        }}>
                            Every module is designed to function in low-bandwidth environments, integrate with legacy government systems, and scale across district networks.
                        </div>
                    </div>

                    {/* Right: feature list */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
                        {[
                            {
                                title: 'Unified Patient Registry',
                                desc: 'A single longitudinal record that follows patients across district hospitals, PHCs, and sub-centres — eliminating redundant intake, lost histories, and duplicate investigations.',
                            },
                            {
                                title: 'Clinical Decision Support',
                                desc: 'Evidence-based protocol guidance embedded directly in the clinician workflow. Designed for high-volume, time-pressured environments where cognitive load must be minimized.',
                            },
                            {
                                title: 'Government Billing & Claims Engine',
                                desc: 'Full compliance with PMJAY, CGHS, and state scheme structures. Auto-coding, real-time eligibility checks, and rejection analytics built in from day one.',
                            },
                            {
                                title: 'Supply Chain & Pharmacy Module',
                                desc: 'End-to-end drug inventory visibility from the central medical store to the ward. Expiry tracking, consumption forecasting, and FIFO enforcement automated.',
                            },
                            {
                                title: 'Reporting & Compliance Dashboards',
                                desc: 'Pre-built integrations with NHA, HMIS, and state health reporting frameworks. Real-time dashboards for CMOs, district health officers, and facility administrators.',
                            },
                        ].map((item, i) => (
                            <div key={i} style={{
                                borderTop: '1px solid #DDDEE0',
                                paddingTop: 32,
                                paddingBottom: 32,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12,
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                    <div style={{
                                        width: 32,
                                        height: 32,
                                        background: '#002B5B',
                                        borderRadius: 6,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexShrink: 0,
                                        color: '#7594CA',
                                        fontSize: 13,
                                        fontFamily: 'Inter',
                                        fontWeight: '700',
                                    }}>
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <div style={{
                                        color: '#001736',
                                        fontSize: isMobile ? 18 : 20,
                                        fontFamily: 'Manrope',
                                        fontWeight: '700',
                                        lineHeight: '28px',
                                    }}>
                                        {item.title}
                                    </div>
                                </div>
                                <div style={{
                                    color: '#43474F',
                                    fontSize: 15,
                                    fontFamily: 'Inter',
                                    fontWeight: '400',
                                    lineHeight: '24px',
                                    paddingLeft: 48,
                                }}>
                                    {item.desc}
                                </div>
                            </div>
                        ))}
                        <div style={{ borderTop: '1px solid #DDDEE0' }} />
                    </div>
                </div>
            </div>

            {/* Section 4: Closing the Infrastructure Gap */}
            <div style={{
                width: '100%',
                paddingLeft: isMobile ? 16 : 32,
                paddingRight: isMobile ? 16 : 32,
                paddingTop: isMobile ? 64 : 96,
                paddingBottom: isMobile ? 64 : 96,
                background: '#F3F4F5',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: 1216,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 64,
                }}>
                    {/* Section header */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                        <div style={{
                            textAlign: 'center',
                            color: '#001736',
                            fontSize: isMobile ? 28 : 36,
                            fontFamily: 'Manrope',
                            fontWeight: '700',
                            lineHeight: '40px',
                        }}>
                            Closing the Infrastructure Gap
                        </div>
                        <div style={{ width: 96, height: 4, background: '#006970' }} />
                    </div>

                    {/* Table */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

                        {/* Header row */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
                            paddingLeft: 32,
                            paddingRight: 32,
                            paddingTop: 16,
                            paddingBottom: 16,
                            background: '#001736',
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4,
                            gap: isMobile ? 4 : 0,
                        }}>
                            {['Operational Domain', 'Legacy State', 'ETOH Integrated State'].map((col) => (
                                <div key={col} style={{
                                    color: 'white',
                                    fontSize: 12,
                                    fontFamily: 'Inter',
                                    fontWeight: '400',
                                    textTransform: 'uppercase',
                                    lineHeight: '16px',
                                    letterSpacing: 1.20,
                                }}>
                                    {col}
                                </div>
                            ))}
                        </div>

                        {/* Data rows */}
                        {[
                            {
                                domain: 'Capacity & Bed Management',
                                icon: <Bedicon />,
                                legacy: 'Manual tally boards and verbal updates; 12-hour data lag for regional coordination centers.',
                                etoh: 'Real-time census automation. Instant triage visibility across districts without manual input.',
                                isLast: false,
                            },
                            {
                                domain: 'Clinical Registers',
                                icon: <ClinicalRegisterIcon />,
                                legacy: 'Physical logbooks susceptible to loss, damage, and fragmented longitudinal history.',
                                etoh: 'Secured digital registries with offline-sync capability. Immutable audit trails for data integrity.',
                                isLast: false,
                            },
                            {
                                domain: 'Resource Orchestration',
                                icon: <Resourceicon />,
                                legacy: 'Reactive procurement based on anecdotal shortages; high medical stock-out rates.',
                                etoh: 'Predictive logistics tied to clinical demand. Automated supply chain triggers.',
                                isLast: true,
                            },
                        ].map((row, i) => (
                            <div key={i} style={{
                                display: 'grid',
                                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
                                paddingLeft: 32,
                                paddingRight: 32,
                                paddingTop: 40,
                                paddingBottom: 40,
                                background: 'white',
                                borderBottomLeftRadius: row.isLast ? 4 : 0,
                                borderBottomRightRadius: row.isLast ? 4 : 0,
                                gap: isMobile ? 24 : 0,
                            }}>
                                {/* Domain */}
                                <div style={{ paddingRight: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    {row.icon}
                                    <div style={{
                                        color: '#001736',
                                        fontSize: 20,
                                        fontFamily: 'Manrope',
                                        fontWeight: '700',
                                        lineHeight: '28px',
                                    }}>
                                        {row.domain}
                                    </div>
                                </div>

                                {/* Legacy */}
                                <div style={{
                                    paddingLeft: 24,
                                    paddingRight: isMobile ? 0 : 24,
                                    borderLeft: isMobile ? 'none' : '1px solid rgba(196,198,208,0.20)',
                                }}>
                                    <div style={{
                                        color: '#43474F',
                                        fontSize: 14,
                                        fontFamily: 'Inter',
                                        fontWeight: '400',
                                        lineHeight: '20px',
                                    }}>
                                        {row.legacy}
                                    </div>
                                </div>

                                {/* ETOH */}
                                <div style={{
                                    paddingLeft: 24,
                                    borderLeft: isMobile ? 'none' : '2px solid #006970',
                                }}>
                                    <div style={{
                                        color: '#001736',
                                        fontSize: 14,
                                        fontFamily: 'Inter',
                                        fontWeight: '600',
                                        lineHeight: '20px',
                                    }}>
                                        {row.etoh}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 5: CTA */}
            <div style={{
                width: '100%',
                paddingLeft: isMobile ? 24 : 32,
                paddingRight: isMobile ? 24 : 32,
                paddingTop: isMobile ? 80 : 128,
                paddingBottom: isMobile ? 80 : 128,
                position: 'relative',
                background: '#002B5B',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.06,
                    mixBlendMode: 'overlay',
                    backgroundImage: 'radial-gradient(circle at 30% 50%, #7594CA 0%, transparent 60%), radial-gradient(circle at 70% 50%, #006970 0%, transparent 60%)',
                    pointerEvents: 'none',
                }} />

                <div style={{
                    width: '100%',
                    maxWidth: 896,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 32,
                    position: 'relative',
                    zIndex: 1,
                }}>
                    <div style={{
                        color: '#006970',
                        fontSize: 12,
                        fontFamily: 'Inter',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: 2.40,
                        lineHeight: '16px',
                        textAlign: 'center',
                    }}>
                        Partner with ETOH
                    </div>
                    <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: isMobile ? 36 : isTablet ? 48 : 60,
                        fontFamily: 'Manrope',
                        fontWeight: '900',
                        lineHeight: isMobile ? '44px' : isTablet ? '56px' : '68px',
                        wordWrap: 'break-word',
                        letterSpacing: '-0.02em',
                    }}>
                        Ready to modernise your government health network?
                    </div>
                    <div style={{
                        maxWidth: 640,
                        textAlign: 'center',
                        color: '#7594CA',
                        fontSize: isMobile ? 16 : 20,
                        fontFamily: 'Inter',
                        fontWeight: '300',
                        lineHeight: '32px',
                        wordWrap: 'break-word',
                    }}>
                        We work directly with state health departments, district health societies, and ministry teams to deploy infrastructure that serves the public mandate — without compromise.
                    </div>
                    <div style={{
                        paddingTop: 16,
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 16,
                        width: isMobile ? '100%' : 'auto',
                    }}>
                        <button style={{
                            paddingTop: 20,
                            paddingBottom: 20,
                            paddingLeft: isMobile ? 32 : 48,
                            paddingRight: isMobile ? 32 : 48,
                            background: '#006970',
                            borderRadius: 6,
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.40)',
                            color: 'white',
                            fontSize: 18,
                            fontFamily: 'Inter',
                            fontWeight: '700',
                            lineHeight: '28px',
                            width: isMobile ? '100%' : 'auto',
                        }}>
                            Request a Deployment Brief
                        </button>
                        <button style={{
                            paddingTop: 20,
                            paddingBottom: 20,
                            paddingLeft: isMobile ? 32 : 48,
                            paddingRight: isMobile ? 32 : 48,
                            borderRadius: 6,
                            border: '1px solid rgba(255,255,255,0.20)',
                            background: 'transparent',
                            cursor: 'pointer',
                            color: 'white',
                            fontSize: 18,
                            fontFamily: 'Inter',
                            fontWeight: '700',
                            lineHeight: '28px',
                            width: isMobile ? '100%' : 'auto',
                        }}>
                            View District Hospital Deployments
                        </button>
                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
