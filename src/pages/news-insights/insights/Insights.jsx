import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageLayout from '../../../components/PageLayout'
import { useResponsive } from '../../../hooks/useResponsive'
import { useInsights } from '../../../context/InsightsContext'
import insightBg from './insight-background.png'

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

const filterTypes = ['All', 'Whitepaper', 'Report', 'Research Brief', 'Case Study']

/* ── Skeleton shimmer keyframe injected once ── */
const shimmerStyle = `
@keyframes shimmer {
  0%   { background-position: -800px 0; }
  100% { background-position: 800px 0; }
}
.shimmer-bar {
  background: linear-gradient(90deg, #e8eaed 25%, #f3f4f6 50%, #e8eaed 75%);
  background-size: 800px 100%;
  animation: shimmer 1.4s infinite linear;
  border-radius: 4px;
}
.insight-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 36px rgba(0,23,54,0.10);
}
.insight-card {
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}
.side-card:hover {
  border-left-color: #006970 !important;
  box-shadow: 0 4px 20px rgba(0,23,54,0.08);
}
.side-card {
  transition: border-left-color 0.2s ease, box-shadow 0.2s ease;
}
.read-link:hover {
  color: #006970 !important;
}
.read-link {
  transition: color 0.15s ease;
}
.filter-pill {
  transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
}
.filter-pill:hover {
  background: #001736 !important;
  color: #fff !important;
  border-color: #001736 !important;
}
.featured-card-inner:hover .featured-cta-text {
  letter-spacing: 2px;
}
.featured-cta-text {
  transition: letter-spacing 0.2s ease;
}
`

