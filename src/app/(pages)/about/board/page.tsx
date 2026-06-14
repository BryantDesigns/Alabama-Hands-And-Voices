import BoardSection from "@/components/pages/aboutpage/board/BoardSection";
import InMemoriam from "@/components/pages/aboutpage/board/InMemoriam";
import { getBoardMembers } from "@/lib/keystatic/collections";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata('/about/board');

export default async function BoardMembersPage() {
  const raw = await getBoardMembers();

  const members = [...(raw ?? [])]
    .sort((a, b) => (a.entry.sortOrder ?? 99) - (b.entry.sortOrder ?? 99))
    .map((item) => ({
      name: item.entry.name,
      role: item.entry.role ?? '',
      imageUrl: item.entry.imageUrl ?? '',
    }));

  return (
    <main>
      <BoardSection members={members} />
      <InMemoriam />
    </main>
  );
}
