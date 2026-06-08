import { ExclamationCircleIcon } from '@heroicons/react/16/solid'
import { EnvelopeIcon } from '@heroicons/react/16/solid'
import { QuestionMarkCircleIcon } from '@heroicons/react/16/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { BarsArrowUpIcon, UsersIcon } from '@heroicons/react/16/solid'

export default function InputGroupGallery() {
    return (
        <div className="mx-auto max-w-xl space-y-10 py-10">
            <Section label="InputWithLabel">
                <InputWithLabel />
            </Section>
            <Section label="InputWithLabelAndHelpText">
                <InputWithLabelAndHelpText />
            </Section>
            <Section label="InputWithError">
                <InputWithError />
            </Section>
            <Section label="InputDisabled">
                <InputDisabled />
            </Section>
            <Section label="InputHiddenLabel">
                <InputHiddenLabel />
            </Section>
            <Section label="InputWithCornerHint">
                <InputWithCornerHint />
            </Section>
            <Section label="InputWithLeadingIcon">
                <InputWithLeadingIcon />
            </Section>
            <Section label="InputWithTrailingIcon">
                <InputWithTrailingIcon />
            </Section>
            <Section label="InputWithAddon">
                <InputWithAddon />
            </Section>
            <Section label="InputWithInlineAddon">
                <InputWithInlineAddon />
            </Section>
            <Section label="InputWithLeadingAndTrailingAddon">
                <InputWithLeadingAndTrailingAddon />
            </Section>
            <Section label="InputWithLeadingDropdown">
                <InputWithLeadingDropdown />
            </Section>
            <Section label="InputWithInlineLeadingAddonAndTrailingDropdown">
                <InputWithInlineLeadingAddonAndTrailingDropdown />
            </Section>
            <Section label="InputWithLeadingIconAndTrailingButton">
                <InputWithLeadingIconAndTrailingButton />
            </Section>
            <Section label="InputGroupSharedBorders">
                <InputGroupSharedBorders />
            </Section>
            <Section label="InputWithInsetLabel">
                <InputWithInsetLabel />
            </Section>
            <Section label="InputGroupInsetLabelSharedBorders">
                <InputGroupInsetLabelSharedBorders />
            </Section>
            <Section label="InputWithFloatingLabel">
                <InputWithFloatingLabel />
            </Section>
            <Section label="InputPill">
                <InputPill />
            </Section>
        </div>
    )
}

