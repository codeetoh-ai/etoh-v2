import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'ETOH Health'
const DEFAULT_DESCRIPTION = 'ETOH Health builds the operational infrastructure for modern hospitals — connecting clinicians, patients, and systems into a unified platform for end-to-end care.'
const BASE_URL = 'https://etoh.it.com'

export default function SEO({
    title,
    description = DEFAULT_DESCRIPTION,
    path = '',
    type = 'website',
    image,
    noIndex = false,
}) {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Infrastructure for the Modern Hospital`
    const canonicalUrl = `${BASE_URL}${path}`
    const ogImage = image ? `${BASE_URL}${image}` : null

    return (
        <Helmet>
            {/* Primary */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content={SITE_NAME} />
            {ogImage && <meta property="og:image" content={ogImage} />}

            {/* Twitter */}
            <meta name="twitter:card" content={ogImage ? "summary_large_image" : "summary"} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}
        </Helmet>
    )
}
