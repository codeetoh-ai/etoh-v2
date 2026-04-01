import { useState, useEffect, useRef } from 'react'
import PageLayout from '../../../../components/PageLayout'
import bodyImg from './section2.png'

const insights = [
    {
        bg: '#96F1FA',
        iconColor: '#006F77',
        label: 'Circadian Alignment',
        text: 'Sleep architecture has improved by 14% since Tuesday.',
    },
    {
        bg: '#7DF4FF',
        iconColor: '#001B1D',
        label: 'Metabolic Shift',
        text: 'Glucose stabilization predicted within 48 hours.',
    },
]

const journeyItems = [
    {
        num: '01',
        title: 'Post-Discharge Baseline',
        desc: 'Simulated transition into home environment with active biometric monitoring.',
    },
    {
        num: '02',
        title: 'Lifestyle Optimization',
        desc: 'Adjusting nutrient density and activity levels based on twin simulation.',
    },
    {
        num: '03',
        title: 'Long-term Vitality',
        desc: 'Predictive modeling of cardiovascular health across the next decade.',
    },
]

const KF = `
  @keyframes hj-perspective-reveal {
    from { opacity: 0; transform: translateY(24px); filter: blur(6px); }
    to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
  }
  @keyframes hj-fade-up {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes hj-dot-appear {
    from { opacity: 0; transform: scale(0); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes hj-status-text {
    from { opacity: 0; transform: translateX(12px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes hj-status-pulse {
    0%,100% { transform: scale(1);   opacity: 1; }
    50%     { transform: scale(1.6); opacity: 0.5; }
  }
  @keyframes hj-node-pop {
    0%   { transform: scale(0); opacity: 0; }
    60%  { transform: scale(1.3); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes hj-metric-float {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes hj-insight-slide {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes hj-insight-icon {
    from { opacity: 0; transform: scale(0.6); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes hj-future-step {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes hj-body-reveal {
    from { opacity: 0; transform: scale(1.04); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes hj-signal-flow {
    0%   { transform: translateX(-100%); opacity: 0.6; }
    100% { transform: translateX(200%);  opacity: 0; }
  }
  @keyframes hj-quote-rise {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes hj-cta-surface {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes hj-btn-rise {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes hj-arrow-nudge {
    0%,100% { transform: translateX(0); }
    50%     { transform: translateX(5px); }
  }
  @keyframes hj-divider-draw {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }

  .hj-card-hover {
    transition: transform 0.22s ease, box-shadow 0.22s ease;
  }
  .hj-card-hover:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 12px 32px rgba(0,0,0,0.10) !important;
  }
  .hj-btn-primary {
    transition: box-shadow 0.22s ease, transform 0.22s ease;
  }
  .hj-btn-primary:hover {
    box-shadow: 0 0 0 4px rgba(0,105,112,0.30);
    transform: translateY(-1px);
  }
  .hj-btn-secondary {
    transition: outline-color 0.2s ease, transform 0.2s ease;
  }
  .hj-btn-secondary:hover {
    outline-color: rgba(255,255,255,0.55) !important;
    transform: translateY(-1px);
  }
  .hj-journey-item {
    transition: transform 0.2s ease;
  }
  .hj-journey-item:hover .hj-item-arrow {
    animation: hj-arrow-nudge 0.5s ease;
  }

  /* ── Layout classes ── */
  .hj-page-wrap {
    max-width: 1184px;
    margin: 0 auto;
    padding: 64px 24px 0;
  }
  .hj-hero {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 32px;
    margin-bottom: 48px;
    flex-wrap: wrap;
  }
  .hj-hero-heading {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 56px;
    line-height: 61.6px;
    color: #001736;
    margin: 0 0 24px;
  }
  .hj-main-grid {
    display: grid;
    grid-template-columns: 1fr 360px;
    gap: 24px;
    align-items: start;
    margin-bottom: 24px;
  }
  .hj-journey-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    align-items: center;
    margin-bottom: 24px;
  }
  .hj-cta-bar {
    padding: 48px;
    background: #001736;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    margin-bottom: 80px;
    position: relative;
    overflow: hidden;
  }
  .hj-body-image {
    height: 388px;
  }
  .hj-status-badge {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }
  .hj-metric-card {
    position: absolute;
    right: 0;
    bottom: 20px;
    max-width: 280px;
  }

  /* ── Tablet (≤1024px) ── */
  @media (max-width: 1024px) {
    .hj-main-grid {
      grid-template-columns: 1fr 300px;
    }
    .hj-hero-heading {
      font-size: 44px;
      line-height: 50px;
    }
    .hj-cta-bar {
      padding: 40px;
    }
  }

  /* ── Mobile (≤768px) ── */
  @media (max-width: 768px) {
    .hj-page-wrap {
      padding: 48px 20px 0;
    }
    .hj-hero {
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      margin-bottom: 32px;
    }
    .hj-hero-heading {
      font-size: 34px;
      line-height: 40px;
      margin-bottom: 16px;
    }
    .hj-status-badge {
      align-items: flex-start;
    }
    .hj-main-grid {
      grid-template-columns: 1fr;
    }
    .hj-journey-grid {
      grid-template-columns: 1fr;
    }
    .hj-body-image {
      height: 280px;
    }
    .hj-cta-bar {
      flex-direction: column;
      align-items: flex-start;
      padding: 32px 24px;
      border-radius: 12px;
      margin-bottom: 48px;
    }
    .hj-cta-buttons {
      width: 100%;
      flex-direction: column;
    }
    .hj-cta-buttons button {
      width: 100%;
    }
    .hj-metric-card {
      position: static;
      max-width: 100%;
      margin-top: 16px;
    }
  }
`

