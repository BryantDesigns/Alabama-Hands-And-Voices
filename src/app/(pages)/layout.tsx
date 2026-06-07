import Footer from '@/components/layout/Footer'
import OverlappingLogoHeader from '@/components/ui/examples/OverlappingLogoHeader'

export default function PagesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <OverlappingLogoHeader />
            {children}
            <Footer />
        </>
    )
}
