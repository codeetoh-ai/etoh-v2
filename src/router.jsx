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
import ClinicalTerminalPage from './pages/the-system/hospital-infrastructure/clinical-terminal'
import HowItWorksPage from './pages/the-system/hospital-infrastructure/how-it-works'
import DeploymentPage from './pages/the-system/hospital-infrastructure/deployment'
import ForCliniciansPage from './pages/the-system/for-clinicians'
import ClinicianAppPage from './pages/the-system/for-clinicians/clinician-app'
import ClinicalIntelligencePage from './pages/the-system/for-clinicians/clinical-intelligence'
import WorkflowPage from './pages/the-system/for-clinicians/workflow'
import ForPatientsPage from './pages/the-system/for-patients'
import PreAdmissionPage from './pages/the-system/for-patients/pre-admission'
import PatientAppPage from './pages/the-system/for-patients/patient-app'
import HealthJourneyPage from './pages/the-system/for-patients/health-journey'
import PostDischargePage from './pages/the-system/for-patients/post-discharge'
import EndToEndCarePage from './pages/the-system/end-to-end-care'
import AdmissionToRecoveryPage from './pages/the-system/end-to-end-care/admission-to-recovery'
import WhatWeCoverPage from './pages/the-system/end-to-end-care/what-we-cover'

// Deployments
import DeploymentsPage from './pages/deployments'
import GovernmentHealthSystemsPage from './pages/deployments/government-health-systems'
import DistrictHospitalsPage from './pages/deployments/government-health-systems/district-hospitals'
import PublicHealthFacilitiesPage from './pages/deployments/government-health-systems/public-health-facilities'
import LastMileCarePage from './pages/deployments/government-health-systems/last-mile-care'
import PrivateHospitalNetworksPage from './pages/deployments/private-hospital-networks'
import HospitalGroupsPage from './pages/deployments/private-hospital-networks/hospital-groups'
import SpecialtyCentersPage from './pages/deployments/private-hospital-networks/specialty-centers'
import TertiaryCarePage from './pages/deployments/private-hospital-networks/tertiary-care'

// Research
import ResearchPage from './pages/research'
import ClinicalEvidencePage from './pages/research/clinical-evidence'
import PublicationsPage from './pages/research/clinical-evidence/publications'
import OutcomeStudiesPage from './pages/research/clinical-evidence/outcome-studies'
import ValidationDataPage from './pages/research/clinical-evidence/validation-data'
import TechnologyPage from './pages/research/technology'
import AIArchitecturePage from './pages/research/technology/ai-architecture'
import WhitepapersPage from './pages/research/technology/whitepapers'
import SystemDesignPage from './pages/research/technology/system-design'
import OutcomesIndexPage from './pages/research/outcomes-index'

// Impact
import ImpactPage from './pages/impact'
import PatientOutcomesPage from './pages/impact/patient-outcomes'
import HealthcareAccessPage from './pages/impact/healthcare-access'
import PublicHealthMissionPage from './pages/impact/public-health-mission'

