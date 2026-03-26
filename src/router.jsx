import { createBrowserRouter } from 'react-router-dom'
import App from './App'

// About
import OurMissionPage from './pages/about/our-mission/OurMission'
import HowWeWorkPage from './pages/about/how-we-work/HowWeWork'
import TeamPage from './pages/about/team/Team'
import CareersPage from './pages/about/careers/Careers'

// The System
import TheSystemPage from './pages/the-system/TheSystem'
import HospitalInfrastructurePage from './pages/the-system/hospital-infrastructure/HospitalInfrastructure'
import ForCliniciansPage from './pages/the-system/for-clinicians/ForClinicians'
import ForPatientsPage from './pages/the-system/for-patients/ForPatients'
import EndToEndCarePage from './pages/the-system/end-to-end-care/EndToEndCare'

// Deployments
import DeploymentsPage from './pages/deployments/Deployments'
import GovernmentHealthSystemsPage from './pages/deployments/government-health-systems/GovernmentHealthSystems'
import PrivateHospitalNetworksPage from './pages/deployments/private-hospital-networks/PrivateHospitalNetworks'

// Research
import ResearchPage from './pages/research/Research'
import ClinicalEvidencePage from './pages/research/clinical-evidence/ClinicalEvidence'
import TechnologyPage from './pages/research/technology/Technology'
import OutcomesIndexPage from './pages/research/outcomes-index/OutcomesIndex'

// Impact
import ImpactPage from './pages/impact/Impact'
import PatientOutcomesPage from './pages/impact/patient-outcomes/PatientOutcomes'
import HealthcareAccessPage from './pages/impact/healthcare-access/HealthcareAccess'
import PublicHealthMissionPage from './pages/impact/public-health-mission/PublicHealthMission'

// News & Insights
import NewsInsightsPage from './pages/news-insights/NewsInsights'
import NewsPage from './pages/news-insights/news/News'
import InsightsPage from './pages/news-insights/insights/Insights'

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
