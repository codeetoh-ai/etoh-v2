import { useState } from 'react'
import { useInsights } from '../../context/InsightsContext'

/* ── Shared styles ── */
const labelStyle = {
    color: '#43474F',
    fontSize: 11,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 0.55,
    marginBottom: 6,
    display: 'block',
}
const inputStyle = {
    width: '100%',
    height: 44,
    padding: '0 14px',
    background: '#F3F4F5',
    border: 'none',
    borderRadius: 6,
    outline: 'none',
    fontSize: 13,
    fontFamily: 'Inter, sans-serif',
    color: '#191C1D',
    boxSizing: 'border-box',
}
const textareaStyle = {
    ...inputStyle,
    height: 'auto',
    padding: '12px 14px',
    resize: 'vertical',
    minHeight: 80,
    lineHeight: '20px',
}
const cardStyle = {
    background: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(8px)',
    borderRadius: 12,
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    border: '1px solid rgba(0,0,0,0.04)',
}

/* ── Helper: generate slug from title ── */
function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

/* ── Insight type config ── */
const insightTypes = [
    { value: 'whitepaper', label: 'Whitepaper' },
    { value: 'report', label: 'Report' },
    { value: 'research_brief', label: 'Research Brief' },
    { value: 'case_study', label: 'Case Study' },
]

const typeColors = {
    'whitepaper': { bg: '#EEF2FF', color: '#4F46E5' },
    'report': { bg: '#FEF3C7', color: '#D97706' },
    'research_brief': { bg: '#E7F6F6', color: '#006970' },
    'case_study': { bg: '#FCE7F3', color: '#DB2777' },
}

function typeLabel(val) {
    return insightTypes.find(t => t.value === val)?.label || val
}

/* ── Empty insight template ── */
function emptyInsight() {
    return {
        slug: '',
        category: '',
        date: '',
        title: '',
        insightType: 'whitepaper',
        author: { name: '', role: '' },
        heroImage: '',
        quote: '',
        excerpt: '',
        sections: [{ type: 'paragraph', text: '' }],
        sidebar: {
            title: '',
            items: [{ label: '', text: '' }],
            ctaText: '',
        },
        relatedSlugs: [],
    }
}

/* ═══════════════════════════════════════════════
   Insight Editor Panel
   ═══════════════════════════════════════════════ */
