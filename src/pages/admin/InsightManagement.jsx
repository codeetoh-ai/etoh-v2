import { useState } from 'react'

const insightsData = [
    {
        id: 1,
        title: 'Clinical Efficacy of Algorithmic Bed Management in Tertiary Care',
        type: 'Whitepaper',
        author: 'Dr. Julian Vane',
        date: 'November 2024',
        status: 'Published',
        downloads: 1248,
    },
    {
        id: 2,
        title: 'Operational ROI: 18-Month Longitudinal Analysis Across 47 Facilities',
        type: 'Report',
        author: 'Dr. Amelia Torres',
        date: 'October 2024',
        status: 'Published',
        downloads: 892,
    },
    {
        id: 3,
        title: 'Reducing Alarm Fatigue Through Predictive Signal Filtering',
        type: 'Research Brief',
        author: 'Dr. Rachel Kim',
        date: 'September 2024',
        status: 'Published',
        downloads: 634,
    },
    {
        id: 4,
        title: 'Data Sovereignty in Cross-Border Health System Deployments',
        type: 'Whitepaper',
        author: 'Ingrid Svensson',
        date: 'August 2024',
        status: 'Draft',
        downloads: 0,
    },
    {
        id: 5,
        title: 'The Future of Predictive Flow Management in Emergency Departments',
        type: 'Case Study',
        author: 'Dr. Michael Okoye',
        date: 'July 2024',
        status: 'Published',
        downloads: 1567,
    },
]

const typeColors = {
    'Whitepaper': { bg: '#EEF2FF', color: '#4F46E5' },
    'Report': { bg: '#FEF3C7', color: '#D97706' },
    'Research Brief': { bg: '#E7F6F6', color: '#006970' },
    'Case Study': { bg: '#FCE7F3', color: '#DB2777' },
}

