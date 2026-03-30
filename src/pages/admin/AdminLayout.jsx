import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import dashboardBg from '../../assets/dashboard.png'

const sidebarItems = [
    {
        label: 'Dashboard',
        path: '/admin/dashboard',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'News Management',
        path: '/admin/news',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 4h14M3 8h10M3 12h14M3 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Insight Management',
        path: '/admin/insights',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2v16M2 10h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
    },
]

export default function AdminLayout() {
    const navigate = useNavigate()
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

    const handleLogout = async () => {
        const token = localStorage.getItem('adminToken')
        try {
            await fetch('http://localhost:8000/api/auth/logout', {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}` },
            })
        } catch {
            // Logout even if API call fails
        }
        localStorage.removeItem('adminToken')
        localStorage.removeItem('adminEmail')
        navigate('/admin')
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            {/* Sidebar */}
            <aside style={{
                width: sidebarCollapsed ? 72 : 260,
                background: '#001736',
                display: 'flex',
                flexDirection: 'column',
                transition: 'width 0.25s ease',
                overflow: 'hidden',
                flexShrink: 0,
            }}>
                {/* Logo area */}
                <div style={{
                    padding: sidebarCollapsed ? '24px 16px' : '24px 24px',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    minHeight: 72,
                }}>
                    {!sidebarCollapsed && (
                        <div style={{
                            color: 'white',
                            fontSize: 20,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 800,
                            whiteSpace: 'nowrap',
                        }}>ETOH Admin</div>
                    )}
                    <button
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        style={{
                            background: 'rgba(255,255,255,0.08)',
                            border: 'none',
                            borderRadius: 6,
                            width: 32,
                            height: 32,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'rgba(255,255,255,0.6)',
                            flexShrink: 0,
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d={sidebarCollapsed ? "M6 3l5 5-5 5" : "M10 3L5 8l5 5"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Nav items */}
                <nav style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {sidebarItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            style={({ isActive }) => ({
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                                padding: sidebarCollapsed ? '12px 14px' : '12px 16px',
                                borderRadius: 8,
                                textDecoration: 'none',
                                color: isActive ? 'white' : 'rgba(255,255,255,0.55)',
                                background: isActive ? 'rgba(0, 105, 112, 0.35)' : 'transparent',
                                fontSize: 13,
                                fontWeight: isActive ? 600 : 500,
                                transition: 'all 0.15s ease',
                                whiteSpace: 'nowrap',
                            })}
                        >
                            <span style={{ flexShrink: 0, display: 'flex' }}>{item.icon}</span>
                            {!sidebarCollapsed && item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Logout */}
                <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <button
                        onClick={handleLogout}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            padding: sidebarCollapsed ? '12px 14px' : '12px 16px',
                            borderRadius: 8,
                            border: 'none',
                            background: 'rgba(255,255,255,0.05)',
                            color: 'rgba(255,255,255,0.55)',
                            fontSize: 13,
                            fontWeight: 500,
                            cursor: 'pointer',
                            width: '100%',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                            <path d="M7 17H4a1 1 0 01-1-1V4a1 1 0 011-1h3M13 14l4-4-4-4M17 10H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {!sidebarCollapsed && 'Logout'}
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <main style={{
                flex: 1,
                backgroundImage: `url(${dashboardBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',
                overflow: 'auto',
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(243, 244, 245, 0.92)',
                    pointerEvents: 'none',
                }} />
                <div style={{ position: 'relative', zIndex: 1, padding: '32px 40px', minHeight: '100%' }}>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
