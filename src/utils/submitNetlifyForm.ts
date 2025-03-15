/**
 * Submits a Netlify form by sending a POST request to '/__forms.html'.
 *
 * @param event - The form submission event.
 * @param setStatus - Function to update the form submission status.
 * @param setError - Function to update the error message, if any.
 * @returns Promise<void>
 */
export const submitNetlifyForm = async (
    event: React.FormEvent<HTMLFormElement>,
    setStatus: React.Dispatch<React.SetStateAction<string | null>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>
): Promise<void> => {
    event.preventDefault()

    try {
        setStatus('pending')
        setError(null)

        const form = event.currentTarget
        const formData = new FormData(form)

        // Convert the FormData entries into an array of [key, value] strings
        const entries = Array.from(formData.entries()).map<[string, string]>(
            ([key, value]) => {
                if (value instanceof File) {
                    return [key, value.name] // or handle file differently
                }
                return [key, value as string]
            }
        )

        const body = new URLSearchParams(entries).toString()

        const res = await fetch('/__forms.html', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body,
        })

        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`)
        }

        setStatus('ok')
        form.reset() // Clear form fields
    } catch (e: unknown) {
        const errorMessage =
            e instanceof Error ? e.message : 'An unknown error occurred'
        setStatus('error')
        setError(errorMessage)
    }
}