function InsightEditor({ insight, onSave, onCancel, allSlugs }) {
    const [form, setForm] = useState(insight ? { ...insight, sections: [...insight.sections], sidebar: { ...insight.sidebar, items: [...insight.sidebar.items] } } : emptyInsight())

    const set = (key, val) => setForm((f) => ({ ...f, [key]: val }))
    const setAuthor = (key, val) => setForm((f) => ({ ...f, author: { ...f.author, [key]: val } }))
    const setSidebar = (key, val) => setForm((f) => ({ ...f, sidebar: { ...f.sidebar, [key]: val } }))

    /* Section management */
    const updateSection = (idx, patch) => {
        const next = [...form.sections]
        next[idx] = { ...next[idx], ...patch }
        set('sections', next)
    }
    const addSection = (type) => {
        const newSection = type === 'paragraph'
            ? { type: 'paragraph', text: '' }
            : type === 'heading'
                ? { type: 'heading', level: 2, text: '' }
                : { type: 'bullets', items: [''] }
        set('sections', [...form.sections, newSection])
    }
    const removeSection = (idx) => set('sections', form.sections.filter((_, i) => i !== idx))
    const moveSection = (idx, dir) => {
        const next = [...form.sections]
        const target = idx + dir
        if (target < 0 || target >= next.length) return
        ;[next[idx], next[target]] = [next[target], next[idx]]
        set('sections', next)
    }

    /* Sidebar items */
    const updateSidebarItem = (idx, patch) => {
        const next = [...form.sidebar.items]
        next[idx] = { ...next[idx], ...patch }
        setSidebar('items', next)
    }
    const addSidebarItem = () => setSidebar('items', [...form.sidebar.items, { label: '', text: '' }])
    const removeSidebarItem = (idx) => setSidebar('items', form.sidebar.items.filter((_, i) => i !== idx))

    /* Bullet management */
    const updateBullet = (sIdx, bIdx, val) => {
        const next = [...form.sections]
        const items = [...next[sIdx].items]
        items[bIdx] = val
        next[sIdx] = { ...next[sIdx], items }
        set('sections', next)
    }
    const addBullet = (sIdx) => {
        const next = [...form.sections]
        next[sIdx] = { ...next[sIdx], items: [...next[sIdx].items, ''] }
        set('sections', next)
    }
    const removeBullet = (sIdx, bIdx) => {
        const next = [...form.sections]
        next[sIdx] = { ...next[sIdx], items: next[sIdx].items.filter((_, i) => i !== bIdx) }
        set('sections', next)
    }

    const handleSubmit = () => {
        const finalSlug = form.slug || slugify(form.title)
        const finalDate = form.date || new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
        onSave({ ...form, slug: finalSlug, date: finalDate })
    }

    const isValid = form.title.trim() && form.category.trim() && form.author.name.trim()

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Top bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <div style={{ color: '#43474F', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>
                        {insight ? 'Edit Insight' : 'New Insight'}
                    </div>
                    <div style={{ color: '#001736', fontSize: 24, fontFamily: 'Manrope, sans-serif', fontWeight: 800 }}>
                        {insight ? 'Edit: ' + insight.title : 'Create New Insight'}
                    </div>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                    <button onClick={onCancel} style={{ padding: '10px 20px', borderRadius: 6, border: '1px solid rgba(0,0,0,0.12)', background: 'white', color: '#43474F', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                        Cancel
                    </button>
                    <button onClick={handleSubmit} disabled={!isValid} style={{
                        padding: '10px 24px', borderRadius: 6, border: 'none',
                        background: isValid ? 'linear-gradient(90deg, #003D40 0%, #006970 100%)' : '#E1E3E4',
                        color: isValid ? 'white' : '#9CA3AF', fontSize: 13, fontFamily: 'Manrope, sans-serif', fontWeight: 700, cursor: isValid ? 'pointer' : 'default',
                    }}>
                        {insight ? 'Save Changes' : 'Publish Insight'}
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 24, alignItems: 'start' }}>
                {/* Left column — Main content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                    {/* Basic Info */}
                    <div style={{ ...cardStyle, padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
                        <div style={{ color: '#001736', fontSize: 14, fontFamily: 'Manrope, sans-serif', fontWeight: 700, paddingBottom: 8, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>Basic Information</div>

                        <div>
                            <label style={labelStyle}>Title *</label>
                            <input style={inputStyle} value={form.title} onChange={(e) => set('title', e.target.value)} placeholder="Insight title..." />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                            <div>
                                <label style={labelStyle}>Category *</label>
                                <input style={inputStyle} value={form.category} onChange={(e) => set('category', e.target.value)} placeholder="e.g. Clinical Operations" />
                            </div>
                            <div>
                                <label style={labelStyle}>Date</label>
                                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                    <input
                                        style={{ ...inputStyle, paddingRight: 40 }}
                                        value={form.date}
                                        onChange={(e) => set('date', e.target.value)}
                                        onBlur={(e) => {
                                            const val = e.target.value.trim()
                                            if (!val) return
                                            let d = new Date(val)
                                            if (isNaN(d.getTime()) && val.includes('/')) {
                                                const parts = val.split('/')
                                                if (parts.length === 3) {
                                                    d = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`)
                                                }
                                            }
                                            if (!isNaN(d.getTime())) {
                                                set('date', d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }))
                                            }
                                        }}
                                        placeholder="e.g. 30 March 2026"
                                    />
                                    <div style={{ position: 'absolute', right: 10, width: 24, height: 24 }}>
                                        <input
                                            type="date"
                                            style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
                                            onChange={(e) => {
                                                if (!e.target.value) return
                                                const parts = e.target.value.split('-')
                                                const d = new Date(parts[0], parts[1] - 1, parts[2])
                                                if (!isNaN(d.getTime())) {
                                                    set('date', d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }))
                                                }
                                            }}
                                        />
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', top: 2, left: 2, pointerEvents: 'none' }}>
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                            <div>
                                <label style={labelStyle}>Slug (auto-generated)</label>
                                <input style={{ ...inputStyle, color: '#6B7280' }} value={form.slug || slugify(form.title)} onChange={(e) => set('slug', e.target.value)} placeholder="auto-generated-from-title" />
                            </div>
                            <div>
                                <label style={labelStyle}>Insight Type *</label>
                                <select style={inputStyle} value={form.insightType} onChange={(e) => set('insightType', e.target.value)}>
                                    {insightTypes.map(t => (
                                        <option key={t.value} value={t.value}>{t.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label style={labelStyle}>Excerpt / Summary</label>
                            <textarea style={textareaStyle} rows={3} value={form.excerpt || ''} onChange={(e) => set('excerpt', e.target.value)} placeholder="Short summary shown on the insights listing page..." />
                        </div>
                    </div>

                    {/* Author */}
                    <div style={{ ...cardStyle, padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
                        <div style={{ color: '#001736', fontSize: 14, fontFamily: 'Manrope, sans-serif', fontWeight: 700, paddingBottom: 8, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>Author</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                            <div>
                                <label style={labelStyle}>Author Name *</label>
                                <input style={inputStyle} value={form.author.name} onChange={(e) => setAuthor('name', e.target.value)} placeholder="Dr. Name" />
                            </div>
                            <div>
                                <label style={labelStyle}>Author Role</label>
                                <input style={inputStyle} value={form.author.role} onChange={(e) => setAuthor('role', e.target.value)} placeholder="Clinical Architect" />
                            </div>
                        </div>
                    </div>

                    {/* Hero & Quote */}
                    <div style={{ ...cardStyle, padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
                        <div style={{ color: '#001736', fontSize: 14, fontFamily: 'Manrope, sans-serif', fontWeight: 700, paddingBottom: 8, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>Hero & Quote</div>

                        <div>
                            <label style={labelStyle}>Hero Image</label>
                            <div
                                onClick={() => document.getElementById('insight-hero-upload').click()}
                                onDragOver={(e) => { e.preventDefault(); e.stopPropagation() }}
                                onDrop={(e) => {
                                    e.preventDefault(); e.stopPropagation()
                                    const file = e.dataTransfer.files?.[0]
                                    if (file && file.type.startsWith('image/')) {
                                        const reader = new FileReader()
                                        reader.onload = (ev) => set('heroImage', ev.target.result)
                                        reader.readAsDataURL(file)
                                    }
                                }}
                                style={{
                                    border: '2px dashed rgba(0,105,112,0.25)',
                                    borderRadius: 8,
                                    padding: form.heroImage ? 0 : '28px 20px',
                                    background: form.heroImage ? '#000' : 'rgba(0,105,112,0.03)',
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    minHeight: form.heroImage ? 180 : 'auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'border-color 0.15s',
                                }}
                            >
                                <input
                                    id="insight-hero-upload"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={(e) => {
                                        const file = e.target.files?.[0]
                                        if (file) {
                                            const reader = new FileReader()
                                            reader.onload = (ev) => set('heroImage', ev.target.result)
                                            reader.readAsDataURL(file)
                                        }
                                    }}
                                />
                                {form.heroImage ? (
                                    <>
                                        <img src={form.heroImage} alt="Hero preview" style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
                                        <div style={{
                                            position: 'absolute', inset: 0,
                                            background: 'rgba(0,0,0,0.4)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            opacity: 0, transition: 'opacity 0.2s',
                                        }}
                                            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                                            onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                                        >
                                            <div style={{ display: 'flex', gap: 10 }}>
                                                <span style={{ padding: '8px 16px', background: 'white', borderRadius: 6, fontSize: 12, fontWeight: 600, color: '#001736' }}>
                                                    Change Image
                                                </span>
                                                <span
                                                    onClick={(e) => { e.stopPropagation(); set('heroImage', '') }}
                                                    style={{ padding: '8px 16px', background: '#DC2626', borderRadius: 6, fontSize: 12, fontWeight: 600, color: 'white' }}
                                                >
                                                    Remove
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                                            <rect x="4" y="6" width="28" height="24" rx="3" stroke="#006970" strokeWidth="1.5" />
                                            <circle cx="13" cy="15" r="3" stroke="#006970" strokeWidth="1.5" />
                                            <path d="M4 24l8-6 6 5 5-3 9 6" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div style={{ color: '#006970', fontSize: 13, fontWeight: 600 }}>
                                            Click to upload or drag & drop
                                        </div>
                                        <div style={{ color: '#9CA3AF', fontSize: 11 }}>
                                            PNG, JPG, WebP up to 10MB
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '12px 0 0' }}>
                                <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.08)' }} />
                                <span style={{ color: '#9CA3AF', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>or paste URL</span>
                                <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.08)' }} />
                            </div>
                            <input
                                style={{ ...inputStyle, marginTop: 8 }}
                                value={typeof form.heroImage === 'string' && !form.heroImage.startsWith('data:') ? form.heroImage : ''}
                                onChange={(e) => set('heroImage', e.target.value)}
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>

                        <div>
                            <label style={labelStyle}>Blockquote</label>
                            <textarea style={textareaStyle} rows={3} value={form.quote} onChange={(e) => set('quote', e.target.value)} placeholder='"A powerful quote from the insight..."' />
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div style={{ ...cardStyle, padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 8, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                            <div style={{ color: '#001736', fontSize: 14, fontFamily: 'Manrope, sans-serif', fontWeight: 700 }}>Content Sections</div>
                            <div style={{ display: 'flex', gap: 6 }}>
                                {[
                                    { label: '+ Paragraph', type: 'paragraph' },
                                    { label: '+ Heading', type: 'heading' },
                                    { label: '+ Bullets', type: 'bullets' },
                                ].map((btn) => (
                                    <button key={btn.type} onClick={() => addSection(btn.type)} style={{
                                        padding: '5px 12px', borderRadius: 4, border: '1px solid rgba(0,105,112,0.2)',
                                        background: 'rgba(0,105,112,0.05)', color: '#006970', fontSize: 11, fontWeight: 600, cursor: 'pointer',
                                    }}>{btn.label}</button>
                                ))}
                            </div>
                        </div>

                        {form.sections.map((section, idx) => (
                            <div key={idx} style={{ padding: 16, background: '#FAFBFC', borderRadius: 8, border: '1px solid rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <span style={{
                                            padding: '2px 8px', borderRadius: 4, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5,
                                            background: section.type === 'paragraph' ? '#E7F6F6' : section.type === 'heading' ? '#EEF2FF' : '#FEF3C7',
                                            color: section.type === 'paragraph' ? '#006970' : section.type === 'heading' ? '#4F46E5' : '#D97706',
                                        }}>{section.type}{section.level ? ` H${section.level}` : ''}</span>
                                        <span style={{ color: '#9CA3AF', fontSize: 11 }}>Section {idx + 1}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: 4 }}>
                                        <button onClick={() => moveSection(idx, -1)} disabled={idx === 0} style={{ width: 28, height: 28, borderRadius: 4, border: '1px solid rgba(0,0,0,0.08)', background: 'white', cursor: 'pointer', fontSize: 12, color: idx === 0 ? '#D1D5DB' : '#43474F' }}>^</button>
                                        <button onClick={() => moveSection(idx, 1)} disabled={idx === form.sections.length - 1} style={{ width: 28, height: 28, borderRadius: 4, border: '1px solid rgba(0,0,0,0.08)', background: 'white', cursor: 'pointer', fontSize: 12, color: idx === form.sections.length - 1 ? '#D1D5DB' : '#43474F' }}>v</button>
                                        <button onClick={() => removeSection(idx)} style={{ width: 28, height: 28, borderRadius: 4, border: '1px solid rgba(220,38,38,0.15)', background: '#FEF2F2', cursor: 'pointer', fontSize: 12, color: '#DC2626' }}>x</button>
                                    </div>
                                </div>

                                {section.type === 'paragraph' && (
                                    <textarea style={textareaStyle} rows={4} value={section.text} onChange={(e) => updateSection(idx, { text: e.target.value })} placeholder="Write your paragraph content..." />
                                )}

                                {section.type === 'heading' && (
                                    <div style={{ display: 'flex', gap: 10 }}>
                                        <select value={section.level} onChange={(e) => updateSection(idx, { level: Number(e.target.value) })} style={{ ...inputStyle, width: 80, flex: 'none' }}>
                                            <option value={2}>H2</option>
                                            <option value={3}>H3</option>
                                        </select>
                                        <input style={inputStyle} value={section.text} onChange={(e) => updateSection(idx, { text: e.target.value })} placeholder="Heading text..." />
                                    </div>
                                )}

                                {section.type === 'bullets' && (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                        {section.items.map((bullet, bIdx) => (
                                            <div key={bIdx} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                                <div style={{ width: 8, height: 8, borderRadius: 2, background: '#006970', flexShrink: 0 }} />
                                                <input style={{ ...inputStyle, flex: 1 }} value={bullet} onChange={(e) => updateBullet(idx, bIdx, e.target.value)} placeholder="Bullet point..." />
                                                <button onClick={() => removeBullet(idx, bIdx)} style={{ width: 28, height: 28, borderRadius: 4, border: '1px solid rgba(220,38,38,0.15)', background: '#FEF2F2', color: '#DC2626', fontSize: 11, cursor: 'pointer', flexShrink: 0 }}>x</button>
                                            </div>
                                        ))}
                                        <button onClick={() => addBullet(idx)} style={{ alignSelf: 'flex-start', padding: '4px 12px', borderRadius: 4, border: '1px dashed rgba(0,0,0,0.15)', background: 'transparent', color: '#006970', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>
                                            + Add Bullet
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}

                        {form.sections.length === 0 && (
                            <div style={{ padding: 32, textAlign: 'center', color: '#9CA3AF', fontSize: 13 }}>
                                No sections yet. Add a paragraph, heading, or bullet list above.
                            </div>
                        )}
                    </div>
                </div>

                {/* Right column — Sidebar config + Related + Preview */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                    {/* Live Preview Card */}
                    <div style={{ ...cardStyle, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <div style={{ color: '#001736', fontSize: 14, fontFamily: 'Manrope, sans-serif', fontWeight: 700, paddingBottom: 8, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>Preview</div>
                        <div style={{ background: '#001736', borderRadius: 6, padding: 20, minHeight: 120, position: 'relative', overflow: 'hidden' }}>
                            {form.heroImage && <img src={form.heroImage} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />}
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                {form.category && <div style={{ color: '#96F1FA', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8 }}>{form.category}</div>}
                                <div style={{ color: 'white', fontSize: 16, fontFamily: 'Manrope, sans-serif', fontWeight: 700, lineHeight: '22px' }}>
                                    {form.title || 'Insight Title'}
                                </div>
                                {form.insightType && <div style={{ color: '#96F1FA', fontSize: 10, marginTop: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>{typeLabel(form.insightType)}</div>}
                                {form.author.name && <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, marginTop: 6 }}>{form.author.name}{form.author.role ? ` - ${form.author.role}` : ''}</div>}
                            </div>
                        </div>
                        <div style={{ color: '#6B7280', fontSize: 11 }}>
                            Slug: <span style={{ color: '#006970', fontWeight: 600 }}>/news-insights/insights/{form.slug || slugify(form.title) || '...'}</span>
                        </div>
                    </div>

                    {/* Sidebar Config */}
                    <div style={{ ...cardStyle, padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
                        <div style={{ color: '#001736', fontSize: 14, fontFamily: 'Manrope, sans-serif', fontWeight: 700, paddingBottom: 8, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>Insight Sidebar</div>

                        <div>
                            <label style={labelStyle}>Sidebar Title</label>
                            <input style={inputStyle} value={form.sidebar.title} onChange={(e) => setSidebar('title', e.target.value)} placeholder="e.g. Key Findings" />
                        </div>

                        {form.sidebar.items.map((item, idx) => (
                            <div key={idx} style={{ padding: 12, background: '#FAFBFC', borderRadius: 6, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#9CA3AF', fontSize: 10, fontWeight: 600 }}>Item {idx + 1}</span>
                                    {form.sidebar.items.length > 1 && (
                                        <button onClick={() => removeSidebarItem(idx)} style={{ background: 'none', border: 'none', color: '#DC2626', fontSize: 11, cursor: 'pointer', fontWeight: 600 }}>Remove</button>
                                    )}
                                </div>
                                <input style={inputStyle} value={item.label} onChange={(e) => updateSidebarItem(idx, { label: e.target.value })} placeholder="Label..." />
                                <textarea style={{ ...textareaStyle, minHeight: 50 }} rows={2} value={item.text} onChange={(e) => updateSidebarItem(idx, { text: e.target.value })} placeholder="Description..." />
                            </div>
                        ))}
                        <button onClick={addSidebarItem} style={{ padding: '6px 12px', borderRadius: 4, border: '1px dashed rgba(0,0,0,0.15)', background: 'transparent', color: '#006970', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>
                            + Add Sidebar Item
                        </button>

                        <div>
                            <label style={labelStyle}>CTA Button Text</label>
                            <input style={inputStyle} value={form.sidebar.ctaText} onChange={(e) => setSidebar('ctaText', e.target.value)} placeholder="e.g. Download Whitepaper" />
                        </div>
                    </div>

                    {/* Related Insights */}
                    <div style={{ ...cardStyle, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <div style={{ color: '#001736', fontSize: 14, fontFamily: 'Manrope, sans-serif', fontWeight: 700, paddingBottom: 8, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>Related Insights</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {allSlugs.filter((s) => s !== form.slug && s !== slugify(form.title)).map((s) => {
                                const selected = form.relatedSlugs.includes(s)
                                return (
                                    <div
                                        key={s}
                                        onClick={() => {
                                            if (selected) set('relatedSlugs', form.relatedSlugs.filter((r) => r !== s))
                                            else if (form.relatedSlugs.length < 3) set('relatedSlugs', [...form.relatedSlugs, s])
                                        }}
                                        style={{
                                            padding: '8px 12px', borderRadius: 6, cursor: 'pointer',
                                            background: selected ? 'rgba(0,105,112,0.08)' : '#FAFBFC',
                                            border: `1px solid ${selected ? 'rgba(0,105,112,0.3)' : 'rgba(0,0,0,0.04)'}`,
                                            fontSize: 12, color: selected ? '#006970' : '#43474F', fontWeight: selected ? 600 : 400,
                                            transition: 'all 0.15s',
                                        }}
                                    >
                                        {selected ? '* ' : ''}{s}
                                    </div>
                                )
                            })}
                        </div>
                        <div style={{ color: '#9CA3AF', fontSize: 10 }}>Select up to 3 related insights</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/* ═══════════════════════════════════════════════
   Delete Confirmation Modal
   ═══════════════════════════════════════════════ */
function DeleteModal({ insight, onConfirm, onCancel }) {
    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div onClick={onCancel} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }} />
            <div style={{ position: 'relative', ...cardStyle, padding: 32, maxWidth: 420, width: '90%', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                    <div style={{ color: '#DC2626', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6 }}>Confirm Delete</div>
                    <div style={{ color: '#001736', fontSize: 20, fontFamily: 'Manrope, sans-serif', fontWeight: 800 }}>Delete this insight?</div>
                </div>
                <div style={{ color: '#43474F', fontSize: 13, lineHeight: '20px' }}>
                    You are about to permanently delete <strong>{insight.title}</strong>. This will remove it from the public site immediately.
                </div>
                <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
                    <button onClick={onCancel} style={{ padding: '10px 20px', borderRadius: 6, border: '1px solid rgba(0,0,0,0.12)', background: 'white', color: '#43474F', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                        Cancel
                    </button>
                    <button onClick={onConfirm} style={{ padding: '10px 20px', borderRadius: 6, border: 'none', background: '#DC2626', color: 'white', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
                        Delete Insight
                    </button>
                </div>
            </div>
        </div>
    )
}

/* ═══════════════════════════════════════════════
   Main InsightManagement Page
   ═══════════════════════════════════════════════ */
export default function InsightManagement() {
    const { insights, addInsight, updateInsight, deleteInsight } = useInsights()
    const [search, setSearch] = useState('')
    const [selectedType, setSelectedType] = useState('All')
    const [view, setView] = useState('list') // 'list' | 'create' | 'edit'
    const [editingInsight, setEditingInsight] = useState(null)
    const [deletingInsight, setDeletingInsight] = useState(null)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState('')

    const types = ['All', ...new Set(insights.map((i) => i.insightType))]

    const filtered = insights.filter((i) => {
        const matchSearch = i.title.toLowerCase().includes(search.toLowerCase()) || i.author.name.toLowerCase().includes(search.toLowerCase())
        const matchType = selectedType === 'All' || i.insightType === selectedType
        return matchSearch && matchType
    })

    const allSlugs = insights.map((i) => i.slug)

    /* Editor handlers */
    const handleCreate = async (insight) => {
        setSaving(true)
        setError('')
        try {
            await addInsight(insight)
            setView('list')
        } catch (err) {
            setError(err.response?.data?.detail || 'Failed to create insight')
        } finally {
            setSaving(false)
        }
    }
    const handleUpdate = async (insight) => {
        setSaving(true)
        setError('')
        try {
            await updateInsight(editingInsight.slug, insight)
            setEditingInsight(null)
            setView('list')
        } catch (err) {
            setError(err.response?.data?.detail || 'Failed to update insight')
        } finally {
            setSaving(false)
        }
    }
    const handleDelete = async () => {
        try {
            await deleteInsight(deletingInsight.slug)
            setDeletingInsight(null)
        } catch (err) {
            setError(err.response?.data?.detail || 'Failed to delete insight')
            setDeletingInsight(null)
        }
    }

    /* Show editor */
    if (view === 'create') {
        return <InsightEditor onSave={handleCreate} onCancel={() => setView('list')} allSlugs={allSlugs} />
    }
    if (view === 'edit' && editingInsight) {
        return <InsightEditor insight={editingInsight} onSave={handleUpdate} onCancel={() => { setEditingInsight(null); setView('list') }} allSlugs={allSlugs} />
    }

    /* List view */
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {deletingInsight && <DeleteModal insight={deletingInsight} onConfirm={handleDelete} onCancel={() => setDeletingInsight(null)} />}

            {/* Error */}
            {error && (
                <div style={{ padding: '12px 16px', background: '#FEF2F2', border: '1px solid rgba(220,38,38,0.2)', borderRadius: 6, color: '#DC2626', fontSize: 13, fontFamily: 'Inter, sans-serif', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {error}
                    <span onClick={() => setError('')} style={{ cursor: 'pointer', fontWeight: 700 }}>x</span>
                </div>
            )}

            {/* Saving overlay */}
            {saving && (
                <div style={{ padding: '10px 16px', background: '#F0FDF4', border: '1px solid rgba(0,105,112,0.2)', borderRadius: 6, color: '#006970', fontSize: 13, fontFamily: 'Inter, sans-serif' }}>
                    Saving...
                </div>
            )}

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <div style={{ color: '#43474F', fontSize: 10, fontFamily: 'Inter, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6 }}>Content</div>
                    <div style={{ color: '#001736', fontSize: 28, fontFamily: 'Manrope, sans-serif', fontWeight: 800, lineHeight: '36px' }}>Insight Management</div>
                </div>
                <button onClick={() => setView('create')} style={{
                    padding: '12px 24px',
                    background: 'linear-gradient(90deg, #003D40 0%, #006970 100%)',
                    borderRadius: 6, border: 'none', color: 'white', fontSize: 13,
                    fontFamily: 'Manrope, sans-serif', fontWeight: 700, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 8,
                }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 2v10M2 7h10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    New Insight
                </button>
            </div>

            {/* Stats bar */}
            <div style={{ display: 'flex', gap: 16 }}>
                {[
                    { label: 'Total', value: insights.length, color: '#006970' },
                    { label: 'Categories', value: new Set(insights.map((i) => i.category)).size, color: '#4F46E5' },
                    { label: 'Authors', value: new Set(insights.map((i) => i.author.name)).size, color: '#7C3AED' },
                    { label: 'Types', value: new Set(insights.map((i) => i.insightType)).size, color: '#D97706' },
                ].map((s) => (
                    <div key={s.label} style={{ ...cardStyle, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
                        <div style={{ width: 8, height: 32, borderRadius: 4, background: s.color }} />
                        <div>
                            <div style={{ color: '#001736', fontSize: 20, fontFamily: 'Manrope, sans-serif', fontWeight: 800 }}>{s.value}</div>
                            <div style={{ color: '#6B7280', fontSize: 11 }}>{s.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div style={{ ...cardStyle, padding: '16px 20px', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                <input
                    type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search insights..."
                    style={{ flex: 1, minWidth: 200, height: 40, padding: '0 14px', background: '#F3F4F5', border: 'none', borderRadius: 6, outline: 'none', fontSize: 13, fontFamily: 'Inter, sans-serif', color: '#191C1D' }}
                />
                <div style={{ display: 'flex', gap: 6 }}>
                    {types.map((type) => (
                        <button key={type} onClick={() => setSelectedType(type)} style={{
                            padding: '6px 14px', borderRadius: 20, border: 'none',
                            background: selectedType === type ? '#003D40' : '#E7E8E9',
                            color: selectedType === type ? 'white' : '#43474F',
                            fontSize: 11, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap',
                        }}>{type === 'All' ? 'All' : typeLabel(type)}</button>
                    ))}
                </div>
            </div>

            {/* Insights table */}
            <div style={{ ...cardStyle, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                            {['Title', 'Type', 'Author', 'Date', 'Sections', 'Actions'].map((h) => (
                                <th key={h} style={{ textAlign: 'left', padding: '14px 20px', color: '#43474F', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((insight) => {
                            const tc = typeColors[insight.insightType] || { bg: '#E7E8E9', color: '#43474F' }
                            return (
                                <tr key={insight.slug} style={{ borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
                                    <td style={{ padding: '16px 20px', maxWidth: 300 }}>
                                        <div style={{ color: '#001736', fontSize: 13, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{insight.title}</div>
                                        <div style={{ color: '#6B7280', fontSize: 11, marginTop: 2 }}>/news-insights/insights/{insight.slug}</div>
                                    </td>
                                    <td style={{ padding: '16px 20px' }}>
                                        <span style={{ display: 'inline-block', padding: '3px 10px', background: tc.bg, borderRadius: 20, color: tc.color, fontSize: 11, fontWeight: 600 }}>{typeLabel(insight.insightType)}</span>
                                    </td>
                                    <td style={{ padding: '16px 20px', color: '#43474F', fontSize: 13 }}>
                                        <div>{insight.author.name}</div>
                                        <div style={{ color: '#6B7280', fontSize: 11 }}>{insight.author.role}</div>
                                    </td>
                                    <td style={{ padding: '16px 20px', color: '#43474F', fontSize: 13, whiteSpace: 'nowrap' }}>{insight.date}</td>
                                    <td style={{ padding: '16px 20px', color: '#43474F', fontSize: 13 }}>
                                        {insight.sections.length} blocks
                                    </td>
                                    <td style={{ padding: '16px 20px' }}>
                                        <div style={{ display: 'flex', gap: 8 }}>
                                            <button onClick={() => { setEditingInsight(insight); setView('edit') }} style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid rgba(0,0,0,0.1)', background: 'white', color: '#001736', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>Edit</button>
                                            <button onClick={() => setDeletingInsight(insight)} style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid rgba(220,38,38,0.2)', background: '#FEF2F2', color: '#DC2626', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {filtered.length === 0 && (
                    <div style={{ padding: 48, textAlign: 'center', color: '#6B7280', fontSize: 14 }}>No insights match your search.</div>
                )}
            </div>
        </div>
    )
}