// News & Insights
import NewsInsightsPage from './pages/news-insights'
import NewsPage from './pages/news-insights/news'
import PressReleasesPage from './pages/news-insights/news/press-releases'
import InTheNewsPage from './pages/news-insights/news/in-the-news'
import InsightsPage from './pages/news-insights/insights'
import ClinicalPerspectivesPage from './pages/news-insights/insights/clinical-perspectives'
import SystemIntelligencePage from './pages/news-insights/insights/system-intelligence'
import InsightsTechnologyPage from './pages/news-insights/insights/insights-technology'

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
    { path: '/the-system/hospital-infrastructure/clinical-terminal', element: <ClinicalTerminalPage /> },
    { path: '/the-system/hospital-infrastructure/how-it-works', element: <HowItWorksPage /> },
    { path: '/the-system/hospital-infrastructure/deployment', element: <DeploymentPage /> },
    { path: '/the-system/for-clinicians', element: <ForCliniciansPage /> },
    { path: '/the-system/for-clinicians/clinician-app', element: <ClinicianAppPage /> },
    { path: '/the-system/for-clinicians/clinical-intelligence', element: <ClinicalIntelligencePage /> },
    { path: '/the-system/for-clinicians/workflow', element: <WorkflowPage /> },
    { path: '/the-system/for-patients', element: <ForPatientsPage /> },
    { path: '/the-system/for-patients/pre-admission', element: <PreAdmissionPage /> },
    { path: '/the-system/for-patients/patient-app', element: <PatientAppPage /> },
    { path: '/the-system/for-patients/health-journey', element: <HealthJourneyPage /> },
    { path: '/the-system/for-patients/post-discharge', element: <PostDischargePage /> },
    { path: '/the-system/end-to-end-care', element: <EndToEndCarePage /> },
    { path: '/the-system/end-to-end-care/admission-to-recovery', element: <AdmissionToRecoveryPage /> },
    { path: '/the-system/end-to-end-care/what-we-cover', element: <WhatWeCoverPage /> },

    // Deployments
    { path: '/deployments', element: <DeploymentsPage /> },
    { path: '/deployments/government-health-systems', element: <GovernmentHealthSystemsPage /> },
    { path: '/deployments/government-health-systems/district-hospitals', element: <DistrictHospitalsPage /> },
    { path: '/deployments/government-health-systems/public-health-facilities', element: <PublicHealthFacilitiesPage /> },
    { path: '/deployments/government-health-systems/last-mile-care', element: <LastMileCarePage /> },
    { path: '/deployments/private-hospital-networks', element: <PrivateHospitalNetworksPage /> },
    { path: '/deployments/private-hospital-networks/hospital-groups', element: <HospitalGroupsPage /> },
    { path: '/deployments/private-hospital-networks/specialty-centers', element: <SpecialtyCentersPage /> },
    { path: '/deployments/private-hospital-networks/tertiary-care', element: <TertiaryCarePage /> },

    // Research
    { path: '/research', element: <ResearchPage /> },
    { path: '/research/clinical-evidence', element: <ClinicalEvidencePage /> },
    { path: '/research/clinical-evidence/publications', element: <PublicationsPage /> },
    { path: '/research/clinical-evidence/outcome-studies', element: <OutcomeStudiesPage /> },
    { path: '/research/clinical-evidence/validation-data', element: <ValidationDataPage /> },
    { path: '/research/technology', element: <TechnologyPage /> },
    { path: '/research/technology/ai-architecture', element: <AIArchitecturePage /> },
    { path: '/research/technology/whitepapers', element: <WhitepapersPage /> },
    { path: '/research/technology/system-design', element: <SystemDesignPage /> },
    { path: '/research/outcomes-index', element: <OutcomesIndexPage /> },

    // Impact
    { path: '/impact', element: <ImpactPage /> },
    { path: '/impact/patient-outcomes', element: <PatientOutcomesPage /> },
    { path: '/impact/healthcare-access', element: <HealthcareAccessPage /> },
    { path: '/impact/public-health-mission', element: <PublicHealthMissionPage /> },

    // News & Insights
    { path: '/news-insights', element: <NewsInsightsPage /> },
    { path: '/news-insights/news', element: <NewsPage /> },
    { path: '/news-insights/news/press-releases', element: <PressReleasesPage /> },
    { path: '/news-insights/news/in-the-news', element: <InTheNewsPage /> },
    { path: '/news-insights/insights', element: <InsightsPage /> },
    { path: '/news-insights/insights/clinical-perspectives', element: <ClinicalPerspectivesPage /> },
    { path: '/news-insights/insights/system-intelligence', element: <SystemIntelligencePage /> },
    { path: '/news-insights/insights/insights-technology', element: <InsightsTechnologyPage /> },
])
