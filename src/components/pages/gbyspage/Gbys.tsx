import Image from 'next/image'
import GBYSForm from '@/components/pages/gbyspage/GBYSForm'
import type { getGbysPageContent } from '@/lib/keystatic/pages'

interface GbysProps {
    gbys: NonNullable<Awaited<ReturnType<typeof getGbysPageContent>>>
}

function toParagraphs(text: string): string[] {
    return text
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
}

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

function CheckIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clipRule="evenodd"
            />
        </svg>
    )
}

function InfoIcon({ className = '' }: { className?: string }) {
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
                d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
        </svg>
    )
}

function DownloadIcon({ className = '' }: { className?: string }) {
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
                d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
            />
        </svg>
    )
}

export default function Gbys({ gbys }: GbysProps) {
    const {
        programIntro,
        services,
        enrollmentNote,
        flyerEnglishUrl,
        flyerSpanishUrl,
    } = gbys
    const paragraphs = programIntro ? toParagraphs(programIntro) : []

    return (
        <main className="bg-white text-hvblue">
            <section className="relative isolate overflow-hidden bg-hvblue text-white">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[30rem] rotate-12 rounded-[3rem] bg-hvorange/15"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-hvorange-600"
                />

                <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
                        <div>
                            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-hvorange-50 ring-1 ring-white/20">
                                <span
                                    aria-hidden="true"
                                    className="h-2 w-2 rounded-sm bg-hvorange-600"
                                />
                                Alabama Hands &amp; Voices Program
                            </p>

                            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
                                Guide By
                                <br />
                                Your Side
                                <span
                                    aria-hidden="true"
                                    className="block text-hvorange"
                                >
                                    .
                                </span>
                            </h1>

                            <p className="mt-3 text-lg font-bold uppercase tracking-widest text-hvorange-50/80">
                                A parent guide, right by your side
                            </p>

                            {paragraphs.length > 0 && (
                                <div className="mt-6 max-w-xl space-y-4 text-base font-medium leading-relaxed text-white/90 md:text-lg">
                                    {paragraphs.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="hidden lg:block">
                            <div className="overflow-hidden rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-white/20">
                                <Image
                                    src="/images/gbys-logo.png"
                                    alt="Guide By Your Side — GBYS program logo"
                                    width={240}
                                    height={120}
                                    priority
                                    sizes="240px"
                                    className="h-auto w-48 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {services && services.length > 0 && (
                <section className="bg-slate-50 py-14 md:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                                What we offer
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                Services available.
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                            />
                        </div>

                        <div className="mt-10 rounded-3xl bg-hvblue p-6 md:p-8">
                            <ul
                                role="list"
                                className="grid gap-4 sm:grid-cols-2"
                                aria-label="GBYS services"
                            >
                                {services.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-hvorange-600">
                                            <CheckIcon className="h-3 w-3 text-white" />
                                        </span>
                                        <span className="text-sm font-medium leading-relaxed text-white/90">
                                            {item.service}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            {enrollmentNote && (
                <section className="relative isolate overflow-hidden bg-hvorange py-14 text-hvblue md:py-20">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rotate-12 rounded-[3rem] bg-hvblue/10"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-hvblue/10"
                    />

                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-hvblue text-white">
                                <InfoIcon className="h-8 w-8" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                    How to enroll.
                                </h2>
                                <span
                                    aria-hidden="true"
                                    className="mt-4 block h-1.5 w-20 rounded-full bg-hvblue"
                                />
                                <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-hvblue/90 md:text-lg">
                                    {enrollmentNote}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section
                className="bg-slate-50 py-14 md:py-20"
                aria-labelledby="program-flyers-heading"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                            Downloads
                        </p>
                        <h2
                            id="program-flyers-heading"
                            className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl"
                        >
                            Program Flyers
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />
                    </div>

                    <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
                        <a
                            href={flyerEnglishUrl}
                            download
                            className="group flex min-h-[88px] items-center justify-between gap-4 rounded-2xl bg-hvorange-700 px-6 py-5 text-white transition hover:bg-hvorange-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-2"
                        >
                            <span className="text-base font-bold">
                                GBYS Flyer (English)
                            </span>
                            <DownloadIcon className="h-6 w-6 shrink-0 transition group-hover:translate-y-0.5" />
                        </a>
                        <a
                            href={flyerSpanishUrl}
                            download
                            className="group flex min-h-[88px] items-center justify-between gap-4 rounded-2xl bg-hvorange-700 px-6 py-5 text-white transition hover:bg-hvorange-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-2"
                        >
                            <span className="text-base font-bold">
                                GBYS Flyer (Español)
                            </span>
                            <DownloadIcon className="h-6 w-6 shrink-0 transition group-hover:translate-y-0.5" />
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                            Get Connected
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                            Request a Parent Guide.
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mx-auto mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />
                    </div>

                    <div className="mx-auto mt-10 max-w-4xl">
                        <GBYSForm />
                    </div>
                </div>
            </section>

            <section className="bg-hvblue py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                                Have questions?
                            </h2>
                            <p className="mt-2 text-base font-medium text-white/80">
                                Our team is here to help you navigate every
                                step.
                            </p>
                        </div>
                        <a
                            href="/about/contact"
                            className="inline-flex min-h-[52px] shrink-0 items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-hvblue transition hover:bg-hvorange-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                        >
                            Contact us
                            <ArrowIcon className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
