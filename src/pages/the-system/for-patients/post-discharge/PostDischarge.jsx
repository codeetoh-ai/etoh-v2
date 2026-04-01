import { useState, useEffect, useRef } from 'react'
import PageLayout from '../../../../components/PageLayout'
import heroImg from './hero.png'
import appImg from './setion 4.png'

/* ─────────────────────────────────────────────
   Keyframes
───────────────────────────────────────────── */
const PD_KEYFRAMES = `
  /* Hero – page-load */
  @keyframes pd-eyebrow-fade {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pd-continuity-reveal {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pd-meaning-emphasis {
    0%   { text-shadow: none; }
    40%  { text-shadow: 0 0 28px rgba(0,105,112,0.50); }
    100% { text-shadow: none; }
  }
  @keyframes pd-soft-fade-up {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pd-forward-drift {
    from { opacity: 0; transform: scale(1.05); }
    to   { opacity: 1; transform: scale(1); }
  }

  /* Section 2 – monitoring system */
  @keyframes pd-monitor-card-rise {
    from { opacity: 0; transform: translateY(32px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes pd-sync-line-draw {
    from { width: 0%; }
    to   { width: 83%; }
  }
  @keyframes pd-phase-card-slide {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes pd-goal-progress {
    from { width: 0%; }
    to   { width: 85%; }
  }
  @keyframes pd-card-wave {
    from { opacity: 0; transform: translateY(24px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes pd-icon-spin-soft {
    from { opacity: 0; transform: rotate(-18deg) scale(0.75); }
    to   { opacity: 1; transform: rotate(0deg) scale(1); }
  }
  @keyframes pd-icon-pop {
    from { opacity: 0; transform: scale(0.55); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes pd-alert-pulse {
    0%   { transform: scale(1);    filter: drop-shadow(0 0 0px  rgba(186,26,26,0)); }
    35%  { transform: scale(1.22); filter: drop-shadow(0 0 10px rgba(186,26,26,0.65)); }
    65%  { transform: scale(0.93); filter: drop-shadow(0 0 5px  rgba(186,26,26,0.25)); }
    100% { transform: scale(1);    filter: drop-shadow(0 0 0px  rgba(186,26,26,0)); }
  }

  /* Section 3 – recovery portal */
  @keyframes pd-device-wake {
    from { opacity: 0; transform: translateY(30px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes pd-assurance-reveal {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pd-portal-rise {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Section 4 – roadmap */
  @keyframes pd-roadmap-title {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pd-step-rise {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Hover utilities */
  .pd-feature-card {
    transition: transform 0.28s cubic-bezier(0.22,1,0.36,1),
                box-shadow 0.28s cubic-bezier(0.22,1,0.36,1);
  }
  .pd-feature-card:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 16px 40px rgba(0,0,0,0.09) !important;
  }
  .pd-monitor-card {
    transition: box-shadow 0.28s ease;
  }
  .pd-monitor-card:hover {
    box-shadow: 0 8px 32px rgba(0,105,112,0.08) !important;
  }
  .pd-portal-btn {
    transition: transform 0.22s cubic-bezier(0.22,1,0.36,1),
                box-shadow 0.22s cubic-bezier(0.22,1,0.36,1);
  }
  .pd-portal-btn:hover {
    transform: translateY(-3px) !important;
    box-shadow: 0 10px 28px rgba(0,105,112,0.35) !important;
  }

  /* ── Layout classes ── */
  .pd-hero-wrap    { padding: 80px 96px; }
  .pd-hero-inner   { display: flex; align-items: flex-start; gap: 64px; }
  .pd-left-col     { flex: 0 0 614px; display: flex; flex-direction: column; gap: 24px; }
  .pd-h1           { font-size: 72px; line-height: 72px; }
  .pd-hero-img     { flex: 1; position: relative; height: 512px; border-radius: 8px; overflow: hidden; background: white; }
  .pd-features-wrap{ padding: 96px; }
  .pd-monitor-grid { display: grid; grid-template-columns: 1fr 340px; gap: 24px; }
  .pd-cards-grid   { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; }
  .pd-app-wrap     { padding: 128px 96px; }
  .pd-app-inner    { display: flex; align-items: center; gap: 96px; }
  .pd-roadmap-wrap { padding-left: 256px; padding-right: 256px; padding-top: 96px; padding-bottom: 96px; }

  /* ── Tablet ── */
  @media (max-width: 1100px) {
    .pd-hero-wrap  { padding: 64px 48px; }
    .pd-left-col   { flex: 0 0 480px; }
    .pd-h1         { font-size: 56px; line-height: 62px; }
    .pd-app-wrap   { padding: 96px 48px; }
    .pd-roadmap-wrap { padding-left: 80px; padding-right: 80px; }
    .pd-monitor-grid { grid-template-columns: 1fr; }
  }

  /* ── Mobile ── */
  @media (max-width: 768px) {
    .pd-hero-wrap  { padding: 48px 20px; }
    .pd-hero-inner { flex-direction: column; gap: 32px; }
    .pd-left-col   { flex: none; width: 100%; }
    .pd-h1         { font-size: 38px; line-height: 44px; }
    .pd-hero-img   { flex: none; width: 100%; height: 280px; }
    .pd-features-wrap { padding: 48px 20px; }
    .pd-monitor-grid  { grid-template-columns: 1fr; }
    .pd-cards-grid    { grid-template-columns: 1fr; }
    .pd-app-wrap      { padding: 64px 20px; }
    .pd-app-inner     { flex-direction: column; gap: 40px; }
    .pd-roadmap-wrap  { padding-left: 20px; padding-right: 20px; padding-top: 64px; padding-bottom: 64px; }
  }
`

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'
const anim = (name, duration, delayMs, easing = EASE) =>
    `${name} ${duration} ${easing} ${delayMs}ms both`

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const featureCards = [
    {
        icon: (
            <svg width="18" height="23" viewBox="0 0 18 23" fill="none">
                <path d="M9 0C4.03 0 0 4.03 0 9C0 15.75 9 23 9 23C9 23 18 15.75 18 9C18 4.03 13.97 0 9 0ZM9 12C7.34 12 6 10.66 6 9C6 7.34 7.34 6 9 6C10.66 6 12 7.34 12 9C12 10.66 10.66 12 9 12Z" fill="#006970" />
            </svg>
        ),
        title: 'Smart Pharmacy Coordination',
        desc: 'Automatic medication synchronization with your local specialist. Dose adjustments are updated instantly in your recovery portal based on Digital Twin telemetry.',
        iconAnim: 'pd-icon-spin-soft',
    },
    {
        icon: (
            <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
                <path d="M27 0H3C1.35 0 0 1.35 0 3V21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM15 6C16.66 6 18 7.34 18 9C18 10.66 16.66 12 15 12C13.34 12 12 10.66 12 9C12 7.34 13.34 6 15 6ZM24 20H6V18.75C6 16.5 10.5 15 15 15C19.5 15 24 16.5 24 18.75V20Z" fill="#006970" />
            </svg>
        ),
        title: 'Specialist On-Call',
        desc: 'Direct encrypted channels to your dedicated recovery coordinator. No call centers, no delays—just immediate access to the clinical experts who know your history.',
        iconAnim: 'pd-icon-pop',
    },
    {
        icon: (
            <svg width="20" height="25" viewBox="0 0 20 25" fill="none">
                <path d="M10 0L0 4.5V11.5C0 17.89 4.27 23.86 10 25C15.73 23.86 20 17.89 20 11.5V4.5L10 0ZM11 17H9V15H11V17ZM11 13H9V7H11V13Z" fill="#BA1A1A" />
            </svg>
        ),
        title: 'Predictive Alerts',
        desc: 'If your recovery deviates from the expected architectural path, the system flags it immediately to our clinical response team.',
        iconAnim: 'pd-alert-pulse',
    },
]

