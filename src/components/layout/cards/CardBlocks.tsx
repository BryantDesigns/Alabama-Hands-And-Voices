// Card block components with JSDoc comments for Tailwind CSS layouts

/**
 * Classic white card container.
 * - Always rounded (`rounded-lg`), white background, drop shadow.
 * - Internal padding adapts for mobile (`px-4 py-5`) and desktop (`sm:p-6`).
 * - Use for simple, single-section card UIs.
 */
export function BasicCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
    )
}

/**
 * Card that is not rounded on mobile, but rounded at `sm` breakpoint and up.
 * - Useful for edge-to-edge mobile layouts.
 */
export function UnroundedMobileCard({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
    )
}

/**
 * Card with a header and a body section, separated by a light divider.
 * - More vertical padding on the body for visual hierarchy.
 */
export function DividedCardHeaderBody({
    header,
    body,
}: {
    header: React.ReactNode
    body: React.ReactNode
}) {
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:px-6">{header}</div>
            <div className="px-4 py-5 sm:p-6">{body}</div>
        </div>
    )
}

/**
 * Card with main section and a footer, separated by a divider.
 * - Footer uses less vertical padding for a lighter visual feel.
 */
export function DividedCardBodyFooter({
    body,
    footer,
}: {
    body: React.ReactNode
    footer: React.ReactNode
}) {
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">{body}</div>
            <div className="px-4 py-4 sm:px-6">{footer}</div>
        </div>
    )
}

/**
 * Card with header, body, and footer—all separated by dividers.
 * - Header and footer have slightly different padding for best visual hierarchy.
 */
export function DividedCardHeaderBodyFooter({
    header,
    body,
    footer,
}: {
    header: React.ReactNode
    body: React.ReactNode
    footer: React.ReactNode
}) {
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:px-6">{header}</div>
            <div className="px-4 py-5 sm:p-6">{body}</div>
            <div className="px-4 py-4 sm:px-6">{footer}</div>
        </div>
    )
}

/**
 * Card with a distinct, gray-tinted footer.
 * - Useful for call-to-action or summary footers.
 */
export function CardWithFooter({
    children,
    footer,
}: {
    children: React.ReactNode
    footer: React.ReactNode
}) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">{children}</div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">{footer}</div>
        </div>
    )
}

/**
 * Card with white header and gray body section.
 * - Great for keeping meta/title distinct from main content.
 */
export function CardHeaderWithGrayBody({
    header,
    body,
}: {
    header: React.ReactNode
    body: React.ReactNode
}) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:px-6">{header}</div>
            <div className="bg-gray-50 px-4 py-5 sm:p-6">{body}</div>
        </div>
    )
}

/**
 * Muted gray background card.
 * - Useful for secondary, non-interactive panels or onboarding content.
 */
export function GrayCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="overflow-hidden rounded-lg bg-gray-50">
            <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
    )
}

/**
 * Bolder gray background card for visual emphasis.
 * - Great for callouts, alerts, or highlighted sections.
 */
export function SolidGrayCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="overflow-hidden rounded-lg bg-gray-200">
            <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
    )
}

/**
 * Gray background card, only rounded at `sm` breakpoint and above.
 * - Edge-to-edge look on mobile, friendly card on desktop.
 */
export function UnroundedMobileGrayCard({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="overflow-hidden bg-gray-50 sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
    )
}
