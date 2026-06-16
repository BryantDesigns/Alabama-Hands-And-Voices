'use client'

import { useRef, useState } from 'react'
import MockFormV3 from '@/components/design-options/v3/MockFormV3'

// ── Input / label constants ───────────────────────────────────────────────────

const inputClass =
    'block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue placeholder:text-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2'

const selectClass =
    'block w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base font-medium text-hvblue focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2'

const labelClass = 'block text-xs font-bold uppercase tracking-widest text-hvblue'

// ── LabeledField helper ───────────────────────────────────────────────────────

interface LabeledFieldProps {
    id: string
    label: string
    required?: boolean
    children: React.ReactNode
    hint?: string
}

function LabeledField({ id, label, required, children, hint }: LabeledFieldProps) {
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
            {hint && <p className="mt-1.5 text-sm font-medium text-slate-600">{hint}</p>}
        </div>
    )
}

// ── Shared option sets ────────────────────────────────────────────────────────

const hearingLossOptions = (
    <>
        <option value="not-sure">Not Sure</option>
        <option value="conductive">Conductive (middle ear)</option>
        <option value="sensorineural">Sensorineural (inner ear)</option>
        <option value="mixed">Mixed (Conductive &amp; Sensorineural)</option>
    </>
)

const degreeOptions = (
    <>
        <option value="unsure">Unsure</option>
        <option value="normal">Normal</option>
        <option value="mild">Mild</option>
        <option value="moderate">Moderate</option>
        <option value="severe">Severe</option>
        <option value="profound">Profound</option>
    </>
)

const deviceOptions = (
    <>
        <option value="none">None</option>
        <option value="unsure">Unsure</option>
        <option value="hearing-aid">Hearing aid(s)</option>
        <option value="cochlear-implant">Cochlear Implant(s)</option>
        <option value="baha">Bone-anchored Hearing Aid(s) (BAHA)</option>
    </>
)

// ── Communication-mode checkboxes ─────────────────────────────────────────────

const commModes = [
    { key: 'asl', label: 'American Sign Language (ASL)' },
    { key: 'listening', label: 'Listening & Spoken Language' },
    { key: 'cued-speech', label: 'Cued Speech' },
    { key: 'fingerspelling', label: 'Fingerspelling' },
    { key: 'combination', label: 'Combination of two or more' },
    { key: 'other', label: 'Other' },
]

// ── Shared child/family field group ──────────────────────────────────────────

