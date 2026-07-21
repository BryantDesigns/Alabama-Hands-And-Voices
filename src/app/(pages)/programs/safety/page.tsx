import Safety from '@/components/pages/safetypage/Safety'
import { getSafetyPageContent } from '@/lib/keystatic/pages'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/programs/safety')

export default async function SafetyProjectPage() {
    const data = await getSafetyPageContent()

    if (!data) {
        throw new Error('[Keystatic] Required Safety Page content is missing.')
    }

    return <Safety safety={data} />
}
