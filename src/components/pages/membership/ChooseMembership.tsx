import Image from 'next/image'
import MembershipForm from '@/components/pages/membership/MembershipForm'
import type { getChooseMembershipPageContent } from '@/lib/keystatic/pages'
import { membershipTiers, PAYPAL_CGI_URL } from '@/lib/membership'

interface ChooseMembershipProps {
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



// ── Membership level options ───────────────────────────────────────────────────



// ── Component ─────────────────────────────────────────────────────────────────

export default function ChooseMembership({ choose }: ChooseMembershipProps) {
    const { membershipOptions } = choose

    const tiers = membershipTiers.map((tier) => ({
        ...tier,
        title: TIER_LABELS[tier.key],
        subtitle: membershipOptions[tier.key].subtitle,
        image: membershipOptions[tier.key].image,
    }))

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
                                href="#membership-tiers"
                                className="inline-flex min-h-[52px] items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-hvblue transition duration-150 hover:bg-hvorange-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                            >
                                See membership types
                                <ArrowIcon className="h-5 w-5" />
                            </a>
                            <a
                                href="/membership"
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
            <section id="membership-tiers" className="bg-slate-50 py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvorange-700">
                            Who can join
                        </p>
                        <h2
                            id="membership-tiers-heading"
                            tabIndex={-1}
                            className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-4 md:text-5xl"
                        >
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
                                        <p className="mt-5 text-2xl font-extrabold tracking-tight text-hvblue">
                                            ${tier.price}
                                        </p>
                                        <form
                                            action={PAYPAL_CGI_URL}
                                            method="post"
                                            target="_top"
                                            className="mt-4"
                                        >
                                            <input
                                                type="hidden"
                                                name="cmd"
                                                value="_s-xclick"
                                            />
                                            <input
                                                type="hidden"
                                                name="hosted_button_id"
                                                value={tier.paypalButtonId}
                                            />
                                            <button
                                                type="submit"
                                                className="inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-hvorange-700 px-6 py-3 text-base font-bold text-white transition duration-150 hover:bg-hvorange-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-2"
                                            >
                                                Pay with PayPal
                                                <ArrowIcon className="h-5 w-5" />
                                            </button>
                                        </form>
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
            <section id="membership-form" className="bg-white py-14 md:py-20">
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
                        <MembershipForm />
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* DONATION — full-bleed hvblue support block */}
            {/* ============================================================ */}
            <section
                id="donate"
                className="relative isolate overflow-hidden bg-hvblue py-14 text-white md:py-20"
            >
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rotate-12 rounded-[3rem] bg-hvorange/15"
                />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvorange-300">
                            Give today
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                            Support Our Mission
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />
                        <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-white/90 md:text-lg">
                            Your donation helps Alabama families of deaf and
                            hard-of-hearing children find support, information, and
                            connection when they need it most.
                        </p>
                        <form
                            action={PAYPAL_CGI_URL}
                            method="post"
                            target="_top"
                            className="mt-8"
                        >
                            <input type="hidden" name="cmd" value="_donations" />
                            <input
                                type="hidden"
                                name="business"
                                value="finance@alhandsandvoices.org"
                            />
                            <input type="hidden" name="lc" value="US" />
                            <input
                                type="hidden"
                                name="item_name"
                                value="Donation"
                            />
                            <input type="hidden" name="no_note" value="0" />
                            <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                            />
                            <button
                                type="submit"
                                className="inline-flex min-h-[52px] cursor-pointer items-center justify-center rounded-xl bg-hvorange-700 px-8 py-4 text-base font-bold text-white transition duration-150 hover:bg-hvorange-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                            >
                                Donate
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
