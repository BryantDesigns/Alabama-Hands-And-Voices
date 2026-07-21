import Gbys from '@/components/pages/gbyspage/Gbys'
import { getGbysPageContent } from '@/lib/keystatic/pages'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/programs/gbys')

export default async function GBYSPage() {
    const data = await getGbysPageContent()

    if (!data) {
        throw new Error('[Keystatic] Required GBYS Page content is missing.')
    }

    return <Gbys gbys={data} />
}
