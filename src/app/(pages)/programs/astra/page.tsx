import Astra from '@/components/pages/astrapage/Astra'
import { getSiteSettings } from '@/lib/keystatic/pages'
import { getSingleton } from '@/lib/keystatic/singletons'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/programs/astra')

export default async function AstraPage() {
    const [astraPage, settings] = await Promise.all([
        getSingleton('astraPage'),
        getSiteSettings(),
    ])

    return <Astra astra={astraPage} contactEmail={settings.contactEmail} />
}
