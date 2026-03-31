import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInsights } from '../../../context/InsightsContext'
import { useResponsive } from '../../../hooks/useResponsive'
import { ArrowLeft } from 'lucide-react'
import Sidebar from '../../../components/Sidebar'

const insightTypeLabels = {
    whitepaper: 'Whitepaper',
    report: 'Report',
    research_brief: 'Research Brief',
    case_study: 'Case Study',
}

export default function AllInsightsList() {
    const navigate = useNavigate()
    const { isMobile } = useResponsive()
    const { insights, loading } = useInsights()
    const [open, setOpen] = useState(false)
    const [isNavVisible, setIsNavVisible] = useState(true)

    useEffect(() => {
        let prev = window.scrollY
        const onScroll = () => {
            const cur = window.scrollY
            setIsNavVisible(prev > cur || cur <= 80)
            prev = cur
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Skip first insight (featured) and show the rest
    const featuredInsight = insights.find(i => i.featured) || insights[0] || null
    const displayItems = featuredInsight ? insights.filter(i => i !== featuredInsight) : insights

    return (
        <div style={{ minHeight: '100vh', background: 'white', overflowX: 'hidden' }}>

            {/* ── Sticky top nav ── */}
            <header
                style={{
                    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 30,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: isMobile ? '16px' : '20px 24px',
                    background: 'white',
                    borderBottom: '1px solid #E7E8E9',
                    transform: isNavVisible ? 'translateY(0)' : 'translateY(-100%)',
                    transition: 'transform 0.3s ease',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    {/* Hamburger */}
                    <button
                        onClick={() => setOpen(true)}
                        aria-label="Open navigation"
                        style={{
                            background: 'transparent', border: 'none', cursor: 'pointer',
                            display: 'flex', flexDirection: 'column', gap: 6, padding: 0,
                            opacity: open ? 0 : 1, pointerEvents: open ? 'none' : 'auto',
                            transition: 'opacity 0.3s ease',
                        }}
                    >
                        <span style={{ display: 'block', width: 28, height: 1.5, background: '#001736' }} />
                        <span style={{ display: 'block', width: 18, height: 1.5, background: '#001736' }} />
                        <span style={{ display: 'block', width: 28, height: 1.5, background: '#001736' }} />
                    </button>

                    {/* Back */}
                    <button
                        onClick={() => navigate(-1)}
                        style={{
                            background: 'transparent', border: 'none', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', gap: 8, padding: 0,
                        }}
                    >
                        <ArrowLeft size={18} color="#001736" />
                        <span style={{ color: '#001736', fontSize: 14, fontFamily: 'Inter', fontWeight: 600 }}>Back</span>
                    </button>
                </div>
            </header>

            {/* ── Page content ── */}
            <div style={{ paddingTop: isMobile ? 72 : 88, paddingBottom: isMobile ? 48 : 80 }}>
                <div style={{ maxWidth: 1000, margin: '0 auto', padding: isMobile ? '32px 16px' : '48px 40px' }}>

                    {/* Page title */}
                    <h1 style={{
                        margin: '0 0 40px',
                        color: '#001736',
                        fontSize: isMobile ? 32 : 48,
                        fontFamily: 'Manrope',
                        fontWeight: 800,
                        lineHeight: 1.1,
                    }}>
                        All Published Insights
                    </h1>

                    {loading && (
                        <p style={{ color: '#43474F', fontFamily: 'Inter', fontSize: 16 }}>Loading…</p>
                    )}

                    {!loading && displayItems.length === 0 && (
                        <p style={{ color: '#43474F', fontFamily: 'Inter', fontSize: 16 }}>No insights found.</p>
                    )}

                    {/* ── Desktop: table ── */}
                    {!loading && displayItems.length > 0 && !isMobile && (
                        <div style={{ border: '1px solid #E7E8E9', borderRadius: 16, overflow: 'hidden' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                <thead style={{ background: '#F8F9FA', borderBottom: '2px solid #E7E8E9' }}>
                                    <tr>
                                        <th style={{ padding: '20px 28px', color: '#43474F', fontSize: 11, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, width: 180 }}>
                                            Date
                                        </th>
                                        <th style={{ padding: '20px 28px', color: '#43474F', fontSize: 11, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5 }}>
                                            Title
                                        </th>
                                        <th style={{ padding: '20px 28px', width: 140 }} />
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayItems.map((item) => (
                                        <tr
                                            key={item.slug}
                                            onClick={() => navigate(`/news-insights/insights/${item.slug}`)}
                                            style={{ borderBottom: '1px solid #E7E8E9', cursor: 'pointer', transition: 'background 0.15s' }}
                                            onMouseOver={(e) => e.currentTarget.style.background = '#F8F9FA'}
                                            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                                        >
                                            <td style={{ padding: '28px', color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 500, verticalAlign: 'top' }}>
                                                {item.date}
                                            </td>
                                            <td style={{ padding: '28px', verticalAlign: 'top' }}>
                                                <div style={{ color: '#001736', fontSize: 18, fontFamily: 'Manrope', fontWeight: 700, lineHeight: 1.4 }}>
                                                    {item.title}
                                                </div>
                                                {item.excerpt && (
                                                    <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', marginTop: 10, lineHeight: 1.6 }}>
                                                        {item.excerpt}
                                                    </div>
                                                )}
                                            </td>
                                            <td style={{ padding: '28px', verticalAlign: 'middle', textAlign: 'right' }}>
                                                <span style={{ color: '#006970', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, textDecoration: 'underline', whiteSpace: 'nowrap' }}>
                                                    Read Insight
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* ── Mobile: stacked cards ── */}
                    {!loading && displayItems.length > 0 && isMobile && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {displayItems.map((item) => (
                                <div
                                    key={item.slug}
                                    onClick={() => navigate(`/news-insights/insights/${item.slug}`)}
                                    style={{
                                        padding: '24px 0',
                                        borderBottom: '1px solid #E7E8E9',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 8,
                                    }}
                                >
                                    <span style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                                        {item.date}
                                    </span>
                                    <div style={{ color: '#001736', fontSize: 17, fontFamily: 'Manrope', fontWeight: 700, lineHeight: 1.4 }}>
                                        {item.title}
                                    </div>
                                    {item.excerpt && (
                                        <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', lineHeight: 1.6 }}>
                                            {item.excerpt}
                                        </div>
                                    )}
                                    <span style={{ color: '#006970', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, textDecoration: 'underline', marginTop: 4 }}>
                                        Read Insight →
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>

            <Sidebar open={open} onClose={() => setOpen(false)} />
        </div>
    )
}
