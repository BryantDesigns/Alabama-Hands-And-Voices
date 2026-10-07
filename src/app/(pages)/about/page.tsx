import { getSingleton } from '@/lib/keystatic/singletons'
import { getBoardMembers, getStaffMembers } from '@/lib/keystatic/collections'
import { createPageMetadata } from '@/lib/seo'
import About from '@/components/pages/aboutpage/About'

export const metadata = createPageMetadata('/about')

export default async function Page() {
    const [aboutPage, boardRaw, staffRaw] = await Promise.all([
        getSingleton('aboutPage'),
        getBoardMembers(),
        getStaffMembers(),
    ])
    const board = boardRaw
        .map((m) => ({
            name: m.entry.name,
            role: m.entry.role,
            imageUrl: m.entry.imageUrl,
            sortOrder: m.entry.sortOrder,
        }))
        .sort((a, b) => (a.sortOrder ?? 99) - (b.sortOrder ?? 99))
    const staff = staffRaw
        .map((m) => ({
            name: m.entry.name,
            role: m.entry.role,
            category: m.entry.category,
            imageUrl: m.entry.imageUrl,
            sortOrder: m.entry.sortOrder,
        }))
        .sort((a, b) => (a.sortOrder ?? 99) - (b.sortOrder ?? 99))
    return <About about={aboutPage} board={board} staff={staff} />
}
