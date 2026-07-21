import Astra from '@/components/pages/astrapage/Astra'
import { getAstraPageContent } from '@/lib/keystatic/pages'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/programs/astra')

export default async function AstraPage() {
    const data = await getAstraPageContent()

    if (!data) {
        throw new Error('[Keystatic] Required ASTra Page content is missing.')
    }

    return <Astra astra={data} />
}
