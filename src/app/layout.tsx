import type { Metadata } from 'next'
import localFont from 'next/font/local'
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
    title: 'Alabama Hands & Voices',
    description: 'Alabama Hands & Voices — empowering families of children who are deaf or hard of hearing through parent-to-parent support, education, and advocacy.',
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
