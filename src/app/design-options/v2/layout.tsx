import type { ReactNode } from 'react'

export default function V2Layout({ children }: { children: ReactNode }) {
    return <div data-variant="v2">{children}</div>
}
