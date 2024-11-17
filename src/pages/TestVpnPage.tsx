"use client"
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import TestVpnCard from "@/components/test-vpn-card";
import Popup from "@/components/Popup";
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
import CardSlider from "@/components/CardSlider";
import FAQ from "@/components/FAQ";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineCheckCircle } from "react-icons/md";
import parse from 'html-react-parser';

// Dynamically import the icons
// const FaCrown = React.lazy(() => import("react-icons/fa6").then(module => ({ default: module.FaCrown })));
// const FaIdCard = React.lazy(() => import("react-icons/fa6").then(module => ({ default: module.FaIdCard })));
// const FaUserLarge = React.lazy(() => import("react-icons/fa6").then(module => ({ default: module.FaUserLarge })));
// const SlCalender = React.lazy(() => import("react-icons/sl").then(module => ({ default: module.SlCalender })));
// const IoSpeedometer = React.lazy(() => import("react-icons/io5").then(module => ({ default: module.IoSpeedometer })));
// const MdOutlineCheckCircle = React.lazy(() => import("react-icons/md").then(module => ({ default: module.MdOutlineCheckCircle })));
// const FaUnlockAlt = React.lazy(() => import("react-icons/fa").then(module => ({ default: module.FaUnlockAlt })));
// const GiReceiveMoney = React.lazy(() => import("react-icons/gi").then(module => ({ default: module.GiReceiveMoney })));
// const RxCrossCircled = React.lazy(() => import("react-icons/rx").then(module => ({ default: module.RxCrossCircled })));

// Dynamically import the components
// Dynamically import the components without server-side rendering
// const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
// const CustomCircularProgress = dynamic(() => import("@/components/CustomCircularRatting"), { ssr: false });
// const RatingStars = dynamic(() => import("@/components/CustomStar"), { ssr: false });
// const CardSlider = dynamic(() => import("@/components/CardSlider"), { ssr: false });
// const Comparison = dynamic(() => import("@/components/Comparison"), { ssr: false });
// const ScrollToTopButton = dynamic(() => import("@/components/ScrollToTop"), { ssr: false });
// const Popup = dynamic(() => import("@/components/Popup"), { ssr: false });
// const TooltipComp = dynamic(() => import("@/components/TooltipComp"), { ssr: false });



