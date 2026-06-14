import type { ReactNode } from 'react'

export default function V3Layout({ children }: { children: ReactNode }) {
    return <div data-variant="v3">{children}</div>
}
