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
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </Link>

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
                {item.subnav.map((subitem, subidx) => (
                  <DropdownItem
                    // key="autoscaling"
                    // description="ACME scales apps to meet user demand, automagically, based on load."
                    className={`${subidx == 4 ? "border-1 border-grey" : ""}`}
                    startContent={subidx == 5 ? null : icons.flash}
                  >
                    {subidx == 4 ? (
                      <Link href={subitem.link}>
                        <button className="font-semibold flex justify-center text-[#197BEB]  items-center gap-3">
                          click more
                          <FaArrowRight className="" />
                        </button>
                      </Link>
                    ) : (
                      <Link href={subitem.link}>{subitem.name}</Link>
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
          {navdata.map((itm, idx) => (
            <AccordionItem
              key={idx}
              aria-label={itm.mainHeading}
              title={itm.mainHeading}
            >
              {itm.subnav.map((subitm, subidx) => (
                <div>
                  {subidx == 4 ?  <Link href={subitm.link}><button>see more</button></Link> : <Link href={subitm.link}>{subitm.name}</Link>}
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