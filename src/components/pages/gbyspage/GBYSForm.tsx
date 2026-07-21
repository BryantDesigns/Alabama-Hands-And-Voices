'use client'

import { useRef, useState } from 'react'
import { submitNetlifyForm } from '@/utils/submitNetlifyForm'

const inputClass =
    'block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-500 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-2'

const selectClass =
    'block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-2'

const labelClass =
    'block text-xs font-bold uppercase tracking-widest text-hvblue'

interface LabeledFieldProps {
    id: string
    label: string
    required?: boolean
    children: React.ReactNode
    hint?: string
}

function LabeledField({
    id,
    label,
    required,
    children,
    hint,
}: LabeledFieldProps) {
    return (
        <div>
            <label htmlFor={id} className={labelClass}>
                {label}
                {required && (
                    <span className="ml-1 text-red-700" aria-hidden="true">
                        *
                    </span>
                )}
                {required && <span className="sr-only"> (required)</span>}
            </label>
            <div className="mt-1.5">{children}</div>
            {hint && (
                <p className="mt-1.5 text-sm font-medium text-slate-600">
                    {hint}
                </p>
            )}
        </div>
    )
}

function HearingLossOptions() {
    return (
        <>
            <option value="not-sure">Not Sure</option>
            <option value="conductive">Conductive (middle ear)</option>
            <option value="sensorineural">Sensorineural (inner ear)</option>
            <option value="mixed">
                Mixed (Conductive &amp; Sensorineural)
            </option>
        </>
    )
}

function DegreeOptions() {
    return (
        <>
            <option value="unsure">Unsure</option>
            <option value="normal">Normal</option>
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
            <option value="profound">Profound</option>
        </>
    )
}

function DeviceOptions() {
    return (
        <>
            <option value="none">None</option>
            <option value="unsure">Unsure</option>
            <option value="hearing-aid">Hearing aid(s)</option>
            <option value="cochlear-implant">Cochlear Implant(s)</option>
            <option value="baha">Bone-anchored Hearing Aid(s) (BAHA)</option>
        </>
    )
}

const fieldsetClass = 'space-y-4'
const legendClass =
    'w-full border-b-2 border-slate-200 pb-2 text-sm font-bold uppercase tracking-widest text-hvblue'
const checkboxLabelClass =
    'flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50'
const checkboxClass =
    'h-4 w-4 shrink-0 rounded-sm border-2 border-slate-300 text-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-2'

