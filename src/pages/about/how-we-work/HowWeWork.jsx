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
                    <div style={{ flex: 1.2, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <div style={{ width: '100%', maxWidth: 560, aspectRatio: '1', position: 'absolute', left: -16, top: -16, background: 'linear-gradient(45deg, rgba(0, 105, 112, 0.10) 0%, rgba(0, 105, 112, 0) 100%)', borderRadius: 12, filter: 'blur(20px)' }} />
                        <img style={{ width: '100%', maxWidth: 560, position: 'relative', borderRadius: 8 }} src={Howwework1} alt="Platform in three dimensions" />
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
                                        <div style={{ marginBottom: isMobile ? 20 : 38 }}>
                                            <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 26.2499V0H14.2499V6H28.9038V26.2499H0ZM2.24995 24H6V20.2499H2.24995V24ZM2.24995 18H6V14.2499H2.24995V18ZM2.24995 12H6V8.24994H2.24995V12ZM2.24995 6H6V2.24995H2.24995V6ZM8.24994 24H12V20.2499H8.24994V24ZM8.24994 18H12V14.2499H8.24994V18ZM8.24994 12H12V8.24994H8.24994V12ZM8.24994 6H12V2.24995H8.24994V6ZM14.2499 24H26.6538V8.24994H14.2499V12H17.5384V14.2499H14.2499V18H17.5384V20.2499H14.2499V24ZM20.8269 14.2499V12H23.0769V14.2499H20.8269ZM20.8269 20.2499V18H23.0769V20.2499H20.8269Z" fill="#006970"/></svg>
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
                                <div style={{ marginBottom: isMobile ? 20 : 36 }}>
                                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1412 28.1249C13.6444 28.1249 11.5175 27.2494 9.76049 25.4984C8.00348 23.7475 7.12497 21.623 7.12497 19.1249V18.3057C5.09998 18.0422 3.40624 17.1394 2.04374 15.5971C0.681248 14.0548 0 12.2307 0 10.125V1.5H4.5V0H6.74995V5.24995H4.5V3.74995H2.24995V10.125C2.24995 11.775 2.83745 13.1875 4.01244 14.3625C5.18744 15.5375 6.59994 16.125 8.24994 16.125C9.89994 16.125 11.3124 15.5375 12.4874 14.3625C13.6624 13.1875 14.2499 11.775 14.2499 10.125V3.74995H11.9999V5.24995H9.74994V0H11.9999V1.5H16.4999V10.125C16.4999 12.2307 15.8186 14.0548 14.4561 15.5971C13.0937 17.1394 11.3999 18.0422 9.37492 18.3057V19.1249C9.37492 20.9999 10.0326 22.5937 11.3479 23.9062C12.6632 25.2187 14.2603 25.8749 16.1393 25.8749C18.0143 25.8749 19.6081 25.2187 20.9206 23.9062C22.2331 22.5937 22.8893 20.9999 22.8893 19.1249V16.699C22.1009 16.4663 21.4519 16.0129 20.9422 15.3389C20.4326 14.6649 20.1778 13.898 20.1778 13.0384C20.1778 11.9727 20.551 11.0669 21.2973 10.3209C22.0436 9.57493 22.9498 9.20194 24.016 9.20194C25.0822 9.20194 25.9878 9.57493 26.733 10.3209C27.4782 11.0669 27.8508 11.9727 27.8508 13.0384C27.8508 13.898 27.596 14.6649 27.0864 15.3389C26.5768 16.0129 25.9277 16.4663 25.1393 16.699V19.1249C25.1393 21.623 24.2638 23.7475 22.5129 25.4984C20.7619 27.2494 18.638 28.1249 16.1412 28.1249ZM24.0143 14.625C24.4585 14.625 24.834 14.4716 25.1408 14.1649C25.4475 13.8581 25.6009 13.4827 25.6009 13.0384C25.6009 12.5942 25.4475 12.2187 25.1408 11.912C24.834 11.6052 24.4585 11.4519 24.0143 11.4519C23.5701 11.4519 23.1946 11.6052 22.8879 11.912C22.5811 12.2187 22.4278 12.5942 22.4278 13.0384C22.4278 13.4827 22.5811 13.8581 22.8879 14.1649C23.1946 14.4716 23.5701 14.625 24.0143 14.625Z" fill="#7AD5DD"/></svg>
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
                                    <div style={{ marginBottom: isMobile ? 20 : 37 }}>
                                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.85576 26.9999V19.8172C7.33211 19.6985 5.83918 19.5323 4.37697 19.3186C2.91476 19.1049 1.45577 18.7999 0 18.4038L0.548062 16.1538C2.53652 16.6807 4.54678 17.048 6.57884 17.2557C8.6109 17.4634 10.6669 17.5673 12.7467 17.5673C14.8027 17.5673 16.8475 17.4634 18.8812 17.2557C20.9148 17.048 22.9384 16.6807 24.9518 16.1538L25.4999 18.4038C24.0287 18.7999 22.559 19.1057 21.0908 19.3211C19.6225 19.5365 18.1403 19.7039 16.6441 19.8236V26.9999H8.85576ZM12.752 15.6057C11.9679 15.6057 11.3101 15.3407 10.7783 14.8107C10.2466 14.2807 9.98073 13.624 9.98073 12.8406C9.98073 12.0802 10.2457 11.4278 10.7757 10.8836C11.3057 10.3394 11.9624 10.0673 12.7459 10.0673C13.5063 10.0673 14.1586 10.3382 14.7028 10.8801C15.247 11.422 15.5192 12.0735 15.5192 12.8345C15.5192 13.6185 15.2482 14.2764 14.7063 14.8081C14.1644 15.3398 13.5129 15.6057 12.752 15.6057ZM1.87497 11.2499C1.34037 11.2499 0.894218 11.0711 0.536531 10.7134C0.178844 10.3557 0 9.90826 0 9.37101C0 8.85443 0.178844 8.41345 0.536531 8.04807C0.894218 7.68269 1.34169 7.5 1.87893 7.5C2.39552 7.5 2.8365 7.68229 3.20188 8.04687C3.56726 8.41145 3.74995 8.85415 3.74995 9.37497C3.74995 9.90958 3.56766 10.3557 3.20308 10.7134C2.8385 11.0711 2.3958 11.2499 1.87497 11.2499ZM23.6249 11.2499C23.0903 11.2499 22.6442 11.0711 22.2865 10.7134C21.9288 10.3557 21.7499 9.90826 21.7499 9.37101C21.7499 8.85443 21.9288 8.41345 22.2865 8.04807C22.6442 7.68269 23.0916 7.5 23.6289 7.5C24.1455 7.5 24.5864 7.68229 24.9518 8.04687C25.3172 8.41145 25.4999 8.85415 25.4999 9.37497C25.4999 9.90958 25.3176 10.3557 24.953 10.7134C24.5884 11.0711 24.1457 11.2499 23.6249 11.2499ZM5.76919 5.69707C5.23458 5.69707 4.78843 5.51822 4.43075 5.16053C4.07306 4.80285 3.89421 4.35538 3.89421 3.81813C3.89421 3.30155 4.07306 2.86057 4.43075 2.49519C4.78843 2.12981 5.2359 1.94712 5.77315 1.94712C6.28973 1.94712 6.73071 2.12941 7.09609 2.49399C7.46147 2.85857 7.64416 3.30127 7.64416 3.82209C7.64416 4.3567 7.46187 4.80285 7.09729 5.16053C6.73271 5.51822 6.29001 5.69707 5.76919 5.69707ZM19.7307 5.69707C19.1961 5.69707 18.7499 5.51822 18.3923 5.16053C18.0346 4.80285 17.8557 4.35538 17.8557 3.81813C17.8557 3.30155 18.0346 2.86057 18.3923 2.49519C18.7499 2.12981 19.1974 1.94712 19.7347 1.94712C20.2512 1.94712 20.6922 2.12941 21.0576 2.49399C21.423 2.85857 21.6057 3.30127 21.6057 3.82209C21.6057 4.3567 21.4234 4.80285 21.0588 5.16053C20.6942 5.51822 20.2515 5.69707 19.7307 5.69707ZM12.7499 3.74995C12.2153 3.74995 11.7692 3.5711 11.4115 3.21341C11.0538 2.85573 10.875 2.40826 10.875 1.87101C10.875 1.35443 11.0538 0.913448 11.4115 0.548069C11.7692 0.18269 12.2167 0 12.7539 0C13.2705 0 13.7115 0.182289 14.0768 0.546867C14.4422 0.911446 14.6249 1.35415 14.6249 1.87497C14.6249 2.40958 14.4426 2.85573 14.0781 3.21341C13.7135 3.5711 13.2708 3.74995 12.7499 3.74995Z" fill="#006970"/></svg>
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
