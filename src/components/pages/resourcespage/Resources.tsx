import Link from 'next/link'
import type { getResourcesPageContent } from '@/lib/keystatic/pages'
import type { VideoContent } from '@/types/cms'
import VideoPlayer from '@/components/pages/dhhrm/VideoPlayer'
import {
    documentLinkProps,
    isDownloadOnlyDocument,
    isViewableDocument,
} from '@/utils/documentLinks'

type ResourcesData = NonNullable<
    Awaited<ReturnType<typeof getResourcesPageContent>>
>

interface ResourcesProps {
    data: ResourcesData
    videos: VideoContent[]
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

function HeartIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
    )
}

// Bento surface definitions for the 3 category blocks.
// v3 signature: mix of white ring, hvblue block, and orange block.
const categoryBentoStyles = [
    {
        // Category 1: white ring card
        wrapper: 'bg-white ring-1 ring-slate-200 text-hvblue',
        eyebrow: 'text-hvblue',
        heading: 'text-hvblue',
        linkBase:
            'text-hvblue hover:bg-slate-50 focus-visible:ring-hvorange-600',
        linkDot: 'bg-hvblue text-white group-hover:bg-hvorange-800',
        externalIcon: 'text-slate-600 group-hover:text-hvorange-700',
        divider: 'divide-slate-100',
        countBadge: 'bg-hvblue text-white',
    },
    {
        // Category 2: hvblue block — white text ✓
        wrapper: 'bg-hvblue text-white',
        eyebrow: 'text-hvorange-50',
        heading: 'text-white',
        linkBase: 'text-white/90 hover:bg-white/10 focus-visible:ring-white',
        linkDot: 'bg-hvorange-700 text-white group-hover:bg-hvorange-500',
        externalIcon: 'text-white/50 group-hover:text-white',
        divider: 'divide-white/10',
        countBadge: 'bg-hvorange-700 text-white',
    },
    {
        // Category 3: orange block — hvblue text ✓
        wrapper: 'bg-hvorange text-hvblue',
        eyebrow: 'text-hvblue',
        heading: 'text-hvblue',
        linkBase: 'text-hvblue/90 hover:bg-hvblue/10 focus-visible:ring-hvblue',
        linkDot: 'bg-hvblue text-white group-hover:bg-hvblue-400',
        externalIcon: 'text-hvblue/50 group-hover:text-hvblue',
        divider: 'divide-hvblue/10',
        countBadge: 'bg-hvblue text-white',
    },
]

interface ResourceLinkProps {
    name: string
    url: string
    linkBase: string
    linkDot: string
    externalIcon: string
}

