import { getSingleton } from '@/lib/keystatic/singletons'
import { getEvents } from '@/lib/keystatic/collections'
import { createPageMetadata } from '@/lib/seo'
import Home from '@/components/pages/homepage/Home'

export const metadata = createPageMetadata('/')

export default async function Page() {
    const [homePage, settings, events] = await Promise.all([
        getSingleton('homePage'),
        getSingleton('siteSettings'),
        getEvents(),
    ])

    return (
        <Home
            data={homePage}
            donationLabel={settings.donationButtonLabel}
            events={events}
        />
    )
}
