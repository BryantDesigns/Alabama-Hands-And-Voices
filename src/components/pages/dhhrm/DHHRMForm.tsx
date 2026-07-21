'use client'
import { useState } from 'react'
import { submitNetlifyForm } from '@/utils/submitNetlifyForm'

const DHHRMForm = () => {
    const [status, setStatus] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    return (
        <form
            method="POST"
            name="dhhrm"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={(event) => submitNetlifyForm(event, setStatus, setError)}
            aria-label="Connect with a D/HH Committee member"
            className="mx-auto max-w-3xl rounded-3xl bg-white p-6 ring-1 ring-slate-200 md:p-8"
        >
            {/* Netlify required fields */}
            <input type="hidden" name="form-name" value="dhhrm" />
            <p className="hidden">
                <label>
                    Don&apos;t fill this out if you&apos;re human:
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
            </p>

            <div className="space-y-4">
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                    {/* Name */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="inputName"
                            className="block text-xs font-bold uppercase tracking-widest text-hvblue"
                        >
                            Name:
                        </label>
                        <div className="mt-2">
                            <input
                                id="inputName"
                                name="name"
                                type="text"
                                required
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            />
                        </div>
                    </div>
                    {/* Phone Number */}
                    <div className="sm:col-span-2">
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
                                required
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            />
                        </div>
                    </div>
                    {/* Email */}
                    <div className="sm:col-span-2">
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
                                required
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            />
                        </div>
                        <small className="mt-1.5 block text-sm text-slate-600">
                            We&apos;ll never share your email with anyone else.
                        </small>
                    </div>
                    {/* Child's Name */}
                    <div className="sm:col-span-3">
                        <label
                            htmlFor="childs-name"
                            className="block text-xs font-bold uppercase tracking-widest text-hvblue"
                        >
                            Child&apos;s Name:
                        </label>
                        <div className="mt-2">
                            <input
                                id="childs-name"
                                name="childs-name"
                                type="text"
                                required
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            />
                        </div>
                    </div>
                    {/* Child's DOB */}
                    <div className="sm:col-span-3">
                        <label
                            htmlFor="childs-dob"
                            className="block text-xs font-bold uppercase tracking-widest text-hvblue"
                        >
                            Child&apos;s DOB:
                        </label>
                        <div className="mt-2">
                            <input
                                id="childs-dob"
                                name="childs-dob"
                                type="date"
                                required
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            />
                        </div>
                    </div>
                    {/* Communication modes */}
                    <div className="col-span-full">
                        <label className="block border-b-2 border-slate-200 pb-2 text-sm font-bold uppercase tracking-widest text-hvblue">
                            Primary Mode of Communication or Language:
                        </label>
                        <div className="space-y-2">
                            <div className="flex min-h-[44px] items-center rounded-lg px-3 py-2 transition hover:bg-slate-50">
                                <input
                                    name="communication-mode-asl"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                    type="checkbox"
                                    id="aslCheck"
                                />
                                <label
                                    htmlFor="aslCheck"
                                    className="ml-2 cursor-pointer text-sm font-medium text-slate-700"
                                >
                                    American Sign Language
                                </label>
                            </div>
                            <div className="flex min-h-[44px] items-center rounded-lg px-3 py-2 transition hover:bg-slate-50">
                                <input
                                    name="communication-mode-listening"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                    type="checkbox"
                                    id="listeningCheck"
                                />
                                <label
                                    htmlFor="listeningCheck"
                                    className="ml-2 cursor-pointer text-sm font-medium text-slate-700"
                                >
                                    Listening and Spoken Language
                                </label>
                            </div>
                            <div className="flex min-h-[44px] items-center rounded-lg px-3 py-2 transition hover:bg-slate-50">
                                <input
                                    name="communication-mode-fingerspelling"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                    type="checkbox"
                                    id="fingerspellingCheck"
                                />
                                <label
                                    htmlFor="fingerspellingCheck"
                                    className="ml-2 cursor-pointer text-sm font-medium text-slate-700"
                                >
                                    Fingerspelling
                                </label>
                            </div>
                            <div className="flex min-h-[44px] items-center rounded-lg px-3 py-2 transition hover:bg-slate-50">
                                <input
                                    name="communication-mode-cuedSpeech"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                    type="checkbox"
                                    id="cuedSpeechCheck"
                                />
                                <label
                                    htmlFor="cuedSpeechCheck"
                                    className="ml-2 cursor-pointer text-sm font-medium text-slate-700"
                                >
                                    Cued Speech
                                </label>
                            </div>
                            <div className="flex min-h-[44px] items-center rounded-lg px-3 py-2 transition hover:bg-slate-50">
                                <input
                                    name="communication-mode-combination"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                    type="checkbox"
                                    id="combinationCheck"
                                />
                                <label
                                    htmlFor="combinationCheck"
                                    className="ml-2 cursor-pointer text-sm font-medium text-slate-700"
                                >
                                    Combination of two or more:
                                </label>
                            </div>
                            <div className="flex min-h-[44px] items-center rounded-lg px-3 py-2 transition hover:bg-slate-50">
                                <input
                                    name="communication-mode-other"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                    type="checkbox"
                                    id="otherCheck"
                                />
                                <label
                                    htmlFor="otherCheck"
                                    className="ml-2 cursor-pointer text-sm font-medium text-slate-700"
                                >
                                    Other:
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* Parent Questions */}
                    <div className="col-span-full">
                        <label
                            htmlFor="inputParentQuestions"
                            className="block text-xs font-bold uppercase tracking-widest text-hvblue"
                        >
                            Please summarize any concerns or information that
                            would be helpful to a D/HH Committee Member:
                        </label>
                        <div className="mt-2">
                            <textarea
                                name="parent-questions"
                                id="inputParentQuestions"
                                rows={3}
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            />
                        </div>
                        <small className="mt-1.5 block text-sm text-slate-600">
                            I authorize Alabama Hands &amp; Voices to disclose
                            to our Parent Guide(s) my name, contact information,
                            name and age of my child so that a Parent Guide(s)
                            may reach out to me regarding Alabama Hands &amp;
                            Voices activities and resources and parent‐to‐parent
                            support.
                        </small>
                    </div>
                </div>
            </div>

            {/* Footer (Submit Button) */}
            <div className="mt-8 flex flex-col items-center gap-2">
                <button
                    type="button"
                    className="cursor-pointer rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvblue focus-visible:ring-offset-2"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="inline-flex min-h-[44px] cursor-pointer items-center rounded-xl bg-hvorange-700 px-7 py-3.5 text-base font-bold text-white transition hover:bg-hvorange-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-2"
                >
                    Submit
                </button>
            </div>

            {/* Status Messages */}
            {status && (
                <div className="mt-6" role="status" aria-live="polite">
                    <div className="rounded-xl bg-green-50 p-4 ring-1 ring-green-200">
                        <div className="text-sm font-medium text-green-800">
                            {status}
                        </div>
                    </div>
                </div>
            )}
            {error && (
                <div className="mt-6" role="alert" aria-live="assertive">
                    <div className="rounded-xl bg-red-50 p-4 ring-1 ring-red-200">
                        <div className="text-sm font-medium text-red-800">
                            {error}
                        </div>
                    </div>
                </div>
            )}
        </form>
    )
}

export default DHHRMForm
