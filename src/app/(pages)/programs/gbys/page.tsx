import Gbys from '@/components/pages/gbyspage/Gbys'
import { getGbysPageContent, getSiteSettings } from '@/lib/keystatic/pages'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/programs/gbys')

export default async function GBYSPage() {
    const [data, settings] = await Promise.all([
        getGbysPageContent(),
        getSiteSettings(),
    ])

    if (!data) {
        throw new Error('[Keystatic] Required GBYS Page content is missing.')
    }

    return <Gbys gbys={data} contactEmail={settings.contactEmail} />
}
