import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../../../../components/PageLayout'
import hero from './assets/hero.png'
import section3 from './assets/section3.png'
import gradientBg from './assets/gradient-below hero backgeround.png'
import { CheckCircle2, FileText, ClipboardList, History, BarChart2, RefreshCw, ArrowRight } from 'lucide-react'

const PA_KEYFRAMES = `
  @keyframes pa-eyebrow-fade {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pa-anticipation-reveal {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pa-soft-accent-pulse {
    0%   { text-shadow: none; }
    40%  { text-shadow: 0 0 18px rgba(0,105,112,0.5); }
    100% { text-shadow: none; }
  }
  @keyframes pa-soft-fade-up {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pa-button-rise {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pa-forward-drift {
    from { opacity: 0; transform: scale(1.08); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes pa-verification-dock {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pa-check-confirm {
    from { opacity: 0; transform: scale(0.3); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes pa-progress-fill {
    from { width: 0%; }
    to   { width: 75%; }
  }
  @keyframes pa-workflow-card {
    from { opacity: 0; transform: translateY(24px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes pa-divider-grow {
    from { transform: scaleY(0); }
    to   { transform: scaleY(1); }
  }
  @keyframes pa-bullet-appear {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pa-dual-reveal-left {
    from { opacity: 0; transform: translateX(-20px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes pa-text-swipe-right {
    from { opacity: 0; transform: translateX(20px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes pa-mini-card-in {
    from { opacity: 0; transform: translateX(20px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  /* ── Hover states ── */
  .pa-intake-card {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .pa-intake-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 12px 32px rgba(0,0,0,0.10) !important;
  }
  .pa-verify-card {
    transition: box-shadow 0.25s ease, outline 0.25s ease;
  }
  .pa-verify-card:hover {
    outline: 1px solid rgba(0,105,112,0.4) !important;
    box-shadow: 0 0 0 4px rgba(0,105,112,0.10) !important;
  }

  /* ── Layout ── */
  .pa-hero-section {
    padding-top: 80px;
    padding-bottom: 128px;
    padding-left: 32px;
    padding-right: 32px;
  }
  .pa-hero-inner {
    display: flex;
    flex-direction: row;
    gap: 80px;
    align-items: flex-start;
    max-width: 1216px;
    margin: 0 auto;
  }
  .pa-hero-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 32px;
  }
  .pa-hero-right {
    flex: 0 0 479px;
    position: relative;
    background: rgba(255,255,255,0);
    box-shadow: 0px 25px 50px -12px rgba(0,0,0,0.25);
    overflow: hidden;
    border-radius: 8px;
  }
  .pa-hero-heading {
    color: #001736;
    font-size: 72px;
    font-family: Manrope, sans-serif;
    font-weight: 800;
    line-height: 72px;
  }
  .pa-hero-image {
    width: 100%;
    height: 598px;
    object-fit: cover;
    display: block;
  }
  .pa-section-pad {
    padding-top: 96px;
    padding-bottom: 96px;
    padding-left: 32px;
    padding-right: 32px;
  }
  .pa-section-inner {
    max-width: 1216px;
    margin: 0 auto;
  }
  .pa-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .pa-digital-inner {
    max-width: 1216px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 64px;
    align-items: center;
  }
  .pa-cta-inner {
    width: 100%;
    max-width: 1216px;
    padding: 80px 272px;
    position: relative;
    background: #001736;
    overflow: hidden;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    box-sizing: border-box;
  }
  .pa-cta-heading {
    color: white;
    font-size: 48px;
    font-family: Manrope, sans-serif;
    font-weight: 700;
    line-height: 48px;
    text-align: center;
    position: relative;
  }
  .pa-hero-para {
    max-width: 672px;
    padding-top: 8px;
    color: #43474F;
    font-size: 20px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    line-height: 32.5px;
  }
  .pa-buttons-row {
    padding-top: 24px;
    display: flex;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap;
  }

  /* ── Tablet ── */
  @media (max-width: 1024px) {
    .pa-hero-inner {
      gap: 40px;
    }
    .pa-hero-right {
      flex: 0 0 380px;
    }
    .pa-hero-heading {
      font-size: 56px;
      line-height: 60px;
    }
    .pa-cta-inner {
      padding: 64px 80px;
    }
    .pa-cta-heading {
      font-size: 40px;
      line-height: 44px;
    }
  }

  /* ── Mobile ── */
  @media (max-width: 768px) {
    .pa-hero-section {
      padding-top: 56px;
      padding-bottom: 64px;
      padding-left: 20px;
      padding-right: 20px;
    }
    .pa-hero-inner {
      flex-direction: column;
      gap: 40px;
    }
    .pa-hero-left {
      padding-top: 0;
      gap: 20px;
    }
    .pa-hero-right {
      flex: none;
      width: 100%;
    }
    .pa-hero-heading {
      font-size: 38px;
      line-height: 44px;
    }
    .pa-hero-image {
      height: 340px;
    }
    .pa-hero-para {
      font-size: 16px;
      line-height: 26px;
    }
    .pa-buttons-row {
      padding-top: 16px;
      gap: 12px;
    }
    .pa-section-pad {
      padding-top: 64px;
      padding-bottom: 64px;
      padding-left: 20px;
      padding-right: 20px;
    }
    .pa-cards-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .pa-digital-inner {
      flex-direction: column;
      gap: 40px;
    }
    .pa-cta-inner {
      padding: 56px 24px;
      border-radius: 12px;
    }
    .pa-cta-heading {
      font-size: 32px;
      line-height: 38px;
    }
  }
`

