import Image from 'next/image'
import Link from 'next/link'
import type { getContactPageContent } from '@/lib/keystatic/pages'

interface ContactV2Props {
    contact: NonNullable<Awaited<ReturnType<typeof getContactPageContent>>>
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function toParagraphs(body: string): string[] {
    return body
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

function EnvelopeIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={className}
        >
            <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
            <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
        </svg>
    )
}

function PhoneIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 16.352V17.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                clipRule="evenodd"
            />
        </svg>
    )
}

function ArrowIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
            />
        </svg>
    )
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ContactV2({ contact }: ContactV2Props) {
    const { heading, body, email, phone, image } = contact

    return (
        <main className="bg-white text-hvblue">
            {/* ================================================================ */}
            {/* HERO — warm gradient, serif h1, kaushan tagline */}
            {/* ================================================================ */}
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

                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            Get in Touch
                        </p>

                        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-hvblue md:text-6xl">
                            {heading}
                        </h1>

                        <p className="mt-6 font-kaushan text-2xl leading-snug text-hvorange-700 md:text-3xl">
                            <span className="sr-only">We are here for you: </span>
                            We&rsquo;re just a message away.
                        </p>

                        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-slate-700 md:text-lg">
                            {toParagraphs(body).map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="h-px w-full bg-linear-to-r from-transparent via-hvorange-200 to-transparent"
                />
            </section>

            {/* ================================================================ */}
            {/* CONTACT BLOCK — photo left, details right */}
            {/* ================================================================ */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        {/* Photo with offset accent frame */}
                        {image && (
                            <div className="relative">
                                <div
                                    aria-hidden="true"
                                    className="absolute -bottom-4 -left-4 hidden h-full w-full rounded-2xl border-2 border-hvorange-200 lg:block"
                                />
                                <div className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200/70">
                                    <Image
                                        src={image}
                                        alt="Alabama Hands & Voices staff member ready to assist families"
                                        width={720}
                                        height={560}
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 45vw"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Contact details */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                Contact Information
                            </p>
                            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                                Reach out — we&rsquo;d love to hear from you.
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1 w-16 rounded-full bg-hvorange-600"
                            />

                            <div className="mt-8 space-y-5">
                                {/* Email */}
                                {email && (
                                    <div className="flex items-start gap-4 rounded-2xl bg-hvorange-50 p-5">
                                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
                                            <EnvelopeIcon className="h-5 w-5 text-hvorange-700" />
                                        </span>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                                Email
                                            </p>
                                            <a
                                                href={`mailto:${email}`}
                                                className="mt-1 block text-base font-semibold text-hvorange-700 underline-offset-4 transition hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                            >
                                                {email}
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {/* Phone */}
                                {phone && (
                                    <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5">
                                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
                                            <PhoneIcon className="h-5 w-5 text-hvorange-700" />
                                        </span>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                                Phone
                                            </p>
                                            <a
                                                href={`tel:${phone.replace(/\D/g, '')}`}
                                                className="mt-1 block text-base font-semibold text-hvorange-700 underline-offset-4 transition hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                            >
                                                {phone}
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <p className="mt-8 text-base leading-relaxed text-slate-700">
                                Looking for family support?{' '}
                                <Link
                                    href="/design-options/v2/programs/gbys"
                                    className="font-semibold text-hvorange-700 underline-offset-4 transition hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                >
                                    Visit our Guide By Your Side (GBYS) page
                                </Link>{' '}
                                to connect with a parent guide who has walked this path
                                before you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================ */}
            {/* GBYS CTA BAND — warm hvblue */}
            {/* ================================================================ */}
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden rounded-3xl bg-hvblue px-6 py-14 text-center shadow-sm sm:px-12 md:py-20">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-hvorange-500/20 blur-3xl"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-hvorange-600/15 blur-3xl"
                        />

                        <div className="relative mx-auto max-w-2xl">
                            <p className="font-kaushan text-2xl text-hvorange-300 md:text-3xl">
                                <span className="sr-only">Our promise: </span>
                                No family walks alone.
                            </p>
                            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
                                Connect with a parent guide today
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mx-auto mt-5 block h-1 w-16 rounded-full bg-hvorange-500"
                            />
                            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                                Our Guide By Your Side (GBYS) program pairs families of
                                deaf and hard-of-hearing children with experienced parent
                                guides who offer support, shared experience, and hope.
                            </p>

                            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Link
                                    href="/design-options/v2/programs/gbys"
                                    className="inline-flex items-center gap-2 rounded-full bg-hvorange-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                >
                                    Learn About GBYS
                                    <ArrowIcon className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
