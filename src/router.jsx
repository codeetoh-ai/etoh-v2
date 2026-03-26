import { createBrowserRouter } from 'react-router-dom'
import App from './App'

// About
import OurMissionPage from './pages/about/our-mission'
import HowWeWorkPage from './pages/about/how-we-work'
import TeamPage from './pages/about/team'
import CareersPage from './pages/about/careers'

// The System
import TheSystemPage from './pages/the-system'
import HospitalInfrastructurePage from './pages/the-system/hospital-infrastructure'
import ForCliniciansPage from './pages/the-system/for-clinicians'
import ForPatientsPage from './pages/the-system/for-patients'
import EndToEndCarePage from './pages/the-system/end-to-end-care'

// Deployments
import DeploymentsPage from './pages/deployments'
import GovernmentHealthSystemsPage from './pages/deployments/government-health-systems'
import PrivateHospitalNetworksPage from './pages/deployments/private-hospital-networks'

// Research
import ResearchPage from './pages/research'
import ClinicalEvidencePage from './pages/research/clinical-evidence'
import TechnologyPage from './pages/research/technology'
import OutcomesIndexPage from './pages/research/outcomes-index'

// Impact
import ImpactPage from './pages/impact'
import PatientOutcomesPage from './pages/impact/patient-outcomes'
import HealthcareAccessPage from './pages/impact/healthcare-access'
import PublicHealthMissionPage from './pages/impact/public-health-mission'

// News & Insights
import NewsInsightsPage from './pages/news-insights'
import NewsPage from './pages/news-insights/news'
import InsightsPage from './pages/news-insights/insights'

export const router = createBrowserRouter([
    { path: '/', element: <App /> },

    // About
    { path: '/about/our-mission', element: <OurMissionPage /> },
    { path: '/about/how-we-work', element: <HowWeWorkPage /> },
    { path: '/about/team', element: <TeamPage /> },
    { path: '/about/careers', element: <CareersPage /> },

    // The System
    { path: '/the-system', element: <TheSystemPage /> },
    { path: '/the-system/hospital-infrastructure', element: <HospitalInfrastructurePage /> },
    { path: '/the-system/for-clinicians', element: <ForCliniciansPage /> },
    { path: '/the-system/for-patients', element: <ForPatientsPage /> },
    { path: '/the-system/end-to-end-care', element: <EndToEndCarePage /> },

    // Deployments
    { path: '/deployments', element: <DeploymentsPage /> },
    { path: '/deployments/government-health-systems', element: <GovernmentHealthSystemsPage /> },
    { path: '/deployments/private-hospital-networks', element: <PrivateHospitalNetworksPage /> },

    // Research
    { path: '/research', element: <ResearchPage /> },
    { path: '/research/clinical-evidence', element: <ClinicalEvidencePage /> },
    { path: '/research/technology', element: <TechnologyPage /> },
    { path: '/research/outcomes-index', element: <OutcomesIndexPage /> },

    // Impact
    { path: '/impact', element: <ImpactPage /> },
    { path: '/impact/patient-outcomes', element: <PatientOutcomesPage /> },
    { path: '/impact/healthcare-access', element: <HealthcareAccessPage /> },
    { path: '/impact/public-health-mission', element: <PublicHealthMissionPage /> },

    // News & Insights
    { path: '/news-insights', element: <NewsInsightsPage /> },
    { path: '/news-insights/news', element: <NewsPage /> },
    { path: '/news-insights/insights', element: <InsightsPage /> },
])
