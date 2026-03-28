import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import PageLayout from '../../../components/PageLayout'
import About1 from '../../../assets/about1'
import about2 from '../../../assets/about2.png'
import { useResponsive } from '../../../hooks/useResponsive'
import { Network, BarChart2, ShieldCheck, Asterisk } from 'lucide-react'
import prove from './prove.png'

// ── Variants ─────────────────────────────────────────────────

const textRevealUp = {
    hidden: { y: 40, opacity: 0 },
    visible: (i = 0) => ({
        y: 0, opacity: 1,
        transition: { delay: i * 0.15, duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }
    })
}

const fadeSlideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: (i = 0) => ({
        y: 0, opacity: 1,
        transition: { delay: i * 0.1, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }
    })
}

const chipVariant = {
    hidden: { scale: 0.8, opacity: 0, y: 8 },
    visible: (i = 0) => ({
        scale: 1, opacity: 1, y: 0,
        transition: { delay: i * 0.09, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
    })
}

const accentReveal = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const maskReveal = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] } }
}

// ── TiltCard: fade-slide-up + tilt-hover + hover-lift ────────

function TiltCard({ children, style, variants, initial, whileInView, custom, viewport }) {
    const xMV = useMotionValue(0)
    const yMV = useMotionValue(0)
    const rotateX = useSpring(useTransform(yMV, [-0.5, 0.5], [5, -5]), { stiffness: 400, damping: 35 })
    const rotateY = useSpring(useTransform(xMV, [-0.5, 0.5], [-5, 5]), { stiffness: 400, damping: 35 })

    const onMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        xMV.set((e.clientX - rect.left) / rect.width - 0.5)
        yMV.set((e.clientY - rect.top) / rect.height - 0.5)
    }
    const onMouseLeave = () => { xMV.set(0); yMV.set(0) }

    return (
        <motion.div
            style={{ ...style, rotateX, rotateY, transformStyle: 'preserve-3d' }}
            variants={variants}
            initial={initial}
            whileInView={whileInView}
            custom={custom}
            viewport={viewport}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </motion.div>
    )
}

// ── Page ─────────────────────────────────────────────────────

