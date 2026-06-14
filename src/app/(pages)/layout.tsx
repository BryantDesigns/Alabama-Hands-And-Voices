import Footer from '@/components/layout/Footer'
import OverlappingLogoHeader from '@/components/ui/examples/OverlappingLogoHeader'
import { getNavigation, getSiteSettings } from '@/lib/keystatic/pages'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const settings = await getSiteSettings()

    return {
        title: settings.siteName,
    }
}

export default async function PagesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [navigation, settings] = await Promise.all([
        getNavigation(),
        getSiteSettings(),
    ])

    return (
        <>
            <OverlappingLogoHeader
                navigation={navigation}
                facebookUrl={settings.facebookUrl}
            />
            {children}
            <Footer settings={settings} />
        </>
    )
}
