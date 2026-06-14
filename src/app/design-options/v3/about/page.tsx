import { getAboutPageContent } from '@/lib/keystatic/pages'
import { getBoardMembers, getStaffMembers } from '@/lib/keystatic/collections'
import AboutV3 from '@/components/design-options/v3/about/AboutV3'

export const metadata = { title: 'About — Bold & Uplifting (v3)' }

export default async function Page() {
    const [about, boardRaw, staffRaw] = await Promise.all([
        getAboutPageContent(),
        getBoardMembers(),
        getStaffMembers(),
    ])
    if (!about) return <main className="p-8">About content not found.</main>
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
    return <AboutV3 about={about} board={board} staff={staff} />
}
