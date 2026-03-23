import React from 'react'
import PageLayout from '../../../components/PageLayout'
import Howwework1 from '../../../assets/Howwework1.png'
import Howwework2 from '../../../assets/Howwework2.png'
import Howwework3 from '../../../assets/Howwework3.png'
import Howwework4 from '../../../assets/Howwework4.png'
import Howwework5 from '../../../assets/Howwework5.png'
import { useResponsive } from '../../../hooks/useResponsive'

export default function HowWeWorkPage() {
    const { isMobile, isTablet } = useResponsive()
    const compact = isMobile || isTablet
    const px = isMobile ? 16 : 32

    return (
        <PageLayout title="How We Work" fullWidth={true}>
            {/* Section 1: Hero - A platform in three dimensions */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 128, paddingBottom: isMobile ? 64 : 128, background: '#F8F9FA', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: compact ? 'column' : 'row', alignItems: 'flex-start', gap: compact ? 40 : 64 }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, width: '100%' }}>
                        <div style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: '#E7E8E9', borderRadius: 12, display: 'inline-flex' }}>
                            <div style={{ color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1 }}>Methodology</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: '#001736', fontSize: isMobile ? 40 : isTablet ? 56 : 72, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '44px' : isTablet ? '60px' : '72px', wordWrap: 'break-word' }}>A platform in </span>
                            <span style={{ color: '#006970', fontSize: isMobile ? 40 : isTablet ? 56 : 72, fontFamily: 'Manrope', fontWeight: 800, wordWrap: 'break-word' }}>three<br />dimensions.</span>
                            <span style={{ color: '#001736', fontSize: isMobile ? 40 : isTablet ? 56 : 72, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '44px' : isTablet ? '60px' : '72px', wordWrap: 'break-word' }}> One<br />system in practice.</span>
                        </div>
                        <div style={{ maxWidth: 672, paddingTop: 8 }}>
                            <div style={{ color: '#43474F', fontSize: isMobile ? 16 : 20, fontFamily: 'Inter', fontWeight: 400, lineHeight: isMobile ? '26px' : '32.5px', wordWrap: 'break-word' }}>
                                These layers are not three products. They are one platform, built around a shared clinical record that is live, complete, and accessible to every part of the care team at once.
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <div style={{ width: '100%', maxWidth: 510, aspectRatio: '1', position: 'absolute', left: -16, top: -16, background: 'linear-gradient(45deg, rgba(0, 105, 112, 0.10) 0%, rgba(0, 105, 112, 0) 100%)', borderRadius: 12, filter: 'blur(20px)' }} />
                        <img style={{ width: '100%', position: 'relative', boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)', borderRadius: 8 }} src={Howwework1} alt="Platform in three dimensions" />
                    </div>
                </div>
            </div>

            {/* Section 2: Precision at every touchpoint + 3 Layers */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 48 : 96, paddingBottom: isMobile ? 48 : 96, background: '#F3F4F5', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: 'column', gap: isMobile ? 40 : 80 }}>
                    {/* Header row */}
                    <div style={{ display: 'flex', flexDirection: compact ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: compact ? 24 : 0 }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ color: '#001736', fontSize: isMobile ? 28 : 36, fontFamily: 'Manrope', fontWeight: 700, lineHeight: isMobile ? '34px' : '40px' }}>Precision at every<br />touchpoint.</div>
                        </div>
                        <div style={{ maxWidth: compact ? '100%' : 448, paddingLeft: compact ? 0 : 24, borderLeft: compact ? 'none' : '2px solid #006970', borderTop: compact ? '2px solid #006970' : 'none', paddingTop: compact ? 16 : 0 }}>
                            <div style={{ color: '#43474F', fontSize: isMobile ? 14 : 16, fontFamily: 'Inter', fontWeight: 400, lineHeight: '24px' }}>
                                We architected ETOH to solve the fragmentation problem. Instead of silos, we provide a unified vascular system for healthcare data.
                            </div>
                        </div>
                    </div>

                    {/* Cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 16 : 0 }}>
                        {/* Row 1: Institutional Layer + Clinician Layer */}
                        <div style={{ display: 'flex', flexDirection: compact ? 'column' : 'row', gap: isMobile ? 16 : 0 }}>
                            {/* Card 1: Institutional Layer */}
                            <div style={{ flex: 1, padding: isMobile ? 24 : 40, position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 8, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ width: 4, height: '100%', left: 0, top: 0, position: 'absolute', opacity: 0, background: '#006970' }} />
                                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 24 }}>
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ width: 29, height: 26, background: '#006970', marginBottom: isMobile ? 20 : 38 }}>
                                            <svg width="29" height="26" viewBox="0 0 29 26" fill="none"><rect width="29" height="26" rx="2" fill="#006970" /></svg>
                                        </div>
                                        <div style={{ color: '#001736', fontSize: isMobile ? 20 : 24, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '32px', marginBottom: 16 }}>1. The Institutional Layer</div>
                                        <div style={{ marginBottom: 24 }}>
                                            <span style={{ color: '#001736', fontSize: isMobile ? 14 : 16, fontFamily: 'Inter', fontWeight: 600, lineHeight: '26px' }}>The Clinical Terminal: </span>
                                            <span style={{ color: '#43474F', fontSize: isMobile ? 14 : 16, fontFamily: 'Inter', fontWeight: 400 }}>For hospital leadership and care teams, providing a real-time, unified view of the facility. Coordinate beds, manage staff ratios, and monitor clinical throughput from a centralized command center.</span>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                                <div style={{ width: 14, height: 14, background: '#006970', borderRadius: '50%', flexShrink: 0 }} />
                                                <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px' }}>Real-time capacity tracking</div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                                <div style={{ width: 14, height: 14, background: '#006970', borderRadius: '50%', flexShrink: 0 }} />
                                                <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px' }}>Predictive staffing models</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ flex: 1, overflow: 'hidden', borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                                        <img style={{ width: '100%', height: isMobile ? 200 : '100%', objectFit: 'cover', borderRadius: 4 }} src={Howwework2} alt="Institutional Layer" />
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Clinician Layer */}
                            <div style={{ flex: 1, position: 'relative', background: '#001736', overflow: 'hidden', borderRadius: 8, padding: isMobile ? 24 : 40, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ width: 128, height: 128, position: 'absolute', right: 0, top: -64, background: 'rgba(0, 105, 112, 0.20)', borderRadius: 12, filter: 'blur(32px)' }} />
                                <div style={{ width: 28, height: 28, background: '#7AD5DD', marginBottom: isMobile ? 20 : 36 }}>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="2" fill="#7AD5DD" /></svg>
                                </div>
                                <div style={{ color: 'white', fontSize: isMobile ? 20 : 24, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '32px', marginBottom: 15 }}>2. The Clinician Layer</div>
                                <div style={{ marginBottom: 32 }}>
                                    <span style={{ color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: 600, lineHeight: '22.75px' }}>The ETOH App: </span>
                                    <span style={{ color: '#7594CA', fontSize: 14, fontFamily: 'Inter', fontWeight: 400 }}>For doctors and nurses, putting intelligence at the point of care. Zero-latency patient records and AI-assisted triage tools directly on their devices.</span>
                                </div>
                                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.10)', paddingTop: 32 }}>
                                    <img style={{ width: '100%', height: isMobile ? 140 : 160, objectFit: 'cover', borderRadius: 4 }} src={Howwework3} alt="Clinician Layer" />
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Patient Layer */}
                        <div style={{ padding: isMobile ? 24 : 40, position: 'relative', background: 'white', borderRadius: 8 }}>
                            <div style={{ width: 4, height: '100%', left: 0, top: 0, position: 'absolute', opacity: 0, background: '#006970' }} />
                            <div style={{ display: 'flex', flexDirection: compact ? 'column' : 'row', alignItems: compact ? 'flex-start' : 'center', gap: compact ? 32 : 48 }}>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <div style={{ width: 26, height: 27, background: '#006970', marginBottom: isMobile ? 20 : 37 }}>
                                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none"><rect width="26" height="27" rx="2" fill="#006970" /></svg>
                                    </div>
                                    <div style={{ color: '#001736', fontSize: isMobile ? 20 : 24, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '32px', marginBottom: 16 }}>3. The Patient Layer</div>
                                    <div style={{ marginBottom: 24 }}>
                                        <span style={{ color: '#001736', fontSize: isMobile ? 14 : 16, fontFamily: 'Inter', fontWeight: 600, lineHeight: '26px' }}>The Patient App: </span>
                                        <span style={{ color: '#43474F', fontSize: isMobile ? 14 : 16, fontFamily: 'Inter', fontWeight: 400 }}>Extends the hospital's reach. Supporting patients before, during, and after their stay with automated follow-ups and frictionless communication.</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        <div style={{ flex: 1, padding: isMobile ? 12 : 16, background: '#F3F4F5', borderRadius: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
                                            <div style={{ color: '#006970', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.2 }}>Pre-Care</div>
                                            <div style={{ color: '#001736', fontSize: 14, fontFamily: 'Inter', fontWeight: 500, lineHeight: '20px' }}>Digital Onboarding</div>
                                        </div>
                                        <div style={{ flex: 1, padding: isMobile ? 12 : 16, background: '#F3F4F5', borderRadius: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
                                            <div style={{ color: '#006970', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.2 }}>Post-Care</div>
                                            <div style={{ color: '#001736', fontSize: 14, fontFamily: 'Inter', fontWeight: 500, lineHeight: '20px' }}>Recovery Tracking</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ flex: 1, width: '100%' }}>
                                    <img style={{ width: '100%', height: isMobile ? 220 : 320, objectFit: 'cover', boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)', borderRadius: 8 }} src={Howwework4} alt="Patient Layer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: One platform. One Source of Truth. */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 128, paddingBottom: isMobile ? 64 : 128, position: 'relative', background: '#F8F9FA', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 427, height: 342, position: 'absolute', right: 0, bottom: 0, background: 'linear-gradient(327deg, rgba(0, 105, 112, 0.05) 0%, rgba(0, 105, 112, 0) 100%)', borderRadius: 12 }} />
                <div style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? 20 : 32 }}>
                    <div style={{ color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2, textAlign: 'center' }}>The Core Engine</div>
                    <div style={{ textAlign: 'center', paddingBottom: 16 }}>
                        <span style={{ color: '#001736', fontSize: isMobile ? 32 : 48, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '36px' : '48px' }}>One platform. One </span>
                        <span style={{ color: '#006970', fontSize: isMobile ? 32 : 48, fontFamily: 'Manrope', fontWeight: 800 }}>Source of Truth.</span>
                    </div>
                    <div style={{ width: '100%', maxWidth: 896, padding: 8, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 16 }}>
                        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', background: '#F3F4F5', borderRadius: 8 }}>
                            <div style={{ flex: 1, padding: isMobile ? 20 : 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                                <div style={{ color: '#001736', fontSize: 16, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '24px', textAlign: 'center' }}>Live</div>
                                <div style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, lineHeight: '16px', textAlign: 'center' }}>Data propagates across all three layers in &lt; 100ms.</div>
                            </div>
                            <div style={{ flex: 1, padding: isMobile ? 20 : 32, borderLeft: isMobile ? 'none' : '1px solid #F1F5F9', borderTop: isMobile ? '1px solid #F1F5F9' : 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                                <div style={{ color: '#001736', fontSize: 16, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '24px', textAlign: 'center' }}>Complete</div>
                                <div style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, lineHeight: '16px', textAlign: 'center' }}>Includes social determinants, clinical labs, and wearable data.</div>
                            </div>
                            <div style={{ flex: 1, padding: isMobile ? 20 : 32, borderLeft: isMobile ? 'none' : '1px solid #F1F5F9', borderTop: isMobile ? '1px solid #F1F5F9' : 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                                <div style={{ color: '#001736', fontSize: 16, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '24px', textAlign: 'center' }}>Accessible</div>
                                <div style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, lineHeight: '16px', textAlign: 'center' }}>Secured by biometric auth and enterprise-grade encryption.</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingTop: isMobile ? 32 : 48 }}>
                        <div style={{ paddingLeft: isMobile ? 28 : 40, paddingRight: isMobile ? 28 : 40, paddingTop: 16, paddingBottom: 16, position: 'relative', background: '#001736', borderRadius: 6, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0)', boxShadow: '0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)', borderRadius: 6 }} />
                            <div style={{ color: 'white', fontSize: isMobile ? 16 : 18, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '28px', textAlign: 'center', position: 'relative' }}>Schedule a Deep Dive</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 4: CTA - Ready to architect */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 48 : 96, paddingBottom: isMobile ? 48 : 96, background: '#002B5B', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: compact ? 'column' : 'row', alignItems: 'center', gap: compact ? 40 : 64 }}>
                    <div style={{ flex: 1, width: '100%' }}>
                        <img style={{ width: '100%', height: isMobile ? 200 : 324, objectFit: 'cover', opacity: 0.80, boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)', borderRadius: 8 }} src={Howwework5} alt="Clinical operations" />
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
                        <div>
                            <span style={{ color: 'white', fontSize: isMobile ? 28 : 36, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '36px' : '45px' }}>Ready to architect your<br /></span>
                            <span style={{ color: '#96F1FA', fontSize: isMobile ? 28 : 36, fontFamily: 'Manrope', fontWeight: 800 }}>clinical operations?</span>
                        </div>
                        <div style={{ color: '#D6E3FF', fontSize: isMobile ? 16 : 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: isMobile ? '24px' : '28px' }}>
                            Join leading healthcare institutions transforming care delivery through three-dimensional precision.
                        </div>
                        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 16, paddingTop: 16 }}>
                            <div style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 13, paddingBottom: 13, background: 'white', borderRadius: 6, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                <div style={{ color: '#001736', fontSize: 16, fontFamily: 'Inter', fontWeight: 700, lineHeight: '24px', textAlign: 'center' }}>Download Blueprint</div>
                            </div>
                            <div style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 12, paddingBottom: 12, borderRadius: 6, outline: '1px solid rgba(255, 255, 255, 0.20)', outlineOffset: -1, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                <div style={{ color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: 700, lineHeight: '24px', textAlign: 'center' }}>View Case Studies</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
