'use client'
import { useState } from 'react'
import { submitNetlifyForm } from '@/utils/submitNetlifyForm'

// Catalyst fieldset components
import {
  Fieldset,
  Legend,
  FieldGroup,
  Field,
  Label,
} from '@/components/ui/default/fieldset'
// Catalyst input components
import { Input } from '@/components/ui/default/input'
import { Select } from '@/components/ui/default/select'
import { Checkbox, CheckboxField, CheckboxGroup } from '@/components/ui/default/checkbox'
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

            <div className="mt-8 bg-gray-500">
                {activeTab === 'personal' ? (
                    <form
                        name="gbys-form"
                        method="POST"
                        data-netlify="true"
                        onSubmit={(e) =>
                            submitNetlifyForm(e, setStatus, setError)
                        }
                        className="grid grid-cols-1 gap-6 md:grid-cols-2"
                    >
                        <input
                            type="hidden"
                            name="form-name"
                            value="gbys-form"
                        />

                        <div>
                            <label
                                htmlFor="parentGuardianName"
                                className="block font-medium"
                            >
                                Parent/Guardian Name
                            </label>
                            <input
                                type="text"
                                name="parentGuardianName"
                                required
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
                                required
                                className="w-full rounded-md border-gray-300 p-2"
                            />
                        </div>

                        <div>
                            <label className="block font-medium">
                                Child&apos;s Name
                            </label>
                            <input
                                type="text"
                                name="childName"
                                required
                                className="w-full rounded-md border-gray-300 p-2"
                            />
                        </div>

                        <button
                            type="submit"
                            className="col-span-2 rounded-md bg-blue-600 py-2 text-white"
                            disabled={status === 'pending'}
                        >
                            {status === 'ok'
                                ? 'Submitted'
                                : status === 'pending'
                                  ? 'Submitting...'
                                  : 'Submit'}
                        </button>

                        {status === 'error' && (
                            <div className="text-red-500">Error: {error}</div>
                        )}
                    </form>
                ) : (
                    <form
                        name="gbysref"
                        method="POST"
                        data-netlify="true"
                        onSubmit={(e) =>
                            submitNetlifyForm(e, setStatus, setError)
                        }
                        className="grid grid-cols-1 gap-6 md:grid-cols-2"
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
