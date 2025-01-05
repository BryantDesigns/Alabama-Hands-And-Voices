import { Link } from '@/components/ui/default/link'
import Test from '@/components/ui/Test'
import {
    Dropdown,
    DropdownButton,
    DropdownItem,
    DropdownLabel,
    DropdownMenu,
} from '@/components/ui/default/dropdown'
import {
    Navbar,
    NavbarDivider,
    NavbarItem,
    NavbarLabel,
    NavbarSection,
    NavbarSpacer,
} from '@/components/ui/default/navbar'
import {
    Sidebar,
    SidebarBody,
    SidebarHeader,
    SidebarItem,
    SidebarLabel,
    SidebarSection,
} from '@/components/ui/default/sidebar'
import { StackedLayout } from '@/components/ui/default/stacked-layout'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { InboxIcon } from '@heroicons/react/20/solid'
import Logo from '@/components/ui/Logo'

function AboutDropdownMenu() {
    return (
        <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
            <DropdownItem href="/about">
                <DropdownLabel>Who We Are</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/about/board">
                <DropdownLabel>Board Members</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/about/staff">
                <DropdownLabel>Staff</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/about/contact">
                <DropdownLabel>Contact Us</DropdownLabel>
            </DropdownItem>
        </DropdownMenu>
    )
}

function ProgramDropdownMenu() {
    return (
        <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
            <DropdownItem href="/programs/gbys">
                <DropdownLabel>Guide by Your Side &#40;GBYS&#41;</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/programs/astra">
                <DropdownLabel>
                    Educational Advocacy &#40;ASTra&#41;
                </DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/programs/safety">
                <DropdownLabel>
                    O.U.R. Children&apos;s Safety Project
                </DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/programs/dhh">
                <DropdownLabel>DHH Committee Members</DropdownLabel>
            </DropdownItem>
        </DropdownMenu>
    )
}

export default function PagesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Test />
            {children}
        </>
    )
}
