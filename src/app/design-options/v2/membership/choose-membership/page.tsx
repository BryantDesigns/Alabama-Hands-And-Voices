import { getChooseMembershipPageContent } from '@/lib/keystatic/pages'
import ChooseMembershipV2 from '@/components/design-options/v2/membership/ChooseMembershipV2'

export const metadata = { title: 'Choose Membership — Warm & Editorial (v2)' }

export default async function Page() {
    const choose = await getChooseMembershipPageContent()
    if (!choose) return <main className="p-8">Membership content not found.</main>
    return <ChooseMembershipV2 choose={choose} />
}
