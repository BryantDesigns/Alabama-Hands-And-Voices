import { getResourcesPageContent } from '@/lib/keystatic/pages'
import ResourcesV3 from '@/components/design-options/v3/resources/ResourcesV3'

export const metadata = { title: 'Resources — Bold & Uplifting (v3)' }

export default async function Page() {
    const data = await getResourcesPageContent()
    if (!data) return <main className="p-8">Resources content not found.</main>
    return <ResourcesV3 data={data} />
}