function ChildFamilyFields({ prefix }: { prefix: string }) {
    return (
        <>
            {/* Child information */}
            <fieldset className="space-y-4">
                <legend className="w-full border-b-2 border-slate-200 pb-2 text-sm font-bold uppercase tracking-widest text-hvblue">
                    Child Information
                </legend>

                <div className="grid gap-4 sm:grid-cols-2">
                    <LabeledField id={`${prefix}-child-name`} label="Child's name" required>
                        <input
                            id={`${prefix}-child-name`}
                            type="text"
                            autoComplete="off"
                            aria-required="true"
                            className={inputClass}
                        />
                    </LabeledField>

                    <LabeledField id={`${prefix}-child-dob`} label="Child's date of birth" required>
                        <input
                            id={`${prefix}-child-dob`}
                            type="date"
                            autoComplete="off"
                            aria-required="true"
                            className={inputClass}
                        />
                    </LabeledField>
                </div>

                <LabeledField id={`${prefix}-hearing-loss`} label="Type of hearing loss">
                    <select
                        id={`${prefix}-hearing-loss`}
                        name={`${prefix}-hearing-loss`}
                        className={selectClass}
                    >
                        {hearingLossOptions}
                    </select>
                </LabeledField>

                <div className="grid gap-4 sm:grid-cols-2">
                    <LabeledField id={`${prefix}-degree-left`} label="Degree — left ear">
                        <select
                            id={`${prefix}-degree-left`}
                            name={`${prefix}-degree-left`}
                            className={selectClass}
                        >
                            {degreeOptions}
                        </select>
                    </LabeledField>

                    <LabeledField id={`${prefix}-degree-right`} label="Degree — right ear">
                        <select
                            id={`${prefix}-degree-right`}
                            name={`${prefix}-degree-right`}
                            className={selectClass}
                        >
                            {degreeOptions}
                        </select>
                    </LabeledField>
                </div>

                <LabeledField id={`${prefix}-hearing-device`} label="Hearing device, if used">
                    <select
                        id={`${prefix}-hearing-device`}
                        name={`${prefix}-hearing-device`}
                        className={selectClass}
                    >
                        {deviceOptions}
                    </select>
                </LabeledField>
            </fieldset>

            {/* Communication mode */}
            <fieldset className="space-y-4">
                <legend className="w-full border-b-2 border-slate-200 pb-2 text-sm font-bold uppercase tracking-widest text-hvblue">
                    Communication Mode(s)
                </legend>
                <p className="text-sm font-medium text-slate-600">Select all that apply.</p>
                <ul role="list" className="space-y-1">
                    {commModes.map(({ key, label }) => (
                        <li key={key}>
                            <label
                                htmlFor={`${prefix}-comm-${key}`}
                                className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                            >
                                <input
                                    id={`${prefix}-comm-${key}`}
                                    name={`${prefix}-comm-${key}`}
                                    type="checkbox"
                                    className="h-4 w-4 shrink-0 rounded border-2 border-slate-300 text-hvorange-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                                />
                                {label}
                            </label>
                        </li>
                    ))}
                </ul>
            </fieldset>

            {/* Language & contact */}
            <fieldset className="space-y-4">
                <legend className="w-full border-b-2 border-slate-200 pb-2 text-sm font-bold uppercase tracking-widest text-hvblue">
                    Language &amp; Contact
                </legend>

                <LabeledField id={`${prefix}-language`} label="Language spoken in the home">
                    <input
                        id={`${prefix}-language`}
                        name={`${prefix}-language`}
                        type="text"
                        autoComplete="language"
                        className={inputClass}
                    />
                </LabeledField>

                <LabeledField id={`${prefix}-address`} label="Home address">
                    <input
                        id={`${prefix}-address`}
                        name={`${prefix}-address`}
                        type="text"
                        autoComplete="street-address"
                        placeholder="1234 Main St"
                        className={inputClass}
                    />
                </LabeledField>

                <div className="grid gap-4 sm:grid-cols-3">
                    <LabeledField id={`${prefix}-city`} label="City">
                        <input
                            id={`${prefix}-city`}
                            name={`${prefix}-city`}
                            type="text"
                            autoComplete="address-level2"
                            className={inputClass}
                        />
                    </LabeledField>

                    <LabeledField id={`${prefix}-county`} label="County">
                        <input
                            id={`${prefix}-county`}
                            name={`${prefix}-county`}
                            type="text"
                            autoComplete="off"
                            className={inputClass}
                        />
                    </LabeledField>

                    <LabeledField id={`${prefix}-zip`} label="ZIP code">
                        <input
                            id={`${prefix}-zip`}
                            name={`${prefix}-zip`}
                            type="text"
                            autoComplete="postal-code"
                            className={inputClass}
                        />
                    </LabeledField>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <LabeledField id={`${prefix}-phone`} label="Phone number" required>
                        <input
                            id={`${prefix}-phone`}
                            name={`${prefix}-phone`}
                            type="tel"
                            autoComplete="tel"
                            aria-required="true"
                            className={inputClass}
                        />
                    </LabeledField>

                    <LabeledField
                        id={`${prefix}-email`}
                        label="Email address"
                        required
                        hint="We'll never share your email with anyone else."
                    >
                        <input
                            id={`${prefix}-email`}
                            name={`${prefix}-email`}
                            type="email"
                            autoComplete="email"
                            aria-required="true"
                            className={inputClass}
                        />
                    </LabeledField>
                </div>
            </fieldset>

            {/* Questions & comments */}
            <fieldset className="space-y-4">
                <legend className="w-full border-b-2 border-slate-200 pb-2 text-sm font-bold uppercase tracking-widest text-hvblue">
                    Questions &amp; Comments
                </legend>

                <LabeledField
                    id={`${prefix}-questions`}
                    label="Questions, concerns, or special needs"
                    hint="I authorize Alabama Hands & Voices to disclose to our Parent Guide(s) my name, contact information, and name and age of my child so that a Parent Guide(s) may reach out to me regarding Alabama Hands & Voices activities, resources, and parent-to-parent support."
                >
                    <textarea
                        id={`${prefix}-questions`}
                        name={`${prefix}-questions`}
                        rows={4}
                        className={`${inputClass} resize-y`}
                    />
                </LabeledField>
            </fieldset>
        </>
    )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function GbysFormV3() {
    const [tab, setTab] = useState<'personal' | 'professional'>('personal')
    const personalTabRef = useRef<HTMLButtonElement>(null)
    const professionalTabRef = useRef<HTMLButtonElement>(null)

    function selectTab(next: 'personal' | 'professional') {
        setTab(next)
        const target =
            next === 'personal' ? personalTabRef.current : professionalTabRef.current
        target?.focus()
    }

    return (
        <div>
            {/* Tab intro text */}
            <p className="mb-6 text-base font-medium leading-relaxed text-slate-700 md:text-lg">
                {tab === 'personal'
                    ? 'To be connected with a Parent Guide, please fill out the form below. To become an Alabama Hands & Voices member, visit the '
                    : "Professionals may use this form to refer a family to the GBYS program. Please provide your contact details and the family’s information below. Visit the "}
                <a
                    href="/design-options/v3/membership"
                    className="font-bold text-hvorange-700 underline-offset-4 hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                >
                    membership page
                </a>
                {tab === 'personal' ? '.' : ' for membership information.'}
            </p>

            {/* Tab list */}
            <div
                role="tablist"
                aria-label="Guide By Your Side form type"
                className="mb-8 flex gap-1 rounded-2xl bg-slate-100 p-1.5 ring-1 ring-slate-200"
            >
                <button
                    ref={personalTabRef}
                    id="gbys-v3-personal-tab"
                    role="tab"
                    type="button"
                    aria-selected={tab === 'personal'}
                    aria-controls="gbys-v3-personal-panel"
                    tabIndex={tab === 'personal' ? 0 : -1}
                    onClick={() => selectTab('personal')}
                    onKeyDown={(e) => {
                        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                            e.preventDefault()
                            selectTab('professional')
                        }
                    }}
                    className={[
                        'flex-1 cursor-pointer rounded-xl px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-all duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2',
                        tab === 'personal'
                            ? 'border-b-[3px] border-hvorange-600 bg-white text-hvblue shadow-sm'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-hvblue',
                    ].join(' ')}
                >
                    Personal
                </button>

                <button
                    ref={professionalTabRef}
                    id="gbys-v3-professional-tab"
                    role="tab"
                    type="button"
                    aria-selected={tab === 'professional'}
                    aria-controls="gbys-v3-professional-panel"
                    tabIndex={tab === 'professional' ? 0 : -1}
                    onClick={() => selectTab('professional')}
                    onKeyDown={(e) => {
                        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                            e.preventDefault()
                            selectTab('personal')
                        }
                    }}
                    className={[
                        'flex-1 cursor-pointer rounded-xl px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-all duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2',
                        tab === 'professional'
                            ? 'border-b-[3px] border-hvorange-600 bg-white text-hvblue shadow-sm'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-hvblue',
                    ].join(' ')}
                >
                    Professional Referral
                </button>
            </div>

            {/* Personal panel */}
            <div
                id="gbys-v3-personal-panel"
                role="tabpanel"
                aria-labelledby="gbys-v3-personal-tab"
                hidden={tab !== 'personal'}
            >
                <MockFormV3
                    successTitle="Thanks — this is a preview"
                    successBody="In the live site this referral would reach the GBYS team. No information was submitted."
                    submitLabel="Connect with a Parent Guide"
                >
                    {/* Parent/guardian information */}
                    <fieldset className="space-y-4">
                        <legend className="w-full border-b-2 border-slate-200 pb-2 text-sm font-bold uppercase tracking-widest text-hvblue">
                            Parent / Guardian Information
                        </legend>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <LabeledField
                                id="gbys-v3-parent-name"
                                label="Parent / guardian name"
                                required
                            >
                                <input
                                    id="gbys-v3-parent-name"
                                    name="parent-name"
                                    type="text"
                                    autoComplete="name"
                                    aria-required="true"
                                    className={inputClass}
                                />
                            </LabeledField>

                            <LabeledField
                                id="gbys-v3-secondary-parent"
                                label="Secondary parent / guardian"
                            >
                                <input
                                    id="gbys-v3-secondary-parent"
                                    name="secondary-parent"
                                    type="text"
                                    autoComplete="off"
                                    className={inputClass}
                                />
                            </LabeledField>
                        </div>
                    </fieldset>

                    <ChildFamilyFields prefix="gbys-v3-p" />
                </MockFormV3>
            </div>

            {/* Professional panel */}
            <div
                id="gbys-v3-professional-panel"
                role="tabpanel"
                aria-labelledby="gbys-v3-professional-tab"
                hidden={tab !== 'professional'}
            >
                <MockFormV3
                    successTitle="Thanks — this is a preview"
                    successBody="In the live site this referral would reach the GBYS team. No information was submitted."
                    submitLabel="Submit referral"
                >
                    {/* Referrer information */}
                    <fieldset className="space-y-4">
                        <legend className="w-full border-b-2 border-slate-200 pb-2 text-sm font-bold uppercase tracking-widest text-hvblue">
                            Referrer Information
                        </legend>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <LabeledField
                                id="gbys-v3-ref-name"
                                label="Referrer's full name"
                                required
                            >
                                <input
                                    id="gbys-v3-ref-name"
                                    type="text"
                                    autoComplete="name"
                                    aria-required="true"
                                    className={inputClass}
                                />
                            </LabeledField>

                            <LabeledField
                                id="gbys-v3-ref-role"
                                label="Professional role / title"
                                required
                            >
                                <input
                                    id="gbys-v3-ref-role"
                                    type="text"
                                    autoComplete="organization-title"
                                    aria-required="true"
                                    className={inputClass}
                                />
                            </LabeledField>
                        </div>
                    </fieldset>

                    <ChildFamilyFields prefix="gbys-v3-r" />
                </MockFormV3>
            </div>
        </div>
    )
}
