import Image from 'next/image'
import Link from 'next/link'
import type { getContactPageContent } from '@/lib/keystatic/pages'

interface ContactV3Props {
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

function EnvelopeIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.25}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
        </svg>
    )
}

function PhoneIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.25}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
        </svg>
    )
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

// ── Component ─────────────────────────────────────────────────────────────────

export default function ContactV3({ contact }: ContactV3Props) {
    const { heading, body, email, phone, image } = contact

    return (
        <main className="bg-white text-hvblue">
            {/* ================================================================ */}
            {/* HERO — full-bleed hvblue block, huge extrabold headline */}
            {/* ================================================================ */}
            <section className="relative isolate overflow-hidden bg-hvblue text-white">
                {/* Geometric accents */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[30rem] rotate-12 rounded-[3rem] bg-hvorange/15"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-hvblue-50/20 blur-3xl"
                />
                {/* Left-edge orange bar */}
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-hvorange-600"
                />

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
                    <div className="max-w-3xl">
                        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-hvorange-50 ring-1 ring-white/20">
                            <span
                                aria-hidden="true"
                                className="h-2 w-2 rounded-sm bg-hvorange-600"
                            />
                            Get in Touch
                        </p>

                        <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
                            {heading}
                            <span
                                aria-hidden="true"
                                className="block text-hvorange"
                            >
                                .
                            </span>
                        </h1>

                        <div className="mt-7 max-w-xl space-y-4 text-lg font-medium leading-relaxed text-white/90 md:text-xl">
                            {toParagraphs(body).map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                            {email && (
                                <a
                                    href={`mailto:${email}`}
                                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-hvorange-600 px-7 py-3.5 text-base font-bold text-white transition duration-150 hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                >
                                    <EnvelopeIcon className="h-5 w-5" />
                                    Email Us
                                </a>
                            )}
                            {phone && (
                                <a
                                    href={`tel:${phone.replace(/\D/g, '')}`}
                                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-white/60 px-7 py-3.5 text-base font-bold text-white transition duration-150 hover:bg-white hover:text-hvblue focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                >
                                    <PhoneIcon className="h-5 w-5" />
                                    {phone}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================ */}
            {/* CONTACT DETAIL BLOCK — white section, photo + bento info cards */}
            {/* ================================================================ */}
            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        {/* Photo with geometric offset block */}
                        {image && (
                            <div className="relative">
                                <div
                                    aria-hidden="true"
                                    className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-3xl bg-hvblue lg:block"
                                />
                                <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
                                    <Image
                                        src={image}
                                        alt="Alabama Hands & Voices team member ready to welcome and support families"
                                        width={720}
                                        height={560}
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 45vw"
                                        className="h-full w-full object-cover"
                                    />
                                    {/* Orange corner badge */}
                                    <span
                                        aria-hidden="true"
                                        className="absolute right-4 top-4 h-12 w-12 rounded-2xl bg-hvorange-600"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Info cards */}
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-hvorange-700">
                                Contact Information
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                We&rsquo;re here.{' '}
                                <span className="text-hvorange-700">Reach out.</span>
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                            />

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {/* Email card */}
                                {email && (
                                    <div className="rounded-3xl bg-hvblue p-6 text-white ring-1 ring-hvblue">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hvorange-600">
                                            <EnvelopeIcon className="h-6 w-6 text-white" />
                                        </div>
                                        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-white/60">
                                            Email
                                        </p>
                                        <a
                                            href={`mailto:${email}`}
                                            className="mt-1 block text-base font-bold text-white underline-offset-4 transition hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                        >
                                            {email}
                                        </a>
                                    </div>
                                )}

                                {/* Phone card */}
                                {phone && (
                                    <div className="rounded-3xl bg-hvorange p-6 text-hvblue ring-1 ring-hvorange">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hvblue">
                                            <PhoneIcon className="h-6 w-6 text-white" />
                                        </div>
                                        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-hvblue/60">
                                            Phone
                                        </p>
                                        <a
                                            href={`tel:${phone.replace(/\D/g, '')}`}
                                            className="mt-1 block text-base font-bold text-hvblue underline-offset-4 transition hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvblue focus-visible:ring-offset-2 focus-visible:ring-offset-hvorange"
                                        >
                                            {phone}
                                        </a>
                                    </div>
                                )}
                            </div>

                            <p className="mt-8 text-base font-medium leading-relaxed text-slate-700">
                                Looking for family support?{' '}
                                <Link
                                    href="/design-options/v3/programs/gbys"
                                    className="font-bold text-hvorange-700 underline-offset-4 transition hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                >
                                    Learn about our GBYS program
                                </Link>{' '}
                                and connect with a parent guide who understands.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================ */}
            {/* GBYS CTA — full-bleed orange block, hvblue text ✓ */}
            {/* ================================================================ */}
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
                    <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                                Family Support
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                No family should navigate this alone.
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvblue"
                            />
                            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-hvblue/90 md:text-lg">
                                Our Guide By Your Side (GBYS) program pairs families of
                                deaf and hard-of-hearing children with trained parent
                                guides — real families who have lived this journey and
                                are here to walk it with you.
                            </p>
                        </div>

                        {/* CTA — blue button on orange ✓ */}
                        <div className="flex flex-col gap-4 lg:justify-self-end">
                            <Link
                                href="/design-options/v3/programs/gbys"
                                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-hvblue px-8 py-4 text-base font-bold text-white transition duration-150 hover:bg-hvblue-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvblue focus-visible:ring-offset-2 focus-visible:ring-offset-hvorange lg:w-auto"
                            >
                                Learn About GBYS
                                <ArrowIcon className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
