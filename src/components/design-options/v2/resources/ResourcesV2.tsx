import Link from 'next/link'
import type { getResourcesPageContent } from '@/lib/keystatic/pages'

type ResourcesData = NonNullable<Awaited<ReturnType<typeof getResourcesPageContent>>>

interface ResourcesV2Props {
    data: ResourcesData
}

// ── Inline SVG icons ─────────────────────────────────────────────────────────

function ExternalLinkIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="currentColor"
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
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

function BookIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
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

// Card color variants rotate through warm editorial tones
const categoryAccents = [
    {
        ring: 'ring-hvorange-200',
        bg: 'bg-hvorange-50',
        dotBg: 'bg-hvorange-100',
        dotText: 'text-hvorange-700',
        eyebrow: 'text-hvorange-700',
    },
    {
        ring: 'ring-hvblue/20',
        bg: 'bg-slate-50',
        dotBg: 'bg-hvblue/10',
        dotText: 'text-hvblue',
        eyebrow: 'text-hvblue',
    },
    {
        ring: 'ring-hvorange-200',
        bg: 'bg-hvorange-50/60',
        dotBg: 'bg-hvorange-100',
        dotText: 'text-hvorange-700',
        eyebrow: 'text-hvorange-700',
    },
]

interface ResourceLinkProps {
    name: string
    url: string
}

function ResourceLink({ name, url }: ResourceLinkProps) {
    const isExternal = url.startsWith('http')

    const linkClasses =
        'group inline-flex min-h-[44px] w-full items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-hvblue transition duration-150 hover:bg-white hover:shadow-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2'

    if (isExternal) {
        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
            >
                <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/80 transition duration-150 group-hover:bg-hvorange-50 group-hover:ring-hvorange-200"
                >
                    <ArrowIcon className="h-3.5 w-3.5 text-hvorange-700" />
                </span>
                <span className="flex-1 leading-snug">{name}</span>
                <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0 text-slate-400 transition group-hover:text-hvorange-700" />
            </a>
        )
    }

    return (
        <Link href={url} className={linkClasses}>
            <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/80 transition duration-150 group-hover:bg-hvorange-50 group-hover:ring-hvorange-200"
            >
                <ArrowIcon className="h-3.5 w-3.5 text-hvorange-700" />
            </span>
            <span className="flex-1 leading-snug">{name}</span>
        </Link>
    )
}

