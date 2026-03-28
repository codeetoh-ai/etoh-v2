import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../../../components/PageLayout'
import { useResponsive } from '../../../hooks/useResponsive'
import { useInView } from '../../../hooks/useInView'
import careerImg from '../../../assets/Career.png'

/* ── animation helpers ─────────────────────────────────────────────────── */

const ease = 'cubic-bezier(0.22, 1, 0.36, 1)'

function fadeUp(visible, delay = 0) {
    return {
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ${delay}s ${ease}, transform 0.7s ${delay}s ${ease}`,
    }
}

function fadeFromLeft(visible, delay = 0) {
    return {
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-48px)',
        transition: `opacity 0.7s ${delay}s ${ease}, transform 0.7s ${delay}s ${ease}`,
    }
}

function fadeFromRight(visible, delay = 0) {
    return {
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(48px)',
        transition: `opacity 0.7s ${delay}s ${ease}, transform 0.7s ${delay}s ${ease}`,
    }
}

function maskReveal(visible, delay = 0) {
    return {
        clipPath: visible ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
        transition: `clip-path 1s ${delay}s cubic-bezier(0.77, 0, 0.175, 1)`,
    }
}

function accentGlow(visible, delay = 0) {
    return {
        opacity: visible ? 1 : 0,
        transition: `opacity 0.8s ${delay}s ease`,
        ...(visible && { textShadow: '0 0 32px rgba(0,105,112,0.35)' }),
    }
}

// Word stagger — returns array of inline-block spans
function WordStagger({ text, visible, color, startDelay = 0, wordOffset = 0 }) {
    return text.split(' ').map((word, i) => (
        <span
            key={i}
            style={{
                display: 'inline-block',
                color,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(22px)',
                filter: visible ? 'blur(0px)' : 'blur(3px)',
                transition: `opacity 0.5s ${startDelay + (wordOffset + i) * 0.07}s ease,
                             transform 0.5s ${startDelay + (wordOffset + i) * 0.07}s ${ease},
                             filter 0.5s ${startDelay + (wordOffset + i) * 0.07}s ease`,
                marginRight: '0.28em',
            }}
        >
            {word}
        </span>
    ))
}

/* ── component ─────────────────────────────────────────────────────────── */

export default function CareersPage() {
    const navigate = useNavigate()
    const { isMobile, isTablet } = useResponsive()
    const [form, setForm] = useState({ name: '', email: '', area: 'Engineering', message: '' })

    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

    // Intersection refs
    const [heroRef, heroVisible]       = useInView()
    const [missionRef, missionVisible] = useInView()
    const [cultureRef, cultureVisible] = useInView()
    const [imageRef, imageVisible]     = useInView()
    const [valuesRef, valuesVisible]   = useInView()
    const [futureRef, futureVisible]   = useInView()
    const [formRef, formVisible]       = useInView()
    const [ctaRef, ctaVisible]         = useInView()

    return (
        <PageLayout title="Careers" fullWidth={true}>

            {/* ── Section 1: Hero ─────────────────────────────────────── */}
            <div style={{
                alignSelf: 'stretch',
                width: '100%',
                paddingLeft: isMobile ? 16 : 32,
                paddingRight: isMobile ? 16 : 32,
                paddingTop: isMobile ? 80 : 160,
                paddingBottom: isMobile ? 80 : 160,
                position: 'relative',
                overflow: 'hidden',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                background: 'white',
            }}>
                {/* Decorative grid lines — line-draw */}
                {!isMobile && (
                    <div style={{
                        width: 640, height: 738,
                        left: 640, top: 0,
                        position: 'absolute',
                        opacity: 0.10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        display: 'flex',
                        pointerEvents: 'none',
                    }}>
                        <div style={{ alignSelf: 'stretch', height: 738, position: 'relative', overflow: 'hidden' }}>
                            <div className="accent-line-grow" style={{
                                width: 640, height: 320, left: 0, top: 209, position: 'absolute',
                                outline: '0.64px #001736 solid', outlineOffset: '-0.32px',
                                transformOrigin: 'left center',
                                animationDelay: '0.4s',
                            }} />
                            <div className="accent-line-grow" style={{
                                width: 640, height: 320, left: 0, top: 273, position: 'absolute',
                                outline: '0.64px #001736 solid', outlineOffset: '-0.32px',
                                transformOrigin: 'left center',
                                animationDelay: '0.6s',
                            }} />
                        </div>
                    </div>
                )}

                {/* Content */}
                <div ref={heroRef} style={{
                    width: '100%',
                    marginLeft: isMobile ? 0 : 120,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 24,
                    display: 'flex',
                }}>
                    {/* Label — accent-glow-reveal */}
                    <div style={{
                        ...accentGlow(heroVisible, 0.1),
                        color: '#006970',
                        fontSize: 12,
                        fontFamily: 'Inter',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        lineHeight: '16px',
                        letterSpacing: 2.40,
                    }}>
                        Join the movement
                    </div>

                    {/* Heading — word-stagger */}
                    <div style={{
                        fontSize: isMobile ? 40 : isTablet ? 56 : 72,
                        fontFamily: 'Manrope',
                        fontWeight: '800',
                        lineHeight: isMobile ? '46px' : isTablet ? '62px' : '78px',
                        letterSpacing: '-0.02em',
                        wordWrap: 'break-word',
                    }}>
                        <WordStagger text="Building the Infrastructure of" visible={heroVisible} color="#001736" startDelay={0.2} wordOffset={0} />
                        {' '}
                        <WordStagger text="Modern Healthcare" visible={heroVisible} color="#006970" startDelay={0.2} wordOffset={4} />
                        <span style={{
                            display: 'inline-block',
                            color: '#001736',
                            opacity: heroVisible ? 1 : 0,
                            transition: `opacity 0.5s ${0.2 + 6 * 0.07}s ease`,
                        }}>.</span>
                    </div>

                    {/* Description — fade-slide-up */}
                    <div style={{ maxWidth: 672, paddingTop: 8, ...fadeUp(heroVisible, 0.55) }}>
                        <div style={{
                            color: '#43474F',
                            fontSize: isMobile ? 18 : 24,
                            fontFamily: 'Inter',
                            fontWeight: '300',
                            lineHeight: isMobile ? '28px' : '32px',
                            wordWrap: 'break-word',
                        }}>
                            We are building the infrastructure layer of modern healthcare. If that is the kind of problem that gets you out of bed in the morning, reach out.
                        </div>
                    </div>

                    {/* Buttons — fade-slide-up + hover-lift + glass-shimmer */}
                    <div style={{
                        paddingTop: 24,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: 16,
                        display: 'inline-flex',
                        flexWrap: 'wrap',
                        ...fadeUp(heroVisible, 0.72),
                    }}>
                        <button
                            className="hover-lift glass-shimmer"
                            onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                            style={{
                                paddingLeft: 32, paddingRight: 32,
                                paddingTop: 17, paddingBottom: 17,
                                background: 'linear-gradient(90deg, #001736 0%, #002B5B 100%)',
                                borderRadius: 6,
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0px 4px 6px -4px rgba(0,0,0,0.10), 0px 10px 15px -3px rgba(0,0,0,0.10)',
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Inter',
                                fontWeight: '700',
                                lineHeight: '24px',
                                whiteSpace: 'nowrap',
                            }}>
                            Contact Us
                        </button>
                        <button
                            className="hover-lift glass-shimmer"
                            onClick={() => navigate('/about/our-mission')}
                            style={{
                                paddingLeft: 32, paddingRight: 32,
                                paddingTop: 16, paddingBottom: 16,
                                borderRadius: 6,
                                border: '1px solid rgba(196, 198, 208, 0.30)',
                                background: 'transparent',
                                cursor: 'pointer',
                                color: '#006970',
                                fontSize: 16,
                                fontFamily: 'Inter',
                                fontWeight: '700',
                                lineHeight: '24px',
                                whiteSpace: 'nowrap',
                            }}>
                            Our Mission
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Section 2: Cards ────────────────────────────────────── */}
            <div style={{
                alignSelf: 'stretch',
                width: '100%',
                paddingLeft: isMobile ? 16 : 152,
                paddingRight: isMobile ? 16 : 32,
                paddingTop: isMobile ? 48 : 96,
                paddingBottom: isMobile ? 48 : 96,
                background: '#F3F4F5',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 40 }}>

                    {/* Top row: Mission + Culture */}
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'stretch', gap: 40 }}>

                        {/* Mission card — fade-slide-right + hover-lift */}
                        <div ref={missionRef} className="hover-lift" style={{
                            flex: isMobile ? 'none' : '1.4',
                            minHeight: isMobile ? 'auto' : 400,
                            padding: isMobile ? 24 : 48,
                            background: 'white',
                            border: '1px solid #E4E5E8',
                            borderRadius: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            gap: 24,
                            ...fadeFromRight(missionVisible, 0),
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                <div style={{
                                    color: '#747780', fontSize: 12, fontFamily: 'Inter',
                                    fontWeight: '400', textTransform: 'uppercase',
                                    lineHeight: '16px', letterSpacing: 1.20,
                                }}>
                                    The Mission
                                </div>
                                <div style={{
                                    color: '#001736',
                                    fontSize: isMobile ? 28 : 36,
                                    fontFamily: 'Manrope', fontWeight: '700',
                                    lineHeight: isMobile ? '36px' : '45px',
                                    wordWrap: 'break-word',
                                }}>
                                    Solving the invisible failures that haunt patient care.
                                </div>
                                <div style={{ maxWidth: 576, paddingTop: 8 }}>
                                    <div style={{
                                        color: '#43474F', fontSize: isMobile ? 15 : 18,
                                        fontFamily: 'Inter', fontWeight: '400',
                                        lineHeight: '29px', wordWrap: 'break-word',
                                    }}>
                                        Healthcare today runs on fractured pipes. Data siloes, manual reconciliation, and archaic legacy systems aren't just technical debts—they are obstacles to clinical excellence. We are architecting the unified foundation.
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingTop: 16 }}>
                                <div style={{
                                    width: 48, height: 48, background: '#96F1FA', borderRadius: 12,
                                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0,
                                }}>
                                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 8C16.66 8 17.99 6.66 17.99 5C17.99 3.34 16.66 2 15 2C13.34 2 12 3.34 12 5C12 6.66 13.34 8 15 8ZM7 8C8.66 8 9.99 6.66 9.99 5C9.99 3.34 8.66 2 7 2C5.34 2 4 3.34 4 5C4 6.66 5.34 8 7 8ZM7 10C4.67 10 0 11.17 0 13.5V16H14V13.5C14 11.17 9.33 10 7 10ZM15 10C14.71 10 14.38 10.02 14.03 10.05C15.19 10.89 16 12.02 16 13.5V16H22V13.5C22 11.17 17.33 10 15 10Z" fill="#006F77" />
                                    </svg>
                                </div>
                                <div style={{
                                    color: '#001736', fontSize: 14, fontFamily: 'Inter',
                                    fontWeight: '500', lineHeight: '20px',
                                }}>
                                    Systemic reliability is our primary metric.
                                </div>
                            </div>
                        </div>

                        {/* Culture card — fade-slide-left + hover-lift */}
                        <div ref={cultureRef} className="hover-lift" style={{
                            flex: 1,
                            minHeight: isMobile ? 260 : 400,
                            padding: isMobile ? 24 : 32,
                            background: '#001736',
                            border: '1px solid #001736',
                            borderRadius: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            gap: 16,
                            ...fadeFromLeft(cultureVisible, 0.15),
                        }}>
                            <div style={{
                                color: '#7594CA', fontSize: 12, fontFamily: 'Inter',
                                fontWeight: '400', textTransform: 'uppercase',
                                lineHeight: '16px', letterSpacing: 1.20,
                            }}>
                                Culture
                            </div>
                            <div style={{
                                color: 'white', fontSize: isMobile ? 20 : 24,
                                fontFamily: 'Manrope', fontWeight: '700', lineHeight: '32px',
                            }}>
                                Radical Transparency
                            </div>
                            <div style={{
                                color: 'rgba(255,255,255,0.80)', fontSize: 14,
                                fontFamily: 'Inter', fontWeight: '400',
                                lineHeight: '22px', wordWrap: 'break-word',
                            }}>
                                We don't hide behind jargon. We document every decision, confront every bug, and celebrate the brutal honesty required to fix a broken industry.
                            </div>
                        </div>
                    </div>

                    {/* Bottom row: Image + value cards */}
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'stretch', gap: 40 }}>

                        {/* Image — mask-reveal-left */}
                        <div ref={imageRef} className="accent-line-grow" style={{
                            flex: isMobile ? 'none' : '1',
                            border: '1px solid #E4E5E8',
                            borderLeft: '4px solid #006970',
                            borderRadius: 8,
                            overflow: 'hidden',
                            minHeight: isMobile ? 240 : 380,
                        }}>
                            <img
                                src={careerImg}
                                alt="ETOH office"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    filter: 'grayscale(100%)',
                                    ...maskReveal(imageVisible, 0.1),
                                }}
                            />
                        </div>

                        {/* Value cards — fade-slide-up */}
                        <div ref={valuesRef} style={{
                            flex: isMobile ? 'none' : '1.6',
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            background: 'white',
                            border: '1px solid #E4E5E8',
                            borderRadius: 8,
                            overflow: 'hidden',
                        }}>
                            {/* Clinical Precision */}
                            <div className="hover-lift" style={{
                                flex: 1,
                                padding: isMobile ? 24 : 48,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 16,
                                borderRight: isMobile ? 'none' : '1px solid #F3F4F5',
                                borderBottom: isMobile ? '1px solid #F3F4F5' : 'none',
                                ...fadeUp(valuesVisible, 0),
                            }}>
                                <div style={{
                                    color: '#001736', fontSize: isMobile ? 20 : 24,
                                    fontFamily: 'Manrope', fontWeight: '700', lineHeight: '32px',
                                }}>
                                    Clinical Precision
                                </div>
                                <div style={{
                                    color: '#43474F', fontSize: 14, fontFamily: 'Inter',
                                    fontWeight: '400', lineHeight: '20px', wordWrap: 'break-word',
                                }}>
                                    Our code impacts lives. We maintain a bar for quality that rivals the surgical suites our software supports. No shortcuts, only sustainable excellence.
                                </div>
                            </div>

                            {/* Operational Autonomy */}
                            <div className="hover-lift" style={{
                                flex: 1,
                                padding: isMobile ? 24 : 48,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 16,
                                ...fadeUp(valuesVisible, 0.18),
                            }}>
                                <div style={{
                                    color: '#001736', fontSize: isMobile ? 20 : 24,
                                    fontFamily: 'Manrope', fontWeight: '700', lineHeight: '32px',
                                }}>
                                    Operational Autonomy
                                </div>
                                <div style={{
                                    color: '#43474F', fontSize: 14, fontFamily: 'Inter',
                                    fontWeight: '400', lineHeight: '20px', wordWrap: 'break-word',
                                }}>
                                    We hire architects, not order-takers. You own your domain, your roadmap, and your results. We provide the tools; you provide the vision.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── Section 3: Future Opportunities ─────────────────────── */}
            <div id="contact-form" style={{
                alignSelf: 'stretch',
                width: '100%',
                paddingLeft: isMobile ? 16 : 32,
                paddingRight: isMobile ? 16 : 32,
                paddingTop: isMobile ? 64 : 128,
                paddingBottom: isMobile ? 64 : 128,
                background: '#F8F9FA',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: 1280,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? 48 : 80,
                    alignItems: 'flex-start',
                }}>

                    {/* Left: Text — fade-slide-right */}
                    <div ref={futureRef} style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24,
                        ...fadeFromRight(futureVisible, 0),
                    }}>
                        <div style={{
                            color: '#006970', fontSize: 12, fontFamily: 'Inter',
                            fontWeight: '700', textTransform: 'uppercase',
                            lineHeight: '16px', letterSpacing: 2.40,
                        }}>
                            Future Opportunities
                        </div>
                        <div style={{
                            color: '#001736',
                            fontSize: isMobile ? 36 : 48,
                            fontFamily: 'Manrope', fontWeight: '800',
                            lineHeight: isMobile ? '42px' : '52px',
                            wordWrap: 'break-word', letterSpacing: '-0.02em',
                        }}>
                            Always building, always looking.
                        </div>
                        <div style={{ paddingTop: 8 }}>
                            <div style={{
                                color: '#43474F', fontSize: isMobile ? 16 : 20,
                                fontFamily: 'Inter', fontWeight: '400',
                                lineHeight: '32px', wordWrap: 'break-word',
                            }}>
                                While we don't have specific roles listed at this moment, we are always looking for exceptional talent to join our mission. If you are passionate about building the infrastructure of modern healthcare, we want to hear from you.
                            </div>
                        </div>

                        {/* Email contact — fade-slide-up */}
                        <div style={{
                            paddingTop: 8, display: 'flex', alignItems: 'center', gap: 16,
                            ...fadeUp(futureVisible, 0.3),
                        }}>
                            <div style={{
                                width: 48, height: 48, background: '#EDEEEF', borderRadius: 12,
                                display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0,
                            }}>
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#006970" />
                                </svg>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <div style={{
                                    color: '#747780', fontSize: 12, fontFamily: 'Inter',
                                    fontWeight: '700', textTransform: 'uppercase',
                                    lineHeight: '16px', letterSpacing: 1.20,
                                }}>
                                    Email us directly
                                </div>
                                <div style={{
                                    color: '#001736', fontSize: 20,
                                    fontFamily: 'Inter', fontWeight: '700', lineHeight: '28px',
                                }}>
                                    careers@etoh.com
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form — fade-slide-left + field-stagger */}
                    <div ref={formRef} style={{
                        flex: isMobile ? 'none' : '1.2',
                        width: isMobile ? '100%' : 'auto',
                        padding: isMobile ? 24 : 40,
                        paddingBottom: isMobile ? 32 : 56,
                        background: 'white',
                        boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
                        borderRadius: 4,
                        outline: '1px rgba(196, 198, 208, 0.30) solid',
                        outlineOffset: '-1px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24,
                        ...fadeFromLeft(formVisible, 0.1),
                    }}>
                        {/* Name + Email row — field-stagger */}
                        <div style={{ ...fadeUp(formVisible, 0.2), display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 16 }}>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <label style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1.20 }}>Name</label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    style={{
                                        width: '100%', padding: '18px 16px',
                                        background: '#F3F4F5', border: 'none', borderRadius: 6,
                                        color: '#001736', fontSize: 16, fontFamily: 'Inter',
                                        fontWeight: '500', outline: 'none', boxSizing: 'border-box',
                                    }}
                                />
                            </div>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <label style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1.20 }}>Email</label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="john@company.com"
                                    style={{
                                        width: '100%', padding: '18px 16px',
                                        background: '#F3F4F5', border: 'none', borderRadius: 6,
                                        color: '#001736', fontSize: 16, fontFamily: 'Inter',
                                        fontWeight: '500', outline: 'none', boxSizing: 'border-box',
                                    }}
                                />
                            </div>
                        </div>

                        {/* Area of Interest — field-stagger */}
                        <div style={{ ...fadeUp(formVisible, 0.32), display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <label style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1.20 }}>Area of Interest</label>
                            <select
                                name="area"
                                value={form.area}
                                onChange={handleChange}
                                style={{
                                    width: '100%', padding: '16px',
                                    background: '#F3F4F5', border: 'none', borderRadius: 6,
                                    color: '#001736', fontSize: 16, fontFamily: 'Inter',
                                    fontWeight: '500', outline: 'none',
                                    appearance: 'none', cursor: 'pointer', boxSizing: 'border-box',
                                }}
                            >
                                <option>Engineering</option>
                                <option>Product</option>
                                <option>Design</option>
                                <option>Operations</option>
                                <option>Clinical</option>
                                <option>Other</option>
                            </select>
                        </div>

                        {/* Message — field-stagger */}
                        <div style={{ ...fadeUp(formVisible, 0.44), display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <label style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1.20 }}>Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell us about what you're building..."
                                rows={6}
                                style={{
                                    width: '100%', padding: '16px',
                                    background: '#F3F4F5', border: 'none', borderRadius: 6,
                                    color: '#001736', fontSize: 16, fontFamily: 'Inter',
                                    fontWeight: '500', outline: 'none',
                                    resize: 'vertical', boxSizing: 'border-box', lineHeight: '24px',
                                }}
                            />
                        </div>

                        {/* Submit — field-stagger + hover-lift + glass-shimmer */}
                        <div style={fadeUp(formVisible, 0.56)}>
                            <button className="hover-lift glass-shimmer" style={{
                                width: '100%', paddingTop: 16, paddingBottom: 16,
                                background: '#001736', borderRadius: 6, border: 'none',
                                cursor: 'pointer', display: 'flex',
                                justifyContent: 'center', alignItems: 'center', gap: 8,
                                color: 'white', fontSize: 16, fontFamily: 'Inter',
                                fontWeight: '700', lineHeight: '24px',
                            }}>
                                Send Message
                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 6H13M13 6L8 1M13 6L8 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 4: CTA ──────────────────────────────────────── */}
            <div ref={ctaRef} style={{
                alignSelf: 'stretch',
                width: '100%',
                paddingLeft: isMobile ? 24 : 192,
                paddingRight: isMobile ? 24 : 192,
                paddingTop: isMobile ? 80 : 128,
                paddingBottom: isMobile ? 80 : 128,
                position: 'relative',
                background: '#001736',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                {/* Background gradient */}
                <div style={{
                    position: 'absolute', left: 0, top: 0,
                    width: '100%', height: '100%',
                    opacity: 0.50,
                    background: 'linear-gradient(168deg, #002B5B 0%, #001736 100%)',
                    pointerEvents: 'none',
                }} />

                {/* Content */}
                <div style={{
                    width: '100%', maxWidth: 896,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: 32,
                    position: 'relative', zIndex: 1,
                }}>
                    <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: isMobile ? 40 : 60,
                        fontFamily: 'Manrope', fontWeight: '900',
                        lineHeight: isMobile ? '48px' : '64px',
                        wordWrap: 'break-word', letterSpacing: '-0.02em',
                        ...fadeUp(ctaVisible, 0),
                    }}>
                        Ready to redesign the foundation?
                    </div>
                    <div style={{
                        maxWidth: 672, textAlign: 'center',
                        color: '#7594CA',
                        fontSize: isMobile ? 16 : 20,
                        fontFamily: 'Inter', fontWeight: '300',
                        lineHeight: '28px', wordWrap: 'break-word',
                        ...fadeUp(ctaVisible, 0.2),
                    }}>
                        We don't just offer jobs; we offer the chance to solve the most critical technical challenges in healthcare today.
                    </div>
                    <div style={{
                        paddingTop: 16,
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 16,
                        width: isMobile ? '100%' : 'auto',
                        ...fadeUp(ctaVisible, 0.38),
                    }}>
                        <button className="hover-lift glass-shimmer" style={{
                            paddingTop: 20, paddingBottom: 20,
                            paddingLeft: isMobile ? 32 : 48,
                            paddingRight: isMobile ? 32 : 48,
                            background: '#006970', borderRadius: 6, border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
                            color: 'white', fontSize: 18, fontFamily: 'Inter',
                            fontWeight: '700', lineHeight: '28px',
                            width: isMobile ? '100%' : 'auto',
                        }}>
                            Join the Mission
                        </button>
                        <button className="hover-lift glass-shimmer" style={{
                            paddingTop: 20, paddingBottom: 20,
                            paddingLeft: isMobile ? 32 : 48,
                            paddingRight: isMobile ? 32 : 48,
                            borderRadius: 6,
                            border: '1px solid rgba(255,255,255,0.20)',
                            background: 'transparent', cursor: 'pointer',
                            color: 'white', fontSize: 18, fontFamily: 'Inter',
                            fontWeight: '700', lineHeight: '28px',
                            width: isMobile ? '100%' : 'auto',
                        }}>
                            Talk to a Founder
                        </button>
                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
