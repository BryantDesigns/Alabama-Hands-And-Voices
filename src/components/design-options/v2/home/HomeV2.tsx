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

interface HomeV2Props {
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

// Small decorative leaf/sprout mark used as a gentle organic accent.
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

export default function HomeV2({ data, donationLabel, resolvedEvents }: HomeV2Props) {
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
            {/* HERO — warm gradient wash, kaushan tagline, layered logo */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-linear-to-b from-hvorange-50 via-hvorange-50/40 to-white">
                {/* Soft decorative blobs for atmosphere */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-hvorange-100/60 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-16 h-80 w-80 rounded-full bg-hvblue/5 blur-3xl"
                />

                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
                    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                        {/* Logo */}
                        <Image
                            src={heroLogoImage}
                            alt="Alabama Hands & Voices"
                            width={180}
                            height={180}
                            priority
                            sizes="(max-width: 768px) 120px, 180px"
                            className="h-24 w-auto md:h-32"
                        />

                        {/* Eyebrow */}
                        <p className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            Alabama Hands &amp; Voices
                        </p>

                        {/* Serif display headline */}
                        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-hvblue md:text-6xl">
                            Wherever your journey
                            <br className="hidden sm:block" /> begins, you are
                            not alone.
                        </h1>

                        {/* Kaushan emotional tagline (decorative) + a11y plain text */}
                        <p className="mt-7 font-kaushan text-2xl leading-snug text-hvorange-700 md:text-4xl">
                            <span className="sr-only">Our promise: </span>
                            {heroQuote}
                        </p>

                        {/* CTAs */}
                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Link
                                href="/design-options/v2/programs"
                                className="inline-flex items-center gap-2 rounded-full bg-hvorange-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            >
                                Find your support
                                <ArrowIcon className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/design-options/v2/about"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-hvblue px-7 py-3 text-base font-semibold text-hvblue transition hover:bg-hvblue hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            >
                                Our story
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Soft bottom fade into the next section */}
                <div
                    aria-hidden="true"
                    className="h-px w-full bg-linear-to-r from-transparent via-hvorange-200 to-transparent"
                />
            </section>

            {/* ============================================================ */}
            {/* INTRO — editorial split, image right */}
            {/* ============================================================ */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                Welcome
                            </p>
                            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                                {intro.heading}
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1 w-16 rounded-full bg-hvorange-600"
                            />
                            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
                                {toParagraphs(intro.body).map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>

                        {/* Image card with offset accent frame */}
                        <div className="relative">
                            <div
                                aria-hidden="true"
                                className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl border-2 border-hvorange-200 lg:block"
                            />
                            <div className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200/70">
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
            {/* WHERE TO START — full-bleed warm photo band + stats + quote */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden py-20 md:py-28">
                {/* Background photo with warm overlay */}
                <Image
                    src={whereToStart.backgroundImage}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="100vw"
                    className="-z-10 object-cover"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-hvblue/85"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-linear-to-br from-hvblue/40 via-hvblue/80 to-hvblue-600/80"
                />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
                        {/* Copy */}
                        <div className="text-white">
                            <p className="font-kaushan text-2xl text-hvorange-300 md:text-3xl">
                                {whereToStart.subheading}
                            </p>
                            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
                                {whereToStart.heading}
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1 w-16 rounded-full bg-hvorange-500"
                            />
                            <div className="mt-6 space-y-5 text-base leading-relaxed text-white/90 md:text-lg">
                                {toParagraphs(whereToStart.body).map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>

                            <Link
                                href="/design-options/v2/programs"
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-hvorange-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                            >
                                {whereToStart.ctaLabel}
                                <ArrowIcon className="h-4 w-4" />
                            </Link>
                        </div>

                        {/* Testimonial card + stats */}
                        <div className="space-y-6">
                            <figure className="relative rounded-2xl bg-white/95 p-7 shadow-lg ring-1 ring-white/40 backdrop-blur md:p-8">
                                <QuoteMark className="h-9 w-9 text-hvorange-200" />
                                <blockquote className="mt-3 font-serif text-xl leading-relaxed text-hvblue md:text-2xl">
                                    {whereToStart.quoteText}
                                </blockquote>
                                <figcaption className="mt-5 flex items-center gap-3">
                                    <span
                                        aria-hidden="true"
                                        className="h-px w-8 bg-hvorange-600"
                                    />
                                    <span className="text-sm font-semibold text-slate-700">
                                        {whereToStart.quoteAuthors}
                                    </span>
                                </figcaption>
                            </figure>

                            <dl className="grid grid-cols-3 gap-3 sm:gap-4">
                                {whereToStart.stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className="rounded-2xl bg-white/10 p-4 text-center ring-1 ring-white/20 backdrop-blur-sm"
                                    >
                                        <dt className="sr-only">
                                            {stat.label}
                                        </dt>
                                        <dd>
                                            <span className="block font-serif text-2xl font-bold text-hvorange-300 sm:text-3xl">
                                                {stat.number}
                                            </span>
                                            <span className="mt-1 block text-xs font-medium leading-tight text-white/90 sm:text-sm">
                                                {stat.label}
                                            </span>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* LEARN MORE — alternating editorial feature blocks */}
            {/* ============================================================ */}
            <section className="bg-hvorange-50 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            How we help
                        </p>
                        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                            {learnMore.heading}
                        </h2>
                    </div>

                    <div className="mt-14 space-y-16 md:space-y-24">
                        {learnMore.featureBlocks.map((block, i) => {
                            const imageRight = i % 2 === 0
                            return (
                                <article
                                    key={i}
                                    className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
                                >
                                    {/* Image */}
                                    <div
                                        className={`relative ${
                                            imageRight
                                                ? 'lg:order-2'
                                                : 'lg:order-1'
                                        }`}
                                    >
                                        <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200/70">
                                            <Image
                                                src={block.image}
                                                alt={block.imageAlt}
                                                width={680}
                                                height={520}
                                                sizes="(max-width: 1024px) 100vw, 45vw"
                                                className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]"
                                            />
                                        </div>
                                    </div>

                                    {/* Copy */}
                                    <div
                                        className={
                                            imageRight
                                                ? 'lg:order-1'
                                                : 'lg:order-2'
                                        }
                                    >
                                        <p className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                            {`0${i + 1}`}
                                        </p>
                                        <h3 className="mt-2 font-serif text-2xl font-bold tracking-tight text-hvblue md:text-3xl">
                                            {block.heading}
                                        </h3>
                                        <span
                                            aria-hidden="true"
                                            className="mt-4 block h-1 w-12 rounded-full bg-hvorange-600"
                                        />
                                        <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-700 md:text-lg">
                                            {toParagraphs(block.body).map(
                                                (p, j) => (
                                                    <p key={j}>{p}</p>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* SUPPORT OUR MISSION — warm donation CTA band */}
            {/* ============================================================ */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden rounded-3xl bg-hvblue px-6 py-14 text-center shadow-sm sm:px-12 md:py-20">
                        {/* Decorative warm glow */}
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
                                Every family deserves a guide
                            </p>
                            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
                                {support.heading}
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mx-auto mt-5 block h-1 w-16 rounded-full bg-hvorange-500"
                            />
                            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/90 md:text-lg">
                                {toParagraphs(support.body).map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>

                            <Link
                                href="/design-options/v2/membership"
                                className="mt-9 inline-flex items-center gap-2 rounded-full bg-hvorange-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                            >
                                <HeartIcon className="h-5 w-5" />
                                {donationLabel}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* EVENTS — warm tint, photo header + event cards */}
            {/* ============================================================ */}
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
                        {/* Photo intro */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                Gather with us
                            </p>
                            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                                {events.heading}
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1 w-16 rounded-full bg-hvorange-600"
                            />
                            <p className="mt-6 text-base leading-relaxed text-slate-700 md:text-lg">
                                {events.intro}
                            </p>
                            <div className="relative mt-8 overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200/70">
                                <Image
                                    src={events.backgroundImage}
                                    alt="Families gathering at an Alabama Hands & Voices event"
                                    width={640}
                                    height={420}
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Event cards */}
                        <ul role="list" className="space-y-5">
                            {resolvedEvents.map((event, i) => (
                                <li key={i}>
                                    <article className="group flex gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                                        <div
                                            aria-hidden="true"
                                            className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-hvorange-100 text-hvorange-700 transition group-hover:bg-hvorange-600 group-hover:text-white"
                                        >
                                            <LeafMark className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-xl font-semibold tracking-tight text-hvblue md:text-2xl">
                                                {event.title}
                                            </h3>
                                            <div className="mt-2 text-base leading-relaxed text-slate-700 [&_a]:text-hvorange-700 [&_a]:underline [&_a:hover]:text-hvorange-800">
                                                <DocumentRenderer document={event.description} />
                                            </div>
                                        </div>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}
