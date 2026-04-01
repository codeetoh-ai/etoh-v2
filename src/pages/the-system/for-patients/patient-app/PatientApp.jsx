import { useState, useEffect, useRef } from 'react'
import PageLayout from '../../../../components/PageLayout'
import clinicalImg from './section3.png'
import doctor1 from '../pre-admission/assets/doctor1.png'
import doctor2 from '../pre-admission/assets/doctor2.png'
import doctor3 from '../pre-admission/assets/doctor3.png'

const careTeam = [
    { name: 'Dr. Julian Vane', role: 'Lead Internist', img: doctor1 },
    { name: 'Elena Russo, RN', role: 'Primary Nurse', img: doctor2 },
    { name: 'Dr. Marcus Thorne', role: 'Radiologist', img: doctor3 },
]

const schedule = [
    { time: '02:00', period: 'PM', title: 'Medication Review', desc: 'Pharmacy will deliver the updated stabilization dosage. Elena will assist with administration.', active: true },
    { time: '06:00', period: 'PM', title: 'Vitals Check-In', desc: 'A routine measurement of blood pressure and temperature to track progress.', active: false },
    { time: '09:00', period: 'AM', title: 'Consultation with Dr. Vane', desc: 'Morning rounds to discuss potential discharge timeline and home-care plan.', active: false },
]