export default function InsightManagement() {
    const [search, setSearch] = useState('')
    const [selectedType, setSelectedType] = useState('All')

    const types = ['All', ...new Set(insightsData.map(i => i.type))]

    const filtered = insightsData.filter(i => {
        const matchSearch = i.title.toLowerCase().includes(search.toLowerCase()) ||
            i.author.toLowerCase().includes(search.toLowerCase())
        const matchType = selectedType === 'All' || i.type === selectedType
        return matchSearch && matchType
    })

    const totalDownloads = insightsData.reduce((sum, i) => sum + i.downloads, 0)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <div style={{
                        color: '#43474F',
                        fontSize: 10,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: 1.5,
                        marginBottom: 6,
                    }}>Content</div>
                    <div style={{
                        color: '#001736',
                        fontSize: 28,
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 800,
                        lineHeight: '36px',
                    }}>Insight Management</div>
                </div>
                <button style={{
                    padding: '12px 24px',
                    background: 'linear-gradient(90deg, #003D40 0%, #006970 100%)',
                    borderRadius: 6,
                    border: 'none',
                    color: 'white',
                    fontSize: 13,
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 2v10M2 7h10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    New Insight
                </button>
            </div>

            {/* Mini Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
                {[
                    { label: 'Total Insights', value: insightsData.length, accent: '#006970' },
                    { label: 'Published', value: insightsData.filter(i => i.status === 'Published').length, accent: '#059669' },
                    { label: 'Drafts', value: insightsData.filter(i => i.status === 'Draft').length, accent: '#D97706' },
                    { label: 'Total Downloads', value: totalDownloads.toLocaleString(), accent: '#4F46E5' },
                ].map((stat) => (
                    <div key={stat.label} style={{
                        background: 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(8px)',
                        borderRadius: 10,
                        padding: '20px 18px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                        border: '1px solid rgba(0,0,0,0.04)',
                        borderLeft: `3px solid ${stat.accent}`,
                    }}>
                        <div style={{
                            color: '#001736',
                            fontSize: 24,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 800,
                        }}>{stat.value}</div>
                        <div style={{
                            color: '#43474F',
                            fontSize: 11,
                            fontWeight: 500,
                            marginTop: 2,
                        }}>{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div style={{
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(8px)',
                borderRadius: 12,
                padding: '16px 20px',
                display: 'flex',
                gap: 16,
                alignItems: 'center',
                flexWrap: 'wrap',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.04)',
            }}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search insights..."
                    style={{
                        flex: 1,
                        minWidth: 200,
                        height: 40,
                        padding: '0 14px',
                        background: '#F3F4F5',
                        border: 'none',
                        borderRadius: 6,
                        outline: 'none',
                        fontSize: 13,
                        fontFamily: 'Inter, sans-serif',
                        color: '#191C1D',
                    }}
                />
                <div style={{ display: 'flex', gap: 6 }}>
                    {types.map((type) => (
                        <button
                            key={type}
                            onClick={() => setSelectedType(type)}
                            style={{
                                padding: '6px 14px',
                                borderRadius: 20,
                                border: 'none',
                                background: selectedType === type ? '#003D40' : '#E7E8E9',
                                color: selectedType === type ? 'white' : '#43474F',
                                fontSize: 11,
                                fontWeight: 600,
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                            }}
                        >{type}</button>
                    ))}
                </div>
            </div>

            {/* Insights Table */}
            <div style={{
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(8px)',
                borderRadius: 12,
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.04)',
                overflow: 'hidden',
            }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                            {['Title', 'Type', 'Author', 'Date', 'Downloads', 'Status', 'Actions'].map((h) => (
                                <th key={h} style={{
                                    textAlign: 'left',
                                    padding: '14px 18px',
                                    color: '#43474F',
                                    fontSize: 10,
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: 1,
                                }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((insight) => {
                            const tc = typeColors[insight.type] || { bg: '#E7E8E9', color: '#43474F' }
                            return (
                                <tr key={insight.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
                                    <td style={{
                                        padding: '16px 18px',
                                        color: '#001736',
                                        fontSize: 13,
                                        fontWeight: 600,
                                        maxWidth: 280,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}>{insight.title}</td>
                                    <td style={{ padding: '16px 18px' }}>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '3px 10px',
                                            background: tc.bg,
                                            borderRadius: 20,
                                            color: tc.color,
                                            fontSize: 11,
                                            fontWeight: 600,
                                        }}>{insight.type}</span>
                                    </td>
                                    <td style={{
                                        padding: '16px 18px',
                                        color: '#43474F',
                                        fontSize: 13,
                                    }}>{insight.author}</td>
                                    <td style={{
                                        padding: '16px 18px',
                                        color: '#43474F',
                                        fontSize: 13,
                                        whiteSpace: 'nowrap',
                                    }}>{insight.date}</td>
                                    <td style={{
                                        padding: '16px 18px',
                                        color: '#001736',
                                        fontSize: 13,
                                        fontWeight: 600,
                                    }}>{insight.downloads.toLocaleString()}</td>
                                    <td style={{ padding: '16px 18px' }}>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '3px 10px',
                                            background: insight.status === 'Published' ? '#ECFDF5' : '#FEF3C7',
                                            borderRadius: 20,
                                            color: insight.status === 'Published' ? '#059669' : '#D97706',
                                            fontSize: 11,
                                            fontWeight: 600,
                                        }}>{insight.status}</span>
                                    </td>
                                    <td style={{ padding: '16px 18px' }}>
                                        <div style={{ display: 'flex', gap: 8 }}>
                                            <button style={{
                                                padding: '6px 12px',
                                                borderRadius: 6,
                                                border: '1px solid rgba(0,0,0,0.1)',
                                                background: 'white',
                                                color: '#001736',
                                                fontSize: 11,
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                            }}>Edit</button>
                                            <button style={{
                                                padding: '6px 12px',
                                                borderRadius: 6,
                                                border: '1px solid rgba(220,38,38,0.2)',
                                                background: '#FEF2F2',
                                                color: '#DC2626',
                                                fontSize: 11,
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                            }}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {filtered.length === 0 && (
                    <div style={{ padding: 48, textAlign: 'center', color: '#6B7280', fontSize: 14 }}>
                        No insights match your search.
                    </div>
                )}
            </div>
        </div>
    )
}
