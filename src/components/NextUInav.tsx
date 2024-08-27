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

interface SubnavItem {
  name: string;
  link: string;
}

interface NavItem {
  mainHeading: string;
  subnav: SubnavItem[];
}

interface NavbarProps {
  navdata: NavItem[]; // Define the type of the navdata prop
}

const NextUiNavbar: React.FC<NavbarProps> = ({ navdata }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
        <Link href="/" className="text-inherit">
          <NavbarBrand className="max-w-fit">
            <div>
              <Image src="/logo.png" alt="logo" height={30} width={30}/>
            </div>
            <p className="font-bold text-inherit">VPNGUIDE</p>
          </NavbarBrand>
        </Link>

        <NavbarContent className="hidden laptop:flex gap-3 w-full">
          {navdata.map((item:NavItem, idx:number) => (
            <Dropdown key={idx}>
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
                {item.subnav.map((subitem: SubnavItem, subidx: number) => (
                  <DropdownItem
                    key={idx}
                    // key="autoscaling"
                    // description="ACME scales apps to meet user demand, automagically, based on load."
                    className={`${subidx == 4 ? "" : ""}`}
                    startContent={subidx == 5 ? null : icons.flash}
                  >
                    {subidx == 5 ? (
                      <Link href={subitem.link} className="w-full">
                        <div className="font-semibold flex justify-start text-[#197BEB]  items-center gap-3 w-full">
                          click more
                          <FaArrowRight className="" />
                        </div>
                      </Link>
                    ) : (
                      <Link href={subitem.link} className="text-inherit w-full">{subitem.name}</Link>
                    )}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ))}
          <NavbarItem>
            <Link href="/contact-us">
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

      {/* mobile view */}
      <NavbarMenu>
        <Accordion>
          {navdata.map((itm: NavItem, idx: number) => (
            <AccordionItem
              key={idx}
              aria-label={itm.mainHeading}
              title={itm.mainHeading}
            >
              {itm.subnav.map((subitm: SubnavItem, subidx: number) => (
                <div key={idx}>
                  {subidx == 4 ?  <Link href={subitm.link} className="mb-4"><button>see more</button></Link> : <Link href={subitm.link} className="text-inherit mb-4  w-full p-2">{subitm.name}</Link>}
                </div>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </NavbarMenu>
    </Navbar>
  );
}

export default NextUiNavbar;