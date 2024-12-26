"use client"
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import TestVpnCard from "@/components/test-vpn-card";
//import Popup from "@/components/Popup";
import Comparison from "@/components/Comparison";
import TooltipComp from "@/components/TooltipComp";
import ScrollToTopButton from "@/components/ScrollToTop";
import { SlCalender } from "react-icons/sl";
import { FaCrown, FaIdCard, FaUserLarge } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { IoSpeedometer } from "react-icons/io5";
import { FaUnlockAlt } from "react-icons/fa";
import RatingStars from "@/components/CustomStar";
import CustomCircularProgress from "@/components/CustomCircularRatting";
//import CardSlider from "@/components/CardSlider";
import FAQ from "@/components/FAQ";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineCheckCircle } from "react-icons/md";
import parse from 'html-react-parser';


interface VPNData {
    title?: string;
    list?: string[];
    slug?: string[];
    data: {
        attributes: BlogAttributes;
    }[];
}
export interface BlogAttributes {
    vpn_name: string;
    ratting: number;
    slug: string;
    offer?: string;
    details: string;
    img: String,
    features: { value: string }[];
    company_link: { name: string; value: string };
    link1: string;
    link2: string;
    link3: string;
    top_banner: { value: string }[];
    category_rating: {
        privacy: number,
        features: number,
        speed: number,
        userScore: number,
        valueForMoney: number,
    };
}


