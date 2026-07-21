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

interface MembershipProps {
    membership: MembershipData
    choose: ChooseData
}

// ── Inline SVG icons ──────────────────────────────────────────────────────────

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

function DownloadIcon({ className = '' }: { className?: string }) {
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
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
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

function CheckIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    )
}

function InfoIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
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

const TIER_PRICES = {
    parent: '$25/year',
    professional: '$40/year',
    organization: '$50/year',
} as const

// Benefits listed on tier cards
const TIER_BENEFITS = {
    parent: [
        'Community events & retreats',
        'Family resource network',
        'Advocacy & navigation support',
    ],
    professional: [
        'Professional development resources',
        'Collaboration with families',
        'DHH best-practices updates',
    ],
    organization: [
        'Organizational recognition',
        'Network partnerships',
        'Impact reporting & visibility',
    ],
} as const

export default function Membership({ membership, choose }: MembershipProps) {
    const { heroHeading, heroText, documentDownloadUrl, scholarshipNote } =
        membership
    const { membershipOptions } = choose

    const tiers = [
        {
            key: 'parent' as const,
            title: TIER_LABELS.parent,
            subtitle: membershipOptions.parent.subtitle,
            image: membershipOptions.parent.image,
            benefits: TIER_BENEFITS.parent,
        },
        {
            key: 'professional' as const,
            title: TIER_LABELS.professional,
            subtitle: membershipOptions.professional.subtitle,
            image: membershipOptions.professional.image,
            benefits: TIER_BENEFITS.professional,
        },
        {
            key: 'organization' as const,
            title: TIER_LABELS.organization,
            subtitle: membershipOptions.organization.subtitle,
            image: membershipOptions.organization.image,
            benefits: TIER_BENEFITS.organization,
        },
    ]

    return (
        <main className="bg-white text-hvblue">
            {/* ============================================================ */}
            {/* HERO — full-bleed hvblue block, extrabold headline, 2 CTAs */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-hvblue text-white">
                {/* Geometric accent shapes */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-[28rem] w-[28rem] rotate-12 rounded-[3rem] bg-hvorange/15"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-hvblue-50/15 blur-3xl"
                />
                {/* Left-edge bar — structural brand signature */}
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-hvorange-700"
                />

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
                    {/* Eyebrow chip */}
                    <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-hvorange-50 ring-1 ring-white/20">
                        <span
                            aria-hidden="true"
                            className="h-2 w-2 rounded-sm bg-hvorange-700"
                        />
                        Membership
                    </p>

                    <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                        <div>
                            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
                                {heroHeading}
                            </h1>
                            <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-white/90 md:text-xl">
                                {heroText}
                            </p>
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                                <a
                                    href={documentDownloadUrl}
                                    download
                                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-hvorange-700 px-7 py-3.5 text-base font-bold text-white transition duration-150 hover:bg-hvorange-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                >
                                    <DownloadIcon className="h-5 w-5" />
                                    Download Membership Form
                                </a>
                                <a
                                    href="/membership/choose-membership"
                                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-white/70 px-7 py-3.5 text-base font-bold text-white transition duration-150 hover:bg-white hover:text-hvblue focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                >
                                    Join &amp; Pay Online
                                    <ArrowIcon className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        {/* Bento stat panel — geometric, on the right */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 rounded-3xl bg-hvorange p-6 text-hvblue">
                                <p className="text-4xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                    3
                                </p>
                                <p className="mt-1 text-sm font-bold text-hvblue/90">
                                    membership categories for families,
                                    professionals &amp; orgs
                                </p>
                            </div>
                            <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/20">
                                <p className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                                    100%
                                </p>
                                <p className="mt-1 text-xs font-bold text-white/80">
                                    family-driven organization
                                </p>
                            </div>
                            <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/20">
                                <p className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                                    Free
                                </p>
                                <p className="mt-1 text-xs font-bold text-white/80">
                                    scholarships available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* WHY JOIN — white section, bold split layout */}
            {/* ============================================================ */}
            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-hvorange-700">
                                Why join us
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                A community built on bold support
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-700"
                            />
                            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 md:text-lg">
                                <p>
                                    Alabama Hands &amp; Voices membership
                                    connects you to a statewide network of
                                    families, professionals, and advocates
                                    committed to deaf and hard-of-hearing
                                    children — and to the programs that serve
                                    them.
                                </p>
                                <p>
                                    Your membership fuels real impact: retreats,
                                    resources, and outreach that reach families
                                    across all of Alabama.
                                </p>
                            </div>
                        </div>

                        {/* Photo with geometric block behind */}
                        <div className="relative">
                            <div
                                aria-hidden="true"
                                className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-3xl bg-hvblue lg:block"
                            />
                            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
                                <Image
                                    src="/images/aboutUsWhoWeAreFamily.jpg"
                                    alt="Families together at an Alabama Hands & Voices event"
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
            {/* MEMBERSHIP TIERS — full-bleed hvblue, bento card grid */}
            {/* ============================================================ */}
            <section
                id="membership-tiers"
                className="relative isolate overflow-hidden bg-hvblue py-14 text-white md:py-20"
            >
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rotate-12 rounded-[3rem] bg-hvorange/10"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-hvorange-700"
                />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvorange-50">
                            Choose your membership
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                            Three ways to join the mission
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-700"
                        />
                    </div>

                    {/* Bento card grid — 3 varied cards */}
                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {tiers.map((tier, i) => (
                            <article
                                key={tier.key}
                                className="group flex flex-col overflow-hidden rounded-3xl bg-white text-hvblue shadow-xl ring-1 ring-white/10 transition duration-200 hover:-translate-y-1 hover:shadow-2xl"
                            >
                                {/* Photo top */}
                                <div className="relative aspect-3/2 overflow-hidden">
                                    <Image
                                        src={tier.image}
                                        alt={`${tier.title} — ${tier.subtitle}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition duration-300 group-hover:scale-105"
                                        priority={i === 0}
                                    />
                                    {/* Geometric numbered badge */}
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-hvblue text-base font-extrabold text-white shadow-lg"
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    {/* Bottom gradient */}
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 bg-linear-to-t from-hvblue/40 via-transparent to-transparent"
                                    />
                                </div>

                                {/* Card body */}
                                <div className="flex flex-1 flex-col p-6 md:p-7">
                                    <p className="text-xs font-bold uppercase tracking-widest text-hvorange-700">
                                        For
                                    </p>
                                    <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-hvblue md:text-2xl">
                                        {tier.title}
                                    </h3>
                                    <p className="mt-2 text-sm font-medium text-slate-600">
                                        {tier.subtitle}
                                    </p>
                                    <p className="mt-4 text-3xl font-extrabold tracking-tight text-hvblue">
                                        {TIER_PRICES[tier.key]}
                                    </p>

                                    <span
                                        aria-hidden="true"
                                        className="my-4 block h-px bg-slate-100"
                                    />

                                    {/* Benefits list */}
                                    <ul className="space-y-2">
                                        {tier.benefits.map((benefit) => (
                                            <li
                                                key={benefit}
                                                className="flex items-start gap-2 text-sm text-slate-700"
                                            >
                                                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-hvorange-700" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* DOWNLOAD — full-bleed orange block, hvblue text */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-hvorange py-14 text-hvblue md:py-20">
                {/* Geometric accent */}
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
                                <DownloadIcon className="h-5 w-5" />
                                Ready to join?
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                Download the membership form
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvblue"
                            />
                            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-hvblue/90 md:text-lg">
                                Print or complete digitally — then send it in.
                                We&apos;ll welcome you to the community
                                personally.
                            </p>
                        </div>

                        {/* CTA button block */}
                        <div className="lg:justify-self-end">
                            <a
                                href={documentDownloadUrl}
                                download
                                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-hvblue px-8 py-4 text-base font-bold text-white transition duration-150 hover:bg-hvblue-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvblue focus-visible:ring-offset-2 focus-visible:ring-offset-hvorange md:text-lg lg:w-auto"
                            >
                                <DownloadIcon className="h-5 w-5" />
                                Download Membership Form
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* SCHOLARSHIP — white section, info callout card */}
            {/* ============================================================ */}
            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                        {/* Scholarship card */}
                        <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200 md:p-10">
                            <div className="flex items-start gap-3">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-hvblue text-white">
                                    <InfoIcon className="h-6 w-6" />
                                </span>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-hvorange-700">
                                        Scholarships available
                                    </p>
                                    <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-hvblue md:text-3xl">
                                        No family turned away
                                    </h2>
                                </div>
                            </div>
                            <span
                                aria-hidden="true"
                                className="my-5 block h-px bg-slate-200"
                            />
                            <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                                {scholarshipNote}
                            </p>
                            <a
                                href="/membership/choose-membership#membership-form"
                                className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-xl border-2 border-hvblue px-6 py-3 text-base font-bold text-hvblue transition duration-150 hover:bg-hvblue hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            >
                                Contact us about scholarships
                                <ArrowIcon className="h-4 w-4" />
                            </a>
                        </div>

                        {/* Reinforcement copy */}
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-hvorange-700">
                                Every family welcome
                            </p>
                            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-hvblue md:text-3xl">
                                Cost should never be a barrier
                            </h3>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-700"
                            />
                            <p className="mt-6 text-base leading-relaxed text-slate-700 md:text-lg">
                                Our mission is to make sure no family walks the
                                journey alone — regardless of financial
                                circumstances. If cost is a concern, reach out.
                                We&apos;re here to find a path forward together.
                            </p>
                        </div>
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
                    className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-hvorange-700/15 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-hvorange-700"
                />

                <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                        Ready to join the{' '}
                        <span className="text-hvorange">community?</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/90">
                        Download the membership form, fill it out, and become
                        part of a statewide movement dedicated to Alabama
                        families of deaf and hard-of-hearing children.
                    </p>
                    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href={documentDownloadUrl}
                            download
                            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-hvorange-700 px-8 py-4 text-base font-bold text-white transition duration-150 hover:bg-hvorange-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                        >
                            <HeartIcon className="h-5 w-5" />
                            Join now — download the form
                        </a>
                        <a
                            href="/membership/choose-membership#membership-form"
                            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-hvblue transition duration-150 hover:bg-hvorange-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                        >
                            Questions? Contact us
                            <ArrowIcon className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
