import { useNavigate } from 'react-router-dom'
import { useNews } from '../../context/NewsContext'

const icons = {
    articles: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 4h16v16H4z" stroke="#006970" strokeWidth="1.5" />
            <path d="M8 8h8M8 12h6M8 16h4" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    categories: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 7l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V7z" stroke="#002B5B" strokeWidth="1.5" />
        </svg>
    ),
    calendar: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="#7C3AED" strokeWidth="1.5" />
            <path d="M16 2v4M8 2v4M3 10h18" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    authors: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="#D97706" strokeWidth="1.5" />
            <path d="M4 20c0-3.31 3.58-6 8-6s8 2.69 8 6" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
}

export default function AdminDashboard() {
    const navigate = useNavigate()
    const { articles } = useNews()

    const statsCards = [
        { label: 'Total Articles', value: articles.length, icon: icons.articles, accent: '#006970', bg: 'rgba(0, 105, 112, 0.08)' },
        { label: 'Categories', value: new Set(articles.map(a => a.category)).size, icon: icons.categories, accent: '#002B5B', bg: 'rgba(0, 43, 91, 0.08)' },
        { label: 'Published This Year', value: articles.filter(a => a.date.includes('2024')).length, icon: icons.calendar, accent: '#7C3AED', bg: 'rgba(124, 58, 237, 0.08)' },
        { label: 'Authors', value: new Set(articles.map(a => a.author.name)).size, icon: icons.authors, accent: '#D97706', bg: 'rgba(217, 119, 6, 0.08)' },
    ]

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {/* Page Header */}
            <div>
                <div style={{
                    color: '#43474F', fontSize: 10, fontFamily: 'Inter, sans-serif',
                    fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6,
                }}>Overview</div>
                <div style={{
                    color: '#001736', fontSize: 28, fontFamily: 'Manrope, sans-serif',
                    fontWeight: 800, lineHeight: '36px',
                }}>Dashboard</div>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
                {statsCards.map((card) => (
                    <div key={card.label} style={{
                        background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)',
                        borderRadius: 12, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16,
                        boxShadow: '0 1px 3px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.04)',
                    }}>
                        <div style={{
                            width: 44, height: 44, borderRadius: 10, background: card.bg,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>{card.icon}</div>
                        <div>
                            <div style={{ color: '#001736', fontSize: 32, fontFamily: 'Manrope, sans-serif', fontWeight: 800, lineHeight: '36px' }}>{card.value}</div>
                            <div style={{ color: '#43474F', fontSize: 13, fontWeight: 500, marginTop: 4 }}>{card.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Articles Table */}
            <div style={{
                background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', borderRadius: 12,
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.04)', overflow: 'hidden',
            }}>
                <div style={{
                    padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.06)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                    <div style={{ color: '#001736', fontSize: 16, fontFamily: 'Manrope, sans-serif', fontWeight: 700 }}>Recent Articles</div>
                    <button onClick={() => navigate('/admin/news')} style={{
                        background: 'none', border: 'none', color: '#006970', fontSize: 12,
                        fontWeight: 600, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 0.5,
                    }}>View All</button>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                            {['Title', 'Category', 'Author', 'Date'].map((h) => (
                                <th key={h} style={{
                                    textAlign: 'left', padding: '12px 24px', color: '#43474F',
                                    fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1,
                                }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {articles.slice(0, 5).map((article) => (
                            <tr key={article.slug} style={{ borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
                                <td style={{ padding: '14px 24px', color: '#001736', fontSize: 13, fontWeight: 600, maxWidth: 320, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{article.title}</td>
                                <td style={{ padding: '14px 24px' }}>
                                    <span style={{ display: 'inline-block', padding: '3px 10px', background: '#E7F6F6', borderRadius: 20, color: '#006970', fontSize: 11, fontWeight: 600 }}>{article.category}</span>
                                </td>
                                <td style={{ padding: '14px 24px', color: '#43474F', fontSize: 13 }}>{article.author.name}</td>
                                <td style={{ padding: '14px 24px', color: '#43474F', fontSize: 13 }}>{article.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
                <div onClick={() => navigate('/admin/news')} style={{
                    background: 'linear-gradient(135deg, #001736 0%, #002B5B 100%)', borderRadius: 12,
                    padding: '28px 24px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 12,
                }}>
                    <div style={{ color: '#96F1FA', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5 }}>Quick Action</div>
                    <div style={{ color: 'white', fontSize: 18, fontFamily: 'Manrope, sans-serif', fontWeight: 700 }}>Manage News Articles</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: '20px' }}>Create, edit, or remove news articles from the public-facing site.</div>
                </div>
                <div onClick={() => navigate('/admin/insights')} style={{
                    background: 'linear-gradient(135deg, #003D40 0%, #006970 100%)', borderRadius: 12,
                    padding: '28px 24px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 12,
                }}>
                    <div style={{ color: '#96F1FA', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5 }}>Quick Action</div>
                    <div style={{ color: 'white', fontSize: 18, fontFamily: 'Manrope, sans-serif', fontWeight: 700 }}>Manage Insights</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: '20px' }}>Publish and organize clinical insights, whitepapers, and reports.</div>
                </div>
            </div>
        </div>
    )
}
