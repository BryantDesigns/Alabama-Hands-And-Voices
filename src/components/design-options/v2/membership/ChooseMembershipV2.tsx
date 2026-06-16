import Image from 'next/image'
import MockFormV2 from '@/components/design-options/v2/MockFormV2'
import type { getChooseMembershipPageContent } from '@/lib/keystatic/pages'

interface ChooseMembershipV2Props {
    choose: NonNullable<Awaited<ReturnType<typeof getChooseMembershipPageContent>>>
}

// ── Fixed tier titles (must match MembershipV2's TIER_LABELS) ────────────────

const TIER_LABELS = {
    parent: 'Parent, Student & DHH Adult',
    professional: 'Professional',
    organization: 'Organization',
} as const

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

// ── Input helpers ─────────────────────────────────────────────────────────────

const inputClass =
    'block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-hvblue placeholder:text-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2'

const labelClass = 'block text-sm font-medium text-hvblue'

interface LabeledFieldProps {
    id: string
    label: string
    required?: boolean
    children: React.ReactNode
    hint?: string
}

function LabeledField({ id, label, required, children, hint }: LabeledFieldProps) {
    return (
        <div>
            <label htmlFor={id} className={labelClass}>
                {label}
                {required && (
                    <span className="ml-1 text-red-700" aria-hidden="true">
                        *
                    </span>
                )}
                {required && <span className="sr-only"> (required)</span>}
            </label>
            <div className="mt-1.5">{children}</div>
            {hint && <p className="mt-1 text-sm text-slate-600">{hint}</p>}
        </div>
    )
}

// ── Membership level options ───────────────────────────────────────────────────

const LEVEL_OPTIONS = [
    { id: 'cm-v2-level-0', value: '0', label: '$0 — Request scholarship / fee waiver' },
    { id: 'cm-v2-level-25', value: '25', label: '$25 — Parent / DHH Adult / Student' },
    { id: 'cm-v2-level-40', value: '40', label: '$40 — Professional' },
    { id: 'cm-v2-level-50', value: '50', label: '$50 — Organization' },
    { id: 'cm-v2-level-donate', value: 'donate', label: 'Donate / other amount' },
] as const

// ── Component ─────────────────────────────────────────────────────────────────

