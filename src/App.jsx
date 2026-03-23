import { useState } from 'react'
import Sidebar from './components/Sidebar'
import videoSrc from './assets/Video/PixVerse_V5.6_Image_Text_360P_Create_a_cinemat.mp4'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Fullscreen video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Hamburger button — top left */}
      <button
        id="hamburger-btn"
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        className="fixed top-6 left-6 z-40 flex flex-col gap-[6px] p-2 group"
        style={{
          opacity: open ? 0 : 1,
          pointerEvents: open ? 'none' : 'auto',
          transition: 'opacity 0.3s ease',
        }}
      >
        <span className="block w-[28px] h-[1.5px] bg-white transition-all duration-300 group-hover:w-[22px]" />
        <span className="block w-[18px] h-[1.5px] bg-white transition-all duration-300 group-hover:w-[28px]" />
        <span className="block w-[28px] h-[1.5px] bg-white transition-all duration-300 group-hover:w-[22px]" />
      </button>

      {/* Sidebar */}
      <Sidebar open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default App
