import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router'
import { NewsProvider } from './context/NewsContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsProvider>
      <RouterProvider router={router} />
    </NewsProvider>
  </StrictMode>,
)
