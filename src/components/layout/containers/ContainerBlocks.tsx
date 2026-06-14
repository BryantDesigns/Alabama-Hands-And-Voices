export function ResponsiveConstrainedContainerWithPadding({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
}

export function ConstrainedContainerWithPadding({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    )
}
  

export function FluidBreakpointContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="container mx-auto sm:px-6 lg:px-8">{children}</div>
}
  

export function PaddedFluidContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    )
}
  

export function CenteredContentWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">{children}</div>
        </div>
    )
}
  
