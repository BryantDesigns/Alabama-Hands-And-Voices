import {
    getNavigation,
    getGbysPageContent,
    getAstraPageContent,
    getSafetyPageContent,
    getDhhCommitteePageContent,
} from '@/lib/keystatic/pages'
import { buildProgramSummaries } from '@/components/pages/programspage/programsData'
import Programs from '@/components/pages/programspage/Programs'

export const metadata = { title: 'Programs — Bold & Uplifting (v3)' }

export default async function Page() {
    const [nav, gbys, astra, safety, dhh] = await Promise.all([
        getNavigation(),
        getGbysPageContent(),
        getAstraPageContent(),
        getSafetyPageContent(),
        getDhhCommitteePageContent(),
    ])
    if (!nav) return <main className="p-8">Programs content not found.</main>
    const programs = buildProgramSummaries(nav, gbys, astra, safety, dhh)
    return <Programs programs={programs} />
}
