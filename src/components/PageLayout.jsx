import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useResponsive } from '../hooks/useResponsive'

export default function PageLayout({ title, children, fullWidth = false }) {
    const [open, setOpen] = useState(false)
    const [isNavVisible, setIsNavVisible] = useState(true)
    const navigate = useNavigate()
    const { isMobile } = useResponsive()

    useEffect(() => {
        let prevScrollPos = window.scrollY

        const handleScroll = () => {
            const currentScrollPos = window.scrollY
            if (prevScrollPos > currentScrollPos) {
                setIsNavVisible(true)
            } else if (currentScrollPos > 80) {
                setIsNavVisible(false)
            }
            prevScrollPos = currentScrollPos
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="relative min-h-screen bg-[#f5f2ed]">
            {/* Top bar */}
            <header
                className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between bg-[#f5f2ed] transition-transform duration-300 ease-in-out"
                style={{
                    transform: isNavVisible ? 'translateY(0)' : 'translateY(-100%)',
                    padding: isMobile ? '16px 16px' : '20px 24px',
                }}
            >
                <button
                    onClick={() => setOpen(true)}
                    aria-label="Open navigation"
                    className="flex flex-col gap-[6px] p-2 group"
                    style={{
                        opacity: open ? 0 : 1,
                        pointerEvents: open ? 'none' : 'auto',
                        transition: 'opacity 0.3s ease',
                    }}
                >
                    <span className="block w-[28px] h-[1.5px] bg-[#3d3a35] transition-all duration-300 group-hover:w-[22px]" />
                    <span className="block w-[18px] h-[1.5px] bg-[#3d3a35] transition-all duration-300 group-hover:w-[28px]" />
                    <span className="block w-[28px] h-[1.5px] bg-[#3d3a35] transition-all duration-300 group-hover:w-[22px]" />
                </button>

                <button
                    onClick={() => navigate('/')}
                    className="font-heading text-xl text-[#3d3a35] tracking-wide"
                    style={{ fontFamily: "'Cormorant', serif", background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    ETOH
                </button>

                <div style={{ width: '44px' }} />
            </header>

            {/* Page content */}
            <main style={{
                paddingBottom: isMobile ? 48 : 80,
                paddingTop: fullWidth ? (isMobile ? 56 : 68) : (isMobile ? 96 : 128),
                paddingLeft: fullWidth ? 0 : (isMobile ? 16 : 32),
                paddingRight: fullWidth ? 0 : (isMobile ? 16 : 32),
                maxWidth: fullWidth ? 'none' : '64rem',
                marginLeft: fullWidth ? 0 : 'auto',
                marginRight: fullWidth ? 0 : 'auto',
            }}>
                {!fullWidth && title && (
                    <h1
                        style={{
                            fontFamily: "'Cormorant', serif",
                            fontSize: isMobile ? '36px' : '56px',
                            fontWeight: 300,
                            color: '#3d3a35',
                            lineHeight: 1.1,
                            marginBottom: isMobile ? '24px' : '40px',
                        }}
                    >
                        {title}
                    </h1>
                )}
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#5a5650', lineHeight: 1.7, width: '100%' }}>
                    {children}
                </div>
            </main>

            <Sidebar open={open} onClose={() => setOpen(false)} />
        </div>
    )
}
