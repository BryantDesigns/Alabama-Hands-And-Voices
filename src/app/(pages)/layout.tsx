import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { getNavigation, getSiteSettings } from '@/lib/keystatic/pages'
import { SITE_URL } from '@/lib/seo'

export default async function PagesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [navigation, settings] = await Promise.all([
        getNavigation(),
        getSiteSettings(),
    ])
    const organizationData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: settings.siteName,
        url: SITE_URL,
        logo: `${SITE_URL}/images/hvlogo.svg`,
        email: settings.contactEmail,
        telephone: settings.phone,
        address: settings.address,
        sameAs: [settings.facebookUrl],
    }

    return (
        <>
            <a
                href="#main-content"
                className="sr-only z-50 rounded-md bg-white px-4 py-3 font-semibold text-hvblue focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
            >
                Skip to main content
            </a>
            <Header
                navigation={navigation}
                facebookUrl={settings.facebookUrl}
            />
            <div id="main-content" tabIndex={-1}>
                {children}
            </div>
            <Footer navigation={navigation} settings={settings} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationData).replace(
                        /</g,
                        '\\u003c'
                    ),
                }}
            />
        </>
    )
}
