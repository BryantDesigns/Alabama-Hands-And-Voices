import type { ReactNode } from 'react'
import HeaderV2 from '@/components/design-options/v2/HeaderV2'
import FooterV2 from '@/components/design-options/v2/FooterV2'
import VariantSwitcher from '@/components/design-options/VariantSwitcher'

export default function V2Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-white text-hvblue">
            <HeaderV2 />
            {children}
            <FooterV2 />
            <VariantSwitcher current="v2" />
        </div>
    )
}
