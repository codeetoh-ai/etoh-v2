import { useState, useEffect, useRef } from 'react'
import privateHero from '../../../assets/privateimg.png'
import privateOverlay from '../../../assets/Private.png'
import private3 from '../../../assets/private3.png'
import private4 from '../../../assets/private4.png'
import private5 from '../../../assets/private5.png'
import PrivatecardIcon1 from './icons/PrivatecardIcon1'
import PrivatecardIcon2 from './icons/PrivatecardIcon2'
import PageLayout from '../../../components/PageLayout'
import { BarChart2, ShieldCheck, Database, Zap, Link2, ArrowRight, Layers, Activity } from 'lucide-react'

/* ─────────────────────────────────────────────
   Keyframes + Responsive
───────────────────────────────────────────── */
const PHN_KEYFRAMES = `
  /* ── Hero ── */
  @keyframes phn-network-align-1 {
    from { opacity: 0; transform: translateX(-12px); filter: blur(8px); }
    to   { opacity: 1; transform: translateX(0);     filter: blur(0);   }
  }
  @keyframes phn-network-align-2 {
    from { opacity: 0; transform: translateX(9px);  filter: blur(8px); }
    to   { opacity: 1; transform: translateX(0);    filter: blur(0);   }
  }
  @keyframes phn-network-align-3 {
    from { opacity: 0; transform: translateX(-7px); filter: blur(8px); }
    to   { opacity: 1; transform: translateX(0);    filter: blur(0);   }
  }
  @keyframes phn-network-align-4 {
    from { opacity: 0; transform: translateX(11px); filter: blur(8px); }
    to   { opacity: 1; transform: translateX(0);    filter: blur(0);   }
  }
  @keyframes phn-site-reveal {
    from { opacity: 0; transform: scale(1.06); filter: blur(8px); }
    to   { opacity: 1; transform: scale(1);    filter: blur(0);   }
  }
  @keyframes phn-sub-fade {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes phn-button-rise {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes phn-grid-drift {
    0%   { transform: translate(0,    0);    }
    100% { transform: translate(48px, 48px); }
  }

  /* ── Challenge Section ── */
  @keyframes phn-module-enter-left {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0);     }
  }
  @keyframes phn-module-enter-right {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0);    }
  }
  @keyframes phn-subcard-stagger {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes phn-thesis-step-reveal {
    from { opacity: 0; transform: translateX(-10px); }
    to   { opacity: 1; transform: translateX(0);     }
  }

  /* ── Cross-Site Intelligence ── */
  @keyframes phn-headline-scan {
    from { clip-path: inset(0 100% 0 0); opacity: 0.4; }
    to   { clip-path: inset(0 0% 0 0);   opacity: 1;   }
  }
  @keyframes phn-eyebrow-fade {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0);   }
  }
  @keyframes phn-body-rise {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes phn-network-card-wave {
    from { opacity: 0; transform: translateY(24px) translateX(-20px); }
    to   { opacity: 1; transform: translateY(0)    translateX(0);     }
  }
  @keyframes phn-terminal-boot {
    from { clip-path: inset(100% 0 0 0); }
    to   { clip-path: inset(0% 0 0 0);   }
  }
  @keyframes phn-team-focus {
    from { opacity: 0.5; transform: scale(1.07); }
    to   { opacity: 1;   transform: scale(1);    }
  }
  @keyframes phn-environment-scan {
    from { filter: brightness(0.55) saturate(0.6); transform: scale(1.04); }
    to   { filter: brightness(1)    saturate(1);   transform: scale(1);    }
  }

  /* ── Bento Grid ── */
  @keyframes phn-node-activation {
    from { opacity: 0; transform: translateY(20px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0)    scale(1);    }
  }
  @keyframes phn-load-balance-fill {
    from { width: 0%;    }
    to   { width: 100%;  }
  }
  @keyframes phn-sync-pulse-anim {
    0%   { box-shadow: inset 0 0 0 0 rgba(0,105,112,0.6); }
    40%  { box-shadow: inset 0 0 0 5px rgba(0,105,112,0.35); }
    100% { box-shadow: inset 0 0 0 0 rgba(0,105,112,0); }
  }

  /* ── CTA ── */
  @keyframes phn-cta-heading-rise {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes phn-cta-left {
    from { opacity: 0; transform: translateX(-28px); }
    to   { opacity: 1; transform: translateX(0);     }
  }
  @keyframes phn-cta-right {
    from { opacity: 0; transform: translateX(28px); }
    to   { opacity: 1; transform: translateX(0);    }
  }

  /* ── Hover ── */
  .phn-hero-btn {
    transition: transform 0.22s cubic-bezier(0.22,1,0.36,1),
                box-shadow 0.22s cubic-bezier(0.22,1,0.36,1);
  }
  .phn-hero-btn-primary:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 10px 28px rgba(0,105,112,0.40) !important;
  }
  .phn-hero-btn-ghost:hover {
    transform: translateY(-2px) !important;
    background: rgba(255,255,255,0.08) !important;
  }
  .phn-s3-card-hover {
    transition: transform 0.28s cubic-bezier(0.22,1,0.36,1);
  }
  .phn-s3-card-hover:hover {
    transform: translateY(-4px);
  }
  .phn-bento-card {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .phn-bento-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.09) !important;
  }
  .phn-cta-btn {
    transition: transform 0.22s cubic-bezier(0.22,1,0.36,1),
                box-shadow 0.22s cubic-bezier(0.22,1,0.36,1);
  }
  .phn-cta-btn-primary:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 10px 28px rgba(0,105,112,0.40) !important;
  }
  .phn-cta-btn-ghost:hover {
    transform: translateY(-2px) !important;
    background: rgba(255,255,255,0.10) !important;
  }

  /* ── Layout classes ── */
  .phn-hero-section {
    padding-top: 192px;
    padding-bottom: 160px;
    padding-left: 24px;
    padding-right: 35%;
  }
  .phn-hero-heading {
    font-size: 60px;
    line-height: 60px;
  }
  .phn-challenge-section {
    flex-direction: row;
    padding-top: 64px;
    padding-bottom: 96px;
    padding-left: 24px;
    padding-right: 24px;
    gap: 32px;
  }
  .phn-challenge-left {
    flex: 0 0 45%;
  }
  .phn-s3-inner {
    padding-left: 24px;
    padding-right: 24px;
  }
  .phn-s3-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
  .phn-bento-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 16px;
    padding-left: 24px;
    padding-right: 24px;
  }
  .phn-bento-large {
    grid-column: 1;
    grid-row: 1 / 3;
  }
  .phn-bento-top-right {
    grid-column: 2;
    grid-row: 1;
  }
  .phn-bento-mid-right {
    grid-column: 2;
    grid-row: 2;
  }
  .phn-bento-bottom {
    grid-column: 1 / 3;
    grid-row: 3;
  }
  .phn-cta-buttons {
    padding-top: 16px;
    display: flex;
    gap: 24px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* ── Tablet ── */
  @media (max-width: 1024px) {
    .phn-hero-section {
      padding-top: 120px;
      padding-bottom: 120px;
      padding-right: 10%;
    }
    .phn-hero-heading {
      font-size: 46px;
      line-height: 50px;
    }
    .phn-s3-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* ── Mobile ── */
  @media (max-width: 768px) {
    .phn-hero-section {
      padding-top: 80px;
      padding-bottom: 80px;
      padding-left: 20px;
      padding-right: 20px;
    }
    .phn-hero-heading {
      font-size: 34px;
      line-height: 40px;
    }
    .phn-challenge-section {
      flex-direction: column;
      padding-left: 20px;
      padding-right: 20px;
    }
    .phn-challenge-left {
      flex: none;
      width: 100%;
    }
    .phn-s3-inner {
      padding-left: 20px;
      padding-right: 20px;
    }
    .phn-s3-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .phn-bento-grid {
      grid-template-columns: 1fr;
      padding-left: 20px;
      padding-right: 20px;
    }
    .phn-bento-large {
      grid-column: 1;
      grid-row: auto;
    }
    .phn-bento-top-right {
      grid-column: 1;
      grid-row: auto;
    }
    .phn-bento-mid-right {
      grid-column: 1;
      grid-row: auto;
    }
    .phn-bento-bottom {
      grid-column: 1;
      grid-row: auto;
    }
    .phn-cta-buttons {
      flex-direction: column;
      align-items: stretch;
    }
  }
`

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'
const anim = (name, duration, delayMs, easing = EASE) =>
    `${name} ${duration} ${easing} ${delayMs}ms both`

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function PrivateHospitalNetworksPage() {
    const challengeRef    = useRef(null)
    const intelligenceRef = useRef(null)
    const bentoRef        = useRef(null)
    const ctaRef          = useRef(null)

    const [challengeVisible,    setChallengeVisible]    = useState(false)
    const [intelligenceVisible, setIntelligenceVisible] = useState(false)
    const [bentoVisible,        setBentoVisible]        = useState(false)
    const [ctaVisible,          setCtaVisible]          = useState(false)

    useEffect(() => {
        const pairs = [
            [challengeRef,    setChallengeVisible],
            [intelligenceRef, setIntelligenceVisible],
            [bentoRef,        setBentoVisible],
            [ctaRef,          setCtaVisible],
        ]
        const observers = pairs.map(([ref, setter]) => {
            if (!ref.current) return null
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) { setter(true); obs.disconnect() } },
                { threshold: 0.08 }
            )
            obs.observe(ref.current)
            return obs
        })
        return () => observers.forEach(o => o && o.disconnect())
    }, [])

    return (
        <PageLayout fullWidth={true}>
            <style>{PHN_KEYFRAMES}</style>

            {/* ── Hero Section ── */}
            <div
                className="phn-hero-section"
                style={{
                    width: '100%',
                    position: 'relative',
                    background: '#001736',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    boxSizing: 'border-box',
                }}
            >
                {/* Animated network grid overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
                    backgroundSize: '64px 64px',
                    animation: 'phn-grid-drift 18s linear infinite',
                    pointerEvents: 'none',
                    zIndex: 1,
                }} />

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
                        zIndex: 0,
                    }}
                />
                {/* Private.png overlay — right-anchored */}
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
                        zIndex: 2,
                        animation: anim('phn-site-reveal', '1.4s', 0, 'cubic-bezier(0.25,0.46,0.45,0.94)'),
                    }}
                />
                {/* Gradient — text legibility */}
                <div style={{
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    background: 'linear-gradient(90deg, #001736 0%, rgba(0,23,54,0.92) 45%, rgba(0,23,54,0.20) 75%, rgba(0,23,54,0) 100%)',
                    zIndex: 3,
                }} />

                {/* Text content */}
                <div style={{
                    position: 'relative',
                    zIndex: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 32,
                    maxWidth: 760,
                }}>
                    {/* Headline — network-align stagger */}
                    <div
                        className="phn-hero-heading"
                        style={{
                            color: 'white',
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 800,
                        }}
                    >
                        <div style={{ animation: anim('phn-network-align-1', '1.0s', 80), overflow: 'hidden' }}>
                            The ambition of a modern
                        </div>
                        <div style={{ animation: anim('phn-network-align-2', '1.0s', 180), overflow: 'hidden' }}>
                            hospital network requires
                        </div>
                        <div style={{ animation: anim('phn-network-align-3', '1.0s', 280), overflow: 'hidden' }}>
                            operating infrastructure
                        </div>
                        <div style={{ animation: anim('phn-network-align-4', '1.0s', 400), overflow: 'hidden' }}>
                            built to match it.
                        </div>
                    </div>

                    {/* Subheadline */}
                    <div style={{
                        maxWidth: 672,
                        color: '#7594CA',
                        fontSize: 20,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 300,
                        lineHeight: '28px',
                        animation: anim('phn-sub-fade', '0.9s', 540),
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
                        <button
                            className="phn-hero-btn phn-hero-btn-primary"
                            onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=Request Private Network Consultation'}
                            style={{
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
                                boxShadow: '0px 8px 10px -6px rgba(0,105,112,0.20), 0px 20px 25px -5px rgba(0,105,112,0.20)',
                                animation: anim('phn-button-rise', '0.8s', 680),
                            }}
                        >
                            Request Private Network Consultation
                        </button>
                        <button
                            className="phn-hero-btn phn-hero-btn-ghost"
                            onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=View Network Capabilities'}
                            style={{
                                paddingLeft: 32,
                                paddingRight: 32,
                                paddingTop: 16,
                                paddingBottom: 16,
                                borderRadius: 6,
                                border: '1px solid rgba(196,198,208,0.20)',
                                background: 'transparent',
                                cursor: 'pointer',
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                lineHeight: '24px',
                                animation: anim('phn-button-rise', '0.8s', 800),
                            }}
                        >
                            View Network Capabilities
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Challenge Section ── */}
            <div
                ref={challengeRef}
                className="phn-challenge-section"
                style={{
                    width: '100%',
                    background: '#F3F4F5',
                    display: 'flex',
                    alignItems: 'stretch',
                    boxSizing: 'border-box',
                }}
            >
                {/* LEFT COLUMN */}
                <div
                    className="phn-challenge-left"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24,
                        opacity: challengeVisible ? undefined : 0,
                        animation: challengeVisible ? anim('phn-module-enter-left', '1.0s', 0) : 'none',
                    }}
                >
                    {/* Label */}
                    <div style={{
                        display: 'inline-flex',
                        paddingLeft: 12, paddingRight: 12,
                        paddingTop: 4,   paddingBottom: 4,
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

                    <div style={{
                        color: '#001736',
                        fontSize: 36,
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 700,
                        lineHeight: '40px',
                    }}>
                        Complexity at Scale
                    </div>

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

                    {/* Sub-cards stagger */}
                    <div style={{ paddingTop: 8, display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <div
                            style={{
                                background: 'white',
                                boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
                                borderRadius: 8,
                                borderLeft: '2px solid #006970',
                                padding: '28px 34px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12,
                                opacity: challengeVisible ? undefined : 0,
                                animation: challengeVisible ? anim('phn-subcard-stagger', '0.8s', 200) : 'none',
                            }}
                        >
                            <PrivatecardIcon1 />
                            <div style={{ color: '#001736', fontSize: 16, fontFamily: 'Manrope, sans-serif', fontWeight: 700, lineHeight: '24px' }}>
                                Fragmented Data
                            </div>
                            <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '20px' }}>
                                Siloed systems across campuses lead to delayed decision-making
                                and redundant administrative labor.
                            </div>
                        </div>

                        <div
                            style={{
                                background: 'white',
                                boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
                                borderRadius: 8,
                                borderLeft: '2px solid #006970',
                                padding: '28px 34px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12,
                                opacity: challengeVisible ? undefined : 0,
                                animation: challengeVisible ? anim('phn-subcard-stagger', '0.8s', 340) : 'none',
                            }}
                        >
                            <PrivatecardIcon2 />
                            <div style={{ color: '#001736', fontSize: 16, fontFamily: 'Manrope, sans-serif', fontWeight: 700, lineHeight: '24px' }}>
                                Coordination Gap
                            </div>
                            <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '20px' }}>
                                Manual hand-offs between sites increase error rates and
                                reduce throughput efficiency.
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN — Operational Thesis */}
                <div
                    style={{
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
                        opacity: challengeVisible ? undefined : 0,
                        animation: challengeVisible ? anim('phn-module-enter-right', '1.0s', 80) : 'none',
                    }}
                >
                    {/* Subtle grid on dark card */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                        animation: 'phn-grid-drift 22s linear infinite',
                        pointerEvents: 'none',
                    }} />

                    <div style={{
                        paddingLeft: 12, paddingRight: 12,
                        paddingTop: 4,   paddingBottom: 4,
                        background: 'rgba(255,255,255,0.10)',
                        marginBottom: 24,
                        width: 'fit-content',
                        position: 'relative',
                        opacity: challengeVisible ? undefined : 0,
                        animation: challengeVisible ? anim('phn-sub-fade', '0.6s', 300) : 'none',
                    }}>
                        <span style={{ color: '#7594CA', fontSize: 12, fontFamily: 'Inter, sans-serif', fontWeight: 700, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.2 }}>
                            Our Thesis
                        </span>
                    </div>

                    <div style={{
                        color: 'white',
                        fontSize: 30,
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 700,
                        lineHeight: '36px',
                        marginBottom: 32,
                        position: 'relative',
                        opacity: challengeVisible ? undefined : 0,
                        animation: challengeVisible ? anim('phn-sub-fade', '0.7s', 380) : 'none',
                    }}>
                        Operational Thesis
                    </div>

                    <div style={{
                        color: '#7594CA',
                        fontSize: 18,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        lineHeight: '29.25px',
                        marginBottom: 32,
                        position: 'relative',
                        opacity: challengeVisible ? undefined : 0,
                        animation: challengeVisible ? anim('phn-sub-fade', '0.7s', 460) : 'none',
                    }}>
                        We don&apos;t impose a rigid workflow. The ETOH approach
                        begins by analyzing the institution&apos;s unique facility mix,
                        clinical model, and specific growth trajectory.
                    </div>

                    {/* Points — thesis-step-reveal */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, position: 'relative' }}>
                        {[
                            {
                                icon: <Layers size={20} color="#006970" strokeWidth={1.5} />,
                                title: 'Institutional Blueprinting',
                                desc: 'Aligning software architecture with regional hub-and-spoke models.',
                                delay: 560,
                            },
                            {
                                icon: <Activity size={20} color="#006970" strokeWidth={1.5} />,
                                title: 'Elastic Resource Allocation',
                                desc: 'Dynamically routing clinical resources based on real-time network load.',
                                delay: 680,
                            },
                        ].map(({ icon, title, desc, delay }) => (
                            <div
                                key={title}
                                style={{
                                    display: 'flex',
                                    gap: 16,
                                    alignItems: 'flex-start',
                                    opacity: challengeVisible ? undefined : 0,
                                    animation: challengeVisible ? anim('phn-thesis-step-reveal', '0.8s', delay) : 'none',
                                }}
                            >
                                <div style={{ flexShrink: 0, marginTop: 2 }}>{icon}</div>
                                <div>
                                    <div style={{ color: 'white', fontSize: 16, fontFamily: 'Inter, sans-serif', fontWeight: 600, lineHeight: '24px', marginBottom: 4 }}>
                                        {title}
                                    </div>
                                    <div style={{ color: '#7594CA', fontSize: 14, fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '20px' }}>
                                        {desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Section 3: Cross-Site Operational Intelligence ── */}
            <div
                ref={intelligenceRef}
                style={{ width: '100%', paddingTop: 128, paddingBottom: 128, background: 'white' }}
            >
                <div
                    className="phn-s3-inner"
                    style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 96 }}
                >
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
                            opacity: intelligenceVisible ? undefined : 0,
                            animation: intelligenceVisible ? anim('phn-eyebrow-fade', '0.6s', 0) : 'none',
                        }}>
                            System Architecture
                        </div>
                        <div style={{
                            color: '#001736',
                            fontSize: 48,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            lineHeight: '48px',
                            opacity: intelligenceVisible ? undefined : 0,
                            animation: intelligenceVisible ? anim('phn-headline-scan', '1.0s', 100, 'cubic-bezier(0.16,1,0.3,1)') : 'none',
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
                            opacity: intelligenceVisible ? undefined : 0,
                            animation: intelligenceVisible ? anim('phn-body-rise', '0.8s', 320) : 'none',
                        }}>
                            The network is your greatest asset. We transform disconnected hospitals into a singular, intelligent organism.
                        </div>
                    </div>

                    {/* 3-column cards */}
                    <div
                        className="phn-s3-grid"
                        style={{ display: 'grid', alignItems: 'start' }}
                    >
                        {[
                            {
                                img: private3,
                                imgAnim: 'phn-terminal-boot',
                                imgDuration: '1.0s',
                                title: 'Shared Clinical Standards',
                                desc: "Enforce uniform protocols across all facilities. Ensure that excellence isn't site-dependent, but an institutional constant.",
                                delay: 100,
                            },
                            {
                                img: private4,
                                imgAnim: 'phn-team-focus',
                                imgDuration: '1.1s',
                                title: 'Real-time Visibility',
                                desc: "A bird's-eye view of every bed, clinician, and surgical suite in your network. Predict bottlenecks before they impact care delivery.",
                                delay: 220,
                            },
                            {
                                img: private5,
                                imgAnim: 'phn-environment-scan',
                                imgDuration: '1.2s',
                                title: 'Seamless Transitions',
                                desc: 'Move patients between facilities without data friction. Comprehensive records, imaging, and logistics follow the patient automatically.',
                                delay: 340,
                            },
                        ].map(({ img, imgAnim, imgDuration, title, desc, delay }) => (
                            <div
                                key={title}
                                className="phn-s3-card-hover"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 0,
                                    opacity: intelligenceVisible ? undefined : 0,
                                    animation: intelligenceVisible ? anim('phn-network-card-wave', '1.0s', delay) : 'none',
                                }}
                            >
                                <div style={{ background: '#F3F4F5', borderRadius: 8, overflow: 'hidden', marginBottom: 24 }}>
                                    <img
                                        src={img}
                                        alt={title}
                                        style={{
                                            width: '100%',
                                            height: 213,
                                            objectFit: 'cover',
                                            display: 'block',
                                            animation: intelligenceVisible ? anim(imgAnim, imgDuration, delay + 60) : 'none',
                                        }}
                                    />
                                </div>
                                <div style={{ color: '#001736', fontSize: 24, fontFamily: 'Manrope, sans-serif', fontWeight: 700, lineHeight: '32px', marginBottom: 12 }}>
                                    {title}
                                </div>
                                <div style={{ color: '#43474F', fontSize: 16, fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '26px' }}>
                                    {desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Section 4: Bento Grid ── */}
            <div
                ref={bentoRef}
                style={{ width: '100%', paddingTop: 96, paddingBottom: 96, background: '#F3F4F5', boxSizing: 'border-box' }}
            >
                <div
                    className="phn-bento-grid"
                    style={{ display: 'grid' }}
                >
                    {/* Large left card — node activation */}
                    <div
                        className="phn-bento-card phn-bento-large"
                        style={{
                            padding: 48,
                            background: 'white',
                            boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
                            borderRadius: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            gap: 16,
                            opacity: bentoVisible ? undefined : 0,
                            animation: bentoVisible ? anim('phn-node-activation', '1.0s', 0) : 'none',
                        }}
                    >
                        <BarChart2 size={40} color="#006970" strokeWidth={1.5} />
                        <div style={{ color: '#001736', fontSize: 24, fontFamily: 'Manrope, sans-serif', fontWeight: 700, lineHeight: '32px' }}>
                            Predictive Load Balancing
                        </div>
                        <div style={{ color: '#43474F', fontSize: 16, fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '24px' }}>
                            Using proprietary algorithms to forecast admission spikes across the network up to 72 hours in advance.
                        </div>
                        {/* Animated teal line */}
                        <div style={{ height: 3, background: '#E7E8E9', borderRadius: 4, overflow: 'hidden', marginTop: 8 }}>
                            <div style={{
                                height: '100%',
                                background: '#006970',
                                borderRadius: 4,
                                width: bentoVisible ? '100%' : '0%',
                                animation: bentoVisible ? anim('phn-load-balance-fill', '1.4s', 500) : 'none',
                            }} />
                        </div>
                    </div>

                    {/* Top-right: Institutional Compliance */}
                    <div
                        className="phn-bento-card phn-bento-top-right"
                        style={{
                            padding: 32,
                            background: '#001736',
                            borderRadius: 16,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 24,
                            opacity: bentoVisible ? undefined : 0,
                            animation: bentoVisible ? anim('phn-node-activation', '1.0s', 120) : 'none',
                        }}
                    >
                        <ShieldCheck size={28} color="#006970" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <div style={{ color: 'white', fontSize: 16, fontFamily: 'Manrope, sans-serif', fontWeight: 700, lineHeight: '24px' }}>
                                Institutional Compliance
                            </div>
                            <div style={{ color: '#7594CA', fontSize: 14, fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '20px' }}>
                                Centralized auditing for network-wide regulatory adherence.
                            </div>
                        </div>
                    </div>

                    {/* Middle-right: two side-by-side */}
                    <div
                        className="phn-bento-mid-right"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 16,
                            opacity: bentoVisible ? undefined : 0,
                            animation: bentoVisible ? anim('phn-node-activation', '1.0s', 240) : 'none',
                        }}
                    >
                        {/* Unified Health Records */}
                        <div
                            className="phn-bento-card"
                            style={{
                                padding: 32,
                                background: '#E7E8E9',
                                borderRadius: 16,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: 24,
                                minHeight: 160,
                            }}
                        >
                            <Database size={22} color="#001736" strokeWidth={1.5} />
                            <div style={{ color: '#001736', fontSize: 16, fontFamily: 'Inter, sans-serif', fontWeight: 600, lineHeight: '20px' }}>
                                Unified Health Records
                            </div>
                        </div>

                        {/* Zero-Latency Sync — sync-pulse */}
                        <div
                            className="phn-bento-card"
                            style={{
                                padding: 32,
                                background: '#006970',
                                borderRadius: 16,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: 24,
                                minHeight: 160,
                                animation: bentoVisible ? `phn-node-activation 1.0s ${EASE} 360ms both, phn-sync-pulse-anim 1.8s ease-in-out 900ms both` : 'none',
                                opacity: bentoVisible ? undefined : 0,
                            }}
                        >
                            <Zap size={20} color="white" strokeWidth={1.5} />
                            <div style={{ color: 'white', fontSize: 16, fontFamily: 'Inter, sans-serif', fontWeight: 600, lineHeight: '20px' }}>
                                Zero-Latency Sync
                            </div>
                        </div>
                    </div>

                    {/* Bottom full-width: Partner Interoperability */}
                    <div
                        className="phn-bento-card phn-bento-bottom"
                        style={{
                            padding: 32,
                            background: 'white',
                            boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
                            borderRadius: 16,
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            overflow: 'hidden',
                            opacity: bentoVisible ? undefined : 0,
                            animation: bentoVisible ? anim('phn-node-activation', '1.0s', 480) : 'none',
                        }}
                    >
                        {/* Animated top border */}
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0,
                            height: 4,
                            background: '#006970',
                            borderRadius: '16px 16px 0 0',
                            width: bentoVisible ? '100%' : '0%',
                            animation: bentoVisible ? anim('phn-load-balance-fill', '1.4s', 700) : 'none',
                        }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <div style={{ color: '#001736', fontSize: 16, fontFamily: 'Manrope, sans-serif', fontWeight: 700, lineHeight: '24px' }}>
                                Partner Interoperability
                            </div>
                            <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '20px' }}>
                                Secure data bridges for third-party lab and pharmacy networks.
                            </div>
                        </div>
                        <Link2 size={28} color="#D9DADB" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                    </div>
                </div>
            </div>

            {/* ── Section 5: CTA ── */}
            <div
                ref={ctaRef}
                style={{ width: '100%', paddingTop: 128, paddingBottom: 128, position: 'relative', background: '#001736', overflow: 'hidden' }}
            >
                {/* Animated grid on CTA */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                    backgroundSize: '72px 72px',
                    animation: 'phn-grid-drift 24s linear infinite',
                    pointerEvents: 'none',
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />

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
                        opacity: ctaVisible ? undefined : 0,
                        animation: ctaVisible ? anim('phn-cta-heading-rise', '1.0s', 0) : 'none',
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
                        opacity: ctaVisible ? undefined : 0,
                        animation: ctaVisible ? anim('phn-body-rise', '0.9s', 140) : 'none',
                    }}>
                        Deployment details available to hospital leadership and institutional counterparties on request.
                    </div>

                    <div className="phn-cta-buttons">
                        <button
                            className="phn-cta-btn phn-cta-btn-primary"
                            onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=Request Private Network Consultation'}
                            style={{
                                paddingLeft: 40, paddingRight: 40,
                                paddingTop: 20,  paddingBottom: 20,
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
                                opacity: ctaVisible ? undefined : 0,
                                animation: ctaVisible ? anim('phn-cta-left', '0.9s', 260) : 'none',
                            }}
                        >
                            Request Private Network Consultation
                            <ArrowRight size={16} color="white" />
                        </button>
                        <button
                            className="phn-cta-btn phn-cta-btn-ghost"
                            onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=Speak with Deployment Team'}
                            style={{
                                paddingLeft: 40, paddingRight: 40,
                                paddingTop: 20,  paddingBottom: 20,
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: 6,
                                border: 'none',
                                cursor: 'pointer',
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                lineHeight: '24px',
                                opacity: ctaVisible ? undefined : 0,
                                animation: ctaVisible ? anim('phn-cta-right', '0.9s', 380) : 'none',
                            }}
                        >
                            Speak with our Deployment Team
                        </button>
                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
