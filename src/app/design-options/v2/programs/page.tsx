import {
    getNavigation,
    getGbysPageContent,
    getAstraPageContent,
    getSafetyPageContent,
    getDhhCommitteePageContent,
} from '@/lib/keystatic/pages'
import { buildProgramSummaries } from '@/components/design-options/programsData'
import ProgramsV2 from '@/components/design-options/v2/programs/ProgramsV2'

export const metadata = { title: 'Programs — Warm & Editorial (v2)' }

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
    return <ProgramsV2 programs={programs} />
}
