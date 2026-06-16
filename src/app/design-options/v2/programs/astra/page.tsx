import { getAstraPageContent } from '@/lib/keystatic/pages'
import AstraV2 from '@/components/design-options/v2/programs/AstraV2'

export const metadata = { title: 'ASTra — Warm & Editorial (v2)' }

export default async function Page() {
    const astra = await getAstraPageContent()
    if (!astra) return <main className="p-8">ASTra content not found.</main>
    return <AstraV2 astra={astra} />
}
