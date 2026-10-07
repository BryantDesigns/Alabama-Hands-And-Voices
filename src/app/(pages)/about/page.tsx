import { getSingleton } from '@/lib/keystatic/singletons'
import { getBoardMembers, getStaffMembers } from '@/lib/keystatic/collections'
import { createPageMetadata } from '@/lib/seo'
import About from '@/components/pages/aboutpage/About'

export const metadata = createPageMetadata('/about')

export default async function Page() {
    const [aboutPage, boardMemberEntries, staffMemberEntries] =
        await Promise.all([
            getSingleton('aboutPage'),
            getBoardMembers(),
            getStaffMembers(),
        ])
    const board = boardMemberEntries
        .map((boardMemberEntry) => ({
            name: boardMemberEntry.entry.name,
            role: boardMemberEntry.entry.role,
            imageUrl: boardMemberEntry.entry.imageUrl,
            sortOrder: boardMemberEntry.entry.sortOrder,
        }))
        .sort(
            (firstMember, secondMember) =>
                (firstMember.sortOrder ?? 99) - (secondMember.sortOrder ?? 99)
        )
    const staff = staffMemberEntries
        .map((staffMemberEntry) => ({
            name: staffMemberEntry.entry.name,
            role: staffMemberEntry.entry.role,
            category: staffMemberEntry.entry.category,
            imageUrl: staffMemberEntry.entry.imageUrl,
            sortOrder: staffMemberEntry.entry.sortOrder,
        }))
        .sort(
            (firstMember, secondMember) =>
                (firstMember.sortOrder ?? 99) - (secondMember.sortOrder ?? 99)
        )
    return <About about={aboutPage} board={board} staff={staff} />
}
