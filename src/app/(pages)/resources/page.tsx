import { getResourcesPageContent } from '@/lib/keystatic/pages'
import { createPageMetadata } from '@/lib/seo'
import Resources from '@/components/pages/resourcespage/Resources'
import { getVideosByPlacement } from '@/lib/keystatic/collections'

export const metadata = createPageMetadata('/resources')

export default async function Page() {
    const [data, videos] = await Promise.all([
        getResourcesPageContent(),
        getVideosByPlacement('resources'),
    ])
    if (!data) return <main className="p-8">Resources content not found.</main>
    return <Resources data={data} videos={videos} />
}
