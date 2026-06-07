import StaffSection from "@/components/pages/aboutpage/staff/StaffSection";
import { getStaffMembers } from "@/lib/keystatic/collections";

export default async function StaffPage() {
  const raw = await getStaffMembers();

  const members = [...(raw ?? [])]
    .sort((a, b) => (a.entry.sortOrder ?? 99) - (b.entry.sortOrder ?? 99))
    .map((item) => ({
      name: item.entry.name,
      role: item.entry.role ?? '',
      imageUrl: item.entry.imageUrl ?? '',
      category: item.entry.category ?? 'Staff',
    }));

  return (
    <main>
      <StaffSection members={members} />
    </main>
  );
}
