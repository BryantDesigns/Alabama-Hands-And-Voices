import Link from 'next/link'
import { PAYPAL_CGI_URL, donateButtonId } from '@/lib/membership'
import type { SiteSettings } from '@/types/cms'

const exploreLinks = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    { title: 'Programs', href: '/programs' },
    { title: 'Resources', href: '/resources' },
]

const involvedLinks = [
    { title: 'Membership', href: '/membership' },
    { title: 'Join & Pay Online', href: '/membership/choose-membership' },
    { title: 'FAQ', href: '/faq' },
]

function FooterLink({ href, title }: { href: string; title: string }) {
    return (
        <Link
            href={href}
            className="group inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-white/80 transition-colors duration-150 hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
        >
            <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-sm bg-hvorange-400 transition-transform duration-150 group-hover:scale-125"
            />
            {title}
        </Link>
    )
}

export default function Footer({ settings }: { settings: SiteSettings }) {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-hvblue text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ── Top accent divider ── */}
                <div className="border-t border-white/15" />
                <div className="py-12 md:py-16">
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.2fr] lg:gap-12">
                        {/* Column 1 — Org identity */}
                        <div>
                            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-hvorange-400">
                                Alabama
                            </p>
                            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl">
                                Hands &amp; Voices
                            </h2>
                            <div
                                aria-hidden="true"
                                className="mt-4 h-[3px] w-12 rounded-full bg-hvorange-600"
                            />
                            <p className="mt-4 text-sm leading-relaxed text-white/80">
                                Parent-driven support for families of children
                                who are deaf or hard of hearing.
                            </p>
                            <p className="mt-3 text-sm font-semibold leading-relaxed text-white">
                                &ldquo;What works for your child is what makes
                                the choice right.&rdquo; &trade;
                            </p>
                        </div>

                        {/* Column 2 — Explore */}
                        <nav aria-label="Footer navigation">
                            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-white/70">
                                Explore
                            </h3>
                            <ul role="list">
                                {exploreLinks.map((link) => (
                                    <li key={link.href}>
                                        <FooterLink
                                            href={link.href}
                                            title={link.title}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Column 3 — Get involved */}
                        <nav aria-label="Get involved">
                            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-white/70">
                                Get involved
                            </h3>
                            <ul role="list">
                                {involvedLinks.map((link) => (
                                    <li key={link.href}>
                                        <FooterLink
                                            href={link.href}
                                            title={link.title}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Column 4 — Connect + Donate */}
                        <div>
                            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-white/70">
                                Connect
                            </h3>
                            <ul className="space-y-1.5 text-sm" role="list">
                                <li>
                                    <a
                                        href={`mailto:${settings.contactEmail}`}
                                        className="font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                    >
                                        {settings.contactEmail}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`tel:${settings.phone}`}
                                        className="font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                    >
                                        {settings.phone}
                                    </a>
                                </li>
                                <li>
                                    <address className="not-italic text-white/80">
                                        {settings.address}
                                    </address>
                                </li>
                                <li>
                                    <a
                                        href={settings.facebookUrl}
                                        target="_blank"
                                        rel="noopener"
                                        className="font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                    >
                                        Facebook
                                    </a>
                                </li>
                            </ul>

                            <form
                                action={PAYPAL_CGI_URL}
                                method="post"
                                target="_top"
                                className="mt-5"
                            >
                                <input
                                    type="hidden"
                                    name="cmd"
                                    value="_s-xclick"
                                />
                                <input
                                    type="hidden"
                                    name="hosted_button_id"
                                    value={donateButtonId}
                                />
                                <button
                                    type="submit"
                                    className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-xl bg-hvorange-700 px-6 py-2.5 text-sm font-bold text-white transition duration-150 hover:bg-hvorange-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="h-4 w-4 shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                                        />
                                    </svg>
                                    Donate Now
                                </button>
                            </form>
                            <p className="mt-2 text-xs text-white/70">
                                Your gift supports Alabama families directly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Copyright bar ── */}
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <p className="text-xs text-white/70">
                        &copy; {currentYear} {settings.footerCopyright}
                    </p>
                    <p className="text-xs text-white/70">
                        A nonprofit organization serving Alabama families.
                    </p>
                </div>
            </div>
        </footer>
    )
}
