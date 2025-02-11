import PayPalDonation from '@/components/common/PayPalDonation'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-white text-black">
            {/* Donation Section */}
            <div className="border-t-4 border-hvorange bg-hvblue py-6 text-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
                    <h5 className="text-lg font-semibold">
                        Want to donate to our mission?
                    </h5>
                    <PayPalDonation />
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Logo Section */}
                    <div className="flex justify-center lg:justify-start">
                        <Image
                            src="/images/hvlogo.svg"
                            width={160}
                            height={150}
                            alt="Hands & Voices Logo"
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="text-center lg:text-left">
                        <h6 className="text-lg font-semibold uppercase">
                            Pages
                        </h6>
                        <hr className="mx-auto my-4 w-12 border-2 border-hvorange lg:mx-0" />
                        <ul className="space-y-2">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About', href: '/who-we-are' },
                                { name: 'Resources', href: '/resources' },
                                { name: 'Contact', href: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-700 transition-colors hover:text-hvorange"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            {/* External Link */}
                            <li>
                                <a
                                    href="assets/02_Parent%20Road%20Map.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 transition-colors hover:text-hvorange"
                                >
                                    Parent Road Map
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="text-center lg:text-left">
                        <h6 className="text-lg font-semibold uppercase">
                            Contact
                        </h6>
                        <hr className="mx-auto my-4 w-12 border-2 border-hvorange lg:mx-0" />
                        <p>
                            <i className="fas fa-home mr-2"></i> P.O. Box 130627
                            Birmingham, AL 35213
                        </p>
                        <p>
                            <i className="fas fa-envelope mr-2"></i>{' '}
                            <a
                                href="mailto:alabamahinfo@gmail.com"
                                className="transition-colors hover:text-hvorange"
                            >
                                alabamahinfo@gmail.com
                            </a>
                        </p>
                        <p>
                            <i className="fas fa-phone mr-2"></i> +1 205
                            677-3136
                        </p>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-secondary py-4 text-center text-sm text-gray-800">
                &copy; 2024 Hands & Voices | Designed by{' '}
                <a
                    href="#"
                    className="transition-colors hover:text-hvorange"
                >
                    Bryant Designs
                </a>
            </div>
        </footer>
    )
}
