import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function PageLayout({ title, children, fullWidth = false }) {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="relative min-h-screen bg-[#f5f2ed]">
            {/* Top bar */}
            <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-5">
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
            {/* Page content */}
            <main className={`pt-32 pb-20 ${fullWidth ? '' : 'px-8 max-w-5xl mx-auto'}`}>
                {!fullWidth && title && (
                    <h1
                        style={{
                            fontFamily: "'Cormorant', serif",
                            fontSize: '56px',
                            fontWeight: 300,
                            color: '#3d3a35',
                            lineHeight: 1.1,
                            marginBottom: '40px',
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
