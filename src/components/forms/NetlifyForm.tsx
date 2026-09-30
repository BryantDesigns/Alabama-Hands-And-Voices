'use client'
import {
    createContext,
    useContext,
    useRef,
    useState,
    type FormEvent,
    type ReactNode,
} from 'react'

// Netlify detects forms only from this static detection form at deploy time,
// so submissions post there rather than to the page route.
// https://opennext.js.org/netlify/forms#workaround-for-netlify-forms
const DETECTION_FORM_PATH = '/__forms.html'

type SubmissionStatus = 'idle' | 'pending' | 'success' | 'error'

// Whether the enclosing NetlifyForm has a submission in flight.
const SubmissionPendingContext = createContext(false)

interface NetlifyFormProps {
    name: string
    successMessage: ReactNode
    // The organisation's email, offered as a fallback when a submission fails.
    contactEmail: string
    onSuccess?: () => void
    children: ReactNode
    'aria-label'?: string
    className?: string
}

// Netlify expects a urlencoded body. File values are reduced to their names;
// no live form has a file input.
function encodeFormData(form: HTMLFormElement) {
    const entries = Array.from(
        new FormData(form),
        ([fieldName, value]): [string, string] => [
            fieldName,
            value instanceof File ? value.name : value,
        ]
    )
    return new URLSearchParams(entries).toString()
}

async function postFormSubmission(form: HTMLFormElement) {
    const response = await fetch(DETECTION_FORM_PATH, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(form),
    })
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
    }
}

/**
 * A live Netlify form: renders the `<form>` with its Netlify wiring, submits it
 * to the detection-form path and announces the outcome in live regions.
 */
export function NetlifyForm({
    name,
    successMessage,
    contactEmail,
    onSuccess,
    children,
    'aria-label': ariaLabel,
    className,
}: NetlifyFormProps) {
    const [status, setStatus] = useState<SubmissionStatus>('idle')
    // Set synchronously, so a second click that lands before React re-renders
    // the disabled SubmitButton still sends nothing.
    const isPendingRef = useRef(false)

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (isPendingRef.current) return
        isPendingRef.current = true
        const form = event.currentTarget
        setStatus('pending')

        try {
            await postFormSubmission(form)
        } catch (error) {
            console.error(`Netlify form "${name}" did not send:`, error)
            setStatus('error')
            return
        } finally {
            isPendingRef.current = false
        }

        form.reset()
        setStatus('success')
        onSuccess?.()
    }

    return (
        <form
            method="POST"
            name={name}
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            aria-label={ariaLabel}
            className={className}
        >
            <input type="hidden" name="form-name" value={name} />
            <p className="hidden">
                <label>
                    Don&apos;t fill this out if you&apos;re human:
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
            </p>

            <SubmissionPendingContext value={status === 'pending'}>
                {children}
            </SubmissionPendingContext>

            {/* Always mounted: screen readers announce a live region's
                changes reliably only when the region exists beforehand. */}
            <div role="status" aria-live="polite">
                {status === 'success' && (
                    <div className="mt-6 rounded-xl bg-green-50 p-4 text-sm font-medium text-green-800 ring-1 ring-green-200">
                        {successMessage}
                    </div>
                )}
            </div>
            <div role="alert" aria-live="assertive">
                {status === 'error' && (
                    <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-800 ring-1 ring-red-200">
                        Sorry, your form didn&apos;t send. Please try again, or
                        email us at{' '}
                        <a
                            href={`mailto:${contactEmail}`}
                            className="underline underline-offset-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-800 focus-visible:ring-offset-2"
                        >
                            {contactEmail}
                        </a>
                        .
                    </div>
                )}
            </div>
        </form>
    )
}

/**
 * The submit button of the enclosing NetlifyForm. Shows "Sending…" and is
 * disabled while a submission is pending.
 */
export function SubmitButton({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    const isPending = useContext(SubmissionPendingContext)

    return (
        <button type="submit" disabled={isPending} className={className}>
            {isPending ? 'Sending…' : children}
        </button>
    )
}
