import { getAstraPageContent } from '@/lib/keystatic/pages'
import AstraV3 from '@/components/design-options/v3/programs/AstraV3'

export const metadata = { title: 'ASTra — Bold & Uplifting (v3)' }

export default async function Page() {
    const astra = await getAstraPageContent()
    if (!astra) return <main className="p-8">ASTra content not found.</main>
    return <AstraV3 astra={astra} />
}
