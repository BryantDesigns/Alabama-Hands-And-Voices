import Gbys from '@/components/pages/gbyspage/Gbys'
import { getSingleton } from '@/lib/keystatic/singletons'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/programs/gbys')

export default async function GBYSPage() {
    const [gbysPage, settings] = await Promise.all([
        getSingleton('gbysPage'),
        getSingleton('siteSettings'),
    ])

    return <Gbys gbys={gbysPage} contactEmail={settings.contactEmail} />
}