function SkeletonLoading({ isMobile }) {
    return (
        <div style={{ padding: isMobile ? '48px 16px' : '80px 24px' }}>
            <style>{shimmerStyle}</style>
            <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 64 }}>
                {/* Hero skeleton */}
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 48 }}>
                    <div style={{ flex: '0 0 55%', display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <div className="shimmer-bar" style={{ width: 140, height: 22 }} />
                        <div className="shimmer-bar" style={{ width: '90%', height: 60 }} />
                        <div className="shimmer-bar" style={{ width: '70%', height: 60 }} />
                    </div>
                    <div style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column', gap: 12, paddingTop: isMobile ? 0 : 80 }}>
                        <div className="shimmer-bar" style={{ width: '100%', height: 18 }} />
                        <div className="shimmer-bar" style={{ width: '100%', height: 18 }} />
                        <div className="shimmer-bar" style={{ width: '80%', height: 18 }} />
                    </div>
                </div>
                {/* Cards skeleton */}
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 16, height: isMobile ? 'auto' : 500 }}>
                    <div className="shimmer-bar" style={{ flex: '0 0 55%', minHeight: isMobile ? 260 : 500 }} />
                    <div style={{ flex: '0 0 45%', display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <div className="shimmer-bar" style={{ flex: 1, minHeight: 100 }} />
                        <div className="shimmer-bar" style={{ flex: 1, minHeight: 100 }} />
                    </div>
                </div>
                {/* Grid skeleton */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 24 }}>
                    {[0, 1, 2, 3, 4, 5].map(n => (
                        <div key={n} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <div className="shimmer-bar" style={{ width: '100%', aspectRatio: '16/9' }} />
                            <div className="shimmer-bar" style={{ width: 90, height: 16 }} />
                            <div className="shimmer-bar" style={{ width: '100%', height: 22 }} />
                            <div className="shimmer-bar" style={{ width: '85%', height: 16 }} />
                            <div className="shimmer-bar" style={{ width: '60%', height: 16 }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function InsightsPage() {
    const navigate = useNavigate()
    const { isMobile } = useResponsive()
    const { insights, loading } = useInsights()
    const [activeFilter, setActiveFilter] = useState('All')

    // Organize insights
    const featuredInsight = insights.find(i => i.featured) || insights[0] || null
    const nonFeatured = featuredInsight ? insights.filter(i => i !== featuredInsight) : insights
    const sideCards = nonFeatured.slice(0, 2)
    // Published grid = ALL non-featured insights (not sliced after sideCards)
    const allPublished = nonFeatured

    const typeKeyMap = {
        'All': null,
        'Whitepaper': 'whitepaper',
        'Report': 'report',
        'Research Brief': 'research_brief',
        'Case Study': 'case_study',
    }
    const publishedInsights = activeFilter === 'All'
        ? allPublished
        : allPublished.filter(i => i.insightType === typeKeyMap[activeFilter])

    if (loading) {
        return (
            <PageLayout fullWidth title="" lightHero noPadBottom seoTitle="Insights" seoDescription="Whitepapers, research briefs, and case studies from ETOH Health — system intelligence across a national healthcare network.">
                <SkeletonLoading isMobile={isMobile} />
            </PageLayout>
        )
    }

    return (
        <PageLayout fullWidth title="" lightHero noPadBottom seoTitle="Insights" seoDescription="Whitepapers, research briefs, and case studies from ETOH Health — system intelligence across a national healthcare network.">
            <style>{shimmerStyle}</style>
            <div style={{ fontFamily: "'Inter', sans-serif" }}>

                {/* ══════════════════════════════════════════════
                    HERO — two-column: badge + heading | body text
                ══════════════════════════════════════════════ */}
                <div style={{ padding: isMobile ? '56px 20px 0' : '88px 40px 0', background: '#fff' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: 'flex-start',
                            gap: isMobile ? 28 : 72,
                        }}>

                            {/* Left — Badge + Heading */}
                            <div style={{ flex: isMobile ? '1' : '0 0 56%', display: 'flex', flexDirection: 'column', gap: 20 }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, ease: sharp }}
                                    style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                                >
                                    {/* Accent bar */}
                                    <div style={{ width: 32, height: 3, background: '#006970', borderRadius: 2, flexShrink: 0 }} />
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '4px 12px',
                                        background: '#E7F6F6',
                                        borderRadius: 4,
                                        color: '#006970',
                                        fontSize: 11,
                                        fontFamily: 'Inter',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: 1.5,
                                    }}>
                                        Research & Intelligence
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 28 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.75, ease: ease, delay: 0.08 }}
                                    style={{
                                        margin: 0,
                                        color: '#001736',
                                        fontSize: isMobile ? 38 : 68,
                                        fontFamily: 'Manrope',
                                        fontWeight: 800,
                                        lineHeight: isMobile ? '46px' : '76px',
                                        letterSpacing: '-0.5px',
                                    }}
                                >
                                    System Intelligence<br />
                                    <span style={{ color: '#006970' }}>Across</span> a National Network.
                                </motion.h1>

                                {/* Subtle horizontal rule below heading */}
                                <motion.div
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.6, ease: ease, delay: 0.35 }}
                                    style={{ height: 1, background: 'linear-gradient(90deg, #006970 0%, rgba(0,105,112,0) 100%)', marginTop: 4 }}
                                />
                            </div>

                            {/* Right — Body */}
                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: ease, delay: 0.28 }}
                                style={{ flex: isMobile ? '1' : '0 0 40%', paddingTop: isMobile ? 0 : 96 }}
                            >
                                <p style={{
                                    margin: 0,
                                    color: '#43474F',
                                    fontSize: 17,
                                    fontFamily: 'Inter',
                                    fontWeight: 400,
                                    lineHeight: '30px',
                                }}>
                                    Our proprietary research reveals non-obvious correlations between facility staffing ratios and patient outcome stability. Access our whitepapers, reports, and case studies on healthcare innovation.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* ══════════════════════════════════════════════
                    FEATURE ROW — dark featured card + side cards
                ══════════════════════════════════════════════ */}
                {featuredInsight && (
                    <div style={{ padding: isMobile ? '32px 20px 56px' : '44px 40px 72px', background: '#fff' }}>
                        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                alignItems: 'stretch',
                                gap: isMobile ? 16 : 20,
                            }}>

                                {/* ── Featured dark card ── */}
                                <motion.div
                                    className="featured-card-inner"
                                    initial={{ opacity: 0, x: -32 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, ease: ease, delay: 0.1 }}
                                    style={{
                                        flex: isMobile ? 'none' : '0 0 56%',
                                        position: 'relative',
                                        background: '#001736',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        minHeight: isMobile ? 340 : 520,
                                        cursor: 'pointer',
                                        borderRadius: 8,
                                    }}
                                    onClick={() => navigate(`/news-insights/insights/${featuredInsight.slug}`)}
                                >
                                    {/* Hero image / fallback background */}
                                    <img
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            left: 0,
                                            top: 0,
                                            position: 'absolute',
                                            objectFit: featuredInsight.heroImage ? 'cover' : 'contain',
                                            opacity: featuredInsight.heroImage ? 0.45 : 0.12,
                                            padding: featuredInsight.heroImage ? 0 : 40,
                                        }}
                                        src={featuredInsight.heroImage || insightBg}
                                        alt=""
                                    />

                                    {/* Gradient overlay — dark from bottom */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(0,23,54,0.98) 0%, rgba(0,23,54,0.75) 45%, rgba(0,23,54,0.15) 100%)',
                                        zIndex: 1,
                                    }} />

                                    {/* Top-left type badge */}
                                    {featuredInsight.insightType && (
                                        <div style={{
                                            position: 'absolute',
                                            top: isMobile ? 20 : 28,
                                            left: isMobile ? 24 : 36,
                                            zIndex: 2,
                                        }}>
                                            <span style={{
                                                display: 'inline-block',
                                                padding: '4px 12px',
                                                background: 'rgba(255,255,255,0.12)',
                                                border: '1px solid rgba(255,255,255,0.22)',
                                                borderRadius: 20,
                                                color: '#fff',
                                                fontSize: 10,
                                                fontFamily: 'Inter',
                                                fontWeight: 600,
                                                textTransform: 'uppercase',
                                                letterSpacing: 1.2,
                                            }}>
                                                {insightTypeLabels[featuredInsight.insightType] || featuredInsight.insightType}
                                            </span>
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 14,
                                        position: 'relative',
                                        zIndex: 2,
                                        padding: isMobile ? '24px 24px 28px' : '40px 40px 44px',
                                    }}>
                                        {/* Category */}
                                        <span style={{
                                            color: '#5BE3E8',
                                            fontSize: 10,
                                            fontFamily: 'Inter',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            letterSpacing: 2.5,
                                        }}>
                                            {featuredInsight.category}
                                        </span>

                                        {/* Title */}
                                        <div style={{
                                            color: '#fff',
                                            fontSize: isMobile ? 26 : 34,
                                            fontFamily: 'Manrope',
                                            fontWeight: 800,
                                            lineHeight: isMobile ? '34px' : '44px',
                                            maxWidth: 520,
                                            letterSpacing: '-0.3px',
                                        }}>
                                            {featuredInsight.title}
                                        </div>

                                        {/* Excerpt */}
                                        <div style={{
                                            color: 'rgba(196,215,255,0.88)',
                                            fontSize: 14,
                                            fontFamily: 'Inter',
                                            fontWeight: 400,
                                            lineHeight: '22px',
                                            maxWidth: 460,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                        }}>
                                            {featuredInsight.excerpt || featuredInsight.quote || ''}
                                        </div>

                                        {/* Divider */}
                                        <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '4px 0' }} />

                                        {/* Footer: author + CTA */}
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <span style={{
                                                color: 'rgba(255,255,255,0.6)',
                                                fontSize: 12,
                                                fontFamily: 'Inter',
                                                fontWeight: 500,
                                            }}>
                                                {featuredInsight.author?.name && `${featuredInsight.author.name} · `}{featuredInsight.date}
                                            </span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                                                <span
                                                    className="featured-cta-text"
                                                    style={{
                                                        color: '#1FC9C3',
                                                        fontSize: 11,
                                                        fontFamily: 'Inter',
                                                        fontWeight: 700,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: 1.5,
                                                    }}
                                                >
                                                    Read Insight
                                                </span>
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11" stroke="#1FC9C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* ── Side cards ── */}
                                <div style={{
                                    flex: isMobile ? 'none' : '1',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 20,
                                }}>
                                    {sideCards.map((card, i) => {
                                        const tc = insightTypeColors[card.insightType] || { bg: '#E7E8E9', color: '#43474F' }
                                        return (
                                            <motion.div
                                                key={card.slug}
                                                className="side-card"
                                                initial={{ opacity: 0, x: 32 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.65, ease: ease, delay: 0.18 + i * 0.14 }}
                                                style={{
                                                    flex: 1,
                                                    padding: isMobile ? '24px 22px' : '32px 32px',
                                                    background: '#fff',
                                                    border: '1px solid #E8EAED',
                                                    borderLeft: '4px solid #C4C6D0',
                                                    borderRadius: 8,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 12,
                                                    justifyContent: 'center',
                                                    cursor: 'pointer',
                                                    minHeight: isMobile ? 160 : 0,
                                                }}
                                                onClick={() => navigate(`/news-insights/insights/${card.slug}`)}
                                            >
                                                {/* Type pill + category */}
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                                                    <span style={{
                                                        display: 'inline-block',
                                                        padding: '3px 10px',
                                                        background: tc.bg,
                                                        borderRadius: 20,
                                                        color: tc.color,
                                                        fontSize: 10,
                                                        fontFamily: 'Inter',
                                                        fontWeight: 600,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: 0.8,
                                                    }}>
                                                        {insightTypeLabels[card.insightType] || card.insightType}
                                                    </span>
                                                    <span style={{
                                                        color: '#006970',
                                                        fontSize: 10,
                                                        fontFamily: 'Inter',
                                                        fontWeight: 700,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: 1.5,
                                                    }}>
                                                        {card.category}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <div style={{
                                                    color: '#001736',
                                                    fontSize: isMobile ? 18 : 20,
                                                    fontFamily: 'Manrope',
                                                    fontWeight: 700,
                                                    lineHeight: '28px',
                                                    letterSpacing: '-0.2px',
                                                }}>
                                                    {card.title}
                                                </div>

                                                {/* Excerpt */}
                                                <div style={{
                                                    color: '#5C6370',
                                                    fontSize: 14,
                                                    fontFamily: 'Inter',
                                                    fontWeight: 400,
                                                    lineHeight: '22px',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                }}>
                                                    {card.excerpt || card.quote || ''}
                                                </div>

                                                {/* Author + date */}
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    marginTop: 4,
                                                }}>
                                                    <span style={{
                                                        color: '#9CA3AF',
                                                        fontSize: 11,
                                                        fontFamily: 'Inter',
                                                        fontWeight: 500,
                                                    }}>
                                                        {card.author?.name && `${card.author.name} · `}{card.date}
                                                    </span>
                                                    <span className="read-link" style={{
                                                        color: '#001736',
                                                        fontSize: 12,
                                                        fontFamily: 'Inter',
                                                        fontWeight: 700,
                                                        letterSpacing: 0.5,
                                                    }}>
                                                        Read →
                                                    </span>
                                                </div>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ══════════════════════════════════════════════
                    PUBLISHED INSIGHTS GRID
                ══════════════════════════════════════════════ */}
                {allPublished.length > 0 && (
                    <div style={{
                        padding: isMobile ? '40px 20px 72px' : '56px 40px 96px',
                        background: '#fff',
                    }}>
                        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 44 }}>

                            {/* Section header */}
                            <motion.div
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: sharp }}
                            >
                                <div style={{
                                    display: 'flex',
                                    flexDirection: isMobile ? 'column' : 'row',
                                    alignItems: isMobile ? 'flex-start' : 'center',
                                    justifyContent: 'space-between',
                                    gap: 20,
                                    paddingBottom: 20,
                                    borderBottom: '2px solid #E8EAED',
                                }}>
                                    {/* Left: label */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                        <div style={{ width: 4, height: 28, background: '#006970', borderRadius: 2, flexShrink: 0 }} />
                                        <span style={{
                                            color: '#001736',
                                            fontSize: isMobile ? 20 : 26,
                                            fontFamily: 'Manrope',
                                            fontWeight: 800,
                                            letterSpacing: '0.5px',
                                            textTransform: 'uppercase',
                                        }}>
                                            Published Insights
                                        </span>
                                    </div>

                                    {/* Right: filter pills */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                                        {filterTypes.map((label) => {
                                            const isActive = activeFilter === label
                                            return (
                                                <button
                                                    key={label}
                                                    className="filter-pill"
                                                    onClick={() => setActiveFilter(label)}
                                                    style={{
                                                        padding: '6px 16px',
                                                        background: isActive ? '#001736' : 'transparent',
                                                        color: isActive ? '#fff' : '#43474F',
                                                        border: `1px solid ${isActive ? '#001736' : '#D1D5DB'}`,
                                                        borderRadius: 999,
                                                        fontSize: 12,
                                                        fontFamily: 'Inter',
                                                        fontWeight: 600,
                                                        cursor: 'pointer',
                                                        letterSpacing: 0.3,
                                                        lineHeight: '18px',
                                                    }}
                                                >
                                                    {label}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </motion.div>

                            {/* 3-column grid */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                                gap: isMobile ? 28 : 28,
                            }}>
                                {publishedInsights.slice(0, 6).map((item, i) => {
                                    const tc = insightTypeColors[item.insightType] || { bg: '#E7E8E9', color: '#43474F' }
                                    return (
                                        <motion.div
                                            key={item.slug}
                                            className="insight-card"
                                            initial={{ opacity: 0, y: 24 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.55, ease: ease, delay: 0.08 + i * 0.07 }}
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                cursor: 'pointer',
                                                background: '#fff',
                                                borderRadius: 8,
                                                overflow: 'hidden',
                                                border: '1px solid #E8EAED',
                                            }}
                                            onClick={() => navigate(`/news-insights/insights/${item.slug}`)}
                                        >
                                            {/* Image / placeholder */}
                                            {item.heroImage ? (
                                                <div style={{ overflow: 'hidden', flexShrink: 0 }}>
                                                    <img
                                                        style={{
                                                            width: '100%',
                                                            aspectRatio: '16/9',
                                                            objectFit: 'cover',
                                                            display: 'block',
                                                        }}
                                                        src={item.heroImage}
                                                        alt={item.title}
                                                    />
                                                </div>
                                            ) : (
                                                <div style={{
                                                    width: '100%',
                                                    aspectRatio: '16/9',
                                                    background: 'linear-gradient(135deg, #E8EDF3 0%, #D1D9E6 100%)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0,
                                                    overflow: 'hidden',
                                                }}>
                                                    <img
                                                        src={insightBg}
                                                        alt=""
                                                        style={{ width: '55%', height: '55%', objectFit: 'contain', opacity: 0.35 }}
                                                    />
                                                </div>
                                            )}

                                            {/* Card body */}
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 10,
                                                padding: isMobile ? '20px 18px 18px' : '22px 24px 20px',
                                                flex: 1,
                                            }}>
                                                {/* Type pill + category */}
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                                                    <span style={{
                                                        display: 'inline-block',
                                                        padding: '3px 10px',
                                                        background: tc.bg,
                                                        borderRadius: 20,
                                                        color: tc.color,
                                                        fontSize: 10,
                                                        fontFamily: 'Inter',
                                                        fontWeight: 600,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: 0.8,
                                                    }}>
                                                        {insightTypeLabels[item.insightType] || item.insightType}
                                                    </span>
                                                    <span style={{
                                                        color: '#006970',
                                                        fontSize: 10,
                                                        fontFamily: 'Inter',
                                                        fontWeight: 700,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: 1.2,
                                                    }}>
                                                        {item.category}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <div style={{
                                                    color: '#001736',
                                                    fontSize: 17,
                                                    fontFamily: 'Manrope',
                                                    fontWeight: 700,
                                                    lineHeight: '25px',
                                                    letterSpacing: '-0.15px',
                                                }}>
                                                    {item.title}
                                                </div>

                                                {/* Excerpt — 3-line clamp */}
                                                <div style={{
                                                    color: '#5C6370',
                                                    fontSize: 13,
                                                    fontFamily: 'Inter',
                                                    fontWeight: 400,
                                                    lineHeight: '20px',
                                                    flex: 1,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                }}>
                                                    {item.excerpt || ''}
                                                </div>

                                                {/* Divider */}
                                                <div style={{ height: 1, background: '#F0F1F3', marginTop: 4 }} />

                                                {/* Footer */}
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                }}>
                                                    <span style={{
                                                        color: '#9CA3AF',
                                                        fontSize: 11,
                                                        fontFamily: 'Inter',
                                                        fontWeight: 500,
                                                        lineHeight: '16px',
                                                    }}>
                                                        {item.author?.name && `${item.author.name} · `}{item.date}
                                                    </span>
                                                    <span className="read-link" style={{
                                                        color: '#001736',
                                                        fontSize: 12,
                                                        fontFamily: 'Inter',
                                                        fontWeight: 700,
                                                        letterSpacing: 0.3,
                                                    }}>
                                                        Read →
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>

                            {/* Empty state */}
                            {publishedInsights.length === 0 && (
                                <div style={{
                                    padding: '60px 0',
                                    textAlign: 'center',
                                    color: '#9CA3AF',
                                    fontFamily: 'Inter',
                                    fontSize: 15,
                                    fontWeight: 500,
                                }}>
                                    No insights found for <strong style={{ color: '#43474F' }}>{activeFilter}</strong>.
                                </div>
                            )}

                            {/* Show more button */}
                            {publishedInsights.length > 6 && (
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
                                    <button
                                        onClick={() => navigate('/news-insights/insights/list')}
                                        style={{
                                            padding: '13px 36px',
                                            background: 'transparent',
                                            color: '#001736',
                                            border: '1.5px solid #001736',
                                            borderRadius: 999,
                                            fontSize: 13,
                                            fontFamily: 'Inter',
                                            fontWeight: 700,
                                            cursor: 'pointer',
                                            letterSpacing: 1,
                                            textTransform: 'uppercase',
                                            transition: 'all 0.2s ease',
                                        }}
                                        onMouseOver={e => {
                                            e.currentTarget.style.background = '#001736'
                                            e.currentTarget.style.color = '#fff'
                                        }}
                                        onMouseOut={e => {
                                            e.currentTarget.style.background = 'transparent'
                                            e.currentTarget.style.color = '#001736'
                                        }}
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
