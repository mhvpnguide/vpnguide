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
import { AcmeLogo } from "./AcmeLogo.jsx";
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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  interface SubnavItem {
    // Define properties based on your actual structure
    name: string;
    link: string;
  }

  interface NavItem {
    mainHeading: string;
    link: string;
    subnav: SubnavItem[];
  }

  const navdata: NavItem[] = [
    {
      mainHeading: "BEST VPN",
      link: "",
      subnav: [
        {
          name: "Best VPN of 2024",
          link: "Link1",
        },
        {
          name: "Best Free VPN",
          link: "Link2",
        },
        {
          name: "Best VPN Free Trials",
          link: "Link3",
        },
        {
          name: "Best Cheap VPN",
          link: "Link4",
        },
        {
          name: "Fastest VPN's of 2024",
          link: "Link5",
        },
      ],
    },
    {
      mainHeading: "VPN REVIEWS",
      link: "",
      subnav: [
        {
          name: "ExpressVPN",
          link: "Link1",
        },
        {
          name: "NordVPN",
          link: "Link2",
        },
        {
          name: "Surfshark",
          link: "Link3",
        },
        {
          name: "CyberGhost",
          link: "Link4",
        },
        {
          name: "PrivateVPN",
          link: "Link5",
        },
      ],
    },
    {
      mainHeading: "WHAT IS A VPN",
      link: "",
      subnav: [
        {
          name: "What Is a VPN Service?",
          link: "Link1",
        },
        {
          name: "How Does a VPN Work?",
          link: "Link2",
        },
        {
          name: "What Is a VPN Used For?",
          link: "Link3",
        },
        {
          name: "Are VPNs Really Worth It?",
          link: "Link4",
        },
        {
          name: "VPN Logging Policies",
          link: "Link5",
        },
      ],
    },
    {
      mainHeading: "GUIDES",
      link: "",
      subnav: [
        {
          name: "How To Hide Your IP Address",
          link: "Link1",
        },
        {
          name: "How To Check Your IP Address",
          link: "Link2",
        },
      ],
    },
    {
      mainHeading: "ABOUT",
      link: "",
      subnav: [
        {
          name: "About Us",
          link: "/aboutus",
        },
        {
          name: "How we test and review",
          link: "Link2",
        },
        {
          name: "How we make money",
          link: "/howWeMakeMoney",
        },
      ],
    },
  ];

  const icons = {
    chevron: (
      <ChevronDown
        fill="currentColor"
        size={16}
        height={undefined}
        width={undefined}
      />
    ),
    scale: (
      <Scale
        className="text-warning"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    lock: (
      <Lock
        className="text-success"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    activity: (
      <Activity
        className="text-secondary"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    flash: (
      <Flash
        className="text-primary"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    server: (
      <Server
        className="text-success"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    user: (
      <TagUser
        className="text-danger"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="W-full">
      <NavbarContent justify="center">
        {/* <NavbarContent className="hidden sm:flex gap-4" justify="center"> */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="laptop:hidden"
        />
        <Link href="/" className="text-inherit"><NavbarBrand className="max-w-fit">
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand></Link>

        <NavbarContent className="hidden laptop:flex gap-3">
          {navdata.map((item, idx) => (
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    {item.mainHeading}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-5",
                }}
              >
                {item.subnav.slice(0, 5).map((subitem, subidx) => (
                  <DropdownItem
                    // key="autoscaling"
                    // description="ACME scales apps to meet user demand, automagically, based on load."
                    className={`${subidx == 4 ? "border-1 border-grey" : ""}`}
                    startContent={subidx == 5 ? null : icons.flash}
                  >
                    {subidx == 4 ? (
                      <button className="font-semibold flex justify-center text-[#197BEB]  items-center gap-3">
                        click more
                        <FaArrowRight className="" />
                      </button>
                    ) : (
                      <Link href={subitem.link}>{subitem.name}</Link>
                    )}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ))}
          <NavbarItem>
            <Link href="/contactpage">
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                CONTACT
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarMenu>
        <Accordion>
          {navdata.map((itm, idx) => (
            <AccordionItem
              key={idx}
              aria-label={itm.mainHeading}
              title={itm.mainHeading}
            >
              {itm.subnav.slice(0, 6).map((subitm, subidx) => (
                <div>
                  {subidx == 5 ? <button>see more</button> : subitm.name}
                </div>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </NavbarMenu>
    </Navbar>
  );
}
