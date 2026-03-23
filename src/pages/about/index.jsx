import React from 'react'
import PageLayout from '../../components/PageLayout'
import About1 from '../../assets/about1'
import about2 from '../../assets/about2.png'

export default function AboutPage() {
    return (
        <PageLayout title="About" fullWidth={true}>
            {/* Section 1: Hero */}
            <div style={{ alignSelf: 'stretch', width: '100%', minHeight: 819, position: 'relative', background: '#001736', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>

                {/* SVG Background Centered */}
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 1280, height: 819, zIndex: 1 }}>
                    <About1 />
                </div>

                <div style={{ width: 426.66, height: 4, right: 0, bottom: 0, position: 'absolute', background: '#006970', zIndex: 3 }} />
                <div style={{ width: '100%', height: '100%', left: 0, top: 0, position: 'absolute', opacity: 0.80, background: 'linear-gradient(147deg, #001736 0%, #002B5B 100%)', zIndex: 2 }} />

                <div style={{ maxWidth: 1280, width: '100%', paddingLeft: 32, paddingRight: 32, paddingTop: 180, paddingBottom: 126, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', zIndex: 10 }}>
                    <div style={{ paddingBottom: 32.50, paddingRight: 7.25, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 31.50, display: 'flex' }}>
                        <div style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: '#006970', borderRadius: 2, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ width: 87.69, height: 15, justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2, wordWrap: 'break-word' }}>The Mission</div>
                        </div>
                        <div style={{ maxWidth: 787.41, justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: 'white', fontSize: 72, fontFamily: 'Manrope', fontWeight: '800', lineHeight: '82px', wordWrap: 'break-word', letterSpacing: '-0.02em' }}>
                                The gap between clinical<br />excellence and clinical<br />reality has always been<br />operational.
                            </span>
                            <span style={{ color: '#96F1FA', fontSize: 72, fontFamily: 'Manrope', fontWeight: '800', lineHeight: '82px', wordWrap: 'break-word', letterSpacing: '-0.02em' }}>
                                We close it.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: The ETOH Thesis */}
            <div style={{ width: '100%', paddingLeft: 32, paddingRight: 32, paddingTop: 128, paddingBottom: 128, background: '#F8F9FA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                <div style={{ maxWidth: 1280, width: '100%', display: 'flex', gap: 64, flexDirection: 'row', alignItems: 'flex-start' }}>

                    {/* Left Column */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
                        <div style={{ position: 'relative', background: '#F3F4F5', overflow: 'hidden', borderRadius: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.90, mixBlendMode: 'multiply' }} src={about2} alt="ETOH surgeons" />
                            {/* Quote overlay */}
                            <div style={{ position: 'absolute', left: 24, bottom: 24, background: 'white', padding: 24, borderRadius: 8, maxWidth: '85%', boxShadow: '0px 4px 20px rgba(0,0,0,0.06)' }}>
                                <p style={{ margin: 0, fontFamily: 'Inter', fontSize: 16, fontWeight: 500, color: '#3d3a35', fontStyle: 'italic', lineHeight: '1.5' }}>
                                    "The operating infrastructure should be as sophisticated as the medicine practiced inside it."
                                </p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'flex-start' }}>
                            <div style={{ width: 4, minHeight: 48, background: '#006970', borderRadius: 2 }} />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <h3 style={{ margin: 0, fontFamily: 'Manrope', fontSize: 24, fontWeight: 800, color: '#001736', letterSpacing: '-0.01em' }}>Operational Integrity</h3>
                                <p style={{ margin: 0, fontFamily: 'Inter', fontSize: 16, color: '#5A5650', lineHeight: '1.6' }}>
                                    Infrastructure is not just hardware; it is the silent facilitator of every life-saving decision.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div style={{ flex: '1.3', display: 'flex', flexDirection: 'column', gap: 40 }}>
                        <h2 style={{ margin: 0, fontFamily: 'Manrope', fontSize: 48, fontWeight: 800, color: '#001736', letterSpacing: '-0.02em' }}>The ETOH Thesis</h2>

                        <div style={{ fontFamily: 'Inter', fontSize: 18, color: '#3D3A35', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <p style={{ margin: 0 }}>
                                <span style={{ float: 'left', fontSize: 64, lineHeight: '64px', fontWeight: 800, color: '#006970', paddingRight: 12, paddingBottom: 4, fontFamily: 'Cormorant, serif' }}>G</span>
                                reat hospitals are built by great clinicians. But clinical excellence does not reach the patient on its own — it travels through systems, workflows, handoffs, and decisions made under pressure by people who are too often without the information they need. ETOH was built on a single, stubborn belief: that the operating infrastructure of a hospital should be as sophisticated as the medicine practiced inside it.
                            </p>

                            <p style={{ margin: 0 }}>
                                Care does not fail at the level of knowledge. It fails at the level of coordination — the test result that reaches the doctor an hour too late, the discharge summary that the follow-up clinic never receives, the ward nurse who cannot reach the on-call team quickly enough. These are not clinical failures. They are infrastructure failures. And infrastructure failures are solvable.
                            </p>

                            <div style={{ padding: 24, background: '#eaf4f5', borderLeft: '4px solid #006970', borderRadius: '0 8px 8px 0' }}>
                                <p style={{ margin: 0, fontWeight: 700, fontStyle: 'italic', fontSize: 20, color: '#001736', lineHeight: '1.6' }}>
                                    ETOH exists to solve them. We build the operational backbone of the hospital — the platform that connects every actor, every decision, and every moment of care into a single, coherent system.
                                </p>
                            </div>

                            <p style={{ margin: 0 }}>
                                From the moment a patient first considers seeking care to the moment they are fully recovered, ETOH runs the operating layer that makes good medicine possible at scale.
                            </p>
                        </div>

                        {/* Tags */}
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
                            {['COORDINATION', 'PRECISION', 'RELIABILITY', 'SCALABILITY'].map((tag, i) => (
                                <div key={tag} style={{
                                    padding: '8px 16px',
                                    background: tag === 'RELIABILITY' ? '#006970' : '#F3F4F5',
                                    color: tag === 'RELIABILITY' ? 'white' : '#5A5650',
                                    borderRadius: 4,
                                    fontSize: 12,
                                    fontWeight: 700,
                                    fontFamily: 'Inter',
                                    letterSpacing: '1px'
                                }}>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </PageLayout>
    )
}
