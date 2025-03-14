"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import TestVpnCard from "@/components/test-vpn-card";
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



interface VPNData {
    title?: string;
    updatedOn?: string;
    list?: string[];
    slug?: string[];
    featuredImage: {
        link: String
    }[],
    data: {
        attributes: BlogAttributes;
    }[],
    
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
    title: "The Best VPN for Mohit in 2024",
    list: [
        "<b>Ultra-Fast servers</b> for uninterrupted browsing and streaming",
        "<b>Change your IP address location</b> & use the internet privately & securely",
        "<b>Connect multiple devices</span> with a single VPN account simultaneously",
        "<b>Free trails</b> & <b>Limited Time Discounts</b> for all VPNs"
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
        
}



const TestVpnPage = () => {
    const today = new Date(); // Get the current date upfront
    const day = today.getDate();
    const month = today.toLocaleString(undefined, { month: "long" });
    const year = today.getFullYear();

    const [currentDate, setCurrentDate] = useState<string>(`${day}-${month}-${year}`);
    const [currentmontY, setCurrentmontY] = useState<string>(`${month} ${year}`);




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
                        <Image src="/Assests/test-vpn/Hero-Section.avif" layout="fill" className="object-contain" priority unoptimized 
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



            {/* honest vpn review */}
            <div className="mx-auto rounded-xl bg-white px-[10px] py-2 shadow-md laptop:rounded-none laptop:py-0 laptopl:max-w-[1060px] laptopl:px-0">
                <div className="flex flex-col px-[10px] laptop:flex-row laptop:gap-[60px] laptop:px-10">
                    {/* heading for mobile view */}
                    <h1 className="text-center font-inknutAntiqua text-[23px] font-bold laptop:hidden">Honest VPN Reviews Based
                        On Real Testing
                    </h1>
                    <div className="laptop:w-[40%]">
                        <div className="relative aspect-video h-[90%]">
                            <Image src="/Assests/test-vpn/Review.webp" fill alt="image" />
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
                        <div className="relative aspect-video h-[90%]">
                            <Image src="/Assests/test-vpn/About.svg" fill alt="image" />
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
            
            {/* card slider */}
             

            
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
