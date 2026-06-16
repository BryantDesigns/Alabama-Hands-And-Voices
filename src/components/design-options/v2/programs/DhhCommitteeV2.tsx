import MockFormV2 from '@/components/design-options/v2/MockFormV2'
import type { getDhhCommitteePageContent } from '@/lib/keystatic/pages'

interface DhhCommitteeV2Props {
    dhh: NonNullable<Awaited<ReturnType<typeof getDhhCommitteePageContent>>>
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function toParagraphs(text: string): string[] {
    return text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
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

function CheckCircleIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                clipRule="evenodd"
            />
        </svg>
    )
}

function PlayIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
            />
        </svg>
    )
}

function HandshakeIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
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

// ── Placeholder video cards ───────────────────────────────────────────────────

const ROLE_MODEL_PLACEHOLDERS = [
    { caption: 'Sarah M. — ASL advocate & educator', initials: 'SM', bg: 'bg-hvblue' },
    { caption: 'James T. — Cochlear implant user & mentor', initials: 'JT', bg: 'bg-hvorange-100' },
    { caption: 'Priya R. — Cued Speech champion', initials: 'PR', bg: 'bg-slate-200' },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function DhhCommitteeV2({ dhh }: DhhCommitteeV2Props) {
    const { description, benefits, videoSectionHeading } = dhh

    const paragraphs = description ? toParagraphs(description) : []

    return (
        <main className="bg-white text-hvblue">
            {/* ================================================================ */}
            {/* HERO — warm gradient, serif h1, description paragraphs */}
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

                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        {/* Icon badge */}
                        <div className="mb-8 flex justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70">
                                <HandshakeIcon className="h-8 w-8 text-hvorange-700" />
                            </div>
                        </div>

                        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            Alabama Hands &amp; Voices Program
                        </p>

                        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-hvblue md:text-6xl">
                            D/HH Committee
                        </h1>

                        <p className="mt-4 font-kaushan text-xl leading-snug text-hvorange-700 md:text-2xl">
                            <span className="sr-only">Our mission: </span>
                            Deaf &amp; Hard of Hearing Role Models &amp; Mentors
                        </p>

                        {paragraphs.length > 0 && (
                            <div className="mx-auto mt-7 max-w-2xl space-y-4 text-base leading-relaxed text-slate-700 md:text-lg">
                                {paragraphs.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="h-px w-full bg-linear-to-r from-transparent via-hvorange-200 to-transparent"
                />
            </section>

            {/* ================================================================ */}
            {/* WHAT COMMITTEE MEMBERS DO — benefits list */}
            {/* ================================================================ */}
            {benefits && benefits.length > 0 && (
                <section className="bg-white py-16 md:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl">
                            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                <LeafMark className="h-4 w-4 text-hvorange-600" />
                                Making a difference
                            </p>
                            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                                What committee members do
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1 w-14 rounded-full bg-hvorange-600"
                            />
                            <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
                                D/HH Committee Members bring lived experience, guidance, and
                                community to families navigating hearing loss. Here is how they
                                make a lasting impact.
                            </p>

                            <ul
                                role="list"
                                className="mt-8 space-y-4"
                                aria-label="What D/HH Committee members do"
                            >
                                {benefits.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-4 rounded-2xl bg-hvorange-50 p-5"
                                    >
                                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
                                            <CheckCircleIcon className="h-4 w-4 text-hvorange-700" />
                                        </span>
                                        <span className="text-base leading-relaxed text-slate-700">
                                            {item.benefit}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            {/* ================================================================ */}
            {/* MEET OUR ROLE MODELS — placeholder video cards */}
            {/* ================================================================ */}
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            Inspiring stories
                        </p>
                        {videoSectionHeading && (
                            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                                {videoSectionHeading}
                            </h2>
                        )}
                        <span
                            aria-hidden="true"
                            className="mx-auto mt-5 block h-1 w-14 rounded-full bg-hvorange-600"
                        />
                        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
                            Hear from D/HH adults who give back to the community that supported
                            them. Their stories inspire families and children across Alabama.
                        </p>
                    </div>

                    <ul
                        role="list"
                        aria-label="Role model video placeholders"
                        className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {ROLE_MODEL_PLACEHOLDERS.map((card, i) => (
                            <li
                                key={i}
                                className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                            >
                                {/* Thumbnail placeholder */}
                                <div
                                    className={`relative flex aspect-video items-center justify-center rounded-t-2xl ${card.bg}`}
                                    aria-hidden="true"
                                >
                                    {/* Avatar initials */}
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-sm">
                                        <span className="font-serif text-lg font-bold text-hvblue">
                                            {card.initials}
                                        </span>
                                    </div>
                                    {/* Play icon overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm">
                                            <PlayIcon className="h-5 w-5 translate-x-0.5 text-hvblue" />
                                        </div>
                                    </div>
                                    {/* "Video placeholder" badge */}
                                    <span className="absolute bottom-2 right-2 rounded-full bg-hvblue/70 px-2 py-0.5 text-xs font-medium text-white">
                                        Video
                                    </span>
                                </div>
                                {/* Caption */}
                                <div className="p-4">
                                    <p className="text-sm font-semibold leading-snug text-hvblue">
                                        {card.caption}
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500">D/HH Committee Member</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================================================================ */}
            {/* D/HH REFERRAL FORM — warm card on white */}
            {/* ================================================================ */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            Connect with us
                        </p>
                        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                            Connect with a D/HH Committee member
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1 w-14 rounded-full bg-hvorange-600"
                        />
                        <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
                            Fill out the form below and a D/HH Committee member will reach out
                            to connect with your family. All information is kept confidential.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 max-w-3xl">
                        <MockFormV2
                            successTitle="Thanks — this is a preview"
                            successBody="In the live site this would connect you with a D/HH Committee member. No information was submitted."
                            submitLabel="Connect with a committee member"
                        >
                            {/* ── Your information ── */}
                            <fieldset className="space-y-5">
                                <legend className="border-b border-slate-200 pb-2 font-serif text-lg font-semibold text-hvblue">
                                    Your Information
                                </legend>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <LabeledField id="dhh-v2-name" label="Your name" required>
                                        <input
                                            id="dhh-v2-name"
                                            type="text"
                                            autoComplete="name"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>

                                    <LabeledField id="dhh-v2-email" label="Email address" required hint="We'll never share your email with anyone else.">
                                        <input
                                            id="dhh-v2-email"
                                            type="email"
                                            autoComplete="email"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>
                                </div>

                                <LabeledField id="dhh-v2-phone" label="Phone number" required>
                                    <input
                                        id="dhh-v2-phone"
                                        type="tel"
                                        autoComplete="tel"
                                        aria-required="true"
                                        className={inputClass}
                                    />
                                </LabeledField>
                            </fieldset>

                            {/* ── Child's information ── */}
                            <fieldset className="space-y-5">
                                <legend className="border-b border-slate-200 pb-2 font-serif text-lg font-semibold text-hvblue">
                                    Child&rsquo;s Information
                                </legend>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <LabeledField id="dhh-v2-child-name" label="Child's name" required>
                                        <input
                                            id="dhh-v2-child-name"
                                            type="text"
                                            autoComplete="off"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>

                                    <LabeledField id="dhh-v2-child-dob" label="Child's date of birth" required>
                                        <input
                                            id="dhh-v2-child-dob"
                                            type="date"
                                            autoComplete="off"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>
                                </div>
                            </fieldset>

                            {/* ── Communication mode ── */}
                            <fieldset className="space-y-4">
                                <legend className="border-b border-slate-200 pb-2 font-serif text-lg font-semibold text-hvblue">
                                    Primary Mode of Communication or Language
                                </legend>
                                <p className="text-sm text-slate-600">
                                    Select all that apply for your child&rsquo;s primary mode of
                                    communication or language.
                                </p>

                                <ul role="list" className="space-y-2">
                                    {[
                                        { id: 'dhh-v2-comm-asl', label: 'American Sign Language (ASL)' },
                                        { id: 'dhh-v2-comm-listening', label: 'Listening & Spoken Language' },
                                        { id: 'dhh-v2-comm-cued', label: 'Cued Speech' },
                                        { id: 'dhh-v2-comm-fingerspelling', label: 'Fingerspelling' },
                                        { id: 'dhh-v2-comm-combination', label: 'Combination of two or more' },
                                        { id: 'dhh-v2-comm-other', label: 'Other' },
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

                            {/* ── Questions / comments ── */}
                            <fieldset className="space-y-4">
                                <legend className="border-b border-slate-200 pb-2 font-serif text-lg font-semibold text-hvblue">
                                    Questions &amp; Comments
                                </legend>

                                <LabeledField
                                    id="dhh-v2-comments"
                                    label="Please summarize any concerns or information that would be helpful to a D/HH Committee Member"
                                    hint="I authorize Alabama Hands & Voices to disclose to our Parent Guide(s) my name, contact information, name and age of my child so that a Parent Guide(s) may reach out to me regarding Alabama Hands & Voices activities and resources and parent-to-parent support."
                                >
                                    <textarea
                                        id="dhh-v2-comments"
                                        rows={5}
                                        className={`${inputClass} resize-y`}
                                    />
                                </LabeledField>
                            </fieldset>
                        </MockFormV2>
                    </div>
                </div>
            </section>
        </main>
    )
}
