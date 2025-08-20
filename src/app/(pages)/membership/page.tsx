import MembershipForm from '@/components/pages/membership/MembershipForm'

export default function MembershipPage() {
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
                            <p>
                                We are a non-profit organization dedicated to supporting families
                                of children who are deaf or hard of hearing with information and resources so they can make the best choices for
                                their child.
                            </p>
                            <p>
                                Your contribution helps us to continue developing and
                                disseminating resources designed to give families unbiased information for their
                                children who are deaf or hard-of-hearing. We are grateful for your support. Thank you!
                            </p>
                            <p>
                                Download our{' '}
                                <a
                                    href="/assets/03_hv-membership-form.docx"
                                    className="font-bold text-hvorange-400 underline hover:text-hvorange-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Membership Form
                                </a>{' '}
                                or fill out the form below to pay online. Scholarships are available for
                                parents upon request.
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