export default function ChooseMembershipV2({ choose }: ChooseMembershipV2Props) {
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
            {/* HERO — warm gradient, serif h1, kaushan tagline */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-linear-to-b from-hvorange-50 via-hvorange-50/30 to-white">
                {/* Decorative atmosphere blobs */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-hvorange-100/70 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-12 h-72 w-72 rounded-full bg-hvblue/5 blur-3xl"
                />

                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        {/* Eyebrow */}
                        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            Membership Registration
                        </p>

                        {/* Serif display h1 */}
                        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-hvblue md:text-6xl">
                            Become a member
                        </h1>

                        {/* Kaushan emotional tagline */}
                        <p className="mt-5 font-kaushan text-2xl leading-snug text-hvorange-700 md:text-3xl">
                            <span className="sr-only">Join us: </span>
                            Your family belongs here.
                        </p>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
                            Choose the membership type that best describes you, then complete
                            the registration form below. All Alabama families are welcome —
                            scholarships are available.
                        </p>

                        {/* Scroll CTA */}
                        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <a
                                href="#membership-types"
                                className="inline-flex items-center gap-2 rounded-full bg-hvorange-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            >
                                See membership types
                                <ArrowIcon className="h-4 w-4" />
                            </a>
                            <a
                                href="/design-options/v2/membership"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-hvblue px-7 py-3 text-base font-semibold text-hvblue transition hover:bg-hvblue hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            >
                                Back to membership overview
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
            {/* MEMBERSHIP TYPES — three editorial photo cards */}
            {/* ============================================================ */}
            <section id="membership-types" className="bg-hvorange-50 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            Who can join
                        </p>
                        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                            Membership for every part of the community
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
                            Whether you&rsquo;re a parent, a professional, or an organization,
                            there&rsquo;s a membership that fits. Review the options, then
                            complete the form below.
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
                                        {/* Gradient overlay */}
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-0 bg-linear-to-t from-hvblue/60 via-hvblue/10 to-transparent"
                                        />
                                        {/* Index badge */}
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
            {/* REGISTRATION FORM — white background, warm editorial card */}
            {/* ============================================================ */}
            <section id="registration-form" className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            Registration
                        </p>
                        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                            Complete your membership registration
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1 w-14 rounded-full bg-hvorange-600"
                        />
                        <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
                            Fill out the form below to join Alabama Hands &amp; Voices.
                            Scholarships and fee waivers are available — just select the $0
                            option below.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 max-w-3xl">
                        <MockFormV2
                            successTitle="Thanks — this is a preview"
                            successBody="In the live site this would start your membership registration. No information was submitted."
                            submitLabel="Join Alabama Hands & Voices"
                        >
                            {/* ── Membership type ── */}
                            <fieldset className="space-y-4">
                                <legend className="border-b border-slate-200 pb-2 font-serif text-lg font-semibold text-hvblue">
                                    Choose Your Membership
                                </legend>
                                <p className="text-sm text-slate-600">
                                    Select all membership types that apply to you.
                                </p>

                                <ul role="list" className="space-y-2">
                                    {[
                                        {
                                            id: 'cm-v2-type-parent',
                                            label: 'Parent, Student, DHH Adult',
                                        },
                                        {
                                            id: 'cm-v2-type-professional',
                                            label: 'Professional',
                                        },
                                        {
                                            id: 'cm-v2-type-organization',
                                            label: 'Organization',
                                        },
                                        {
                                            id: 'cm-v2-type-other',
                                            label: 'Other',
                                        },
                                    ].map(({ id, label }) => (
                                        <li key={id}>
                                            <label
                                                htmlFor={id}
                                                className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-700 transition hover:bg-hvorange-50"
                                            >
                                                <input
                                                    id={id}
                                                    type="checkbox"
                                                    className="h-4 w-4 shrink-0 rounded border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                                />
                                                {label}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </fieldset>

                            {/* ── Contact information ── */}
                            <fieldset className="space-y-5">
                                <legend className="border-b border-slate-200 pb-2 font-serif text-lg font-semibold text-hvblue">
                                    Contact Information
                                </legend>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <LabeledField id="cm-v2-name" label="Parent / Guardian name" required>
                                        <input
                                            id="cm-v2-name"
                                            type="text"
                                            autoComplete="name"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>

                                    <LabeledField id="cm-v2-secondary-name" label="Secondary parent / guardian">
                                        <input
                                            id="cm-v2-secondary-name"
                                            type="text"
                                            autoComplete="off"
                                            className={inputClass}
                                        />
                                    </LabeledField>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <LabeledField id="cm-v2-phone" label="Phone number" required>
                                        <input
                                            id="cm-v2-phone"
                                            type="tel"
                                            autoComplete="tel"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>

                                    <LabeledField
                                        id="cm-v2-email"
                                        label="Email address"
                                        required
                                        hint="We'll never share your email with anyone else."
                                    >
                                        <input
                                            id="cm-v2-email"
                                            type="email"
                                            autoComplete="email"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>
                                </div>
                            </fieldset>

                            {/* ── Address ── */}
                            <fieldset className="space-y-5">
                                <legend className="border-b border-slate-200 pb-2 font-serif text-lg font-semibold text-hvblue">
                                    Address
                                </legend>

                                <LabeledField id="cm-v2-address" label="Home address" required>
                                    <input
                                        id="cm-v2-address"
                                        type="text"
                                        autoComplete="street-address"
                                        placeholder="1234 Main St"
                                        aria-required="true"
                                        className={inputClass}
                                    />
                                </LabeledField>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <LabeledField id="cm-v2-city" label="City" required>
                                        <input
                                            id="cm-v2-city"
                                            type="text"
                                            autoComplete="address-level2"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>

                                    <LabeledField id="cm-v2-zip" label="ZIP code" required>
                                        <input
                                            id="cm-v2-zip"
                                            type="text"
                                            autoComplete="postal-code"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>
                                </div>

                                <LabeledField id="cm-v2-school-district" label="School district / BOCES">
                                    <input
                                        id="cm-v2-school-district"
                                        type="text"
                                        autoComplete="off"
                                        placeholder="School District"
                                        className={inputClass}
                                    />
                                </LabeledField>
                            </fieldset>

                            {/* ── Children information ── */}
                            <fieldset className="space-y-4">
                                <legend className="border-b border-slate-200 pb-2 font-serif text-lg font-semibold text-hvblue">
                                    Children Information
                                </legend>

                                <LabeledField
                                    id="cm-v2-children"
                                    label="Children (deaf/HH & siblings, ages)"
                                    hint="List each child's name, whether they are deaf/hard of hearing, and their age."
                                >
                                    <textarea
                                        id="cm-v2-children"
                                        rows={4}
                                        className={`${inputClass} resize-y`}
                                    />
                                </LabeledField>
                            </fieldset>

                            {/* ── Membership level ── */}
                            <fieldset className="space-y-4">
                                <legend className="border-b border-slate-200 pb-2 font-serif text-lg font-semibold text-hvblue">
                                    Annual Membership Donation
                                </legend>
                                <p className="text-sm text-slate-600">
                                    Select one membership level. Scholarships and fee waivers are
                                    available — select $0 to request one.
                                </p>

                                <ul role="list" className="space-y-2">
                                    {LEVEL_OPTIONS.map(({ id, value, label }) => (
                                        <li key={id}>
                                            <label
                                                htmlFor={id}
                                                className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-700 transition hover:bg-hvorange-50"
                                            >
                                                <input
                                                    id={id}
                                                    type="radio"
                                                    name="membership-level"
                                                    value={value}
                                                    className="h-4 w-4 shrink-0 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                                />
                                                {label}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </fieldset>
                        </MockFormV2>
                    </div>
                </div>
            </section>
        </main>
    )
}
