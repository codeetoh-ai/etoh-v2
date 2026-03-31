import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router'
import { NewsProvider } from './context/NewsContext'
import { InsightsProvider } from './context/InsightsContext'
import { ClinicalProvider } from './context/ClinicalContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsProvider>
      <InsightsProvider>
        <ClinicalProvider>
          <RouterProvider router={router} />
        </ClinicalProvider>
      </InsightsProvider>
    </NewsProvider>
  </StrictMode>,
)
