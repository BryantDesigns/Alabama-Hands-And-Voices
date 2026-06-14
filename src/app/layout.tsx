import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE_NAME, SITE_URL, pageMetadata } from '@/lib/seo'
import './globals.css'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const kaushanScript = localFont({
    src: './fonts/KaushanScript-Regular.ttf',
    variable: '--font-kaushan-script',
    weight: '100 900',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`,
    },
    description: pageMetadata['/'].description,
    applicationName: SITE_NAME,
    openGraph: {
        type: 'website',
        url: '/',
        siteName: SITE_NAME,
        title: SITE_NAME,
        description: pageMetadata['/'].description,
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_NAME,
        description: pageMetadata['/'].description,
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="h-full bg-gray-50">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${kaushanScript.variable} h-full antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
