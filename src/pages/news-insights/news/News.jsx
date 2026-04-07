import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageLayout from '../../../components/PageLayout'
import { useResponsive } from '../../../hooks/useResponsive'
import { useNews } from '../../../context/NewsContext'
import emptyNewsPreview from './assets/empty-news-preview.png'

const ease = [0.22, 1, 0.36, 1]
const sharp = [0.25, 0.46, 0.45, 0.94]

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
.news-card {
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}
.news-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 36px rgba(0,23,54,0.10);
}
.news-side-card {
  transition: border-left-color 0.2s ease, box-shadow 0.2s ease;
}
.news-side-card:hover {
  border-left-color: #006970 !important;
  box-shadow: 0 4px 20px rgba(0,23,54,0.08);
}
.read-link {
  transition: color 0.15s ease;
}
.read-link:hover {
  color: #006970 !important;
}
.press-item {
  transition: background 0.18s ease;
}
.press-item:hover {
  background: #F8FAFA;
}
.press-item:hover .press-title {
  color: #006970 !important;
}
.press-title {
  transition: color 0.18s ease;
}
.featured-cta-text {
  transition: letter-spacing 0.2s ease;
}
.featured-card-inner:hover .featured-cta-text {
  letter-spacing: 2px;
}
`

function SkeletonLoading({ isMobile }) {
    return (
        <div style={{ padding: isMobile ? '48px 16px' : '80px 40px' }}>
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
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 20, height: isMobile ? 'auto' : 520 }}>
                    <div className="shimmer-bar" style={{ flex: '0 0 56%', minHeight: isMobile ? 260 : 520, borderRadius: 8 }} />
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
                        <div className="shimmer-bar" style={{ flex: 1, minHeight: 120, borderRadius: 8 }} />
                        <div className="shimmer-bar" style={{ flex: 1, minHeight: 120, borderRadius: 8 }} />
                    </div>
                </div>
                {/* Grid skeleton */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 24 }}>
                    {[0, 1, 2, 3, 4, 5].map(n => (
                        <div key={n} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <div className="shimmer-bar" style={{ width: '100%', aspectRatio: '16/9', borderRadius: 8 }} />
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

export default function NewsPage() {
    const navigate = useNavigate()
    const { isMobile } = useResponsive()
    const { articles, loading } = useNews()

    const featuredArticle = articles.find(a => a.articleType === 'featured') || articles[0] || null
    const nonFeatured = featuredArticle ? articles.filter(a => a !== featuredArticle) : articles
    const sideCards = nonFeatured.slice(0, 2)
    const pressReleases = nonFeatured.filter(a => a.articleType === 'press_release')
    const newsItems = nonFeatured.filter(a => a.articleType !== 'press_release')

    if (loading) {
        return (
            <PageLayout fullWidth title="" lightHero noPadBottom seoTitle="News" seoDescription="The latest news, press releases, and coverage of ETOH Health — updates from the operating layer of modern healthcare.">
                <SkeletonLoading isMobile={isMobile} />
            </PageLayout>
        )
    }

    return (
        <PageLayout fullWidth title="" lightHero noPadBottom seoTitle="News" seoDescription="The latest news, press releases, and coverage of ETOH Health — updates from the operating layer of modern healthcare.">
            <style>{shimmerStyle}</style>
            <div style={{ fontFamily: "'Inter', sans-serif" }}>

                {/* ══════════════════════════════════════════════
                    HERO — badge + heading (left) | body (right)
                ══════════════════════════════════════════════ */}
                <div style={{ padding: isMobile ? '56px 20px 0' : '88px 40px 0', background: '#fff' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: 'flex-start',
                            gap: isMobile ? 28 : 72,
                        }}>

                            {/* Left */}
                            <div style={{ flex: isMobile ? '1' : '0 0 56%', display: 'flex', flexDirection: 'column', gap: 20 }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, ease: sharp }}
                                    style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                                >
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
                                        Dispatch from the Center
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
                                    From the operating layer<br />
                                    <span style={{ color: '#006970' }}>of modern</span> healthcare.
                                </motion.h1>

                                <motion.div
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.6, ease: ease, delay: 0.35 }}
                                    style={{ height: 1, background: 'linear-gradient(90deg, #006970 0%, rgba(0,105,112,0) 100%)', marginTop: 4 }}
                                />
                            </div>

                            {/* Right */}
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
                                    ETOH runs inside some of the most complex clinical environments in existence. The perspective that produces is not available in a research paper. This is where we share it.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* ══════════════════════════════════════════════
                    FEATURE ROW — dark featured card + side cards
                ══════════════════════════════════════════════ */}
                {featuredArticle && (
                    <div style={{ padding: isMobile ? '32px 20px 56px' : '44px 40px 72px', background: '#fff' }}>
                        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                alignItems: 'stretch',
                                gap: isMobile ? 16 : 20,
                            }}>

                                {/* Featured dark card */}
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
                                    onClick={() => navigate(`/news-insights/news/${featuredArticle.slug}`)}
                                >
                                    {/* Hero image / fallback */}
                                    <img
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            left: 0,
                                            top: 0,
                                            position: 'absolute',
                                            objectFit: featuredArticle.heroImage ? 'cover' : 'contain',
                                            opacity: featuredArticle.heroImage ? 0.45 : 0.12,
                                            padding: featuredArticle.heroImage ? 0 : 40,
                                        }}
                                        src={featuredArticle.heroImage || emptyNewsPreview}
                                        alt=""
                                    />

                                    {/* Gradient overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(0,23,54,0.98) 0%, rgba(0,23,54,0.75) 45%, rgba(0,23,54,0.15) 100%)',
                                        zIndex: 1,
                                    }} />

                                    {/* Top badge */}
                                    {featuredArticle.articleType && (
                                        <div style={{ position: 'absolute', top: isMobile ? 20 : 28, left: isMobile ? 24 : 36, zIndex: 2 }}>
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
                                                {featuredArticle.articleType === 'press_release' ? 'Press Release' : 'Featured'}
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
                                        <span style={{
                                            color: '#5BE3E8',
                                            fontSize: 10,
                                            fontFamily: 'Inter',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            letterSpacing: 2.5,
                                        }}>
                                            {featuredArticle.category}
                                        </span>

                                        <div style={{
                                            color: '#fff',
                                            fontSize: isMobile ? 26 : 34,
                                            fontFamily: 'Manrope',
                                            fontWeight: 800,
                                            lineHeight: isMobile ? '34px' : '44px',
                                            maxWidth: 520,
                                            letterSpacing: '-0.3px',
                                        }}>
                                            {featuredArticle.title}
                                        </div>

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
                                            {featuredArticle.excerpt || featuredArticle.quote || ''}
                                        </div>

                                        <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '4px 0' }} />

                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <span style={{
                                                color: 'rgba(255,255,255,0.6)',
                                                fontSize: 12,
                                                fontFamily: 'Inter',
                                                fontWeight: 500,
                                            }}>
                                                {featuredArticle.author?.name && `${featuredArticle.author.name} · `}{featuredArticle.date}
                                            </span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                                                <span className="featured-cta-text" style={{
                                                    color: '#1FC9C3',
                                                    fontSize: 11,
                                                    fontFamily: 'Inter',
                                                    fontWeight: 700,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: 1.5,
                                                }}>
                                                    Read Article
                                                </span>
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11" stroke="#1FC9C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Side cards */}
                                <div style={{ flex: isMobile ? 'none' : '1', display: 'flex', flexDirection: 'column', gap: 20 }}>
                                    {sideCards.map((card, i) => (
                                        <motion.div
                                            key={card.slug}
                                            className="news-side-card"
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
                                            onClick={() => navigate(`/news-insights/news/${card.slug}`)}
                                        >
                                            <span style={{
                                                color: '#006970',
                                                fontSize: 10,
                                                fontFamily: 'Inter',
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                                letterSpacing: 1.8,
                                            }}>
                                                {card.category}
                                            </span>

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

                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
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
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ══════════════════════════════════════════════
                    PRESS RELEASES
                ══════════════════════════════════════════════ */}
                {pressReleases.length > 0 && (
                    <div style={{ padding: isMobile ? '40px 20px' : '56px 40px', background: '#fff', borderTop: '1px solid #E8EAED' }}>
                        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 36 }}>

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
                                    gap: 12,
                                    paddingBottom: 20,
                                    borderBottom: '2px solid #E8EAED',
                                }}>
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
                                            Press Releases
                                        </span>
                                    </div>
                                    <span style={{
                                        color: '#9CA3AF',
                                        fontSize: 10,
                                        fontFamily: 'Inter',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: 2.5,
                                    }}>
                                        The Official Record
                                    </span>
                                </div>
                            </motion.div>

                            {/* Press release list */}
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {pressReleases.slice(0, 5).map((item, i) => (
                                    <motion.div
                                        key={item.slug}
                                        className="press-item"
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, ease: sharp, delay: 0.08 + i * 0.1 }}
                                        style={{
                                            display: 'flex',
                                            flexDirection: isMobile ? 'column' : 'row',
                                            gap: isMobile ? 8 : 40,
                                            cursor: 'pointer',
                                            padding: isMobile ? '20px 0' : '24px 16px',
                                            borderBottom: '1px solid #F0F1F3',
                                            borderRadius: 4,
                                        }}
                                        onClick={() => navigate(`/news-insights/news/${item.slug}`)}
                                    >
                                        {/* Date */}
                                        <div style={{ width: isMobile ? 'auto' : 180, flexShrink: 0, paddingTop: 3 }}>
                                            <span style={{
                                                color: '#9CA3AF',
                                                fontSize: 11,
                                                fontFamily: 'Inter',
                                                fontWeight: 700,
                                                letterSpacing: 1.2,
                                                textTransform: 'uppercase',
                                            }}>
                                                {item.date}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                                            <div className="press-title" style={{
                                                color: '#001736',
                                                fontSize: isMobile ? 17 : 20,
                                                fontFamily: 'Manrope',
                                                fontWeight: 700,
                                                lineHeight: '28px',
                                                letterSpacing: '-0.2px',
                                            }}>
                                                {item.title}
                                            </div>
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
                                                {item.excerpt || ''}
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        {!isMobile && (
                                            <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                                                <span className="read-link" style={{
                                                    color: '#C4C6D0',
                                                    fontSize: 20,
                                                    lineHeight: 1,
                                                }}>→</span>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {pressReleases.length > 5 && (
                                <div style={{ display: 'flex' }}>
                                    <button
                                        onClick={() => navigate('/news-insights/news/list?type=press_release')}
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
                                        onMouseOver={e => { e.currentTarget.style.background = '#001736'; e.currentTarget.style.color = '#fff' }}
                                        onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#001736' }}
                                    >
                                        Show More
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* ══════════════════════════════════════════════
                    IN THE NEWS — 3-column grid
                ══════════════════════════════════════════════ */}
                {newsItems.length > 0 && (
                    <div style={{ padding: isMobile ? '40px 20px 72px' : '56px 40px 96px', background: '#fff', borderTop: '1px solid #E8EAED' }}>
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
                                    gap: 12,
                                    paddingBottom: 20,
                                    borderBottom: '2px solid #E8EAED',
                                }}>
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
                                            In The News
                                        </span>
                                    </div>
                                    <span style={{
                                        color: '#9CA3AF',
                                        fontSize: 10,
                                        fontFamily: 'Inter',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: 2.5,
                                    }}>
                                        External Coverage
                                    </span>
                                </div>
                            </motion.div>

                            {/* 3-column grid */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                                gap: 28,
                            }}>
                                {newsItems.slice(0, 6).map((article, i) => (
                                    <motion.div
                                        key={article.slug}
                                        className="news-card"
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
                                        onClick={() => navigate(`/news-insights/news/${article.slug}`)}
                                    >
                                        {/* Image */}
                                        {article.heroImage ? (
                                            <div style={{ overflow: 'hidden', flexShrink: 0 }}>
                                                <img
                                                    style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
                                                    src={article.heroImage}
                                                    alt={article.title}
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
                                                    src={emptyNewsPreview}
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
                                            {/* Publication / category */}
                                            <span style={{
                                                color: '#006970',
                                                fontSize: 10,
                                                fontFamily: 'Inter',
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                                letterSpacing: 1.5,
                                            }}>
                                                {article.publication || article.category}
                                            </span>

                                            {/* Title */}
                                            <div style={{
                                                color: '#001736',
                                                fontSize: 17,
                                                fontFamily: 'Manrope',
                                                fontWeight: 700,
                                                lineHeight: '25px',
                                                letterSpacing: '-0.15px',
                                            }}>
                                                {article.title}
                                            </div>

                                            {/* Excerpt */}
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
                                                {article.excerpt || ''}
                                            </div>

                                            <div style={{ height: 1, background: '#F0F1F3', marginTop: 4 }} />

                                            {/* Footer */}
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <span style={{
                                                    color: '#9CA3AF',
                                                    fontSize: 11,
                                                    fontFamily: 'Inter',
                                                    fontWeight: 500,
                                                }}>
                                                    {article.author?.name && `${article.author.name} · `}{article.date}
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
                                ))}
                            </div>

                            {newsItems.length > 6 && (
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
                                    <button
                                        onClick={() => navigate('/news-insights/news/list?type=news')}
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
                                        onMouseOver={e => { e.currentTarget.style.background = '#001736'; e.currentTarget.style.color = '#fff' }}
                                        onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#001736' }}
                                    >
                                        Show More News
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
