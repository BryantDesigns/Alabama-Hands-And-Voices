import Image from 'next/image'
import Link from 'next/link'
import type { getAboutPageContent } from '@/lib/keystatic/pages'
import { documentLinkProps } from '@/utils/documentLinks'

type AboutData = NonNullable<Awaited<ReturnType<typeof getAboutPageContent>>>

interface BoardMember {
    name: string
    role: string
    imageUrl: string
}

interface StaffMember {
    name: string
    role: string
    category: string
    imageUrl: string
}

interface AboutProps {
    about: AboutData
    board: BoardMember[]
    staff: StaffMember[]
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function toParagraphs(body: string): string[] {
    return body
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
}

// Group staff by category, preserving sortOrder order within each group
function groupByCategory(members: StaffMember[]): Map<string, StaffMember[]> {
    const map = new Map<string, StaffMember[]>()
    for (const m of members) {
        const cat = m.category || 'Staff'
        if (!map.has(cat)) map.set(cat, [])
        map.get(cat)!.push(m)
    }
    return map
}

// ── Inline SVG icons ─────────────────────────────────────────────────────────

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

function UsersIcon({ className = '' }: { className?: string }) {
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

// ── Component ────────────────────────────────────────────────────────────────

export default function About({ about, board, staff }: AboutProps) {
    const {
        whoWeAreBody,
        whoWeAreQuote,
        whoWeAreQuoteAttribution,
        whyWeAreHereBody,
        values,
        membershipCtaText,
        membershipFormUrl,
        images,
    } = about

    const staffGroups = groupByCategory(staff)

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
                {/* Left-edge bar */}
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
                            Our Story
                        </p>

                        <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
                            Who We
                            <br />
                            <span className="text-hvorange">Are.</span>
                        </h1>

                        <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-white/90 md:text-xl">
                            A parent-driven, non-profit community walking beside
                            every Alabama family with a deaf or hard-of-hearing
                            child — from first diagnosis to full potential.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Link
                                href="/membership"
                                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-hvorange-700 px-7 py-3.5 text-base font-bold text-white transition duration-150 hover:bg-hvorange-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                            >
                                <HeartIcon className="h-5 w-5" />
                                Join Our Community
                            </Link>
                            <a
                                href="#board"
                                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-white/60 px-7 py-3.5 text-base font-bold text-white transition duration-150 hover:bg-white hover:text-hvblue focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                            >
                                Meet the Team
                                <ArrowIcon className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================ */}
            {/* WHO WE ARE — white section, bold split with image bento */}
            {/* ================================================================ */}
            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        {/* Copy */}
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                                Who We Are
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                Parents helping parents find their way.
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                            />
                            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
                                {toParagraphs(whoWeAreBody).map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>

                        {/* Image with geometric offset block */}
                        {images[0] && (
                            <div className="relative">
                                <div
                                    aria-hidden="true"
                                    className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-3xl bg-hvblue lg:block"
                                />
                                <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
                                    <Image
                                        src={images[0].src}
                                        alt={images[0].alt}
                                        width={720}
                                        height={560}
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 45vw"
                                        className="h-full w-full object-cover"
                                    />
                                    {/* Orange badge */}
                                    <span
                                        aria-hidden="true"
                                        className="absolute right-4 top-4 h-12 w-12 rounded-2xl bg-hvorange-600"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <figure className="mx-auto mt-12 max-w-4xl rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200 md:p-10">
                        <blockquote className="text-xl font-bold leading-relaxed text-hvblue md:text-2xl">
                            &ldquo;{whoWeAreQuote}&rdquo;
                        </blockquote>
                        <figcaption className="mt-5 text-sm font-bold uppercase tracking-widest text-hvblue">
                            {whoWeAreQuoteAttribution}
                        </figcaption>
                    </figure>
                </div>
            </section>

            {/* ================================================================ */}
            {/* WHY WE ARE HERE — full-bleed ORANGE block, hvblue text ✓ */}
            {/* ================================================================ */}
            <section className="relative isolate overflow-hidden bg-hvorange py-14 text-hvblue md:py-20">
                {/* Geometric accents on orange */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rotate-12 rounded-[3rem] bg-hvblue/10"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-hvblue/10"
                />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        {/* Image */}
                        {images[1] && (
                            <div className="relative order-2 lg:order-1">
                                <div
                                    aria-hidden="true"
                                    className="absolute -bottom-5 -right-5 hidden h-full w-full rounded-3xl bg-hvblue/30 lg:block"
                                />
                                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                                    <Image
                                        src={images[1].src}
                                        alt={images[1].alt}
                                        width={720}
                                        height={560}
                                        sizes="(max-width: 1024px) 100vw, 45vw"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Copy */}
                        <div className="order-1 lg:order-2">
                            <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                                Why We&rsquo;re Here
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                Driven by mission. Powered by families.
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvblue"
                            />
                            <div className="mt-6 max-w-xl space-y-5 text-base font-medium leading-relaxed text-hvblue/90 md:text-lg">
                                {toParagraphs(whyWeAreHereBody).map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <ul
                        className="mt-10 grid gap-4 md:grid-cols-2"
                        aria-label="Our shared values"
                    >
                        {values.map((item) => (
                            <li
                                key={item.value}
                                className="flex items-start gap-3 rounded-2xl bg-hvblue p-5 font-bold leading-relaxed text-white"
                            >
                                <span
                                    aria-hidden="true"
                                    className="mt-1 h-3 w-3 shrink-0 rounded-sm bg-hvorange"
                                />
                                {item.value}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================================================================ */}
            {/* PHOTO BENTO — white section, asymmetric grid */}
            {/* ================================================================ */}
            {images.length > 0 && (
                <section className="bg-white py-14 md:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                                Our Family
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                Moments that move us.
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                            />
                        </div>

                        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    className={`group relative overflow-hidden rounded-3xl shadow-sm ring-1 ring-slate-200 transition duration-200 hover:-translate-y-1 hover:shadow-xl ${
                                        i === 0
                                            ? 'sm:col-span-2 lg:col-span-1'
                                            : ''
                                    }`}
                                >
                                    <div className="relative aspect-4/3 overflow-hidden">
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition duration-300 group-hover:scale-105"
                                        />
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-0 bg-linear-to-t from-hvblue/60 via-hvblue/5 to-transparent opacity-0 transition duration-200 group-hover:opacity-100"
                                        />
                                    </div>
                                    {img.alt && (
                                        <div className="px-4 py-3">
                                            <p className="text-sm font-medium text-slate-700">
                                                {img.alt}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ================================================================ */}
            {/* BOARD MEMBERS — hvblue block, punchy heading, card grid */}
            {/* ================================================================ */}
            <section
                id="board"
                className="relative isolate overflow-hidden bg-hvblue py-14 text-white md:py-20"
            >
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rotate-12 rounded-[3rem] bg-hvorange/15"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-hvorange-600"
                />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-hvorange-50">
                                Leadership
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                                Board{' '}
                                <span className="text-hvorange">Members</span>
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/80">
                            <UsersIcon className="h-5 w-5" />
                            {board.length} members
                        </div>
                    </div>

                    <ul
                        role="list"
                        className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    >
                        {board.map((member) => (
                            <li key={member.name}>
                                <article className="group flex flex-col items-center rounded-3xl bg-white/10 p-6 text-center ring-1 ring-white/20 transition duration-200 hover:bg-white/15 hover:ring-white/40">
                                    <div className="overflow-hidden rounded-full ring-2 ring-hvorange-600 ring-offset-2 ring-offset-hvblue transition duration-200 group-hover:ring-hvorange-400">
                                        <Image
                                            src={member.imageUrl}
                                            alt={member.name}
                                            width={80}
                                            height={80}
                                            className="h-20 w-20 rounded-full object-cover"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-base font-bold tracking-tight text-white">
                                        {member.name}
                                    </h3>
                                    <p className="mt-1 text-sm leading-snug text-white/80">
                                        {member.role}
                                    </p>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================================================================ */}
            {/* STAFF MEMBERS — white, bento-style grouped sections */}
            {/* ================================================================ */}
            <section className="bg-slate-50 py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                            Our Team
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                            Staff{' '}
                            <span className="text-hvorange-600">Members</span>
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />
                    </div>

                    <div className="mt-12 space-y-14">
                        {Array.from(staffGroups.entries()).map(
                            ([category, members]) => (
                                <div key={category}>
                                    {/* Category label as a pill */}
                                    <div className="mb-6 flex items-center gap-4">
                                        <span className="rounded-xl bg-hvblue px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-white">
                                            {category}
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="h-px flex-1 bg-slate-200"
                                        />
                                    </div>
                                    <ul
                                        role="list"
                                        className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                                    >
                                        {members.map((member) => (
                                            <li key={member.name}>
                                                <article className="group flex flex-col items-center rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                                                    <div className="overflow-hidden rounded-full ring-2 ring-slate-200 ring-offset-2 transition duration-200 group-hover:ring-hvorange-600">
                                                        <Image
                                                            src={
                                                                member.imageUrl
                                                            }
                                                            alt={member.name}
                                                            width={72}
                                                            height={72}
                                                            className="h-[72px] w-[72px] rounded-full object-cover"
                                                        />
                                                    </div>
                                                    <h4 className="mt-4 text-base font-bold tracking-tight text-hvblue">
                                                        {member.name}
                                                    </h4>
                                                    <p className="mt-1 text-sm leading-snug text-slate-600">
                                                        {member.role}
                                                    </p>
                                                </article>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* ================================================================ */}
            {/* MEMBERSHIP CTA — full-bleed orange block, hvblue text ✓ */}
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
                            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-hvblue">
                                <HeartIcon className="h-5 w-5" />
                                Join Us
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                Become a member today.
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvblue"
                            />
                            <div className="mt-6 max-w-xl space-y-4 text-base font-medium leading-relaxed text-hvblue/90 md:text-lg">
                                {toParagraphs(membershipCtaText).map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>

                        {/* CTAs — blue button on orange ✓ */}
                        <div className="flex flex-col gap-4 lg:justify-self-end">
                            <Link
                                href="/membership"
                                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-hvblue px-8 py-4 text-base font-bold text-white transition duration-150 hover:bg-hvblue-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvblue focus-visible:ring-offset-2 focus-visible:ring-offset-hvorange lg:w-auto"
                            >
                                <HeartIcon className="h-5 w-5" />
                                Join Now
                            </Link>
                            {membershipFormUrl && (
                                <a
                                    href={membershipFormUrl}
                                    {...documentLinkProps(membershipFormUrl)}
                                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border-2 border-hvblue/60 px-8 py-3.5 text-base font-bold text-hvblue transition duration-150 hover:border-hvblue hover:bg-hvblue/10 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvblue focus-visible:ring-offset-2 focus-visible:ring-offset-hvorange lg:w-auto"
                                >
                                    Download Form
                                    <ArrowIcon className="h-5 w-5" />
                                </a>
                            )}
                            <Link
                                href="/about/contact"
                                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border-2 border-hvblue/60 px-8 py-3.5 text-base font-bold text-hvblue transition duration-150 hover:border-hvblue hover:bg-hvblue/10 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvblue focus-visible:ring-offset-2 focus-visible:ring-offset-hvorange lg:w-auto"
                            >
                                Contact Us
                                <ArrowIcon className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
