import Link from 'next/link'
import { PAYPAL_CGI_URL, donateButtonId } from '@/lib/membership'
import type { NavigationContent, SiteSettings } from '@/types/cms'

const aboutLinks = (nav: NavigationContent) => [
    { ...nav.about.whoWeAre, href: '/about' },
    { ...nav.about.boardMembers, href: '/about/board' },
    { ...nav.about.staff, href: '/about/staff' },
    { ...nav.about.contact, href: '/about/contact' },
]

const programLinks = (nav: NavigationContent) => [
    { ...nav.programs.gbys, href: '/programs/gbys' },
    { ...nav.programs.astra, href: '/programs/astra' },
    { ...nav.programs.safety, href: '/programs/safety' },
    { ...nav.programs.dhhCommittee, href: '/programs/dhh-committee' },
]

const siteLinks = [
    { title: 'Home', href: '/' },
    { title: 'Resources', href: '/resources' },
    { title: 'Membership', href: '/membership' },
    { title: 'Choose Membership', href: '/membership/choose-membership' },
    { title: 'FAQ', href: '/faq' },
]

function FooterLink({ href, title }: { href: string; title: string }) {
    return (
        <Link
            href={href}
            className="group inline-flex min-h-[44px] items-center gap-2 text-base font-semibold text-white/80 transition-colors duration-150 hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
        >
            <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-sm bg-hvorange-400 transition-transform duration-150 group-hover:scale-125"
            />
            {title}
        </Link>
    )
}

export default function Footer({
    navigation,
    settings,
}: {
    navigation: NavigationContent
    settings: SiteSettings
}) {
    const currentYear = new Date().getFullYear()
    const navGroups = [
        { title: 'About', links: aboutLinks(navigation) },
        {
            title: 'Programs',
            links: [
                { title: 'All Programs', href: '/programs' },
                ...programLinks(navigation),
            ],
        },
        { title: 'Site', links: siteLinks },
    ]

    return (
        <footer className="bg-hvblue text-white">
            {/* ── Top accent: bold orange stripe ── */}
            <div className="h-1 w-full bg-hvorange-600" />

            {/* ── Main footer body ── */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="py-14 md:py-20">
                    {/* ── Grid: org info + nav + CTA ── */}
                    <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
                        {/* Column 1 — Org identity */}
                        <div className="lg:col-span-1">
                            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-hvorange-400">
                                Alabama
                            </p>
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
                                Hands &amp; Voices
                            </h2>
                            <div
                                aria-hidden="true"
                                className="mt-4 h-[3px] w-12 rounded-full bg-hvorange-600"
                            />
                            <p className="mt-5 text-base leading-relaxed text-white/80">
                                Parent-driven support for families of children
                                who are deaf or hard of hearing.
                            </p>
                            <p className="mt-4 text-sm font-bold leading-relaxed text-white">
                                &ldquo;What works for your child is what makes
                                the choice right.&rdquo; &trade;
                            </p>
                        </div>

                        {/* Column 2 — Navigation */}
                        <nav aria-label="Footer navigation">
                            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/70">
                                Navigate
                            </h3>
                            <div className="flex flex-col gap-6">
                                {navGroups.map((group) => (
                                    <section key={group.title}>
                                        <h4 className="mb-1 text-sm font-bold text-white">
                                            {group.title}
                                        </h4>
                                        <ul className="space-y-1" role="list">
                                            {group.links.map((link) => (
                                                <li key={link.href}>
                                                    <FooterLink
                                                        href={link.href}
                                                        title={link.title}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                ))}
                            </div>
                        </nav>

                        {/* Column 3 — Contact + CTA */}
                        <div>
                            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/70">
                                Connect
                            </h3>

                            <div className="mb-8 flex flex-col gap-5">
                                <div>
                                    <p className="mb-1 text-xs font-bold uppercase tracking-wide text-white/70">
                                        Email
                                    </p>
                                    <a
                                        href={`mailto:${settings.contactEmail}`}
                                        className="text-base font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                    >
                                        {settings.contactEmail}
                                    </a>
                                </div>
                                <div>
                                    <p className="mb-1 text-xs font-bold uppercase tracking-wide text-white/70">
                                        Phone
                                    </p>
                                    <a
                                        href={`tel:${settings.phone}`}
                                        className="text-base font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                    >
                                        {settings.phone}
                                    </a>
                                </div>
                                <div>
                                    <p className="mb-1 text-xs font-bold uppercase tracking-wide text-white/70">
                                        Address
                                    </p>
                                    <address className="text-base font-semibold not-italic text-white">
                                        {settings.address}
                                    </address>
                                </div>
                                <div>
                                    <p className="mb-1 text-xs font-bold uppercase tracking-wide text-white/70">
                                        Social
                                    </p>
                                    <a
                                        href={settings.facebookUrl}
                                        target="_blank"
                                        rel="noopener"
                                        className="text-base font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                    >
                                        Facebook
                                    </a>
                                </div>
                            </div>

                            <form
                                action={PAYPAL_CGI_URL}
                                method="post"
                                target="_top"
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
                                    className="inline-flex min-h-[52px] cursor-pointer items-center gap-2 rounded-xl bg-hvorange-700 px-7 py-3.5 text-base font-bold text-white transition duration-150 hover:bg-hvorange-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
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

                            <p className="mt-3 text-xs text-white/70">
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
