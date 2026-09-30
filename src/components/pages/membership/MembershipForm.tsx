'use client'
import { NetlifyForm, SubmitButton } from '@/components/forms/NetlifyForm'

// After a successful form submission, the visitor's next step is choosing a
// membership tier.
function focusMembershipTiersHeading() {
    document.getElementById('membership-tiers-heading')?.focus()
}

const MembershipForm = ({ contactEmail }: { contactEmail: string }) => {
    return (
        <section>
            <p className="text-center text-lg font-medium text-slate-700">
                To become an Alabama Hands & Voices member, please fill out the
                form below.
            </p>

            <div className="mt-6">
                <NetlifyForm
                    name="membership"
                    successMessage={
                        <>
                            <p className="text-base font-bold text-green-800">
                                Your membership form was submitted successfully.
                            </p>
                            <a
                                href="#membership-tiers"
                                className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-hvorange-700 px-6 py-3 text-base font-bold text-white transition duration-150 hover:bg-hvorange-800 focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                            >
                                Thanks — now choose your membership tier below
                            </a>
                        </>
                    }
                    contactEmail={contactEmail}
                    onSuccess={focusMembershipTiersHeading}
                    className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 md:p-8"
                >
                    <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                    />
                                </div>
                            </div>
                            {/* Secondary Parent/Guardian Name */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="inputSecondaryName"
                                    className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                                >
                                    Secondary Parent/Guardian Name:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputSecondaryName"
                                        name="secondary-name"
                                        type="text"
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                    />
                                </div>
                            </div>
                            {/* Phone Number */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="inputTel"
                                    className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                                >
                                    Phone Number:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputTel"
                                        name="phone"
                                        type="tel"
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                    />
                                </div>
                            </div>
                            {/* Email */}
                            <div className="sm:col-span-3">
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
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                    />
                                </div>
                                <small className="text-sm text-slate-500">
                                    We&apos;ll never share your email with
                                    anyone else.
                                </small>
                            </div>
                            {/* Home Address */}
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label
                                    htmlFor="inputAddress"
                                    className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                                >
                                    Home Address:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputAddress"
                                        name="address"
                                        type="text"
                                        placeholder="1234 Main St"
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                    />
                                </div>
                            </div>
                            {/* City */}
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="inputCity"
                                    className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                                >
                                    City:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputCity"
                                        name="city"
                                        type="text"
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                    />
                                </div>
                            </div>
                            {/* Zip */}
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="inputZip"
                                    className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                                >
                                    Zip:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputZip"
                                        name="zip"
                                        type="text"
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                    />
                                </div>
                            </div>
                            {/* School District */}
                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="inputSchoolDist"
                                    className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                                >
                                    School Dist./BOCES:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="inputSchoolDist"
                                        name="school-dist"
                                        type="text"
                                        placeholder="School District"
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                    />
                                </div>
                            </div>
                            {/* Children Information */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="inputTextArea"
                                    className="block text-xs font-bold tracking-widest text-hvblue uppercase"
                                >
                                    Children (deaf/hh & siblings, ages):
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        name="children-info"
                                        id="inputTextArea"
                                        rows={3}
                                        className="block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                    />
                                </div>
                            </div>
                            {/* Membership Type */}
                            <div className="col-span-full">
                                <label className="mb-2 block text-sm font-bold text-hvblue">
                                    Choose Your Membership:
                                </label>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center">
                                        <input
                                            name="checkbox-one-parent"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                            type="checkbox"
                                            id="parentCheck"
                                        />
                                        <label
                                            htmlFor="parentCheck"
                                            className="ml-2 text-sm text-slate-700"
                                        >
                                            Parent, Student, DHH Adult
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="checkbox-two-professional"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                            type="checkbox"
                                            id="professionalCheck"
                                        />
                                        <label
                                            htmlFor="professionalCheck"
                                            className="ml-2 text-sm text-slate-700"
                                        >
                                            Professional
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="checkbox-three-org"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                            type="checkbox"
                                            id="organizationCheck"
                                        />
                                        <label
                                            htmlFor="organizationCheck"
                                            className="ml-2 text-sm text-slate-700"
                                        >
                                            Organization
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="checkbox-four-other"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                            type="checkbox"
                                            id="otherCheck"
                                        />
                                        <label
                                            htmlFor="otherCheck"
                                            className="ml-2 text-sm text-slate-700"
                                        >
                                            Other
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* Membership Donation */}
                            <div className="col-span-full">
                                <label className="mb-2 block text-sm font-bold text-hvblue">
                                    Annual membership donation enclosed:
                                </label>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center">
                                        <input
                                            name="membership-25"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                            type="checkbox"
                                            id="twentyFiveCheck"
                                        />
                                        <label
                                            htmlFor="twentyFiveCheck"
                                            className="ml-2 text-sm text-slate-700"
                                        >
                                            $25 Parent/DHH adult/Student
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="membership-40"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                            type="checkbox"
                                            id="fortyCheck"
                                        />
                                        <label
                                            htmlFor="fortyCheck"
                                            className="ml-2 text-sm text-slate-700"
                                        >
                                            $40 Professional
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="membership-50"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                            type="checkbox"
                                            id="fiftyCheck"
                                        />
                                        <label
                                            htmlFor="fiftyCheck"
                                            className="ml-2 text-sm text-slate-700"
                                        >
                                            $50 Organization
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="membership-donate"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                            type="checkbox"
                                            id="addDonateCheck"
                                        />
                                        <label
                                            htmlFor="addDonateCheck"
                                            className="ml-2 text-sm text-slate-700"
                                        >
                                            Additional Donation to Chapter to
                                            Help Cover Scholarships/Fee Waivers
                                            and Chapter Expenses (on next page)
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="membership-0"
                                            className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                            type="checkbox"
                                            id="zeroCheck"
                                        />
                                        <label
                                            htmlFor="zeroCheck"
                                            className="ml-2 text-sm text-slate-700"
                                        >
                                            $0 Request Scholarship/Fee waiver
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer (Submit Button) */}
                    <div className="mt-8 flex flex-col items-center gap-3">
                        <SubmitButton className="inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-xl bg-hvorange-700 px-8 py-3 text-base font-bold text-white transition duration-150 hover:bg-hvorange-800 focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-wait disabled:opacity-70">
                            Submit
                        </SubmitButton>
                    </div>
                </NetlifyForm>
            </div>
        </section>
    )
}

export default MembershipForm
