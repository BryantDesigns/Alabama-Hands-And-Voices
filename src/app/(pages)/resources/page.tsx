import { getResourcesPageContent } from '@/lib/keystatic/pages'
import { createPageMetadata } from '@/lib/seo'
import Resources from '@/components/pages/resourcespage/Resources'

export const metadata = createPageMetadata('/resources')

export default async function Page() {
    const data = await getResourcesPageContent()
    if (!data) return <main className="p-8">Resources content not found.</main>
    return <Resources data={data} />
}