// Utility component for section headers
function Section({
    label,
    children,
}: {
    label: string
    children: React.ReactNode
}) {
    return (
        <div>
            <h3 className="mb-2 text-sm font-semibold text-hvblue-500">
                {label}
            </h3>
            {children}
        </div>
    )
}
  

 function InputWithLabel() {
    return (
        <div>
            <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
            >
                Email
            </label>
            <div className="mt-2">
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
        </div>
    )
}

 function InputWithLabelAndHelpText() {
    return (
        <div>
            <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
            >
                Email
            </label>
            <div className="mt-2">
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    aria-describedby="email-description"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
            <p id="email-description" className="mt-2 text-sm text-gray-500">
                We&apos;ll only use this for spam.
            </p>
        </div>
    )
}

 function InputWithError() {
    return (
        <div>
            <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
            >
                Email
            </label>
            <div className="mt-2 grid grid-cols-1">
                <input
                   value="adamwathan"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    aria-invalid="true"
                    aria-describedby="email-error"
                    className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-base text-red-900 outline outline-1 -outline-offset-1 outline-red-300 placeholder:text-red-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:pr-9 sm:text-sm/6"
                />
                <ExclamationCircleIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4"
                />
            </div>
            <p id="email-error" className="mt-2 text-sm text-red-600">
                Not a valid email address.
            </p>
        </div>
    )
}

 function InputDisabled() {
    return (
        <div>
            <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
            >
                Email
            </label>
            <div className="mt-2">
                <input
                   value="you@example.com"
                    id="email"
                    name="email"
                    type="email"
                    disabled
                    placeholder="you@example.com"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:outline-gray-200 sm:text-sm/6"
                />
            </div>
        </div>
    )
}

 function InputHiddenLabel() {
    return (
        <div>
            <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                aria-label="Email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
        </div>
    )
}

 function InputWithCornerHint() {
    return (
        <div>
            <div className="flex justify-between">
                <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                >
                    Email
                </label>
                <span id="email-optional" className="text-sm/6 text-gray-500">
                    Optional
                </span>
            </div>
            <div className="mt-2">
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    aria-describedby="email-optional"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
        </div>
    )
}


 function InputWithLeadingIcon() {
    return (
        <div>
            <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
            >
                Email
            </label>
            <div className="mt-2 grid grid-cols-1">
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                />
                <EnvelopeIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                />
            </div>
        </div>
    )
}

 function InputWithTrailingIcon() {
    return (
        <div>
            <label
                htmlFor="account-number"
                className="block text-sm/6 font-medium text-gray-900"
            >
                Account number
            </label>
            <div className="mt-2 grid grid-cols-1">
                <input
                    id="account-number"
                    name="account-number"
                    type="text"
                    placeholder="000-00-0000"
                    className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pr-9 sm:text-sm/6"
                />
                <QuestionMarkCircleIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                />
            </div>
        </div>
    )
}

 function InputWithAddon() {
    return (
        <div>
            <label
                htmlFor="company-website"
                className="block text-sm/6 font-medium text-gray-900"
            >
                Company website
            </label>
            <div className="mt-2 flex">
                <div className="flex shrink-0 items-center rounded-l-md bg-white px-3 text-base text-gray-500 outline outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6">
                    https://
                </div>
                <input
                    id="company-website"
                    name="company-website"
                    type="text"
                    placeholder="www.example.com"
                    className="-ml-px block w-full grow rounded-r-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
        </div>
    )
}

 function InputWithInlineAddon() {
    return (
        <div>
            <label
                htmlFor="company-website"
                className="block text-sm/6 font-medium text-gray-900"
            >
                Company website
            </label>
            <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                        https://
                    </div>
                    <input
                        id="company-website"
                        name="company-website"
                        type="text"
                        placeholder="www.example.com"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                </div>
            </div>
        </div>
    )
}

 function InputWithLeadingAndTrailingAddon() {
    return (
        <div>
            <label
                htmlFor="price"
                className="block text-sm/6 font-medium text-gray-900"
            >
                Price
            </label>
            <div className="mt-2">
                <div className="flex items-center rounded-md bg-white px-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                        $
                    </div>
                    <input
                        id="price"
                        name="price"
                        type="text"
                        placeholder="0.00"
                        aria-describedby="price-currency"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                    <div
                        id="price-currency"
                        className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"
                    >
                        USD
                    </div>
                </div>
            </div>
        </div>
    )
}


 function InputWithLeadingDropdown() {
    return (
        <div>
            <label
                htmlFor="phone-number"
                className="block text-sm/6 font-medium text-gray-900"
            >
                Phone number
            </label>
            <div className="mt-2">
                <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select
                            id="country"
                            name="country"
                            autoComplete="country"
                            aria-label="Country"
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        >
                            <option>US</option>
                            <option>CA</option>
                            <option>EU</option>
                        </select>
                        <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                    </div>
                    <input
                        id="phone-number"
                        name="phone-number"
                        type="text"
                        placeholder="123-456-7890"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                </div>
            </div>
        </div>
    )
}

 function InputWithInlineLeadingAddonAndTrailingDropdown() {
    return (
        <div>
            <label
                htmlFor="price"
                className="block text-sm/6 font-medium text-gray-900"
            >
                Price
            </label>
            <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                        $
                    </div>
                    <input
                        id="price"
                        name="price"
                        type="text"
                        placeholder="0.00"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select
                            id="currency"
                            name="currency"
                            aria-label="Currency"
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        >
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                        </select>
                        <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

 function InputWithLeadingIconAndTrailingButton() {
    return (
        <div>
            <label
                htmlFor="query"
                className="block text-sm/6 font-medium text-gray-900"
            >
                Search candidates
            </label>
            <div className="mt-2 flex">
                <div className="-mr-px grid grow grid-cols-1 focus-within:relative">
                    <input
                        id="query"
                        name="query"
                        type="text"
                        placeholder="John Smith"
                        className="col-start-1 row-start-1 block w-full rounded-l-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                    />
                    <UsersIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                    />
                </div>
                <button
                    type="button"
                    className="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 hover:bg-gray-50 focus:relative focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                >
                    <BarsArrowUpIcon
                        aria-hidden="true"
                        className="-ml-0.5 size-4 text-gray-400"
                    />
                    Sort
                </button>
            </div>
        </div>
    )
}

 function InputGroupSharedBorders() {
    return (
        <div>
            <fieldset>
                <legend className="block text-sm/6 font-medium text-gray-900">
                    Card details
                </legend>
                <div className="mt-2 grid grid-cols-2">
                    <div className="col-span-2">
                        <input
                            id="card-number"
                            name="card-number"
                            type="text"
                            placeholder="Card number"
                            aria-label="Card number"
                            className="block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div className="-mr-px -mt-px">
                        <input
                            id="card-expiration-date"
                            name="card-expiration-date"
                            type="text"
                            placeholder="MM / YY"
                            aria-label="Expiration date"
                            className="block w-full rounded-bl-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div className="-mt-px">
                        <input
                            id="card-cvc"
                            name="card-cvc"
                            type="text"
                            placeholder="CVC"
                            aria-label="CVC"
                            className="block w-full rounded-br-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
            </fieldset>
            <fieldset className="mt-6">
                <legend className="block text-sm/6 font-medium text-gray-900">
                    Billing address
                </legend>
                <div className="mt-2">
                    <div className="grid grid-cols-1 focus-within:relative">
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            aria-label="Country"
                            className="col-start-1 row-start-1 w-full appearance-none rounded-t-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                        </select>
                        <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                    </div>
                    <div className="-mt-px">
                        <input
                            id="postal-code"
                            name="postal-code"
                            type="text"
                            placeholder="ZIP / Postal code"
                            autoComplete="postal-code"
                            aria-label="ZIP / Postal code"
                            className="block w-full rounded-b-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
            </fieldset>
        </div>
    )
}

 function InputWithInsetLabel() {
    return (
        <div className="rounded-md bg-white px-3 pb-1.5 pt-2.5 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <label
                htmlFor="name"
                className="block text-xs font-medium text-gray-900"
            >
                Name
            </label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Smith"
                className="block w-full text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
        </div>
    )
}

 function InputGroupInsetLabelSharedBorders() {
    return (
        <div className="relative">
            <label
                htmlFor="name"
                className="absolute -top-2 left-2 inline-block rounded-lg bg-white px-1 text-xs font-medium text-gray-900"
            >
                Name
            </label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Smith"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
        </div>
    )
}

 function InputWithFloatingLabel() {
    return (
        <div>
            <label
                htmlFor="name"
                className="ml-px block pl-4 text-sm/6 font-medium text-gray-900"
            >
                Name
            </label>
            <div className="mt-2">
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    className="block w-full rounded-full bg-white px-4 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
        </div>
    )
}

 function InputPill() {
    return (
        <div>
            <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900"
            >
                Name
            </label>
            <div className="relative mt-2">
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    className="peer block w-full bg-gray-50 px-3 py-1.5 text-gray-900 placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                />
            </div>
        </div>
    )
}
