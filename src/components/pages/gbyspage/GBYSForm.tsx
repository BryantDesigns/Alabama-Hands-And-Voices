'use client'
import { useState } from 'react'

const GBYSForm = () => {
    const [activeTab, setActiveTab] = useState('personal')

    return (
        <section className="container mx-auto px-6 py-12">
            <p className="text-center text-lg">
                To be connected with a Parent Guide, please fill out the form
                below. To become an Alabama Hands & Voices member, visit the{' '}
                <a href="/membership" className="font-bold text-blue-600">
                    membership page
                </a>
                .
            </p>

            <div className="mt-6 flex justify-center space-x-4">
                <button
                    className={`border-b-2 px-4 py-2 font-medium ${
                        activeTab === 'personal'
                            ? 'border-blue-600 text-blue-600'
                            : 'text-gray-600'
                    }`}
                    onClick={() => setActiveTab('personal')}
                >
                    Personal
                </button>
                <button
                    className={`border-b-2 px-4 py-2 font-medium ${
                        activeTab === 'professional'
                            ? 'border-blue-600 text-blue-600'
                            : 'text-gray-600'
                    }`}
                    onClick={() => setActiveTab('professional')}
                >
                    Professional Referral
                </button>
            </div>

            <div className="mt-8">
                {activeTab === 'personal' ? (
                    <form
                        name="gbys-form"
                        method="POST"
                        data-netlify="true"
                        className="grid grid-cols-1 gap-6 md:grid-cols-2"
                    >
                        {/* Hidden input is required by Netlify */}
                        <input
                            type="hidden"
                            name="form-name"
                            value="gbys-form"
                        />

                        <div>
                            <label className="block font-medium">
                                Parent/Guardian Name
                            </label>
                            <input
                                type="text"
                                name="parentGuardianName"
                                className="w-full rounded-md border-gray-300 p-2"
                            />
                        </div>

                        <div>
                            <label className="block font-medium">
                                Secondary Parent/Guardian
                            </label>
                            <input
                                type="text"
                                name="secondaryParentGuardian"
                                className="w-full rounded-md border-gray-300 p-2"
                            />
                        </div>

                        <div>
                            <label className="block font-medium">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                className="w-full rounded-md border-gray-300 p-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium">
                                Child's Name
                            </label>
                            <input
                                type="text"
                                name="childName"
                                className="w-full rounded-md border-gray-300 p-2"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="col-span-2 rounded-md bg-blue-600 py-2 text-white"
                        >
                            Submit
                        </button>
                    </form>
                ) : (
                    <p className="text-center text-gray-700">
                        Professional referral form coming soon.
                    </p>
                )}
            </div>
        </section>
    )
}

export default GBYSForm
