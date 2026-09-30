import ChooseMembership from '@/components/pages/membership/ChooseMembership'
import {
    getChooseMembershipPageContent,
    getSiteSettings,
} from '@/lib/keystatic/pages'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/membership/choose-membership')

export default async function ChooseMembershipPage() {
    const [data, settings] = await Promise.all([
        getChooseMembershipPageContent(),
        getSiteSettings(),
    ])

    if (!data) {
        throw new Error(
            '[Keystatic] Required Choose Membership Page content is missing.'
        )
    }

    return (
        <ChooseMembership choose={data} contactEmail={settings.contactEmail} />
    )
}
