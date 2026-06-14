import type { ReactNode } from 'react'
import HeaderV3 from '@/components/design-options/v3/HeaderV3'
import FooterV3 from '@/components/design-options/v3/FooterV3'
import VariantSwitcher from '@/components/design-options/VariantSwitcher'

export default function V3Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-white text-hvblue">
            <HeaderV3 />
            {children}
            <FooterV3 />
            <VariantSwitcher current="v3" />
        </div>
    )
}
