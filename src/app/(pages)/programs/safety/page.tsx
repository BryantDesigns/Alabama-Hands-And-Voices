import Safety from '@/components/pages/safetypage/Safety'
import { getSingleton } from '@/lib/keystatic/singletons'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/programs/safety')

export default async function SafetyProjectPage() {
    const safetyPage = await getSingleton('safetyPage')

    return <Safety safety={safetyPage} />
}
