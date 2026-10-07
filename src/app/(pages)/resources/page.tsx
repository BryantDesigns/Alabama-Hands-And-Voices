import { getSingleton } from '@/lib/keystatic/singletons'
import { createPageMetadata } from '@/lib/seo'
import Resources from '@/components/pages/resourcespage/Resources'
import { getVideosByPlacement } from '@/lib/keystatic/collections'

export const metadata = createPageMetadata('/resources')

export default async function Page() {
    const [resourcesPage, videos] = await Promise.all([
        getSingleton('resourcesPage'),
        getVideosByPlacement('resources'),
    ])
    return <Resources data={resourcesPage} videos={videos} />
}
