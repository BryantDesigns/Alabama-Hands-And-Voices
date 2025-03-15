'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '@/services/firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Image from 'next/image'

export default function AuthPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSignIn = async () => {
        setLoading(true)
        setError('')
        try {
            await signInWithEmailAndPassword(auth, email, password)
            router.push('/admin') // Redirect after successful login
        } catch (err) {
            if (err instanceof Error) {
                setError('Invalid email or password.')
            } else {
                setError('An unknown error occurred.')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center bg-background px-6 py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image
                    alt="Hands & Voices Logo"
                    src="/images/hvlogo.svg"
                    width={80}
                    height={80}
                    className="mx-auto"
                />
                <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-hvblue">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                <div className="bg-white px-6 py-12 shadow-md sm:rounded-lg sm:px-12">
                    {error && (
                        <p className="mb-4 rounded-md bg-red-100 p-3 text-center text-sm text-red-600">
                            {error}
                        </p>
                    )}

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-6"
                    >
                        {/* Email Input */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-hvblue"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={loading}
                                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-hvorange focus:ring-hvorange sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-hvblue"
                            >
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    disabled={loading}
                                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-hvorange focus:ring-hvorange sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* Sign In Button */}
                        <div>
                            <button
                                onClick={handleSignIn}
                                disabled={loading}
                                className="flex w-full justify-center rounded-md bg-hvblue px-3 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-hvblue-400 focus:outline-none focus:ring-2 focus:ring-hvorange disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {loading ? 'Signing in...' : 'Sign In'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
