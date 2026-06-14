import MembershipForm from '@/components/pages/membership/MembershipForm'
import { getMembershipPageContent } from '@/lib/keystatic/pages'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/membership')

export default async function MembershipPage() {
    const data = await getMembershipPageContent()

    const heroText = data?.heroText ?? ''
    const documentDownloadUrl = data?.documentDownloadUrl ?? '/assets/03_hv-membership-form.docx'
    const scholarshipNote = data?.scholarshipNote ?? 'Scholarships are available for parents upon request.'

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-hvblue-600 pb-16 pt-24">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="font-kaushan mb-8 text-4xl text-white md:text-5xl">
                            Help Us Help You!
                        </h1>
                        <div className="space-y-6 text-lg text-white">
                            <p>{heroText}</p>
                            <p>
                                Download our{' '}
                                <a
                                    href={documentDownloadUrl}
                                    className="font-bold text-hvorange-400 underline hover:text-hvorange-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Membership Form
                                </a>{' '}
                                or fill out the form below to pay online.{' '}
                                {scholarshipNote}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="font-kaushan mb-8 text-center text-3xl text-gray-900">
                            Membership Registration
                        </h2>
                        <MembershipForm />
                    </div>
                </div>
            </section>
        </div>
    )
}
