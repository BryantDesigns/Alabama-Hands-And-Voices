'use client'
import { useState } from 'react'
import { submitNetlifyForm } from '@/utils/submitNetlifyForm'


const GBYSForm = () => {
    const [activeTab, setActiveTab] = useState('personal')
    const [status, setStatus] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)


    return (
        <section className="container mx-auto px-6 py-12">
            <p className="text-center text-lg">
                To be connected with a Parent Guide, please fill out the form
                below. To become an Alabama Hands & Voices member, visit the{' '}
                <a href="/membership" className="font-bold text-hvorange">
                    membership page
                </a>
                .
            </p>

            <div className="mt-6 flex justify-center space-x-2">
                <button
                    className={`relative rounded-t-lg px-5 py-2 font-semibold transition-all duration-150 ${
                        activeTab === 'personal'
                            ? 'z-10 -mb-px border-b-0 border-l border-r border-t border-gray-900/5 bg-white text-hvorange'
                            : 'border-b-2 border-transparent bg-gray-100 text-gray-600 hover:border-hvorange-400 hover:bg-white hover:text-hvorange focus:border-hvorange-500 focus:text-hvorange'
                    } cursor-pointer outline-none`}
                    onClick={() => setActiveTab('personal')}
                    type="button"
                >
                    Personal
                </button>
                <button
                    className={`relative rounded-t-lg px-5 py-2 font-semibold transition-all duration-150 ${
                        activeTab === 'professional'
                            ? 'z-10 -mb-px border-b-0 border-l border-r border-t border-gray-900/5 bg-white text-hvorange'
                            : 'border-b-2 border-transparent bg-gray-100 text-gray-600 hover:border-hvorange-400 hover:bg-white hover:text-hvorange focus:border-hvorange-500 focus:text-hvorange'
                    } cursor-pointer outline-none`}
                    onClick={() => setActiveTab('professional')}
                    type="button"
                >
                    Professional Referral
                </button>
            </div>

            <div className="">
                {activeTab === 'personal' ? (
                    <form
                        method="POST"
                        name="gbys"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        onSubmit={(event) =>
                            submitNetlifyForm(event, setStatus, setError)
                        }
                        className="mx-auto max-w-5xl border border-gray-900/5 bg-white shadow-sm sm:rounded-xl md:col-span-2"
                    >
                        {/* Netlify required fields */}
                        <input type="hidden" name="form-name" value="gbys" />
                        <p className="hidden">
                            <label>
                                Don’t fill this out if you’re human:
                                <input
                                    name="bot-field"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </label>
                        </p>

                        <div className="px-4 py-6 sm:p-8">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                {/* Parent/Guardian Name */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="inputName"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Parent/Guardian Name:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputName"
                                            name="name"
                                            type="text"
                                            required
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                {/* Secondary Parent/Guardian Name */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="inputSecondary"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Secondary Parent/Guardian Name:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputSecondary"
                                            name="secondary-parent"
                                            type="text"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                {/* Child's Name */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="childs-name"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Child's Name:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="childs-name"
                                            name="childs-name"
                                            type="text"
                                            required
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                {/* Child's DOB */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="inputChildDOB"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Child's DOB:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputChildDOB"
                                            name="child-dob"
                                            type="date"
                                            required
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="inputEmail"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Email:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputEmail"
                                            name="email"
                                            type="email"
                                            required
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                        />
                                    </div>
                                    <small className="text-sm text-gray-500">
                                        We'll never share your email with anyone
                                        else.
                                    </small>
                                </div>
                                {/* Phone Number */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="inputTel"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Phone Number:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputTel"
                                            name="phone"
                                            type="tel"
                                            required
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                {/* Home Address */}
                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label
                                        htmlFor="inputAddress"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Home Address:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputAddress"
                                            name="address"
                                            type="text"
                                            placeholder="1234 Main St"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                {/* City */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="inputCity"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        City:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputCity"
                                            name="city"
                                            type="text"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                {/* Zip */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="inputZip"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Zip:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputZip"
                                            name="zip"
                                            type="text"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                {/* County */}
                                <div className="sm:col-span-6 md:col-span-3">
                                    <label
                                        htmlFor="inputCounty"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        County:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputCounty"
                                            name="county"
                                            type="text"
                                            placeholder="County"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                {/* Language Spoken in the Home */}
                                <div className="sm:col-span-6 md:col-span-3">
                                    <label
                                        htmlFor="inputLanguage"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Language Spoken in the Home:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputLanguage"
                                            name="language"
                                            type="text"
                                            placeholder="Language"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                {/* Type of Hearing Loss */}
                                <div className="sm:col-span-6 md:col-span-3">
                                    <label
                                        htmlFor="inputHearingLoss"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Type of Hearing Loss:
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="inputHearingLoss"
                                            name="hearing-loss"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                        >
                                            <option value="not-sure">
                                                Not Sure
                                            </option>
                                            <option value="conductive">
                                                Conductive (middle ear)
                                            </option>
                                            <option value="sensorineural">
                                                Sensorineural (inner ear)
                                            </option>
                                            <option value="mixed">
                                                Mixed (Conductive &amp;
                                                Sensorineural)
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                {/* Degree of Hearing Loss (left ear) */}
                                <div className="sm:col-span-6 md:col-span-3">
                                    <label
                                        htmlFor="inputDegreeLeft"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Degree of Hearing Loss (left ear):
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="inputDegreeLeft"
                                            name="degree-left"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                        >
                                            <option value="unsure">
                                                Unsure
                                            </option>
                                            <option value="normal">
                                                Normal
                                            </option>
                                            <option value="mild">Mild</option>
                                            <option value="moderate">
                                                Moderate
                                            </option>
                                            <option value="severe">
                                                Severe
                                            </option>
                                            <option value="profound">
                                                Profound
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                {/* Degree of Hearing Loss (right ear) */}
                                <div className="sm:col-span-6 md:col-span-3">
                                    <label
                                        htmlFor="inputDegreeRight"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Degree of Hearing Loss (right ear):
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="inputDegreeRight"
                                            name="degree-right"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                        >
                                            <option value="unsure">
                                                Unsure
                                            </option>
                                            <option value="normal">
                                                Normal
                                            </option>
                                            <option value="mild">Mild</option>
                                            <option value="moderate">
                                                Moderate
                                            </option>
                                            <option value="severe">
                                                Severe
                                            </option>
                                            <option value="profound">
                                                Profound
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                {/* Hearing device if used */}
                                <div className="sm:col-span-6 md:col-span-3">
                                    <label
                                        htmlFor="inputHearingDevice"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Hearing device if used:
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="inputHearingDevice"
                                            name="hearing-device"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                        >
                                            <option value="none">None</option>
                                            <option value="unsure">
                                                Unsure
                                            </option>
                                            <option value="hearing-aid">
                                                Hearing aid(s)
                                            </option>
                                            <option value="cochlear-implant">
                                                Cochlear Implant(s)
                                            </option>
                                            <option value="baha">
                                                Bone-anchored Hearing Aid(s)
                                                (BAHA)
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                {/* Communication modes */}
                                <div className="col-span-full">
                                    <label className="mb-2 block text-sm font-medium text-gray-900">
                                        Communication mode(s):
                                    </label>
                                    <div className="space-y-2">
                                        {/* ASL */}
                                        <div className="flex items-center">
                                            <input
                                                name="communication-mode-asl"
                                                className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
                                                type="checkbox"
                                                id="aslCheck"
                                            />
                                            <label
                                                htmlFor="aslCheck"
                                                className="ml-2 text-sm text-gray-900"
                                            >
                                                American Sign Language
                                            </label>
                                        </div>
                                        {/* Listening and Spoken Language */}
                                        <div className="flex items-center">
                                            <input
                                                name="communication-mode-listening"
                                                className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
                                                type="checkbox"
                                                id="listeningCheck"
                                            />
                                            <label
                                                htmlFor="listeningCheck"
                                                className="ml-2 text-sm text-gray-900"
                                            >
                                                Listening and Spoken Language
                                            </label>
                                        </div>
                                        {/* Fingerspelling */}
                                        <div className="flex items-center">
                                            <input
                                                name="communication-mode-fingerspelling"
                                                className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
                                                type="checkbox"
                                                id="fingerspellingCheck"
                                            />
                                            <label
                                                htmlFor="fingerspellingCheck"
                                                className="ml-2 text-sm text-gray-900"
                                            >
                                                Fingerspelling
                                            </label>
                                        </div>
                                        {/* Cued Speech */}
                                        <div className="flex items-center">
                                            <input
                                                name="communication-mode-cuedSpeech"
                                                className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
                                                type="checkbox"
                                                id="cuedSpeechCheck"
                                            />
                                            <label
                                                htmlFor="cuedSpeechCheck"
                                                className="ml-2 text-sm text-gray-900"
                                            >
                                                Cued Speech
                                            </label>
                                        </div>
                                        {/* Combination */}
                                        <div className="flex items-center">
                                            <input
                                                name="communication-mode-combination"
                                                className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
                                                type="checkbox"
                                                id="combinationCheck"
                                            />
                                            <label
                                                htmlFor="combinationCheck"
                                                className="ml-2 text-sm text-gray-900"
                                            >
                                                Combination of two or more:
                                            </label>
                                        </div>
                                        {/* Other */}
                                        <div className="flex items-center">
                                            <input
                                                name="communication-mode-other"
                                                className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
                                                type="checkbox"
                                                id="otherCheck"
                                            />
                                            <label
                                                htmlFor="otherCheck"
                                                className="ml-2 text-sm text-gray-900"
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
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Please provide initial parent
                                        questions/support requested, special
                                        needs or important information:
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            name="parent-questions"
                                            id="inputParentQuestions"
                                            rows={3}
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                        />
                                    </div>
                                    <small className="text-sm text-gray-500">
                                        I authorize Alabama Hands &amp; Voices
                                        to disclose to our Parent Guide(s) my
                                        name, contact information, name and age
                                        of my child so that a Parent Guide(s)
                                        may reach out to me regarding Alabama
                                        Hands &amp; Voices activities and
                                        resources and parent‐to‐parent support.
                                    </small>
                                </div>
                            </div>
                        </div>

                        {/* Footer (Submit Button) */}
                        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                            {/* Cancel button (optional) */}
                            <button
                                type="button"
                                className="text-sm font-semibold text-gray-900"
                                // onClick={() => ... } // optional: add a handler to close or reset the form
                            >
                                Cancel
                            </button>
                            {/* Submit button */}
                            <button
                                type="submit"
                                className="rounded-lg bg-hvblue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-hvblue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hvblue-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                ) : (
                    <form
                        method="post"
                        name="gbysref"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        onSubmit={(event) =>
                            submitNetlifyForm(event, setStatus, setError)
                        }
                        className="mx-auto max-w-5xl border border-gray-900/5 bg-white shadow-sm sm:rounded-xl md:col-span-2"
                    >
                        {/* Let Netlify know this is the gbysref form */}
                        <input type="hidden" name="form-name" value="gbysref" />
                        <p className="hidden">
                            <label>
                                Don’t fill this out if you’re human:
                                <input
                                    name="bot-field"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </label>
                        </p>

                        <div className="max-w-5xl px-4 py-6 sm:p-8">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                {/* Professionals Full Name */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="pr-ref-name"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Professionals Full Name:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="pr-ref-name"
                                            name="pr-ref-name"
                                            type="text"
                                            required
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                {/* Referral Role */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="pr-ref-role"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Referral Role:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="pr-ref-role"
                                            name="pr-ref-role"
                                            type="text"
                                            required
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                {/* Name */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="pr-name"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Name:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="pr-name"
                                            name="pr-name"
                                            type="text"
                                            required
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                {/* Phone Number */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="pr-phone"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Phone Number:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="pr-phone"
                                            name="pr-phone"
                                            type="tel"
                                            required
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                {/* Child's Name */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="pr-childs-name"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Child's Name:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="pr-childs-name"
                                            name="pr-childs-name"
                                            type="text"
                                            required
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="pr-email"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Email:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="pr-email"
                                            name="pr-email"
                                            type="email"
                                            required
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm/6"
                                        />
                                    </div>
                                    <small className="text-sm text-gray-500">
                                        We'll never share your email with anyone
                                        else.
                                    </small>
                                </div>
                                {/* Home Address */}
                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label
                                        htmlFor="pr-address"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Home Address:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="pr-address"
                                            name="pr-address"
                                            type="text"
                                            placeholder="1234 Main St"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                {/* City */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="pr-city"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        City:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="pr-city"
                                            name="pr-city"
                                            type="text"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                {/* Zip */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="pr-zip"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Zip:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="pr-zip"
                                            name="pr-zip"
                                            type="text"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                {/* County */}
                                <div className="sm:col-span-6 md:col-span-3">
                                    <label
                                        htmlFor="pr-county"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        County:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="pr-county"
                                            name="pr-county"
                                            type="text"
                                            placeholder="County"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                {/* Language Spoken in the Home */}
                                <div className="sm:col-span-6 md:col-span-3">
                                    <label
                                        htmlFor="pr-language"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Language Spoken in the Home:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="pr-language"
                                            name="pr-language"
                                            type="text"
                                            required
                                            placeholder="Language"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                {/* Type of Hearing Loss */}
                                <div className="sm:col-span-6 md:col-span-3">
                                    <label
                                        htmlFor="pr-hearing-loss"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Type of Hearing Loss:
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="pr-hearing-loss"
                                            name="pr-hearing-loss"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm/6"
                                        >
                                            <option value="not-sure">
                                                Not Sure
                                            </option>
                                            <option value="conductive">
                                                Conductive (middle ear)
                                            </option>
                                            <option value="sensorineural">
                                                Sensorineural (inner ear)
                                            </option>
                                            <option value="mixed">
                                                Mixed (Conductive &amp;
                                                Sensorineural)
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                {/* Degree of Hearing Loss (left ear) */}
                                <div className="sm:col-span-6 md:col-span-3">
                                    <label
                                        htmlFor="pr-degree-left"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Degree of Hearing Loss (left ear):
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="pr-degree-left"
                                            name="pr-degree-left"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm/6"
                                        >
                                            <option value="unsure">
                                                Unsure
                                            </option>
                                            <option value="normal">
                                                Normal
                                            </option>
                                            <option value="mild">Mild</option>
                                            <option value="moderate">
                                                Moderate
                                            </option>
                                            <option value="severe">
                                                Severe
                                            </option>
                                            <option value="profound">
                                                Profound
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                {/* Degree of Hearing Loss (right ear) */}
                                <div className="sm:col-span-6 md:col-span-3">
                                    <label
                                        htmlFor="pr-degree-right"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Degree of Hearing Loss (right ear):
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="pr-degree-right"
                                            name="pr-degree-right"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm/6"
                                        >
                                            <option value="unsure">
                                                Unsure
                                            </option>
                                            <option value="normal">
                                                Normal
                                            </option>
                                            <option value="mild">Mild</option>
                                            <option value="moderate">
                                                Moderate
                                            </option>
                                            <option value="severe">
                                                Severe
                                            </option>
                                            <option value="profound">
                                                Profound
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                {/* Hearing device */}
                                <div className="sm:col-span-6 md:col-span-3">
                                    <label
                                        htmlFor="pr-hearing-device"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Hearing device if used:
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="pr-hearing-device"
                                            name="pr-hearing-device"
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm/6"
                                        >
                                            <option value="none">None</option>
                                            <option value="unsure">
                                                Unsure
                                            </option>
                                            <option value="hearing-aid">
                                                Hearing aid(s)
                                            </option>
                                            <option value="cochlear-implant">
                                                Cochlear Implant(s)
                                            </option>
                                            <option value="baha">
                                                Bone-anchored Hearing Aid(s)
                                                (BAHA)
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                {/* Communication modes */}
                                <div className="col-span-full">
                                    <label className="mb-2 block text-sm/6 font-medium text-gray-900">
                                        Communication mode(s):
                                    </label>
                                    <div className="space-y-2">
                                        {/* ASL */}
                                        <div className="flex items-center">
                                            <input
                                                name="pr-communication-mode-asl"
                                                className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
                                                type="checkbox"
                                                id="aslCheck"
                                            />
                                            <label
                                                htmlFor="aslCheck"
                                                className="ml-2 text-sm text-gray-900"
                                            >
                                                American Sign Language
                                            </label>
                                        </div>
                                        {/* Listening and Spoken Language */}
                                        <div className="flex items-center">
                                            <input
                                                name="pr-communication-mode-listening"
                                                className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
                                                type="checkbox"
                                                id="listeningCheck"
                                            />
                                            <label
                                                htmlFor="listeningCheck"
                                                className="ml-2 text-sm text-gray-900"
                                            >
                                                Listening and Spoken Language
                                            </label>
                                        </div>
                                        {/* Fingerspelling */}
                                        <div className="flex items-center">
                                            <input
                                                name="pr-communication-mode-fingerspelling"
                                                className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
                                                type="checkbox"
                                                id="fingerspellingCheck"
                                            />
                                            <label
                                                htmlFor="fingerspellingCheck"
                                                className="ml-2 text-sm text-gray-900"
                                            >
                                                Fingerspelling
                                            </label>
                                        </div>
                                        {/* Cued Speech */}
                                        <div className="flex items-center">
                                            <input
                                                name="pr-communication-mode-cuedSpeech"
                                                className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
                                                type="checkbox"
                                                id="cuedSpeechCheck"
                                            />
                                            <label
                                                htmlFor="cuedSpeechCheck"
                                                className="ml-2 text-sm text-gray-900"
                                            >
                                                Cued Speech
                                            </label>
                                        </div>
                                        {/* Combination */}
                                        <div className="flex items-center">
                                            <input
                                                name="pr-communication-mode-combination"
                                                className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
                                                type="checkbox"
                                                id="combinationCheck"
                                            />
                                            <label
                                                htmlFor="combinationCheck"
                                                className="ml-2 text-sm text-gray-900"
                                            >
                                                Combination of two or more
                                            </label>
                                        </div>
                                        {/* Other */}
                                        <div className="flex items-center">
                                            <input
                                                name="pr-communication-mode-other"
                                                className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
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
                                {/* Parent Questions */}
                                <div className="col-span-full">
                                    <label
                                        htmlFor="pr-parent-questions"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Please provide initial parent
                                        questions/support requested, special
                                        needs or important information:
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            name="pr-parent-questions"
                                            id="pr-parent-questions"
                                            rows={3}
                                            className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm/6"
                                        />
                                    </div>
                                    <small className="text-sm text-gray-500">
                                        I authorize Alabama Hands &amp; Voices
                                        to disclose to our Parent Guide(s) my
                                        name, contact information, name and age
                                        of my child so that a Parent Guide(s)
                                        may reach out to me regarding Alabama
                                        Hands &amp; Voices activities and
                                        resources and parent‐to‐parent support.
                                    </small>
                                </div>
                            </div>
                        </div>
                        {/* Footer (Submit Button) */}
                        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                            {/* Cancel button (optional) */}
                            <button
                                type="button"
                                className="text-sm/6 font-semibold text-gray-900"
                                tabIndex={-1}
                            >
                                Cancel
                            </button>
                            {/* Submit button */}
                            <button
                                type="submit"
                                className="rounded-lg bg-hvblue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-hvblue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hvblue-600"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    )
}

export default GBYSForm
