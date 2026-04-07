import { useParams, useNavigate, Link, useLocation } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import PageLayout from '../../../components/PageLayout'
import { useResponsive } from '../../../hooks/useResponsive'
import { useInsights } from '../../../context/InsightsContext'
import emptyNewsPreview from '../news/assets/empty-news-preview.png'

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

const articleStyles = `
.article-back-btn {
    transition: color 0.15s ease, gap 0.15s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: #43474F;
}
.article-back-btn:hover {
    color: #006970;
    gap: 12px;
}
.insight-related-card {
    cursor: pointer;
    transition: transform 0.22s ease;
}
.insight-related-card:hover {
    transform: translateY(-4px);
}
.insight-related-card:hover .related-card-title {
    color: #006970 !important;
}
.related-card-title {
    transition: color 0.18s ease;
}
.sidebar-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: gap 0.15s ease;
}
.sidebar-cta:hover {
    gap: 12px;
}
`

function EmptyHero({ height }) {
    return (
        <div style={{
            width: '100%',
            height,
            background: 'linear-gradient(135deg, #E7F6F6 0%, #d4eced 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <img src={emptyNewsPreview} alt="No image available" style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.85 }} />
        </div>
    )
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
            <PageLayout fullWidth title="" lightHero seoTitle="Loading Insight">
                <style>{articleStyles}</style>
                <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                        <div style={{ width: 40, height: 40, border: '3px solid #E7E8E9', borderTopColor: '#006970', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                        <span style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 500 }}>Loading insight…</span>
                    </div>
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                </div>
            </PageLayout>
        )
    }

    if (!insight) {
        return (
            <PageLayout fullWidth title="" lightHero seoTitle="Insight Not Found">
                <style>{articleStyles}</style>
                <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, padding: '48px 24px' }}>
                    <div style={{ width: 72, height: 72, background: '#E7F6F6', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                        </svg>
                    </div>
                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <h1 style={{ margin: 0, color: '#001736', fontSize: 28, fontFamily: 'Manrope', fontWeight: 800 }}>Insight Not Found</h1>
                        <p style={{ margin: 0, color: '#43474F', fontSize: 15, fontFamily: 'Inter', lineHeight: '24px' }}>
                            The insight you're looking for doesn't exist or may have been removed.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate('/news-insights/insights')}
                        style={{ padding: '12px 28px', background: '#006970', color: 'white', border: 'none', borderRadius: 6, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter', letterSpacing: 0.3 }}
                    >
                        Back to Insights
                    </button>
                </div>
            </PageLayout>
        )
    }

    const related = getRelated(insight.relatedSlugs || [])
    const heroImage = insight.heroImage || null
    const typeStyle = insightTypeColors[insight.insightType] || { bg: '#E7F6F6', color: '#006970' }

    return (
        <PageLayout fullWidth title="" lightHero seoTitle={insight.title} seoDescription={insight.excerpt || insight.quote || `Read ${insight.title} on ETOH Health Insights.`}>
            <style>{articleStyles}</style>

            {/* ── Top Nav Bar ── */}
            <div style={{ padding: isMobile ? '72px 16px 0' : '88px 40px 0', maxWidth: 1280, margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: sharp }}
                >
                    <Link to="/news-insights/insights" className="article-back-btn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13 8H3M3 8L7.5 3.5M3 8L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span style={{ fontSize: 13, fontFamily: 'Inter', fontWeight: 600 }}>Back to Insights</span>
                    </Link>
                </motion.div>
            </div>

            {/* ── Article Header ── */}
            <div style={{ padding: isMobile ? '32px 16px 0' : '40px 40px 0', maxWidth: 1280, margin: '0 auto' }}>
                <div style={{ maxWidth: 800 }}>

                    {/* Badges + Date row */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease: sharp }}
                        style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}
                    >
                        <span style={{
                            padding: '4px 12px',
                            background: '#006970',
                            borderRadius: 3,
                            color: 'white',
                            fontSize: 10,
                            fontFamily: 'Inter',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: 1.2,
                            whiteSpace: 'nowrap',
                        }}>
                            {insight.category}
                        </span>
                        <span style={{
                            padding: '4px 10px',
                            background: typeStyle.bg,
                            borderRadius: 3,
                            color: typeStyle.color,
                            fontSize: 10,
                            fontFamily: 'Inter',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: 1.2,
                            whiteSpace: 'nowrap',
                        }}>
                            {insightTypeLabels[insight.insightType] || insight.insightType}
                        </span>
                        <span style={{ color: '#6B7280', fontSize: 13, fontFamily: 'Inter', fontWeight: 500 }}>
                            {insight.date}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease, delay: 0.08 }}
                        style={{
                            margin: '0 0 32px',
                            color: '#001736',
                            fontSize: isMobile ? 30 : 56,
                            fontFamily: 'Manrope',
                            fontWeight: 800,
                            lineHeight: isMobile ? '38px' : '64px',
                            letterSpacing: '-0.5px',
                        }}
                    >
                        {insight.title}
                    </motion.h1>

                    {/* Author */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease, delay: 0.18 }}
                        style={{ display: 'flex', alignItems: 'center', gap: 14, paddingBottom: 32, borderBottom: '1px solid #E7E8E9' }}
                    >
                        <div style={{
                            width: 44, height: 44,
                            background: 'linear-gradient(135deg, #006970 0%, #004d52 100%)',
                            borderRadius: 10,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexShrink: 0,
                        }}>
                            <span style={{ fontSize: 16, fontWeight: 700, color: 'white', fontFamily: 'Manrope' }}>
                                {insight.author.name.split(' ').map(w => w[0]).join('')}
                            </span>
                        </div>
                        <div>
                            <div style={{ color: '#191C1D', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, lineHeight: '20px' }}>
                                {insight.author.name}
                            </div>
                            <div style={{ color: '#6B7280', fontSize: 11, fontFamily: 'Inter', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1.1, marginTop: 2 }}>
                                {insight.author.role}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Hero Image ── */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease, delay: 0.28 }}
                style={{ padding: isMobile ? '32px 16px' : '40px 40px', maxWidth: 1280, margin: '0 auto' }}
            >
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 12, height: isMobile ? 240 : 520 }}>
                    {heroImage ? (
                        <>
                            <img
                                src={heroImage}
                                alt={insight.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex' }}
                            />
                            <div style={{ display: 'none', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
                                <EmptyHero height="100%" />
                            </div>
                        </>
                    ) : (
                        <EmptyHero height={isMobile ? 240 : 520} />
                    )}
                    {heroImage && (
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,23,54,0.35) 0%, transparent 55%)' }} />
                    )}
                </div>
            </motion.div>

            {/* ── Body: Content + Sidebar ── */}
            <div ref={contentRef} style={{ padding: isMobile ? '0 16px 64px' : '0 40px 80px', maxWidth: 1280, margin: '0 auto' }}>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 48 : 80, alignItems: 'flex-start' }}>

                    {/* ── Main Article Body ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={contentInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease, delay: 0.05 }}
                        style={{ flex: 1, minWidth: 0 }}
                    >
                        {/* Pull Quote */}
                        {insight.quote && (
                            <div style={{
                                margin: '0 0 40px',
                                padding: '24px 28px',
                                background: '#F0FAF9',
                                borderLeft: '4px solid #006970',
                                borderRadius: '0 8px 8px 0',
                            }}>
                                <p style={{
                                    margin: 0,
                                    color: '#004d52',
                                    fontSize: isMobile ? 18 : 22,
                                    fontFamily: 'Manrope',
                                    fontWeight: 400,
                                    lineHeight: '36px',
                                    fontStyle: 'italic',
                                }}>
                                    "{insight.quote}"
                                </p>
                            </div>
                        )}

                        {/* Sections */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                            {insight.sections.map((section, i) => {
                                if (section.type === 'paragraph') {
                                    return (
                                        <p key={i} style={{
                                            margin: 0,
                                            color: '#374151',
                                            fontSize: 17,
                                            fontFamily: 'Inter',
                                            fontWeight: 400,
                                            lineHeight: '30px',
                                        }}>
                                            {section.text}
                                        </p>
                                    )
                                }
                                if (section.type === 'heading') {
                                    const isH2 = section.level === 2
                                    return (
                                        <div key={i} style={{ paddingTop: isH2 ? 16 : 8 }}>
                                            <h2 style={{
                                                margin: 0,
                                                color: '#001736',
                                                fontSize: isH2 ? 26 : 19,
                                                fontFamily: 'Manrope',
                                                fontWeight: isH2 ? 800 : 700,
                                                lineHeight: isH2 ? '34px' : '27px',
                                            }}>
                                                {section.text}
                                            </h2>
                                        </div>
                                    )
                                }
                                if (section.type === 'bullets') {
                                    return (
                                        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 14, paddingTop: 4 }}>
                                            {section.items.map((item, j) => (
                                                <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                                                    <div style={{
                                                        flexShrink: 0,
                                                        marginTop: 8,
                                                        width: 8, height: 8,
                                                        background: '#006970',
                                                        borderRadius: '50%',
                                                    }} />
                                                    <span style={{ color: '#374151', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, lineHeight: '30px' }}>
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
                    </motion.div>

                    {/* ── Sidebar ── */}
                    {insight.sidebar && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={contentInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease, delay: 0.15 }}
                            style={{ flexShrink: 0, width: isMobile ? '100%' : 300, position: isMobile ? 'static' : 'sticky', top: 100 }}
                        >
                            <div style={{
                                background: 'white',
                                borderRadius: 12,
                                border: '1px solid #E7E8E9',
                                overflow: 'hidden',
                                boxShadow: '0 2px 16px rgba(0,23,54,0.06)',
                            }}>
                                {/* Sidebar Header */}
                                <div style={{ padding: '18px 24px', background: '#006970' }}>
                                    <span style={{
                                        color: 'white',
                                        fontSize: 11,
                                        fontFamily: 'Manrope',
                                        fontWeight: 900,
                                        textTransform: 'uppercase',
                                        letterSpacing: 2.4,
                                    }}>
                                        {insight.sidebar.title}
                                    </span>
                                </div>

                                {/* Sidebar Items */}
                                <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 0 }}>
                                    {insight.sidebar.items.map((item, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                paddingTop: i > 0 ? 18 : 0,
                                                paddingBottom: 18,
                                                borderBottom: i < insight.sidebar.items.length - 1 ? '1px solid #F3F4F5' : 'none',
                                                display: 'flex', flexDirection: 'column', gap: 5,
                                            }}
                                        >
                                            <span style={{ color: '#001736', fontSize: 11, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8 }}>
                                                {item.label}
                                            </span>
                                            <span style={{ color: '#43474F', fontSize: 13, fontFamily: 'Inter', fontWeight: 400, lineHeight: '21px' }}>
                                                {item.text}
                                            </span>
                                        </div>
                                    ))}

                                    {insight.sidebar.ctaText && (
                                        <div style={{ paddingTop: 18 }}>
                                            <span className="sidebar-cta">
                                                <span style={{ color: '#006970', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
                                                    {insight.sidebar.ctaText}
                                                </span>
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M1 5H9M9 5L5.5 1.5M9 5L5.5 8.5" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* ── Related Insights ── */}
            {related.length > 0 && (
                <div ref={relatedRef} style={{ padding: isMobile ? '0 16px 72px' : '0 40px 96px', maxWidth: 1280, margin: '0 auto' }}>
                    <div style={{ paddingTop: 64, borderTop: '1px solid #E7E8E9' }}>

                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: sharp }}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: isMobile ? 'flex-start' : 'flex-end',
                                flexDirection: isMobile ? 'column' : 'row',
                                gap: 16,
                                marginBottom: 40,
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                <span style={{ color: '#006970', fontSize: 11, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2.2 }}>
                                    Continue Reading
                                </span>
                                <span style={{ color: '#001736', fontSize: isMobile ? 24 : 32, fontFamily: 'Manrope', fontWeight: 800, lineHeight: '38px' }}>
                                    Related Insights
                                </span>
                            </div>
                            <Link
                                to="/news-insights/insights"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 6,
                                    padding: '9px 18px',
                                    border: '1.5px solid #D1D5DB',
                                    borderRadius: 6,
                                    textDecoration: 'none',
                                    color: '#374151',
                                    fontSize: 13,
                                    fontFamily: 'Inter',
                                    fontWeight: 600,
                                    transition: 'border-color 0.15s ease, color 0.15s ease',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = '#006970'; e.currentTarget.style.color = '#006970' }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = '#D1D5DB'; e.currentTarget.style.color = '#374151' }}
                            >
                                View All Insights
                            </Link>
                        </motion.div>

                        {/* Related Cards */}
                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : `repeat(${Math.min(related.length, 3)}, 1fr)`, gap: isMobile ? 28 : 24 }}>
                            {related.slice(0, 3).map((rel, i) => (
                                <motion.div
                                    key={rel.slug}
                                    className="insight-related-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.55, ease, delay: 0.08 + i * 0.1 }}
                                    onClick={() => navigate(`/news-insights/insights/${rel.slug}`)}
                                >
                                    {/* Thumbnail */}
                                    <div style={{ borderRadius: 8, overflow: 'hidden', marginBottom: 18, height: 200 }}>
                                        {rel.heroImage ? (
                                            <img
                                                src={rel.heroImage}
                                                alt={rel.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                                onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = '#E7F6F6' }}
                                            />
                                        ) : (
                                            <div style={{
                                                width: '100%', height: '100%',
                                                background: 'linear-gradient(135deg, #E7F6F6 0%, #d4eced 100%)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            }}>
                                                <img src={emptyNewsPreview} alt="No image" style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.85 }} />
                                            </div>
                                        )}
                                    </div>

                                    {/* Meta */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                                        <span style={{ color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.4 }}>
                                            {rel.category}
                                        </span>
                                        {rel.insightType && (
                                            <span style={{
                                                padding: '2px 8px',
                                                background: (insightTypeColors[rel.insightType] || { bg: '#E7F6F6' }).bg,
                                                color: (insightTypeColors[rel.insightType] || { color: '#006970' }).color,
                                                fontSize: 9,
                                                fontFamily: 'Inter',
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                                letterSpacing: 0.8,
                                                borderRadius: 2,
                                            }}>
                                                {insightTypeLabels[rel.insightType] || rel.insightType}
                                            </span>
                                        )}
                                    </div>
                                    <div className="related-card-title" style={{ color: '#001736', fontSize: 17, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '24px' }}>
                                        {rel.title}
                                    </div>
                                    {rel.date && (
                                        <div style={{ color: '#9CA3AF', fontSize: 12, fontFamily: 'Inter', marginTop: 8 }}>
                                            {rel.date}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </PageLayout>
    )
}
