import { getHomePageContent, getSiteSettings } from '@/lib/keystatic/pages'
import { getEvents } from '@/lib/keystatic/collections'
import { createPageMetadata } from '@/lib/seo'
import Home from '@/components/pages/homepage/Home'

export const metadata = createPageMetadata('/')

export default async function Page() {
    const [data, settings, events] = await Promise.all([
        getHomePageContent(),
        getSiteSettings(),
        getEvents(),
    ])
    if (!data) return <main className="p-8">Home content not found.</main>

    return (
        <Home
            data={data}
            donationLabel={settings.donationButtonLabel}
            events={events}
        />
    )
}
