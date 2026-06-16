import Image from 'next/image'
import MockFormV3 from '@/components/design-options/v3/MockFormV3'
import type { getChooseMembershipPageContent } from '@/lib/keystatic/pages'

interface ChooseMembershipV3Props {
    choose: NonNullable<Awaited<ReturnType<typeof getChooseMembershipPageContent>>>
}

// ── Fixed tier titles (must match MembershipV2's TIER_LABELS) ────────────────

const TIER_LABELS = {
    parent: 'Parent, Student & DHH Adult',
    professional: 'Professional',
    organization: 'Organization',
} as const

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

// ── Input helpers ─────────────────────────────────────────────────────────────

const inputClass =
    'block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2'

const labelClass = 'block text-xs font-bold uppercase tracking-widest text-hvblue'

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
            {hint && <p className="mt-1.5 text-sm text-slate-600">{hint}</p>}
        </div>
    )
}

// ── Membership level options ───────────────────────────────────────────────────

const LEVEL_OPTIONS = [
    { id: 'cm-v3-level-0', value: '0', label: '$0 — Request scholarship / fee waiver' },
    { id: 'cm-v3-level-25', value: '25', label: '$25 — Parent / DHH Adult / Student' },
    { id: 'cm-v3-level-40', value: '40', label: '$40 — Professional' },
    { id: 'cm-v3-level-50', value: '50', label: '$50 — Organization' },
    { id: 'cm-v3-level-donate', value: 'donate', label: 'Donate / other amount' },
] as const

// ── Component ─────────────────────────────────────────────────────────────────

