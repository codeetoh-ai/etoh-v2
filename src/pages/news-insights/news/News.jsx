import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageLayout from '../../../components/PageLayout'
import { useResponsive } from '../../../hooks/useResponsive'
import { useNews } from '../../../context/NewsContext'
import emptyNewsPreview from './assets/empty-news-preview.png'

const ease = [0.22, 1, 0.36, 1]
const sharp = [0.25, 0.46, 0.45, 0.94]

export default function NewsPage() {
    const navigate = useNavigate()
    const { isMobile } = useResponsive()
    const { articles, loading } = useNews()

    // Only use a dedicated 'featured' article for the hero — don't steal from other sections
    const featuredArticle = articles.find(a => a.articleType === 'featured') || null
    const nonFeatured = featuredArticle ? articles.filter(a => a !== featuredArticle) : articles
    const sideCards = nonFeatured.slice(0, 2)
    const pressReleases = nonFeatured.filter(a => a.articleType === 'press_release')
    const newsItems = nonFeatured.filter(a => a.articleType !== 'press_release')

    if (loading) {
        return (
            <PageLayout fullWidth title="" lightHero>
                <div style={{ fontFamily: "'Inter', sans-serif", padding: '120px 24px', textAlign: 'center' }}>
                    <div style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter' }}>Loading news...</div>
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
                                    Dispatch from the center
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.75, ease: ease, delay: 0.1 }}
                                style={{ margin: 0, color: '#001736', fontSize: isMobile ? 40 : 72, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '46px' : '74px' }}
                            >
                                From the operating layer of modern healthcare.
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
                                ETOH runs inside some of the most complex clinical environments in existence. The perspective that produces is not available in a research paper. This is where we share it.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* ── Hero: Row 2 — Dark image card (left) | Feature cards (right) ── */}
                {featuredArticle && (
                    <div style={{ padding: isMobile ? '24px 16px 48px' : '40px 24px 64px' }}>
                        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'stretch', gap: isMobile ? 16 : 0 }}>

                            {/* Left — Featured dark card */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, ease: ease, delay: 0.1 }}
                                style={{ flex: isMobile ? 'none' : '0 0 55%', position: 'relative', background: '#001736', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: isMobile ? 320 : 420, padding: isMobile ? 28 : 48, cursor: 'pointer' }}
                                onClick={() => navigate(`/news-insights/news/${featuredArticle.slug}`)}
                            >
                                {featuredArticle.heroImage && (
                                    <img
                                        style={{ width: '100%', height: '100%', left: 0, top: 0, position: 'absolute', objectFit: 'cover', opacity: 0.35 }}
                                        src={featuredArticle.heroImage}
                                        alt=""
                                    />
                                )}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'relative', zIndex: 1 }}>
                                    <span style={{ color: '#96F1FA', fontSize: 10, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2 }}>
                                        {featuredArticle.category}
                                    </span>
                                    <div style={{ color: 'white', fontSize: 30, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '38px', maxWidth: 480 }}>
                                        {featuredArticle.title}
                                    </div>
                                    <div style={{ color: '#A9C7FF', fontSize: 15, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22px', maxWidth: 440 }}>
                                        {featuredArticle.excerpt || featuredArticle.quote || ''}
                                    </div>
                                    <div style={{ paddingTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <span style={{ color: '#1FC9C3', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20 }}>
                                            READ PRESS RELEASE
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
                                        onClick={() => navigate(`/news-insights/news/${card.slug}`)}
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

                {/* ── Section 2: Press Releases ── */}
                {pressReleases.length > 0 && (
                    <div style={{ padding: isMobile ? '32px 16px' : '48px 24px' }}>
                        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: sharp }}
                                style={{ paddingBottom: 16, borderBottom: '1px rgba(196, 198, 208, 0.20) solid', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}
                            >
                                <span style={{ color: '#001736', fontSize: 28, fontFamily: 'Manrope', fontWeight: 800, lineHeight: '36px' }}>PRESS RELEASES</span>
                                <span style={{ color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 3 }}>The Official Record</span>
                            </motion.div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                                {pressReleases.slice(0, 2).map((item, i) => (
                                    <motion.div
                                        key={item.slug}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.55, ease: sharp, delay: 0.1 + i * 0.12 }}
                                        style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 8 : 48, cursor: 'pointer' }}
                                        onClick={() => navigate(`/news-insights/news/${item.slug}`)}
                                    >
                                        <div style={{ width: isMobile ? 'auto' : 160, flexShrink: 0, paddingTop: 4 }}>
                                            <span style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, lineHeight: '16px', letterSpacing: 1.20, textTransform: 'uppercase' }}>
                                                {item.date}
                                            </span>
                                        </div>
                                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                            <div style={{ color: '#001736', fontSize: 22, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '30px' }}>
                                                {item.title}
                                            </div>
                                            <div style={{ color: '#43474F', fontSize: 16, fontFamily: 'Inter', fontWeight: 400, lineHeight: '26px' }}>
                                                {item.excerpt || ''}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                                {pressReleases.length > 5 && (
                                    <div style={{ display: 'flex', padding: '12px 0' }}>
                                        <button
                                            onClick={() => navigate('/news-insights/news/list?type=press_release')}
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
                                            Show More
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* ── Section 3: In The News ── */}
                {newsItems.length > 0 && (
                    <div style={{ padding: isMobile ? '32px 16px 64px' : '48px 24px 80px' }}>
                        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: sharp }}
                                style={{ paddingBottom: 16, borderBottom: '1px rgba(196, 198, 208, 0.20) solid', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}
                            >
                                <span style={{ color: '#001736', fontSize: 28, fontFamily: 'Manrope', fontWeight: 800, lineHeight: '36px' }}>IN THE NEWS</span>
                                <span style={{ color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 3 }}>External Coverage</span>
                            </motion.div>

                            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 40 : 28 }}>
                                {newsItems.slice(0, 2).map((article, i) => (
                                    <motion.div
                                        key={article.slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, ease: ease, delay: 0.1 + i * 0.1 }}
                                        style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                                    >
                                        <div style={{ background: '#E7E8E9', overflow: 'hidden', marginBottom: 20 }}>
                                            <img style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} src={article.heroImage || emptyNewsPreview} alt={article.publication || article.title} />
                                        </div>
                                        <span style={{ color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, marginBottom: 10 }}>
                                            {article.publication || article.category}
                                        </span>
                                        <div style={{ color: '#001736', fontSize: 18, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '26px', marginBottom: 12 }}>
                                            {article.title}
                                        </div>
                                        <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '21px', marginBottom: 20, flex: 1 }}>
                                            {article.excerpt || ''}
                                        </div>
                                        <div>
                                            <span
                                                onClick={() => navigate(`/news-insights/news/${article.slug}`)}
                                                style={{ color: '#001736', fontSize: 12, fontFamily: 'Inter', fontWeight: 600, textDecoration: 'underline', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, cursor: 'pointer', display: 'inline-block' }}
                                            >
                                                READ ARTICLE
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            
                            {newsItems.length > 10 && (
                                <div style={{ display: 'flex', marginTop: 24 }}>
                                    <button
                                        onClick={() => navigate('/news-insights/news/list?type=news')}
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
