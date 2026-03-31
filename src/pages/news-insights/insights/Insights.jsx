import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageLayout from '../../../components/PageLayout'
import { useResponsive } from '../../../hooks/useResponsive'
import { useInsights } from '../../../context/InsightsContext'

const ease = [0.22, 1, 0.36, 1]
const sharp = [0.25, 0.46, 0.45, 0.94]

const insightTypeLabels = {
    whitepaper: 'Whitepaper',
    report: 'Report',
    research_brief: 'Research Brief',
    case_study: 'Case Study',
}

const insightTypeColors = {
    whitepaper: { bg: '#EEF2FF', color: '#4F46E5' },
    report: { bg: '#FEF3C7', color: '#D97706' },
    research_brief: { bg: '#E7F6F6', color: '#006970' },
    case_study: { bg: '#FCE7F3', color: '#DB2777' },
}

export default function InsightsPage() {
    const navigate = useNavigate()
    const { isMobile } = useResponsive()
    const { insights, loading } = useInsights()

    // Organize insights - featured + side cards + rest
    const featuredInsight = insights.find(i => i.featured) || insights[0] || null
    const nonFeatured = featuredInsight ? insights.filter(i => i !== featuredInsight) : insights
    const sideCards = nonFeatured.slice(0, 2)
    const publishedInsights = nonFeatured.slice(2)

    if (loading) {
        return (
            <PageLayout fullWidth title="" lightHero>
                <div style={{ fontFamily: "'Inter', sans-serif", padding: '120px 24px', textAlign: 'center' }}>
                    <div style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter' }}>Loading insights...</div>
                </div>
            </PageLayout>
        )
    }

    return (
        <PageLayout fullWidth title="" lightHero>
            <div style={{ fontFamily: "'Inter', sans-serif" }}>

                {/* ── Hero: Row 1 — Badge + Heading (left) | Body text (right) ── */}
                <div style={{ padding: isMobile ? '48px 16px 0' : '80px 24px 0' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'flex-start', gap: isMobile ? 24 : 64 }}>

                        {/* Left — Badge + Heading */}
                        <div style={{ flex: isMobile ? '1' : '0 0 55%', display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.5, ease: sharp }}
                                style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: '#96F1FA', display: 'inline-flex', alignSelf: 'flex-start' }}
                            >
                                <span style={{ color: '#006F77', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, whiteSpace: 'nowrap' }}>
                                    Research & Intelligence
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.75, ease: ease, delay: 0.1 }}
                                style={{ margin: 0, color: '#001736', fontSize: isMobile ? 40 : 72, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '46px' : '74px' }}
                            >
                                System Intelligence Across a National Network.
                            </motion.h1>
                        </div>

                        {/* Right — Body paragraph */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: ease, delay: 0.3 }}
                            style={{ flex: isMobile ? '1' : '0 0 40%', paddingTop: isMobile ? 0 : 80 }}
                        >
                            <p style={{ margin: 0, color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: '30px' }}>
                                Our proprietary research reveals non-obvious correlations between facility staffing ratios and patient outcome stability. Access our whitepapers, reports, and case studies on healthcare innovation.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* ── Hero: Row 2 — Dark featured insight (left) | Side cards (right) ── */}
                {featuredInsight && (
                    <div style={{ padding: isMobile ? '24px 16px 48px' : '40px 24px 64px' }}>
                        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'stretch', gap: isMobile ? 16 : 0 }}>

                            {/* Left — Featured dark card */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, ease: ease, delay: 0.1 }}
                                style={{ flex: isMobile ? 'none' : '0 0 55%', position: 'relative', background: '#001736', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: isMobile ? 320 : 420, padding: isMobile ? 28 : 48, cursor: 'pointer' }}
                                onClick={() => navigate(`/news-insights/insights/${featuredInsight.slug}`)}
                            >
                                {featuredInsight.heroImage && (
                                    <img
                                        style={{ width: '100%', height: '100%', left: 0, top: 0, position: 'absolute', objectFit: 'cover', opacity: 0.35 }}
                                        src={featuredInsight.heroImage}
                                        alt=""
                                    />
                                )}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'relative', zIndex: 1 }}>
                                    <span style={{ color: '#96F1FA', fontSize: 10, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2 }}>
                                        {featuredInsight.category}
                                    </span>
                                    <div style={{ color: 'white', fontSize: 30, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '38px', maxWidth: 480 }}>
                                        {featuredInsight.title}
                                    </div>
                                    <div style={{ color: '#A9C7FF', fontSize: 15, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22px', maxWidth: 440 }}>
                                        {featuredInsight.excerpt || featuredInsight.quote || ''}
                                    </div>
                                    <div style={{ paddingTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <span style={{ color: '#1FC9C3', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20 }}>
                                            READ INSIGHT
                                        </span>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11" stroke="#1FC9C3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right — Stacked side cards */}
                            <div style={{ flex: isMobile ? 'none' : '0 0 45%', display: 'flex', flexDirection: 'column', gap: 16, padding: isMobile ? 0 : '0 0 0 16px' }}>
                                {sideCards.map((card, i) => (
                                    <motion.div
                                        key={card.slug}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.65, ease: ease, delay: 0.2 + i * 0.12 }}
                                        style={{ flex: 1, padding: 36, background: i === 0 ? 'white' : '#F3F4F5', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center', cursor: 'pointer' }}
                                        onClick={() => navigate(`/news-insights/insights/${card.slug}`)}
                                    >
                                        <span style={{ color: i === 0 ? '#006970' : '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2 }}>
                                            {card.category}
                                        </span>
                                        <div style={{ color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '28px' }}>
                                            {card.title}
                                        </div>
                                        <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '21px' }}>
                                            {card.excerpt || card.quote || ''}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ── Section 2: All Published Insights ── */}
                {publishedInsights.length > 0 && (
                    <div style={{ padding: isMobile ? '32px 16px 64px' : '48px 24px 80px', background: '#F8F9FA' }}>
                        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: sharp }}
                                style={{ paddingBottom: 16, borderBottom: '1px rgba(196, 198, 208, 0.20) solid', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}
                            >
                                <span style={{ color: '#001736', fontSize: 28, fontFamily: 'Manrope', fontWeight: 800, lineHeight: '36px' }}>PUBLISHED INSIGHTS</span>
                                <span style={{ color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 3 }}>Whitepapers, Reports & Research</span>
                            </motion.div>

                            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? 32 : 28 }}>
                                {publishedInsights.slice(0, 6).map((item, i) => {
                                    const tc = insightTypeColors[item.insightType] || { bg: '#E7E8E9', color: '#43474F' }
                                    return (
                                        <motion.div
                                            key={item.slug}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, ease: ease, delay: 0.1 + i * 0.08 }}
                                            style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                                            onClick={() => navigate(`/news-insights/insights/${item.slug}`)}
                                        >
                                            {item.heroImage && (
                                                <div style={{ background: '#E7E8E9', overflow: 'hidden', marginBottom: 20, borderRadius: 4 }}>
                                                    <img style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} src={item.heroImage} alt={item.title} />
                                                </div>
                                            )}
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                                                <span style={{ display: 'inline-block', padding: '3px 10px', background: tc.bg, borderRadius: 20, color: tc.color, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                                    {insightTypeLabels[item.insightType] || item.insightType}
                                                </span>
                                                <span style={{ color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1 }}>
                                                    {item.category}
                                                </span>
                                            </div>
                                            <div style={{ color: '#001736', fontSize: 18, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '26px', marginBottom: 10 }}>
                                                {item.title}
                                            </div>
                                            <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '21px', marginBottom: 16, flex: 1 }}>
                                                {item.excerpt || ''}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <span style={{ color: '#43474F', fontSize: 11, fontFamily: 'Inter', fontWeight: 500 }}>
                                                    {item.author?.name} · {item.date}
                                                </span>
                                                <span style={{ color: '#001736', fontSize: 12, fontFamily: 'Inter', fontWeight: 600, textDecoration: 'underline', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20 }}>
                                                    READ
                                                </span>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>

                            {publishedInsights.length > 6 && (
                                <div style={{ display: 'flex', marginTop: 24 }}>
                                    <button
                                        onClick={() => navigate('/news-insights/insights/list')}
                                        style={{
                                            padding: '12px 28px',
                                            background: 'transparent',
                                            color: '#001736',
                                            border: '1px solid #001736',
                                            fontSize: 14,
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            cursor: 'pointer',
                                            letterSpacing: 1,
                                            textTransform: 'uppercase',
                                            transition: 'all 0.2s',
                                            borderRadius: '999px'
                                        }}
                                        onMouseOver={(e) => { e.currentTarget.style.background = '#001736'; e.currentTarget.style.color = 'white'; }}
                                        onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#001736'; }}
                                    >
                                        Show More Insights
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

            </div>
        </PageLayout>
    )
}
