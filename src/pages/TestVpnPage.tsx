"use client"
import FAQ from "@/components/FAQ";
import Image from "next/image";
import Link from "next/link";
import CustomCircularProgress from "@/components/CustomCircularRatting";
import BestVpnCard from "@/components/best-vpn-card";
import { FaCrown, FaIdCard, FaUserLarge } from "react-icons/fa6";
import TooltipComp from "@/components/TooltipComp";
import { SlCalender } from "react-icons/sl";
import TestVpnCard from "@/components/test-vpn-card";
import { FaUnlockAlt } from "react-icons/fa";
import RatingStars from "@/components/CustomStar";
import CardSlider from "@/components/CardSlider";
import Comparison from "@/components/Comparison";
import { IoSpeedometer } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { useEffect, useState } from "react";
import { MdOutlineCheckCircle } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import ScrollToTopButton from "@/components/ScrollToTop";


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
        attributes: {
            vpn_name: string;
            ratting: number;
            slug: string;
            offer: string;
            details: string;
            img: String,
            features: { value: string }[];
            company_link: { name: string; value: string };
            link1: string;
            link2: string;
            top_banner: { value: string }[];
            category_rating: {
                privacy: number,
                features: number,
                speed: number,
                userScore: number,
                valueForMoney: number,
            };
        };
    }[],
    reviews: {
        img: String,
        rating: number,
        review: String,
        author: String,
        company_link: { name: string; value: string };

    }[];
}


