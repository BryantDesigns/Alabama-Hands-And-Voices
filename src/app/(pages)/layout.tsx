import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default function PagesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
