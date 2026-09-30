import Astra from '@/components/pages/astrapage/Astra'
import { getAstraPageContent, getSiteSettings } from '@/lib/keystatic/pages'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/programs/astra')

export default async function AstraPage() {
    const [data, settings] = await Promise.all([
        getAstraPageContent(),
        getSiteSettings(),
    ])

    if (!data) {
        throw new Error('[Keystatic] Required ASTra Page content is missing.')
    }

    return <Astra astra={data} contactEmail={settings.contactEmail} />
}