export default function ChooseMembershipV3({ choose }: ChooseMembershipV3Props) {
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
            {/* HERO — full-bleed hvblue color block, bold extrabold h1 */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-hvblue py-14 text-white md:py-20">
                {/* Decorative geometric shapes */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rotate-12 rounded-[3rem] bg-hvorange/10"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/5"
                />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        {/* Eyebrow */}
                        <p className="text-sm font-bold uppercase tracking-widest text-hvorange-300">
                            Membership Registration
                        </p>

                        {/* Bold display h1 */}
                        <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
                            Become a member.
                        </h1>

                        <span
                            aria-hidden="true"
                            className="mt-6 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />

                        <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-white/90 md:text-lg">
                            Choose the membership type that fits you, then complete the
                            registration form below. Scholarships and fee waivers are
                            available for every family.
                        </p>

                        {/* CTAs */}
                        <div className="mt-9 flex flex-wrap items-center gap-4">
                            <a
                                href="#membership-types"
                                className="inline-flex min-h-[52px] items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-hvblue transition duration-150 hover:bg-hvorange-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                            >
                                See membership types
                                <ArrowIcon className="h-5 w-5" />
                            </a>
                            <a
                                href="/design-options/v3/membership"
                                className="inline-flex min-h-[52px] items-center gap-2 rounded-xl border-2 border-white/60 px-8 py-4 text-base font-bold text-white transition duration-150 hover:border-white hover:bg-white/10 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                            >
                                Back to membership overview
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* MEMBERSHIP TYPES — bento-style option cards */}
            {/* ============================================================ */}
            <section id="membership-types" className="bg-slate-50 py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvorange-700">
                            Who can join
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                            Membership for every part of the community.
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />
                        <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-slate-700 md:text-lg">
                            Whether you&rsquo;re a parent, a professional, or an organization,
                            there&rsquo;s a membership level that fits. Review the options below.
                        </p>
                    </div>

                    {/* Bento tier cards */}
                    <ul
                        role="list"
                        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {tiers.map((tier, i) => (
                            <li key={tier.key}>
                                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
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
                                        {/* Number badge — bold v3 style */}
                                        <span
                                            aria-hidden="true"
                                            className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-hvblue text-sm font-extrabold text-white shadow-md"
                                        >
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Card body */}
                                    <div className="flex flex-1 flex-col p-6 md:p-8">
                                        <p className="text-xs font-bold uppercase tracking-widest text-hvorange-700">
                                            Membership type
                                        </p>
                                        <h3 className="mt-2 text-xl font-bold tracking-tight text-hvblue md:text-2xl">
                                            {tier.title}
                                        </h3>
                                        <span
                                            aria-hidden="true"
                                            className="mt-3 block h-1 w-10 rounded-full bg-hvorange-600"
                                        />
                                        <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                                            {tier.subtitle}
                                        </p>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>

                    {/* Orange info callout */}
                    <div className="mt-10 flex items-start gap-4 rounded-3xl bg-hvorange p-6 md:p-8">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-hvblue">
                            <CheckIcon className="h-5 w-5 text-white" />
                        </span>
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                                Scholarships available
                            </p>
                            <p className="mt-1 text-base font-medium leading-relaxed text-hvblue/90">
                                No family should be left behind due to cost. Select the{' '}
                                <strong>$0 — Request scholarship / fee waiver</strong> option
                                in the form below and we will work with you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* REGISTRATION FORM — white band, bold form card */}
            {/* ============================================================ */}
            <section id="registration-form" className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvorange-700">
                            Registration
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                            Complete your membership registration.
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />
                        <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-slate-700 md:text-lg">
                            Fill out the form below to join Alabama Hands &amp; Voices.
                            All fields marked with{' '}
                            <span aria-hidden="true" className="font-bold text-red-700">
                                *
                            </span>{' '}
                            <span className="sr-only">an asterisk</span> are required.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 max-w-3xl">
                        <MockFormV3
                            successTitle="Thanks — this is a preview"
                            successBody="In the live site this would start your membership registration. No information was submitted."
                            submitLabel="Join Alabama Hands & Voices"
                        >
                            {/* ── Membership type ── */}
                            <fieldset className="space-y-4">
                                <legend className="w-full border-b-2 border-slate-200 pb-2 text-sm font-bold uppercase tracking-widest text-hvblue">
                                    Choose Your Membership
                                </legend>
                                <p className="text-sm font-medium text-slate-600">
                                    Select all membership types that apply to you.
                                </p>

                                <ul role="list" className="space-y-1">
                                    {[
                                        {
                                            id: 'cm-v3-type-parent',
                                            label: 'Parent, Student, DHH Adult',
                                        },
                                        {
                                            id: 'cm-v3-type-professional',
                                            label: 'Professional',
                                        },
                                        {
                                            id: 'cm-v3-type-organization',
                                            label: 'Organization',
                                        },
                                        {
                                            id: 'cm-v3-type-other',
                                            label: 'Other',
                                        },
                                    ].map(({ id, label }) => (
                                        <li key={id}>
                                            <label
                                                htmlFor={id}
                                                className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                                            >
                                                <input
                                                    id={id}
                                                    type="checkbox"
                                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                                />
                                                {label}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </fieldset>

                            {/* ── Contact information ── */}
                            <fieldset className="space-y-4">
                                <legend className="w-full border-b-2 border-slate-200 pb-2 text-sm font-bold uppercase tracking-widest text-hvblue">
                                    Contact Information
                                </legend>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <LabeledField id="cm-v3-name" label="Parent / Guardian name" required>
                                        <input
                                            id="cm-v3-name"
                                            type="text"
                                            autoComplete="name"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>

                                    <LabeledField id="cm-v3-secondary-name" label="Secondary parent / guardian">
                                        <input
                                            id="cm-v3-secondary-name"
                                            type="text"
                                            autoComplete="off"
                                            className={inputClass}
                                        />
                                    </LabeledField>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <LabeledField id="cm-v3-phone" label="Phone number" required>
                                        <input
                                            id="cm-v3-phone"
                                            type="tel"
                                            autoComplete="tel"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>

                                    <LabeledField
                                        id="cm-v3-email"
                                        label="Email address"
                                        required
                                        hint="We'll never share your email with anyone else."
                                    >
                                        <input
                                            id="cm-v3-email"
                                            type="email"
                                            autoComplete="email"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>
                                </div>
                            </fieldset>

                            {/* ── Address ── */}
                            <fieldset className="space-y-4">
                                <legend className="w-full border-b-2 border-slate-200 pb-2 text-sm font-bold uppercase tracking-widest text-hvblue">
                                    Address
                                </legend>

                                <LabeledField id="cm-v3-address" label="Home address" required>
                                    <input
                                        id="cm-v3-address"
                                        type="text"
                                        autoComplete="street-address"
                                        placeholder="1234 Main St"
                                        aria-required="true"
                                        className={inputClass}
                                    />
                                </LabeledField>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <LabeledField id="cm-v3-city" label="City" required>
                                        <input
                                            id="cm-v3-city"
                                            type="text"
                                            autoComplete="address-level2"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>

                                    <LabeledField id="cm-v3-zip" label="ZIP code" required>
                                        <input
                                            id="cm-v3-zip"
                                            type="text"
                                            autoComplete="postal-code"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>
                                </div>

                                <LabeledField id="cm-v3-school-district" label="School district / BOCES">
                                    <input
                                        id="cm-v3-school-district"
                                        type="text"
                                        autoComplete="off"
                                        placeholder="School District"
                                        className={inputClass}
                                    />
                                </LabeledField>
                            </fieldset>

                            {/* ── Children information ── */}
                            <fieldset className="space-y-4">
                                <legend className="w-full border-b-2 border-slate-200 pb-2 text-sm font-bold uppercase tracking-widest text-hvblue">
                                    Children Information
                                </legend>

                                <LabeledField
                                    id="cm-v3-children"
                                    label="Children (deaf/HH & siblings, ages)"
                                    hint="List each child's name, whether they are deaf/hard of hearing, and their age."
                                >
                                    <textarea
                                        id="cm-v3-children"
                                        rows={4}
                                        className={`${inputClass} resize-y`}
                                    />
                                </LabeledField>
                            </fieldset>

                            {/* ── Membership level ── */}
                            <fieldset className="space-y-4">
                                <legend className="w-full border-b-2 border-slate-200 pb-2 text-sm font-bold uppercase tracking-widest text-hvblue">
                                    Annual Membership Donation
                                </legend>
                                <p className="text-sm font-medium text-slate-600">
                                    Select one membership level. Scholarships are available — select
                                    $0 to request one.
                                </p>

                                <ul role="list" className="space-y-1">
                                    {LEVEL_OPTIONS.map(({ id, value, label }) => (
                                        <li key={id}>
                                            <label
                                                htmlFor={id}
                                                className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                                            >
                                                <input
                                                    id={id}
                                                    type="radio"
                                                    name="membership-level"
                                                    value={value}
                                                    className="h-4 w-4 shrink-0 border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                                />
                                                {label}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </fieldset>
                        </MockFormV3>
                    </div>
                </div>
            </section>
        </main>
    )
}
