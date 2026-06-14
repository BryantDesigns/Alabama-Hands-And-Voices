'use client'

interface PayPalDonationProps {
    label?: string
}

export default function PayPalDonation({
    label = 'Donate Here!',
}: PayPalDonationProps) {
    return (
        <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
            className="flex justify-center"
        >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
                type="hidden"
                name="hosted_button_id"
                value="R99Y9497TS2SW"
            />
            <button
                type="submit"
                className="rounded-md bg-hvorange px-6 py-3 font-semibold text-white shadow-md transition hover:bg-hvorange/90"
            >
                {label}
            </button>
        </form>
    )
}
