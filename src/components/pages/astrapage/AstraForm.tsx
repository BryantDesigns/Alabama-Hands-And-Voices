import { NetlifyForm, SubmitButton } from '@/components/forms/NetlifyForm'

const AstraForm = ({ contactEmail }: { contactEmail: string }) => {
    return (
        <NetlifyForm
            name="astra"
            successMessage="Thank you! Your ASTra support request was sent. We'll be in touch."
            contactEmail={contactEmail}
            aria-label="Request ASTra support"
            className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 md:p-8"
        >
            <div className="space-y-4">
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                    {/* Parent/Guardian Name */}
                    <div className="sm:col-span-3">
                        <label
                            htmlFor="inputName"
                            className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                        >
                            Parent/Guardian Name:
                        </label>
                        <div className="mt-2">
                            <input
                                id="inputName"
                                name="name"
                                type="text"
                                required
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                            />
                        </div>
                    </div>
                    {/* Secondary Parent/Guardian Name */}
                    <div className="sm:col-span-3">
                        <label
                            htmlFor="inputSecondary"
                            className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                        >
                            Secondary Parent/Guardian Name:
                        </label>
                        <div className="mt-2">
                            <input
                                id="inputSecondary"
                                name="secondary-parent"
                                type="text"
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                            />
                        </div>
                    </div>
                    {/* Phone Number */}
                    <div className="sm:col-span-6">
                        <label
                            htmlFor="inputTel"
                            className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                        >
                            Phone Number:
                        </label>
                        <div className="mt-2">
                            <input
                                id="inputTel"
                                name="phone_number"
                                type="tel"
                                required
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                            />
                        </div>
                    </div>
                    {/* Email */}
                    <div className="sm:col-span-6">
                        <label
                            htmlFor="inputEmail"
                            className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                        >
                            Email:
                        </label>
                        <div className="mt-2">
                            <input
                                id="inputEmail"
                                name="email"
                                type="email"
                                required
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                            />
                        </div>
                        <small className="mt-1.5 block text-sm text-slate-600">
                            We&apos;ll never share your email with anyone else.
                        </small>
                    </div>
                    {/* Student Name */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="inputStudentName"
                            className="block text-xs font-bold tracking-widest text-hvblue uppercase"
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
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                            />
                        </div>
                    </div>
                    {/* Student Age */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="inputAge"
                            className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                        >
                            Student&apos;s Age:
                        </label>
                        <div className="mt-2">
                            <input
                                id="inputAge"
                                name="student_age"
                                type="text"
                                placeholder="Enter student age"
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                            />
                        </div>
                    </div>
                    {/* Student Grade */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="inputGrade"
                            className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                        >
                            Student&apos;s Grade:
                        </label>
                        <div className="mt-2">
                            <input
                                id="inputGrade"
                                name="student_grade"
                                type="text"
                                placeholder="Enter student grade"
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                            />
                        </div>
                    </div>
                    {/* School District */}
                    <div className="sm:col-span-3">
                        <label
                            htmlFor="inputSchoolDistrict"
                            className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                        >
                            School District:
                        </label>
                        <div className="mt-2">
                            <input
                                id="inputSchoolDistrict"
                                name="school_district"
                                type="text"
                                placeholder="School District"
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                            />
                        </div>
                    </div>
                    {/* School */}
                    <div className="sm:col-span-3">
                        <label
                            htmlFor="inputSchool"
                            className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                        >
                            School:
                        </label>
                        <div className="mt-2">
                            <input
                                id="inputSchool"
                                name="school"
                                type="text"
                                placeholder="School"
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                            />
                        </div>
                    </div>
                    {/* Case Manager Name */}
                    <div className="sm:col-span-6">
                        <label
                            htmlFor="inputCaseManagerName"
                            className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                        >
                            Case Manager Name:
                        </label>
                        <div className="mt-2">
                            <input
                                id="inputCaseManagerName"
                                name="case_manager_name"
                                type="text"
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                            />
                        </div>
                    </div>
                    {/* IEP/504 Status */}
                    <div className="col-span-full">
                        <label className="block border-b-2 border-slate-200 pb-2 text-sm font-bold tracking-widest text-hvblue uppercase">
                            Does your child have an IEP or a 504:
                        </label>
                        <div className="space-y-2">
                            <div className="flex min-h-[44px] items-center rounded-lg px-3 py-2 transition hover:bg-slate-50">
                                <input
                                    name="communication_mode_iep"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                    type="checkbox"
                                    id="iepCheck"
                                />
                                <label
                                    htmlFor="iepCheck"
                                    className="ml-2 cursor-pointer text-sm font-medium text-slate-700"
                                >
                                    IEP
                                </label>
                            </div>
                            <div className="flex min-h-[44px] items-center rounded-lg px-3 py-2 transition hover:bg-slate-50">
                                <input
                                    name="communication_mode_504"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                    type="checkbox"
                                    id="plan504Check"
                                />
                                <label
                                    htmlFor="plan504Check"
                                    className="ml-2 cursor-pointer text-sm font-medium text-slate-700"
                                >
                                    504
                                </label>
                            </div>
                            <div className="flex min-h-[44px] items-center rounded-lg px-3 py-2 transition hover:bg-slate-50">
                                <input
                                    name="communication_mode_evaluation"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                    type="checkbox"
                                    id="evaluationCheck"
                                />
                                <label
                                    htmlFor="evaluationCheck"
                                    className="ml-2 cursor-pointer text-sm font-medium text-slate-700"
                                >
                                    In Evaluation Process
                                </label>
                            </div>
                            <div className="flex min-h-[44px] items-center rounded-lg px-3 py-2 transition hover:bg-slate-50">
                                <input
                                    name="communication_mode_other"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                    type="checkbox"
                                    id="otherStatusCheck"
                                />
                                <label
                                    htmlFor="otherStatusCheck"
                                    className="ml-2 cursor-pointer text-sm font-medium text-slate-700"
                                >
                                    Other
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* Communication modes */}
                    <div className="col-span-full">
                        <label className="block border-b-2 border-slate-200 pb-2 text-sm font-bold tracking-widest text-hvblue uppercase">
                            What is your child/families primary Mode of
                            Communication or Language:
                        </label>
                        <div className="space-y-2">
                            <div className="flex min-h-[44px] items-center rounded-lg px-3 py-2 transition hover:bg-slate-50">
                                <input
                                    name="communication_mode_asl"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
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
                                    name="communication_mode_listening"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
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
                                    name="communication_mode_fingerspelling"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
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
                                    name="communication_mode_cuedSpeech"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
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
                                    name="communication_mode_combination"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
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
                                    name="communication_mode_other_primary"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                    type="checkbox"
                                    id="otherPrimaryCheck"
                                />
                                <label
                                    htmlFor="otherPrimaryCheck"
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
                            className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                        >
                            Please summarize in a few sentences the concerns
                            that you have that have led you to seeking an ASTra
                            advocate for support.
                        </label>
                        <div className="mt-2">
                            <textarea
                                name="parent_questions"
                                id="inputParentQuestions"
                                rows={3}
                                className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
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
                <SubmitButton className="inline-flex min-h-[44px] cursor-pointer items-center rounded-xl bg-hvorange-700 px-7 py-3.5 text-base font-bold text-white transition hover:bg-hvorange-800 focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-wait disabled:opacity-70">
                    Submit
                </SubmitButton>
            </div>
        </NetlifyForm>
    )
}

export default AstraForm
