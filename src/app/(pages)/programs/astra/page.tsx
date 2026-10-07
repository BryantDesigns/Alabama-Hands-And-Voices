import Astra from '@/components/pages/astrapage/Astra'
import { getSingleton } from '@/lib/keystatic/singletons'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/programs/astra')

export default async function AstraPage() {
    const [astraPage, settings] = await Promise.all([
        getSingleton('astraPage'),
        getSingleton('siteSettings'),
    ])

    return <Astra astra={astraPage} contactEmail={settings.contactEmail} />
}