function ResourceLink({
    name,
    url,
    linkBase,
    linkDot,
    externalIcon,
}: ResourceLinkProps) {
    const isDownloadOnly = isDownloadOnlyDocument(url)
    const isNewTab =
        !isDownloadOnly &&
        (url.startsWith('http') || isViewableDocument(url))

    const linkClasses = `group flex min-h-[44px] items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition duration-150 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 ${linkBase}`

    if (isNewTab) {
        return (
            <a
                href={url}
                {...documentLinkProps(url, { externalNewTab: true })}
                className={linkClasses}
            >
                <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition duration-150 ${linkDot}`}
                >
                    <ArrowIcon className="h-3.5 w-3.5" />
                </span>
                <span className="flex-1 leading-snug">{name}</span>
                <ExternalLinkIcon
                    className={`h-3.5 w-3.5 shrink-0 transition duration-150 ${externalIcon}`}
                />
            </a>
        )
    }

    if (isDownloadOnly) {
        return (
            <a
                href={url}
                {...documentLinkProps(url, { externalNewTab: true })}
                className={linkClasses}
            >
                <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition duration-150 ${linkDot}`}
                >
                    <ArrowIcon className="h-3.5 w-3.5" />
                </span>
                <span className="flex-1 leading-snug">{name}</span>
            </a>
        )
    }

    return (
        <Link href={url} className={linkClasses}>
            <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition duration-150 ${linkDot}`}
            >
                <ArrowIcon className="h-3.5 w-3.5" />
            </span>
            <span className="flex-1 leading-snug">{name}</span>
        </Link>
    )
}

export default function Resources({ data, videos }: ResourcesProps) {
    const { introCopy, resourceCategories, ehdiSidebarBody, ehdiSidebarUrl } =
        data

    return (
        <main className="bg-white text-hvblue">
            {/* ============================================================ */}
            {/* HERO — full-bleed hvblue block, huge extrabold heading        */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-hvblue text-white">
                {/* Geometric atmosphere */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-[22rem] w-[22rem] rotate-12 rounded-[3rem] bg-hvorange/15"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-hvblue-50/20 blur-3xl"
                />
                {/* Left structural bar */}
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-hvorange-600"
                />

                <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                        <div>
                            {/* Eyebrow pill */}
                            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-hvorange-50 ring-1 ring-white/20">
                                <span
                                    aria-hidden="true"
                                    className="h-2 w-2 rounded-sm bg-hvorange-600"
                                />
                                Family Resources
                            </p>

                            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
                                Find what{' '}
                                <span className="text-hvorange">
                                    your family
                                </span>{' '}
                                needs.
                            </h1>

                            <span
                                aria-hidden="true"
                                className="mt-6 block h-1.5 w-20 rounded-full bg-hvorange-600"
                            />

                            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/90">
                                {introCopy}
                            </p>
                        </div>

                        {/* Resource count bento mini-block */}
                        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                            <div className="flex flex-1 flex-col justify-between rounded-3xl bg-hvorange p-6 text-hvblue">
                                <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                                    Categories
                                </p>
                                <p className="mt-2 text-5xl font-extrabold tracking-tight text-hvblue">
                                    {resourceCategories.length}
                                </p>
                            </div>
                            <div className="flex flex-1 flex-col justify-between rounded-3xl bg-white/10 p-6 text-white ring-1 ring-white/20">
                                <p className="text-sm font-bold uppercase tracking-widest text-white/80">
                                    Total resources
                                </p>
                                <p className="mt-2 text-5xl font-extrabold tracking-tight text-white">
                                    {resourceCategories.reduce(
                                        (acc, cat) =>
                                            acc + cat.resources.length,
                                        0
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                            Watch and learn
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                            Hands &amp; Voices Video Library
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />
                    </div>
                    <div className="mt-10">
                        <VideoPlayer
                            videos={videos}
                            includeFeaturedInPlaylist
                        />
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* RESOURCE CATEGORIES — bold bento grid                        */}
            {/* ============================================================ */}
            <section className="bg-slate-50 py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                            Browse by stage
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                            Resources by{' '}
                            <span className="text-hvorange-600">
                                Life Stage
                            </span>
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />
                    </div>

                    {/* Bento grid of category cards */}
                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {resourceCategories.map((category, idx) => {
                            const style =
                                categoryBentoStyles[
                                    idx % categoryBentoStyles.length
                                ]
                            return (
                                <article
                                    key={idx}
                                    className={`rounded-3xl p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl md:p-8 ${style.wrapper}`}
                                >
                                    {/* Card header row */}
                                    <header className="mb-5 flex items-start justify-between gap-4">
                                        <div>
                                            <p
                                                className={`text-xs font-bold uppercase tracking-widest ${style.eyebrow}`}
                                            >
                                                Stage {idx + 1}
                                            </p>
                                            <h3
                                                className={`mt-1 text-xl font-extrabold tracking-tight md:text-2xl ${style.heading}`}
                                            >
                                                {category.title}
                                            </h3>
                                        </div>
                                        {/* Count badge */}
                                        <span
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-extrabold ${style.countBadge}`}
                                        >
                                            {category.resources.length}
                                        </span>
                                    </header>

                                    {/* Resource links */}
                                    <ul
                                        role="list"
                                        className={`divide-y ${style.divider}`}
                                    >
                                        {category.resources.map(
                                            (resource, rIdx) => (
                                                <li key={rIdx}>
                                                    <ResourceLink
                                                        name={resource.name}
                                                        url={resource.url}
                                                        linkBase={
                                                            style.linkBase
                                                        }
                                                        linkDot={style.linkDot}
                                                        externalIcon={
                                                            style.externalIcon
                                                        }
                                                    />
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* EHDI-PALS — full-bleed orange block, hvblue text ✓           */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-hvorange py-14 text-hvblue md:py-20">
                {/* Geometric blue accents on the orange field */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rotate-12 rounded-[3rem] bg-hvblue/10"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-hvblue/8"
                />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                                Featured directory
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                EHDI-PALS
                                <br />
                                Audiology Finder
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvblue"
                            />
                            <p className="mt-6 max-w-lg text-base font-medium leading-relaxed text-hvblue/90 md:text-lg">
                                {ehdiSidebarBody}
                            </p>
                        </div>

                        {/* CTA block */}
                        <div className="lg:justify-self-end">
                            <div className="rounded-3xl bg-hvblue p-6 md:p-8">
                                <p className="text-sm font-bold uppercase tracking-widest text-white/80">
                                    Free &amp; searchable
                                </p>
                                <p className="mt-2 text-2xl font-extrabold text-white">
                                    Find audiology
                                    <br />
                                    services near you
                                </p>
                                <a
                                    href={ehdiSidebarUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-hvblue transition duration-150 hover:bg-hvorange-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                >
                                    Search EHDI-PALS
                                    <ExternalLinkIcon className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* CLOSING CTA — hvblue block before footer                     */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-hvblue py-16 text-white md:py-24">
                {/* Geometric accents */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rotate-12 rounded-[3rem] bg-hvorange/15"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-hvorange-600/15 blur-3xl"
                />
                {/* Left structural bar */}
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-hvorange-600"
                />

                <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                        Can&apos;t find what you need?
                        <br />
                        <span className="text-hvorange">
                            Get matched with a guide.
                        </span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/90">
                        Our parent guides have walked this path. They can help
                        you navigate resources, schools, and support — at no
                        cost.
                    </p>
                    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/programs"
                            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-hvorange-700 px-8 py-4 text-base font-bold text-white transition duration-150 hover:bg-hvorange-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                        >
                            <HeartIcon className="h-5 w-5" />
                            Get Parent Guide Support
                        </Link>
                        <Link
                            href="/membership"
                            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-white/60 px-8 py-4 text-base font-bold text-white transition duration-150 hover:bg-white hover:text-hvblue focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                        >
                            Join the community
                            <ArrowIcon className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
