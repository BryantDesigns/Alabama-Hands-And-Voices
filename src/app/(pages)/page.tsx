import { getHomePageContent, getSiteSettings } from '@/lib/keystatic/pages'
import Home from '@/components/pages/homepage/Home'

export const metadata = { title: 'Home — Bold & Uplifting (v3)' }

export default async function Page() {
    const [data, settings] = await Promise.all([
        getHomePageContent(),
        getSiteSettings(),
    ])
    if (!data) return <main className="p-8">Home content not found.</main>

    const resolvedEvents = await Promise.all(
        (data?.events?.events ?? []).map(async (evt) => ({
            title: evt.title,
            description: await evt.description(),
        }))
    )

    return (
        <Home
            data={data}
            donationLabel={settings.donationButtonLabel}
            resolvedEvents={resolvedEvents}
        />
    )
}
