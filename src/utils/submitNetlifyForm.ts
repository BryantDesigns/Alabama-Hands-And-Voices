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
        // Set the status to 'pending' to show a loading indicator
        setStatus('pending')

        // Reset the error message
        setError(null)

        // Get the form element from the event
        const form = event.currentTarget

        // Create a new FormData object from the form
        const formData = new FormData(form)

        // Convert the FormData entries into an array of [key, value] strings
        // We need to handle files differently because they are not convertible to strings
        const entries = Array.from(formData.entries()).map<[string, string]>(
            ([key, value]) => {
                if (value instanceof File) {
                    // If the value is a file, we only send the file name
                    // You can handle files differently if needed
                    return [key, value.name]
                }
                // If the value is not a file, we can convert it to a string
                return [key, value as string]
            }
        )

        // Create a URLSearchParams object from the entries array
        const body = new URLSearchParams(entries).toString()

        // Send a POST request to '/__forms.html' with the form data
        // https://opennext.js.org/netlify/forms#workaround-for-netlify-forms
        const res = await fetch('/__forms.html', {
            method: 'POST',
            // Set the Content-Type header to 'application/x-www-form-urlencoded'
            // This is required by Netlify
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body,
        })

        // If the response is not OK, throw an error
        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`)
        }

        // If the response is OK, set the status to 'ok' and clear the form fields
        setStatus('ok')
        form.reset()
    } catch (e: unknown) {
        // If an error occurs, set the status to 'error' and update the error message
        const errorMessage =
            e instanceof Error ? e.message : 'An unknown error occurred'
        setStatus('error')
        setError(errorMessage)
    }
}
