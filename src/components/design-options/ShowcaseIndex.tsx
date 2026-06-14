import Image from 'next/image'
import Link from 'next/link'

const pages = [
    { label: 'Home', v2: '/design-options/v2', v3: '/design-options/v3' },
    { label: 'About', v2: '/design-options/v2/about', v3: '/design-options/v3/about' },
    {
        label: 'Membership',
        v2: '/design-options/v2/membership',
        v3: '/design-options/v3/membership',
    },
    {
        label: 'Programs',
        v2: '/design-options/v2/programs',
        v3: '/design-options/v3/programs',
    },
    {
        label: 'Resources',
        v2: '/design-options/v2/resources',
        v3: '/design-options/v3/resources',
    },
]

export default function ShowcaseIndex() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* ── Header ─────────────────────────────────────────────────── */}
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
                        <div className="shrink-0">
                            <Image
                                src="/images/alabamahvlogo.svg"
                                alt="Alabama Hands & Voices"
                                width={120}
                                height={60}
                                priority
                                className="h-auto w-[120px]"
                            />
                        </div>

                        <div className="flex-1">
                            <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                                Design Options
                            </p>
                            <h1 className="text-3xl font-bold tracking-tight text-hvblue md:text-4xl">
                                Two directions for Alabama Hands &amp; Voices
                            </h1>
                            <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                                Pick a direction to explore the full site, then use the
                                switcher in the corner of any page to compare.
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* ── Direction Cards ─────────────────────────────────────────── */}
            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                    {/* v2 — Warm & Editorial */}
                    <Link
                        href="/design-options/v2"
                        className="group block rounded-2xl bg-white ring-1 ring-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                    >
                        <div className="flex h-full min-h-[280px] flex-col rounded-2xl border-l-4 border-hvorange-200 p-8">
                            {/* Tag row */}
                            <div className="mb-4 flex items-center gap-3">
                                <span className="rounded-full bg-hvorange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-hvorange-700">
                                    Direction 1
                                </span>
                                <span className="font-serif text-2xl font-semibold text-hvblue">
                                    v2
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="font-serif text-2xl font-bold text-hvblue">
                                Warm &amp; Editorial
                            </h2>

                            {/* Decorative rule */}
                            <div className="my-4 h-px w-12 bg-hvorange-200" />

                            {/* Description */}
                            <p className="flex-1 text-base leading-relaxed text-slate-600">
                                Human and reassuring — photo-forward storytelling that
                                feels like one parent talking to another.
                            </p>

                            {/* Visual taste: warm accent strip */}
                            <div className="mt-6 rounded-lg bg-hvorange-50 px-4 py-3">
                                <p className="font-serif text-sm italic text-slate-500">
                                    Soft &middot; Generous whitespace &middot; Photo-forward
                                </p>
                            </div>

                            {/* CTA */}
                            <p className="mt-5 text-sm font-semibold text-hvorange-700 underline-offset-4 group-hover:underline">
                                Explore this direction →
                            </p>
                        </div>
                    </Link>

                    {/* v3 — Bold & Uplifting */}
                    <Link
                        href="/design-options/v3"
                        className="group block rounded-2xl bg-hvblue transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                    >
                        <div className="flex h-full min-h-[280px] flex-col p-8">
                            {/* Tag row */}
                            <div className="mb-4 flex items-center gap-3">
                                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white/70">
                                    Direction 2
                                </span>
                                <span className="text-2xl font-extrabold text-white/70">
                                    v3
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-extrabold tracking-tight text-white">
                                Bold &amp; Uplifting
                            </h2>

                            {/* Decorative accent bar */}
                            <div className="my-4 h-1 w-12 rounded-full bg-hvorange-500" />

                            {/* Description */}
                            <p className="flex-1 text-base leading-relaxed text-white/80">
                                Confident and energetic — bold color blocks and clear
                                calls to action that move families to connect, join, and
                                give.
                            </p>

                            {/* Visual taste: orange accent block */}
                            <div className="mt-6 rounded-lg bg-white/10 px-4 py-3">
                                <p className="text-sm font-bold uppercase tracking-widest text-white/60">
                                    Bold &middot; Color blocks &middot; Clear CTAs
                                </p>
                            </div>

                            {/* CTA */}
                            <p className="mt-5 text-sm font-semibold text-hvorange-200 underline-offset-4 group-hover:underline">
                                Explore this direction →
                            </p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* ── Page Matrix ─────────────────────────────────────────────── */}
            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <div className="border-b border-slate-100 px-6 py-5">
                        <h2 className="text-xl font-semibold text-hvblue">
                            Jump to any page
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Open any page directly in either direction.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-100 bg-slate-50">
                                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        Page
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        Warm &amp; Editorial
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        Bold &amp; Uplifting
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {pages.map((page) => (
                                    <tr
                                        key={page.label}
                                        className="transition-colors hover:bg-slate-50"
                                    >
                                        <td className="px-6 py-3 text-sm font-medium text-hvblue">
                                            {page.label}
                                        </td>
                                        <td className="px-6 py-1">
                                            <Link
                                                href={page.v2}
                                                className="inline-flex min-h-[44px] items-center text-sm font-semibold text-hvorange-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                            >
                                                v2 → {page.label}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-1">
                                            <Link
                                                href={page.v3}
                                                className="inline-flex min-h-[44px] items-center text-sm font-semibold text-hvorange-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                            >
                                                v3 → {page.label}
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}
