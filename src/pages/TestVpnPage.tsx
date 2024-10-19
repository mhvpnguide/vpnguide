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
        "Fast servers to browse <b>without,</b> interruptions",
        "Keep your online activity private & secure with a simple IP address change",
        "Compatible with all operating systems, popular devices & services",
        "<b>Free trails,</b> discount, refund policies to test them out risk free"
    ],
    updatedOn: '17-September-2024',
    bestPlan: [
        "privateinternetaccess",
        "expressvpn",
        "cyberghost",
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
                "vpn_name": "Express Vpn",
                "ratting": 9.8,
                "slug": "expressvpn",
                "offer": "Sign up today & get 3 extra months for free.",
                "details": "ExpressVPN: lightning-fast, highly secure, and trusted. Enjoy best-in-class service with 24/7 support. Outstanding!",
                "img": "express.svg",
                "features": [
                    { "value": "Try for 30 days with money-back guarantee" },
                    { "value": "Ultra-fast speed with Zero lag" },
                    { "value": "Enhanced security with no IP/DNS leaks" },
                    { "value": "3000 servers in 100+ countries" },
                    { "value": "VPN kill-switch for safety" },
                    { "value": "Easy to use app for all devices" }
                ],
                "company_link": {
                    "name": "expressvpn.com",
                    "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
                },
                "top_banner": [
                    { "value": "Free For 30 Days" },
                    { "value": "Best VPN for 2024" }
                ],
                "category_rating": {
                    "privacy": 3.9,
                    "features": 2.9,
                    "speed": 5.9,
                    "userScore": 9.9,
                    "valueForMoney": 9.9,
                },
            }
        },
        {
            "attributes": {
                "vpn_name": "Pen Vpn",
                "ratting": 6,
                "slug": "openvpn",
                "offer": "Sign up today & get 3 extra months for free.",
                "details": "ExpressVPN: lightning-fast, highly secure, and trusted. Enjoy best-in-class service with 24/7 support. Outstanding!",
                "img": "open.png",
                "features": [
                    { "value": "Try for 30 days with money-back guarantee" },
                    { "value": "Ultra-fast speed with Zero lag" },
                    { "value": "Enhanced security with no IP/DNS leaks" },
                    { "value": "3000 servers in 100+ countries" },
                    { "value": "VPN kill-switch for safety" },
                    { "value": "Easy to use app for all devices" }
                ],
                "company_link": {
                    "name": "openvpn.net",
                    "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
                },
                "top_banner": [
                    { "value": "Free For 30 Days" },
                    { "value": "Best VPN for 2024" }
                ],
                "category_rating": {
                    "privacy": 9.9,
                    "features": 9.9,
                    "speed": 9.9,
                    "userScore": 9.9,
                    "valueForMoney": 9.9,
                },
            }
        },
        {
            "attributes": {
                "vpn_name": "Cyber Ghost",
                "ratting": 9.5,
                "slug": "cyberghost",
                "offer": "Sign up today & get 3 extra months for free.",
                "details": "CyberGhost: lightning-fast, highly secure, and trusted. Enjoy best-in-class service with 24/7 support. Outstanding!",
                "img": "cyber.svg",
                "features": [
                    { "value": "Try for 30 days with money-back guarantee" },
                    { "value": "Ultra-fast speed with Zero lag" },
                    { "value": "Enhanced security with no IP/DNS leaks" },
                    { "value": "3000 servers in 100+ countries" },
                    { "value": "VPN kill-switch for safety" },
                    { "value": "Easy to use app for all devices" }
                ],
                "company_link": {
                    "name": "cyberghost.com",
                    "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
                },
                "top_banner": [
                    { "value": "Free For 30 Days" },
                    { "value": "Best VPN for 2024" }
                ],
                "category_rating": {
                    "privacy": 9.9,
                    "features": 9.9,
                    "speed": 9.9,
                    "userScore": 9.9,
                    "valueForMoney": 9.9,
                },
            }
        },
        {
            "attributes": {
                "vpn_name": "Private Internet Access",
                "ratting": 9.2,
                "slug": "privateinternetaccess",
                "offer": "Sign up today & get 3 extra months for free.",
                "details": "PIA: lightning-fast, highly secure, and trusted. Enjoy best-in-class service with 24/7 support. Outstanding!",
                "img": "privateinternetaccess.png",
                "features": [
                    { "value": "Try for 30 days with money-back guarantee" },
                    { "value": "Ultra-fast speed with Zero lag" },
                    { "value": "Enhanced security with no IP/DNS leaks" },
                    { "value": "3000 servers in 100+ countries" },
                    { "value": "VPN kill-switch for safety" },
                    { "value": "Easy to use app for all devices" }
                ],
                "company_link": {
                    "name": "privateinternetaccess.com",
                    "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
                },
                "top_banner": [
                    { "value": "Free For 30 Days" },
                    { "value": "Best VPN for 2024" }
                ],
                "category_rating": {
                    "privacy": 3.9,
                    "features": 2.9,
                    "speed": 5.9,
                    "userScore": 9.9,
                    "valueForMoney": 9.9,
                },
            }
        },
        {
            "attributes": {
                "vpn_name": "Nord Vpn",
                "ratting": 8.9,
                "slug": "nordvpn",
                "offer": "Sign up today & get 3 extra months for free.",
                "details": "NordVPN: lightning-fast, highly secure, and trusted. Enjoy best-in-class service with 24/7 support. Outstanding!",
                "img": "nordvpn.png",
                "features": [
                    { "value": "Try for 30 days with money-back guarantee" },
                    { "value": "Ultra-fast speed with Zero lag" },
                    { "value": "Enhanced security with no IP/DNS leaks" },
                    { "value": "3000 servers in 100+ countries" },
                    { "value": "VPN kill-switch for safety" },
                    { "value": "Easy to use app for all devices" }
                ],
                "company_link": {
                    "name": "nordvpn.com",
                    "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
                },
                "top_banner": [
                    { "value": "Free For 30 Days" },
                    { "value": "Best VPN for 2024" }
                ],
                "category_rating": {
                    "privacy": 3.9,
                    "features": 2.9,
                    "speed": 5.9,
                    "userScore": 9.9,
                    "valueForMoney": 9.9,
                },
            }
        },
        {
            "attributes": {
                "vpn_name": "SurfShark",
                "ratting": 8.6,
                "slug": "surfshark",
                "offer": "Sign up today & get 3 extra months for free.",
                "details": "SurfShark: lightning-fast, highly secure, and trusted. Enjoy best-in-class service with 24/7 support. Outstanding!",
                "img": "surfshark.png",
                "features": [
                    { "value": "Try for 30 days with money-back guarantee" },
                    { "value": "Ultra-fast speed with Zero lag" },
                    { "value": "Enhanced security with no IP/DNS leaks" },
                    { "value": "3000 servers in 100+ countries" },
                    { "value": "VPN kill-switch for safety" },
                    { "value": "Easy to use app for all devices" }
                ],
                "company_link": {
                    "name": "surfshark.com",
                    "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
                },
                "top_banner": [
                    { "value": "Free For 30 Days" },
                    { "value": "Best VPN for 2024" }
                ],
                "category_rating": {
                    "privacy": 3.9,
                    "features": 2.9,
                    "speed": 5.9,
                    "userScore": 9.9,
                    "valueForMoney": 9.9,
                },
            }
        },
        {
            "attributes": {
                "vpn_name": "Total Vpn",
                "ratting": 8.5,
                "slug": "totalvpn",
                "offer": "Sign up today & get 3 extra months for free.",
                "details": "Total VPN: lightning-fast, highly secure, and trusted. Enjoy best-in-class service with 24/7 support. Outstanding!",
                "img": "totalvpn.png",
                "features": [
                    { "value": "Try for 30 days with money-back guarantee" },
                    { "value": "Ultra-fast speed with Zero lag" },
                    { "value": "Enhanced security with no IP/DNS leaks" },
                    { "value": "3000 servers in 100+ countries" },
                    { "value": "VPN kill-switch for safety" },
                    { "value": "Easy to use app for all devices" }
                ],
                "company_link": {
                    "name": "totalvpn.com",
                    "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
                },
                "top_banner": [
                    { "value": "Free For 30 Days" },
                    { "value": "Best VPN for 2024" }
                ],
                "category_rating": {
                    "privacy": 3.9,
                    "features": 2.9,
                    "speed": 5.9,
                    "userScore": 9.9,
                    "valueForMoney": 9.9,
                },
            }
        },
        {
            "attributes": {
                "vpn_name": "Ip Vanish",
                "ratting": 8.2,
                "slug": "ipvanish",
                "offer": "Sign up today & get 3 extra months for free.",
                "details": "IpVanish: lightning-fast, highly secure, and trusted. Enjoy best-in-class service with 24/7 support. Outstanding!",
                "img": "ipvanish.png",
                "features": [
                    { "value": "Try for 30 days with money-back guarantee" },
                    { "value": "Ultra-fast speed with Zero lag" },
                    { "value": "Enhanced security with no IP/DNS leaks" },
                    { "value": "3000 servers in 100+ countries" },
                    { "value": "VPN kill-switch for safety" },
                    { "value": "Easy to use app for all devices" }
                ],
                "company_link": {
                    "name": "ipvanish.com",
                    "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
                },
                "top_banner": [
                    { "value": "Free For 30 Days" },
                    { "value": "Best VPN for 2024" }
                ],
                "category_rating": {
                    "privacy": 3.9,
                    "features": 2.9,
                    "speed": 5.9,
                    "userScore": 9.9,
                    "valueForMoney": 9.9,
                },
            }
        },
        {
            "attributes": {
                "vpn_name": "Private Vpn",
                "ratting": 8.0,
                "slug": "privatevpn",
                "offer": "Sign up today & get 3 extra months for free.",
                "details": "PrivateVPN: lightning-fast, highly secure, and trusted. Enjoy best-in-class service with 24/7 support. Outstanding!",
                "img": "privatevpn.png",
                "features": [
                    { "value": "Try for 30 days with money-back guarantee" },
                    { "value": "Ultra-fast speed with Zero lag" },
                    { "value": "Enhanced security with no IP/DNS leaks" },
                    { "value": "3000 servers in 100+ countries" },
                    { "value": "VPN kill-switch for safety" },
                    { "value": "Easy to use app for all devices" }
                ],
                "company_link": {
                    "name": "privatevpn.com",
                    "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
                },
                "top_banner": [
                    { "value": "Free For 30 Days" },
                    { "value": "Best VPN for 2024" }
                ],
                "category_rating": {
                    "privacy": 3.9,
                    "features": 2.9,
                    "speed": 5.9,
                    "userScore": 9.9,
                    "valueForMoney": 9.9,
                },
            }
        },

    ],
    reviews: [
        {
            "img": "expressvpn.png",
            "rating": 9.8,
            "review": "Review 1 - Express Vpn",
            "author": "Roma Bose",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base2.php?cloid=1001"
            },
        },
        {
            "img": "cyberghost.png",
            "rating": 9.6,
            "review": "Review 2 - CyberGhost",
            "author": "Soma Bose",
            "company_link": {
                "name": "cyberghost.com",
                "value": "https://track.vpns.guide/base2.php?cloid=1004"
            },
        },
        {
            "img": "privateinternetaccess.png",
            "rating": 9.7,
            "review": "Review 3 - PIA",
            "author": "Rima Bose",
            "company_link": {
                "name": "privateinternetaccess.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "nordvpn.png",
            "rating": 9.4,
            "review": "Review 4 - Nord Vpn",
            "author": "Roma Bose",
            "company_link": {
                "name": "nordvpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "surfshark.png",
            "rating": 9.3,
            "review": "Review 5 - Surf Shark",
            "author": "Roma Bose",
            "company_link": {
                "name": "surfshark.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "totalvpn.png",
            "rating": 9.2,
            "review": "Review 6 - Total Vpn",
            "author": "Roma Bose",
            "company_link": {
                "name": "totalvpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "ipvanish.png",
            "rating": 9.6,
            "review": "Review 7 - Ip Vanish",
            "author": "Roma Bose",
            "company_link": {
                "name": "ipvanish.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "privatevpn.png",
            "rating": 9.5,
            "review": "Review 8 - Private Vpn",
            "author": "Roma Bose",
            "company_link": {
                "name": "privatevpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "expressvpn.png",
            "rating": 9.6,
            "review": "Review 9 - Express Vpn",
            "author": "Roma Bose",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "cyberghost.png",
            "rating": 9.6,
            "review": "Review 10 - Cyber Ghost",
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

    useEffect(() => {
        const today = new Date();

        const day = today.getDate();
        const month = today.toLocaleString(undefined, { month: "long" });
        const year = today.getFullYear();

        const formattedDate = `${day}-${month}-${year}`;
        setCurrentDate(formattedDate);
    }, []);

    return (
        <section className="bg-[#F9F6EE]">
            {/* top section */}
            <div className="flex laptop:flex-row flex-col px-[10px] laptop:px-[200px] laptop:py-2 pt-[17px] laptop:pt-10 laptop:pb-[28px] bg-[#F9F6EE]">
                {/* left */}
                <div className="content w-full tablet:w-[52%] max-h-fit ">
                    <h1 className="text-lg text-[21px] laptop:text-[35px] font-bold mb-2 font-kantumruyPro">{vpnData.title}</h1>
                    <h2 className="mb-[25px] laptop:mb-[30px] text-blue-950 text-xs laptop:text-[13px] font-kantumruyPro">
                        October 2024 - Excellent security features, widespread server networks, and reliable refund policie - secure internet access is just a few clicks away.
                    </h2>
                    <ul className=" mb-[30px] text-sm laptop:text-base">
                        {
                            vpnData.list?.map((itm: any, idx: number) => (
                                <li className="tick-list-green-item mb-[8px] font-kantumruyPro" key={idx} dangerouslySetInnerHTML={{
                                    __html: itm,
                                }}></li>
                            ))
                        }
                    </ul>
                    {/* featured section */}
                    <div className="hidden tablet:block">
                        <span className="font-kantumruyPro">These VPN Services have been featured on:</span>
                        <div className="flex gap-3 ml-2 mt-[10px]">
                            {
                                vpnData.featuredImage.map((itm, idx) => (
                                    <Image src={`/Assests/test-vpn/${itm.link}`} key={idx} height={30} width={30} alt="logo" className="filter grayscale" />
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="laptop:w-[48%] w-[full] flex items-center justify-center">
                    <div className=" relative laptop:w-full w-[70%] aspect-video">
                        <Image src="/Assests/test-vpn/Hero-Section.png" layout="fill" className="object-contain" alt="vpn image" />
                    </div>
                </div>
            </div>

            {/* update date section */}
            <div className="flex laptop:px-[200px] px-[14px] justify-between  items-center py-[4px] laptop:py-[6px] bg-[#fcfcfc] text-xl laptop:text-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <span className="items-start text-[10px] laptop:text-[16px] flex  tablet:gap-2">
                    <span className="text-[14px] font-kantumruyPro">
                        <SlCalender className="inline mr-1 text-[16px] " />Updated on:
                    </span>
                    <span className="text-[13px]">
                        {currentDate}
                    </span>
                </span>
                <div className="flex justify-end">
                    <TooltipComp />
                </div>
            </div>

            {/* reviews section */}
            <div className="laptop:px-[200px] px-[10px] bg-[#F9F6EE]">
                <TestVpnCard blogs={vpnData.data} />
            </div>



            {/* comparison section */}
            <Comparison />

            {/* honest vpn review */}
            <div className="bg-white laptop:mx-[200px] m-[10px] laptop:m-0 rounded-xl laptop:rounded-none py-2 laptop:py-0 shadow-md">

                <div className="flex laptop:flex-row flex-col laptop:gap-[60px]  laptop:px-10 px-[10px]">
                    <h1 className="text-center laptop:hidden font-bold text-[17px]">Honest VPN Reviews Based On Real Testing</h1>
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

                <div className="gap-2 laptop:gap-20 px-[10px] laptop:px-[10%] laptop:bg-[#1C499E] py-2 flex justify-between laptop:justify-evenly flex-wrap laptop:flex-nowrap my-2">
                    <div className="w-[48%] flex items-center gap-2 text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <FaUnlockAlt className="inline text-[25px]" />Privacy & security
                    </div>
                    <div className="w-[48%] flex items-center gap-2 text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <IoSpeedometer className="inline text-[36px]" />Speed & Performance
                    </div>
                    <div className="w-[48%] flex items-center gap-2 text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <GiReceiveMoney className="inline text-[36px]" />Value for Money
                    </div>
                    <div className="w-[48%] flex items-center gap-2 text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <FaUserLarge className="inline text-[36px]" />User Review & Experience
                    </div>
                    <div className="w-[48%] flex items-center gap-2 text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <FaIdCard className="inline text-[25px]" />Ease of Use
                    </div>
                </div>

                <div className="flex laptop:flex-row flex-col laptop:gap-[60px] laptop:px-10 px-[10px]">
                    <div className="flex flex-col laptop:w-[60%] justify-evenly">
                        <h1 className="font-bold text-[23px] text-start font-inknutAntiqua">
                            We Stand for Internet Privacy, Security & Freedom
                        </h1>
                        <p className="text-sm">
                            We are a team of independent experts with many years of experience in online privacy. We purchase and test every VPN ourselves and provide you with honest, unbiased reviews. Our goal is to help you find the best VPN to keep your online experience secure and private.
                        </p>
                    </div>
                    <div className="laptop:w-[40%]">
                        <div className="relative aspect-video w-full">

                            <Image src="/Assests/test-vpn/About.png" fill alt="logo" />
                        </div>
                    </div>
                </div>

            </div>


            {/* Best Plan */}
            <div className="bg-gray-50 p-5 laxptop:mx-48 tablet:mx-[200px] my-10 rounded-[25px] shadow-md">
                <div className="flex flex-col items-center gap-2 mb-10">
                    <h1 className="text-[30px] font-bold">Best VPN Plan</h1>
                    <p>Choose the best BPN with Great Discount</p>
                </div>

                <div className="flex flex-col tablet:flex-row gap-7">
                    {
                        vpnData.data
                            .filter((vpn) => vpnData.bestPlan.includes(vpn.attributes.slug))
                            .sort(
                                (a, b) => vpnData.bestPlan.indexOf(a.attributes.slug) - vpnData.bestPlan.indexOf(b.attributes.slug)
                            ).map((itm: any, idx: number) => (
                                <Link key={idx} href={itm.attributes.company_link.value} className={`group relative gap-4 tablet:w-1/3 w-full border-2 bg-white rounded-md border-white p-5 items-center flex-col flex hover:border-yellow-600 shadow-[0px_0px_10px_-5px_#1a202c] laptop:px-10 ${idx == 1 ? "border-yellow-600" : "laptop:scale-90 scale-95"}`} >
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
                                            <RatingStars value={itm.attributes.ratting} textSize="[25px]" emptyTextSize="[28px]"/>
                                            {/* <Rating initialValue={itm.attributes.ratting} /> */}
                                        </div>
                                    </div>

                                    {/* details */}
                                    <p className="laptop:px-5 text-center text-sm font-bold text-blue-600">{itm.attributes.offer}</p>
                                    {/* <Link href={itm.attributes.company_link.value} className="bg-[#fd5522] hover:bg-[#04aa63] text-white font-bold px-3 py-1 rounded-lg mt-auto">Buy Now</Link> */}
                                    <button className="bg-[#fd5522] hover:bg-[#04aa63] text-white font-bold px-3 py-1 rounded-lg mt-auto">Buy Now</button>
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
                    <div className="laptop:w-[450px] flex items-center gap-9 px-10 border-2 cursor-pointer hover:bg-[#04aa6291] border-[#04AA63] h-[60px]">
                        <MdOutlineCheckCircle className="text-[#04AA63] text-[30px] inline" /><span className="font-kantumruyPro text-[17px] text-[#545454] font-semibold ">Yes, I will Secure My Device NOW</span>
                    </div>
                    <div className="laptop:w-[450px] flex items-center gap-9 px-10 border-2 cursor-pointer hover:bg-[#fd5522a5] border-[#FD5522] h-[60px]">
                        <RxCrossCircled className="text-red-500 text-[30px] inline" /><span className="font-kantumruyPro text-[17px] text-[#545454] font-semibold ">No, I need some more time</span>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default TestVpnPage;
