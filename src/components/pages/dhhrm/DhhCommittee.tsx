import DHHRMForm from '@/components/pages/dhhrm/DHHRMForm'
import VideoPlayer from '@/components/pages/dhhrm/VideoPlayer'
import type { VideoContent } from '@/types/cms'
import type { getDhhCommitteePageContent } from '@/lib/keystatic/pages'

interface DhhCommitteeProps {
    dhh: NonNullable<Awaited<ReturnType<typeof getDhhCommitteePageContent>>>
    videos: VideoContent[]
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function toParagraphs(text: string): string[] {
    return text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
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

// ── Component ─────────────────────────────────────────────────────────────────

export default function DhhCommittee({ dhh, videos }: DhhCommitteeProps) {
    const { description, benefits, videoSectionHeading } = dhh

    const paragraphs = description ? toParagraphs(description) : []

    return (
        <main className="bg-white text-hvblue">
            {/* ================================================================ */}
            {/* HERO — full-bleed hvblue color block, bold headline */}
            {/* ================================================================ */}
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
                    <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-hvorange-50 ring-1 ring-white/20">
                        <span
                            aria-hidden="true"
                            className="h-2 w-2 rounded-sm bg-hvorange-600"
                        />
                        Alabama Hands &amp; Voices Program
                    </p>

                    <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
                        D/HH
                        <br />
                        Committee
                        <span
                            aria-hidden="true"
                            className="block text-hvorange"
                        >
                            .
                        </span>
                    </h1>

                    <p className="mt-3 text-lg font-bold uppercase tracking-widest text-hvorange-50/80">
                        Deaf &amp; Hard of Hearing Role Models &amp; Mentors
                    </p>

                    {paragraphs.length > 0 && (
                        <div className="mt-6 max-w-xl space-y-4 text-base font-medium leading-relaxed text-white/90 md:text-lg">
                            {paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    )}

                    <a
                        href="#dhh-connect-form"
                        className="mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-hvblue transition duration-150 hover:bg-hvorange-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                    >
                        Connect with a member
                        <ArrowIcon className="h-5 w-5" />
                    </a>
                </div>
            </section>

            {/* ================================================================ */}
            {/* BENTO — benefits in color-block grid */}
            {/* ================================================================ */}
            {benefits && benefits.length > 0 && (
                <section className="bg-slate-50 py-14 md:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <p className="text-sm font-bold uppercase tracking-widest text-hvorange-700">
                                Making a difference
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                What committee members do.
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                            />
                        </div>

                        {/* Bento grid */}
                        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {/* First card — hvblue feature */}
                            <div className="rounded-3xl bg-hvblue p-6 text-white sm:col-span-2 md:p-8 lg:col-span-1">
                                <p className="text-sm font-bold uppercase tracking-widest text-hvorange-50/80">
                                    Our committee
                                </p>
                                <p className="mt-4 text-base font-medium leading-relaxed text-white/90">
                                    D/HH Committee Members are deaf and hard of
                                    hearing adults who give back by serving as
                                    role models and mentors to the next
                                    generation of children and families.
                                </p>
                                <span
                                    aria-hidden="true"
                                    className="mt-6 block h-1.5 w-12 rounded-full bg-hvorange-600"
                                />
                            </div>

                            {/* Benefits — white cards */}
                            {benefits.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 rounded-3xl bg-white p-6 ring-1 ring-slate-200 md:p-8"
                                >
                                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-hvorange-600/90">
                                        <CheckIcon className="h-4 w-4 text-white" />
                                    </span>
                                    <p className="text-base font-medium leading-relaxed text-slate-700">
                                        {item.benefit}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ================================================================ */}
            {/* MEET OUR ROLE MODELS — orange block with real video carousel */}
            {/* ================================================================ */}
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
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                            Inspiring stories
                        </p>
                        {videoSectionHeading && (
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                {videoSectionHeading}.
                            </h2>
                        )}
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvblue"
                        />
                        <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-hvblue/90 md:text-lg">
                            Hear from D/HH adults who inspire families and
                            children across Alabama with their lived experience.
                        </p>
                    </div>
                    <div className="mt-10">
                        <VideoPlayer videos={videos} />
                    </div>
                </div>
            </section>

            {/* ================================================================ */}
            {/* D/HH REFERRAL FORM — white band, bold form card */}
            {/* ================================================================ */}
            <section id="dhh-connect-form" className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvorange-700">
                            Connect with us
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                            Connect with a D/HH Committee member.
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />
                        <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-slate-700 md:text-lg">
                            Fill out the form below and a D/HH Committee member
                            will reach out to connect with your family. All
                            information is kept confidential.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 max-w-3xl">
                        <DHHRMForm />
                    </div>
                </div>
            </section>
        </main>
    )
}
