import { Link } from 'react-router-dom'

const links = [
    { href: '/', label: 'Home' },
    { href: '/about/our-mission', label: 'Our Mission' },
    { href: '/about/how-we-work', label: 'How We Work' },
    { href: '/about/careers', label: 'Careers' },
    { href: '/the-system', label: 'The System' },
    { href: '/the-system/hospital-infrastructure', label: 'Hospital Infrastructure' },
    { href: '/the-system/for-clinicians', label: 'For Clinicians' },
    { href: '/the-system/for-patients/pre-admission', label: 'Pre-Admission' },
    { href: '/the-system/for-patients/patient-app', label: 'Patient App' },
    { href: '/the-system/for-patients/health-journey', label: 'Health Journey' },
    { href: '/the-system/for-patients/post-discharge', label: 'Post-Discharge' },
    { href: '/the-system/end-to-end-care', label: 'End-to-End Care' },
    { href: '/deployments', label: 'Deployments' },
    { href: '/deployments/government-health-systems', label: 'Government Health Systems' },
    { href: '/deployments/private-hospital-networks', label: 'Private Hospital Networks' },
    { href: '/research', label: 'Research' },
    { href: '/research/clinical-evidence', label: 'Clinical Evidence' },
    { href: '/research/technology', label: 'Technology' },
    { href: '/research/outcomes-index', label: 'Outcomes Index' },
    { href: '/impact', label: 'Impact' },
    { href: '/impact/patient-outcomes', label: 'Patient Outcomes' },
    { href: '/impact/healthcare-access', label: 'Healthcare Access' },
    { href: '/impact/public-health-mission', label: 'Public Health Mission' },
    { href: '/news-insights', label: 'News & Insights' },
    { href: '/news-insights/news', label: 'News' },
    { href: '/news-insights/insights', label: 'Insights' },
]

export default function CrawlableNav() {
    return (
        <nav
            aria-label="Site navigation"
            style={{
                position: 'absolute',
                width: '1px',
                height: '1px',
                padding: 0,
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0,0,0,0)',
                whiteSpace: 'nowrap',
                border: 0,
            }}
        >
            {links.map(({ href, label }) => (
                <Link key={href} to={href}>{label}</Link>
            ))}
        </nav>
    )
}
