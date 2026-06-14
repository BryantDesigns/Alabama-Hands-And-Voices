import { getHomePageContent, getSiteSettings } from '@/lib/keystatic/pages'
import HomeV2 from '@/components/design-options/v2/home/HomeV2'

export const metadata = { title: 'Home — Warm & Editorial (v2)' }

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
        <HomeV2
            data={data}
            donationLabel={settings.donationButtonLabel}
            resolvedEvents={resolvedEvents}
        />
    )
}
