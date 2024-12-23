"use client";
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react";
import {
    ChevronDown,
    Lock,
    Activity,
    Flash,
    Server,
    TagUser,
    Scale,
} from "./Icons.jsx";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from 'next/navigation';

interface SubnavItem {
    name: string;
    link: string;
}

interface NavItem {
    mainHeading: string;
    subnav?: SubnavItem[];
    link?: string;
}

const SpecialNavbar = () => {
    const specialnav: NavItem[] = [
        {
            mainHeading: "VPN für Deutschland",
            subnav: [
                {
                    name: "Vergleiche VPN",
                    link: "/de/bestes-vpn",
                },
                {
                    name: "Beste VPN 2025",
                    link: "/de/bestes-vpn",
                },
                {
                    name: "Sicherste VPN",
                    link: "/de/sicherstes-vpn",
                },
                {
                    name: "Günstige VPN",
                    link: "/de/gunstiges-vpn",
                },
            ],
        },
        {
            mainHeading: "Gerät",
            subnav: [
                {
                    name: "Android",
                    link: "/de/beste-vpn-android",
                },
                {
                    name: "Iphone",
                    link: "/de/beste-vpn-iphone",
                },
                {
                    name: "Windows",
                    link: "/de/beste-vpn-windows",
                },
                {
                    name: "MacBook",
                    link: "/de/beste-vpn-mac",
                },
            ],
        },
        
    ]

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const pathname = usePathname();
    const currentPath = pathname?.split('/')[1];

    const icons = {
        chevron: (
            <ChevronDown
                fill="currentColor"
                size={16}
                height={undefined}
                width={undefined}
            />
        )
    };

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="w-full specialNav" position="static">
            <NavbarContent justify="center">
                {/* <NavbarContent className="hidden sm:flex gap-4" justify="center"> */}
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="laptop:hidden"
                />
                <Link href="/" className="text-inherit">
                    <NavbarBrand className="max-w-fit">
                        {/* <div className={`${!(currentPath) ? null : "ml-[170px]"}`}> */}
                        <Image src="/logo.png" alt="logo" height={30} width={30} />
                        <p className="font-bold text-inherit">VPNs GUIDE</p>
                    </NavbarBrand>
                </Link>

                {/* special navbar */}
                <NavbarContent className="hidden laptop:flex gap-3 w-full">
                    {specialnav.map((item: NavItem, idx: number) =>
                        item.subnav && item.subnav.length > 0 ? (
                            <Dropdown key={idx} shouldBlockScroll={false}>
                                <NavbarItem>
                                    <DropdownTrigger>
                                        <Button
                                            disableRipple
                                            className="p-0 bg-transparent data-[hover=true]:bg-transparent font-kantumruyPro "
                                            endContent={icons.chevron}
                                            radius="sm"
                                            variant="light"
                                        >
                                            {item.mainHeading}
                                        </Button>
                                    </DropdownTrigger>
                                </NavbarItem>
                                <DropdownMenu
                                    aria-label="VPN guide"
                                    className="w-[340px]"
                                    itemClasses={{
                                        base: "gap-5",
                                    }}
                                >
                                    {item.subnav?.map((subitem: SubnavItem, subidx: number) => (
                                        <DropdownItem
                                            key={idx}
                                            className={`px-4 mb-2 customNavDesign`}
                                        >
                                            <Link
                                                href={subitem.link}
                                                className="px-2 py-1 text-inherit w-full font-kantumruyPro"
                                            >
                                                {subitem.name}
                                            </Link>
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        ) : (
                            <NavbarItem key={idx}>
                                <Link href={item.link}>
                                    <Button
                                        disableRipple
                                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                        radius="sm"
                                        variant="light"
                                    >
                                        {item.mainHeading}
                                    </Button>
                                </Link>
                            </NavbarItem>
                        )
                    )}
                </NavbarContent>
            </NavbarContent>

            {/* mobile view */}
            <NavbarMenu>
                {specialnav.map((itm: NavItem, idx: number) =>
                    itm.subnav && itm.subnav.length > 0 ? (
                        <Accordion key={idx}>
                            <AccordionItem
                                key={idx}
                                aria-label={itm.mainHeading}
                                title={itm.mainHeading}
                            >
                                {itm.subnav.map((subitm: SubnavItem, subidx: number) => (
                                    <div key={subidx}>
                                        <Link
                                            href={subitm.link}
                                            className="text-inherit mb-4 w-full p-2"
                                        >
                                            {subitm.name}
                                        </Link>
                                    </div>
                                ))}
                            </AccordionItem>
                        </Accordion>
                    ) : (
                        <NavbarItem key={idx}>
                            <Link href={itm.link}>
                                <Button
                                    disableRipple
                                    className="p-0 px-2 bg-transparent data-[hover=true]:bg-transparent text-[16px] justify-start"
                                    radius="sm"
                                    variant="light"
                                >
                                    {itm.mainHeading}
                                </Button>
                            </Link>
                        </NavbarItem>
                    )
                )}
            </NavbarMenu>

        </Navbar >
    );
};

export default SpecialNavbar;
