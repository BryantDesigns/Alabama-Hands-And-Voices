import Image from 'next/image'
import type {
    getMembershipPageContent,
    getChooseMembershipPageContent,
} from '@/lib/keystatic/pages'

type MembershipData = NonNullable<
    Awaited<ReturnType<typeof getMembershipPageContent>>
>
type ChooseData = NonNullable<
    Awaited<ReturnType<typeof getChooseMembershipPageContent>>
>

interface MembershipV2Props {
    membership: MembershipData
    choose: ChooseData
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

function DownloadIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={className}
        >
            <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
            <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
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

function InfoIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                clipRule="evenodd"
            />
        </svg>
    )
}

// ── Tier data (fixed titles not in CMS) ──────────────────────────────────────

const TIER_LABELS = {
    parent: 'Parent, Student & DHH Adult',
    professional: 'Professional',
    organization: 'Organization',
} as const

export default function MembershipV2({ membership, choose }: MembershipV2Props) {
    const { heroText, documentDownloadUrl, scholarshipNote } = membership
    const { membershipOptions } = choose

    const tiers = [
        {
            key: 'parent' as const,
            title: TIER_LABELS.parent,
            subtitle: membershipOptions.parent.subtitle,
            image: membershipOptions.parent.image,
        },
        {
            key: 'professional' as const,
            title: TIER_LABELS.professional,
            subtitle: membershipOptions.professional.subtitle,
            image: membershipOptions.professional.image,
        },
        {
            key: 'organization' as const,
            title: TIER_LABELS.organization,
            subtitle: membershipOptions.organization.subtitle,
            image: membershipOptions.organization.image,
        },
    ]

    return (
        <main className="bg-white text-hvblue">
            {/* ============================================================ */}
            {/* HERO — warm editorial gradient, serif headline, kaushan tagline */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-linear-to-b from-hvorange-50 via-white to-white">
                {/* Decorative atmosphere blobs */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-hvorange-100/70 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-hvblue/5 blur-3xl"
                />

                <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 md:pb-20 md:pt-20 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        {/* Eyebrow */}
                        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            Membership
                        </p>

                        {/* Serif display h1 */}
                        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-hvblue md:text-6xl">
                            Become part of
                            <br className="hidden sm:block" /> our community
                        </h1>

                        {/* Kaushan emotional tagline */}
                        <p className="mt-5 font-kaushan text-2xl leading-snug text-hvorange-700 md:text-3xl">
                            <span className="sr-only">Together we are stronger: </span>
                            Together, we are stronger.
                        </p>

                        {/* Hero prose from CMS */}
                        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
                            {heroText}
                        </p>

                        {/* Primary CTA — scroll to membership form */}
                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <a
                                href={documentDownloadUrl}
                                download
                                className="inline-flex items-center gap-2 rounded-full bg-hvorange-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            >
                                <DownloadIcon className="h-5 w-5" />
                                Download Membership Form
                            </a>
                            <a
                                href="#membership-tiers"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-hvblue px-7 py-3 text-base font-semibold text-hvblue transition hover:bg-hvblue hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            >
                                See membership types
                                <ArrowIcon className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="h-px w-full bg-linear-to-r from-transparent via-hvorange-200 to-transparent"
                />
            </section>

            {/* ============================================================ */}
            {/* WHY JOIN — warm tint, editorial intro */}
            {/* ============================================================ */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        {/* Copy */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                Why join us
                            </p>
                            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                                A community that walks beside you
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1 w-16 rounded-full bg-hvorange-600"
                            />
                            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
                                <p>
                                    Alabama Hands &amp; Voices membership connects families, professionals,
                                    and advocates around a shared commitment — ensuring every child who is
                                    deaf or hard of hearing has the full support they deserve.
                                </p>
                                <p>
                                    When you join, you gain access to resources, events, and a network of
                                    people who truly understand the journey. You also help sustain the
                                    programs that make a real difference for Alabama families.
                                </p>
                            </div>
                        </div>

                        {/* Photo card with accent frame */}
                        <div className="relative">
                            <div
                                aria-hidden="true"
                                className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl border-2 border-hvorange-200 lg:block"
                            />
                            <div className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200/70">
                                <Image
                                    src="/images/aboutUsWhoWeAreFamily.jpg"
                                    alt="A family laughing together at an Alabama Hands & Voices gathering"
                                    width={720}
                                    height={520}
                                    sizes="(max-width: 1024px) 100vw, 45vw"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* MEMBERSHIP TIERS — warm tint bg, three editorial photo cards */}
            {/* ============================================================ */}
            <section
                id="membership-tiers"
                className="bg-hvorange-50 py-16 md:py-24"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            Choose your membership
                        </p>
                        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                            Membership for everyone in the community
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
                            We have a membership type for every person who cares about deaf and
                            hard-of-hearing children in Alabama.
                        </p>
                    </div>

                    {/* Three tier cards */}
                    <ul
                        role="list"
                        className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {tiers.map((tier, i) => (
                            <li key={tier.key}>
                                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                                    {/* Photo */}
                                    <div className="relative aspect-4/3 overflow-hidden">
                                        <Image
                                            src={tier.image}
                                            alt={`${tier.title} membership — ${tier.subtitle}`}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition duration-300 group-hover:scale-[1.02]"
                                            priority={i === 0}
                                        />
                                        {/* Soft gradient overlay for text legibility */}
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-0 bg-linear-to-t from-hvblue/60 via-hvblue/10 to-transparent"
                                        />
                                        {/* Index number badge */}
                                        <span
                                            aria-hidden="true"
                                            className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 font-serif text-sm font-bold text-hvblue shadow-sm"
                                        >
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Card body */}
                                    <div className="flex flex-1 flex-col p-6">
                                        <p className="text-xs font-semibold uppercase tracking-wide text-hvorange-700">
                                            Membership type
                                        </p>
                                        <h3 className="mt-2 font-serif text-xl font-bold tracking-tight text-hvblue md:text-2xl">
                                            {tier.title}
                                        </h3>
                                        <span
                                            aria-hidden="true"
                                            className="mt-3 block h-px w-10 bg-hvorange-300"
                                        />
                                        <p className="mt-3 text-base leading-relaxed text-slate-600">
                                            {tier.subtitle}
                                        </p>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ============================================================ */}
            {/* DOWNLOAD & SCHOLARSHIP — white bg, two-column editorial layout */}
            {/* ============================================================ */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                        {/* Download block */}
                        <div className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200/70">
                            <p className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                Ready to join?
                            </p>
                            <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-hvblue md:text-3xl">
                                Download the membership form
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-4 block h-1 w-12 rounded-full bg-hvorange-600"
                            />
                            <p className="mt-5 text-base leading-relaxed text-slate-700">
                                Print or complete the form digitally, then mail or email it to us.
                                We&apos;ll be in touch to welcome you to the community.
                            </p>
                            <a
                                href={documentDownloadUrl}
                                download
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-hvorange-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            >
                                <DownloadIcon className="h-5 w-5" />
                                Download Membership Form
                            </a>
                        </div>

                        {/* Scholarship callout */}
                        <div className="relative rounded-2xl bg-hvorange-50 p-8 ring-1 ring-hvorange-200/60">
                            {/* Decorative leaf in corner */}
                            <LeafMark
                                aria-hidden="true"
                                className="pointer-events-none absolute right-6 top-6 h-16 w-16 text-hvorange-200/80"
                            />
                            <div className="flex items-start gap-3">
                                <InfoIcon className="mt-0.5 h-6 w-6 shrink-0 text-hvorange-700" />
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                        Scholarships available
                                    </p>
                                    <h3 className="mt-2 font-serif text-xl font-bold text-hvblue md:text-2xl">
                                        No family left behind
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-5 text-base leading-relaxed text-slate-700">
                                {scholarshipNote}
                            </p>
                            <a
                                href="mailto:info@alhandsandvoices.org"
                                className="mt-6 inline-flex items-center gap-2 font-semibold text-hvorange-700 underline-offset-4 transition hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            >
                                Contact us about scholarships
                                <ArrowIcon className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* CLOSING JOIN CTA — warm hvblue band, kaushan accent */}
            {/* ============================================================ */}
            <section className="bg-hvblue py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden rounded-3xl bg-hvblue px-6 py-14 text-center sm:px-12 md:py-20">
                        {/* Decorative warm glow orbs */}
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
                                Your voice matters here
                            </p>
                            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
                                Join Alabama Hands &amp; Voices today
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mx-auto mt-5 block h-1 w-16 rounded-full bg-hvorange-500"
                            />
                            <p className="mt-6 text-base leading-relaxed text-white/90 md:text-lg">
                                When families stand together, deaf and hard-of-hearing children
                                thrive. Be part of the community that makes it possible.
                            </p>

                            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                                <a
                                    href={documentDownloadUrl}
                                    download
                                    className="inline-flex items-center gap-2 rounded-full bg-hvorange-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                >
                                    <HeartIcon className="h-5 w-5" />
                                    Join now — download the form
                                </a>
                                <a
                                    href="mailto:info@alhandsandvoices.org"
                                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                >
                                    Questions? Contact us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
