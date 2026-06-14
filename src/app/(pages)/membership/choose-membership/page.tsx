import Image from 'next/image'
import { getChooseMembershipPageContent } from '@/lib/keystatic/pages'
import { membershipTiers } from '@/lib/membership'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/membership/choose-membership')

export default async function ChooseMembershipPage() {
    const data = await getChooseMembershipPageContent()

    if (!data) {
        throw new Error(
            '[Keystatic] Required Choose Membership Page content is missing.'
        )
    }

    const membershipOptions = membershipTiers.map((tier) => ({
        ...tier,
        ...data.membershipOptions[tier.key],
    }))

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-hvblue-600 pb-16 pt-24">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <h1 className="font-kaushan text-5xl font-bold text-white">
                            Select Your Membership
                        </h1>
                    </div>
                </div>
            </section>

            {/* Membership Options */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {membershipOptions.map((option) => (
                            <div
                                key={option.key}
                                className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <Image
                                        src={option.image}
                                        alt={option.title}
                                        width={400}
                                        height={250}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                                        {option.title.toUpperCase()}
                                    </h3>
                                    {option.subtitle && (
                                        <p className="mb-4 text-sm text-gray-600">
                                            {option.subtitle}
                                        </p>
                                    )}
                                    <form
                                        action="https://www.paypal.com/cgi-bin/webscr"
                                        method="post"
                                        target="_top"
                                    >
                                        <input
                                            type="hidden"
                                            name="cmd"
                                            value="_s-xclick"
                                        />
                                        <input
                                            type="hidden"
                                            name="hosted_button_id"
                                            value={option.paypalButtonId}
                                        />
                                        <button
                                            type="submit"
                                            className="w-full rounded-md bg-hvorange-600 px-6 py-3 font-bold text-white transition-colors hover:bg-hvorange-700"
                                        >
                                            ${option.price} Membership
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