const roadmapSteps = [
    {
        num: '01',
        active: true,
        title: 'Initial Stabilization (Hours 0-24)',
        desc: 'Continuous vitals monitoring via wearable sync. Pharmacy delivery of medication pack to your doorstep.',
    },
    {
        num: '02',
        active: false,
        title: 'Digital Twin Optimization (Days 2-7)',
        desc: 'First specialist check-in via secure video Link. Baseline data comparison to verify trajectory.',
    },
    {
        num: '03',
        active: false,
        title: 'Long-term Surveillance (Day 8+)',
        desc: 'Passive monitoring protocol activates. Health insights and preventative lifestyle adjustments.',
        last: true,
    },
]

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function PostDischargePage() {
    const monitorRef  = useRef(null)
    const appRef      = useRef(null)
    const roadmapRef  = useRef(null)

    const [monitorVisible,  setMonitorVisible]  = useState(false)
    const [appVisible,      setAppVisible]      = useState(false)
    const [roadmapVisible,  setRoadmapVisible]  = useState(false)

    useEffect(() => {
        const pairs = [
            [monitorRef,  setMonitorVisible],
            [appRef,      setAppVisible],
            [roadmapRef,  setRoadmapVisible],
        ]
        const observers = pairs.map(([ref, setter]) => {
            if (!ref.current) return null
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) { setter(true); obs.disconnect() } },
                { threshold: 0.10 }
            )
            obs.observe(ref.current)
            return obs
        })
        return () => observers.forEach(o => o && o.disconnect())
    }, [])

    return (
        <PageLayout fullWidth lightHero>
            <style>{PD_KEYFRAMES}</style>
            <div style={{ background: 'white', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>

                {/* ── Section 1: Hero ── */}
                <div className="pd-hero-wrap" style={{ background: '#F3F4F5', overflow: 'hidden' }}>
                    <div className="pd-hero-inner" style={{ maxWidth: 1280, margin: '0 auto' }}>

                        {/* Left copy */}
                        <div className="pd-left-col">
                            {/* Eyebrow */}
                            <div style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 700,
                                fontSize: 14,
                                lineHeight: '20px',
                                letterSpacing: 2.8,
                                textTransform: 'uppercase',
                                color: '#006970',
                                animation: anim('pd-eyebrow-fade', '0.6s', 0),
                            }}>
                                Post-Discharge &amp; Continuity
                            </div>

                            {/* Heading – line by line */}
                            <h1 className="pd-h1" style={{
                                fontFamily: "'Manrope', sans-serif",
                                fontWeight: 800,
                                color: '#001736',
                                margin: 0,
                            }}>
                                <div style={{ animation: anim('pd-continuity-reveal', '1.0s', 100), overflow: 'hidden' }}>
                                    Discharge is not
                                </div>
                                <div style={{
                                    animation: anim('pd-continuity-reveal', '1.0s', 190),
                                    overflow: 'hidden',
                                }}>
                                    <span style={{
                                        display: 'inline-block',
                                        animation: anim('pd-meaning-emphasis', '1.6s', 1250, 'ease-in-out'),
                                    }}>
                                        the end of care.
                                    </span>
                                </div>
                                <div style={{ animation: anim('pd-continuity-reveal', '1.0s', 280), overflow: 'hidden' }}>
                                    ETOH does not
                                </div>
                                <div style={{ animation: anim('pd-continuity-reveal', '1.0s', 370), overflow: 'hidden' }}>
                                    treat it as one.
                                </div>
                            </h1>

                            {/* Paragraph */}
                            <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400,
                                fontSize: 20,
                                lineHeight: '32.5px',
                                color: '#43474F',
                                margin: 0,
                                maxWidth: 572,
                                paddingTop: 8,
                                animation: anim('pd-soft-fade-up', '0.9s', 520),
                            }}>
                                The moment a patient leaves the hospital is when the care most hospitals provide ends. For ETOH, it is simply where one phase ends and another begins.
                            </p>
                        </div>

                        {/* Right image */}
                        <div className="pd-hero-img" style={{
                            animation: anim('pd-forward-drift', '1.1s', 150),
                        }}>
                            <img
                                src={heroImg}
                                alt="Continuity of Care"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,23,54,0.40) 0%, rgba(0,23,54,0) 100%)' }} />
                        </div>
                    </div>
                </div>

                {/* ── Section 2: Features Grid ── */}
                <div ref={monitorRef} className="pd-features-wrap" style={{ background: '#F8F9FA' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>

                        {/* Top row: Digital Twin Mapping + Home Recovery Status */}
                        <div className="pd-monitor-grid">

                            {/* Continuous Digital Twin Mapping */}
                            <div
                                className="pd-monitor-card"
                                style={{
                                    padding: 40,
                                    background: 'white',
                                    borderRadius: 8,
                                    borderLeft: '2px solid #006970',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    gap: 32,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    opacity: monitorVisible ? undefined : 0,
                                    animation: monitorVisible ? anim('pd-monitor-card-rise', '1.0s', 0) : 'none',
                                }}
                            >
                                {/* Decorative bg */}
                                <div style={{ position: 'absolute', right: -48, bottom: -48, width: 240, height: 240, background: '#191C1D', opacity: 0.05, borderRadius: 0 }} />

                                <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        <svg width="30" height="29" viewBox="0 0 30 29" fill="none">
                                            <path d="M15 0C10 0 5 2.5 2.5 7L0 14L2.5 21C5 25.5 10 28 15 28C20 28 25 25.5 27.5 21L30 14L27.5 7C25 2.5 20 0 15 0ZM15 20C11.69 20 9 17.31 9 14C9 10.69 11.69 8 15 8C18.31 8 21 10.69 21 14C21 17.31 18.31 20 15 20Z" fill="#006970" />
                                        </svg>
                                        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#001736' }}>
                                            Continuous Digital Twin Mapping
                                        </div>
                                    </div>
                                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: '29.25px', color: '#43474F', margin: 0, maxWidth: 576 }}>
                                        Your recovery is monitored against a high-fidelity digital simulation. By comparing real-time vitals to your personalized baseline, our systems identify microscopic deviations before they manifest as complications.
                                    </p>
                                </div>

                                {/* Sync line + stats */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    <div style={{ height: 4, background: '#E7E8E9', borderRadius: 12, overflow: 'hidden' }}>
                                        <div style={{
                                            height: '100%',
                                            background: '#006970',
                                            borderRadius: 12,
                                            width: monitorVisible ? '83%' : '0%',
                                            animation: monitorVisible ? anim('pd-sync-line-draw', '1.2s', 400) : 'none',
                                        }} />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div style={{
                                            fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px',
                                            letterSpacing: 1.2, textTransform: 'uppercase', color: '#43474F',
                                            opacity: monitorVisible ? undefined : 0,
                                            animation: monitorVisible ? anim('pd-soft-fade-up', '0.6s', 600) : 'none',
                                        }}>
                                            Biometric Sync: Active
                                        </div>
                                        <div style={{
                                            fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px',
                                            letterSpacing: 1.2, textTransform: 'uppercase', color: '#43474F',
                                            opacity: monitorVisible ? undefined : 0,
                                            animation: monitorVisible ? anim('pd-soft-fade-up', '0.6s', 700) : 'none',
                                        }}>
                                            Analysis Precision: 99.8%
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Home-Recovery Phase 1 */}
                            <div style={{
                                padding: 40,
                                background: '#002B5B',
                                borderRadius: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: 24,
                                opacity: monitorVisible ? undefined : 0,
                                animation: monitorVisible ? anim('pd-phase-card-slide', '1.0s', 160) : 'none',
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: 'rgba(117,148,202,0.70)' }}>
                                        Status Update
                                    </div>
                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 30, lineHeight: '36px', color: 'white' }}>
                                        Home-Recovery<br />Phase 1
                                    </div>
                                </div>
                                <div style={{
                                    padding: 24,
                                    background: 'rgba(255,255,255,0.10)',
                                    borderRadius: 4,
                                    backdropFilter: 'blur(6px)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 16,
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 14, lineHeight: '20px', color: '#7594CA' }}>Mobility Goal</span>
                                        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#7594CA' }}>85%</span>
                                    </div>
                                    <div style={{ height: 4, background: 'rgba(255,255,255,0.20)', borderRadius: 12, overflow: 'hidden' }}>
                                        <div style={{
                                            height: '100%',
                                            background: '#96F1FA',
                                            borderRadius: 12,
                                            width: monitorVisible ? '85%' : '0%',
                                            animation: monitorVisible ? anim('pd-goal-progress', '1.3s', 560) : 'none',
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom row: 3 feature cards */}
                        <div className="pd-cards-grid">
                            {featureCards.map((card, i) => (
                                <div
                                    key={card.title}
                                    className="pd-feature-card"
                                    style={{
                                        padding: '40px 40px 48px',
                                        background: '#F3F4F5',
                                        borderRadius: 8,
                                        border: '1px solid #E7E8E9',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 0,
                                        opacity: monitorVisible ? undefined : 0,
                                        animation: monitorVisible ? anim('pd-card-wave', '1.0s', 300 + i * 100) : 'none',
                                    }}
                                >
                                    {/* Icon with personality animation */}
                                    <div style={{
                                        marginBottom: 40,
                                        display: 'inline-block',
                                        opacity: monitorVisible ? undefined : 0,
                                        animation: monitorVisible
                                            ? anim(card.iconAnim, card.iconAnim === 'pd-alert-pulse' ? '0.9s' : '0.7s', 500 + i * 100, card.iconAnim === 'pd-alert-pulse' ? 'cubic-bezier(0.36,0.07,0.19,0.97)' : 'cubic-bezier(0.34,1.56,0.64,1)')
                                            : 'none',
                                    }}>
                                        {card.icon}
                                    </div>
                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#001736', marginBottom: 16 }}>
                                        {card.title}
                                    </div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '26px', color: '#43474F' }}>
                                        {card.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Section 3: App / "Actionable Tranquility" ── */}
                <div ref={appRef} className="pd-app-wrap" style={{ background: 'white' }}>
                    <div className="pd-app-inner" style={{ maxWidth: 1280, margin: '0 auto' }}>

                        {/* Left — device mockup */}
                        <div style={{
                            flex: 1,
                            position: 'relative',
                            opacity: appVisible ? undefined : 0,
                            animation: appVisible ? anim('pd-device-wake', '1.1s', 0) : 'none',
                        }}>
                            {/* Teal glow */}
                            <div style={{ position: 'absolute', left: -48, top: -48, width: 256, height: 256, background: 'rgba(0,105,112,0.05)', borderRadius: 12, filter: 'blur(32px)' }} />
                            <div style={{ padding: 8, background: 'rgba(255,255,255,0.80)', borderRadius: 16, backdropFilter: 'blur(12px)', position: 'relative' }}>
                                <img
                                    src={appImg}
                                    alt="Recovery Monitoring App"
                                    style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: 8, boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)', display: 'block' }}
                                />
                            </div>
                        </div>

                        {/* Right — copy + CTA */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
                            {/* Heading – two lines revealed separately */}
                            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 36, lineHeight: '45px', color: '#001736', margin: 0 }}>
                                <div style={{
                                    opacity: appVisible ? undefined : 0,
                                    animation: appVisible ? anim('pd-assurance-reveal', '0.95s', 120) : 'none',
                                }}>
                                    Your health data, translated
                                </div>
                                <div style={{
                                    opacity: appVisible ? undefined : 0,
                                    animation: appVisible ? anim('pd-assurance-reveal', '1.05s', 270) : 'none',
                                }}>
                                    into actionable tranquility.
                                </div>
                            </h2>

                            {/* Paragraph */}
                            <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400,
                                fontSize: 18,
                                lineHeight: '29.25px',
                                color: '#43474F',
                                margin: 0,
                                opacity: appVisible ? undefined : 0,
                                animation: appVisible ? anim('pd-soft-fade-up', '0.9s', 380) : 'none',
                            }}>
                                We believe that information without context creates anxiety. Our post-discharge platform doesn't just show you numbers; it explains what they mean for your specific recovery timeline. It is clinical authority in the palm of your hand.
                            </p>

                            {/* CTA */}
                            <button
                                className="pd-portal-btn"
                                onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=Enter Recovery Portal'}
                                style={{
                                    display: 'inline-flex',
                                    alignSelf: 'flex-start',
                                    alignItems: 'center',
                                    gap: 12,
                                    padding: '16px 32px',
                                    background: 'linear-gradient(90deg, #001736 0%, #002B5B 100%)',
                                    borderRadius: 6,
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontFamily: "'Manrope', sans-serif",
                                    fontWeight: 700,
                                    fontSize: 14,
                                    lineHeight: '20px',
                                    letterSpacing: 1.4,
                                    textTransform: 'uppercase',
                                    color: 'white',
                                    opacity: appVisible ? undefined : 0,
                                    animation: appVisible ? anim('pd-portal-rise', '0.9s', 580) : 'none',
                                }}
                            >
                                Enter Recovery Portal
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Section 4: Post-Discharge Roadmap ── */}
                <div
                    ref={roadmapRef}
                    className="pd-roadmap-wrap"
                    style={{ alignSelf: 'stretch', background: '#F8F9FA', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}
                >
                    <div style={{ width: '100%', maxWidth: 768, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 64 }}>

                        {/* Title */}
                        <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{
                                textAlign: 'center',
                                color: '#001736',
                                fontSize: 30,
                                fontFamily: "'Manrope', sans-serif",
                                fontWeight: 700,
                                lineHeight: '36px',
                                opacity: roadmapVisible ? undefined : 0,
                                animation: roadmapVisible ? anim('pd-roadmap-title', '0.9s', 0) : 'none',
                            }}>
                                Your Post-Discharge Roadmap
                            </div>
                        </div>

                        {/* Steps */}
                        <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 48 }}>
                            {roadmapSteps.map((step, i) => (
                                <div
                                    key={step.num}
                                    style={{
                                        alignSelf: 'stretch',
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItems: 'flex-start',
                                        gap: 32,
                                        opacity: roadmapVisible ? undefined : 0,
                                        animation: roadmapVisible ? anim('pd-step-rise', '0.95s', 120 + i * 140) : 'none',
                                    }}
                                >
                                    {/* Number + connector */}
                                    <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                                        <div style={{
                                            width: 48,
                                            height: step.last ? 48 : 31,
                                            background: step.active ? '#006970' : '#E7E8E9',
                                            borderRadius: 12,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            color: step.active ? 'white' : '#001736',
                                            fontSize: 16,
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 700,
                                            lineHeight: '24px',
                                        }}>
                                            {step.num}
                                        </div>
                                        {!step.last && (
                                            <div style={{ width: 1, flex: '1 1 0', paddingTop: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                                                <div style={{ width: 1, flex: '1 1 0', background: '#E7E8E9' }} />
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8 }}>
                                        <div style={{ color: '#001736', fontSize: 20, fontFamily: "'Manrope', sans-serif", fontWeight: 700, lineHeight: '28px' }}>
                                            {step.title}
                                        </div>
                                        <div style={{ color: '#43474F', fontSize: 16, fontFamily: "'Inter', sans-serif", fontWeight: 400, lineHeight: '24px' }}>
                                            {step.desc}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </PageLayout>
    )
}