const vpnData: VPNData =
{
    title: "The Best Cheap VPNs for India 2025",
    list: [
        "<b>Save upto 90%</b> on best VPNs monthly & yearly plans",  
        "<b>Ultra-Fast Servers</b> for uninterrupted Browsing, Streaming & Gaming",  
        "<b>Connect Multiple Devices</b> with a single VPN account simultaneously",  
        "<b>Free Tials</b> & <b>Limited Time Discounts</b> for all VPNs"

    ],
    data: [
        {
            "attributes": {
                "vpn_name": "Cyber Ghost",
                "ratting": 9.8,
                "slug": "cyberghost",
                "offer": "Offer: 83% discount + 4 Months Free",
                "details": "CyberGhost: Lighting Fast, Highly Secure and Trusted. Enjoy Best in class VPN with global coverage and 24/7 customer support. Outstanding!",
                "img": "cyberghost.svg",
                "features": [
                    { "value": "Signup Today for only $2.03 per month & get 3 months free" },
                    { "value": "Try it Free for 45 days" },
                    { "value": "Secure, Hides your Online activity" },
                    { "value": "Ultra-fast speed for all devices" },
                    { "value": "Strict no-logs policy to keep you safe" },
                    { "value": "VPN kill-switch for safety" }               
                ],

                "company_link": {
                    "name": "cyberghost.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1002&token4=text&token5=IN"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1002&token4=button&token5=IN",
                "link2":"https://track.vpns.guide/base2.php?cloid=1002&token4=tile&token5=IN",
                "link3":"https://track.vpns.guide/base2.php?cloid=1002&token4=bo&token5=IN",
                "top_banner": [
                    { "value": "Editor's Choice" },
                    { "value": "Try it Free for 45 Days" }
                ],
                "category_rating": {
                    "privacy": 9.9,
                    "features": 9.7,
                    "speed": 9.9,
                    "userScore": 9.9,
                    "valueForMoney": 9.9,
                },
            }
        },
        {
            "attributes": {
                "vpn_name": "Total Vpn",
                "ratting": 9.5,
                "slug": "totalvpn",
                "offer": "Free Antivirus & Free Ad Blocker",
                "details": "Total Vpn: Optimized specially for Streaming, Torrenting & Gaming. Fast Speed with Military Grade Security. Suberb!",
                "img": "totalvpn.svg",
                "features": [
                    { "value": "Get Total VPN for only 19$ Yearly" },
                    { "value": "Get Free Ad-Blocker" },
                    { "value": "Try it free for 30 Days" },
                    { "value": "Ultra-fast speed with Zero lag" },
                    { "value": "Enhanced protection for Public Wi-Fi" },
                    { "value": "Strict no-logs and no IP/DNS leaks" }
                ],
                "company_link": {
                    "name": "totalvpn.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1007&token4=text&token5=IN"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1007&token4=button&token5=IN",
                "link2":"https://track.vpns.guide/base2.php?cloid=1007&token4=tile&token5=IN",
                "link3":"https://track.vpns.guide/base2.php?cloid=1007&token4=bo&token5=IN",
                "top_banner": [
                    { "value": "Cheapest VPN" },
                    { "value": "From Rs. 175/- Only" }
                ],
                "category_rating": {
                    "privacy": 9.6,
                    "features": 9.5,
                    "speed": 9.7,
                    "userScore": 9.5,
                    "valueForMoney": 9.8,
                },
            }
        },
        {
            "attributes": {
                "vpn_name": "Private Internet Access",
                "ratting": 9.2,
                "slug": "privateinternetaccess",
                "offer": "One Account Unlimited Devices",
                "details": "PIA: Fast speed, Strong encryption and no-logs policy for private browsing with 24/7 live Customer Support.",
                "img": "privateinternetaccess.svg",
                "features": [
                    { "value": "Suberb for Private Internet Browsing" },
                    { "value": "Connects upto 10 devices simultaneously" },
                    { "value": "Try it free for 30 days" },
                    { "value": "100% Open-Source, No-Logs VPN" },
                    { "value": "Servers in 91 countries" },
                    { "value": "Powerful built-in Ad & Malware blocker" }                   
                ],
                "company_link": {
                    "name": "privateinternetaccess.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1004&token4=text&token5=IN"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1004&token4=button&token5=IN",
                "link2":"https://track.vpns.guide/base2.php?cloid=1004&token4=tile&token5=IN",
                "link3":"https://track.vpns.guide/base2.php?cloid=1004&token4=bo&token5=IN",
                "top_banner": [
                ],
                "category_rating": {
                    "privacy": 9.2,
                    "features": 9.3,
                    "speed": 9.5,
                    "userScore": 9.2,
                    "valueForMoney": 9.6,
                },
            }
        },
  {
            "attributes": {
                "vpn_name": "SurfShark",
                "ratting": 8.9,
                "slug": "surfshark",
                "offer": "",
                "details": "SurfShark: User-friendly VPN for beginners. Strong security & privacy features.",
                "img": "surfshark.svg",
                "features": [
                    { "value": "Try it for 30 Days Free" },
                    { "value": "Secure, Hides your online activity" },
                    { "value": "Ultra-fast speed for all devices" },
                    { "value": "Chrome & Firefox extension" },
                    { "value": "Strict no-logs policy to keep you safe" }                    
                ],
                "company_link": {
                    "name": "surfshark.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1005&token4=text&token5=IN"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1005&token4=button&token5=IN",
                "link2":"https://track.vpns.guide/base2.php?cloid=1005&token4=tile&token5=IN",
                "link3":"https://track.vpns.guide/base2.php?cloid=1005&token4=bo&token5=IN",
                "top_banner": [
                ],
                "category_rating": {
                    "privacy": 9.0,
                    "features": 8.8,
                    "speed": 5.9,
                    "userScore": 8.9,
                    "valueForMoney": 9.0,
                },
            }
        },
        {"attributes": {
                "vpn_name": "Express",
                "ratting": 8.9,
                "slug": "expressvpn",
                "offer": "",
                "details": "Express VPN: Well-rounded secure and private VPN for anonymous browsing & downloads with No-Logs policy to keep you safe online.",
                "img": "expressvpn.svg",
                "features": [
                    { "value": "Super for anonymous & secure downloads" },
                    { "value": "Enhanced security with no IP/DNS leaks" },
                    { "value": "Chrome & FIrefox extensions" },
                    { "value": "3000 servers in 100+ countries" },
                    { "value": "VPN kill-switch for safety" }
                ],
                "company_link": {
                    "name": "expressvpn.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1001&token4=text&token5=IN"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1001&token4=button&token5=IN",
                "link2":"https://track.vpns.guide/base2.php?cloid=1001&token4=tile&token5=IN",
                "link3":"https://track.vpns.guide/base2.php?cloid=1001&token4=bo&token5=IN",
                "top_banner": [
                ],
                "category_rating": {
                    "privacy": 9.0,
                    "features": 8.8,
                    "speed": 5.9,
                    "userScore": 8.9,
                    "valueForMoney": 9.0,
                },
            }
        },



        {
            "attributes": {
                "vpn_name": "Private VPN",
                "ratting": 8.6,
                "slug": "privatevpn",
                    "offer": "",
                    "details": "Private VPN: Prioritizes user security with 128- and 256-bit encryption with No data retention",
                    "img": "privatevpn.svg",
                    "features": [
                      { "value": "Try it free for 30 days" },  
                      { "value": "Effective stealth VPN protocol" },
                      { "value": "Secures public Wi-Fi & hotspots" },
                      { "value": "Fast & easy to connect" },
                      { "value": "Servers available in 62 countries" }
                    ],
                    "company_link": {
                    "name": "privatevpn.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1008&token4=text&token5=IN"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1008&token4=button&token5=IN",
                "link2":"https://track.vpns.guide/base2.php?cloid=1008&token4=tile&token5=IN",
                "link3":"https://track.vpns.guide/base2.php?cloid=1008&token4=bo&token5=IN",
                "top_banner": [
                ],
                "category_rating": {
                    "privacy": 8.7,
                    "features": 8.4,
                    "speed": 8.0,
                    "userScore": 8.5,
                    "valueForMoney": 8.7,
                },
            }
        },
        {
            "attributes": {
                "vpn_name": "Pure Vpn",
                "ratting": 8.5,
                "slug": "purevpn",
                "offer": "",
                "details": "Pure VPN: Good speed and reliable security with 24/7 live customer support ",
                "img": "purevpn.svg",
                "features": [
                    { "value": "Good downloading speed" },
                    { "value": "Chrome & Firefox extensions" },
                    { "value": "Monitors & Prevent data leaks" },
                    { "value": "Excellent customer support" },
                    { "value": "Try it Free for 30 Days" }                    
                ],
                "company_link": {
                    "name": "purevpn.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1006&token4=text&token5=IN"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1006&token4=button&token5=IN",
                "link2":"https://track.vpns.guide/base2.php?cloid=1006&token4=tile&token5=IN",
                "link3":"https://track.vpns.guide/base2.php?cloid=1006&token4=bo&token5=IN",
                "top_banner": [
                ],
                "category_rating": {
                    "privacy": 8.5,
                    "features": 8.4,
                    "speed": 8.0,
                    "userScore": 8.6,
                    "valueForMoney": 8.4,
                },
            }
        },
        {
            "attributes": {
                "vpn_name": "Proton VPN",
                "ratting": 8.2,
                "slug": "protonvpn",
                "offer": "",
                "details": "Proton VPN: User-friendly VPN for beginners. Strong security and privacy features.",
                "img": "protonvpn.svg",
                "features": [
                    { "value": "Netshield ad blocker" },
                    { "value": "User-Friendly Apps for all devices" },
                    { "value": "No IP & No DNS leaks" },
                    { "value": "Chrome & Firefox extensions" },
                    { "value": "30 Days money back guarantee" }                    
                ],
                "company_link": {
                    "name": "protonvpn.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1009&token4=text&token5=IN"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1009&token4=button&token5=IN",
                "link2":"https://track.vpns.guide/base2.php?cloid=1009&token4=tile&token5=IN",
                "link3":"https://track.vpns.guide/base2.php?cloid=1009&token4=bo&token5=IN",
                "top_banner": [
                ],
                "category_rating": {
                    "privacy": 8.4,
                    "features": 8.6,
                    "speed": 8.0,
                    "userScore": 8.6,
                    "valueForMoney": 8.4,
                },
            }
        },


    ]
}



const TestVpnPage = () => {
    const today = new Date(); // Get the current date upfront
    const day = today.getDate();
    const month = today.toLocaleString(undefined, { month: "long" });
    const year = today.getFullYear();

    const [currentDate, setCurrentDate] = useState<string>(`${day} ${month}, ${year}`);
    const [currentmontY, setCurrentmontY] = useState<string>(`${month} ${year}`);

    return (
        <section className="bg-[#F9F6EE]">
            <ScrollToTopButton />

            {/* top section */}
            <div className="mx-auto flex flex-col bg-[#F9F6EE] px-[10px] pt-[17px] laptop:flex-row laptop:py-2 laptop:pb-[28px] laptop:pt-10 laptopl:max-w-[1060px] laptopl:px-0">
                {/* left */}
                <div className="content mx-0 max-h-fit w-full pb-4 tablet:mx-auto tablet:w-[55%] laptop:mx-0">
                    <h1 className="mb-4 font-kantumruyPro text-[25px] font-bold laptop:text-[35px]">{vpnData.title}</h1>
                    <h2 className="mb-[25px] font-kantumruyPro text-[14px] text-blue-950 laptop:mb-[30px] laptop:text-[16px]">
                        {currentmontY} – Excellent security features, widespread server networks, and reliable refund policie - secure internet access is just a few clicks away.                    </h2>
                    <ul className="mb-[20px] text-[16px] laptop:text-base">
                        {
                            vpnData.list?.map((itm: any, idx: number) => (
                                <li className="tick-list-green-item mb-[14px] font-kantumruyPro" key={idx}>  {parse(itm)} </li>
                            ))
                        }
                    </ul>

                    {/* featured section */}
                    <div className="hidden tablet:block">
                        <span className="font-kantumruyPro">These VPN Services have been featured on:</span>
                        <div className="mb-1 ml-3 mt-[10px] flex items-center gap-7">
                            <div className="relative h-[40px] w-[180px]">
                                <Image src={`/Assests/test-vpn/NYT.svg`} alt="New York Times"
                                    className="w-full" fill/>
                            </div>
                            <div className="relative h-[40px] w-[50px]">
                                <Image src={`/Assests/test-vpn/CNN.svg`} alt="CNN"
                                    className="w-full" fill />
                            </div>
                            <div className="relative h-[40px] w-[60px]">
                                <Image src={`/Assests/test-vpn/BBC.svg`} alt="BBC"
                                    className="w-full" fill />
                            </div>
                            <div className="relative h-[40px] w-[50px]">
                                <Image src={`/Assests/test-vpn/cnet.svg`} alt="CNET"
                                    className="w-full" fill />
                            </div>
                            <div className="relative h-[40px] w-[40px]">
                                <Image src={`/Assests/test-vpn/FoxNews.svg`} alt="Fox News"
                                    className="w-full" fill />
                            </div>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className="hidden w-[full] items-center justify-center tablet:flex laptop:w-[45%]">
                    <div className="relative aspect-video w-[70%] laptop:w-full">
                        <Image src="/Assests/test-vpn/Hero-Section.avif" layout="fill" className="object-contain" priority unoptimized 
                            alt="vpn image" />
                    </div>
                </div>
            </div>

            {/* update date section */}
            <div className="w-full bg-[#fcfcfc] shadow-sm">
                <div className="mx-auto flex items-center justify-between px-[10px] py-[4px] text-xl laptop:py-[6px] laptop:text-xl laptopl:max-w-[1060px] laptopl:px-0">
                    <span className="flex items-center gap-1 text-[10px] tablet:gap-1 laptop:text-[16px]">
                        <span className="font-kantumruyPro text-[15px]">
                            <SlCalender className="mr-1 inline text-[17px]" />Updated on:
                        </span>
                        <span className="text-[15px]">
                            {currentDate}
                        </span>
                    </span>
                    <div className="flex">
                        <TooltipComp />
                    </div>
                </div>
            </div>

            {/* reviews section */}
            <div className="mx-auto bg-[#F9F6EE] px-[10px] laptopl:max-w-[1060px] laptopl:px-0">
               
                <TestVpnCard blogs={vpnData.data} />
            </div>


            {/* comparison section */}
            <Comparison />


            {/* honest vpn review */}
            
            {/* Best Plan */}
            
            {/* card slider */}
            

            {/* faqs */}
            <div className="py-[56px]">
                <FAQ />
            </div>




            {/* two button */}
            <div className="flex flex-col bg-white px-2 py-[50px] laptop:px-0">
                <h1 className="pb-[25px] text-center font-kantumruyPro text-[23px] font-semibold text-[#545454] laptop:text-[30px]">
                Are you ready to secure yourself with worldclass VPN</h1>
                <div className="flex flex-col justify-center gap-5 laptop:flex-row laptop:gap-12">
                    <Link href="https://track.vpns.guide/base2.php?cloid=1002&token4=Yes" target="_blank"
                        className="flex h-[60px] cursor-pointer items-center gap-9 border-2 border-[#04AA63] px-10 hover:bg-[#04aa6291] laptop:w-[450px]">
                        <Suspense fallback={<div>Loading components...
                        </div>}>
                            <MdOutlineCheckCircle className="inline text-[30px] text-[#04AA63]" />
                        </Suspense>
                        <span className="font-kantumruyPro text-[17px] font-semibold text-[#545454]">Yes, I will Secure My Device NOW</span>
                    </Link>
                    <Link href="https://track.vpns.guide/base2.php?cloid=1002&token4=No" target="_blank"
                        className="flex h-[60px] cursor-pointer items-center gap-9 border-2 border-[#FD5522] px-10 hover:bg-[#fd5522a5] laptop:w-[450px]">
                        <Suspense fallback={<div>Loading components...
                        </div>}>
                            <RxCrossCircled className="inline text-[30px] text-red-500" />
                        </Suspense>
                        <span className="font-kantumruyPro text-[17px] font-semibold text-[#545454]">No, I need some more time</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TestVpnPage;
