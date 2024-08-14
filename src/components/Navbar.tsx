// "use client";
import React from "react";
import config from "../../config.js";
import NextUiNavbar from "./NextUInav";



// const fetchNames = async () => {

//   const reqOptions = {
//     headers: {
//       Authorization: `Bearer ${process.env.API_TOKEN}`
//     },
//     cache: "no-store"as RequestCache,
//   }
//   console.log(config.api);
  
//   const request = await fetch(`${config.api}/api/reviews?fields[0]=vpn_name&fields[1]=slug`, reqOptions);
//   const response = await request.json();

//   return response.data;
// }


// Build subnav from API data
// const buildSubnavFromApi = async () => {
  
//   const apiData = await fetchNames();

//   // Convert API data into subnav items
//   const subnavFromApi = apiData.map((item: { attributes: { vpn_name: string; slug: string } }) => ({
//     name: item.attributes.vpn_name,
//     link: `/reviews/${item.attributes.slug}`, // Customize the link format as needed
//   }))
//   .slice(0, 4); 
  
//   return subnavFromApi;
// };


const NavbarComp = async () => {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const rev = await buildSubnavFromApi();


  interface SubnavItem {
    // Define properties based on your actual structure
    name: string;
    link: string;
  }

  interface NavItem {
    mainHeading: string;
    subnav: SubnavItem[];
  }

  const navdata: NavItem[] = [
    // {
    //   mainHeading: "VPN REVIEWS",
    //   subnav: [
    //     ...rev,
    //   ],
    // },
    {
      mainHeading: "WHAT IS A VPN",
      subnav: [
        {
          name: "What Is a VPN Service?",
          link: "/vpn-explained/what-is-a-vpn-service",
        },
        {
          name: "How Does a VPN Work?",
          link: "/vpn-explained/how-does-a-vpn-work",
        },
        {
          name: "What Is a VPN Used For?",
          link: "/vpn-explained/what-is-vpn-used-for",
        },
        {
          name: "Are VPNs Really Worth It?",
          link: "/vpn-explained/are-vpn-really-worth-it",
        },
        {
          name: "VPN Logging Policies",
          link: "/vpn-explained",
        },
      ],
    },
    {
      mainHeading: "GUIDES",
      subnav: [
        {
          name: "How To Hide Your IP Address",
          link: "/guides/hide-your-ip-address",
        },
        {
          name: "How To Check Your IP Address",
          link: "/guides/check-ip-address",
        },
        {
          name: "What can someone do with your ip address",
          link: "/guides/what-can-people-do-with-your-ip-address",
        },
        {
          name: "How to check if your vpn is working?",
          link: "/guides/is-my-vpn-working",
        },
        {
          name: "How To Check Your IP Address",
          link: "/guides",
        }
      ],
    },
    {
      mainHeading: "ABOUT",
      subnav: [
        {
          name: "About Us",
          link: "/about",
        },
        {
          name: "How we test and review",
          link: "/about/how-we-review-vpn",
        },
        {
          name: "How we make money",
          link: "/about/how-we-make-money",
        },
      ],
    },
  ];





  return (
    <NextUiNavbar navdata={navdata} />
  );
}

export default NavbarComp;