const KF = `
  @keyframes pa-clarity-reveal {
    from { opacity: 0; transform: translateY(24px); filter: blur(8px); }
    to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
  }
  @keyframes pa-meaning-highlight {
    0%,100% { color: #006970; }
    50%     { color: #00b8c4; text-shadow: 0 0 20px rgba(0,184,196,0.45); }
  }
  @keyframes pa-fade-up {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pa-location-slide {
    from { opacity: 0; transform: translateX(30px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes pa-line-grow {
    from { transform: scaleY(0); }
    to   { transform: scaleY(1); }
  }
  @keyframes pa-journey-trace {
    from { transform: scaleY(0); }
    to   { transform: scaleY(1); }
  }
  @keyframes pa-step-reveal {
    from { opacity: 0; transform: translateX(-16px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes pa-active-step-focus {
    from { opacity: 0; transform: scale(0.97); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes pa-active-dot-expand {
    from { transform: scale(0.6); opacity: 0; }
    to   { transform: scale(1); opacity: 1; }
  }
  @keyframes pa-inprogress-label {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* ── care-journey-progress ── */
  @keyframes cj-complete-dot {
    0%   { transform: scale(1); background: #006970; }
    40%  { transform: scale(1.12); background: #005860; }
    100% { transform: scale(0.9); background: #005860; }
  }
  @keyframes cj-check-in {
    from { opacity: 0; transform: scale(0.5); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes cj-line-fill {
    from { transform: scaleY(0); }
    to   { transform: scaleY(1); }
  }
  @keyframes cj-step2-activate {
    0%   { transform: scale(0.92); box-shadow: none; }
    60%  { transform: scale(1.02); box-shadow: 0 0 0 6px rgba(0,105,112,0.15); }
    100% { transform: scale(1);    box-shadow: 0 0 0 4px rgba(0,105,112,0.10); }
  }
  @keyframes cj-dot2-expand {
    0%   { transform: scale(0.6); }
    65%  { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
  @keyframes cj-glow-ring {
    0%   { box-shadow: 0 0 0 0   rgba(0,105,112,0.5); }
    60%  { box-shadow: 0 0 0 8px rgba(0,105,112,0.15); }
    100% { box-shadow: 0 0 0 4px rgba(0,105,112,0.20); }
  }
  @keyframes pa-team-row {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pa-avatar-pop {
    from { opacity: 0; transform: scale(0.8); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes pa-translate-left {
    from { opacity: 0; transform: translateX(-24px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes pa-translate-right {
    from { opacity: 0; transform: translateX(24px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes pa-divider-grow {
    from { transform: scaleY(0); }
    to   { transform: scaleY(1); }
  }
  @keyframes pa-text-stagger {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pa-card-fade-in {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pa-neural-pulse {
    0%,100% { opacity: 0.6; }
    50%     { opacity: 1; filter: brightness(1.15); }
  }
  @keyframes pa-progress-fill {
    from { width: 0%; }
    to   { width: 94%; }
  }
  @keyframes pa-button-rise {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pa-timeline-row {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pa-schedule-line {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }

  .pa-soft-hover {
    transition: transform 0.22s ease, box-shadow 0.22s ease;
  }
  .pa-soft-hover:hover {
    transform: translateY(-3px) !important;
    box-shadow: 0 10px 28px rgba(0,0,0,0.10) !important;
  }
  .pa-timeline-step-hover {
    transition: box-shadow 0.2s ease;
  }
  .pa-timeline-step-hover:hover {
    box-shadow: 0 0 0 2px rgba(0,105,112,0.25), 0 2px 8px rgba(0,0,0,0.08) !important;
  }
  .pa-btn-hover {
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
  .pa-btn-hover:hover {
    opacity: 0.88;
    transform: translateY(-1px);
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

export default function PatientAppPage() {
    const [journeyRef, journeyVisible] = useVisible(0.2)
    const [teamRef, teamVisible] = useVisible(0.2)
    const [diagRef, diagVisible] = useVisible(0.2)
    const [clinicalRef, clinicalVisible] = useVisible(0.3)
    const [scheduleRef, scheduleVisible] = useVisible(0.2)
    const [confidence, setConfidence] = useState(0)
    // 0 = not started, 1 = step1 active, 2 = step1 completing + line fills, 3 = step2 active
    const [journeyPhase, setJourneyPhase] = useState(0)

    // Sequence the care-journey-progress stepper
    useEffect(() => {
        if (!journeyVisible) return
        setJourneyPhase(1)
        const t1 = setTimeout(() => setJourneyPhase(2), 900)   // step 1 completes, line fills
        const t2 = setTimeout(() => setJourneyPhase(3), 1600)  // step 2 activates
        return () => { clearTimeout(t1); clearTimeout(t2) }
    }, [journeyVisible])

    // Count up confidence % when clinical section enters view
    useEffect(() => {
        if (!clinicalVisible) return
        let count = 0
        const id = setInterval(() => {
            count += 2
            if (count >= 94) { setConfidence(94); clearInterval(id) }
            else setConfidence(count)
        }, 18)
        return () => clearInterval(id)
    }, [clinicalVisible])

    return (
        <PageLayout fullWidth lightHero>
            <style>{KF}</style>
            <div style={{ background: 'white', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
                <div style={{ maxWidth: 1184, margin: '0 auto', padding: '64px 24px 80px' }}>

                    {/* ── Hero ── */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32, marginBottom: 48, flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: 280 }}>
                            {/* Heading — two lines revealed separately */}
                            <h1 style={{
                                fontFamily: "'Manrope', sans-serif",
                                fontWeight: 800,
                                fontSize: 72,
                                lineHeight: '80px',
                                color: '#001736',
                                margin: '0 0 24px',
                            }}>
                                <div style={{ animation: a('pa-clarity-reveal', '0.75s', 0) }}>
                                    Your care,{' '}
                                    <span style={{
                                        color: '#006970',
                                        display: 'inline-block',
                                        animation: a('pa-meaning-highlight', '1.2s', 850, 'ease-in-out'),
                                    }}>
                                        made visible.
                                    </span>
                                </div>
                                <div style={{ animation: a('pa-clarity-reveal', '0.75s', 150) }}>
                                    Your health,{' '}
                                    <span style={{
                                        color: '#006970',
                                        display: 'inline-block',
                                        animation: a('pa-meaning-highlight', '1.2s', 1000, 'ease-in-out'),
                                    }}>
                                        made understandable.
                                    </span>
                                </div>
                            </h1>
                            <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 300,
                                fontSize: 20,
                                lineHeight: '32.5px',
                                color: '#43474F',
                                maxWidth: 636,
                                margin: 0,
                                animation: a('pa-fade-up', '0.65s', 420),
                            }}>
                                A hospital admission involves hundreds of decisions made about the{' '}
                                patient. ETOH ensures the patient is never outside of it.
                            </p>
                        </div>

                        {/* Location badge */}
                        <div style={{
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'stretch',
                            gap: 0,
                            alignSelf: 'flex-end',
                            animation: a('pa-location-slide', '0.6s', 600),
                        }}>
                            {/* Teal line — grows first */}
                            <div style={{
                                width: 4,
                                background: '#006970',
                                borderRadius: '4px 0 0 4px',
                                transformOrigin: 'top',
                                animation: a('pa-line-grow', '0.5s', 500),
                            }} />
                            <div style={{
                                padding: '16px 24px',
                                background: '#F3F4F5',
                                borderRadius: '0 8px 8px 0',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 4,
                            }}>
                                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.8, textTransform: 'uppercase', color: '#006970' }}>
                                    Current Location
                                </div>
                                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 18, lineHeight: '28px', color: '#001736' }}>
                                    Observation Room 63
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── 2-column grid ── */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 24, alignItems: 'start' }}>

                        {/* ── LEFT COLUMN ── */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

                            {/* Care Journey */}
                            <div
                                ref={journeyRef}
                                className="pa-soft-hover"
                                style={{ padding: 32, background: '#F3F4F5', borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 40, position: 'relative' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#001736' }}>
                                        The Care Journey
                                    </div>
                                    <div style={{ padding: '4px 12px', background: '#006970', borderRadius: 12, fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 0.6, textTransform: 'uppercase', color: 'white' }}>
                                        Live Path
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 32 }}>

                                    {/* Track line — always visible light gray */}
                                    <div style={{
                                        position: 'absolute', left: 11, top: 16,
                                        width: 2, height: 216,
                                        background: 'rgba(196,198,208,0.25)',
                                    }} />

                                    {/* Fill line — grows top→bottom when step 1 completes (phase ≥ 2) */}
                                    <div style={{
                                        position: 'absolute', left: 11, top: 16,
                                        width: 2, height: 100,
                                        background: '#006970',
                                        transformOrigin: 'top',
                                        transform: journeyPhase >= 2 ? 'scaleY(1)' : 'scaleY(0)',
                                        transition: journeyPhase >= 2 ? 'transform 0.55s cubic-bezier(0.4,0,0.2,1)' : 'none',
                                    }} />

                                    {/* ── Step 1 ── */}
                                    <div style={{
                                        display: 'flex', alignItems: 'flex-start', gap: 24,
                                        opacity: journeyPhase >= 1 ? 1 : 0,
                                        transform: journeyPhase >= 1 ? 'translateX(0)' : 'translateX(-16px)',
                                        transition: 'opacity 0.55s ease, transform 0.55s ease',
                                    }}>
                                        <div style={{ paddingTop: 4, flexShrink: 0 }}>
                                            {/* Dot: active (phase 1) → completed (phase ≥ 2) */}
                                            <div style={{
                                                width: 24, height: 24,
                                                borderRadius: '50%',
                                                background: journeyPhase >= 2 ? '#005860' : '#006970',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                transform: journeyPhase >= 2 ? 'scale(0.9)' : 'scale(1)',
                                                transition: 'transform 0.3s cubic-bezier(0.34,1.4,0.64,1), background 0.25s ease',
                                            }}>
                                                {/* Checkmark — pops in at phase 2 */}
                                                <svg
                                                    width="10" height="8" viewBox="0 0 10 8" fill="none"
                                                    style={{
                                                        opacity: journeyPhase >= 2 ? 1 : 0,
                                                        transform: journeyPhase >= 2 ? 'scale(1)' : 'scale(0.5)',
                                                        transition: 'opacity 0.25s ease 0.05s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1) 0.05s',
                                                    }}
                                                >
                                                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#001736', marginBottom: 4 }}>
                                                Admission &amp; Triage
                                            </div>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F' }}>
                                                Initial assessment completed at 08:45 AM. Dr. Aris confirmed clinical stability.
                                            </div>
                                        </div>
                                    </div>

                                    {/* ── Step 2 ── */}
                                    <div
                                        className="pa-timeline-step-hover"
                                        style={{
                                            padding: 20, marginLeft: -20,
                                            background: 'white',
                                            borderRadius: 8,
                                            borderLeft: '4px solid #006970',
                                            display: 'flex', alignItems: 'flex-start', gap: 24,
                                            // Phase 3: card activates with expand + glow
                                            boxShadow: journeyPhase >= 3
                                                ? '0 0 0 4px rgba(0,105,112,0.12), 0px 2px 8px rgba(0,0,0,0.06)'
                                                : '0px 1px 2px rgba(0,0,0,0.05)',
                                            transform: journeyPhase >= 3 ? 'scale(1)' : journeyPhase >= 1 ? 'scale(0.97)' : 'scale(0.94)',
                                            opacity: journeyPhase >= 1 ? 1 : 0,
                                            transition: journeyPhase >= 3
                                                ? 'transform 0.45s cubic-bezier(0.34,1.2,0.64,1), box-shadow 0.45s ease, opacity 0.4s ease'
                                                : 'transform 0.4s ease, opacity 0.4s ease',
                                        }}
                                    >
                                        <div style={{ paddingTop: 4, flexShrink: 0 }}>
                                            <div style={{ position: 'relative', width: 24, height: 24 }}>
                                                {/* Dot — expands when step 2 activates (phase 3) */}
                                                <div style={{
                                                    width: 24, height: 24,
                                                    background: '#006970', borderRadius: '50%',
                                                    position: 'absolute',
                                                    transform: journeyPhase >= 3 ? 'scale(1)' : 'scale(0.6)',
                                                    transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                                                }} />
                                                {/* Glow ring — appears at phase 3 */}
                                                <div style={{
                                                    position: 'absolute', inset: 0, borderRadius: '50%',
                                                    boxShadow: journeyPhase >= 3
                                                        ? '0 0 0 5px rgba(0,105,112,0.20)'
                                                        : '0 0 0 0px rgba(0,105,112,0)',
                                                    transition: 'box-shadow 0.5s ease 0.1s',
                                                }} />
                                            </div>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                                                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#001736' }}>
                                                    Diagnostic Phase
                                                </div>
                                                {/* "In Progress" fades in when step 2 activates */}
                                                <div style={{
                                                    fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 10,
                                                    lineHeight: '15px', letterSpacing: 1, textTransform: 'uppercase', color: '#006970',
                                                    opacity: journeyPhase >= 3 ? 1 : 0,
                                                    transition: 'opacity 0.4s ease 0.2s',
                                                }}>
                                                    In Progress
                                                </div>
                                            </div>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F' }}>
                                                Blood panel results analyzed. Translating technical findings for your review.
                                            </div>
                                        </div>
                                    </div>

                                    {/* ── Step 3 — Pending ── */}
                                    <div style={{
                                        display: 'flex', alignItems: 'flex-start', gap: 24,
                                        opacity: journeyPhase >= 1 ? 0.45 : 0,
                                        transform: journeyPhase >= 1 ? 'translateX(0)' : 'translateX(-16px)',
                                        transition: 'opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s',
                                    }}>
                                        <div style={{ paddingTop: 4, flexShrink: 0 }}>
                                            <div style={{ width: 24, height: 24, background: '#F8F9FA', borderRadius: '50%', border: '2px solid #C4C6D0' }} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#001736', marginBottom: 4 }}>
                                                Stabilization Protocol
                                            </div>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F' }}>
                                                Expected to begin once vitals trend remains consistent for 4 hours.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Diagnostic Translation */}
                            <div
                                ref={diagRef}
                                style={{ padding: 32, background: '#F3F4F5', borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 32 }}
                            >
                                <div style={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    opacity: diagVisible ? undefined : 0,
                                    animation: diagVisible ? a('pa-fade-up', '0.5s', 0) : 'none',
                                }}>
                                    <div>
                                        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#001736', marginBottom: 4 }}>
                                            Diagnostic Translation
                                        </div>
                                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F' }}>
                                            Medical data converted to clear, understandable language.
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        {['Hematology', 'Vitals'].map((tag) => (
                                            <div key={tag} style={{ padding: '8px 16px', background: 'white', borderRadius: 12, outline: '1px solid rgba(196,198,208,0.20)', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', color: '#191C1D' }}>
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                    {/* WBC — translate-left */}
                                    <div
                                        className="pa-soft-hover"
                                        style={{
                                            padding: 24, background: 'white',
                                            boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
                                            borderRadius: 8,
                                            borderLeft: '4px solid #006970',
                                            display: 'flex', flexDirection: 'column', gap: 16,
                                            position: 'relative', overflow: 'hidden',
                                            opacity: diagVisible ? undefined : 0,
                                            animation: diagVisible ? a('pa-translate-left', '0.65s', 120) : 'none',
                                        }}
                                    >
                                        {/* Animated left divider */}
                                        <div style={{
                                            position: 'absolute', left: 0, top: 0, bottom: 0, width: 4,
                                            background: '#006970',
                                            transformOrigin: 'top',
                                            transform: diagVisible ? undefined : 'scaleY(0)',
                                            animation: diagVisible ? a('pa-divider-grow', '0.5s', 300) : 'none',
                                        }} />
                                        <div style={{
                                            display: 'flex', alignItems: 'center', gap: 12,
                                            opacity: diagVisible ? undefined : 0,
                                            animation: diagVisible ? a('pa-text-stagger', '0.4s', 350) : 'none',
                                        }}>
                                            <svg width="14" height="19" viewBox="0 0 14 19" fill="none">
                                                <path d="M7 0C7 0 0 7.5 0 12a7 7 0 0014 0C14 7.5 7 0 7 0z" fill="#006970" />
                                            </svg>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#43474F' }}>
                                                White Blood Count
                                            </div>
                                        </div>
                                        <p style={{
                                            fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 16, lineHeight: '26px', color: '#001736', margin: 0,
                                            opacity: diagVisible ? undefined : 0,
                                            animation: diagVisible ? a('pa-text-stagger', '0.4s', 440) : 'none',
                                        }}>
                                            Your body's defense system is currently slightly elevated (11.2 K/uL). This is a normal response as your body fights the localized inflammation we discussed.
                                        </p>
                                    </div>
                                    {/* O2 — translate-right */}
                                    <div
                                        className="pa-soft-hover"
                                        style={{
                                            padding: 24, background: 'white',
                                            boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
                                            borderRadius: 8,
                                            borderLeft: '4px solid #006970',
                                            display: 'flex', flexDirection: 'column', gap: 16,
                                            opacity: diagVisible ? undefined : 0,
                                            animation: diagVisible ? a('pa-translate-right', '0.65s', 200) : 'none',
                                        }}
                                    >
                                        <div style={{
                                            display: 'flex', alignItems: 'center', gap: 12,
                                            opacity: diagVisible ? undefined : 0,
                                            animation: diagVisible ? a('pa-text-stagger', '0.4s', 450) : 'none',
                                        }}>
                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                                                <path d="M10 0C4.477 0 0 3.582 0 8s4.477 8 10 8 10-3.582 10-8-4.477-8-10-8z" fill="#006970" />
                                            </svg>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#43474F' }}>
                                                Oxygen Saturation
                                            </div>
                                        </div>
                                        <p style={{
                                            fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 16, lineHeight: '26px', color: '#001736', margin: 0,
                                            opacity: diagVisible ? undefined : 0,
                                            animation: diagVisible ? a('pa-text-stagger', '0.4s', 540) : 'none',
                                        }}>
                                            Your oxygen levels are holding steady at 98% on room air. This indicates your lungs are functioning exceptionally well during recovery.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Next 24 Hours */}
                            <div
                                ref={scheduleRef}
                                className="pa-soft-hover"
                                style={{ padding: 32, background: '#F3F4F5', borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 32 }}
                            >
                                <div style={{
                                    fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#001736',
                                    opacity: scheduleVisible ? undefined : 0,
                                    animation: scheduleVisible ? a('pa-fade-up', '0.5s', 0) : 'none',
                                }}>
                                    The Next 24 Hours
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                    {schedule.map((item, i) => (
                                        <div key={i}>
                                            <div
                                                style={{
                                                    display: 'flex', alignItems: 'flex-start', gap: 24,
                                                    paddingBottom: i < schedule.length - 1 ? 24 : 0,
                                                    opacity: scheduleVisible ? undefined : 0,
                                                    animation: scheduleVisible ? a('pa-timeline-row', '0.5s', i * 100 + 80) : 'none',
                                                }}
                                            >
                                                <div style={{ width: 64, flexShrink: 0, textAlign: 'right' }}>
                                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 14, lineHeight: '20px', color: item.active ? '#006970' : '#43474F' }}>
                                                        {item.time}<br />{item.period}
                                                    </div>
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#001736', marginBottom: 4 }}>
                                                        {item.title}
                                                    </div>
                                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F' }}>
                                                        {item.desc}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Schedule divider — draws across */}
                                            {i < schedule.length - 1 && (
                                                <div style={{
                                                    height: 1,
                                                    background: 'rgba(196,198,208,0.20)',
                                                    marginBottom: 24,
                                                    transformOrigin: 'left',
                                                    transform: scheduleVisible ? undefined : 'scaleX(0)',
                                                    animation: scheduleVisible ? a('pa-schedule-line', '0.5s', i * 100 + 180) : 'none',
                                                }} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>{/* end LEFT COLUMN */}

                        {/* ── RIGHT COLUMN ── */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

                            {/* Care Team */}
                            <div
                                ref={teamRef}
                                className="pa-soft-hover"
                                style={{ padding: 32, background: 'white', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: 16, outline: '1px solid rgba(196,198,208,0.10)' }}
                            >
                                <div style={{
                                    fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#001736', marginBottom: 32,
                                    opacity: teamVisible ? undefined : 0,
                                    animation: teamVisible ? a('pa-fade-up', '0.5s', 0) : 'none',
                                }}>
                                    Your Care Team
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 32 }}>
                                    {careTeam.map((member, i) => (
                                        <div
                                            key={member.name}
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: 16,
                                                opacity: teamVisible ? undefined : 0,
                                                animation: teamVisible ? a('pa-team-row', '0.5s', i * 100 + 80) : 'none',
                                            }}
                                        >
                                            <img
                                                src={member.img}
                                                alt={member.name}
                                                style={{
                                                    width: 56, height: 56, borderRadius: 12,
                                                    flexShrink: 0, objectFit: 'cover', objectPosition: 'center top',
                                                    opacity: teamVisible ? undefined : 0,
                                                    animation: teamVisible ? a('pa-avatar-pop', '0.45s', i * 100 + 100, 'cubic-bezier(0.34,1.4,0.64,1)') : 'none',
                                                }}
                                            />
                                            <div>
                                                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '20px', color: '#001736' }}>
                                                    {member.name}
                                                </div>
                                                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 0.3, textTransform: 'uppercase', color: '#006970', marginTop: 2 }}>
                                                    {member.role}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ borderTop: '1px solid rgba(196,198,208,0.10)', paddingTop: 32 }}>
                                    <button
                                        className="pa-btn-hover"
                                        onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=Contact Specialist'}
                                        style={{
                                            width: '100%', padding: '16px', background: '#001736',
                                            borderRadius: 8, border: 'none', cursor: 'pointer',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                                            opacity: teamVisible ? undefined : 0,
                                            animation: teamVisible ? a('pa-button-rise', '0.5s', 420) : 'none',
                                        }}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M14 10.667c0 .266-.059.525-.173.778a2.04 2.04 0 01-.493.689c-.378.355-.789.525-1.223.525-.311 0-.645-.074-.993-.229a9.917 9.917 0 01-1.007-.533 15.56 15.56 0 01-.963-.74 15.368 15.368 0 01-.918-.933 15.52 15.52 0 01-.741-.963c-.23-.333-.43-.666-.578-.992C6.767 7.822 6.7 7.489 6.7 7.17c0-.311.066-.608.2-.882.133-.281.333-.54.607-.763.33-.267.688-.393 1.07-.393.148 0 .296.03.43.089.14.059.266.148.37.281l1.274 1.793c.104.14.178.274.23.4.052.118.081.237.081.348 0 .14-.037.281-.111.415a1.908 1.908 0 01-.296.393l-.4.415c-.059.059-.082.125-.082.207 0 .044.007.082.022.126.022.044.044.081.059.118.104.192.282.44.533.74.26.3.534.607.83.907.303.3.6.578.908.837.3.252.548.422.748.526.03.014.067.03.11.044.045.015.09.022.134.022.09 0 .156-.03.215-.089l.4-.392c.126-.126.26-.222.386-.289.126-.066.252-.103.393-.103.11 0 .222.022.348.074.126.052.26.126.4.23l1.815 1.289c.133.096.222.214.274.348.044.133.073.267.073.407z" fill="white" />
                                        </svg>
                                        <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: '20px', letterSpacing: 0.35, color: 'white' }}>
                                            Contact Specialist
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Clinical Prediction */}
                            <div
                                ref={clinicalRef}
                                style={{
                                    background: '#001736',
                                    boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
                                    borderRadius: 16,
                                    overflow: 'hidden',
                                    opacity: clinicalVisible ? undefined : 0,
                                    animation: clinicalVisible ? a('pa-card-fade-in', '0.7s', 0) : 'none',
                                }}
                            >
                                <div style={{ position: 'relative', height: 192 }}>
                                    <img
                                        src={clinicalImg}
                                        alt="Clinical Prediction"
                                        style={{
                                            width: '100%', height: '100%', objectFit: 'cover',
                                            opacity: 0.6,
                                            animation: clinicalVisible ? 'pa-neural-pulse 3.5s ease-in-out 1s infinite' : 'none',
                                        }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, #001736 0%, rgba(0,23,54,0.40) 50%, rgba(0,23,54,0) 100%)' }} />
                                    <div style={{ position: 'absolute', left: 24, bottom: 24 }}>
                                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 10, lineHeight: '15px', letterSpacing: 2, textTransform: 'uppercase', color: '#2DD4BF', marginBottom: 2 }}>
                                            Predictive Modeling
                                        </div>
                                        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: '28px', color: 'white' }}>
                                            Clinical Prediction
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: '30px 32px 32px', display: 'flex', flexDirection: 'column', gap: 24 }}>
                                    <p style={{
                                        fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '22.75px', color: '#7594CA', margin: 0,
                                        opacity: clinicalVisible ? undefined : 0,
                                        animation: clinicalVisible ? a('pa-fade-up', '0.5s', 200) : 'none',
                                    }}>
                                        Your Digital Twin indicates a {confidence}% probability of recovery acceleration if hydration levels are maintained above 2.5L today.
                                    </p>
                                    <div style={{
                                        opacity: clinicalVisible ? undefined : 0,
                                        animation: clinicalVisible ? a('pa-fade-up', '0.5s', 320) : 'none',
                                    }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                                            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: 'rgba(117,148,202,0.80)' }}>
                                                Recovery Confidence
                                            </span>
                                            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#2DD4BF' }}>
                                                High
                                            </span>
                                        </div>
                                        <div style={{ height: 4, background: '#002B5B', borderRadius: 12, overflow: 'hidden' }}>
                                            <div style={{
                                                width: `${confidence}%`,
                                                height: '100%',
                                                background: '#2DD4BF',
                                                transition: 'width 0.05s linear',
                                            }} />
                                        </div>
                                    </div>
                                    <button
                                        className="pa-btn-hover"
                                        onClick={() => window.location.href = 'mailto:codeetoh@gmail.com?subject=Explore Detailed Model'}
                                        style={{
                                            width: '100%', padding: '16px', background: 'white',
                                            borderRadius: 4, border: 'none', cursor: 'pointer',
                                            fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 12,
                                            lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#001736',
                                            opacity: clinicalVisible ? undefined : 0,
                                            animation: clinicalVisible ? a('pa-button-rise', '0.5s', 600) : 'none',
                                        }}
                                    >
                                        Explore Detailed Model
                                    </button>
                                </div>
                            </div>

                        </div>{/* end RIGHT COLUMN */}

                    </div>{/* end 2-column grid */}

                </div>
            </div>
        </PageLayout>
    )
}
