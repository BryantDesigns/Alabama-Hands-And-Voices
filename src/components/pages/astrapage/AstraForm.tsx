'use client'
import { useState } from 'react'
import { submitNetlifyForm } from '@/utils/submitNetlifyForm'

const AstraForm = () => {
    const [status, setStatus] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    return (
        <section className="container mx-auto px-6 py-12">
            <p className="text-center text-lg">
                To request an ASTra advocate for support, please fill out the form below.
            </p>

            <div className="mt-6">
                <form
                    method="POST"
                    name="astra"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={(event) =>
                        submitNetlifyForm(event, setStatus, setError)
                    }
                    className="mx-auto max-w-5xl border border-gray-900/5 bg-white shadow-sm sm:rounded-xl"
                >
                    {/* Netlify required fields */}
                    <input type="hidden" name="form-name" value="astra" />
                    <p className="hidden">
                        <label>
                            Don't fill this out if you're human:
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
                            {/* Phone Number */}
                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="inputTel"
                                    className="block text-sm font-medium text-gray-900"
                                >
                                    Phone Number:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputTel"
                                        name="phone_number"
                                        type="tel"
                                        required
                                        className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/* Email */}
                            <div className="sm:col-span-6">
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
                                    We'll never share your email with anyone else.
                                </small>
                            </div>
                            {/* Student Name */}
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="inputStudentName"
                                    className="block text-sm font-medium text-gray-900"
                                >
                                    Student Name:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputStudentName"
                                        name="student_name"
                                        type="text"
                                        placeholder="Enter student name"
                                        required
                                        className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/* Student Age */}
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="inputAge"
                                    className="block text-sm font-medium text-gray-900"
                                >
                                    Student's Age:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputAge"
                                        name="student_age"
                                        type="text"
                                        placeholder="Enter student age"
                                        className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/* Student Grade */}
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="inputGrade"
                                    className="block text-sm font-medium text-gray-900"
                                >
                                    Student's Grade:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputGrade"
                                        name="student_grade"
                                        type="text"
                                        placeholder="Enter student grade"
                                        className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/* School District */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="inputSchoolDistrict"
                                    className="block text-sm font-medium text-gray-900"
                                >
                                    School District:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputSchoolDistrict"
                                        name="school_district"
                                        type="text"
                                        placeholder="School District"
                                        className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/* School */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="inputSchool"
                                    className="block text-sm font-medium text-gray-900"
                                >
                                    School:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputSchool"
                                        name="school"
                                        type="text"
                                        placeholder="School"
                                        className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/* Case Manager Name */}
                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="inputCaseManagerName"
                                    className="block text-sm font-medium text-gray-900"
                                >
                                    Case Manager Name:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputCaseManagerName"
                                        name="case_manager_name"
                                        type="text"
                                        className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/* IEP/504 Status */}
                            <div className="col-span-full">
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    Does your child have an IEP or a 504:
                                </label>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            name="communication_mode_iep"
                                            className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
                                            type="checkbox"
                                            id="iepCheck"
                                        />
                                        <label
                                            htmlFor="iepCheck"
                                            className="ml-2 text-sm text-gray-900"
                                        >
                                            IEP
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="communication_mode_504"
                                            className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
                                            type="checkbox"
                                            id="plan504Check"
                                        />
                                        <label
                                            htmlFor="plan504Check"
                                            className="ml-2 text-sm text-gray-900"
                                        >
                                            504
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="communication_mode_evaluation"
                                            className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
                                            type="checkbox"
                                            id="evaluationCheck"
                                        />
                                        <label
                                            htmlFor="evaluationCheck"
                                            className="ml-2 text-sm text-gray-900"
                                        >
                                            In Evaluation Process
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="communication_mode_other"
                                            className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
                                            type="checkbox"
                                            id="otherStatusCheck"
                                        />
                                        <label
                                            htmlFor="otherStatusCheck"
                                            className="ml-2 text-sm text-gray-900"
                                        >
                                            Other
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* Communication modes */}
                            <div className="col-span-full">
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    What is your child/families primary Mode of Communication or Language:
                                </label>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            name="communication_mode_asl"
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
                                    <div className="flex items-center">
                                        <input
                                            name="communication_mode_listening"
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
                                    <div className="flex items-center">
                                        <input
                                            name="communication_mode_fingerspelling"
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
                                    <div className="flex items-center">
                                        <input
                                            name="communication_mode_cuedSpeech"
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
                                    <div className="flex items-center">
                                        <input
                                            name="communication_mode_combination"
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
                                    <div className="flex items-center">
                                        <input
                                            name="communication_mode_other_primary"
                                            className="h-4 w-4 border-gray-300 text-hvorange-600 focus:ring-hvblue-500"
                                            type="checkbox"
                                            id="otherPrimaryCheck"
                                        />
                                        <label
                                            htmlFor="otherPrimaryCheck"
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
                                    Please summarize in a few sentences the concerns that you have
                                    that have led you to seeking an ASTra advocate for support.
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        name="parent_questions"
                                        id="inputParentQuestions"
                                        rows={3}
                                        className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-500 sm:text-sm"
                                    />
                                </div>
                                <small className="text-sm text-gray-500">
                                    I authorize Alabama Hands &amp; Voices to disclose to our Parent
                                    Guide(s) my name, contact information, name and age of my child
                                    so that a Parent Guide(s) may reach out to me regarding Alabama
                                    Hands &amp; Voices activities and resources and parent‐to‐parent support.
                                </small>
                            </div>
                        </div>
                    </div>

                    {/* Footer (Submit Button) */}
                    <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
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
                        <div className="px-4 py-4 sm:px-8">
                            <div className="rounded-md bg-green-50 p-4">
                                <div className="text-sm text-green-700">{status}</div>
                            </div>
                        </div>
                    )}
                    {error && (
                        <div className="px-4 py-4 sm:px-8">
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

export default AstraForm
