import { getDhhCommitteePageContent } from '@/lib/keystatic/pages'
import DhhCommitteeV3 from '@/components/design-options/v3/programs/DhhCommitteeV3'

export const metadata = { title: 'D/HH Committee — Bold & Uplifting (v3)' }

export default async function Page() {
    const dhh = await getDhhCommitteePageContent()
    if (!dhh) return <main className="p-8">D/HH Committee content not found.</main>
    return <DhhCommitteeV3 dhh={dhh} />
}