export default function ResourcesV2({ data }: ResourcesV2Props) {
    const { introCopy, resourceCategories, ehdiSidebarBody, ehdiSidebarUrl } =
        data

    return (
        <main className="bg-white text-hvblue">
            {/* ============================================================ */}
            {/* HERO — warm gradient, serif heading, kaushan tagline          */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-linear-to-b from-hvorange-50 via-hvorange-50/30 to-white">
                {/* Decorative warm blobs */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-hvorange-100/50 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 top-8 h-64 w-64 rounded-full bg-hvblue/5 blur-3xl"
                />

                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        {/* Eyebrow */}
                        <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            Family Resources
                        </p>

                        {/* Serif display heading */}
                        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-hvblue md:text-5xl">
                            Resources for Every{' '}
                            <span className="text-hvorange-700">Step</span> of
                            the Journey
                        </h1>

                        {/* Kaushan decorative accent */}
                        <p
                            className="mt-4 font-kaushan text-xl text-hvorange-700 md:text-2xl"
                            aria-hidden="true"
                        >
                            You don&apos;t have to navigate this alone.
                        </p>

                        {/* Thin orange rule */}
                        <span
                            aria-hidden="true"
                            className="mx-auto mt-6 block h-px w-24 bg-linear-to-r from-transparent via-hvorange-400 to-transparent"
                        />

                        {/* Intro copy */}
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
                            {introCopy}
                        </p>
                    </div>
                </div>

                {/* Soft bottom edge */}
                <div
                    aria-hidden="true"
                    className="h-px w-full bg-linear-to-r from-transparent via-hvorange-200/60 to-transparent"
                />
            </section>

            {/* ============================================================ */}
            {/* RESOURCE CATEGORIES + EHDI SIDEBAR                           */}
            {/* ============================================================ */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:gap-12 xl:gap-16">
                        {/* Left: resource category cards */}
                        <div className="space-y-8">
                            {resourceCategories.map((category, idx) => {
                                const accent =
                                    categoryAccents[
                                        idx % categoryAccents.length
                                    ]
                                return (
                                    <article
                                        key={idx}
                                        className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ${accent.ring} transition duration-200 hover:-translate-y-0.5 hover:shadow-md md:p-8`}
                                    >
                                        {/* Card header */}
                                        <header className="mb-6 flex items-start gap-4">
                                            <div
                                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${accent.dotBg} ${accent.dotText}`}
                                            >
                                                <BookIcon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p
                                                    className={`text-xs font-semibold uppercase tracking-wide ${accent.eyebrow}`}
                                                >
                                                    Category {idx + 1}
                                                </p>
                                                <h2 className="font-serif text-xl font-bold tracking-tight text-hvblue md:text-2xl">
                                                    {category.title}
                                                </h2>
                                            </div>
                                        </header>

                                        {/* Thin rule below header */}
                                        <span
                                            aria-hidden="true"
                                            className="mb-5 block h-px w-full bg-slate-100"
                                        />

                                        {/* Resource links */}
                                        <ul
                                            role="list"
                                            className={`-mx-2 divide-y divide-slate-100/70 rounded-xl ${accent.bg} px-2 py-1`}
                                        >
                                            {category.resources.map(
                                                (resource, rIdx) => (
                                                    <li key={rIdx}>
                                                        <ResourceLink
                                                            name={resource.name}
                                                            url={resource.url}
                                                        />
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </article>
                                )
                            })}
                        </div>

                        {/* Right: sticky sidebar */}
                        <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
                            {/* EHDI-PALS callout */}
                            <div className="relative overflow-hidden rounded-2xl bg-hvblue p-6 shadow-sm md:p-7">
                                {/* Decorative warm glow */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-hvorange/20 blur-2xl"
                                />

                                <div className="relative">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-hvorange-300">
                                        Featured Resource
                                    </p>
                                    <h2 className="mt-2 font-serif text-xl font-bold text-white">
                                        EHDI-PALS Directory
                                    </h2>
                                    <span
                                        aria-hidden="true"
                                        className="mt-3 block h-px w-10 bg-hvorange-500"
                                    />
                                    <p className="mt-4 text-sm leading-relaxed text-white/85">
                                        {ehdiSidebarBody}
                                    </p>
                                    <a
                                        href={ehdiSidebarUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-hvorange-600 px-5 py-2.5 text-sm font-semibold text-white transition duration-150 hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                    >
                                        Search EHDI-PALS
                                        <ExternalLinkIcon className="h-3.5 w-3.5" />
                                    </a>
                                </div>
                            </div>

                            {/* Quick tip card */}
                            <div className="rounded-2xl bg-hvorange-50 p-6 ring-1 ring-hvorange-200/60">
                                <div className="flex items-start gap-3">
                                    <LeafMark className="mt-0.5 h-5 w-5 shrink-0 text-hvorange-600" />
                                    <div>
                                        <p className="text-sm font-semibold text-hvblue">
                                            Need personalized help?
                                        </p>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                            Our parent guides have been in your
                                            shoes and can help you find the
                                            right resources for your family.
                                        </p>
                                        <Link
                                            href="/design-options/v2/programs"
                                            className="mt-3 inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-hvorange-700 underline-offset-4 transition hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                        >
                                            Find a guide
                                            <ArrowIcon className="h-3.5 w-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* CLOSING CTA — warm hvblue band, editorial feel               */}
            {/* ============================================================ */}
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden rounded-3xl bg-hvblue px-6 py-14 text-center shadow-sm sm:px-12 md:py-18">
                        {/* Warm decorative glows */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-hvorange-500/15 blur-3xl"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-16 -right-12 h-72 w-72 rounded-full bg-hvorange-600/10 blur-3xl"
                        />

                        <div className="relative mx-auto max-w-2xl">
                            <p className="font-kaushan text-2xl text-hvorange-300 md:text-3xl">
                                We&apos;re here for you
                            </p>
                            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
                                Can&apos;t find what you need?
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mx-auto mt-5 block h-1 w-16 rounded-full bg-hvorange-500"
                            />
                            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/85">
                                Get matched with a Parent Guide who understands
                                your family&apos;s journey and can connect you with
                                the right support.
                            </p>
                            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                                <Link
                                    href="/design-options/v2/programs"
                                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-hvorange-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition duration-150 hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                >
                                    <HeartIcon className="h-5 w-5" />
                                    Get matched with a Parent Guide
                                </Link>
                                <Link
                                    href="/design-options/v2/membership"
                                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full border-2 border-white/60 px-7 py-3 text-base font-semibold text-white transition duration-150 hover:bg-white hover:text-hvblue focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
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
