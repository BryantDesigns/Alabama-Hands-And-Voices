import Image from 'next/image'
import Link from 'next/link'
import type { ProgramSummary } from '@/components/design-options/programsData'

interface ProgramsV3Props {
    programs: ProgramSummary[]
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

function ShieldIcon({ className = '' }: { className?: string }) {
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
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
        </svg>
    )
}

function StarIcon({ className = '' }: { className?: string }) {
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
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.499Z"
            />
        </svg>
    )
}

// Truncate detail text to ~2 sentences
function truncateDetail(text: string, maxLen = 200): string {
    if (text.length <= maxLen) return text
    const cut = text.lastIndexOf(' ', maxLen)
    return cut > 0 ? text.slice(0, cut) + '…' : text.slice(0, maxLen) + '…'
}

// Bento surface config per program: cycles through 4 card treatments
type BentoVariant = 'white' | 'blue' | 'orange' | 'photo'

const BENTO_VARIANTS: BentoVariant[] = ['blue', 'white', 'orange', 'white']

function ProgramCard({
    program,
    index,
}: {
    program: ProgramSummary
    index: number
}) {
    const variant = BENTO_VARIANTS[index % BENTO_VARIANTS.length]

    const surfaceClasses: Record<BentoVariant, string> = {
        white: 'bg-white ring-1 ring-slate-200 text-hvblue',
        blue: 'bg-hvblue text-white',
        orange: 'bg-hvorange text-hvblue',
        photo: 'bg-slate-900 text-white',
    }

    const eyebrowClasses: Record<BentoVariant, string> = {
        white: 'text-hvorange-700',
        blue: 'text-hvorange-50',
        orange: 'text-hvblue',
        photo: 'text-hvorange-50',
    }

    const bodyClasses: Record<BentoVariant, string> = {
        white: 'text-slate-700',
        blue: 'text-white/90',
        orange: 'text-hvblue/90',
        photo: 'text-white/90',
    }

    const checkBgClasses: Record<BentoVariant, string> = {
        white: 'bg-hvblue/10 text-hvblue',
        blue: 'bg-white/15 text-white',
        orange: 'bg-hvblue/15 text-hvblue',
        photo: 'bg-white/15 text-white',
    }

    const linkClasses: Record<BentoVariant, string> = {
        white: 'bg-hvblue text-white hover:bg-hvblue-400',
        blue: 'bg-white text-hvblue hover:bg-hvorange-50',
        orange: 'bg-hvblue text-white hover:bg-hvblue-400',
        photo: 'bg-white text-hvblue hover:bg-hvorange-50',
    }

    const accentBarClasses: Record<BentoVariant, string> = {
        white: 'bg-hvorange-600',
        blue: 'bg-hvorange-600',
        orange: 'bg-hvblue',
        photo: 'bg-hvorange-600',
    }

    return (
        <article
            className={`relative flex flex-col overflow-hidden rounded-3xl p-6 md:p-8 ${surfaceClasses[variant]} transition duration-200 hover:-translate-y-1 hover:shadow-xl`}
        >
            {/* Geometric corner decoration */}
            <span
                aria-hidden="true"
                className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl text-sm font-extrabold ${
                    variant === 'white'
                        ? 'bg-slate-100 text-slate-400'
                        : variant === 'blue'
                          ? 'bg-white/10 text-white/60'
                          : variant === 'orange'
                            ? 'bg-hvblue/10 text-hvblue/60'
                            : 'bg-white/10 text-white/60'
                }`}
            >
                {String(index + 1).padStart(2, '0')}
            </span>

            {/* Logo or icon */}
            <div className="mb-5">
                {program.logo ? (
                    <div
                        className={`inline-flex items-center justify-center rounded-2xl p-3 ${
                            variant === 'white'
                                ? 'bg-slate-100'
                                : variant === 'orange'
                                  ? 'bg-hvblue/10'
                                  : 'bg-white/10'
                        }`}
                    >
                        <Image
                            src={program.logo}
                            alt={`${program.title} logo`}
                            width={80}
                            height={56}
                            className="h-10 w-auto object-contain"
                        />
                    </div>
                ) : (
                    <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                            variant === 'white'
                                ? 'bg-hvblue text-white'
                                : variant === 'orange'
                                  ? 'bg-hvblue/15 text-hvblue'
                                  : 'bg-white/15 text-white'
                        }`}
                    >
                        {program.key === 'safety' ? (
                            <ShieldIcon className="h-6 w-6" />
                        ) : (
                            <StarIcon className="h-6 w-6" />
                        )}
                    </div>
                )}
            </div>

            {/* Eyebrow */}
            <p
                className={`text-sm font-bold uppercase tracking-widest ${eyebrowClasses[variant]}`}
            >
                Program {String(index + 1).padStart(2, '0')}
            </p>

            {/* Title */}
            <h2 className="mt-2 text-xl font-extrabold tracking-tight md:text-2xl">
                {program.title}
            </h2>

            {/* Accent bar */}
            <span
                aria-hidden="true"
                className={`mt-4 block h-1.5 w-16 rounded-full ${accentBarClasses[variant]}`}
            />

            {/* Description */}
            <p className={`mt-4 text-sm font-bold ${eyebrowClasses[variant]}`}>
                {program.description}
            </p>

            {/* Detail */}
            <p className={`mt-2 flex-1 text-base leading-relaxed ${bodyClasses[variant]}`}>
                {truncateDetail(program.detail)}
            </p>

            {/* Bullet points */}
            {program.points.length > 0 && (
                <ul
                    className="mt-5 space-y-2"
                    aria-label={`${program.title} highlights`}
                >
                    {program.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                            <span
                                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${checkBgClasses[variant]}`}
                            >
                                <CheckIcon className="h-2.5 w-2.5" />
                            </span>
                            <span
                                className={`text-sm leading-relaxed ${bodyClasses[variant]}`}
                            >
                                {pt}
                            </span>
                        </li>
                    ))}
                </ul>
            )}

            {/* CTA */}
            <Link
                href={program.href}
                className={`mt-6 inline-flex items-center gap-2 self-start rounded-xl px-5 py-2.5 text-sm font-bold transition duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 ${linkClasses[variant]} ${
                    variant === 'blue'
                        ? 'focus-visible:ring-white focus-visible:ring-offset-hvblue'
                        : variant === 'orange'
                          ? 'focus-visible:ring-hvblue focus-visible:ring-offset-hvorange'
                          : 'focus-visible:ring-hvorange-600 focus-visible:ring-offset-white'
                }`}
            >
                Learn more
                <ArrowIcon className="h-4 w-4" />
            </Link>
        </article>
    )
}

export default function ProgramsV3({ programs }: ProgramsV3Props) {
    return (
        <main className="bg-white text-hvblue">
            {/* ============================================================ */}
            {/* HERO — full-bleed hvblue block, big headline, 2 CTAs */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-hvblue text-white">
                {/* Geometric accents */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-[24rem] w-[24rem] rotate-12 rounded-[3rem] bg-hvorange/10"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-white/5 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-hvorange-600"
                />

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-hvorange-50 ring-1 ring-white/20">
                            <span
                                aria-hidden="true"
                                className="h-2 w-2 rounded-sm bg-hvorange-600"
                            />
                            Alabama Hands &amp; Voices
                        </p>

                        <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
                            Our{' '}
                            <span className="text-hvorange">Programs</span>
                        </h1>

                        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
                            Four programs. One mission. Every family finds their
                            path forward — from parent support to advocacy,
                            safety resources, and role models for your child.
                        </p>

                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/programs/gbys"
                                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-hvorange-600 px-7 py-3.5 text-base font-bold text-white transition duration-150 hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                            >
                                <HeartIcon className="h-5 w-5" />
                                Find a Parent Guide
                            </Link>
                            <a
                                href="#programs-grid"
                                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-white/70 px-7 py-3.5 text-base font-bold text-white transition duration-150 hover:bg-white hover:text-hvblue focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                            >
                                Explore all programs
                                <ArrowIcon className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* QUICK STAT BAND — white section, 4 program count indicators */}
            {/* ============================================================ */}
            <section className="border-b border-slate-100 bg-white py-10 md:py-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        {programs.map((p, i) => (
                            <div key={p.key} className="text-center">
                                <dt className="text-sm font-bold uppercase tracking-widest text-slate-500">
                                    Program {String(i + 1).padStart(2, '0')}
                                </dt>
                                <dd className="mt-1 text-base font-extrabold tracking-tight text-hvblue md:text-lg">
                                    {p.title.split('(')[0].trim()}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* ============================================================ */}
            {/* BENTO GRID — mixed-surface program cards */}
            {/* ============================================================ */}
            <section
                id="programs-grid"
                className="bg-slate-50 py-14 md:py-20"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvorange-700">
                            All four programs
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                            Built for families.{' '}
                            <br className="hidden md:block" />
                            Designed to connect.
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-2">
                        {programs.map((program, i) => (
                            <ProgramCard
                                key={program.key}
                                program={program}
                                index={i}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* PHOTO SPLIT — full-bleed orange block + photo */}
            {/* ============================================================ */}
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
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                                Real families, real support
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                You are not walking this alone.
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvblue"
                            />
                            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-hvblue/90 md:text-lg">
                                Alabama Hands &amp; Voices connects families at
                                every stage — from the first day of diagnosis
                                to the school years and beyond. Our programs
                                are free, family-centered, and run by people
                                who have lived this experience.
                            </p>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            <Image
                                src="/images/retreat3.jpg"
                                alt="Families connecting at an Alabama Hands & Voices retreat"
                                width={720}
                                height={520}
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="h-full w-full object-cover"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-linear-to-t from-hvblue/40 via-transparent to-transparent"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================ */}
            {/* CTA BAND — full-bleed hvblue, punchy final CTA */}
            {/* ============================================================ */}
            <section className="relative isolate overflow-hidden bg-hvblue py-16 text-white md:py-24">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rotate-12 rounded-[3rem] bg-hvorange/15"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-hvorange-600/15 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-hvorange-600"
                />

                <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <p className="text-sm font-bold uppercase tracking-widest text-hvorange-50">
                        Not sure where to start?
                    </p>
                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                        Get matched with a{' '}
                        <span className="text-hvorange">Parent Guide.</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90">
                        Our Guide By Your Side program pairs your family with
                        a parent who has been there. No cost, no commitment —
                        just one family helping another find their way forward.
                    </p>

                    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/programs/gbys"
                            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-hvorange-600 px-8 py-4 text-base font-bold text-white transition duration-150 hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                        >
                            <HeartIcon className="h-5 w-5" />
                            Find a Parent Guide
                        </Link>
                        <Link
                            href="/design-options/v3/membership"
                            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-hvblue transition duration-150 hover:bg-hvorange-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                        >
                            Join the community
                            <ArrowIcon className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
