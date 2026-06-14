'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {
    ChevronDownIcon,
} from '@heroicons/react/20/solid'
import Logo from '@/components/ui/Logo'
import Link from 'next/link'

const about = [
    {
        name: 'Who We Are',
        href: '/about',
        description:
            'Discover our mission, vision, and values, and learn how we empower families and communities.',
    },
    {
        name: 'Board Members',
        href: '/about/board',
        description:
            'Meet the dedicated individuals on our board who guide our organization\'s efforts and impact.',
    },
    {
        name: 'Staff',
        href: '/about/staff',
        description:
            'Get to know the passionate team working behind the scenes to support our mission and programs.',
    },
    {
        name: 'Contact',
        href: '/about/contact',
        description:
            'Reach out to us with any questions, inquiries, or feedback. We\'re here to help!',
    },
]

const programs = [
    {
        name: 'Guide By Your Side (GBYS)',
        href: '/programs/gbys',
        icon: ChartPieIcon,
        description:
            'Learn about our family support program offering parent-to-parent connections and resources.',
    },
    {
        name: 'Educational Advocacy (ASTra)',
        href: '/programs/astra',
        icon: CursorArrowRaysIcon,
        description:
            'Explore our Advocacy, Support, and Training program designed to empower families in educational advocacy.',
    },
    {
        name: "O.U.R. Children's Safety Project",
        href: '/programs/safety',
        icon: FingerPrintIcon,
        description:
            'Discover resources and strategies to ensure safety and preparedness for children and families.',
    },
    {
        name: 'DHH Committee Members',
        href: '/programs/dhh-committee',
        icon: SquaresPlusIcon,
        description:
            'Connect with role models who provide inspiration and guidance for children who are deaf or hard of hearing.',
    },
]

export default function TwoTierHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="relative isolate z-10 bg-white">
            {/* Top Tier - Logo and Social */}
            <div className="bg-gray-100 py-3">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
                    <div className="flex items-center">
                        <Link href="/" aria-label="Home">
                            <Logo className="h-16 w-auto" />
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://www.facebook.com/alabamahandsandvoices/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-hvorange-600 transition-colors hover:text-hvorange-700"
                        >
                            <span className="sr-only">Facebook</span>
                            <svg
                                className="h-8 w-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Tier - Navigation */}
            <div className="bg-hvblue-600">
                <nav
                    aria-label="Global"
                    className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
                >
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>

                    <PopoverGroup className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-8">
                        <Link
                            href="/"
                            className="py-4 text-sm/6 font-semibold text-white hover:text-gray-200"
                        >
                            Home
                        </Link>

                        {/* About Us Dropdown */}
                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 py-4 text-sm/6 font-semibold text-white hover:text-gray-200">
                                About Us
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="size-5 flex-none text-gray-400"
                                />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-leave:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                {about.map((item) => (
                                    <div
                                        key={item.name}
                                        className="relative rounded-lg p-4 hover:bg-gray-50"
                                    >
                                        <a
                                            href={item.href}
                                            className="block text-sm/6 font-semibold text-gray-900"
                                        >
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </a>
                                        <p className="mt-1 text-sm/6 text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </PopoverPanel>
                        </Popover>

                        {/* Programs Dropdown */}
                        <Popover>
                            <PopoverButton className="flex items-center gap-x-1 py-4 text-sm/6 font-semibold text-white hover:text-gray-200">
                                Programs
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="size-5 flex-none text-gray-400"
                                />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute inset-x-0 top-full z-10 bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-leave:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-6 py-10 lg:grid-cols-4 lg:px-8 xl:gap-x-8">
                                    {programs.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50"
                                        >
                                            <div className="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon
                                                    aria-hidden="true"
                                                    className="size-6 text-gray-600 group-hover:text-hvorange-600"
                                                />
                                            </div>
                                            <a
                                                href={item.href}
                                                className="mt-6 block font-semibold text-gray-900"
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Popover>

                        <Link
                            href="/resources"
                            className="py-4 text-sm/6 font-semibold text-white hover:text-gray-200"
                        >
                            Resources
                        </Link>
                        <Link
                            href="/membership"
                            className="py-4 text-sm/6 font-semibold text-white hover:text-gray-200"
                        >
                            Membership
                        </Link>
                        <Link
                            href="/faq"
                            className="py-4 text-sm/6 font-semibold text-white hover:text-gray-200"
                        >
                            FAQ
                        </Link>
                    </PopoverGroup>
                </nav>
            </div>

            {/* Mobile Menu */}
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" aria-label="Home">
                            <Logo className="h-12 w-auto" />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    href="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </Link>

                                {/* About Us Mobile Dropdown */}
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                                About Us
                                                <ChevronDownIcon
                                                    aria-hidden="true"
                                                    className={`size-5 flex-none transform transition-transform ${
                                                        open ? 'rotate-180' : ''
                                                    }`}
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {about.map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>

                                {/* Programs Mobile Dropdown */}
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                                Programs
                                                <ChevronDownIcon
                                                    aria-hidden="true"
                                                    className={`size-5 flex-none transform transition-transform ${
                                                        open ? 'rotate-180' : ''
                                                    }`}
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {programs.map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>

                                <Link
                                    href="/resources"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Resources
                                </Link>
                                <Link
                                    href="/membership"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Membership
                                </Link>
                                <Link
                                    href="/faq"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    FAQ
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
