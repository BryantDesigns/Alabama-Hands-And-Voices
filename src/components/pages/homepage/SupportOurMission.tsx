import PayPalDonation from '@/components/common/PayPalDonation'

interface SupportProps {
    heading: string
    body: string
    ctaLabel: string
}

export default function SupportOurMission({ heading, body }: SupportProps) {
    return (
        <section>
            <div className="bg-hvblue">
                <div className="px-6 py-12 sm:px-6 sm:py-12 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        {/* Heading */}
                        <h2 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
                            {heading}
                        </h2>

                        {/* Body text */}
                        {body && (
                            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-white">
                                {body}
                            </p>
                        )}

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <PayPalDonation />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
