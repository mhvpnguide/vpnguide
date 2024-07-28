"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./Icons.jsx";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

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

  // const dataArray = Object.entries(combinedData).map(([key, value]) => ({
  //   key,
  //   ...value
  // }));

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
      "mainHeading": "BEST VPN",
      "link": "",
      "subnav": [
        {
          "name": "Best VPN of 2024",
          "link": "Link1"
        },
        {
          "name": "Best Free VPN",
          "link": "Link2"
        },
        {
          "name": "Best VPN Free Trials",
          "link": "Link3"
        },
        {
          "name": "Best Cheap VPN",
          "link": "Link4"
        },
        {
          "name": "Fastest VPN's of 2024",
          "link": "Link5"
        },
      ]
    },
    {
      "mainHeading": "VPN REVIEWS",
      "link": "",
      "subnav": [
        {
          "name": "ExpressVPN",
          "link": "Link1"
        },
        {
          "name": "NordVPN",
          "link": "Link2"
        },
        {
          "name": "Surfshark",
          "link": "Link3"
        },
        {
          "name": "CyberGhost",
          "link": "Link4"
        },
        {
          "name": "PrivateVPN",
          "link": "Link5"
        }
      ]
    },
    {
      "mainHeading": "WHAT IS A VPN",
      "link": "",
      "subnav": [
        {
          "name": "What Is a VPN Service?",
          "link": "Link1"
        },
        {
          "name": "How Does a VPN Work?",
          "link": "Link2"
        },
        {
          "name": "What Is a VPN Used For?",
          "link": "Link3"
        },
        {
          "name": "Are VPNs Really Worth It?",
          "link": "Link4"
        },
        {
          "name": "VPN Logging Policies",
          "link": "Link5"
        }
      ]
    },
    {
      "mainHeading": "GUIDES",
      "link": "",
      "subnav": [
        {
          "name": "How To Hide Your IP Address",
          "link": "Link1"
        },
        {
          "name": "How To Check Your IP Address",
          "link": "Link2"
        },
      ]
    },
    {
      "mainHeading": "ABOUT",
      "link": "",
      "subnav": [
        {
          "name": "How we make money",
          "link": "Link1"
        },
        {
          "name": "How we test and review",
          "link": "Link2"
        },
      ]
    }
  ];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} height={undefined} width={undefined} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} height={undefined} width={undefined} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} height={undefined} width={undefined} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} height={undefined} width={undefined} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} height={undefined} width={undefined} />,
    server: <Server className="text-success" fill="currentColor" size={30} height={undefined} width={undefined} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} height={undefined} width={undefined} />,
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="W-100">
      <NavbarContent justify="start">
        {/* <NavbarContent className="hidden sm:flex gap-4" justify="center"> */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>


        <NavbarContent className="hidden sm:flex gap-3">
          {
            navdata.map((item, idx) => (<Dropdown>
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
                {
                  item.subnav.slice(0, 6).map((subitem, subidx) => (
                    <DropdownItem
                      // key="autoscaling"
                      // description="ACME scales apps to meet user demand, automagically, based on load."
                      startContent={subidx == 5 ? null : icons.flash}
                    >
                      {
                        subidx == 5 ?
                          <button>click more</button> :
                          subitem.name
                      }

                    </DropdownItem>
                  ))

                }

              </DropdownMenu>
            </Dropdown>)
            )
          }
          <NavbarItem>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              radius="sm"
              variant="light"
            >
              CONTACT
            </Button>
          </NavbarItem>



          {/* <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  VPN REVIEWS
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
                startContent={icons.scale}
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent={icons.activity}
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
                startContent={icons.flash}
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent={icons.server}
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                startContent={icons.user}
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>


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
                  WHAT IS A VPN
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px] justify-center items-center"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                // description="ACME scales apps to meet user demand, automagically, based on load."
                startContent={icons.user}
              >
                What Is a VPN Service?
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                // description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent={icons.user}
              >
                How Does a VPN Work?
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                // description="ACME runs on ACME, join us and others serving requests at web scale."
                startContent={icons.user}
              >
                What Is a VPN Used For?
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                // description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent={icons.user}
              >
                Are VPNs Really Worth It?
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                // description="Overcome any challenge with a supporting team ready to respond."
                startContent={icons.user}
              >
                VPN Logging Policies
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
              // description="Overcome any challenge with a supporting team ready to respond."
              // startContent={icons.user}
              >
                <Button>See All Guides</Button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

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
                  TOOLS
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
                startContent={icons.scale}
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent={icons.activity}
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
                startContent={icons.flash}
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent={icons.server}
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                startContent={icons.user}
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

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
                  GUIDES
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
                startContent={icons.scale}
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent={icons.activity}
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
                startContent={icons.flash}
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent={icons.server}
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                startContent={icons.user}
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

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
                  RESEARCH
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
                startContent={icons.scale}
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent={icons.activity}
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
                startContent={icons.flash}
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent={icons.server}
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                startContent={icons.user}
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

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
                  ABOUT
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
                startContent={icons.scale}
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent={icons.activity}
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
                startContent={icons.flash}
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent={icons.server}
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                startContent={icons.user}
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> */}


        </NavbarContent>
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      {/* <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}


      <NavbarMenu>
        <Accordion>
          {
            navdata.map((itm, idx) => (

              <AccordionItem key={idx} aria-label={itm.mainHeading} title={itm.mainHeading}>
                {
                  itm.subnav.slice(0, 6).map((subitm, subidx) => (

                    <div>
                      {
                        subidx == 5 ?
                          <button>see more</button>
                          :
                          subitm.name
                      }
                    </div>
                  ))
                }
              </AccordionItem>
            ))
          }
        </Accordion>
      </NavbarMenu>
    </Navbar>

  );
}