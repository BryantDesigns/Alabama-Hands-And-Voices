'use client'
import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import { auth } from '@/services/firebase/auth'
import { useRouter } from 'next/navigation'

export default function AdminRouteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            async (currentUser: User | null) => {
                if (currentUser) {
                    try {
                        // Retrieve token details.
                        const tokenResult = await currentUser.getIdTokenResult()
                        const expirationTime = new Date(
                            tokenResult.expirationTime
                        ).getTime()
                        const currentTime = Date.now()

                        // If the token is expired, sign out and redirect.
                        if (expirationTime < currentTime) {
                            await signOut(auth)
                            router.push('/auth')
                        } else {
                            setLoading(false)
                        }
                    } catch (error) {
                        console.error('Error checking token expiration:', error)
                        // On error, force sign out and redirect.
                        await signOut(auth)
                        router.push('/auth')
                    }
                } else {
                    router.push('/auth')
                    setLoading(false)
                }
            }
        )

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