const vpnData: VPNData =
{
    title: "The Best VPN for Windows 2024",
    list: [
        "<b>Ultra-Fast servers</b> for uninterrupted browsing and streaming in India",
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
            { link: "New-York-Times.png" },
            { link: "Fox-News.png" },
            { link: "BBC.png" },
            { link: "CNN.png" },
            { link: "cnet.png" }
        ],
    data: [
        {
            "attributes": {
                "vpn_name": "Cyber Ghost",
                "ratting": 9.8,
                "slug": "cyberghost",
                "offer": "Offer: 83% discount + 4 Months Free",
                "details": "CyberGhost: Lighting Fast, Highly Secure and Trusted. Enjoy Best in class VPN with global coverage and 24/7 customer support. Outstanding!",
                "img": "cyberghost.png",
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
                    "value": "https://track.vpns.guide/base2.php?cloid=1002&link=text"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1002&link=button",
                "link2":"https://track.vpns.guide/base2.php?cloid=1002&link=tile",
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
                "offer": "Free Antivirus Protection & Free Ad Blocker",
                "details": "Total Vpn: Optimized specially for Streaming, Torrenting & Gaming. Fast Speed with Military Grade Security. Suberb!",
                "img": "totalvpn.png",
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
                    "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
                },
                "link1":"https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5",
                "link2":"https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5",
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
                "img": "privateinternetaccess.png",
                "features": [
                    { "value": "Suberb for Private Internet Browsing" },
                    { "value": "Connects upto 10 devices simultaneously" },
                    { "value": "Try it free for 30 days" },
                    { "value": "100% Open-Source, No-Logs VPN" },
                    { "value": "Servers in 91 countries" }
                    { "value": "Powerful built-in Ad & Malware blocker" }
                ],
                "company_link": {
                    "name": "privateinternetaccess.com",
                    "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
                },
                "link1":"https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5",
                "link2":"https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5",
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
                "offer": "Sign up today & get 3 extra months for free.",
                "details": "Express VPN: Well-rounded secure and private VPN for anonymous browsing & downloads with No-Logs policy to keep you safe online.",
                "img": "expressvpn.png",
                "features": [
                    { "value": "Super for anonymous & secure downloads" },
                    { "value": "Enhanced security with no IP/DNS leaks" },
                    { "value": "Chrome & FIrefox extensions" },
                    { "value": "3000 servers in 100+ countries" },
                    { "value": "VPN kill-switch for safety" }
                ],
                "company_link": {
                    "name": "expressvpn.com",
                    "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
                },
                "link1":"https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5",
                "link2":"https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5",
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
                "img": "surfshark.png",
                "features": [
                    { "value": "Excellent customer support" },
                    { "value": "Good downloading speed" },
                    { "value": "Chrome & Firefox extension" },
                    { "value": "Monitor & prevents data leaks" },
                    { "value": "Free trial for 30 Days" }
                ],
                "company_link": {
                    "name": "surfshark.com",
                    "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
                },
                "link1":"https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5",
                "link2":"https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5",
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
                "img": "purevpn.png",
                "features": [
                    { "value": "30 Days with Money-Back Guarantee" },
                    { "value": "Secure, Hides your online activity" },
                    { "value": "Ultra-fast speed for all devices" },
                    { "value": "Chrome & Firefox extension" },
                    { "value": "Strict no-logs policy to keep you safe" }
                ],
                "company_link": {
                    "name": "purevpn.com",
                    "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
                },
                "link1":"https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5",
                "link2":"https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5",
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
            "img": "expressvpn.png",
            "rating": 9.8,
            "review": "Flawless installation starts automatically, great speed, I couldn't be happier with Express VPN. There are lots of servers to connect to. I've even used it while vacationing in Ireland. ExpressVPN is a great product and worth every penny! - Express Vpn",
            "author": "Roma Bose",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base2.php?cloid=1001"
            },
        },
        {
            "img": "cyberghost.png",
            "rating": 9.6,
            "review": "It's worked well for me. I've been using CyberGhost for a few years now and couldn't be happier. I've received a few cheaper deals from other suppliers but I trust CyberGhost and will stick with it. I highly recommend this product. - CyberGhost",
            "author": "Soma Bose",
            "company_link": {
                "name": "cyberghost.com",
                "value": "https://track.vpns.guide/base2.php?cloid=1004"
            },
        },
        {
            "img": "privateinternetaccess.png",
            "rating": 9.7,
            "review": "The VPN has always connected quickly with fast speeds and support was there for me for the one time I had an issue and quickly helped me resolve the matter! I highly recommend this for people looking for an affordable, reliable vpn! - PIA",
            "author": "Rima Bose",
            "company_link": {
                "name": "privateinternetaccess.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "purevpn.png",
            "rating": 9.3,
            "review": "PureVPN bought ivacy VPN and my account got transfered. Unfortunatelly not all my settings were right. But I contacted their support team and everything has gotten care of. Many thank again to them. - Pure Vpn ",
            "author": "Roma Bose",
            "company_link": {
                "name": "purevpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "surfshark.png",
            "rating": 9.3,
            "review": "My experience was great due to the speed and courtesy of the customer service. This company really excels at listening to their customers and resolving issues quickly. Keep it up! - Surf Shark",
            "author": "Roma Bose",
            "company_link": {
                "name": "surfshark.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "totalvpn.png",
            "rating": 9.2,
            "review": "I don't regret buying the cheapest and best ones, it's very comfortable, the price and quality ratio is amazing. - Total Vpn",
            "author": "Roma Bose",
            "company_link": {
                "name": "totalvpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "expressvpn.png",
            "rating": 9.6,
            "review": "Review 7 - Express Vpn",
            "author": "Roma Bose",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "privateinternetaccess.png",
            "rating": 9.7,
            "review": "Review 8 - PIA",
            "author": "Rima Bose",
            "company_link": {
                "name": "privateinternetaccess.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "cyberghost.png",
            "rating": 9.6,
            "review": "Review 9 - Cyber Ghost",
            "author": "Roma Bose",
            "company_link": {
                "name": "cyberghost.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "expressvpn.png",
            "rating": 9.6,
            "review": "Review 10 - Express Vpn",
            "author": "Roma Bose",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "privateinternetaccess.png",
            "rating": 9.7,
            "review": "Review 11 - PIA",
            "author": "Rima Bose",
            "company_link": {
                "name": "privateinternetaccess.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "cyberghost.png",
            "rating": 9.6,
            "review": "Review 12 - Cyber Ghost",
            "author": "Roma Bose",
            "company_link": {
                "name": "cyberghost.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
    ]
}



const TestVpnPage = () => {
    const [currentDate, setCurrentDate] = useState<string>("");
    const [currentmontY, setCurrentmontY] = useState<string>("");

    useEffect(() => {
        const today = new Date();

        const day = today.getDate();
        const month = today.toLocaleString(undefined, { month: "long" });
        const year = today.getFullYear();

        const formattedDate = `${day}-${month}-${year}`;
        const formattedMonth = `${month} ${year}`;
        setCurrentDate(formattedDate);
        setCurrentmontY(formattedMonth);
    }, []);

    return (
        <section className="bg-[#F9F6EE]">
            <ScrollToTopButton/>

            {/* top section */}
            <div className="flex laptop:flex-row flex-col laptopl:max-w-[1060px] px-[10px] laptopl:px-0 mx-auto laptop:py-2 pt-[17px] laptop:pt-10 laptop:pb-[28px] bg-[#F9F6EE]">
                {/* left */}
                <div className="content w-full tablet:w-[55%] max-h-fit ">
                    <h1 className="text-lg text-[21px] laptop:text-[35px] font-bold mb-4 font-kantumruyPro">{vpnData.title}</h1>
                    <h2 className="mb-[25px] laptop:mb-[30px] text-blue-950 text-xs laptop:text-[14px] font-kantumruyPro">
                        {currentmontY} - Excellent security features, widespread server networks, and reliable refund policie - secure internet access is just a few clicks away.
                    </h2>
                    <ul className=" mb-[20px] text-sm laptop:text-base">
                        {
                            vpnData.list?.map((itm: any, idx: number) => (
                                <li className="tick-list-green-item mb-[14px] font-kantumruyPro" key={idx} dangerouslySetInnerHTML={{
                                    __html: itm,
                                }}></li>
                            ))
                        }
                    </ul>
                    {/* featured section */}
                    <div className="hidden tablet:block">
                        <span className="font-kantumruyPro">These VPN Services have been featured on:</span>
                        <div className="flex gap-3 ml-2 mt-[10px]">
                            <div className="h-[30px] relative w-[105px]">
                                <Image src={`/Assests/test-vpn/New-York-Times.png`} alt="New York Times" className="filter grayscale object-contain w-full" fill />
                            </div>
                            <div className="h-[30px] relative w-[40px]">
                                <Image src={`/Assests/test-vpn/BBC.png`} alt="BBC" className="filter grayscale  w-full" fill />
                            </div>
                            <div className="h-[30px] relative w-[30px]">
                                <Image src={`/Assests/test-vpn/cnet.png`} alt="Cnet" className="filter grayscale w-full" fill />
                            </div>
                            <div className="h-[30px] relative w-[40px]">
                                <Image src={`/Assests/test-vpn/CNN.png`} alt="CNN" className="filter grayscale w-full" fill />
                            </div>
                            <div className="h-[30px] relative w-[30px]">
                                <Image src={`/Assests/test-vpn/Fox-News.png`} alt="Fox News" className="filter grayscale " fill />
                            </div>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className="hidden laptop:w-[45%] w-[full] tablet:flex items-center justify-center">
                    <div className=" relative laptop:w-full w-[70%] aspect-video">
                        <Image src="/Assests/test-vpn/Hero-Section.png" layout="fill" className="object-contain" alt="vpn image" />
                    </div>
                </div>
            </div>

            {/* update date section */}
            <div className="w-full bg-[#fcfcfc] shadow-sm">
                <div className="flex justify-between laptopl:max-w-[1060px] px-[10px] laptopl:px-0 mx-auto items-center py-[4px] laptop:py-[6px] text-xl laptop:text-xl">
                    <span className="items-start text-[10px] laptop:text-[16px] flex  tablet:gap-2">
                        <span className="text-[14px] font-kantumruyPro">
                            <SlCalender className="inline mr-1 text-[16px] " />Updated on:
                        </span>
                        <span className="text-[13px] pl-1">
                            {currentDate}
                        </span>
                    </span>
                    <div className="flex justify-end">
                        <TooltipComp />
                    </div>
                </div>

            </div>

            {/* reviews section */}
            {/* <div className="laptop:px-[200px]   bg-[#F9F6EE]"> */}
            <div className="laptopl:max-w-[1060px] px-[10px] laptopl:px-0 mx-auto bg-[#F9F6EE]">
                <TestVpnCard blogs={vpnData.data} />
            </div>



            {/* comparison section */}
            <Comparison />

            {/* honest vpn review */}
            <div className="bg-white laptopl:max-w-[1060px] px-[10px] laptopl:px-0 mx-auto rounded-xl laptop:rounded-none py-2 laptop:py-0 shadow-md">

                <div className="flex laptop:flex-row flex-col laptop:gap-[60px]  laptop:px-10 px-[10px]">
                    {/* heading for mobile view */}
                    <h1 className="text-center laptop:hidden font-bold text-[23px] font-inknutAntiqua">Honest VPN Reviews Based On Real Testing</h1>
                    <div className="laptop:w-[40%]">
                        <div className="relative aspect-video h-full">
                            <Image src="/Assests/test-vpn/Review.png" fill alt="logo" />
                        </div>
                    </div>
                    <div className="flex flex-col laptop:w-[60%] justify-evenly">
                        <h1 className="hidden laptop:block font-bold text-[23px] font-inknutAntiqua ">
                            Honest VPN Reviews Based On Real Testing
                        </h1>
                        <p className="text-[15px]">
                            All VPNs have been reviewed personally by our experts, using our transparent testing process and rating system to bring you the most reliable and up-to-date recommendations.
                        </p>
                        <p className="text-sm laptop:pt-0 pt-2">Our Testing Process Focuses On:</p>
                    </div>
                </div>

                <div className="gap-2 laptop:gap-20 px-[10px] laptop:px-[10%] laptop:bg-[#1C499E] py-2 flex justify-between laptop:justify-evenly flex-wrap laptop:flex-nowrap laptop:my-2 my-5">
                    <div className="w-[48%] laptop:h-fit min-h-[52px] flex items-center gap-2 text-[12px] laptop:text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <FaUnlockAlt className="inline text-[22px] laptop:text-[36px]" />Privacy & security
                    </div>
                    <div className="w-[48%] laptop:h-fit min-h-[52px] flex items-center gap-2 text-[12px] laptop:text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <IoSpeedometer className="inline text-[22px] laptop:text-[36px]" />Speed & Performance
                    </div>
                    <div className="w-[48%] laptop:h-fit min-h-[52px] flex items-center gap-2 text-[12px] laptop:text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <GiReceiveMoney className="inline text-[22px] laptop:text-[36px]" />Value for Money
                    </div>
                    <div className="w-[48%] laptop:h-fit min-h-[52px] flex items-center gap-2 text-[12px] laptop:text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <FaUserLarge className="inline text-[20px] laptop:text-[36px]" />User Review & Experience
                    </div>
                    <div className="w-[48%] laptop:h-fit min-h-[52px] flex items-center gap-2 text-[12px] laptop:text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <FaIdCard className="inline text-[22px] laptop:text-[36px]" />Ease of Use
                    </div>
                </div>

                <div className="flex laptop:flex-row flex-col laptop:gap-[60px] laptop:px-10 px-[10px] gap-4">
                    <div className="flex flex-col laptop:w-[60%] justify-evenly">
                        <h1 className="font-bold text-[23px] laptop:text-start text-center font-inknutAntiqua">
                            We Stand for Internet Privacy, Security & Freedom
                        </h1>
                        <p className="text-sm hidden laptop:block">
                            We are a team of independent experts with many years of experience in online privacy. We purchase and test every VPN ourselves and provide you with honest, unbiased reviews. Our goal is to help you find the best VPN to keep your online experience secure and private.
                        </p>
                    </div>
                    <div className="laptop:w-[40%]">
                        <div className="relative aspect-video w-full">

                            <Image src="/Assests/test-vpn/About.png" fill alt="logo" />
                        </div>
                    </div>
                    <p className="text-sm laptop:hidden">
                        We are a team of independent experts with many years of experience in online privacy. We purchase and test every VPN ourselves and provide you with honest, unbiased reviews. Our goal is to help you find the best VPN to keep your online experience secure and private.
                    </p>
                </div>
            </div>


            {/* Best Plan */}
            <div className="bg-gray-50 p-5 laptopl:max-w-[1060px] px-[10px] laptopl:px-0 my-10 rounded-[25px] shadow-md mx-auto">
                <div className="flex flex-col items-center gap-2 mb-10">
                    <h1 className="text-[30px] font-bold">Best VPN Plan</h1>
                    <p>Choose the best VPN with Great Discount</p>
                </div>

                <div className="flex flex-col tablet:flex-row gap-7">
                    {
                        vpnData.data
                            .filter((vpn) => vpnData.bestPlan.includes(vpn.attributes.slug))
                            .sort(
                                (a, b) => vpnData.bestPlan.indexOf(a.attributes.slug) - vpnData.bestPlan.indexOf(b.attributes.slug)
                            ).map((itm: any, idx: number) => (
                                <Link key={idx} target="_blank" href={itm.attributes.company_link.value} className={`group relative gap-4 tablet:w-1/3 w-full border-2 bg-white rounded-md border-white p-5 items-center flex-col flex hover:border-yellow-600 shadow-[0px_0px_10px_-5px_#1a202c] laptop:px-10 ${idx == 1 ? "border-yellow-600" : "laptop:scale-90 scale-95"}`} >
                                    {idx == 1 && <div
                                        className="absolute top-[-25px] left-[50%] transform -translate-x-1/2 bg-white text-blue-600 border border-blue-600 rounded-full px-4 py-1 flex items-center justify-center flex-col shadow-lg">
                                        <FaCrown className="text-xl" />
                                        <span className="font-semibold text-xs">BEST</span>
                                    </div>}

                                    <div className="flex flex-row justify-between tablet:flex-col w-full items-center">
                                        {/* image */}
                                        <div className="relative w-2/4 aspect-[2/1] laptop:w-3/4">
                                            <Image src={`/Assests/test-vpn/vpn/${itm.attributes.img}`} layout="fill" className="object-contain"
                                                alt="vpn image" />
                                        </div>

                                        {/* ratting */}
                                        <div className="flex flex-col items-center ml-3 gap-2 w-2/4 tablet:w-full justify-center">
                                            <CustomCircularProgress size="lg" value={itm.attributes.ratting} color={itm.attributes.ratting >= 9.7 ?
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
                                            <p className={`text-xs laptop:text-sm font-bold ${itm.attributes.ratting >= 9.5 ? "text-[#c4841d]" :
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
                                            {/* <Rating initialValue={itm.attributes.ratting} /> */}
                                        </div>
                                    </div>

                                    {/* details */}
                                    <p className="laptop:px-5 text-center text-sm font-bold text-blue-600">{itm.attributes.offer}</p>
                                    {/* <Link href={itm.attributes.company_link.value} className="bg-[#fd5522] hover:bg-[#04aa63] text-white font-bold px-3 py-1 rounded-lg mt-auto">Buy Now</Link> */}
                                    <button className="bg-[#fd5522] hover:bg-[#04aa63] text-white font-bold px-3 py-1 rounded-lg mt-auto laptop:text-[20px]">Try for Free</button>
                                </Link>
                            ))
                    }

                </div>
            </div>


            {/* card slider */}
            <div className="bg-blue-800 flex flex-col py-[30px] gap-2">
                <h1 className="text-center text-white font-bold text-[28px]">User Reviews</h1>
                <h2 className="text-center text-slate-300 text-[15px]">(These reviews are not verified)</h2>
                <div className="h-fit mx-12 mt-[32px]">
                    <CardSlider reviews={vpnData.reviews} />
                </div>

            </div>

            {/* faqs */}
            <div className="py-[56px]">
                <FAQ />
            </div>

            {/* two button */}
            <div className="flex flex-col bg-white py-[50px] px-2 laptop:px-0">
                <h1 className="font-kantumruyPro text-center laptop:text-[30px] text-[23px] text-[#545454] pb-[25px] font-semibold">Are you ready to secure yourself with worldclass VPN</h1>
                <div className="flex flex-col laptop:flex-row justify-center laptop:gap-12 gap-5">
                    <Link href="#" target="_blank" className="laptop:w-[450px] flex items-center gap-9 px-10 border-2 cursor-pointer hover:bg-[#04aa6291] border-[#04AA63] h-[60px]">
                        <MdOutlineCheckCircle className="text-[#04AA63] text-[30px] inline" /><span className="font-kantumruyPro text-[17px] text-[#545454] font-semibold ">Yes, I will Secure My Device NOW</span>
                    </Link>
                    <Link href="#" target="_blank" className="laptop:w-[450px] flex items-center gap-9 px-10 border-2 cursor-pointer hover:bg-[#fd5522a5] border-[#FD5522] h-[60px]">
                        <RxCrossCircled className="text-red-500 text-[30px] inline" /><span className="font-kantumruyPro text-[17px] text-[#545454] font-semibold ">No, I need some more time</span>
                    </Link>
                </div>
            </div>


        </section>
    );
};

export default TestVpnPage;
