import Image from 'next/image'
import Link from 'next/link'
import { getAboutPageContent } from '@/lib/keystatic/pages'

const AboutPage = async () => {
    const data = await getAboutPageContent()

    const images = data?.images ?? []
    const image0 = images[0] ?? { src: '/images/aboutUsWhoWeAre1.jpg', alt: '' }
    const image1 = images[1] ?? { src: '/images/aboutUsWhoWeAreFamily.jpg', alt: '' }
    const image2 = images[2] ?? { src: '/images/aboutUsWhoWeAreTrail.jpeg', alt: '' }

    return (
        <>
            <div className="bg-white">
                {/* Who We Are Section */}
                <section>
                    {/* Who We Are Section */}
                    <div className="overflow-hidden bg-gradient-to-t from-hvblue via-white to-white py-24">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                                <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                                    <h1 className="text-3xl font-semibold uppercase tracking-tight text-hvorange sm:text-4xl">
                                        WHO WE ARE
                                    </h1>
                                    <p className="mt-6 text-lg/8 text-gray-600 sm:text-xl/8">
                                        {data?.whoWeAreBody ?? ''}
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                                    <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                                        <Image
                                            alt={image0.alt}
                                            src={image0.src}
                                            width={600}
                                            height={500}
                                            className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                        />
                                    </div>
                                    <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                                        <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                            <Image
                                                alt={image1.alt}
                                                src={image1.src}
                                                width={600}
                                                height={500}
                                                className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                            />
                                        </div>
                                        <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                            <Image
                                                alt={image2.alt}
                                                src={image2.src}
                                                width={600}
                                                height={500}
                                                className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                            />
                                        </div>
                                        <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                            <Image
                                                alt={image0.alt}
                                                src={image0.src}
                                                width={600}
                                                height={500}
                                                className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why We Are Here Section */}
                <section>
                    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                        <h2 className="text-3xl font-semibold uppercase tracking-tight text-hvorange sm:text-4xl">
                            Why We are Here
                        </h2>
                        <div className="mt-10 flex items-center gap-x-6">
                            <p className="text-pretty text-lg/8 font-medium text-gray-500 sm:text-xl/8">
                                {data?.whyWeAreHereBody ?? ''}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-gray-200 py-16 text-black">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl font-semibold uppercase tracking-tight text-hvorange sm:text-4xl">
                            Join Hands & Voices
                        </h2>
                        <p className="mt-4 text-lg">
                            {data?.membershipCtaText ?? ''}
                        </p>
                        <p className="mt-4 text-lg">
                            Download our{' '}
                            <Link
                                href={data?.membershipFormUrl ?? '/assets/membership-form.pdf'}
                                className="py-3 text-lg font-semibold text-hvorange transition hover:text-hvorange-700"
                            >
                                Membership Form
                            </Link>{' '}
                            or visit our{' '}
                            <Link
                                href="/membership"
                                className="py-3 text-lg font-semibold text-hvorange transition hover:text-hvorange-700"
                            >
                                membership
                            </Link>{' '}
                            sign-up page to pay online.
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AboutPage
