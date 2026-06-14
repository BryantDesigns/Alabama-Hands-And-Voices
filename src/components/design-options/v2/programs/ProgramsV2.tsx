import Image from 'next/image'
import Link from 'next/link'
import type { ProgramSummary } from '@/components/design-options/programsData'

interface ProgramsV2Props {
    programs: ProgramSummary[]
}

// ── Inline SVG icons ─────────────────────────────────────────────────────────

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

function HandsIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
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
            strokeWidth="1.5"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
        </svg>
    )
}

function StarIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.499Z"
            />
        </svg>
    )
}

function HeartIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={className}
        >
            <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-2.046C4.447 12.613 3 10.558 3 8a5 5 0 0 1 14 0c0 2.558-1.447 4.613-2.885 6.174a22.061 22.061 0 0 1-2.582 2.046 20.759 20.759 0 0 1-1.162.682l-.019.01-.005.003-.003.001a.752.752 0 0 1-.695 0l-.003-.001z" />
        </svg>
    )
}

// Map program key to a fallback icon when no logo image is available
function ProgramIcon({
    programKey,
    className = '',
}: {
    programKey: ProgramSummary['key']
    className?: string
}) {
    if (programKey === 'safety') return <ShieldIcon className={className} />
    if (programKey === 'dhh') return <StarIcon className={className} />
    return <HandsIcon className={className} />
}

// Alternate the editorial section layout: even = image right, odd = image left
const PROGRAM_PHOTOS: Record<ProgramSummary['key'], string> = {
    gbys: '/images/family.jpg',
    astra: '/images/retreat9.jpeg',
    safety: '/images/retreat3.jpg',
    dhh: '/images/retreat11.jpeg',
}

const PROGRAM_PHOTO_ALTS: Record<ProgramSummary['key'], string> = {
    gbys: 'A family sharing a moment together',
    astra: 'Families gathering at a retreat',
    safety: 'Children and families at a safety event',
    dhh: 'Role models connecting with children who are deaf or hard of hearing',
}

// Truncate detail text to ~2 sentences so cards stay consistent
function truncateDetail(text: string, maxLen = 220): string {
    if (text.length <= maxLen) return text
    const cut = text.lastIndexOf(' ', maxLen)
    return cut > 0 ? text.slice(0, cut) + '…' : text.slice(0, maxLen) + '…'
}

