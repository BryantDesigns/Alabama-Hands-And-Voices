'use client'
import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '@/services/firebase/auth'
import { useRouter } from 'next/navigation'

export default function AdminRouteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                router.push('/auth') // Redirect if not authenticated
            } else {
                setUser(currentUser)
            }
            setLoading(false)
        })

        return () => unsubscribe()
    }, [router])

    if (loading) {
        return (
            <p className="text-center text-gray-500">
                Checking authentication...
            </p>
        )
    }

    return <div>{children}</div>
}