const a = (name, dur, delayMs, ease = 'cubic-bezier(0.4,0,0.2,1)') =>
    `${name} ${dur} ${ease} ${delayMs}ms both`

const useVisible = (threshold = 0.2) => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        if (!ref.current) return
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
            { threshold }
        )
        obs.observe(ref.current)
        return () => obs.disconnect()
    }, [threshold])
    return [ref, visible]
}

export default function HealthJourneyPage() {
    const trajectoryPathRef = useRef(null)
    const futureDashRef = useRef(null)
    const [pathLen, setPathLen] = useState(900)

    const [chartRef, chartVisible] = useVisible(0.15)
    const [rightRef, rightVisible] = useVisible(0.2)
    const [journeyAheadRef, journeyAheadVisible] = useVisible(0.2)
    const [ctaRef, ctaVisible] = useVisible(0.3)

    const [stability, setStability] = useState(0)

    // Measure SVG path length once mounted
    useEffect(() => {
        if (trajectoryPathRef.current) {
            setPathLen(Math.ceil(trajectoryPathRef.current.getTotalLength()))
        }
    }, [])

    // Count up stability % when chart enters view
    useEffect(() => {
        if (!chartVisible) return
        let count = 0
        const id = setInterval(() => {
            count += 2
            if (count >= 88) { setStability(88); clearInterval(id) }
            else setStability(count)
        }, 20)
        return () => clearInterval(id)
    }, [chartVisible])

    return (
        <PageLayout fullWidth lightHero>
            <style>{KF}</style>
            <div style={{ background: 'white', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
                <div className="hj-page-wrap">

                    {/* ── Hero ── */}
                    <div className="hj-hero">
                        <div style={{ maxWidth: 800 }}>
                            <h1 className="hj-hero-heading">
                                <div style={{ animation: a('hj-perspective-reveal', '0.75s', 0) }}>
                                    See your health,
                                </div>
                                <div style={{ animation: a('hj-perspective-reveal', '0.8s', 160, 'cubic-bezier(0.25,0.46,0.45,0.94)') }}>
                                    not just your diagnosis.
                                </div>
                            </h1>
                            <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400,
                                fontSize: 20,
                                lineHeight: '32.5px',
                                color: '#43474F',
                                maxWidth: 638,
                                margin: 0,
                                animation: a('hj-fade-up', '0.65s', 380),
                            }}>
                                ETOH builds a living picture of each patient's health trajectory — so
                                that care decisions are grounded not just in what is happening now,
                                but in where each patient is headed.
                            </p>
                        </div>

                        {/* Model Status badge */}
                        <div className="hj-status-badge">
                            <div style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400, fontSize: 12, lineHeight: '16px',
                                letterSpacing: 1.2, textTransform: 'uppercase', color: '#747780',
                                animation: a('hj-fade-up', '0.5s', 300),
                            }}>
                                Model Status
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                {/* Dot appears first, then pulses */}
                                <div style={{
                                    width: 8, height: 8,
                                    background: '#006970', borderRadius: '50%',
                                    animation: `${a('hj-dot-appear', '0.4s', 400)} , hj-status-pulse 2.8s ease-in-out 1.2s infinite`,
                                }} />
                                <div style={{
                                    fontFamily: "'Manrope', sans-serif",
                                    fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#006970',
                                    animation: a('hj-status-text', '0.45s', 520),
                                }}>
                                    REAL-TIME TWIN ACTIVE
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Main 2-column grid ── */}
                    <div className="hj-main-grid">

                        {/* LEFT — Predictive Trajectory Map */}
                        <div
                            ref={chartRef}
                            className="hj-card-hover"
                            style={{
                                minHeight: 500,
                                padding: 32,
                                position: 'relative',
                                background: 'white',
                                borderRadius: 8,
                                outline: '1px solid rgba(196,198,208,0.20)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                opacity: chartVisible ? undefined : 0,
                                animation: chartVisible ? a('hj-fade-up', '0.6s', 0) : 'none',
                            }}
                        >
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(21deg, rgba(0,23,54,0.05) 0%, rgba(0,23,54,0) 100%)', pointerEvents: 'none' }} />

                            {/* Header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 48 }}>
                                <div>
                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#001736', marginBottom: 4 }}>
                                        Predictive Trajectory Map
                                    </div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F' }}>
                                        V0.94 Behavioral Bio-Integration
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                    <div style={{ padding: '4px 12px', background: '#E7E8E9', borderRadius: 12, fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', letterSpacing: 0.6, textTransform: 'uppercase', color: '#191C1D' }}>
                                        6-Month Outlook
                                    </div>
                                    <div style={{ padding: '4px 12px', background: '#006970', borderRadius: 12, fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', letterSpacing: 0.6, textTransform: 'uppercase', color: 'white' }}>
                                        Projected Path
                                    </div>
                                </div>
                            </div>

                            {/* Chart area */}
                            <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 40, paddingBottom: 40 }}>
                                <svg width="100%" height="256" viewBox="0 0 738 256" fill="none" style={{ overflow: 'visible' }}>
                                    {/* Baseline dashed reference */}
                                    <line x1="0" y1="183" x2="738" y2="183" stroke="#C4C6D0" strokeWidth="1" strokeDasharray="4 4" />

                                    {/* Main trajectory — draws left to right via stroke-dashoffset */}
                                    <path
                                        ref={trajectoryPathRef}
                                        d="M0 220 C60 215, 120 205, 180 198 C240 190, 260 185, 282 174 C320 158, 370 140, 456 91 C540 62, 620 54, 738 48"
                                        stroke="#006970"
                                        strokeWidth="2.5"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeDasharray={pathLen}
                                        strokeDashoffset={chartVisible ? 0 : pathLen}
                                        style={{
                                            transition: chartVisible
                                                ? `stroke-dashoffset 1.5s cubic-bezier(0.4,0,0.2,1) 0.1s`
                                                : 'none',
                                        }}
                                    />

                                    {/* Projected dashed extension — fades in after line draws */}
                                    <path
                                        ref={futureDashRef}
                                        d="M738 48 C780 42, 810 38, 850 34"
                                        stroke="#006970"
                                        strokeWidth="2"
                                        strokeDasharray="5 4"
                                        fill="none"
                                        style={{
                                            opacity: chartVisible ? 1 : 0,
                                            transition: chartVisible ? 'opacity 0.6s ease 1.6s' : 'none',
                                        }}
                                    />

                                    {/* Optimization Point 1 — node-pop after line reaches it */}
                                    <g style={{
                                        opacity: chartVisible ? 1 : 0,
                                        transition: chartVisible ? 'opacity 0s ease 0.7s' : 'none',
                                    }}>
                                        <circle
                                            cx="282" cy="174" r="5.5" fill="#006970"
                                            style={{
                                                transformOrigin: '282px 174px',
                                                animation: chartVisible ? a('hj-node-pop', '0.4s', 700, 'cubic-bezier(0.34,1.56,0.64,1)') : 'none',
                                            }}
                                        />
                                        <text
                                            x="293" y="166" fill="#006970" fontSize="9" fontFamily="Inter"
                                            style={{
                                                opacity: chartVisible ? 1 : 0,
                                                transition: chartVisible ? 'opacity 0.3s ease 1s' : 'none',
                                            }}
                                        >
                                            OPTIMIZATION POINT
                                        </text>
                                    </g>

                                    {/* Optimization Point 2 */}
                                    <circle
                                        cx="456" cy="91" r="5.5" fill="#006970"
                                        style={{
                                            transformOrigin: '456px 91px',
                                            animation: chartVisible ? a('hj-node-pop', '0.4s', 1100, 'cubic-bezier(0.34,1.56,0.64,1)') : 'none',
                                        }}
                                    />
                                </svg>

                                {/* Floating stability card — metric-float */}
                                <div className="hj-metric-card" style={{
                                    padding: '16px',
                                    background: 'rgba(255,255,255,0.90)',
                                    borderRadius: 4,
                                    outline: '1px solid rgba(255,255,255,0.40)',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0px 8px 10px -6px rgba(0,0,0,0.10), 0px 20px 25px -5px rgba(0,0,0,0.10)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 4,
                                    opacity: chartVisible ? undefined : 0,
                                    animation: chartVisible ? a('hj-metric-float', '0.65s', 1200) : 'none',
                                }}>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 10, lineHeight: '15px', letterSpacing: 1, textTransform: 'uppercase', color: '#747780' }}>
                                        Stability Probability
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                                        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 30, lineHeight: '36px', color: '#001736' }}>
                                            {stability}%
                                        </div>
                                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
                                            <path d="M1 9L6 3L9 6L14 1" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 11, lineHeight: '13.75px', color: '#43474F' }}>
                                        Patient trajectory remains 12% above regional benchmark for recovery velocity.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — Recovery Velocity + Strategic Insights */}
                        <div ref={rightRef} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

                            {/* Recovery Velocity card */}
                            <div
                                className="hj-card-hover"
                                style={{
                                    padding: '24px 24px 42px',
                                    background: '#F3F4F5',
                                    borderRadius: 8,
                                    border: '1px solid rgba(196,198,208,0.25)',
                                    borderLeft: '2px solid #006970',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 24,
                                    opacity: rightVisible ? undefined : 0,
                                    animation: rightVisible ? a('hj-insight-slide', '0.65s', 0) : 'none',
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none">
                                        <path d="M11 2C6 2 2 6.5 2 11H4C4 7.5 7 5 11 5C15 5 18 7.5 18 11H20C20 6.5 16 2 11 2Z" fill="#006970" />
                                        <path d="M11 7L8 13H14L11 7Z" fill="#006970" />
                                    </svg>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 10, lineHeight: '15px', letterSpacing: 2, textTransform: 'uppercase', color: '#747780' }}>
                                        Recovery Velocity
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                        <div>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F', marginBottom: 4 }}>
                                                Current Phase
                                            </div>
                                            <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: '28px', color: '#001736' }}>
                                                Structural Integration
                                            </div>
                                        </div>
                                        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 30, lineHeight: '36px', color: '#006970' }}>
                                            v4.2
                                        </div>
                                    </div>
                                    {/* Progress bar — progress-scan */}
                                    <div style={{ height: 4, background: '#E7E8E9', borderRadius: 12, overflow: 'hidden' }}>
                                        <div style={{
                                            height: '100%',
                                            background: '#006970',
                                            borderRadius: 12,
                                            width: rightVisible ? '68%' : '0%',
                                            transition: rightVisible ? 'width 0.9s cubic-bezier(0.4,0,0.2,1) 0.3s' : 'none',
                                        }} />
                                    </div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '19.5px', color: '#43474F' }}>
                                        Clinical markers indicate a successful pivot from acute stabilization to long-term neuro-regeneration.
                                    </div>
                                </div>
                            </div>

                            {/* Strategic Insights card */}
                            <div
                                className="hj-card-hover"
                                style={{
                                    padding: '24px 24px 41px',
                                    background: 'white',
                                    borderRadius: 8,
                                    outline: '1px solid rgba(196,198,208,0.20)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 16,
                                    opacity: rightVisible ? undefined : 0,
                                    animation: rightVisible ? a('hj-insight-slide', '0.65s', 120) : 'none',
                                }}
                            >
                                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 18, lineHeight: '28px', color: '#191C1D' }}>
                                    Strategic Insights
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    {insights.map((item, i) => (
                                        <div
                                            key={item.label}
                                            style={{
                                                display: 'flex', alignItems: 'flex-start', gap: 16,
                                                opacity: rightVisible ? undefined : 0,
                                                animation: rightVisible ? a('hj-fade-up', '0.45s', 240 + i * 120) : 'none',
                                            }}
                                        >
                                            <div style={{
                                                width: 32, height: 32, background: item.bg, borderRadius: 12,
                                                flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                opacity: rightVisible ? undefined : 0,
                                                animation: rightVisible ? a('hj-insight-icon', '0.35s', 280 + i * 120, 'cubic-bezier(0.34,1.56,0.64,1)') : 'none',
                                            }}>
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                                                    <path d="M5 0C2.5 0 0 2.5 0 5C0 8 5 12 5 12C5 12 10 8 10 5C10 2.5 7.5 0 5 0Z" fill={item.iconColor} />
                                                </svg>
                                            </div>
                                            <div>
                                                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', letterSpacing: 0.6, textTransform: 'uppercase', color: '#747780', marginBottom: 4 }}>
                                                    {item.label}
                                                </div>
                                                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#191C1D' }}>
                                                    {item.text}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Journey Ahead section ── */}
                    <div
                        ref={journeyAheadRef}
                        className="hj-journey-grid"
                    >
                        {/* Left — copy + items */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                            <div style={{
                                opacity: journeyAheadVisible ? undefined : 0,
                                animation: journeyAheadVisible ? a('hj-fade-up', '0.55s', 0) : 'none',
                            }}>
                                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#006970', marginBottom: 16 }}>
                                    The Journey Ahead
                                </div>
                                <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 36, lineHeight: '42px', color: '#001736', margin: 0 }}>
                                    Forward-Looking Maps for<br />Coordinated Care.
                                </h2>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                {journeyItems.map((item, i) => (
                                    <div key={i}>
                                        <div
                                            className="hj-journey-item"
                                            style={{
                                                paddingTop: 24,
                                                paddingBottom: 24,
                                                opacity: journeyAheadVisible ? undefined : 0,
                                                animation: journeyAheadVisible ? a('hj-future-step', '0.55s', 100 + i * 130) : 'none',
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                                <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#001736' }}>
                                                    {item.num}. {item.title}
                                                </span>
                                                <svg className="hj-item-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F' }}>
                                                {item.desc}
                                            </div>
                                        </div>
                                        {/* Divider draws across */}
                                        {i < journeyItems.length - 1 && (
                                            <div style={{
                                                height: 1,
                                                background: 'rgba(196,198,208,0.25)',
                                                transformOrigin: 'left',
                                                transform: journeyAheadVisible ? 'scaleX(1)' : 'scaleX(0)',
                                                transition: journeyAheadVisible ? `transform 0.5s ease ${150 + i * 130}ms` : 'none',
                                            }} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — Digital body image */}
                        <div className="hj-body-image" style={{
                            position: 'relative',
                            borderRadius: 16,
                            overflow: 'hidden',
                            boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
                            opacity: journeyAheadVisible ? undefined : 0,
                            animation: journeyAheadVisible ? a('hj-body-reveal', '1s', 100, 'cubic-bezier(0.25,0.46,0.45,0.94)') : 'none',
                        }}>
                            <img
                                src={bodyImg}
                                alt="Digital Twin"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                            {/* Dark overlay */}
                            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,23,54,0.20)', mixBlendMode: 'multiply' }} />
                            {/* Signal flow — sweeps left to right */}
                            <div style={{
                                position: 'absolute', inset: 0, overflow: 'hidden',
                                opacity: journeyAheadVisible ? 1 : 0,
                                transition: 'opacity 0s ease 0.8s',
                                pointerEvents: 'none',
                            }}>
                                <div style={{
                                    position: 'absolute', top: 0, bottom: 0, width: '40%',
                                    background: 'linear-gradient(90deg, transparent, rgba(0,105,112,0.12), transparent)',
                                    animation: journeyAheadVisible ? 'hj-signal-flow 2.8s ease-in-out 1s infinite' : 'none',
                                }} />
                            </div>
                            {/* Gradient + quote */}
                            <div style={{
                                position: 'absolute', left: 0, right: 0, bottom: 0, padding: 32,
                                background: 'linear-gradient(0deg, rgba(0,23,54,0.80) 0%, rgba(0,23,54,0) 100%)',
                                opacity: journeyAheadVisible ? undefined : 0,
                                animation: journeyAheadVisible ? a('hj-quote-rise', '0.6s', 600) : 'none',
                            }}>
                                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: '29.25px', color: 'white', margin: 0 }}>
                                    "The twin doesn't just show data; it tells your story in advance, allowing us to edit the future before it happens."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── CTA Bar ── */}
                    <div
                        ref={ctaRef}
                        className="hj-cta-bar"
                        style={{ opacity: ctaVisible ? undefined : 0, animation: ctaVisible ? a('hj-cta-surface', '0.7s', 0) : 'none' }}
                    >
                        <div style={{ position: 'absolute', right: -80, top: -80, width: 300, height: 300, background: 'radial-gradient(circle, rgba(0,105,112,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
                        <div style={{
                            opacity: ctaVisible ? undefined : 0,
                            animation: ctaVisible ? a('hj-fade-up', '0.55s', 150) : 'none',
                        }}>
                            <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 30, lineHeight: '36px', color: 'white', marginBottom: 8 }}>
                                Ready to explore your trajectory?
                            </div>
                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#A9C7FF' }}>
                                Connect your wearable data to refine your Digital Twin accuracy.
                            </div>
                        </div>
                        <div className="hj-cta-buttons" style={{ display: 'flex', gap: 16, flexShrink: 0 }}>
                            <button
                                className="hj-btn-primary"
                                onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=Initialize Sync'}
                                style={{
                                    padding: '13px 32px',
                                    background: 'linear-gradient(90deg, #006970 0%, #004F54 100%)',
                                    borderRadius: 6,
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontFamily: "'Manrope', sans-serif",
                                    fontWeight: 700, fontSize: 16, lineHeight: '24px', color: 'white',
                                    whiteSpace: 'nowrap',
                                    opacity: ctaVisible ? undefined : 0,
                                    animation: ctaVisible ? a('hj-btn-rise', '0.5s', 300) : 'none',
                                }}
                            >
                                Initialize Sync
                            </button>
                            <button
                                className="hj-btn-secondary"
                                onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=View Data Logs'}
                                style={{
                                    padding: '12px 32px',
                                    background: 'transparent',
                                    borderRadius: 6,
                                    border: 'none',
                                    outline: '1px solid rgba(255,255,255,0.20)',
                                    cursor: 'pointer',
                                    fontFamily: "'Manrope', sans-serif",
                                    fontWeight: 700, fontSize: 16, lineHeight: '24px', color: 'white',
                                    whiteSpace: 'nowrap',
                                    opacity: ctaVisible ? undefined : 0,
                                    animation: ctaVisible ? a('hj-btn-rise', '0.5s', 420) : 'none',
                                }}
                            >
                                View Data Logs
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </PageLayout>
    )
}