const anim = (name, duration, delayMs, easing = 'cubic-bezier(0.4,0,0.2,1)') =>
    `${name} ${duration} ${easing} ${delayMs}ms both`

export default function PreAdmissionPage() {
    const navigate = useNavigate()
    const intakeSectionRef = useRef(null)
    const digitalSectionRef = useRef(null)
    const [intakeVisible, setIntakeVisible] = useState(false)
    const [digitalVisible, setDigitalVisible] = useState(false)

    useEffect(() => {
        const observers = []
        const observe = (ref, setter) => {
            if (!ref.current) return
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) { setter(true); obs.disconnect() } },
                { threshold: 0.12 }
            )
            obs.observe(ref.current)
            observers.push(obs)
        }
        observe(intakeSectionRef, setIntakeVisible)
        observe(digitalSectionRef, setDigitalVisible)
        return () => observers.forEach(o => o.disconnect())
    }, [])

    return (
        <PageLayout fullWidth={true} lightHero>
            <style>{PA_KEYFRAMES}</style>

            {/* ── Section 1: Hero ── */}
            <div
                className="pa-hero-section"
                style={{
                    width: '100%',
                    position: 'relative',
                    background: '#F8F9FA',
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                }}
            >
                {/* Ambient glow */}
                <div style={{
                    width: 600,
                    height: 600,
                    position: 'absolute',
                    right: -100,
                    top: -300,
                    background: 'rgba(0, 105, 112, 0.05)',
                    borderRadius: 12,
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                }} />

                <div className="pa-hero-inner">
                    {/* Left: text content */}
                    <div className="pa-hero-left">
                        {/* Eyebrow */}
                        <span style={{
                            color: '#006970',
                            fontSize: 14,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            lineHeight: '20px',
                            letterSpacing: 2.8,
                            animation: anim('pa-eyebrow-fade', '0.5s', 0),
                        }}>
                            Care Continuity Ecosystem
                        </span>

                        {/* Heading — line-by-line reveal */}
                        <div className="pa-hero-heading">
                            <div style={{ animation: anim('pa-anticipation-reveal', '0.7s', 100) }}>
                                Care begins{' '}
                                <span style={{
                                    color: '#006970',
                                    display: 'inline-block',
                                    animation: anim('pa-soft-accent-pulse', '1.4s', 950, 'ease-in-out'),
                                }}>
                                    before
                                </span>
                            </div>
                            <div style={{ animation: anim('pa-anticipation-reveal', '0.7s', 180) }}>
                                the patient walks
                            </div>
                            <div style={{ animation: anim('pa-anticipation-reveal', '0.7s', 260) }}>
                                through the door.
                            </div>
                        </div>

                        {/* Supporting paragraph */}
                        <p
                            className="pa-hero-para"
                            style={{
                                margin: 0,
                                animation: anim('pa-soft-fade-up', '0.65s', 400),
                            }}
                        >
                            The hospital visit is one moment in a longer health journey. ETOH
                            connects to that journey from the beginning, ensuring every detail is
                            captured before arrival.
                        </p>

                        {/* CTA Buttons */}
                        <div className="pa-buttons-row">
                            <button
                                onClick={() => { window.scrollTo(0, 0); navigate('/the-system/for-patients/health-journey') }}
                                style={{
                                    paddingLeft: 32,
                                    paddingRight: 32,
                                    paddingTop: 17,
                                    paddingBottom: 17,
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
                                    fontWeight: 600,
                                    lineHeight: '24px',
                                    animation: anim('pa-button-rise', '0.55s', 550),
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,23,54,0.25)' }}
                                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
                            >
                                Start Pre-Admission
                                <ArrowRight size={16} color="white" strokeWidth={2} />
                            </button>
                            <button
                                onClick={() => { window.scrollTo(0, 0); navigate('/the-system/for-patients/health-journey') }}
                                style={{
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
                                    color: '#001736',
                                    fontSize: 16,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 600,
                                    lineHeight: '24px',
                                    animation: anim('pa-button-rise', '0.55s', 650),
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)' }}
                                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
                            >
                                View Care Journey
                            </button>
                        </div>
                    </div>

                    {/* Right: Hero image */}
                    <div className="pa-hero-right">
                        <img
                            src={hero}
                            alt="Pre-Admission"
                            className="pa-hero-image"
                            style={{
                                animation: anim('pa-forward-drift', '1.1s', 150, 'cubic-bezier(0.25,0.46,0.45,0.94)'),
                            }}
                        />
                        {/* Gradient overlay */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(0deg, rgba(0, 23, 54, 0.40) 0%, rgba(0, 23, 54, 0) 100%)',
                        }} />
                        {/* Verification card */}
                        <div
                            className="pa-verify-card"
                            style={{
                                position: 'absolute',
                                left: 24,
                                bottom: 24,
                                right: 24,
                                padding: 20,
                                background: 'rgba(255, 255, 255, 0.80)',
                                borderRadius: 8,
                                outline: '1px rgba(255, 255, 255, 0.20) solid',
                                outlineOffset: -1,
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 16,
                                animation: anim('pa-verification-dock', '0.65s', 900),
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div style={{
                                    width: 40,
                                    height: 40,
                                    background: '#006970',
                                    borderRadius: 12,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexShrink: 0,
                                    animation: anim('pa-check-confirm', '0.45s', 1100, 'cubic-bezier(0.34,1.56,0.64,1)'),
                                }}>
                                    <CheckCircle2 size={20} color="white" strokeWidth={2} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{
                                        color: '#001736',
                                        fontSize: 16,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 700,
                                        lineHeight: '24px',
                                    }}>
                                        Verification Complete
                                    </span>
                                    <span style={{
                                        color: '#43474F',
                                        fontSize: 12,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '16px',
                                    }}>
                                        Intake documentation processed
                                    </span>
                                </div>
                            </div>
                            {/* Progress bar */}
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
                                    width: '75%',
                                    height: '100%',
                                    background: '#006970',
                                    animation: anim('pa-progress-fill', '1s', 1200),
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 2: Precision Intake Modules ── */}
            <div
                ref={intakeSectionRef}
                className="pa-section-pad"
                style={{
                    width: '100%',
                    background: '#F3F4F5',
                    boxSizing: 'border-box',
                    position: 'relative',
                }}
            >
                {/* Gradient background image */}
                <img
                    src={gradientBg}
                    alt=""
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.4,
                        pointerEvents: 'none',
                    }}
                />
                <div
                    className="pa-section-inner"
                    style={{ display: 'flex', flexDirection: 'column', gap: 64, position: 'relative' }}
                >
                    {/* Header row */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        flexWrap: 'wrap',
                        gap: 16,
                        opacity: intakeVisible ? undefined : 0,
                        animation: intakeVisible ? anim('pa-soft-fade-up', '0.6s', 0) : 'none',
                    }}>
                        <div style={{ maxWidth: 576, display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div style={{
                                color: '#001736',
                                fontSize: 36,
                                fontFamily: 'Manrope, sans-serif',
                                fontWeight: 700,
                                lineHeight: '40px',
                            }}>
                                Precision Intake Modules
                            </div>
                            <div style={{
                                color: '#43474F',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: '24px',
                            }}>
                                We&apos;ve replaced manual paperwork with architectural data streams. Every
                                module is designed for clinical accuracy and patient ease.
                            </div>
                        </div>
                        {/* Pagination dots */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{ width: 48, height: 2, background: '#006970' }} />
                            <div style={{ width: 16, height: 2, background: '#C4C6D0' }} />
                        </div>
                    </div>

                    {/* Cards grid */}
                    <div className="pa-cards-grid">
                        {[
                            {
                                icon: <FileText size={24} color="#006970" strokeWidth={1.5} />,
                                title: 'Intake Processing',
                                desc: 'Complete all regulatory and administrative documentation digitally. Reduce on-site wait times by up to 85% through pre-arrival processing.',
                                features: ['Zero-Paper Intake', 'Legal e-Signatures'],
                                isFirst: true,
                            },
                            {
                                icon: <ClipboardList size={30} color="#006970" strokeWidth={1.5} />,
                                title: 'Guided Preparation',
                                desc: 'Personalized guidance for your upcoming procedure. Clear instructions on fasting, medication adjustments, and arrival logistics.',
                                features: ['Step-by-step guidance', 'Direct Specialist Chat'],
                                isFirst: false,
                            },
                            {
                                icon: <History size={29} color="#006970" strokeWidth={1.5} />,
                                title: 'Clinical History',
                                desc: 'Securely share your medical timeline and past investigations. Our AI-driven engine maps your data to clinical standards automatically.',
                                features: ['Unified EHR integration', 'Smart History Mapping'],
                                isFirst: false,
                            },
                        ].map(({ icon, title, desc, features, isFirst }, i) => (
                            <div
                                key={title}
                                className="pa-intake-card"
                                style={{
                                    background: 'white',
                                    borderRadius: 8,
                                    borderLeft: isFirst ? 'none' : '2px solid #006970',
                                    padding: '40px 42px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 0,
                                    minHeight: 396,
                                    position: 'relative',
                                    opacity: intakeVisible ? undefined : 0,
                                    animation: intakeVisible ? anim('pa-workflow-card', '0.65s', i * 120) : 'none',
                                }}
                            >
                                {/* Animated left divider on first card */}
                                {isFirst && (
                                    <div style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: 2,
                                        background: '#006970',
                                        transformOrigin: 'top',
                                        transform: intakeVisible ? undefined : 'scaleY(0)',
                                        animation: intakeVisible ? anim('pa-divider-grow', '0.6s', 220) : 'none',
                                    }} />
                                )}

                                <div style={{ marginBottom: 40 }}>{icon}</div>
                                <div style={{
                                    color: '#001736',
                                    fontSize: 24,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '32px',
                                    marginBottom: 16,
                                }}>
                                    {title}
                                </div>
                                <div style={{
                                    color: '#43474F',
                                    fontSize: 16,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '26px',
                                    marginBottom: 32,
                                    flex: 1,
                                }}>
                                    {desc}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    {features.map((f, fi) => (
                                        <div
                                            key={f}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 12,
                                                opacity: intakeVisible ? undefined : 0,
                                                animation: intakeVisible
                                                    ? anim('pa-bullet-appear', '0.45s', i * 120 + 320 + fi * 60)
                                                    : 'none',
                                            }}
                                        >
                                            <CheckCircle2 size={12} color="#006970" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                                            <span style={{
                                                color: '#001736',
                                                fontSize: 14,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 500,
                                                lineHeight: '20px',
                                            }}>
                                                {f}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Section 3: Digital Continuity ── */}
            <div
                ref={digitalSectionRef}
                className="pa-section-pad"
                style={{
                    width: '100%',
                    background: '#F8F9FA',
                    boxSizing: 'border-box',
                }}
            >
                <div className="pa-digital-inner">
                    {/* Left: image — dual-reveal */}
                    <div style={{
                        flex: 1,
                        opacity: digitalVisible ? undefined : 0,
                        animation: digitalVisible ? anim('pa-dual-reveal-left', '0.8s', 0) : 'none',
                        width: '100%',
                    }}>
                        <img
                            src={section3}
                            alt="Digital Continuity"
                            style={{
                                width: '100%',
                                height: 500,
                                objectFit: 'cover',
                                display: 'block',
                                boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
                                borderRadius: 8,
                            }}
                        />
                    </div>

                    {/* Right: content */}
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24,
                        width: '100%',
                    }}>
                        {/* Heading */}
                        <div style={{
                            color: '#001736',
                            fontSize: 36,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            lineHeight: '45px',
                            opacity: digitalVisible ? undefined : 0,
                            animation: digitalVisible ? anim('pa-text-swipe-right', '0.7s', 100) : 'none',
                        }}>
                            Digital Continuity: The Pre-<br />Arrival Advantage
                        </div>

                        {/* Paragraph */}
                        <div style={{
                            color: '#43474F',
                            fontSize: 18,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            lineHeight: '29.25px',
                            opacity: digitalVisible ? undefined : 0,
                            animation: digitalVisible ? anim('pa-soft-fade-up', '0.65s', 220) : 'none',
                        }}>
                            By the time you walk through our doors, your care team is already
                            briefed. Your digital twin—a comprehensive map of your clinical
                            history and current investigations—is ready for review.
                        </div>

                        {/* Mini cards */}
                        <div style={{ paddingTop: 8, display: 'flex', flexDirection: 'column', gap: 32 }}>
                            {[
                                {
                                    icon: <BarChart2 size={18} color="#006970" strokeWidth={2} />,
                                    title: 'Pre-Admission Analytics',
                                    desc: 'Our systems analyze your history to flag potential risks before you even arrive at the facility.',
                                },
                                {
                                    icon: <RefreshCw size={20} color="#006970" strokeWidth={2} />,
                                    title: 'Real-time Coordination',
                                    desc: 'Directly sync investigations from external labs into your admission profile instantly.',
                                },
                            ].map(({ icon, title, desc }, i) => (
                                <div
                                    key={title}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: 24,
                                        opacity: digitalVisible ? undefined : 0,
                                        animation: digitalVisible
                                            ? anim('pa-mini-card-in', '0.6s', 300 + i * 120)
                                            : 'none',
                                    }}
                                >
                                    <div style={{
                                        width: 48,
                                        height: 48,
                                        flexShrink: 0,
                                        background: 'rgba(0, 105, 112, 0.10)',
                                        borderRadius: 4,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        {icon}
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                        <span style={{
                                            color: '#001736',
                                            fontSize: 18,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 700,
                                            lineHeight: '28px',
                                        }}>
                                            {title}
                                        </span>
                                        <span style={{
                                            color: '#43474F',
                                            fontSize: 14,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 400,
                                            lineHeight: '20px',
                                        }}>
                                            {desc}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 4: CTA ── */}
            <div style={{
                width: '100%',
                paddingLeft: 32,
                paddingRight: 32,
                paddingBottom: 80,
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div className="pa-cta-inner">
                    {/* Glows */}
                    <div style={{
                        position: 'absolute',
                        width: 384,
                        height: 384,
                        right: -96,
                        top: 98,
                        background: 'rgba(0, 105, 112, 0.20)',
                        borderRadius: 12,
                        filter: 'blur(50px)',
                        pointerEvents: 'none',
                    }} />
                    <div style={{
                        position: 'absolute',
                        width: 384,
                        height: 384,
                        left: -96,
                        top: -96,
                        background: 'rgba(0, 43, 91, 0.40)',
                        borderRadius: 12,
                        filter: 'blur(50px)',
                        pointerEvents: 'none',
                    }} />

                    <div className="pa-cta-heading">
                        Ready to begin your journey?
                    </div>
                    <div style={{
                        color: '#7594CA',
                        fontSize: 18,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        lineHeight: '28px',
                        textAlign: 'center',
                        position: 'relative',
                        maxWidth: 672,
                    }}>
                        Access your secure portal to start the pre-admission process and connect
                        with your care team.
                    </div>
                    <div style={{
                        paddingTop: 16,
                        display: 'flex',
                        gap: 16,
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        position: 'relative',
                    }}>
                        <button
                            onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=Secure Login Request'}
                            style={{
                                paddingLeft: 40,
                                paddingRight: 40,
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
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,105,112,0.4)' }}
                            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
                        >
                            Secure Login
                        </button>
                        <button
                            onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=Help Center'}
                            style={{
                                paddingLeft: 40,
                                paddingRight: 40,
                                paddingTop: 16,
                                paddingBottom: 16,
                                background: 'transparent',
                                borderRadius: 6,
                                border: 'none',
                                outline: '1px rgba(255, 255, 255, 0.20) solid',
                                outlineOffset: -1,
                                cursor: 'pointer',
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                lineHeight: '24px',
                                transition: 'transform 0.2s ease',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
                            onMouseLeave={e => { e.currentTarget.style.transform = '' }}
                        >
                            Help Center
                        </button>
                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
