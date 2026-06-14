import { getHomePageContent, getSiteSettings } from '@/lib/keystatic/pages'
import HomeV3 from '@/components/design-options/v3/home/HomeV3'

export const metadata = { title: 'Home — Bold & Uplifting (v3)' }

export default async function Page() {
    const [data, settings] = await Promise.all([
        getHomePageContent(),
        getSiteSettings(),
    ])
    if (!data) return <main className="p-8">Home content not found.</main>
    return <HomeV3 data={data} donationLabel={settings.donationButtonLabel} />
}
