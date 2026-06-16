import { getChooseMembershipPageContent } from '@/lib/keystatic/pages'
import ChooseMembershipV3 from '@/components/design-options/v3/membership/ChooseMembershipV3'

export const metadata = { title: 'Choose Membership — Bold & Uplifting (v3)' }

export default async function Page() {
    const choose = await getChooseMembershipPageContent()
    if (!choose) return <main className="p-8">Membership content not found.</main>
    return <ChooseMembershipV3 choose={choose} />
}
