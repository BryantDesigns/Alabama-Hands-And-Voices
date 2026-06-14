import PublicStatusPage from '@/components/common/PublicStatusPage'

export default function NotFound() {
    return (
        <PublicStatusPage
            eyebrow="404"
            title="Page not found"
            description="The page may have moved or the address may be incorrect."
        />
    )
}
