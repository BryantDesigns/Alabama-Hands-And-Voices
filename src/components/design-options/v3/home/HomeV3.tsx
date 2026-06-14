import Image from 'next/image'
import Link from 'next/link'
import { DocumentRenderer } from '@keystatic/core/renderer'
import type { DocumentElement } from '@keystatic/core'
import type { getHomePageContent } from '@/lib/keystatic/pages'

type HomeData = NonNullable<Awaited<ReturnType<typeof getHomePageContent>>>

// Resolved event with description already awaited from the document reader
interface ResolvedEvent {
    title: string
    description: DocumentElement[]
}

interface HomeV3Props {
    data: HomeData
    donationLabel: string
    resolvedEvents: ResolvedEvent[]
}

// Split a Keystatic `body` field (paragraphs separated by blank lines)
// into trimmed, non-empty paragraph strings.
function toParagraphs(body: string): string[] {
    return body
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
}

// ── Inline SVG icons (matches HeaderV3/FooterV3 convention; no emoji) ──

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

function SupportIcon({ className = '' }: { className?: string }) {
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
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            />
        </svg>
    )
}

function CalendarIcon({ className = '' }: { className?: string }) {
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
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
        </svg>
    )
}

function QuoteMark({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            fill="currentColor"
            className={className}
        >
            <path d="M12.6 6C8 7.6 4.8 11.8 4.8 17.4c0 5 3 8.6 7 8.6 3.2 0 5.6-2.4 5.6-5.6 0-3-2.2-5.2-5-5.2-.6 0-1.2.1-1.5.2.7-2.8 3-5 5.9-6L12.6 6Zm14.4 0c-4.6 1.6-7.8 5.8-7.8 11.4 0 5 3 8.6 7 8.6 3.2 0 5.6-2.4 5.6-5.6 0-3-2.2-5.2-5-5.2-.6 0-1.2.1-1.5.2.7-2.8 3-5 5.9-6L27 6Z" />
        </svg>
    )
}

