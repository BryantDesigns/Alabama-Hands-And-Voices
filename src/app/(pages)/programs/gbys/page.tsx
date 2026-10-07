import Gbys from '@/components/pages/gbyspage/Gbys'
import { getGbysPageContent } from '@/lib/keystatic/pages'
import { getSingleton } from '@/lib/keystatic/singletons'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/programs/gbys')

export default async function GBYSPage() {
    const [data, settings] = await Promise.all([
        getGbysPageContent(),
        getSingleton('siteSettings'),
    ])

    if (!data) {
        throw new Error('[Keystatic] Required GBYS Page content is missing.')
    }

    return <Gbys gbys={data} contactEmail={settings.contactEmail} />
}
