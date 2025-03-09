'use client'
import { Section } from '@/types/pageTypes' // <-- import your Section interface
import PayPalDonation from '@/components/common/PayPalDonation'

interface SupportOurMissionProps {
    data: Section
}

export default function SupportOurMission({ data }: SupportOurMissionProps) {
    /*
    Data might look like:
    {
      heading: "Support Our Mission",
      htmlContent: "<p>If you would like to donate...</p>",
      cta?: "Donate now", // or other optional fields
      ...
    }
  */

    return (
        <section>
            <div className="bg-hvblue">
                <div className="px-6 py-12 sm:px-6 sm:py-12 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        {/* heading */}
                        <h2 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
                            {data.heading}
                        </h2>

                        {/* If you have htmlContent for your mission text */}
                        {data.htmlContent && (
                            <div
                                className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-white"
                                dangerouslySetInnerHTML={{
                                    __html: data.htmlContent,
                                }}
                            />
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
