import { useParams, useNavigate, Link, useLocation } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
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

export default function InsightArticlePage() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const { isMobile } = useResponsive()
    const { getBySlug, getRelated, loading } = useInsights()
    const insight = getBySlug(slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    const contentRef = useRef(null)
    const relatedRef = useRef(null)
    const contentInView = useInView(contentRef, { once: true, amount: 0.1 })
    const relatedInView = useInView(relatedRef, { once: true, amount: 0.15 })

    if (loading) {
        return (
            <PageLayout fullWidth title="" lightHero>
                <div style={{ fontFamily: "'Inter', sans-serif", padding: '120px 24px', textAlign: 'center' }}>
                    <div style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter' }}>Loading insight...</div>
                </div>
            </PageLayout>
        )
    }

    if (!insight) {
        return (
            <PageLayout fullWidth title="" lightHero>
                <div style={{ fontFamily: "'Inter', sans-serif", padding: '120px 24px', textAlign: 'center' }}>
                    <h1 style={{ color: '#001736', fontSize: 36, fontFamily: 'Manrope', fontWeight: 800 }}>Insight Not Found</h1>
                    <p style={{ color: '#43474F', fontSize: 18, marginTop: 16 }}>The insight you're looking for doesn't exist.</p>
                    <button onClick={() => navigate('/news-insights/insights')} style={{ marginTop: 32, padding: '12px 32px', background: '#006970', color: 'white', border: 'none', borderRadius: 4, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter' }}>
                        Back to Insights
                    </button>
                </div>
            </PageLayout>
        )
    }

    const related = getRelated(insight.relatedSlugs || [])

    return (
        <PageLayout fullWidth title="" lightHero>
            <div style={{ fontFamily: "'Inter', sans-serif" }}>

                {/* ── Header: Category + Date + Title + Author ── */}
                <div style={{ padding: isMobile ? '48px 16px 0' : '80px 32px 0', maxWidth: 1536, margin: '0 auto' }}>
                    <div style={{ maxWidth: 896, display: 'flex', flexDirection: 'column', gap: 32 }}>

                        {/* Back Button */}
                        <motion.div
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: sharp }}
                        >
                            <Link to="/news-insights/insights" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#43474F' }}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 8H3M3 8L7.5 3.5M3 8L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span style={{ fontSize: 14, fontFamily: 'Inter', fontWeight: 600, lineHeight: '20px' }}>
                                    Back to Insights
                                </span>
                            </Link>
                        </motion.div>

                        {/* Badge + Type + Date */}
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: sharp }}
                            style={{ display: 'flex', alignItems: 'center', gap: 16 }}
                        >
                            <div style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: '#006970', borderRadius: 2, display: 'inline-flex' }}>
                                <span style={{ color: 'white', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, whiteSpace: 'nowrap' }}>
                                    {insight.category}
                                </span>
                            </div>
                            <div style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 3, paddingBottom: 3, background: '#EEF2FF', borderRadius: 2, display: 'inline-flex' }}>
                                <span style={{ color: '#4F46E5', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, whiteSpace: 'nowrap' }}>
                                    {insightTypeLabels[insight.insightType] || insight.insightType}
                                </span>
                            </div>
                            <span style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 500, lineHeight: '16px', letterSpacing: 0.3 }}>
                                {insight.date}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, ease, delay: 0.1 }}
                            style={{ margin: 0, color: '#001736', fontSize: isMobile ? 36 : 72, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '42px' : '72px' }}
                        >
                            {insight.title}
                        </motion.h1>

                        {/* Author */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease, delay: 0.25 }}
                            style={{ display: 'flex', alignItems: 'center', gap: 16 }}
                        >
                            <div style={{ width: 48, height: 48, background: '#E7E8E9', borderRadius: 12, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: 20, fontWeight: 700, color: '#006970', fontFamily: 'Manrope' }}>
                                    {insight.author.name.split(' ').map(w => w[0]).join('')}
                                </span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ color: '#191C1D', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, lineHeight: '20px' }}>
                                    {insight.author.name}
                                </span>
                                <span style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 500, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.2 }}>
                                    {insight.author.role}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ── Hero Image ── */}
                {insight.heroImage && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease, delay: 0.35 }}
                        style={{ padding: isMobile ? '32px 16px' : '48px 32px', maxWidth: 1536, margin: '0 auto' }}
                    >
                        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 8, height: isMobile ? 280 : 600 }}>
                            <img
                                src={insight.heroImage}
                                alt={insight.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                            <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: '100%', background: 'linear-gradient(0deg, rgba(0, 23, 54, 0.40) 0%, rgba(0, 23, 54, 0) 100%)' }} />
                        </div>
                    </motion.div>
                )}

                {/* ── Insight Content + Sidebar ── */}
                <div ref={contentRef} style={{ padding: isMobile ? '0 16px 48px' : '0 32px 64px', maxWidth: 1536, margin: '0 auto' }}>
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 48 : 64 }}>

                        {/* Main Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={contentInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease, delay: 0.1 }}
                            style={{ flex: 1, paddingTop: 16, paddingBottom: 64, display: 'flex', flexDirection: 'column', gap: 40 }}
                        >
                            {/* Blockquote */}
                            {insight.quote && (
                                <div style={{ paddingLeft: 32, borderLeft: '4px #006970 solid' }}>
                                    <p style={{ margin: 0, color: '#43474F', fontSize: isMobile ? 20 : 24, fontFamily: 'Manrope', fontWeight: 300, lineHeight: '39px' }}>
                                        {insight.quote}
                                    </p>
                                </div>
                            )}

                            {/* Sections */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                                {insight.sections.map((section, i) => {
                                    if (section.type === 'paragraph') {
                                        return (
                                            <p key={i} style={{ margin: 0, color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: '29.25px' }}>
                                                {section.text}
                                            </p>
                                        )
                                    }
                                    if (section.type === 'heading') {
                                        const fontSize = section.level === 2 ? 30 : 20
                                        const fontWeight = section.level === 2 ? 800 : 700
                                        const lineHeight = section.level === 2 ? '36px' : '28px'
                                        return (
                                            <div key={i} style={{ paddingTop: 16 }}>
                                                <h2 style={{ margin: 0, color: '#001736', fontSize, fontFamily: 'Manrope', fontWeight, lineHeight }}>
                                                    {section.text}
                                                </h2>
                                            </div>
                                        )
                                    }
                                    if (section.type === 'bullets') {
                                        return (
                                            <div key={i} style={{ paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 15.6 }}>
                                                {section.items.map((item, j) => (
                                                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                                                        <div style={{ paddingTop: 4 }}>
                                                            <div style={{ width: 20, height: 20, background: '#006970', borderRadius: 2 }} />
                                                        </div>
                                                        <span style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: '29.25px' }}>
                                                            {item}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    }
                                    return null
                                })}
                            </div>

                            {/* Sidebar Card (inline on mobile, below content) */}
                            {insight.sidebar && (
                                <div style={{ padding: 32, background: '#F3F4F5', borderRadius: 8, borderLeft: '2px rgba(0, 105, 112, 0.30) solid', display: 'flex', flexDirection: 'column', gap: 24, position: 'relative', overflow: 'hidden' }}>
                                    <span style={{ color: '#006970', fontSize: 14, fontFamily: 'Manrope', fontWeight: 900, textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 2.8 }}>
                                        {insight.sidebar.title}
                                    </span>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                        {insight.sidebar.items.map((item, i) => (
                                            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6.75, ...(i > 0 ? { paddingTop: 24, borderTop: '1px rgba(196, 198, 208, 0.30) solid' } : {}) }}>
                                                <span style={{ color: '#001736', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 0.6 }}>
                                                    {item.label}
                                                </span>
                                                <span style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22.75px' }}>
                                                    {item.text}
                                                </span>
                                            </div>
                                        ))}
                                        {insight.sidebar.ctaText && (
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                                                <span style={{ color: '#006970', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.2 }}>
                                                    {insight.sidebar.ctaText}
                                                </span>
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 5H9M9 5L5.5 1.5M9 5L5.5 8.5" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* ── Related Insights ── */}
                {related.length > 0 && (
                    <div ref={relatedRef} style={{ padding: isMobile ? '0 16px 64px' : '0 32px 80px', maxWidth: 1536, margin: '0 auto' }}>
                        <div style={{ paddingTop: 64, borderTop: '1px rgba(196, 198, 208, 0.30) solid', display: 'flex', flexDirection: 'column', gap: 48 }}>

                            {/* Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, ease: sharp }}
                                style={{ display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', flexDirection: isMobile ? 'column' : 'row', gap: 16 }}
                            >
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                    <span style={{ color: '#006970', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 2.4 }}>
                                        Continue Reading
                                    </span>
                                    <span style={{ color: '#001736', fontSize: isMobile ? 28 : 36, fontFamily: 'Manrope', fontWeight: 800, lineHeight: '40px' }}>
                                        Related Insights
                                    </span>
                                </div>
                                <Link to="/news-insights/insights" style={{ paddingBottom: 4, borderBottom: '2px rgba(0, 23, 54, 0.10) solid', textDecoration: 'none' }}>
                                    <span style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, lineHeight: '20px' }}>
                                        View All Insights
                                    </span>
                                </Link>
                            </motion.div>

                            {/* Cards */}
                            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 32 : 24 }}>
                                {related.slice(0, 3).map((rel, i) => (
                                    <motion.div
                                        key={rel.slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.1 }}
                                        style={{ flex: 1, cursor: 'pointer' }}
                                        onClick={() => navigate(`/news-insights/insights/${rel.slug}`)}
                                    >
                                        {rel.heroImage && (
                                            <div style={{ background: '#E7E8E9', overflow: 'hidden', borderRadius: 4, marginBottom: 24 }}>
                                                <img src={rel.heroImage} alt={rel.title} style={{ width: '100%', height: 216, objectFit: 'cover', display: 'block' }} />
                                            </div>
                                        )}
                                        <span style={{ color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1.5, display: 'block', marginBottom: 12 }}>
                                            {rel.category}
                                        </span>
                                        <div style={{ color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '25px' }}>
                                            {rel.title}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </PageLayout>
    )
}
