export const membershipTiers = [
    {
        key: 'parent',
        title: '$25 Membership',
        price: '25.00',
        paypalButtonId: 'E5Q6YYU8F3M66',
    },
    {
        key: 'professional',
        title: '$40 Professional Membership',
        price: '40.00',
        paypalButtonId: '32NBUMV7CGXJE',
    },
    {
        key: 'organization',
        title: '$50 Organization Membership',
        price: '50.00',
        paypalButtonId: 'TN95YMB8QNGZN',
    },
] as const

export const PAYPAL_CGI_URL = 'https://www.paypal.com/cgi-bin/webscr'

// Sitewide "Donate" hosted button — carried over from the original site footer
export const donateButtonId = 'R99Y9497TS2SW'
