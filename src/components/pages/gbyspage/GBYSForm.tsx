'use client'
import { useState } from 'react'
import { submitNetlifyForm } from '@/utils/submitNetlifyForm'

// Catalyst fieldset components
import {

    Field,
    Label,
} from '@/components/ui/default/fieldset'
// Catalyst input components
import { Input } from '@/components/ui/default/input'
import { Select } from '@/components/ui/default/select'
import {
    Checkbox,
    CheckboxField,
    CheckboxGroup,
} from '@/components/ui/default/checkbox'
import { Textarea } from '@/components/ui/default/textarea'

// If you want to create a field wrapper or label component, you can do so too.

const GBYSForm = () => {
    const [activeTab, setActiveTab] = useState('personal')
    const [status, setStatus] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

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

            <div className="">
                {activeTab === 'personal' ? (
                    <form
                        method="post"
                        name="gbys"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
                    >
                        {/* Let Netlify know this is the gbys form */}
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

                        {/* Form Content */}
                        <div className="px-4 py-6 sm:p-8">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                {/* Parent/Guardian Name */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="inputName"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Parent/Guardian Name:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputName"
                                            name="name"
                                            type="text"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                {/* Secondary Parent/Guardian Name */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="inputSecondary"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Secondary Parent/Guardian Name:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputSecondary"
                                            name="secondary-parent"
                                            type="text"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                {/* Child's Name */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="childs-name"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Child&apos;s Name:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="childs-name"
                                            name="childs-name"
                                            type="text"
                                            required
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                {/* Child's DOB */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="inputChildDOB"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Child&apos;s DOB:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputChildDOB"
                                            name="child-dob"
                                            type="date"
                                            required
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="inputEmail"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Email:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputEmail"
                                            name="email"
                                            type="email"
                                            required
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-600 sm:text-sm/6"
                                        />
                                    </div>
                                    <small
                                        id="emailHelp"
                                        className="text-sm text-gray-500"
                                    >
                                        We&apos;ll never share your email with
                                        anyone else.
                                    </small>
                                </div>

                                {/* Phone Number */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="inputTel"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Phone Number:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputTel"
                                            name="phone"
                                            type="tel"
                                            required
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                {/* Home Address */}
                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label
                                        htmlFor="inputAddress"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Home Address:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputAddress"
                                            name="address"
                                            type="text"
                                            placeholder="1234 Main St"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                {/* City */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="inputCity"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        City:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputCity"
                                            name="city"
                                            type="text"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                {/* Zip */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="inputZip"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Zip:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputZip"
                                            name="zip"
                                            type="text"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                {/* County */}
                                <div className="sm:col-span-6 md:col-span-3">
                                    <label
                                        htmlFor="inputCounty"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        County:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputCounty"
                                            name="county"
                                            type="text"
                                            placeholder="County"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                {/* Language Spoken in the Home */}
                                <div className="sm:col-span-6 md:col-span-3">
                                    <label
                                        htmlFor="inputLanguage"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Language Spoken in the Home:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="inputLanguage"
                                            name="language"
                                            type="text"
                                            placeholder="Language"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                {/* Type of Hearing Loss */}
                                <div className="sm:col-span-6 md:col-span-3">
                                    <label
                                        htmlFor="inputHearingLoss"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Type of Hearing Loss:
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="inputHearingLoss"
                                            name="hearing-loss"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-600 sm:text-sm/6"
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
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Degree of Hearing Loss (left ear):
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="inputDegreeLeft"
                                            name="degree-left"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-600 sm:text-sm/6"
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
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Degree of Hearing Loss (right ear):
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="inputDegreeRight"
                                            name="degree-right"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-600 sm:text-sm/6"
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
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Hearing device if used:
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="inputHearingDevice"
                                            name="hearing-device"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-600 sm:text-sm/6"
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
                                        className="block text-sm/6 font-medium text-gray-900"
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
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-hvblue-600 sm:text-sm/6"
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
                            >
                                Cancel
                            </button>
                            {/* Submit button */}
                            <button
                                type="submit"
                                className="rounded-md bg-hvblue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-hvblue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hvblue-600"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                ) : (
                    <form
                        name="gbysref"
                        method="POST"
                        data-netlify="true"
                        onSubmit={(e) =>
                            submitNetlifyForm(e, setStatus, setError)
                        }
                        className="grid grid-cols-1 gap-6 shadow-sm ring-1 ring-gray-900/5 md:grid-cols-2"
                    >
                        <input type="hidden" name="form-name" value="gbysref" />

                        {/* Professionals Full Name */}
                        <div className="md:col-span-1">
                            <Field>
                                <Label htmlFor="pr-ref-name">
                                    Professionals Full Name:
                                </Label>
                                <Input
                                    id="pr-ref-name"
                                    name="pr-ref-name"
                                    type="text"
                                    required
                                />
                            </Field>
                        </div>

                        {/* Referral Role */}
                        <div className="md:col-span-1">
                            <Field>
                                <Label htmlFor="pr-ref-role">
                                    Referral Role:
                                </Label>
                                <Input
                                    id="pr-ref-role"
                                    name="pr-ref-role"
                                    type="text"
                                    required
                                />
                            </Field>
                        </div>

                        {/* Name */}
                        <div className="md:col-span-1">
                            <Field>
                                <Label htmlFor="pr-name">Name:</Label>
                                <Input
                                    id="pr-name"
                                    name="pr-name"
                                    type="text"
                                    required
                                />
                            </Field>
                        </div>

                        {/* Phone Number */}
                        <div className="md:col-span-1">
                            <Field>
                                <Label htmlFor="pr-phone">Phone Number:</Label>
                                <Input
                                    id="pr-phone"
                                    name="pr-phone"
                                    type="tel"
                                    required
                                />
                            </Field>
                        </div>

                        {/* Child's Name */}
                        <div className="md:col-span-1">
                            <Field>
                                <Label htmlFor="pr-childs-name">
                                    Child&apos;s Name:
                                </Label>
                                <Input
                                    id="pr-childs-name"
                                    name="pr-childs-name"
                                    type="text"
                                    required
                                />
                            </Field>
                        </div>

                        {/* Email */}
                        <div className="md:col-span-1">
                            <Field>
                                <Label htmlFor="pr-email">Email:</Label>
                                <Input
                                    id="pr-email"
                                    name="pr-email"
                                    type="email"
                                    required
                                />
                            </Field>
                            {/* Email privacy note */}
                            <p className="mt-1 text-sm text-gray-500">
                                We&apos;ll never share your email with anyone
                                else.
                            </p>
                        </div>

                        {/* Home Address */}
                        <div className="md:col-span-1">
                            <Field>
                                <Label htmlFor="pr-address">
                                    Home Address:
                                </Label>
                                <Input
                                    id="pr-address"
                                    name="pr-address"
                                    type="text"
                                />
                            </Field>
                        </div>

                        {/* City */}
                        <div className="md:col-span-1">
                            <Field>
                                <Label htmlFor="pr-city">City:</Label>
                                <Input
                                    id="pr-city"
                                    name="pr-city"
                                    type="text"
                                />
                            </Field>
                        </div>

                        {/* Zip */}
                        <div className="md:col-span-1">
                            <Field>
                                <Label htmlFor="pr-zip">Zip:</Label>
                                <Input id="pr-zip" name="pr-zip" type="text" />
                            </Field>
                        </div>

                        {/* County */}
                        <div className="md:col-span-1">
                            <Field>
                                <Label htmlFor="pr-county">County:</Label>
                                <Input
                                    id="pr-county"
                                    name="pr-county"
                                    type="text"
                                />
                            </Field>
                        </div>

                        {/* Language */}
                        <div className="md:col-span-2">
                            <Field>
                                <Label htmlFor="pr-language">
                                    Language Spoken in the Home:
                                </Label>
                                <Input
                                    id="pr-language"
                                    name="pr-language"
                                    type="text"
                                    required
                                />
                            </Field>
                        </div>

                        {/* Type of Hearing Loss */}
                        <div className="md:col-span-1">
                            <Field>
                                <Label htmlFor="pr-hearing-loss">
                                    Type of Hearing Loss:
                                </Label>
                                <Select
                                    id="pr-hearing-loss"
                                    name="pr-hearing-loss"
                                >
                                    <option value="not-sure">Not Sure</option>
                                    <option value="conductive">
                                        Conductive (middle ear)
                                    </option>
                                    <option value="sensorineural">
                                        Sensorineural (inner ear)
                                    </option>
                                    <option value="mixed">
                                        Mixed (Conductive &amp; Sensorineural)
                                    </option>
                                </Select>
                            </Field>
                        </div>

                        {/* Degree of Hearing Loss (left ear) */}
                        <div className="md:col-span-1">
                            <Field>
                                <Label htmlFor="pr-degree-left">
                                    Degree of Hearing Loss (left ear):
                                </Label>
                                <Select
                                    id="pr-degree-left"
                                    name="pr-degree-left"
                                >
                                    <option value="unsure">Unsure</option>
                                    <option value="normal">Normal</option>
                                    <option value="mild">Mild</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="severe">Severe</option>
                                    <option value="profound">Profound</option>
                                </Select>
                            </Field>
                        </div>

                        {/* Degree of Hearing Loss (right ear) */}
                        <div className="md:col-span-1">
                            <Field>
                                <Label htmlFor="pr-degree-right">
                                    Degree of Hearing Loss (right ear):
                                </Label>
                                <Select
                                    id="pr-degree-right"
                                    name="pr-degree-right"
                                >
                                    <option value="unsure">Unsure</option>
                                    <option value="normal">Normal</option>
                                    <option value="mild">Mild</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="severe">Severe</option>
                                    <option value="profound">Profound</option>
                                </Select>
                            </Field>
                        </div>

                        {/* Hearing device */}
                        <div className="md:col-span-1">
                            <Field>
                                <Label htmlFor="pr-hearing-device">
                                    Hearing device if used:
                                </Label>
                                <Select
                                    id="pr-hearing-device"
                                    name="pr-hearing-device"
                                >
                                    <option value="none">None</option>
                                    <option value="unsure">Unsure</option>
                                    <option value="hearing-aid">
                                        Hearing aid(s)
                                    </option>
                                    <option value="cochlear-implant">
                                        Cochlear Implant(s)
                                    </option>
                                    <option value="baha">
                                        Bone-anchored Hearing Aid(s) (BAHA)
                                    </option>
                                </Select>
                            </Field>
                        </div>

                        {/* Communication mode(s) */}
                        <div className="md:col-span-2">
                            <Field>
                                <Label>Communication mode(s):</Label>
                                <CheckboxGroup className="mt-2">
                                    <CheckboxField>
                                        <Checkbox name="pr-communication-mode-asl" />
                                        <Label>American Sign Language</Label>
                                    </CheckboxField>
                                    <CheckboxField>
                                        <Checkbox name="pr-communication-mode-listening" />
                                        <Label>
                                            Listening and Spoken Language
                                        </Label>
                                    </CheckboxField>
                                    <CheckboxField>
                                        <Checkbox name="pr-communication-mode-fingerspelling" />
                                        <Label>Fingerspelling</Label>
                                    </CheckboxField>
                                    <CheckboxField>
                                        <Checkbox name="pr-communication-mode-cuedSpeech" />
                                        <Label>Cued Speech</Label>
                                    </CheckboxField>
                                    <CheckboxField>
                                        <Checkbox name="pr-communication-mode-combination" />
                                        <Label>
                                            Combination of two or more
                                        </Label>
                                    </CheckboxField>
                                    <CheckboxField>
                                        <Checkbox name="pr-communication-mode-other" />
                                        <Label>Other</Label>
                                    </CheckboxField>
                                </CheckboxGroup>
                            </Field>
                        </div>

                        {/* Parent Questions */}
                        <div className="md:col-span-2">
                            <Field>
                                <Label htmlFor="pr-parent-questions">
                                    Please provide initial parent
                                    questions/support requested, special needs
                                    or important information:
                                </Label>
                                <Textarea
                                    id="pr-parent-questions"
                                    name="pr-parent-questions"
                                    rows={4}
                                />
                            </Field>
                            <p className="mt-2 text-sm text-gray-500">
                                I authorize Alabama Hands &amp; Voices to
                                disclose to our Parent Guide(s) my name, contact
                                information, name and age of my child so that a
                                Parent Guide(s) may reach out to me regarding
                                Alabama Hands &amp; Voices activities and
                                resources and parent‐to‐parent support.
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end md:col-span-2">
                            <button
                                type="submit"
                                disabled={status === 'pending'}
                                className="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                            >
                                {status === 'pending'
                                    ? 'Submitting...'
                                    : 'Submit'}
                            </button>
                        </div>

                        {/* Feedback Messages */}
                        {status === 'error' && (
                            <div className="text-red-600 md:col-span-2">
                                Error: {error}
                            </div>
                        )}
                        {status === 'ok' && (
                            <div className="text-green-600 md:col-span-2">
                                Form submitted successfully!
                            </div>
                        )}
                    </form>
                )}
            </div>
        </section>
    )
}

export default GBYSForm