export default function GBYSForm() {
    const [activeTab, setActiveTab] = useState<'personal' | 'professional'>(
        'personal'
    )
    const [status, setStatus] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)
    const personalTabRef = useRef<HTMLButtonElement>(null)
    const professionalTabRef = useRef<HTMLButtonElement>(null)

    function selectTab(next: 'personal' | 'professional') {
        setActiveTab(next)
        const target =
            next === 'personal'
                ? personalTabRef.current
                : professionalTabRef.current
        target?.focus()
    }

    return (
        <div>
            <p className="mb-6 text-base font-medium leading-relaxed text-slate-700 md:text-lg">
                {activeTab === 'personal'
                    ? 'To be connected with a Parent Guide, please fill out the form below. To become an Alabama Hands & Voices member, visit the '
                    : 'Professionals may use this form to refer a family to the GBYS program. Please provide your contact details and the family’s information below. Visit the '}
                <a
                    href="/membership"
                    className="font-bold text-hvorange-700 underline-offset-4 hover:text-hvorange-800 hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-2"
                >
                    membership page
                </a>
                {activeTab === 'personal'
                    ? '.'
                    : ' for membership information.'}
            </p>

            <div
                role="tablist"
                aria-label="Guide By Your Side form type"
                className="mb-8 flex gap-1 rounded-2xl bg-slate-100 p-1.5 ring-1 ring-slate-200"
            >
                <button
                    ref={personalTabRef}
                    id="gbys-personal-tab"
                    role="tab"
                    type="button"
                    aria-selected={activeTab === 'personal'}
                    aria-controls="gbys-personal-panel"
                    tabIndex={activeTab === 'personal' ? 0 : -1}
                    onClick={() => selectTab('personal')}
                    onKeyDown={(event) => {
                        if (
                            event.key === 'ArrowRight' ||
                            event.key === 'ArrowLeft'
                        ) {
                            event.preventDefault()
                            selectTab('professional')
                        }
                    }}
                    className={[
                        'flex-1 cursor-pointer rounded-xl px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-all duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-2',
                        activeTab === 'personal'
                            ? 'border-b-[3px] border-hvorange-700 bg-white text-hvblue shadow-sm'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-hvblue',
                    ].join(' ')}
                >
                    Personal
                </button>

                <button
                    ref={professionalTabRef}
                    id="gbys-professional-tab"
                    role="tab"
                    type="button"
                    aria-selected={activeTab === 'professional'}
                    aria-controls="gbys-professional-panel"
                    tabIndex={activeTab === 'professional' ? 0 : -1}
                    onClick={() => selectTab('professional')}
                    onKeyDown={(event) => {
                        if (
                            event.key === 'ArrowLeft' ||
                            event.key === 'ArrowRight'
                        ) {
                            event.preventDefault()
                            selectTab('personal')
                        }
                    }}
                    className={[
                        'flex-1 cursor-pointer rounded-xl px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-all duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-2',
                        activeTab === 'professional'
                            ? 'border-b-[3px] border-hvorange-700 bg-white text-hvblue shadow-sm'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-hvblue',
                    ].join(' ')}
                >
                    Professional Referral
                </button>
            </div>

            <div
                id="gbys-personal-panel"
                role="tabpanel"
                aria-labelledby="gbys-personal-tab"
                hidden={activeTab !== 'personal'}
            >
                <form
                    method="POST"
                    name="gbys"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={(event) =>
                        submitNetlifyForm(event, setStatus, setError)
                    }
                    className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 md:p-8"
                >
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

                    <div className="flex flex-col gap-8">
                        <fieldset className={fieldsetClass}>
                            <legend className={legendClass}>
                                Parent / Guardian Information
                            </legend>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <LabeledField
                                    id="inputName"
                                    label="Parent / guardian name"
                                    required
                                >
                                    <input
                                        id="inputName"
                                        name="name"
                                        type="text"
                                        required
                                        autoComplete="name"
                                        className={inputClass}
                                    />
                                </LabeledField>
                                <LabeledField
                                    id="inputSecondary"
                                    label="Secondary parent / guardian"
                                >
                                    <input
                                        id="inputSecondary"
                                        name="secondary-parent"
                                        type="text"
                                        autoComplete="off"
                                        className={inputClass}
                                    />
                                </LabeledField>
                            </div>
                        </fieldset>

                        <fieldset className={fieldsetClass}>
                            <legend className={legendClass}>
                                Child Information
                            </legend>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <LabeledField
                                    id="childs-name"
                                    label="Child's name"
                                    required
                                >
                                    <input
                                        id="childs-name"
                                        name="childs-name"
                                        type="text"
                                        required
                                        autoComplete="off"
                                        className={inputClass}
                                    />
                                </LabeledField>
                                <LabeledField
                                    id="inputChildDOB"
                                    label="Child's date of birth"
                                    required
                                >
                                    <input
                                        id="inputChildDOB"
                                        name="child-dob"
                                        type="date"
                                        required
                                        autoComplete="off"
                                        className={inputClass}
                                    />
                                </LabeledField>
                            </div>
                            <LabeledField
                                id="inputHearingLoss"
                                label="Type of hearing loss"
                            >
                                <select
                                    id="inputHearingLoss"
                                    name="hearing-loss"
                                    className={selectClass}
                                >
                                    <HearingLossOptions />
                                </select>
                            </LabeledField>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <LabeledField
                                    id="inputDegreeLeft"
                                    label="Degree — left ear"
                                >
                                    <select
                                        id="inputDegreeLeft"
                                        name="degree-left"
                                        className={selectClass}
                                    >
                                        <DegreeOptions />
                                    </select>
                                </LabeledField>
                                <LabeledField
                                    id="inputDegreeRight"
                                    label="Degree — right ear"
                                >
                                    <select
                                        id="inputDegreeRight"
                                        name="degree-right"
                                        className={selectClass}
                                    >
                                        <DegreeOptions />
                                    </select>
                                </LabeledField>
                            </div>
                            <LabeledField
                                id="inputHearingDevice"
                                label="Hearing device, if used"
                            >
                                <select
                                    id="inputHearingDevice"
                                    name="hearing-device"
                                    className={selectClass}
                                >
                                    <DeviceOptions />
                                </select>
                            </LabeledField>
                        </fieldset>

                        <fieldset className={fieldsetClass}>
                            <legend className={legendClass}>
                                Communication Mode(s)
                            </legend>
                            <p className="text-sm font-medium text-slate-600">
                                Select all that apply.
                            </p>
                            <ul role="list" className="space-y-1">
                                <li>
                                    <label
                                        htmlFor="communication-mode-asl"
                                        className={checkboxLabelClass}
                                    >
                                        <input
                                            id="communication-mode-asl"
                                            name="communication-mode-asl"
                                            type="checkbox"
                                            className={checkboxClass}
                                        />
                                        American Sign Language
                                    </label>
                                </li>
                                <li>
                                    <label
                                        htmlFor="communication-mode-listening"
                                        className={checkboxLabelClass}
                                    >
                                        <input
                                            id="communication-mode-listening"
                                            name="communication-mode-listening"
                                            type="checkbox"
                                            className={checkboxClass}
                                        />
                                        Listening and Spoken Language
                                    </label>
                                </li>
                                <li>
                                    <label
                                        htmlFor="communication-mode-fingerspelling"
                                        className={checkboxLabelClass}
                                    >
                                        <input
                                            id="communication-mode-fingerspelling"
                                            name="communication-mode-fingerspelling"
                                            type="checkbox"
                                            className={checkboxClass}
                                        />
                                        Fingerspelling
                                    </label>
                                </li>
                                <li>
                                    <label
                                        htmlFor="communication-mode-cuedSpeech"
                                        className={checkboxLabelClass}
                                    >
                                        <input
                                            id="communication-mode-cuedSpeech"
                                            name="communication-mode-cuedSpeech"
                                            type="checkbox"
                                            className={checkboxClass}
                                        />
                                        Cued Speech
                                    </label>
                                </li>
                                <li>
                                    <label
                                        htmlFor="communication-mode-combination"
                                        className={checkboxLabelClass}
                                    >
                                        <input
                                            id="communication-mode-combination"
                                            name="communication-mode-combination"
                                            type="checkbox"
                                            className={checkboxClass}
                                        />
                                        Combination of two or more
                                    </label>
                                </li>
                                <li>
                                    <label
                                        htmlFor="communication-mode-other"
                                        className={checkboxLabelClass}
                                    >
                                        <input
                                            id="communication-mode-other"
                                            name="communication-mode-other"
                                            type="checkbox"
                                            className={checkboxClass}
                                        />
                                        Other
                                    </label>
                                </li>
                            </ul>
                        </fieldset>

                        <fieldset className={fieldsetClass}>
                            <legend className={legendClass}>
                                Language &amp; Contact
                            </legend>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <LabeledField
                                    id="inputEmail"
                                    label="Email address"
                                    required
                                    hint="We'll never share your email with anyone else."
                                >
                                    <input
                                        id="inputEmail"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        className={inputClass}
                                    />
                                </LabeledField>
                                <LabeledField
                                    id="inputTel"
                                    label="Phone number"
                                    required
                                >
                                    <input
                                        id="inputTel"
                                        name="phone"
                                        type="tel"
                                        required
                                        autoComplete="tel"
                                        className={inputClass}
                                    />
                                </LabeledField>
                            </div>
                            <LabeledField
                                id="inputAddress"
                                label="Home address"
                            >
                                <input
                                    id="inputAddress"
                                    name="address"
                                    type="text"
                                    autoComplete="street-address"
                                    placeholder="1234 Main St"
                                    className={inputClass}
                                />
                            </LabeledField>
                            <div className="grid gap-4 sm:grid-cols-3">
                                <LabeledField id="inputCity" label="City">
                                    <input
                                        id="inputCity"
                                        name="city"
                                        type="text"
                                        autoComplete="address-level2"
                                        className={inputClass}
                                    />
                                </LabeledField>
                                <LabeledField id="inputCounty" label="County">
                                    <input
                                        id="inputCounty"
                                        name="county"
                                        type="text"
                                        autoComplete="off"
                                        placeholder="County"
                                        className={inputClass}
                                    />
                                </LabeledField>
                                <LabeledField id="inputZip" label="ZIP code">
                                    <input
                                        id="inputZip"
                                        name="zip"
                                        type="text"
                                        autoComplete="postal-code"
                                        className={inputClass}
                                    />
                                </LabeledField>
                            </div>
                            <LabeledField
                                id="inputLanguage"
                                label="Language spoken in the home"
                            >
                                <input
                                    id="inputLanguage"
                                    name="language"
                                    type="text"
                                    autoComplete="language"
                                    placeholder="Language"
                                    className={inputClass}
                                />
                            </LabeledField>
                        </fieldset>

                        <fieldset className={fieldsetClass}>
                            <legend className={legendClass}>
                                Questions &amp; Comments
                            </legend>
                            <LabeledField
                                id="inputParentQuestions"
                                label="Questions, concerns, or special needs"
                                hint="I authorize Alabama Hands & Voices to disclose to our Parent Guide(s) my name, contact information, name and age of my child so that a Parent Guide(s) may reach out to me regarding Alabama Hands & Voices activities and resources and parent-to-parent support."
                            >
                                <textarea
                                    name="parent-questions"
                                    id="inputParentQuestions"
                                    rows={3}
                                    className={`${inputClass} resize-y`}
                                />
                            </LabeledField>
                        </fieldset>
                    </div>

                    <div className="mt-8 flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex min-h-[44px] cursor-pointer items-center rounded-xl bg-hvorange-700 px-7 py-3.5 text-base font-bold text-white transition hover:bg-hvorange-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-2"
                        >
                            Connect with a Parent Guide
                        </button>
                    </div>
                </form>
            </div>

            <div
                id="gbys-professional-panel"
                role="tabpanel"
                aria-labelledby="gbys-professional-tab"
                hidden={activeTab !== 'professional'}
            >
                <form
                    method="post"
                    name="gbysref"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={(event) =>
                        submitNetlifyForm(event, setStatus, setError)
                    }
                    className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 md:p-8"
                >
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

                    <div className="flex flex-col gap-8">
                        <fieldset className={fieldsetClass}>
                            <legend className={legendClass}>
                                Referrer Information
                            </legend>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <LabeledField
                                    id="pr-ref-name"
                                    label="Professional's full name"
                                    required
                                >
                                    <input
                                        id="pr-ref-name"
                                        name="pr-ref-name"
                                        type="text"
                                        required
                                        autoComplete="name"
                                        className={inputClass}
                                    />
                                </LabeledField>
                                <LabeledField
                                    id="pr-ref-role"
                                    label="Referral role"
                                    required
                                >
                                    <input
                                        id="pr-ref-role"
                                        name="pr-ref-role"
                                        type="text"
                                        required
                                        autoComplete="organization-title"
                                        className={inputClass}
                                    />
                                </LabeledField>
                            </div>
                        </fieldset>

                        <fieldset className={fieldsetClass}>
                            <legend className={legendClass}>
                                Family Information
                            </legend>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <LabeledField
                                    id="pr-name"
                                    label="Parent / guardian name"
                                    required
                                >
                                    <input
                                        id="pr-name"
                                        name="pr-name"
                                        type="text"
                                        required
                                        autoComplete="name"
                                        className={inputClass}
                                    />
                                </LabeledField>
                                <LabeledField
                                    id="pr-phone"
                                    label="Phone number"
                                    required
                                >
                                    <input
                                        id="pr-phone"
                                        name="pr-phone"
                                        type="tel"
                                        required
                                        autoComplete="tel"
                                        className={inputClass}
                                    />
                                </LabeledField>
                                <LabeledField
                                    id="pr-childs-name"
                                    label="Child's name"
                                    required
                                >
                                    <input
                                        id="pr-childs-name"
                                        name="pr-childs-name"
                                        type="text"
                                        required
                                        autoComplete="off"
                                        className={inputClass}
                                    />
                                </LabeledField>
                                <LabeledField
                                    id="pr-email"
                                    label="Email address"
                                    required
                                    hint="We'll never share your email with anyone else."
                                >
                                    <input
                                        id="pr-email"
                                        name="pr-email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        className={inputClass}
                                    />
                                </LabeledField>
                            </div>
                        </fieldset>

                        <fieldset className={fieldsetClass}>
                            <legend className={legendClass}>
                                Child Information
                            </legend>
                            <LabeledField
                                id="pr-hearing-loss"
                                label="Type of hearing loss"
                            >
                                <select
                                    id="pr-hearing-loss"
                                    name="pr-hearing-loss"
                                    className={selectClass}
                                >
                                    <HearingLossOptions />
                                </select>
                            </LabeledField>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <LabeledField
                                    id="pr-degree-left"
                                    label="Degree — left ear"
                                >
                                    <select
                                        id="pr-degree-left"
                                        name="pr-degree-left"
                                        className={selectClass}
                                    >
                                        <DegreeOptions />
                                    </select>
                                </LabeledField>
                                <LabeledField
                                    id="pr-degree-right"
                                    label="Degree — right ear"
                                >
                                    <select
                                        id="pr-degree-right"
                                        name="pr-degree-right"
                                        className={selectClass}
                                    >
                                        <DegreeOptions />
                                    </select>
                                </LabeledField>
                            </div>
                            <LabeledField
                                id="pr-hearing-device"
                                label="Hearing device, if used"
                            >
                                <select
                                    id="pr-hearing-device"
                                    name="pr-hearing-device"
                                    className={selectClass}
                                >
                                    <DeviceOptions />
                                </select>
                            </LabeledField>
                        </fieldset>

                        <fieldset className={fieldsetClass}>
                            <legend className={legendClass}>
                                Communication Mode(s)
                            </legend>
                            <p className="text-sm font-medium text-slate-600">
                                Select all that apply.
                            </p>
                            <ul role="list" className="space-y-1">
                                <li>
                                    <label
                                        htmlFor="pr-communication-mode-asl"
                                        className={checkboxLabelClass}
                                    >
                                        <input
                                            id="pr-communication-mode-asl"
                                            name="pr-communication-mode-asl"
                                            type="checkbox"
                                            className={checkboxClass}
                                        />
                                        American Sign Language
                                    </label>
                                </li>
                                <li>
                                    <label
                                        htmlFor="pr-communication-mode-listening"
                                        className={checkboxLabelClass}
                                    >
                                        <input
                                            id="pr-communication-mode-listening"
                                            name="pr-communication-mode-listening"
                                            type="checkbox"
                                            className={checkboxClass}
                                        />
                                        Listening and Spoken Language
                                    </label>
                                </li>
                                <li>
                                    <label
                                        htmlFor="pr-communication-mode-fingerspelling"
                                        className={checkboxLabelClass}
                                    >
                                        <input
                                            id="pr-communication-mode-fingerspelling"
                                            name="pr-communication-mode-fingerspelling"
                                            type="checkbox"
                                            className={checkboxClass}
                                        />
                                        Fingerspelling
                                    </label>
                                </li>
                                <li>
                                    <label
                                        htmlFor="pr-communication-mode-cuedSpeech"
                                        className={checkboxLabelClass}
                                    >
                                        <input
                                            id="pr-communication-mode-cuedSpeech"
                                            name="pr-communication-mode-cuedSpeech"
                                            type="checkbox"
                                            className={checkboxClass}
                                        />
                                        Cued Speech
                                    </label>
                                </li>
                                <li>
                                    <label
                                        htmlFor="pr-communication-mode-combination"
                                        className={checkboxLabelClass}
                                    >
                                        <input
                                            id="pr-communication-mode-combination"
                                            name="pr-communication-mode-combination"
                                            type="checkbox"
                                            className={checkboxClass}
                                        />
                                        Combination of two or more
                                    </label>
                                </li>
                                <li>
                                    <label
                                        htmlFor="pr-communication-mode-other"
                                        className={checkboxLabelClass}
                                    >
                                        <input
                                            id="pr-communication-mode-other"
                                            name="pr-communication-mode-other"
                                            type="checkbox"
                                            className={checkboxClass}
                                        />
                                        Other
                                    </label>
                                </li>
                            </ul>
                        </fieldset>

                        <fieldset className={fieldsetClass}>
                            <legend className={legendClass}>
                                Language &amp; Contact
                            </legend>
                            <LabeledField id="pr-address" label="Home address">
                                <input
                                    id="pr-address"
                                    name="pr-address"
                                    type="text"
                                    autoComplete="street-address"
                                    placeholder="1234 Main St"
                                    className={inputClass}
                                />
                            </LabeledField>
                            <div className="grid gap-4 sm:grid-cols-3">
                                <LabeledField id="pr-city" label="City">
                                    <input
                                        id="pr-city"
                                        name="pr-city"
                                        type="text"
                                        autoComplete="address-level2"
                                        className={inputClass}
                                    />
                                </LabeledField>
                                <LabeledField id="pr-county" label="County">
                                    <input
                                        id="pr-county"
                                        name="pr-county"
                                        type="text"
                                        autoComplete="off"
                                        placeholder="County"
                                        className={inputClass}
                                    />
                                </LabeledField>
                                <LabeledField id="pr-zip" label="ZIP code">
                                    <input
                                        id="pr-zip"
                                        name="pr-zip"
                                        type="text"
                                        autoComplete="postal-code"
                                        className={inputClass}
                                    />
                                </LabeledField>
                            </div>
                            <LabeledField
                                id="pr-language"
                                label="Language spoken in the home"
                                required
                            >
                                <input
                                    id="pr-language"
                                    name="pr-language"
                                    type="text"
                                    required
                                    autoComplete="language"
                                    placeholder="Language"
                                    className={inputClass}
                                />
                            </LabeledField>
                        </fieldset>

                        <fieldset className={fieldsetClass}>
                            <legend className={legendClass}>
                                Questions &amp; Comments
                            </legend>
                            <LabeledField
                                id="pr-parent-questions"
                                label="Questions, concerns, or special needs"
                                hint="I authorize Alabama Hands & Voices to disclose to our Parent Guide(s) my name, contact information, name and age of my child so that a Parent Guide(s) may reach out to me regarding Alabama Hands & Voices activities and resources and parent-to-parent support."
                            >
                                <textarea
                                    name="pr-parent-questions"
                                    id="pr-parent-questions"
                                    rows={3}
                                    className={`${inputClass} resize-y`}
                                />
                            </LabeledField>
                        </fieldset>
                    </div>

                    <div className="mt-8 flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex min-h-[44px] cursor-pointer items-center rounded-xl bg-hvorange-700 px-7 py-3.5 text-base font-bold text-white transition hover:bg-hvorange-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-700 focus-visible:ring-offset-2"
                        >
                            Submit referral
                        </button>
                    </div>
                </form>
            </div>

            {status && (
                <div
                    className="mt-6 rounded-xl bg-green-50 p-4 text-sm font-medium text-green-800 ring-1 ring-green-200"
                    role="status"
                    aria-live="polite"
                >
                    {status}
                </div>
            )}
            {error && (
                <div
                    className="mt-6 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-800 ring-1 ring-red-200"
                    role="alert"
                    aria-live="assertive"
                >
                    {error}
                </div>
            )}
        </div>
    )
}
