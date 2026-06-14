import { getResourcesPageContent } from '@/lib/keystatic/pages'
import ResourcesV2 from '@/components/design-options/v2/resources/ResourcesV2'

export const metadata = { title: 'Resources — Warm & Editorial (v2)' }

export default async function Page() {
    const data = await getResourcesPageContent()
    if (!data) return <main className="p-8">Resources content not found.</main>
    return <ResourcesV2 data={data} />
}