export default function HomeV3({ data, donationLabel, resolvedEvents }: HomeV3Props) {
    const {
        heroQuote,
        heroLogoImage,
        intro,
        whereToStart,
        learnMore,
        support,
        events,
    } = data

    return (
        <main className="bg-white text-hvblue">
            {/* ============================================================ */}
            {/* HERO — full-bleed hvblue color block, huge headline, 2 CTAs */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-hvblue text-white">
                {/* Geometric atmosphere: hard orange wedge + soft glow */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rotate-12 rounded-[3rem] bg-hvorange/15"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-hvblue-50/20 blur-3xl"
                />
                {/* Structural left-edge bar echoing the header */}
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-hvorange-600"
                />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8 lg:py-28">
                    {/* Copy */}
                    <div>
                        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-hvorange-50 ring-1 ring-white/20">
                            <span
                                aria-hidden="true"
                                className="h-2 w-2 rounded-sm bg-hvorange-600"
                            />
                            Alabama Hands &amp; Voices
                        </p>

                        <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
                            You are not
                            <br />
                            on this journey
                            <br />
                            <span className="text-hvorange">alone.</span>
                        </h1>

                        {/* Hero quote — load-bearing brand line from props */}
                        <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-white/90 md:text-xl">
                            <span className="sr-only">Our promise: </span>
                            {heroQuote}
                        </p>

                        {/* Two punchy CTAs: Donate / Get Support */}
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Link
                                href="/design-options/v3/membership"
                                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-hvorange-600 px-7 py-3.5 text-base font-bold text-white transition duration-150 hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                            >
                                <HeartIcon className="h-5 w-5" />
                                {donationLabel}
                            </Link>
                            <Link
                                href="/design-options/v3/programs"
                                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-white/70 px-7 py-3.5 text-base font-bold text-white transition duration-150 hover:bg-white hover:text-hvblue focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                            >
                                Get Support
                                <ArrowIcon className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Logo panel — bright orange block, dark logo, geometric */}
                    <div className="relative mx-auto w-full max-w-sm lg:mx-0">
                        <div className="relative flex aspect-square items-center justify-center rounded-3xl bg-white p-10 shadow-2xl ring-1 ring-white/10">
                            <Image
                                src={heroLogoImage}
                                alt="Alabama Hands & Voices"
                                width={320}
                                height={320}
                                priority
                                sizes="(max-width: 1024px) 320px, 380px"
                                className="h-auto w-full max-w-[16rem]"
                            />
                            {/* Geometric corner tab */}
                            <span
                                aria-hidden="true"
                                className="absolute -right-3 -top-3 h-12 w-12 rounded-2xl bg-hvorange-600"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* INTRO — bold split, big heading + image card on white */}
            {/* ============================================================ */}
            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-hvorange-700">
                                Who we are
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                {intro.heading}
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                            />
                            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
                                {toParagraphs(intro.body).map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                            <Link
                                href="/design-options/v3/about"
                                className="mt-8 inline-flex items-center gap-2 text-base font-bold text-hvorange-700 underline-offset-4 transition hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            >
                                Read our full story
                                <ArrowIcon className="h-4 w-4" />
                            </Link>
                        </div>

                        {/* Image with offset geometric block behind it */}
                        <div className="relative">
                            <div
                                aria-hidden="true"
                                className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-3xl bg-hvblue lg:block"
                            />
                            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
                                <Image
                                    src={intro.image}
                                    alt={intro.imageAlt}
                                    width={720}
                                    height={560}
                                    sizes="(max-width: 1024px) 100vw, 45vw"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* WHERE TO START — full-bleed hvblue block, BENTO grid */}
            {/* (stats + testimonial + CTA) over a photo wash */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-hvblue py-14 text-white md:py-20">
                {/* Background photo, heavily darkened for AA contrast */}
                <Image
                    src={whereToStart.backgroundImage}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="100vw"
                    className="-z-10 object-cover opacity-25"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-hvblue/90"
                />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header row */}
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvorange-50">
                            {whereToStart.subheading}
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                            {whereToStart.heading}
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />
                        <div className="mt-6 space-y-4 text-base leading-relaxed text-white/90 md:text-lg">
                            {toParagraphs(whereToStart.body).map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>

                    {/* BENTO GRID — varied col/row spans, mixed surfaces */}
                    <div className="mt-12 grid auto-rows-fr grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
                        {/* Testimonial — large white card spanning 2x2 on md+ */}
                        <figure className="col-span-2 row-span-2 flex flex-col justify-between rounded-3xl bg-white p-6 text-hvblue shadow-xl md:col-span-2 md:row-span-2 md:p-8">
                            <div>
                                <QuoteMark className="h-9 w-9 text-hvorange-600" />
                                <blockquote className="mt-4 text-xl font-bold leading-snug tracking-tight text-hvblue md:text-2xl">
                                    {whereToStart.quoteText}
                                </blockquote>
                            </div>
                            <figcaption className="mt-6 flex items-center gap-3">
                                <span
                                    aria-hidden="true"
                                    className="h-1 w-8 rounded-full bg-hvorange-600"
                                />
                                <span className="text-sm font-bold text-slate-700">
                                    {whereToStart.quoteAuthors}
                                </span>
                            </figcaption>
                        </figure>

                        {/* Stat tiles — alternate orange fill (dark text) and
                            translucent white-on-blue for variety */}
                        {whereToStart.stats.map((stat, i) => {
                            const orange = i % 2 === 0
                            return (
                                <div
                                    key={i}
                                    className={`flex flex-col justify-center rounded-3xl p-6 ${
                                        orange
                                            ? 'bg-hvorange text-hvblue'
                                            : 'bg-white/10 text-white ring-1 ring-white/20'
                                    }`}
                                >
                                    <dl>
                                        <dt className="sr-only">
                                            {stat.label}
                                        </dt>
                                        <dd>
                                            <span
                                                className={`block text-4xl font-extrabold tracking-tight md:text-5xl ${
                                                    orange
                                                        ? 'text-hvblue'
                                                        : 'text-white'
                                                }`}
                                            >
                                                {stat.number}
                                            </span>
                                            <span
                                                className={`mt-1 block text-sm font-bold leading-tight ${
                                                    orange
                                                        ? 'text-hvblue/90'
                                                        : 'text-white/90'
                                                }`}
                                            >
                                                {stat.label}
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                            )
                        })}

                        {/* CTA tile — fills remaining bento cell, links to programs */}
                        <Link
                            href="/design-options/v3/programs"
                            className="group col-span-2 flex items-center justify-between gap-4 rounded-3xl bg-hvorange-600 p-6 text-left text-white transition duration-150 hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue md:col-span-2"
                        >
                            <span className="text-lg font-extrabold tracking-tight md:text-xl">
                                {whereToStart.ctaLabel}
                            </span>
                            <span
                                aria-hidden="true"
                                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 transition duration-150 group-hover:translate-x-1"
                            >
                                <ArrowIcon className="h-5 w-5" />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* LEARN MORE — bold feature cards (bento-style photo cards) */}
            {/* ============================================================ */}
            <section className="bg-slate-50 py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvorange-700">
                            How we help
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                            {learnMore.heading}
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
                        {learnMore.featureBlocks.map((block, i) => (
                            <article
                                key={i}
                                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Photo top */}
                                <div className="relative aspect-16/10 overflow-hidden">
                                    <Image
                                        src={block.image}
                                        alt={block.imageAlt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 45vw"
                                        className="object-cover transition duration-300 group-hover:scale-105"
                                    />
                                    {/* Numbered geometric badge */}
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-hvorange text-base font-extrabold text-hvblue shadow-lg"
                                    >
                                        {`0${i + 1}`}
                                    </span>
                                </div>
                                {/* Copy bottom */}
                                <div className="flex flex-1 flex-col p-6 md:p-7">
                                    <h3 className="text-xl font-bold tracking-tight text-hvblue md:text-2xl">
                                        {block.heading}
                                    </h3>
                                    <div className="mt-3 space-y-3 text-base leading-relaxed text-slate-700">
                                        {toParagraphs(block.body).map((p, j) => (
                                            <p key={j}>{p}</p>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* SUPPORT OUR MISSION — full-bleed bright ORANGE block, */}
            {/* dark hvblue text, donation CTA */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-hvorange py-14 text-hvblue md:py-20">
                {/* Geometric blue accents on the orange field */}
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
                            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-hvblue">
                                <SupportIcon className="h-5 w-5" />
                                Give today
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                {support.heading}
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvblue"
                            />
                            <div className="mt-6 max-w-2xl space-y-4 text-base font-medium leading-relaxed text-hvblue/90 md:text-lg">
                                {toParagraphs(support.body).map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>

                        {/* Donation CTA — blue button on orange (white text ✓) */}
                        <div className="lg:justify-self-end">
                            <Link
                                href="/design-options/v3/membership"
                                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-hvblue px-8 py-4 text-base font-bold text-white transition duration-150 hover:bg-hvblue-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvblue focus-visible:ring-offset-2 focus-visible:ring-offset-hvorange md:text-lg lg:w-auto"
                            >
                                <HeartIcon className="h-5 w-5" />
                                {donationLabel}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* EVENTS — white section, photo header card + event cards */}
            {/* ============================================================ */}
            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvorange-700">
                            Gather with us
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                            {events.heading}
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />
                        <p className="mt-6 text-base leading-relaxed text-slate-700 md:text-lg">
                            {events.intro}
                        </p>
                    </div>

                    {/* Bento: tall photo card + stacked event cards */}
                    <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
                        {/* Photo feature card spanning full height on lg */}
                        <div className="relative min-h-[18rem] overflow-hidden rounded-3xl shadow-sm ring-1 ring-slate-200 lg:row-span-3 lg:min-h-full">
                            <Image
                                src={events.backgroundImage}
                                alt="Families gathering at an Alabama Hands & Voices event"
                                fill
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                className="object-cover"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-linear-to-t from-hvblue/80 via-hvblue/10 to-transparent"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-6">
                                <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white ring-1 ring-white/30 backdrop-blur">
                                    <CalendarIcon className="h-4 w-4" />
                                    Year-round
                                </p>
                                <p className="mt-3 text-xl font-extrabold tracking-tight text-white">
                                    Always something happening
                                </p>
                            </div>
                        </div>

                        {/* Event cards */}
                        {resolvedEvents.map((event, i) => (
                            <article
                                key={i}
                                className="group flex gap-5 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200 transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-lg lg:col-span-2"
                            >
                                <span
                                    aria-hidden="true"
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-hvblue text-white transition duration-150 group-hover:bg-hvorange-600"
                                >
                                    <CalendarIcon className="h-6 w-6" />
                                </span>
                                <div>
                                    <h3 className="text-xl font-bold tracking-tight text-hvblue md:text-2xl">
                                        {event.title}
                                    </h3>
                                    <div className="mt-2 text-base leading-relaxed text-slate-700 [&_a]:text-hvorange-700 [&_a]:underline [&_a:hover]:text-hvorange-800">
                                        <DocumentRenderer document={event.description} />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* FINAL CTA BAND — bold hvblue block before footer */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-hvblue py-16 text-white md:py-24">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rotate-12 rounded-[3rem] bg-hvorange/15"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-hvorange-600/15 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-hvorange-600"
                />

                <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                        Connect, join, and{' '}
                        <span className="text-hvorange">give back.</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/90">
                        Become part of a community that understands. Your support
                        helps every Alabama family find their way forward.
                    </p>
                    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/design-options/v3/membership"
                            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-hvorange-600 px-8 py-4 text-base font-bold text-white transition duration-150 hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                        >
                            <HeartIcon className="h-5 w-5" />
                            {donationLabel}
                        </Link>
                        <Link
                            href="/design-options/v3/programs"
                            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-hvblue transition duration-150 hover:bg-hvorange-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                        >
                            Explore programs
                            <ArrowIcon className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
