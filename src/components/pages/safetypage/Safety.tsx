import Image from 'next/image'
import RichText from '@/components/RichText'
import type { getSafetyPageContent } from '@/lib/keystatic/pages'

function ArrowIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m0 0-6-6m6 6-6 6"
            />
        </svg>
    )
}

function ShieldIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m6-3c0 7.142-3.036 12.75-9 14.25-5.964-1.5-9-7.108-9-14.25A12.09 12.09 0 0 0 12 3a12.09 12.09 0 0 0 9 3.75Z"
            />
        </svg>
    )
}

export default function Safety({
    safety,
}: {
    safety: NonNullable<
        Awaited<ReturnType<typeof getSafetyPageContent>>
    >
}) {
    const {
        heroTagline,
        introCopy,
        actionCards,
        familyRetreatsHeading,
        familyRetreatsBody,
        familyRetreatsLink,
    } = safety
    return (
        <main className="bg-white text-hvblue">
            <section className="relative isolate overflow-hidden bg-hvblue text-white">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[30rem] rotate-12 rounded-[3rem] bg-hvorange-400/15"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-hvorange-400"
                />

                <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
                        <div>
                            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-white/80 ring-1 ring-white/20">
                                <span
                                    aria-hidden="true"
                                    className="h-2 w-2 rounded-sm bg-hvorange-400"
                                />
                                Programs
                            </p>

                            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
                                O.U.R. Children&apos;s Safety Project
                                <span
                                    aria-hidden="true"
                                    className="text-hvorange-400"
                                >
                                    .
                                </span>
                            </h1>

                            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white/80 md:text-xl">
                                {heroTagline}
                            </p>
                        </div>

                        <div className="hidden lg:block">
                            <div className="overflow-hidden rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-white/20">
                                <Image
                                    src="/images/09_OUR logo.png"
                                    alt="O.U.R. Children's Safety Project Logo"
                                    width={400}
                                    height={200}
                                    priority
                                    sizes="320px"
                                    className="h-auto w-80 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.8fr)] lg:items-start lg:gap-16">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                                Child safety starts with awareness
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                Protection begins together.
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                            />

                            <RichText
                                document={introCopy}
                                className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-700 md:text-lg [&_a]:text-hvorange-700 [&_a:hover]:text-hvorange-800"
                            />
                        </div>

                        <a
                            href="https://handsandvoices.org/resources/OUR/index.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-3xl bg-hvorange-700 p-7 text-white shadow-sm transition hover:-translate-y-1 hover:bg-hvorange-800 hover:shadow-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-4 md:p-8"
                        >
                            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                                <ShieldIcon className="h-8 w-8" />
                            </span>
                            <span className="mt-8 block text-sm font-bold uppercase tracking-widest text-white">
                                Start here
                            </span>
                            <span className="mt-2 block text-2xl font-extrabold tracking-tight md:text-3xl">
                                Parent Safety Toolkit
                            </span>
                            <span className="mt-5 inline-flex items-center gap-2 text-base font-bold">
                                Explore the toolkit
                                <ArrowIcon className="h-5 w-5 transition group-hover:translate-x-1" />
                                <span className="sr-only">
                                    {' '}
                                    (opens in a new tab)
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {actionCards && actionCards.length > 0 && (
                <section className="bg-slate-50 py-14 md:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                                Take action
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                Help make every child safer.
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                            />
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {actionCards.map((card, index) => (
                                <article
                                    key={index}
                                    className="rounded-3xl bg-white p-7 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg md:p-8"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="flex h-11 w-11 items-center justify-center rounded-2xl bg-hvblue text-sm font-extrabold text-white"
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="mt-8 text-xl font-extrabold tracking-tight text-hvblue md:text-2xl">
                                        {card.title}
                                    </h3>
                                    <p className="mt-4 text-base font-medium leading-relaxed text-slate-700">
                                        {card.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="relative isolate overflow-hidden bg-hvblue py-14 text-white md:py-20">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rotate-12 rounded-[3rem] bg-hvorange-400/15"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-white/5 blur-3xl"
                />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvorange-400">
                            Connect in person
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                            {familyRetreatsHeading}
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-400"
                        />
                        <p className="mt-6 text-base font-medium leading-relaxed text-white/80 md:text-lg">
                            {familyRetreatsBody}{' '}
                            <a
                                href={familyRetreatsLink}
                                className="group inline-flex items-center gap-1.5 font-bold text-white underline decoration-hvorange-400 decoration-2 underline-offset-4 transition hover:text-hvorange-50 focus-visible:rounded-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-400 focus-visible:ring-offset-4 focus-visible:ring-offset-hvblue"
                            >
                                Guide By Your Side Program
                                <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
