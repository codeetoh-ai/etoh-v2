import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router'
import { NewsProvider } from './context/NewsContext'
import { InsightsProvider } from './context/InsightsContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsProvider>
      <InsightsProvider>
        <RouterProvider router={router} />
      </InsightsProvider>
    </NewsProvider>
  </StrictMode>,
)