export default function ProgramsV2({ programs }: ProgramsV2Props) {
    return (
        <main className="bg-white text-hvblue">
            {/* ============================================================ */}
            {/* HERO — warm gradient, serif headline, kaushan tagline */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-linear-to-b from-hvorange-50 via-hvorange-50/30 to-white">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-hvorange-100/50 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-10 h-72 w-72 rounded-full bg-hvblue/5 blur-3xl"
                />

                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            Alabama Hands &amp; Voices
                        </p>

                        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-hvblue md:text-6xl">
                            Our Programs
                        </h1>

                        {/* Kaushan emotional tagline */}
                        <p className="mt-5 font-kaushan text-2xl leading-snug text-hvorange-700 md:text-3xl">
                            <span className="sr-only">Our promise: </span>
                            Every family finds their path forward.
                        </p>

                        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
                            From one-on-one parent support to educational
                            advocacy and safety resources — our programs meet
                            your family wherever you are on your journey.
                        </p>

                        {/* Quick-nav pills */}
                        <nav
                            aria-label="Jump to program"
                            className="mt-10 flex flex-wrap items-center justify-center gap-3"
                        >
                            {programs.map((p) => (
                                <a
                                    key={p.key}
                                    href={`#program-${p.key}`}
                                    className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-hvblue shadow-sm transition hover:border-hvorange-300 hover:bg-hvorange-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                >
                                    {p.title.split('(')[0].trim()}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="h-px w-full bg-linear-to-r from-transparent via-hvorange-200 to-transparent"
                />
            </section>

            {/* ============================================================ */}
            {/* PROGRAM SECTIONS — alternating editorial image + copy */}
            {/* ============================================================ */}
            {programs.map((program, i) => {
                const imageRight = i % 2 === 0
                const bg =
                    i % 2 === 0 ? 'bg-white' : 'bg-slate-50'

                return (
                    <section
                        key={program.key}
                        id={`program-${program.key}`}
                        className={`${bg} py-16 md:py-24`}
                    >
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                                {/* ── Image ── */}
                                <div
                                    className={`relative ${imageRight ? 'lg:order-2' : 'lg:order-1'}`}
                                >
                                    {/* Decorative orange frame offset */}
                                    <div
                                        aria-hidden="true"
                                        className={`absolute hidden h-full w-full rounded-2xl border-2 border-hvorange-200 lg:block ${
                                            imageRight
                                                ? '-bottom-4 -right-4'
                                                : '-bottom-4 -left-4'
                                        }`}
                                    />
                                    <div className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200/70">
                                        {program.logo ? (
                                            <div className="flex min-h-[360px] items-center justify-center bg-slate-50 p-12">
                                                <Image
                                                    src={program.logo}
                                                    alt={`${program.title} logo`}
                                                    width={400}
                                                    height={280}
                                                    sizes="(max-width: 1024px) 100vw, 45vw"
                                                    className="h-auto w-full max-w-[18rem] object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div className="relative aspect-4/3 overflow-hidden">
                                                <Image
                                                    src={
                                                        PROGRAM_PHOTOS[
                                                            program.key
                                                        ]
                                                    }
                                                    alt={
                                                        PROGRAM_PHOTO_ALTS[
                                                            program.key
                                                        ]
                                                    }
                                                    fill
                                                    sizes="(max-width: 1024px) 100vw, 45vw"
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* ── Copy ── */}
                                <div
                                    className={
                                        imageRight
                                            ? 'lg:order-1'
                                            : 'lg:order-2'
                                    }
                                >
                                    {/* Number eyebrow */}
                                    <p className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                        {`0${i + 1} — Program`}
                                    </p>

                                    <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                                        {program.title}
                                    </h2>

                                    <span
                                        aria-hidden="true"
                                        className="mt-4 block h-1 w-14 rounded-full bg-hvorange-600"
                                    />

                                    {/* Tagline in kaushan */}
                                    <p className="mt-5 font-kaushan text-xl leading-snug text-hvorange-700">
                                        {program.description}
                                    </p>

                                    {/* Detail paragraph */}
                                    <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
                                        {truncateDetail(program.detail)}
                                    </p>

                                    {/* Highlight bullets */}
                                    {program.points.length > 0 && (
                                        <ul
                                            className="mt-6 space-y-3"
                                            aria-label={`${program.title} highlights`}
                                        >
                                            {program.points.map((pt, j) => (
                                                <li
                                                    key={j}
                                                    className="flex items-start gap-3"
                                                >
                                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-hvorange-100 text-hvorange-700">
                                                        <CheckIcon className="h-3 w-3" />
                                                    </span>
                                                    <span className="text-base leading-relaxed text-slate-700">
                                                        {pt}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* Learn more link */}
                                    <Link
                                        href={program.href}
                                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-hvorange-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                    >
                                        Learn more about {program.title.split('(')[0].trim()}
                                        <ArrowIcon className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}

            {/* ============================================================ */}
            {/* QUICK OVERVIEW CARDS — warm tint band after main sections */}
            {/* ============================================================ */}
            <section className="bg-hvorange-50 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            All together
                        </p>
                        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                            One mission, four programs
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
                            Each program is designed to meet families at a
                            different point of need — all connected by the
                            belief that no family should navigate this journey
                            alone.
                        </p>
                    </div>

                    <ul
                        role="list"
                        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {programs.map((program) => (
                            <li key={program.key}>
                                <Link
                                    href={program.href}
                                    className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                >
                                    {/* Icon/logo badge */}
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-hvorange-100 text-hvorange-700 transition group-hover:bg-hvorange-600 group-hover:text-white">
                                        {program.logo ? (
                                            <Image
                                                src={program.logo}
                                                alt=""
                                                width={32}
                                                height={32}
                                                className="h-8 w-8 object-contain"
                                            />
                                        ) : (
                                            <ProgramIcon
                                                programKey={program.key}
                                                className="h-6 w-6"
                                            />
                                        )}
                                    </div>

                                    <h3 className="mt-4 font-serif text-lg font-semibold tracking-tight text-hvblue md:text-xl">
                                        {program.title}
                                    </h3>
                                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                                        {program.description}
                                    </p>

                                    <span className="mt-5 flex items-center gap-1 text-sm font-semibold text-hvorange-700 underline-offset-4 group-hover:underline">
                                        Learn more
                                        <ArrowIcon className="h-3.5 w-3.5" />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ============================================================ */}
            {/* CTA — warm donation band */}
            {/* ============================================================ */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden rounded-3xl bg-hvblue px-6 py-14 text-center shadow-sm sm:px-12 md:py-20">
                        {/* Decorative blobs */}
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
                                Not sure where to start?
                            </p>
                            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
                                Get matched with a Parent Guide
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mx-auto mt-5 block h-1 w-16 rounded-full bg-hvorange-500"
                            />
                            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                                Our Guide By Your Side program connects your
                                family with a parent who has walked this path
                                before. There is no cost, no commitment — just a
                                conversation between two families who understand.
                            </p>

                            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                                <Link
                                    href="/programs/gbys"
                                    className="inline-flex items-center gap-2 rounded-full bg-hvorange-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                >
                                    <HeartIcon className="h-5 w-5" />
                                    Find a Parent Guide
                                </Link>
                                <Link
                                    href="/design-options/v2/membership"
                                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                >
                                    Join our community
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
