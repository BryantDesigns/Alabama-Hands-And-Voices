'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Section } from '@/types/pageTypes' // <-- import Section

interface WhereToStartProps {
    data: Section
}

export default function WhereToStart({ data }: WhereToStartProps) {
    /*
    Data example:
    {
      heading: "Where to start",
      subheading: "First, take a deep breath",
      backgroundImage: "https://images.unsplash.com/...",
      quote: {
        text: "“Our lives and our children's lives ...”",
        authors: ["Susan Fingerle", "Jessica Havard", "Maria Katz"]
      },
      stats: [
        { label: "Years Serving Families", value: "10+" },
        { label: "Chapters Nationwide", value: "40+" },
        { label: "Founded", value: "2017" }
      ],
      cta: {
        link: "#",
        text: "Learn more about our company"
      },
      htmlContent: "...",
    }
  */

    return (
        <section>
            <div className="bg-white py-12 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Two-column grid */}
                    <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {/* Left Column: The fancy dark container with background image, quote, stats, CTA */}
                        <div className="lg:pr-4">
                            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                                {/* Background Image */}
                                {data.backgroundImage && (
                                    <Image
                                        alt=""
                                        src={data.backgroundImage}
                                        fill
                                        className="absolute inset-0 size-full object-cover brightness-125 saturate-0"
                                    />
                                )}
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
                                {/* Decorative gradient shape */}
                                <div
                                    aria-hidden="true"
                                    className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                                >
                                    <div
                                        style={{
                                            clipPath:
                                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                        }}
                                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#141B4B] to-[#FF7F32] opacity-40"
                                    />
                                </div>

                                {/* Quote section */}
                                {data.quote && data.quote.text && (
                                    <figure className="relative isolate">
                                        {/* Example of a fancy shape or an SVG background can go here */}
                                        <blockquote className="mt-6 text-xl/8 font-semibold text-white">
                                            <p>{data.quote.text}</p>
                                        </blockquote>
                                        {/* Authors */}
                                        {Array.isArray(data.quote.authors) &&
                                            data.quote.authors.length > 0 && (
                                                <figcaption className="mt-6 text-sm/6 text-gray-300">
                                                    <strong className="font-semibold text-white">
                                                        {data.quote.authors.join(
                                                            ', '
                                                        )}
                                                    </strong>{' '}
                                                    <br />- Alabama Hands &amp;
                                                    Voices Founders
                                                </figcaption>
                                            )}
                                    </figure>
                                )}
                            </div>

                            {/* Stats */}
                            {Array.isArray(data.stats) &&
                                data.stats.length > 0 && (
                                    <dl className="mt-5 grid grid-cols-6 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-6">
                                        {data.stats.map((stat, statIdx) => (
                                            <div
                                                key={statIdx}
                                                className="col-span-2"
                                            >
                                                <dt className="text-nowrap text-sm/6 font-semibold text-gray-600">
                                                    {stat.label}
                                                </dt>
                                                <dd className="mt-2 text-3xl/10 font-bold tracking-tight text-gray-900">
                                                    {stat.value}
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                )}

                            {/* CTA */}
                            {data.cta &&
                                typeof data.cta === 'object' &&
                                'link' in data.cta && (
                                    <div className="mt-10 flex">
                                        <Link
                                            href={data.cta.link as string}
                                            className="text-base/7 font-semibold text-hvorange-600"
                                        >
                                            {data.cta.text}{' '}
                                            <span aria-hidden="true">
                                                &rarr;
                                            </span>
                                        </Link>
                                    </div>
                                )}
                        </div>

                        {/* Right Column: heading, subheading, main text */}
                        <div>
                            <div className="text-base/7 text-gray-700 lg:max-w-lg">
                                {/* Main heading */}
                                {data.heading && (
                                    <p className="text-base/7 font-semibold text-hvorange-600">
                                        {data.heading}
                                    </p>
                                )}

                                {/* Subheading */}
                                {data.subheading && (
                                    <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                        {data.subheading}
                                    </h1>
                                )}

                                {/* Body content rendered as HTML */}
                                {data.htmlContent && (
                                    <div
                                        className="mt-6"
                                        dangerouslySetInnerHTML={{
                                            __html: data.htmlContent,
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
