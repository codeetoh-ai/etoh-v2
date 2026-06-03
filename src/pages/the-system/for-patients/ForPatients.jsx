import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PageLayout from '../../../components/PageLayout'
import { useResponsive } from '../../../hooks/useResponsive'

// Assets
import preAdmissionImg from './pre-admission/assets/hero.png'
import patientAppImg from './patient-app/section3.png'
import healthJourneyImg from './health-journey/section2.png'
import postDischargeImg from './post-discharge/hero.png'

const ease = [0.22, 1, 0.36, 1]
const sharpEase = [0.25, 0.46, 0.45, 0.94]

export default function ForPatientsPage() {
    const { isMobile } = useResponsive()

    // Refs
    const s1TextRef = useRef(null)
    const s1ImgRef = useRef(null)
    const s2Ref = useRef(null)
    const s3Ref = useRef(null)
    const s4Ref = useRef(null)

    // InView
    const s1TextInView = useInView(s1TextRef, { once: true, amount: 0.3 })
    const s1ImgInView = useInView(s1ImgRef, { once: true, amount: 0.2 })
    const s2InView = useInView(s2Ref, { once: true, amount: 0.15 })
    const s3InView = useInView(s3Ref, { once: true, amount: 0.15 })
    const s4InView = useInView(s4Ref, { once: true, amount: 0.15 })

    return (
        <PageLayout fullWidth={true} seoTitle="For Patients" seoDescription="ETOH Health's patient platform — pre-admission, patient app, health journey, and post-discharge continuity.">
            <style>{`
                @keyframes edgeGlow {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(150, 241, 250, 0); }
                    50%       { box-shadow: 0 0 18px 4px rgba(150, 241, 250, 0.18); }
                }
                .hover-raise {
                    transition: transform 0.18s ease, box-shadow 0.18s ease;
                }
                .hover-raise:hover {
                    transform: translateY(-4px);
                    box-shadow: 0px 20px 40px -8px rgba(0,0,0,0.12);
                }
                .glass-sweep {
                    position: relative;
                    overflow: hidden;
                }
                .glass-sweep::after {
                    content: '';
                    position: absolute;
                    top: 0; left: -100%;
                    width: 60%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
                    transition: left 0.5s ease;
                    pointer-events: none;
                }
                .glass-sweep:hover::after {
                    left: 140%;
                }
                .btn-press {
                    transition: transform 0.12s ease, opacity 0.12s ease;
                }
                .btn-press:hover {
                    transform: translateY(-2px);
                    opacity: 0.92;
                }
                .btn-press:active {
                    transform: translateY(0px) scale(0.98);
                }
            `}</style>

            {/* ── Section 1: Pre-Admission (Hero style) ── */}
            <div style={{
                width: '100%',
                paddingLeft: isMobile ? 20 : 32,
                paddingRight: isMobile ? 20 : 32,
                paddingTop: isMobile ? 80 : 128,
                paddingBottom: isMobile ? 64 : 128,
                position: 'relative',
                background: '#001736',
                overflow: 'hidden',
                boxSizing: 'border-box',
                display: 'flex',
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: 1216,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? 40 : 64,
                    alignItems: 'center',
                }}>
                    {/* Left: text content */}
                    <div ref={s1TextRef} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={s1TextInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, ease: sharpEase, delay: 0.1 }}
                            style={{
                                display: 'inline-flex',
                                padding: '4px 12px',
                                background: 'rgba(0, 105, 112, 0.20)',
                                borderRadius: 2,
                                width: 'fit-content',
                            }}>
                            <span style={{ color: '#96F1FA', fontSize: 10, fontFamily: 'Inter, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
                                Pre-Admission
                            </span>
                        </motion.div>

                        <div style={{ overflow: 'hidden' }}>
                            <motion.div
                                initial={{ y: 24, opacity: 0 }}
                                animate={s1TextInView ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.38, ease: sharpEase, delay: 0.2 }}
                                style={{ fontSize: isMobile ? 32 : 52, fontFamily: 'Manrope, sans-serif', fontWeight: 800, lineHeight: isMobile ? '40px' : '62px', color: 'white' }}
                            >
                                The hospital knows the patient before they arrive.
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={s1TextInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: sharpEase, delay: 0.4 }}
                            style={{ maxWidth: 512, color: '#7594CA', fontSize: isMobile ? 16 : 20, fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: isMobile ? '26px' : '32.5px' }}>
                            Before arrival, patients share relevant health history, prior investigations, and existing conditions through the ETOH patient app. Appointment scheduling, pre-procedure guidance, and intake documentation are completed digitally ahead of time. The care team is prepared from the moment the patient walks in. For patients returning for follow-up or managing chronic conditions, the clinical picture built across previous episodes carries forward automatically into every subsequent encounter.
                        </motion.div>
                    </div>

                    {/* Right: image card */}
                    <div ref={s1ImgRef} style={{ flex: '0 0 auto', width: isMobile ? '100%' : 540, position: 'relative' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 20 }}
                            animate={s1ImgInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease: ease, delay: 0.3 }}
                            style={{ height: 500, borderRadius: 16, overflow: 'hidden', boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)', outline: '1px rgba(255, 255, 255, 0.10) solid', outlineOffset: -1 }}
                        >
                            <img src={preAdmissionImg} alt="Pre-Admission" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── Section 2: The Patient App ── */}
            <div ref={s2Ref} style={{ width: '100%', padding: '96px 32px', background: '#F8F9FA', boxSizing: 'border-box' }}>
                <div style={{ maxWidth: 1216, margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column-reverse' : 'row', gap: 64, alignItems: 'center' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={s2InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, ease: ease }}
                            style={{ height: 500, borderRadius: 16, overflow: 'hidden', boxShadow: '0px 20px 40px -8px rgba(0,0,0,0.12)' }}
                        >
                            <img src={patientAppImg} alt="Patient App" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={s2InView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: sharpEase }}
                        >
                            <span style={{ color: '#006970', fontSize: 12, fontFamily: 'Inter, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>The Patient App</span>
                            <div style={{ marginTop: 12, color: '#001736', fontSize: 36, fontFamily: 'Manrope, sans-serif', fontWeight: 800, lineHeight: '44px' }}>
                                Your health, made visible and understandable.
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={s2InView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: sharpEase, delay: 0.1 }}
                            style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '30px' }}
                        >
                            The ETOH patient app gives patients and their families a clear, continuously updated view of their care. Investigation results are explained in plain language. Prescriptions are broken down for readability, with medication reminders built into daily routine. Upcoming tests come with preparation instructions and precaution guidance. Insurance billing is transparent and updated continuously during the stay. If a patient needs assistance, they can page a nurse directly from their own device.
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── Section 3: Your Health Journey & Digital Twin ── */}
            <div ref={s3Ref} style={{ width: '100%', padding: '96px 32px', background: '#FFFFFF', boxSizing: 'border-box' }}>
                <div style={{ maxWidth: 1216, margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 64, alignItems: 'center' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={s3InView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: sharpEase }}
                        >
                            <span style={{ color: '#006970', fontSize: 12, fontFamily: 'Inter, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>Your Health Journey & Digital Twin</span>
                            <div style={{ marginTop: 12, color: '#001736', fontSize: 36, fontFamily: 'Manrope, sans-serif', fontWeight: 800, lineHeight: '44px' }}>
                                A longitudinal picture of your health, built across every clinical interaction.
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={s3InView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: sharpEase, delay: 0.1 }}
                            style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '30px' }}
                        >
                            ETOH builds a longitudinal health record for each patient. By mapping diagnostic results, clinical interventions, and physiological trends over time, the platform constructs a working clinical twin. The patient can visualize their progress, understand how their condition is evolving, and see the tangible impact of their treatments. Care becomes a trajectory, not just an isolated event.
                        </motion.div>
                    </div>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={s3InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, ease: ease }}
                            style={{ height: 500, borderRadius: 16, overflow: 'hidden', boxShadow: '0px 20px 40px -8px rgba(0,0,0,0.12)' }}
                        >
                            <img src={healthJourneyImg} alt="Health Journey" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── Section 4: Post-Discharge & Continuity ── */}
            <div ref={s4Ref} style={{ width: '100%', padding: '96px 32px', background: '#001736', boxSizing: 'border-box' }}>
                <div style={{ maxWidth: 1216, margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column-reverse' : 'row', gap: 64, alignItems: 'center' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={s4InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, ease: ease }}
                            style={{ height: 500, borderRadius: 16, overflow: 'hidden', boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.40)' }}
                        >
                            <img src={postDischargeImg} alt="Post Discharge" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={s4InView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: sharpEase }}
                        >
                            <span style={{ color: '#96F1FA', fontSize: 12, fontFamily: 'Inter, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>Post-Discharge & Continuity</span>
                            <div style={{ marginTop: 12, color: 'white', fontSize: 36, fontFamily: 'Manrope, sans-serif', fontWeight: 800, lineHeight: '44px' }}>
                                Discharge is a transition. The care continues.
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={s4InView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: sharpEase, delay: 0.1 }}
                            style={{ color: '#7594CA', fontSize: 18, fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '30px' }}
                        >
                            Patients leaving a facility carry their care forward through the ETOH app. Post-discharge care plans are structured into daily tasks — wound care instructions, dietary adjustments, physiotherapy routines. For complex conditions, patients can sync biometric devices, allowing the hospital's clinical team to monitor their recovery remotely. Deterioration flags remain active; if a patient's home vitals become unstable, the platform surfaces the risk to a clinician, intervening before readmission becomes necessary.
                        </motion.div>
                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