export default function OurMissionPage() {
    const { isMobile, isTablet } = useResponsive()
    const compact = isMobile || isTablet

    // slow-parallax-bg
    const heroRef = useRef(null)
    const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
    const bgY = useTransform(heroScroll, [0, 1], ['0%', '28%'])

    // parallax-card: image inside Unified Systems
    const imageRef = useRef(null)
    const { scrollYProgress: imageScroll } = useScroll({ target: imageRef, offset: ['start end', 'end start'] })
    const imageParallaxY = useTransform(imageScroll, [0, 1], ['-12%', '12%'])

    return (
        <PageLayout title="Our Mission" fullWidth={true}>

            {/* ── Section 1: Hero ── */}
            <div
                ref={heroRef}
                style={{ alignSelf: 'stretch', width: '100%', minHeight: isMobile ? 500 : 819, position: 'relative', background: '#001736', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}
            >
                {/* slow-parallax-bg */}
                <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, y: bgY }}>
                    <About1 />
                </motion.div>

                {/* gradient-glow-reveal: teal glow blob */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 0.18, scale: 1 }}
                    transition={{ duration: 2.0, ease: 'easeOut', delay: 0.2 }}
                    style={{
                        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
                        background: 'radial-gradient(circle, #96F1FA 0%, transparent 70%)',
                        top: '40%', left: '25%', transform: 'translate(-50%, -50%)',
                        zIndex: 2, pointerEvents: 'none', filter: 'blur(80px)'
                    }}
                />

                {/* gradient-glow-reveal: overlay fade-in */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.80 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    style={{ width: '100%', height: '100%', left: 0, top: 0, position: 'absolute', background: 'linear-gradient(147deg, #001736 0%, #002B5B 100%)', zIndex: 2 }}
                />

                <div style={{ width: isMobile ? '50%' : 426.66, height: 4, right: 0, bottom: 0, position: 'absolute', background: '#006970', zIndex: 3 }} />

                <div style={{ maxWidth: 1280, width: '100%', paddingLeft: isMobile ? 16 : 32, paddingRight: isMobile ? 16 : 32, paddingTop: isMobile ? 100 : 180, paddingBottom: isMobile ? 60 : 126, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', zIndex: 10 }}>
                    <div style={{ paddingBottom: 32.50, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: isMobile ? 20 : 31.50, display: 'flex' }}>

                        {/* text-reveal-up: tag chip */}
                        <motion.div
                            variants={textRevealUp} initial="hidden" animate="visible" custom={0}
                            style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: '#006970', borderRadius: 2, display: 'inline-flex' }}
                        >
                            <div style={{ height: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'white', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2 }}>The Mission</div>
                        </motion.div>

                        {/* text-reveal-up: headline block */}
                        <motion.div variants={textRevealUp} initial="hidden" animate="visible" custom={1} style={{ maxWidth: 787 }}>
                            <span style={{ color: 'white', fontSize: isMobile ? 36 : isTablet ? 52 : 72, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '42px' : isTablet ? '60px' : '82px', wordWrap: 'break-word', letterSpacing: '-0.02em' }}>
                                The gap between clinical excellence and clinical reality has always been operational.{' '}
                            </span>
                            <motion.span
                                variants={textRevealUp} initial="hidden" animate="visible" custom={2}
                                style={{ color: '#96F1FA', fontSize: isMobile ? 36 : isTablet ? 52 : 72, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '42px' : isTablet ? '60px' : '82px', wordWrap: 'break-word', letterSpacing: '-0.02em', display: 'inline' }}
                            >
                                We close it.
                            </motion.span>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── Section 2: The ETOH Thesis ── */}
            <div style={{ width: '100%', paddingLeft: isMobile ? 16 : 32, paddingRight: isMobile ? 16 : 32, paddingTop: isMobile ? 64 : 128, paddingBottom: isMobile ? 64 : 128, background: '#F8F9FA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                <div style={{ maxWidth: 1280, width: '100%', display: 'flex', gap: compact ? 40 : 64, flexDirection: compact ? 'column' : 'row', alignItems: 'flex-start' }}>

                    {/* Left Column */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32, width: '100%' }}>

                        {/* mask-reveal: image */}
                        <motion.div
                            variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                            style={{ position: 'relative', background: '#F3F4F5', overflow: 'hidden', borderRadius: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <img style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.90, mixBlendMode: 'multiply' }} src={about2} alt="ETOH surgeons" />
                            <motion.div
                                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.5 }}
                                style={{ position: 'absolute', left: isMobile ? 12 : 24, bottom: isMobile ? 12 : 24, background: 'white', padding: isMobile ? 16 : 24, borderRadius: 8, maxWidth: '85%', boxShadow: '0px 4px 20px rgba(0,0,0,0.06)' }}
                            >
                                <p style={{ margin: 0, fontFamily: 'Inter', fontSize: isMobile ? 14 : 16, fontWeight: 500, color: '#3d3a35', fontStyle: 'italic', lineHeight: '1.5' }}>
                                    "The operating infrastructure should be as sophisticated as the medicine practiced inside it."
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* accent-border-reveal: Operational Integrity */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} style={{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'flex-start' }}>
                            <motion.div
                                variants={accentReveal}
                                style={{ width: 4, minHeight: 48, background: '#006970', borderRadius: 2, transformOrigin: 'top', flexShrink: 0 }}
                            />
                            <motion.div variants={fadeSlideUp} custom={1} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <h3 style={{ margin: 0, fontFamily: 'Manrope', fontSize: isMobile ? 20 : 24, fontWeight: 800, color: '#001736', letterSpacing: '-0.01em' }}>Operational Integrity</h3>
                                <p style={{ margin: 0, fontFamily: 'Inter', fontSize: isMobile ? 14 : 16, color: '#5A5650', lineHeight: '1.6' }}>
                                    Infrastructure is not just hardware; it is the silent facilitator of every life-saving decision.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div style={{ flex: compact ? 'none' : '1.3', width: '100%', display: 'flex', flexDirection: 'column', gap: isMobile ? 24 : 40 }}>
                        <motion.h2
                            variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
                            style={{ margin: 0, fontFamily: 'Manrope', fontSize: isMobile ? 32 : 48, fontWeight: 800, color: '#001736', letterSpacing: '-0.02em' }}
                        >
                            The ETOH Thesis
                        </motion.h2>

                        <div style={{ fontFamily: 'Inter', fontSize: isMobile ? 16 : 18, color: '#3D3A35', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <motion.p variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} style={{ margin: 0 }}>
                                <span style={{ float: 'left', fontSize: isMobile ? 48 : 64, lineHeight: isMobile ? '48px' : '64px', fontWeight: 800, color: '#006970', paddingRight: 12, paddingBottom: 4, fontFamily: 'Cormorant, serif' }}>G</span>
                                reat hospitals are built by great clinicians. But clinical excellence does not reach the patient on its own — it travels through systems, workflows, handoffs, and decisions made under pressure by people who are too often without the information they need. ETOH was built on a single, stubborn belief: that the operating infrastructure of a hospital should be as sophisticated as the medicine practiced inside it.
                            </motion.p>

                            <motion.p variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} style={{ margin: 0 }}>
                                Care does not fail at the level of knowledge. It fails at the level of coordination — the test result that reaches the doctor an hour too late, the discharge summary that the follow-up clinic never receives, the ward nurse who cannot reach the on-call team quickly enough. These are not clinical failures. They are infrastructure failures. And infrastructure failures are solvable.
                            </motion.p>

                            {/* accent-border-reveal: highlight block */}
                            <motion.div
                                variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
                                style={{ padding: isMobile ? 16 : 24, background: '#eaf4f5', borderLeft: '4px solid #006970', borderRadius: '0 8px 8px 0' }}
                            >
                                <p style={{ margin: 0, fontWeight: 700, fontStyle: 'italic', fontSize: isMobile ? 16 : 20, color: '#001736', lineHeight: '1.6' }}>
                                    ETOH exists to solve them. We build the operational backbone of the hospital — the platform that connects every actor, every decision, and every moment of care into a single, coherent system.
                                </p>
                            </motion.div>

                            <motion.p variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} style={{ margin: 0 }}>
                                From the moment a patient first considers seeking care to the moment they are fully recovered, ETOH runs the operating layer that makes good medicine possible at scale.
                            </motion.p>
                        </div>

                        {/* chip-stagger: feature tags */}
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
                            {['COORDINATION', 'PRECISION', 'RELIABILITY', 'SCALABILITY'].map((tag, i) => (
                                <motion.div
                                    key={tag}
                                    variants={chipVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                                    style={{
                                        padding: '8px 16px',
                                        background: tag === 'RELIABILITY' ? '#006970' : '#F3F4F5',
                                        color: tag === 'RELIABILITY' ? 'white' : '#5A5650',
                                        borderRadius: 4, fontSize: 12, fontWeight: 700, fontFamily: 'Inter', letterSpacing: '1px'
                                    }}
                                >
                                    {tag}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 3: Architecting the Backbone ── */}
            <div style={{ alignSelf: 'stretch', paddingTop: compact ? 64 : 128, paddingBottom: compact ? 64 : 128, background: '#F3F4F5', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1280, paddingLeft: isMobile ? 16 : 32, paddingRight: isMobile ? 16 : 32, display: 'flex', flexDirection: 'column', gap: 64 }}>

                    {/* Header */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <motion.h2
                            variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
                            style={{ margin: 0, color: '#001736', fontSize: isMobile ? 28 : 36, fontFamily: 'Manrope', fontWeight: 900, lineHeight: '1.1' }}
                        >
                            Architecting the Backbone
                        </motion.h2>
                        <motion.p
                            variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                            style={{ margin: 0, maxWidth: 576, color: '#43474F', fontSize: 16, fontFamily: 'Inter', fontWeight: 400, lineHeight: '24px' }}
                        >
                            Every component of the ETOH platform is designed to eliminate friction in the clinical journey.
                        </motion.p>
                    </div>

                    {/* Bento Grid */}
                    {compact ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <motion.div variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} style={{ background: 'white', padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
                                <Network size={32} color="#006970" />
                                <div>
                                    <h3 style={{ margin: '0 0 8px', fontFamily: 'Manrope', fontSize: 24, fontWeight: 700, color: '#001736', lineHeight: '32px' }}>Unified Systems</h3>
                                    <p style={{ margin: 0, fontFamily: 'Inter', fontSize: 16, color: '#43474F', lineHeight: '24px' }}>Synchronizing EHR data, staffing schedules, and facility management into a singular real-time operating view.</p>
                                </div>
                                <div style={{ background: '#F3F4F5', borderRadius: 4, overflow: 'hidden', height: 160 }}>
                                    <img style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} src={prove} alt="" />
                                </div>
                            </motion.div>

                            <motion.div variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} style={{ background: '#001736', padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
                                <Asterisk size={32} color="#96F1FA" />
                                <div>
                                    <h3 style={{ margin: '0 0 8px', fontFamily: 'Manrope', fontSize: 24, fontWeight: 700, color: 'white', lineHeight: '32px' }}>Rapid Response</h3>
                                    <p style={{ margin: 0, fontFamily: 'Inter', fontSize: 16, color: '#7594CA', lineHeight: '24px' }}>Reducing the critical seconds between clinical alerts and operational execution.</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <span style={{ color: '#96F1FA', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px' }}>View Specs</span>
                                    <div style={{ width: 8, height: 8, background: '#96F1FA' }} />
                                </div>
                            </motion.div>

                            <motion.div variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} style={{ background: 'white', padding: 32, borderLeft: '4px solid #006970', display: 'flex', flexDirection: 'column', gap: 16 }}>
                                <BarChart2 size={28} color="#006970" />
                                <div>
                                    <h3 style={{ margin: '0 0 8px', fontFamily: 'Manrope', fontSize: 20, fontWeight: 700, color: '#001736', lineHeight: '28px' }}>Predictive Flow</h3>
                                    <p style={{ margin: 0, fontFamily: 'Inter', fontSize: 14, color: '#43474F', lineHeight: '20px' }}>AI-driven throughput modeling to anticipate bottlenecks before they impact patient safety.</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} style={{ background: '#E7E8E9', padding: 32, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                    <h3 style={{ margin: 0, fontFamily: 'Manrope', fontSize: 24, fontWeight: 700, color: '#001736', lineHeight: '32px' }}>Clinical Security</h3>
                                    <p style={{ margin: 0, fontFamily: 'Inter', fontSize: 14, color: '#43474F', lineHeight: '20px' }}>HIPAA-compliant infrastructure built on zero-trust principles to protect the sanctity of patient data.</p>
                                </div>
                                <ShieldCheck size={56} color="rgba(0,23,54,0.12)" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                            </motion.div>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', width: '100%', gap: 16 }}>

                            {/* Unified Systems — col 1–2, row 1 | fade-slide-up + tilt-hover + hover-lift */}
                            <div style={{ gridColumn: '1 / 3', gridRow: '1', perspective: 1000 }}>
                                <TiltCard
                                    variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0}
                                    style={{ background: 'white', padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Network size={36} color="#006970" style={{ marginBottom: 24 }} />
                                        <h3 style={{ margin: '0 0 8px', fontFamily: 'Manrope', fontSize: 24, fontWeight: 700, color: '#001736', lineHeight: '32px' }}>Unified Systems</h3>
                                        <p style={{ margin: 0, maxWidth: 448, fontFamily: 'Inter', fontSize: 16, color: '#43474F', lineHeight: '24px' }}>Synchronizing EHR data, staffing schedules, and facility management into a singular real-time operating view.</p>
                                    </div>
                                    {/* parallax-card image */}
                                    <div ref={imageRef} style={{ borderRadius: 4, overflow: 'hidden', height: 192, marginTop: 32 }}>
                                        <motion.img
                                            style={{ width: '100%', height: '130%', objectFit: 'cover', opacity: 0.5, y: imageParallaxY }}
                                            src={prove} alt=""
                                        />
                                    </div>
                                </TiltCard>
                            </div>

                            {/* Rapid Response — col 3, row 1 | fade-slide-up + tilt-hover + hover-lift */}
                            <div style={{ gridColumn: '3', gridRow: '1', perspective: 1000 }}>
                                <TiltCard
                                    variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={1}
                                    style={{ background: '#001736', padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden', height: '100%', boxSizing: 'border-box' }}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Asterisk size={36} color="#96F1FA" style={{ marginBottom: 24 }} />
                                        <h3 style={{ margin: '0 0 8px', fontFamily: 'Manrope', fontSize: 24, fontWeight: 700, color: 'white', lineHeight: '32px' }}>Rapid Response</h3>
                                        <p style={{ margin: 0, fontFamily: 'Inter', fontSize: 16, color: '#7594CA', lineHeight: '24px' }}>Reducing the critical seconds between clinical alerts and operational execution.</p>
                                    </div>
                                </TiltCard>
                            </div>

                            {/* Predictive Flow — col 1, row 2 | fade-slide-up + tilt-hover + hover-lift */}
                            <div style={{ gridColumn: '1', gridRow: '2', perspective: 1000 }}>
                                <TiltCard
                                    variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={2}
                                    style={{ background: 'white', padding: 40, borderLeft: '4px solid #006970', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16, height: '100%', boxSizing: 'border-box' }}
                                >
                                    <BarChart2 size={28} color="#006970" />
                                    <div>
                                        <h3 style={{ margin: '0 0 8px', fontFamily: 'Manrope', fontSize: 20, fontWeight: 700, color: '#001736', lineHeight: '28px' }}>Predictive Flow</h3>
                                        <p style={{ margin: 0, fontFamily: 'Inter', fontSize: 14, color: '#43474F', lineHeight: '20px' }}>AI-driven throughput modeling to anticipate bottlenecks before they impact patient safety.</p>
                                    </div>
                                </TiltCard>
                            </div>

                            {/* Clinical Security — col 2–3, row 2 | fade-slide-up + tilt-hover + hover-lift */}
                            <div style={{ gridColumn: '2 / 4', gridRow: '2', perspective: 1000 }}>
                                <TiltCard
                                    variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={3}
                                    style={{ background: '#E7E8E9', padding: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%', boxSizing: 'border-box' }}
                                >
                                    <div style={{ maxWidth: 384, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                        <h3 style={{ margin: 0, fontFamily: 'Manrope', fontSize: 24, fontWeight: 700, color: '#001736', lineHeight: '32px' }}>Clinical Security</h3>
                                        <p style={{ margin: 0, fontFamily: 'Inter', fontSize: 14, color: '#43474F', lineHeight: '20px' }}>HIPAA-compliant infrastructure built on zero-trust principles to protect the sanctity of patient data.</p>
                                    </div>
                                    <ShieldCheck size={64} color="rgba(0,23,54,0.10)" strokeWidth={1.5} />
                                </TiltCard>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </PageLayout>
    )
}