interface VPNData {
    title?: string;
    updatedOn?: string;
    list?: string[];
    slug?: string[];
    bestPlan: string[];
    featuredImage: {
        link: String
    }[],
    data: {
        attributes: BlogAttributes;
    }[],
    reviews: {
        img: String,
        rating: number,
        review: String,
        author: String,
        company_link: { name: string; value: string };

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
    title: "The Best VPN for Windows 2024",
    list: [
        "<b>Ultra-Fast servers</b> for uninterrupted browsing and streaming",
        "<b>Change your IP address location</b> & use the internet privately & securely",
        "<b>Connect multiple devices</span> with a single VPN account simultaneously",
        "<b>Free trails</b> & <b>Limited Time Discounts</b> for all VPNs"
    ],
    updatedOn: '25-October-2024',
    bestPlan: [
        "totalvpn",
        "cyberghost",
        "privateinternetaccess",
    ],
    // These VPN Services have been featured on:
    featuredImage:
        [
            { link: "NewYorkTimes.png" },
            { link: "FoxNews.png" },
            { link: "Bbc.png" },
            { link: "Cnn.png" },
            { link: "CNet.png" }
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
                    { "value": "Try it Free for 45 days" },
                    { "value": "Secure, Hides your Online activity" },
                    { "value": "Ultra-fast speed for all devices" },
                    { "value": "Strict no-logs policy to keep you safe" },
                    { "value": "VPN kill-switch for safety" },
                    { "value": "11690+ servers in 105 countries" }
                ],

                "company_link": {
                    "name": "cyberghost.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1002&token4=text"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1002&token4=button",
                "link2":"https://track.vpns.guide/base2.php?cloid=1002&token4=tile",
                "link3":"https://track.vpns.guide/base2.php?cloid=1002&token4=bo",
                "top_banner": [
                    { "value": "Best VPN of 2024" },
                    { "value": "Free for 45 Days" }
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
                    { "value": "Try it free for 30 Days" },
                    { "value": "Ultra-fast speed with Zero lag" },
                    { "value": "Enhanced protection for Public Wi-Fi" },
                    { "value": "Strict no-logs and no IP/DNS leaks" },
                    { "value": "Chrome & Firefox extension" },
                    { "value": "Easy to use app for all devices" }
                ],
                "company_link": {
                    "name": "totalvpn.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1007&token4=text"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1007&token4=button",
                "link2":"https://track.vpns.guide/base2.php?cloid=1007&token4=tile",
                "link3":"https://track.vpns.guide/base2.php?cloid=1007&token4=bo",
                "top_banner": [
                    { "value": "Cheapest VPN" },
                    { "value": "@ $1.59/Month Only!" }
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
                    "value": "https://track.vpns.guide/base2.php?cloid=1004&token4=text"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1004&token4=button",
                "link2":"https://track.vpns.guide/base2.php?cloid=1004&token4=tile",
                "link3":"https://track.vpns.guide/base2.php?cloid=1004&token4=bo",
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
                    "value": "https://track.vpns.guide/base2.php?cloid=1001&token4=text"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1001&token4=button",
                "link2":"https://track.vpns.guide/base2.php?cloid=1001&token4=tile",
                "link3":"https://track.vpns.guide/base2.php?cloid=1001&token4=bo",
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
                "vpn_name": "SurfShark",
                "ratting": 8.6,
                "slug": "surfshark",
                "offer": "",
                "details": "SurfShark: User-friendly VPN for beginners. Strong security & privacy features.",
                "img": "surfshark.svg",
                "features": [
                    { "value": "Excellent customer support" },
                    { "value": "Good downloading speed" },
                    { "value": "Chrome & Firefox extension" },
                    { "value": "Monitor & prevents data leaks" },
                    { "value": "Free trial for 30 Days" }
                ],
                "company_link": {
                    "name": "surfshark.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1005&token4=text"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1005&token4=button",
                "link2":"https://track.vpns.guide/base2.php?cloid=1005&token4=tile",
                "link3":"https://track.vpns.guide/base2.php?cloid=1005&token4=bo",
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
                "details": "Pure Vpn: User-friendly VPN for beginners. Strong security & privacy features.",
                "img": "purevpn.svg",
                "features": [
                    { "value": "30 Days Free with Money-Back Guarantee" },
                    { "value": "Secure, Hides your online activity" },
                    { "value": "Ultra-fast speed for all devices" },
                    { "value": "Chrome & Firefox extension" },
                    { "value": "Strict no-logs policy to keep you safe" }
                ],
                "company_link": {
                    "name": "purevpn.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1006&token4=text"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1006&token4=button",
                "link2":"https://track.vpns.guide/base2.php?cloid=1006&token4=tile",
                "link3":"https://track.vpns.guide/base2.php?cloid=1006&token4=bo",
                "top_banner": [
                ],
                "category_rating": {
                    "privacy": 8.5,
                    "features": 8.6,
                    "speed": 8.0,
                    "userScore": 8.6,
                    "valueForMoney": 8.4,
                },
            }
        },


    ],
    reviews: [

        {
            "img": "totalvpn.png",
            "rating": 9.5,
            "review": "I don't regret buying the cheapest and best ones, it's very comfortable, the price and quality ratio is amazing. - Total Vpn",
            "author": "Raimundas Kastravickas",
            "company_link": {
                "name": "totalvpn.com",
                "value": "https://track.vpns.guide/base2.php?cloid=1007&token4=review"
            },
        },
        {
            "img": "cyberghost.png",
            "rating": 9.8,
            "review": "Excellent features and responsive customer service make this VPN my favorite on the market. It is easy to use, very comprehensive, and quite affordable both financially and in terms of usability. To top it off, when you renew your subscription, they offer a significant discount. - Cyber Ghost",
            "author": "Charles Ward",
            "company_link": {
                "name": "cyberghost.com",
                "value": "https://track.vpns.guide/base2.php?cloid=1002&token4=review"
            },
        },
        {
            "img": "privateinternetaccess.png",
            "rating": 9.2,
            "review": "I especially appreciate that this VPN runs on Linux as well as Windows because I use both systems. It was easy to install and gives me yet another layer of protection against being spied upon. - PIA",
            "author": "Warwick Gummerson",
            "company_link": {
                "name": "cyberghost.com",
                "value": "https://track.vpns.guide/base2.php?cloid=1004&token4=review"
            },
        },
        {
            "img": "expressvpn.png",
            "rating": 8.9,
            "review": "I've been using ExpressVPN for years and I love it. It's so easy to use and it works great. There is no lag or noticeable delay and it's easy to switch locations whenever you want. You can also install it on five devices, which means that I can have it on my computer, phone, and tablet and still share it with my mom. I highly recommend this VPN. - Express Vpn",
            "author": "Monica Murray Derr",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base2.php?cloid=1001&token4=review"
            },
        },
        {
            "img": "surfshark.png",
            "rating": 8.6,
            "review": "Every bit as good as the overpriced better known VPN's, & there is barely any decrease in speed when watching movies, if any at all. There are plenty of Country locations to choose from, allowing me to watch Netflix etc. in any zone I choose. U.S. Netflix, for example, is so much better than what Australia has to offer. - SurfShark",
            "author": "Rick",
            "company_link": {
                "name": "surfshark.com",
                "value": "https://track.vpns.guide/base2.php?cloid=1005&token4=review"
            },
        },
    ]
}



const TestVpnPage = () => {
    const today = new Date(); // Get the current date upfront
    const day = today.getDate();
    const month = today.toLocaleString(undefined, { month: "long" });
    const year = today.getFullYear();

    const [currentDate, setCurrentDate] = useState<string>(`${day}-${month}-${year}`);
    const [currentmontY, setCurrentmontY] = useState<string>(`${month} ${year}`);




    // const [currentDate, setCurrentDate] = useState<string>("");
    // const [currentmontY, setCurrentmontY] = useState<string>("");

    // useEffect(() => {
    //     const today = new Date();

    //     const day = today.getDate();
    //     const month = today.toLocaleString(undefined, { month: "long" });
    //     const year = today.getFullYear();

    //     const formattedDate = `${day}-${month}-${year}`;
    //     const formattedMonth = `${month} ${year}`;        
    //     setCurrentDate(formattedDate);
    //     setCurrentmontY(`${month} ${year}`);
    // }, []);



    return (
        <section className="bg-[#F9F6EE]">
            <ScrollToTopButton />

            {/* top section */}
            <div className="mx-auto flex flex-col bg-[#F9F6EE] px-[10px] pt-[17px] laptop:flex-row laptop:py-2 laptop:pb-[28px] laptop:pt-10 laptopl:max-w-[1060px] laptopl:px-0">
                {/* left */}
                <div className="content mx-0 max-h-fit w-full pb-4 tablet:mx-auto tablet:w-[55%] laptop:mx-0">
                    <h1 className="mb-4 font-kantumruyPro text-[21px] text-lg font-bold laptop:text-[35px]">{vpnData.title}</h1>
                    <h2 className="mb-[25px] font-kantumruyPro text-xs text-blue-950 laptop:mb-[30px] laptop:text-[14px]">
                        {currentmontY} - Excellent security features, widespread server networks, and reliable refund policie -
                        secure internet access is just a few clicks away.
                    </h2>
                    <ul className="mb-[20px] text-sm laptop:text-base">
                        {
                            vpnData.list?.map((itm: any, idx: number) => (
                                <li className="tick-list-green-item mb-[14px] font-kantumruyPro" key={idx}>  {parse(itm)} </li>
                            ))
                        }
                        {/* {
                            vpnData.list?.map((itm: any, idx: number) => (
                                <li className="tick-list-green-item mb-[14px] font-kantumruyPro" key={idx} dangerouslySetInnerHTML={{
                                    __html: itm,
                                }}></li>
                            ))
                        } */}
                    </ul>

                    {/* featured section */}
                    <div className="hidden tablet:block">
                        <span className="font-kantumruyPro">These VPN Services have been featured on:</span>
                        <div className="mb-1 ml-3 mt-[10px] flex items-center gap-5">
                            <div className="relative h-[30px] w-[150px]">
                                <Image src={`/Assests/test-vpn/NYT.svg`} alt="New York Times"
                                    className="w-full" fill />
                            </div>
                            <div className="relative h-[30px] w-[30px]">
                                <Image src={`/Assests/test-vpn/cnet.svg`} alt="CNET"
                                    className="w-full" fill />
                            </div>
                            <div className="relative h-[30px] w-[58px]">
                                <Image src={`/Assests/test-vpn/BBC.svg`} alt="BBC"
                                    className="w-full" fill />
                            </div>
                            <div className="relative h-[30px] w-[40px]">
                                <Image src={`/Assests/test-vpn/CNN.svg`} alt="CNN"
                                    className="w-full" fill />
                            </div>
                            <div className="relative h-[30px] w-[30px]">
                                <Image src={`/Assests/test-vpn/FoxNews.svg`} alt="Fox News"
                                    className="w-full" fill />
                            </div>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className="hidden w-[full] items-center justify-center tablet:flex laptop:w-[45%]">
                    <div className="relative aspect-video w-[70%] laptop:w-full">
                        <Image src="/Assests/test-vpn/Hero-Section.webp" layout="fill" className="object-contain" priority 
                            alt="vpn image" />
                    </div>
                </div>
            </div>

            {/* update date section */}
            <div className="w-full bg-[#fcfcfc] shadow-sm">
                <div className="mx-auto flex items-center justify-between px-[10px] py-[4px] text-xl laptop:py-[6px] laptop:text-xl laptopl:max-w-[1060px] laptopl:px-0">
                    <span className="flex items-center gap-1 text-[10px] tablet:gap-1 laptop:text-[16px]">
                        <span className="font-kantumruyPro text-[14px]">
                            <SlCalender className="mr-1 inline text-[16px]" />Updated on:
                        </span>
                        <span className="text-[13px]">
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
            <div className="mx-auto rounded-xl bg-white px-[10px] py-2 shadow-md laptop:rounded-none laptop:py-0 laptopl:max-w-[1060px] laptopl:px-0">
                <div className="flex flex-col px-[10px] laptop:flex-row laptop:gap-[60px] laptop:px-10">
                    {/* heading for mobile view */}
                    <h1 className="text-center font-inknutAntiqua text-[23px] font-bold laptop:hidden">Honest VPN Reviews Based
                        On Real Testing
                    </h1>
                    <div className="laptop:w-[40%]">
                        <div className="relative aspect-video h-full">
                            <Image src="/Assests/test-vpn/Review.webp" fill alt="logo" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-evenly laptop:w-[60%]">
                        <h1 className="hidden font-inknutAntiqua text-[23px] font-bold laptop:block">
                            Honest VPN Reviews Based On Real Testing
                        </h1>
                        <p className="text-[15px]">
                            All VPNs have been reviewed personally by our experts, using our transparent testing process and
                            rating system to bring you the most reliable and up-to-date recommendations.
                        </p>
                        <p className="pt-2 text-sm laptop:pt-0">Our Testing Process Focuses On:</p>
                    </div>
                </div>
                <div className="my-5 flex flex-wrap justify-between gap-2 px-[10px] py-2 laptop:my-2 laptop:flex-nowrap laptop:justify-evenly laptop:gap-20 laptop:bg-[#1C499E] laptop:px-[10%]">
                    <div
                        className="flex min-h-[52px] w-[48%] items-center gap-2 rounded-full bg-[#1C499E] p-2 text-[12px] text-white laptop:h-fit laptop:bg-transparent laptop:text-[13px]">
                        <Suspense fallback={<div>Loading components...
                        </div>}>
                            <FaUnlockAlt className="inline text-[22px] laptop:text-[36px]" />
                        </Suspense>Privacy & security
                    </div>
                    <div className="flex min-h-[52px] w-[48%] items-center gap-2 rounded-full bg-[#1C499E] p-2 text-[12px] text-white laptop:h-fit laptop:bg-transparent laptop:text-[13px]">
                        <Suspense fallback={<div>Loading components...</div>}><IoSpeedometer className="inline text-[22px] laptop:text-[36px]" /></Suspense>Speed & Performance
                    </div>
                    <div className="flex min-h-[52px] w-[48%] items-center gap-2 rounded-full bg-[#1C499E] p-2 text-[12px] text-white laptop:h-fit laptop:bg-transparent laptop:text-[13px]">
                        <Suspense fallback={<div>Loading components...</div>}>
                            <GiReceiveMoney className="inline text-[22px] laptop:text-[36px]" />
                        </Suspense>Value for Money
                    </div>
                    <div
                        className="flex min-h-[52px] w-[48%] items-center gap-2 rounded-full bg-[#1C499E] p-2 text-[12px] text-white laptop:h-fit laptop:bg-transparent laptop:text-[13px]">
                        <Suspense fallback={<div>Loading components...
                        </div>}>
                            <FaUserLarge className="inline text-[20px] laptop:text-[36px]" />
                        </Suspense>User Review & Experience
                    </div>
                    <div
                        className="flex min-h-[52px] w-[48%] items-center gap-2 rounded-full bg-[#1C499E] p-2 text-[12px] text-white laptop:h-fit laptop:bg-transparent laptop:text-[13px]">
                        <Suspense fallback={<div>Loading components...
                        </div>}>
                            <FaIdCard className="inline text-[22px] laptop:text-[36px]" />
                        </Suspense>Ease of Use
                    </div>
                </div>
                <div className="flex flex-col gap-4 px-[10px] laptop:flex-row laptop:gap-[60px] laptop:px-10">
                    <div className="flex flex-col justify-evenly laptop:w-[60%]">
                        <h1 className="text-center font-inknutAntiqua text-[23px] font-bold laptop:text-start">
                            We Stand for Internet Privacy, Security & Freedom
                        </h1>
                        <p className="hidden text-sm laptop:block">
                            We are a team of independent experts with many years of experience in online privacy. We purchase
                            and test every VPN ourselves and provide you with honest, unbiased reviews. Our goal is to help you
                            find the best VPN to keep your online experience secure and private.
                        </p>
                    </div>
                    <div className="laptop:w-[40%]">
                        <div className="relative aspect-video w-full">

                            <Image src="/Assests/test-vpn/About.webp" fill alt="logo" />
                        </div>
                    </div>
                    <p className="text-sm laptop:hidden">
                        We are a team of independent experts with many years of experience in online privacy. We purchase and
                        test every VPN ourselves and provide you with honest, unbiased reviews. Our goal is to help you find the
                        best VPN to keep your online experience secure and private.
                    </p>
                </div>
            </div>

            {/* Best Plan */}
            <div className="mx-auto my-10 rounded-[25px] bg-gray-50 p-5 px-[10px] shadow-md laptopl:max-w-[1060px] laptopl:px-0">
                <div className="mb-10 flex flex-col items-center gap-2">
                    <h1 className="text-[30px] font-bold">Best VPN Plan</h1>
                    <p>Choose the best VPN with Great Discount</p>
                </div>

                <div className="flex flex-col gap-7 tablet:flex-row">
                    {
                        vpnData.data
                            .filter((vpn) => vpnData.bestPlan.includes(vpn.attributes.slug))
                            .sort((a, b) => vpnData.bestPlan.indexOf(a.attributes.slug) - vpnData.bestPlan.indexOf(b.attributes.slug))
                            .map((itm: any, idx: number) => (
                                <Link key={idx} target="_blank" href={itm.attributes.link3} className={`group relative gap-4 tablet:w-1/3 w-full
            border-2 bg-white rounded-md border-white p-5 items-center flex-col flex hover:border-yellow-600
            shadow-[0px_0px_10px_-5px_#1a202c] laptop:px-10 ${idx == 1 ? "border-yellow-600" : "laptop:scale-90 scale-95"
                                    }`}>
                                    {idx == 1 && <div
                                        className="absolute left-[50%] top-[-25px] flex -translate-x-1/2 transform flex-col items-center justify-center rounded-full border border-blue-600 bg-white px-4 py-1 text-blue-600 shadow-lg">
                                        <Suspense fallback={<div>Loading components...
                                        </div>}>
                                            <FaCrown className="text-xl" />
                                        </Suspense>
                                        <span className="text-xs font-semibold">BEST</span>
                                    </div>}

                                    <div className="flex w-full flex-row items-center justify-between tablet:flex-col">
                                        {/* image */}
                                        <div className="relative aspect-[2/1] w-2/4 laptop:w-3/4">
                                            <Image src={`/Assests/test-vpn/vpn/${itm.attributes.img}`} layout="fill"
                                                className="object-contain" alt="vpn image" />
                                        </div>

                                        {/* ratting */}
                                        <div className="ml-3 flex w-2/4 flex-col items-center justify-center gap-2 tablet:w-full">
                                            <CustomCircularProgress size="lg" value={itm.attributes.ratting} color={itm.attributes.ratting >= 9.7
                                                ?
                                                "warning" :
                                                itm.attributes.ratting >= 9.0 ? "danger" :
                                                    itm.attributes.ratting >= 8.0 ? "primary" :
                                                        itm.attributes.ratting >= 6.0 ? "success" :
                                                            "secondary"
                                            }
                                                showValueLabel={true}
                                                valueLabel={`${itm.attributes.ratting}`} // Pass the value without the percentage sign
                                                className="customRating"
                                            />
                                            <p className={`text-xs laptop:text-sm font-bold ${itm.attributes.ratting >= 9.5 ?
                                                "text-[#c4841d]" :
                                                "text-[#004493]"}`}>
                                                {
                                                    itm.attributes.ratting >= 9.7 ? "OUTSTANDING!" :
                                                        itm.attributes.ratting >= 9.0 ? "SUPERB!" :
                                                            itm.attributes.ratting >= 8.0 ? "GREAT!" :
                                                                itm.attributes.ratting >= 6.0 ? "GOOD!" :
                                                                    "BLANK!"
                                                }

                                            </p>
                                            <RatingStars value={itm.attributes.ratting} textSize="[25px]" emptyTextSize="[28px]" />
                                        </div>
                                    </div>

                                    {/* details */}
                                    <p className="text-center text-sm font-bold text-blue-600 laptop:px-5">{itm.attributes.offer}</p>
                                    <button
                                        className="mt-auto rounded-lg bg-[#fd5522] px-3 py-1 font-bold text-white hover:bg-[#04aa63] laptop:text-[20px]">Try
                                        for Free</button>
                                </Link>
                            ))
                    }

                </div>
            </div>



            {/* card slider */}
            <div className="flex flex-col gap-2 bg-blue-800 py-[30px]">
                <h1 className="text-center text-[28px] font-bold text-white">User Reviews</h1>
                <h2 className="text-center text-[15px] text-slate-300">(These reviews are not verified)</h2>
                <div className="mx-12 mt-[32px] h-fit">
                    <CardSlider reviews={vpnData.reviews} />
                </div>
            </div>


            {/* faqs */}
            <div className="py-[56px]">
                <FAQ />
            </div>




            {/* two button */}
            <div className="flex flex-col bg-white px-2 py-[50px] laptop:px-0">
                <h1 className="pb-[25px] text-center font-kantumruyPro text-[23px] font-semibold text-[#545454] laptop:text-[30px]">
                    Are you ready to secure yourself with worldclass VPN</h1>
                <div className="flex flex-col justify-center gap-5 laptop:flex-row laptop:gap-12">
                    <Link href="https://track.vpns.guide/base2.php?cloid=1002&token4=Yes" target="_blank"
                        className="flex h-[60px] cursor-pointer items-center gap-9 border-2 border-[#04AA63] px-10 hover:bg-[#04aa6291] laptop:w-[450px]">
                        <Suspense fallback={<div>Loading components...
                        </div>}>
                            <MdOutlineCheckCircle className="inline text-[30px] text-[#04AA63]" />
                        </Suspense>
                        <span className="font-kantumruyPro text-[17px] font-semibold text-[#545454]">Yes, I will Secure My Device
                            NOW</span>
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
