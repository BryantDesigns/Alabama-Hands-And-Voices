'use client'
import { useState } from 'react'
import { submitNetlifyForm } from '@/utils/submitNetlifyForm'

const MembershipForm = () => {
    const [status, setStatus] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    return (
        <section className="container mx-auto px-6 py-12">
            <p className="text-center text-lg">
                To become an Alabama Hands & Voices member, please fill out the form below.
            </p>

            <div className="mt-6">
                <form
                    method="POST"
                    name="membership"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={(event) =>
                        submitNetlifyForm(event, setStatus, setError)
                    }
                    className="mx-auto max-w-3xl rounded-3xl bg-white p-6 ring-1 ring-slate-200 md:p-8"
                >
                    {/* Netlify required fields */}
                    <input type="hidden" name="form-name" value="membership" />
                    <p className="hidden">
                        <label>
                            Don&apos;t fill this out if you&apos;re human:
                            <input
                                name="bot-field"
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </label>
                    </p>

                    <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* Parent/Guardian Name */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="inputName"
                                    className="block text-xs font-bold uppercase tracking-widest text-hvblue"
                                >
                                    Parent/Guardian Name:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputName"
                                        name="name"
                                        type="text"
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                    />
                                </div>
                            </div>
                            {/* Secondary Parent/Guardian Name */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="inputSecondaryName"
                                    className="block text-xs font-bold uppercase tracking-widest text-hvblue"
                                >
                                    Secondary Parent/Guardian Name:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputSecondaryName"
                                        name="secondary-name"
                                        type="text"
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                    />
                                </div>
                            </div>
                            {/* Phone Number */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="inputTel"
                                    className="block text-xs font-bold uppercase tracking-widest text-hvblue"
                                >
                                    Phone Number:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputTel"
                                        name="phone"
                                        type="tel"
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                    />
                                </div>
                            </div>
                            {/* Email */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="inputEmail"
                                    className="block text-xs font-bold uppercase tracking-widest text-hvblue"
                                >
                                    Email:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputEmail"
                                        name="email"
                                        type="email"
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                    />
                                </div>
                                <small className="text-sm text-gray-500">
                                    We&apos;ll never share your email with anyone else.
                                </small>
                            </div>
                            {/* Home Address */}
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label
                                    htmlFor="inputAddress"
                                    className="block text-xs font-bold uppercase tracking-widest text-hvblue"
                                >
                                    Home Address:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputAddress"
                                        name="address"
                                        type="text"
                                        placeholder="1234 Main St"
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                    />
                                </div>
                            </div>
                            {/* City */}
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="inputCity"
                                    className="block text-xs font-bold uppercase tracking-widest text-hvblue"
                                >
                                    City:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputCity"
                                        name="city"
                                        type="text"
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                    />
                                </div>
                            </div>
                            {/* Zip */}
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="inputZip"
                                    className="block text-xs font-bold uppercase tracking-widest text-hvblue"
                                >
                                    Zip:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputZip"
                                        name="zip"
                                        type="text"
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                    />
                                </div>
                            </div>
                            {/* School District */}
                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="inputSchoolDist"
                                    className="block text-xs font-bold uppercase tracking-widest text-hvblue"
                                >
                                    School Dist./BOCES:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputSchoolDist"
                                        name="school-dist"
                                        type="text"
                                        placeholder="School District"
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                    />
                                </div>
                            </div>
                            {/* Children Information */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="inputTextArea"
                                    className="block text-xs font-bold uppercase tracking-widest text-hvblue"
                                >
                                    Children (deaf/hh & siblings, ages):
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        name="children-info"
                                        id="inputTextArea"
                                        rows={3}
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                    />
                                </div>
                            </div>
                            {/* Membership Type */}
                            <div className="col-span-full">
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    Choose Your Membership:
                                </label>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            name="checkbox-one-parent"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                            type="checkbox"
                                            id="parentCheck"
                                        />
                                        <label
                                            htmlFor="parentCheck"
                                            className="ml-2 text-sm text-gray-900"
                                        >
                                            Parent, Student, DHH Adult
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="checkbox-two-professional"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                            type="checkbox"
                                            id="professionalCheck"
                                        />
                                        <label
                                            htmlFor="professionalCheck"
                                            className="ml-2 text-sm text-gray-900"
                                        >
                                            Professional
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="checkbox-three-org"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                            type="checkbox"
                                            id="organizationCheck"
                                        />
                                        <label
                                            htmlFor="organizationCheck"
                                            className="ml-2 text-sm text-gray-900"
                                        >
                                            Organization
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="checkbox-four-other"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                            type="checkbox"
                                            id="otherCheck"
                                        />
                                        <label
                                            htmlFor="otherCheck"
                                            className="ml-2 text-sm text-gray-900"
                                        >
                                            Other
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* Membership Donation */}
                            <div className="col-span-full">
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    Annual membership donation enclosed:
                                </label>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            name="membership-25"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                            type="checkbox"
                                            id="twentyFiveCheck"
                                        />
                                        <label
                                            htmlFor="twentyFiveCheck"
                                            className="ml-2 text-sm text-gray-900"
                                        >
                                            $25 Parent/DHH adult/Student
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="membership-40"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                            type="checkbox"
                                            id="fortyCheck"
                                        />
                                        <label
                                            htmlFor="fortyCheck"
                                            className="ml-2 text-sm text-gray-900"
                                        >
                                            $40 Professional
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="membership-50"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                            type="checkbox"
                                            id="fiftyCheck"
                                        />
                                        <label
                                            htmlFor="fiftyCheck"
                                            className="ml-2 text-sm text-gray-900"
                                        >
                                            $50 Organization
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="membership-donate"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                            type="checkbox"
                                            id="addDonateCheck"
                                        />
                                        <label
                                            htmlFor="addDonateCheck"
                                            className="ml-2 text-sm text-gray-900"
                                        >
                                            Additional Donation to Chapter to Help Cover Scholarships/Fee Waivers and Chapter Expenses (on next page)
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="membership-0"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                            type="checkbox"
                                            id="zeroCheck"
                                        />
                                        <label
                                            htmlFor="zeroCheck"
                                            className="ml-2 text-sm text-gray-900"
                                        >
                                            $0 Request Scholarship/Fee waiver
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer (Submit Button) */}
                    <div className="mt-8 flex flex-col items-center gap-2">
                        <button
                            type="button"
                            className="text-sm font-semibold text-gray-900"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-hvblue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-hvblue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hvblue-600"
                        >
                            Submit
                        </button>
                    </div>

                    {/* Status Messages */}
                    {status && (
                        <div
                            className="px-4 py-4 sm:px-8"
                            role="status"
                            aria-live="polite"
                        >
                            <div className="rounded-md bg-green-50 p-4">
                                <div className="text-sm text-green-700">{status}</div>
                            </div>
                        </div>
                    )}
                    {error && (
                        <div
                            className="px-4 py-4 sm:px-8"
                            role="alert"
                            aria-live="assertive"
                        >
                            <div className="rounded-md bg-red-50 p-4">
                                <div className="text-sm text-red-700">{error}</div>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </section>
    )
}

export default MembershipForm
