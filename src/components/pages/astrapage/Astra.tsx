import Image from 'next/image'
import AstraForm from '@/components/pages/astrapage/AstraForm'
import RichText from '@/components/RichText'
import type { getAstraPageContent } from '@/lib/keystatic/pages'
import { documentLinkProps } from '@/utils/documentLinks'

interface AstraProps {
    astra: NonNullable<Awaited<ReturnType<typeof getAstraPageContent>>>
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

function ArrowTopRightIcon({ className = '' }: { className?: string }) {
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
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
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

function DocumentIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
        </svg>
    )
}

function AcademicCapIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
        </svg>
    )
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Astra({ astra }: AstraProps) {
    const {
        heroTagline,
        programDescription,
        questions,
        resourceLinks,
        trainingCtaLabel,
        trainingCtaHref,
    } = astra

    return (
        <main className="bg-white text-hvblue">
            {/* ============================================================ */}
            {/* HERO — full-bleed hvblue, big headline, ASTra logo */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-hvblue text-white">
                {/* Geometric accents */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[30rem] rotate-12 rounded-[3rem] bg-hvorange/15"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl"
                />
                {/* Left-edge orange bar */}
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-hvorange-600"
                />

                <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
                        {/* Text */}
                        <div>
                            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-hvorange-50 ring-1 ring-white/20">
                                <span
                                    aria-hidden="true"
                                    className="h-2 w-2 rounded-sm bg-hvorange-600"
                                />
                                Alabama Hands &amp; Voices Program
                            </p>

                            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
                                ASTra
                                <span
                                    aria-hidden="true"
                                    className="block text-hvorange"
                                >
                                    .
                                </span>
                            </h1>

                            <p className="mt-3 text-lg font-bold uppercase tracking-widest text-hvorange-50/80">
                                {heroTagline}
                            </p>

                            <RichText
                                document={programDescription}
                                className="mt-6 max-w-xl text-base font-medium leading-relaxed text-white/90 md:text-lg [&_a]:text-white [&_a:hover]:text-hvorange-50"
                            />
                        </div>

                        {/* ASTra logo badge */}
                        <div className="hidden lg:block">
                            <div className="overflow-hidden rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-white/20">
                                <Image
                                    src="/images/AstraLogo.png"
                                    alt="ASTra — Advocate Support Training and Resources"
                                    width={220}
                                    height={110}
                                    priority
                                    sizes="220px"
                                    className="h-auto w-44 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* BENTO — questions + resources in color-block grid */}
            {/* ============================================================ */}
            {((questions && questions.length > 0) ||
                (resourceLinks && resourceLinks.length > 0)) && (
                <section className="bg-slate-50 py-14 md:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                                How ASTra helps
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                Built for families.{' '}
                                <br className="hidden md:block" />
                                Backed by advocates.
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                            />
                        </div>

                        <div className="mt-10 grid gap-5 lg:grid-cols-2">
                            {/* Questions — hvblue card */}
                            {questions && questions.length > 0 && (
                                <div className="rounded-3xl bg-hvblue p-6 text-white md:p-8">
                                    <p className="text-sm font-bold uppercase tracking-widest text-hvorange-50/80">
                                        Could this help your family?
                                    </p>
                                    <h3 className="mt-2 text-xl font-extrabold tracking-tight text-white md:text-2xl">
                                        Families come to ASTra when…
                                    </h3>
                                    <span
                                        aria-hidden="true"
                                        className="mt-4 block h-1.5 w-16 rounded-full bg-hvorange-600"
                                    />

                                    <ul
                                        role="list"
                                        className="mt-6 space-y-3"
                                        aria-label="Situations ASTra can help with"
                                    >
                                        {questions.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-hvorange-600/90">
                                                    <CheckIcon className="h-3 w-3 text-white" />
                                                </span>
                                                <span className="text-sm leading-relaxed text-white/90">
                                                    {item.question}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Resources — white card */}
                            {resourceLinks && resourceLinks.length > 0 && (
                                <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 md:p-8">
                                    <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                                        Helpful resources
                                    </p>
                                    <h3 className="mt-2 text-xl font-extrabold tracking-tight text-hvblue md:text-2xl">
                                        Documents &amp; guides
                                    </h3>
                                    <span
                                        aria-hidden="true"
                                        className="mt-4 block h-1.5 w-16 rounded-full bg-hvorange-600"
                                    />

                                    <ul
                                        role="list"
                                        className="mt-6 space-y-3"
                                        aria-label="ASTra resources"
                                    >
                                        {resourceLinks.map((link, i) => (
                                            <li key={i}>
                                                <a
                                                    href={link.url}
                                                    {...documentLinkProps(
                                                        link.url,
                                                        {
                                                            externalNewTab: true,
                                                        }
                                                    )}
                                                    className="group flex items-center gap-4 rounded-2xl p-3 transition hover:bg-slate-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                                >
                                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-hvblue/10 text-hvblue transition group-hover:bg-hvblue group-hover:text-white">
                                                        <DocumentIcon className="h-5 w-5" />
                                                    </span>
                                                    <span className="flex-1 text-sm font-bold text-hvblue">
                                                        {link.name}
                                                    </span>
                                                    <ArrowTopRightIcon className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-hvorange-700" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* ============================================================ */}
            {/* TRAINING CTA — orange block */}
            {/* ============================================================ */}
            {trainingCtaLabel && trainingCtaHref && (
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
                                <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                                    Advocate Training
                                </p>
                                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                    Become an ASTra advocate.
                                </h2>
                                <span
                                    aria-hidden="true"
                                    className="mt-5 block h-1.5 w-20 rounded-full bg-hvblue"
                                />
                                <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-hvblue/90 md:text-lg">
                                    Trained advocates make the ASTra program
                                    possible. If you have experience navigating
                                    the school system with a deaf or
                                    hard-of-hearing child, consider joining our
                                    advocate network.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 lg:justify-self-end">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-hvblue text-white">
                                    <AcademicCapIcon className="h-8 w-8" />
                                </div>
                                <a
                                    href={trainingCtaHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-hvblue px-8 py-4 text-base font-bold text-white transition duration-150 hover:bg-hvblue-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvblue focus-visible:ring-offset-2 focus-visible:ring-offset-hvorange"
                                >
                                    {trainingCtaLabel}
                                    <ArrowIcon className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ============================================================ */}
            {/* REFERRAL FORM — white band, bold form card */}
            {/* ============================================================ */}
            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                            Request Support
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                            Request an ASTra advocate.
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mx-auto mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />
                        <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-slate-700 md:text-lg">
                            Fill out the form below and an ASTra advocate will
                            reach out to connect with your family. All
                            information is kept confidential.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 max-w-4xl">
                        <AstraForm />
                    </div>
                </div>
            </section>
        </main>
    )
}
