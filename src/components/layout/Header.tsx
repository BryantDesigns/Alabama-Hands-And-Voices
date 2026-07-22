'use client'

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import type { NavigationContent } from '@/types/cms'

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

const plainLinks = [
    { label: 'Resources', href: '/resources' },
    { label: 'Membership', href: '/membership' },
    { label: 'FAQ', href: '/faq' },
]

function FacebookIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
        >
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.435H7.078v-3.492h3.047V9.414c0-3.027 1.792-4.7 4.533-4.7 1.312 0 2.686.236 2.686.236v2.974h-1.513c-1.49 0-1.956.931-1.956 1.887v2.262h3.328l-.532 3.492h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
        </svg>
    )
}

export default function Header({
    navigation,
    facebookUrl,
}: {
    navigation: NavigationContent
    facebookUrl: string
}) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()
    const menuRef = useRef<HTMLDivElement>(null)
    const toggleRef = useRef<HTMLButtonElement>(null)
    const about = aboutLinks(navigation)
    const programs = [
        {
            title: 'All Programs',
            description: 'Overview of everything we offer.',
            href: '/programs',
        },
        ...programLinks(navigation),
    ]

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 4)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (!menuOpen) return
        const handleClick = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                toggleRef.current &&
                !toggleRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [menuOpen])

    const closeMenu = () => setMenuOpen(false)

    const isActive = (href: string) => {
        if (href === '/') return pathname === href
        return pathname.startsWith(href)
    }

    const desktopLinkClasses = (active: boolean) =>
        `relative flex h-20 items-center px-4 text-sm font-bold uppercase tracking-wide transition-colors duration-150 focus-visible:outline-hidden focus-visible:inset-ring-2 focus-visible:inset-ring-hvorange-600 lg:px-5 lg:text-base ${
            active ? 'text-hvblue' : 'text-slate-500 hover:text-hvblue'
        }`

    const activeIndicator = (active: boolean) => (
        <span
            aria-hidden="true"
            className={`absolute inset-x-4 bottom-0 h-[3px] rounded-t-full bg-hvorange-600 transition-transform duration-200 lg:inset-x-5 ${
                active ? 'scale-x-100' : 'scale-x-0'
            }`}
        />
    )

    const mobileLinkClasses = (active: boolean) =>
        `flex min-h-[52px] w-full items-center gap-3 border-b border-slate-100 text-base font-bold uppercase tracking-wide transition-colors duration-150 focus-visible:outline-hidden focus-visible:inset-ring-2 focus-visible:inset-ring-hvorange-600 ${
            active ? 'text-hvblue' : 'text-slate-500 hover:text-hvblue'
        }`

    const mobileActiveIndicator = (active: boolean) => (
        <span
            aria-hidden="true"
            className={`h-2 w-2 shrink-0 rounded-sm transition-colors duration-150 ${
                active ? 'bg-hvorange-600' : 'bg-transparent'
            }`}
        />
    )

    return (
        <header
            className={`sticky top-0 z-40 bg-white transition-all duration-200 ${
                scrolled
                    ? 'shadow-[0_2px_16px_rgba(20,27,75,0.12)]'
                    : 'shadow-none'
            }`}
        >
                {/* Structural left-edge accent — geometric marker */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-hvorange-600"
                />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <nav
                        aria-label="Main navigation"
                        className="flex h-16 items-center justify-between md:h-20"
                    >
                        {/* ── Logo + wordmark ── */}
                        <Link
                            href="/"
                            aria-label="Alabama Hands & Voices — home"
                            className="group flex shrink-0 items-center gap-3 pl-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                        >
                            <Image
                                src="/images/alabamahvlogo.svg"
                                alt="Alabama Hands & Voices logo"
                                width={148}
                                height={48}
                                className="h-10 w-auto transition-opacity duration-150 group-hover:opacity-80 md:h-12"
                                priority
                            />
                        </Link>

                        {/* ── Desktop nav ── */}
                        <PopoverGroup className="hidden items-center gap-0 md:flex">
                            <Link href="/" className={desktopLinkClasses(isActive('/'))}>
                                Home
                                {activeIndicator(isActive('/'))}
                            </Link>

                            <Popover className="relative">
                                {({ close }) => (
                                    <>
                                        <PopoverButton
                                            className={desktopLinkClasses(
                                                isActive('/about')
                                            )}
                                        >
                                            About
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="ml-1 h-4 w-4 shrink-0"
                                            />
                                            {activeIndicator(
                                                isActive('/about')
                                            )}
                                        </PopoverButton>
                                        <PopoverPanel className="absolute left-0 top-full z-50 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-slate-200">
                                            {about.map((item) => (
                                                <div
                                                    key={item.href}
                                                    className="rounded-xl p-4 hover:bg-slate-50"
                                                >
                                                    <Link
                                                        href={item.href}
                                                        onClick={() => close()}
                                                        className="block text-sm font-bold text-hvblue focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                                    >
                                                        {item.title}
                                                    </Link>
                                                    <p className="mt-1 text-sm text-slate-500">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </PopoverPanel>
                                    </>
                                )}
                            </Popover>

                            <Popover className="relative">
                                {({ close }) => (
                                    <>
                                        <PopoverButton
                                            className={desktopLinkClasses(
                                                isActive('/programs')
                                            )}
                                        >
                                            Programs
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="ml-1 h-4 w-4 shrink-0"
                                            />
                                            {activeIndicator(
                                                isActive('/programs')
                                            )}
                                        </PopoverButton>
                                        <PopoverPanel className="absolute left-0 top-full z-50 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-slate-200">
                                            {programs.map((item) => (
                                                <div
                                                    key={item.href}
                                                    className="rounded-xl p-4 hover:bg-slate-50"
                                                >
                                                    <Link
                                                        href={item.href}
                                                        onClick={() => close()}
                                                        className="block text-sm font-bold text-hvblue focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                                    >
                                                        {item.title}
                                                    </Link>
                                                    <p className="mt-1 text-sm text-slate-500">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </PopoverPanel>
                                    </>
                                )}
                            </Popover>

                            {plainLinks.map((link) => {
                                const active = isActive(link.href)
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={desktopLinkClasses(active)}
                                    >
                                        {link.label}
                                        {activeIndicator(active)}
                                    </Link>
                                )
                            })}
                        </PopoverGroup>

                        {/* ── Desktop CTA ── */}
                        <div className="hidden items-center gap-3 md:flex">
                            <a
                                href={facebookUrl}
                                aria-label="Alabama Hands & Voices on Facebook"
                                target="_blank"
                                rel="noopener"
                                className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-500 transition-colors duration-150 hover:bg-hvblue/5 hover:text-hvblue focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            >
                                <FacebookIcon />
                            </a>
                            <Link
                                href="/membership"
                                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-hvblue px-6 py-2.5 text-sm font-bold text-white transition duration-150 hover:bg-hvblue-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvblue focus-visible:ring-offset-2 lg:px-7 lg:py-3 lg:text-base"
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
                                Donate
                            </Link>
                        </div>

                        {/* ── Mobile hamburger ── */}
                        <button
                            ref={toggleRef}
                            type="button"
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                            aria-controls="v3-mobile-menu"
                            onClick={() => setMenuOpen((previous) => !previous)}
                            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl text-hvblue transition-colors duration-150 hover:bg-hvblue/5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 md:hidden"
                        >
                            <span aria-hidden="true" className="block">
                                {menuOpen ? (
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                    </svg>
                                )}
                            </span>
                        </button>
                    </nav>
                </div>

                {/* Bottom border — structural separator */}
                <div className="h-[2px] w-full bg-slate-100" />

            {/* ── Mobile menu panel ── */}
            {menuOpen && (
                <div
                    ref={menuRef}
                    id="v3-mobile-menu"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Navigation menu"
                    className="fixed inset-x-0 top-[calc(4rem+6px)] z-30 max-h-[calc(100vh-4rem-6px)] overflow-y-auto border-b-2 border-slate-100 bg-white md:hidden"
                >
                    {/* Orange left-edge accent carries through to mobile panel */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-hvorange-600"
                    />

                    <nav
                        aria-label="Mobile navigation"
                        className="mx-auto max-w-7xl px-6 py-4"
                    >
                        <ul className="space-y-0" role="list">
                            <li>
                                <Link
                                    href="/"
                                    onClick={closeMenu}
                                    className={mobileLinkClasses(isActive('/'))}
                                >
                                    {mobileActiveIndicator(isActive('/'))}
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton
                                                className={`${mobileLinkClasses(
                                                    isActive('/about')
                                                )} cursor-pointer justify-between`}
                                            >
                                                <span className="flex items-center gap-3">
                                                    {mobileActiveIndicator(
                                                        isActive('/about')
                                                    )}
                                                    About
                                                </span>
                                                <ChevronDownIcon
                                                    aria-hidden="true"
                                                    className={`h-5 w-5 shrink-0 transition-transform duration-150 ${
                                                        open
                                                            ? 'rotate-180'
                                                            : 'rotate-0'
                                                    }`}
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="border-b border-slate-100 py-2 pl-5">
                                                {about.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={closeMenu}
                                                        className="flex min-h-[44px] items-center text-sm font-bold text-slate-600 transition-colors hover:text-hvblue focus-visible:outline-hidden focus-visible:inset-ring-2 focus-visible:inset-ring-hvorange-600"
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            </li>

                            <li>
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton
                                                className={`${mobileLinkClasses(
                                                    isActive('/programs')
                                                )} cursor-pointer justify-between`}
                                            >
                                                <span className="flex items-center gap-3">
                                                    {mobileActiveIndicator(
                                                        isActive('/programs')
                                                    )}
                                                    Programs
                                                </span>
                                                <ChevronDownIcon
                                                    aria-hidden="true"
                                                    className={`h-5 w-5 shrink-0 transition-transform duration-150 ${
                                                        open
                                                            ? 'rotate-180'
                                                            : 'rotate-0'
                                                    }`}
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="border-b border-slate-100 py-2 pl-5">
                                                {programs.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={closeMenu}
                                                        className="flex min-h-[44px] items-center text-sm font-bold text-slate-600 transition-colors hover:text-hvblue focus-visible:outline-hidden focus-visible:inset-ring-2 focus-visible:inset-ring-hvorange-600"
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            </li>

                            {plainLinks.map((link) => {
                                const active = isActive(link.href)
                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={closeMenu}
                                            className={mobileLinkClasses(active)}
                                        >
                                            {mobileActiveIndicator(active)}
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        {/* Mobile CTA — full-width, bold */}
                        <div className="mt-5 flex flex-col gap-3 pb-2">
                            <Link
                                href="/membership"
                                onClick={closeMenu}
                                className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-hvblue px-6 py-3.5 text-base font-bold text-white transition duration-150 hover:bg-hvblue-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvblue focus-visible:ring-offset-2"
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
                            </Link>
                            <a
                                href={facebookUrl}
                                aria-label="Alabama Hands & Voices on Facebook"
                                target="_blank"
                                rel="noopener"
                                onClick={closeMenu}
                                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl text-base font-bold text-hvblue transition-colors hover:bg-hvblue/5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            >
                                <FacebookIcon />
                                Facebook
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}
