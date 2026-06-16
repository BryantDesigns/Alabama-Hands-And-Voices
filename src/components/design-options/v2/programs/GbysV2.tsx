import Image from 'next/image'
import GbysFormV2 from '@/components/design-options/v2/programs/GbysFormV2'
import type { getGbysPageContent } from '@/lib/keystatic/pages'

interface GbysV2Props {
    gbys: NonNullable<Awaited<ReturnType<typeof getGbysPageContent>>>
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function toParagraphs(text: string): string[] {
    return text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
}

// ── Inline SVG icons ──────────────────────────────────────────────────────────

function LeafMark({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
        >
            <path
                d="M12 21c0-6 0-9 3.5-12.5C18 6 21 5 21 5s-1 3-3.5 5.5C14 14 12 15 12 21Z"
                fill="currentColor"
                opacity="0.9"
            />
            <path
                d="M12 21c0-5-1-7.5-4-10.5C5.5 8 3 7 3 7s.5 3 3 5.5C9 15.5 12 16 12 21Z"
                fill="currentColor"
                opacity="0.55"
            />
            <path
                d="M12 21V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.5"
            />
        </svg>
    )
}

function CheckCircleIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                clipRule="evenodd"
            />
        </svg>
    )
}

function HandshakeIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 2.18C8.44 5.47 9 8.85 11.4 11.25l4.19 3.12ZM9.75 21.75c-1.67-1.67-3-3.75-3.75-6.19"
            />
        </svg>
    )
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function GbysV2({ gbys }: GbysV2Props) {
    const { programIntro, services, enrollmentNote } = gbys

    const paragraphs = programIntro ? toParagraphs(programIntro) : []

    return (
        <main className="bg-white text-hvblue">
            {/* ============================================================ */}
            {/* HERO — warm gradient, GBYS logo, serif h1 */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-linear-to-b from-hvorange-50 via-hvorange-50/30 to-white">
                {/* Decorative blobs */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-hvorange-100/70 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-12 h-72 w-72 rounded-full bg-hvblue/5 blur-3xl"
                />

                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        {/* GBYS logo */}
                        <div className="mb-8 flex justify-center">
                            <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70">
                                <Image
                                    src="/images/gbys-logo.png"
                                    alt="Guide By Your Side — GBYS program logo"
                                    width={260}
                                    height={130}
                                    priority
                                    sizes="260px"
                                    className="h-auto w-48 object-contain md:w-64"
                                />
                            </div>
                        </div>

                        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            Alabama Hands &amp; Voices Program
                        </p>

                        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-hvblue md:text-6xl">
                            Guide By Your Side
                        </h1>

                        <p className="mt-4 font-kaushan text-xl leading-snug text-hvorange-700 md:text-2xl">
                            <span className="sr-only">Our promise: </span>
                            A parent guide, right by your side
                        </p>

                        {paragraphs.length > 0 && (
                            <div className="mx-auto mt-7 max-w-2xl space-y-4 text-base leading-relaxed text-slate-700 md:text-lg">
                                {paragraphs.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="h-px w-full bg-linear-to-r from-transparent via-hvorange-200 to-transparent"
                />
            </section>

            {/* ============================================================ */}
            {/* SERVICES — warm cards */}
            {/* ============================================================ */}
            {services && services.length > 0 && (
                <section className="bg-white py-16 md:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl">
                            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                <LeafMark className="h-4 w-4 text-hvorange-600" />
                                What we offer
                            </p>
                            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                                Services available
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1 w-14 rounded-full bg-hvorange-600"
                            />

                            <ul
                                role="list"
                                className="mt-8 space-y-4"
                                aria-label="GBYS services"
                            >
                                {services.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-4 rounded-2xl bg-hvorange-50 p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                                    >
                                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
                                            <CheckCircleIcon className="h-4 w-4 text-hvorange-700" />
                                        </span>
                                        <span className="text-base leading-relaxed text-slate-700">
                                            {item.service}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            {/* ============================================================ */}
            {/* ENROLLMENT NOTE — soft tinted band */}
            {/* ============================================================ */}
            {enrollmentNote && (
                <section className="bg-slate-50 py-16 md:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl">
                            <div className="flex gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 md:p-8">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-hvorange-100 text-hvorange-700">
                                    <HandshakeIcon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h2 className="font-serif text-xl font-bold text-hvblue md:text-2xl">
                                        How to enroll
                                    </h2>
                                    <span
                                        aria-hidden="true"
                                        className="mt-3 block h-1 w-10 rounded-full bg-hvorange-600"
                                    />
                                    <p className="mt-4 text-base leading-relaxed text-slate-700">
                                        {enrollmentNote}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ============================================================ */}
            {/* FORM — tabbed, warm card on white */}
            {/* ============================================================ */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            Get Connected
                        </p>
                        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                            Request a Parent Guide
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1 w-14 rounded-full bg-hvorange-600"
                        />
                        <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
                            Fill out the form below and a GBYS coordinator will match you with a
                            Parent Guide. All information is kept confidential.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 max-w-3xl">
                        <GbysFormV2 />
                    </div>
                </div>
            </section>
        </main>
    )
}
