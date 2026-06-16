import Image from 'next/image'
import MockFormV2 from '@/components/design-options/v2/MockFormV2'
import type { getAstraPageContent } from '@/lib/keystatic/pages'

interface AstraV2Props {
    astra: NonNullable<Awaited<ReturnType<typeof getAstraPageContent>>>
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

function ArrowTopRightIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clipRule="evenodd"
            />
        </svg>
    )
}

function DocumentIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={className}
        >
            <path d="M3 3.5A1.5 1.5 0 0 1 4.5 2h6.879a1.5 1.5 0 0 1 1.06.44l4.122 4.12A1.5 1.5 0 0 1 17 7.622V16.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-13Z" />
        </svg>
    )
}

function HandRaisedIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={className}
        >
            <path d="M10 1a1.5 1.5 0 0 1 1.5 1.5v5a.5.5 0 0 0 1 0V3a1.5 1.5 0 0 1 3 0v3.5a.5.5 0 0 0 1 0V7a1.5 1.5 0 0 1 3 0v7c0 3.314-2.686 6-6 6H9a6 6 0 0 1-6-6V8.5a1.5 1.5 0 0 1 3 0v2.5a.5.5 0 0 0 1 0V2.5A1.5 1.5 0 0 1 10 1Z" />
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

function LabeledField({
    id,
    label,
    required,
    children,
    hint,
}: LabeledFieldProps) {
    return (
        <div>
            <label htmlFor={id} className={labelClass}>
                {label}
                {required && (
                    <span className="ml-1 text-red-700" aria-hidden="true">
                        *
                    </span>
                )}
                {required && (
                    <span className="sr-only"> (required)</span>
                )}
            </label>
            <div className="mt-1.5">{children}</div>
            {hint && (
                <p className="mt-1 text-sm text-slate-600">{hint}</p>
            )}
        </div>
    )
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function AstraV2({ astra }: AstraV2Props) {
    const {
        programDescription,
        questions,
        resourceLinks,
        trainingCtaLabel,
        trainingCtaHref,
    } = astra

    const paragraphs = programDescription ? toParagraphs(programDescription) : []

    return (
        <main className="bg-white text-hvblue">
            {/* ============================================================ */}
            {/* HERO — warm gradient, ASTra logo, serif h1 */}
            {/* ============================================================ */}
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
                        {/* ASTra logo */}
                        <div className="mb-8 flex justify-center">
                            <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70">
                                <Image
                                    src="/images/AstraLogo.png"
                                    alt="ASTra — Advocate Support Training and Resources"
                                    width={240}
                                    height={120}
                                    priority
                                    sizes="240px"
                                    className="h-auto w-48 object-contain md:w-60"
                                />
                            </div>
                        </div>

                        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            Alabama Hands &amp; Voices Program
                        </p>

                        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-hvblue md:text-6xl">
                            ASTra
                        </h1>

                        <p className="mt-4 font-kaushan text-xl leading-snug text-hvorange-700 md:text-2xl">
                            <span className="sr-only">Our promise: </span>
                            Advocate Support Training &amp; Resources
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

            {/* ============================================================ */}
            {/* COULD THIS HELP — questions list */}
            {/* ============================================================ */}
            {questions && questions.length > 0 && (
                <section className="bg-white py-16 md:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl">
                            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                <LeafMark className="h-4 w-4 text-hvorange-600" />
                                Is ASTra right for your family?
                            </p>
                            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                                Could this help your family?
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1 w-14 rounded-full bg-hvorange-600"
                            />
                            <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
                                ASTra helps families who are navigating the school system
                                with a child who is deaf or hard of hearing. If any of
                                these resonate with you, we&rsquo;re here.
                            </p>

                            <ul
                                role="list"
                                className="mt-8 space-y-4"
                                aria-label="Situations ASTra can help with"
                            >
                                {questions.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-4 rounded-2xl bg-hvorange-50 p-5"
                                    >
                                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
                                            <CheckCircleIcon className="h-4 w-4 text-hvorange-700" />
                                        </span>
                                        <span className="text-base leading-relaxed text-slate-700">
                                            {item.question}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            {/* ============================================================ */}
            {/* RESOURCES — external links + training CTA */}
            {/* ============================================================ */}
            {((resourceLinks && resourceLinks.length > 0) || trainingCtaLabel) && (
                <section className="bg-slate-50 py-16 md:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                            {/* Resource links */}
                            {resourceLinks && resourceLinks.length > 0 && (
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                        Helpful Resources
                                    </p>
                                    <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                                        Documents &amp; guides
                                    </h2>
                                    <span
                                        aria-hidden="true"
                                        className="mt-5 block h-1 w-14 rounded-full bg-hvorange-600"
                                    />

                                    <ul
                                        role="list"
                                        className="mt-8 space-y-3"
                                        aria-label="ASTra resources"
                                    >
                                        {resourceLinks.map((link, i) => (
                                            <li key={i}>
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70 transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                                >
                                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-hvorange-100 text-hvorange-700 transition group-hover:bg-hvorange-600 group-hover:text-white">
                                                        <DocumentIcon className="h-5 w-5" />
                                                    </span>
                                                    <span className="flex-1 text-sm font-semibold text-hvblue group-hover:text-hvblue">
                                                        {link.name}
                                                    </span>
                                                    <ArrowTopRightIcon className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-hvorange-700" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Training CTA */}
                            {trainingCtaLabel && trainingCtaHref && (
                                <div className="flex flex-col justify-center">
                                    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 md:p-8">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-hvorange-100 text-hvorange-700">
                                            <HandRaisedIcon className="h-6 w-6" />
                                        </div>
                                        <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                            Advocate Training
                                        </p>
                                        <h3 className="mt-2 font-serif text-xl font-bold text-hvblue md:text-2xl">
                                            Become an ASTra advocate
                                        </h3>
                                        <span
                                            aria-hidden="true"
                                            className="mt-4 block h-1 w-10 rounded-full bg-hvorange-600"
                                        />
                                        <p className="mt-4 text-base leading-relaxed text-slate-700">
                                            Trained advocates make the ASTra program possible.
                                            If you have experience supporting families in the
                                            school system, consider joining our advocate network.
                                        </p>
                                        <a
                                            href={trainingCtaHref}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-hvorange-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                        >
                                            {trainingCtaLabel}
                                            <ArrowTopRightIcon className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* ============================================================ */}
            {/* REFERRAL FORM — warm card on tinted background */}
            {/* ============================================================ */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            Request Support
                        </p>
                        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                            Request an ASTra advocate
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1 w-14 rounded-full bg-hvorange-600"
                        />
                        <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
                            Fill out the form below and an ASTra advocate will reach out to
                            connect with your family. All information is kept confidential.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 max-w-3xl">
                        <MockFormV2
                            successTitle="Thanks — this is a preview"
                            successBody="In the live site this request would reach the ASTra team. No information was submitted."
                            submitLabel="Request ASTra support"
                        >
                            {/* ── Parent / Guardian information ── */}
                            <fieldset className="space-y-5">
                                <legend className="border-b border-slate-200 pb-2 font-serif text-lg font-semibold text-hvblue">
                                    Parent / Guardian Information
                                </legend>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <LabeledField
                                        id="astra-parent-name"
                                        label="Parent / Guardian name"
                                        required
                                    >
                                        <input
                                            id="astra-parent-name"
                                            type="text"
                                            autoComplete="name"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>

                                    <LabeledField
                                        id="astra-secondary-parent"
                                        label="Secondary parent / guardian"
                                    >
                                        <input
                                            id="astra-secondary-parent"
                                            type="text"
                                            autoComplete="off"
                                            className={inputClass}
                                        />
                                    </LabeledField>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <LabeledField
                                        id="astra-email"
                                        label="Email address"
                                        required
                                        hint="We'll never share your email with anyone else."
                                    >
                                        <input
                                            id="astra-email"
                                            type="email"
                                            autoComplete="email"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>

                                    <LabeledField
                                        id="astra-phone"
                                        label="Phone number"
                                        required
                                    >
                                        <input
                                            id="astra-phone"
                                            type="tel"
                                            autoComplete="tel"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>
                                </div>
                            </fieldset>

                            {/* ── Student information ── */}
                            <fieldset className="space-y-5">
                                <legend className="border-b border-slate-200 pb-2 font-serif text-lg font-semibold text-hvblue">
                                    Student Information
                                </legend>

                                <div className="grid gap-5 sm:grid-cols-3">
                                    <LabeledField
                                        id="astra-student-name"
                                        label="Student name"
                                        required
                                    >
                                        <input
                                            id="astra-student-name"
                                            type="text"
                                            autoComplete="off"
                                            aria-required="true"
                                            className={inputClass}
                                        />
                                    </LabeledField>

                                    <LabeledField
                                        id="astra-student-age"
                                        label="Student's age"
                                    >
                                        <input
                                            id="astra-student-age"
                                            type="text"
                                            autoComplete="off"
                                            className={inputClass}
                                        />
                                    </LabeledField>

                                    <LabeledField
                                        id="astra-student-grade"
                                        label="Student's grade"
                                    >
                                        <input
                                            id="astra-student-grade"
                                            type="text"
                                            autoComplete="off"
                                            className={inputClass}
                                        />
                                    </LabeledField>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <LabeledField
                                        id="astra-school"
                                        label="School"
                                    >
                                        <input
                                            id="astra-school"
                                            type="text"
                                            autoComplete="off"
                                            className={inputClass}
                                        />
                                    </LabeledField>

                                    <LabeledField
                                        id="astra-school-district"
                                        label="School district"
                                    >
                                        <input
                                            id="astra-school-district"
                                            type="text"
                                            autoComplete="off"
                                            className={inputClass}
                                        />
                                    </LabeledField>
                                </div>

                                <LabeledField
                                    id="astra-case-manager"
                                    label="Case manager name"
                                >
                                    <input
                                        id="astra-case-manager"
                                        type="text"
                                        autoComplete="off"
                                        className={inputClass}
                                    />
                                </LabeledField>
                            </fieldset>

                            {/* ── Communication mode ── */}
                            <fieldset className="space-y-4">
                                <legend className="border-b border-slate-200 pb-2 font-serif text-lg font-semibold text-hvblue">
                                    Primary Mode of Communication
                                </legend>
                                <p className="text-sm text-slate-600">
                                    Select all that apply for your child&rsquo;s primary mode of
                                    communication or language.
                                </p>

                                <ul role="list" className="space-y-2">
                                    {[
                                        {
                                            id: 'astra-comm-asl',
                                            label: 'American Sign Language (ASL)',
                                        },
                                        {
                                            id: 'astra-comm-listening',
                                            label: 'Listening & Spoken Language',
                                        },
                                        {
                                            id: 'astra-comm-cued',
                                            label: 'Cued Speech',
                                        },
                                        {
                                            id: 'astra-comm-fingerspelling',
                                            label: 'Fingerspelling',
                                        },
                                        {
                                            id: 'astra-comm-combination',
                                            label: 'Combination of two or more',
                                        },
                                        {
                                            id: 'astra-comm-other',
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

                            {/* ── Documents ── */}
                            <fieldset className="space-y-4">
                                <legend className="border-b border-slate-200 pb-2 font-serif text-lg font-semibold text-hvblue">
                                    Educational Documents
                                </legend>
                                <p className="text-sm text-slate-600">
                                    Does your child have any of the following?
                                </p>

                                <ul role="list" className="space-y-2">
                                    {[
                                        {
                                            id: 'astra-doc-504',
                                            label: '504 Plan',
                                        },
                                        {
                                            id: 'astra-doc-iep',
                                            label: 'IEP (Individualized Education Program)',
                                        },
                                        {
                                            id: 'astra-doc-evaluation',
                                            label: 'In Evaluation Process',
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

                            {/* ── Questions / comments ── */}
                            <fieldset className="space-y-4">
                                <legend className="border-b border-slate-200 pb-2 font-serif text-lg font-semibold text-hvblue">
                                    Questions &amp; Comments
                                </legend>

                                <LabeledField
                                    id="astra-comments"
                                    label="Please summarize the concerns that led you to seeking an ASTra advocate"
                                    hint="I authorize Alabama Hands & Voices to disclose to our Parent Guide(s) my name, contact information, name and age of my child so that a Parent Guide(s) may reach out to me regarding Alabama Hands & Voices activities and resources and parent-to-parent support."
                                >
                                    <textarea
                                        id="astra-comments"
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
