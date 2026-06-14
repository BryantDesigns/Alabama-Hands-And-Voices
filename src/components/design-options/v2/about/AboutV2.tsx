import Image from 'next/image'
import Link from 'next/link'
import type { getAboutPageContent } from '@/lib/keystatic/pages'

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

interface AboutV2Props {
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

// ── Component ────────────────────────────────────────────────────────────────

export default function AboutV2({ about, board, staff }: AboutV2Props) {
    const { whoWeAreBody, whyWeAreHereBody, membershipCtaText, membershipFormUrl, images } =
        about

    const staffGroups = groupByCategory(staff)

    return (
        <main className="bg-white text-hvblue">
            {/* ================================================================ */}
            {/* HERO — warm gradient, serif headline, kaushan tagline */}
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
                        {/* Eyebrow */}
                        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            Our Story
                        </p>

                        {/* Serif display headline */}
                        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-hvblue md:text-6xl">
                            Who We Are
                        </h1>

                        {/* Kaushan emotional tagline */}
                        <p className="mt-6 font-kaushan text-2xl leading-snug text-hvorange-700 md:text-3xl">
                            <span className="sr-only">Our heart: </span>
                            Parents walking alongside parents.
                        </p>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
                            Alabama Hands &amp; Voices is a parent-driven, non-profit
                            community here for every family navigating the journey with a
                            deaf or hard-of-hearing child.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div
                    aria-hidden="true"
                    className="h-px w-full bg-linear-to-r from-transparent via-hvorange-200 to-transparent"
                />
            </section>

            {/* ================================================================ */}
            {/* WHO WE ARE — image right, editorial split */}
            {/* ================================================================ */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        {/* Copy */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                Who We Are
                            </p>
                            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                                A community built by parents, for parents.
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1 w-16 rounded-full bg-hvorange-600"
                            />
                            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
                                {toParagraphs(whoWeAreBody).map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>

                        {/* Image with offset accent frame */}
                        {images[0] && (
                            <div className="relative">
                                <div
                                    aria-hidden="true"
                                    className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl border-2 border-hvorange-200 lg:block"
                                />
                                <div className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200/70">
                                    <Image
                                        src={images[0].src}
                                        alt={images[0].alt}
                                        width={720}
                                        height={560}
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 45vw"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ================================================================ */}
            {/* WHY WE ARE HERE — warm tint section, image LEFT */}
            {/* ================================================================ */}
            <section className="bg-hvorange-50 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        {/* Image */}
                        {images[1] && (
                            <div className="relative order-2 lg:order-1">
                                <div
                                    aria-hidden="true"
                                    className="absolute -bottom-4 -left-4 hidden h-full w-full rounded-2xl border-2 border-hvorange-200 lg:block"
                                />
                                <div className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200/70">
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
                            <p className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                Why We&rsquo;re Here
                            </p>
                            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                                Guided by purpose, driven by love.
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1 w-16 rounded-full bg-hvorange-600"
                            />
                            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
                                {toParagraphs(whyWeAreHereBody).map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================ */}
            {/* PHOTO GALLERY — third image in a full-width editorial band */}
            {/* ================================================================ */}
            {images.length > 0 && (
                <section className="bg-white py-16 md:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto mb-10 max-w-2xl text-center">
                            <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                <LeafMark className="h-4 w-4 text-hvorange-600" />
                                Our Family
                            </p>
                            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                                Moments that matter
                            </h2>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    className="group overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200/70 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                                >
                                    <div className="relative aspect-4/3 overflow-hidden">
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition duration-300 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                    {img.alt && (
                                        <p className="px-4 py-3 text-sm leading-snug text-slate-600">
                                            {img.alt}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ================================================================ */}
            {/* BOARD MEMBERS — white, editorial card grid */}
            {/* ================================================================ */}
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            Leadership
                        </p>
                        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                            Board Members
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mx-auto mt-5 block h-1 w-16 rounded-full bg-hvorange-600"
                        />
                    </div>

                    <ul
                        role="list"
                        className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    >
                        {board.map((member) => (
                            <li key={member.name}>
                                <article className="group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200/70 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                                    <div className="overflow-hidden rounded-full ring-2 ring-hvorange-100 ring-offset-2 transition duration-200 group-hover:ring-hvorange-400">
                                        <img
                                            src={member.imageUrl}
                                            alt={member.name}
                                            width={80}
                                            height={80}
                                            loading="lazy"
                                            className="h-20 w-20 rounded-full object-cover"
                                        />
                                    </div>
                                    <h3 className="mt-4 font-serif text-base font-semibold tracking-tight text-hvblue">
                                        {member.name}
                                    </h3>
                                    <p className="mt-1 text-sm leading-snug text-slate-600">
                                        {member.role}
                                    </p>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================================================================ */}
            {/* STAFF MEMBERS — warm tint, grouped by category */}
            {/* ================================================================ */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            Our Team
                        </p>
                        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                            Staff Members
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mx-auto mt-5 block h-1 w-16 rounded-full bg-hvorange-600"
                        />
                    </div>

                    <div className="mt-12 space-y-14">
                        {Array.from(staffGroups.entries()).map(([category, members]) => (
                            <div key={category}>
                                <h3 className="mb-6 border-b border-slate-200 pb-3 font-serif text-xl font-semibold text-hvblue md:text-2xl">
                                    {category}
                                </h3>
                                <ul
                                    role="list"
                                    className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                                >
                                    {members.map((member) => (
                                        <li key={member.name}>
                                            <article className="group flex flex-col items-center rounded-2xl bg-hvorange-50 p-6 text-center transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
                                                <div className="overflow-hidden rounded-full ring-2 ring-hvorange-100 ring-offset-2 transition duration-200 group-hover:ring-hvorange-400">
                                                    <img
                                                        src={member.imageUrl}
                                                        alt={member.name}
                                                        width={72}
                                                        height={72}
                                                        loading="lazy"
                                                        className="h-[72px] w-[72px] rounded-full object-cover"
                                                    />
                                                </div>
                                                <h4 className="mt-4 font-serif text-base font-semibold tracking-tight text-hvblue">
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
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================ */}
            {/* MEMBERSHIP CTA — warm hvblue band */}
            {/* ================================================================ */}
            <section className="bg-howrange-50 bg-slate-50 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden rounded-3xl bg-hvblue px-6 py-14 text-center shadow-sm sm:px-12 md:py-20">
                        {/* Warm glows */}
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
                                Join our family
                            </p>
                            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
                                Become a member today
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mx-auto mt-5 block h-1 w-16 rounded-full bg-hvorange-500"
                            />
                            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/90 md:text-lg">
                                {toParagraphs(membershipCtaText).map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>

                            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Link
                                    href="/design-options/v2/membership"
                                    className="inline-flex items-center gap-2 rounded-full bg-hvorange-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                >
                                    <HeartIcon className="h-5 w-5" />
                                    Join Now
                                </Link>
                                {membershipFormUrl && (
                                    <a
                                        href={membershipFormUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3.5 text-base font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                    >
                                        Download Form
                                        <ArrowIcon className="h-4 w-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
