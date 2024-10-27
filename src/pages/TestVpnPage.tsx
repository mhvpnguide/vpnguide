"use client"
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import TestVpnCard from "@/components/test-vpn-card";

// Dynamically import the icons
const FaCrown = React.lazy(() => import("react-icons/fa6").then(module => ({ default: module.FaCrown })));
const FaIdCard = React.lazy(() => import("react-icons/fa6").then(module => ({ default: module.FaIdCard })));
const FaUserLarge = React.lazy(() => import("react-icons/fa6").then(module => ({ default: module.FaUserLarge })));
const SlCalender = React.lazy(() => import("react-icons/sl").then(module => ({ default: module.SlCalender })));
const IoSpeedometer = React.lazy(() => import("react-icons/io5").then(module => ({ default: module.IoSpeedometer })));
const MdOutlineCheckCircle = React.lazy(() => import("react-icons/md").then(module => ({ default: module.MdOutlineCheckCircle })));
const FaUnlockAlt = React.lazy(() => import("react-icons/fa").then(module => ({ default: module.FaUnlockAlt })));
const GiReceiveMoney = React.lazy(() => import("react-icons/gi").then(module => ({ default: module.GiReceiveMoney })));
const RxCrossCircled = React.lazy(() => import("react-icons/rx").then(module => ({ default: module.RxCrossCircled })));

// Dynamically import the components
// Dynamically import the components without server-side rendering
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const CustomCircularProgress = dynamic(() => import("@/components/CustomCircularRatting"), { ssr: false });
const RatingStars = dynamic(() => import("@/components/CustomStar"), { ssr: false });
const CardSlider = dynamic(() => import("@/components/CardSlider"), { ssr: false });
const Comparison = dynamic(() => import("@/components/Comparison"), { ssr: false });
const ScrollToTopButton = dynamic(() => import("@/components/ScrollToTop"), { ssr: false });
const Popup = dynamic(() => import("@/components/Popup"), { ssr: false });
const TooltipComp = dynamic(() => import("@/components/TooltipComp"), { ssr: false });



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
                "img": "privateinternetaccess.png",
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
                "img": "purevpn.png",
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
        {
            "img": "purevpn.png",
            "rating": 8.5,
            "review": "Been a loyal customer of PureVPN for what must be over 10 years now. Whenever (rarely) anything doesn’t work, support from excellent reps like Bilal always set things right. What an improvement over past VPN experiences! - Pure Vpn",
            "author": "Vivino Nutzer",
            "company_link": {
                "name": "purevpn.com",
                "value": "https://track.vpns.guide/base2.php?cloid=1006&token4=review"
            },
        },
        {
            "img": "totalvpn.png",
            "rating": 10.0,
            "review": "At first I did not like it cause of a download problem but a technical support helped me out so I did get it downloaded and now I think it is a great privacy investment, I would like to thank the support technician who helped me out and made it so easy to install, Thank you. - Total Vpn",
            "author": "Carm Sacco",
            "company_link": {
                "name": "totalvpn.com",
                "value": "https://track.vpns.guide/base2.php?cloid=1007&token4=review"
            },
        },
        {
            "img": "cyberghost.png",
            "rating": 9.5,
            "review": "I use CyberGhost VPN since few times, it's the cheapest that I found, and today I'm quite satisfied by the service. The user xp is good on the app and on PC, cheap and efficient I think it's a good choice. - Cyber Ghost",
            "author": "Tanguy Le Crom",
            "company_link": {
                "name": "cyberghost.com",
                "value": "https://track.vpns.guide/base2.php?cloid=1002&token4=review"
            },
        },
        {
            "img": "privateinternetaccess.png",
            "rating": 9.0,
            "review": "Easy to use, in general very good, all the sites I need are working. Sadly a very specific streaming keeps kicking me out and sometimes google send me to some weird captchas but, well, it is what it is... - PIA",
            "author": "Tiago Andriotti",
            "company_link": {
                "name": "cyberghost.com",
                "value": "https://track.vpns.guide/base2.php?cloid=1004&token4=review"
            },
        },
        {
            "img": "expressvpn.png",
            "rating": 8.0,
            "review": "Ever since I became a subscriber I had no need to worry about cybersecurity. ExpressVpn offers the most reliable internet protection in the market. The monthly renewal is also fast and easy. - Express Vpn",
            "author": "MKS",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base2.php?cloid=1001&token4=review"
            },
        },
        {
            "img": "surfshark.png",
            "rating": 7.0,
            "review": "I've been using this VPN for a few days now, and my experience has been nothing but positive! The server speeds are great with very low ping, customer service is awesome, and it was super easy to setup on my router with WireGuard. - SurfShark",
            "author": "Brian",
            "company_link": {
                "name": "surfshark.com",
                "value": "https://track.vpns.guide/base2.php?cloid=1005&token4=review"
            },
        },
        {
            "img": "purevpn.png",
            "rating": 6.0,
            "review": "Smart and patient user support. I needed help with setting up vpn on my tp link router and Asim helped me patiently. Their support knows how to set up routers and are very patient. I am definitely renewing their service. - Pure Vpn",
            "author": "Ankush Gaur",
            "company_link": {
                "name": "purevpn.com",
                "value": "https://track.vpns.guide/base2.php?cloid=1006&token4=review"
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
            <ScrollToTopButton />

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
                                <Image loading="lazy" src={`/Assests/test-vpn/New-York-Times.png`} alt="New York Times" className="filter grayscale object-contain w-full" fill />
                            </div>
                            <div className="h-[30px] relative w-[40px]">
                                <Image loading="lazy" src={`/Assests/test-vpn/BBC.png`} alt="BBC" className="filter grayscale  w-full" fill />
                            </div>
                            <div className="h-[30px] relative w-[30px]">
                                <Image loading="lazy" src={`/Assests/test-vpn/cnet.png`} alt="Cnet" className="filter grayscale w-full" fill />
                            </div>
                            <div className="h-[30px] relative w-[40px]">
                                <Image loading="lazy" src={`/Assests/test-vpn/CNN.png`} alt="CNN" className="filter grayscale w-full" fill />
                            </div>
                            <div className="h-[30px] relative w-[30px]">
                                <Image loading="lazy" src={`/Assests/test-vpn/Fox-News.png`} alt="Fox News" className="filter grayscale " fill />
                            </div>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className="hidden laptop:w-[45%] w-[full] tablet:flex items-center justify-center">
                    <div className=" relative laptop:w-full w-[70%] aspect-video">
                        <Image loading="lazy" src="/Assests/test-vpn/Hero-Section.png" layout="fill" className="object-contain" alt="vpn image" />
                    </div>
                </div>
            </div>

            {/* update date section */}
            <div className="w-full bg-[#fcfcfc] shadow-sm">
                <div
                    className="flex justify-between laptopl:max-w-[1060px] px-[10px] laptopl:px-0 mx-auto items-center py-[4px] laptop:py-[6px] text-xl laptop:text-xl">
                    <span className="items-start text-[10px] laptop:text-[16px] flex  tablet:gap-2">
                        <span className="text-[14px] font-kantumruyPro">
                            <Suspense fallback={<div>Loading icons...</div>}>
                                <SlCalender className="inline mr-1 text-[16px] " />Updated on:
                            </Suspense>
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
            <div className="laptopl:max-w-[1060px] px-[10px] laptopl:px-0 mx-auto bg-[#F9F6EE]">
                <Popup date="27-10-2024" time="20:30" />
                <TestVpnCard blogs={vpnData.data} />
            </div>

            {/* comparison section */}
            <Comparison />

            {/* honest vpn review */}
            <div
                className="bg-white laptopl:max-w-[1060px] px-[10px] laptopl:px-0 mx-auto rounded-xl laptop:rounded-none py-2 laptop:py-0 shadow-md">

                <div className="flex laptop:flex-row flex-col laptop:gap-[60px]  laptop:px-10 px-[10px]">
                    {/* heading for mobile view */}
                    <h1 className="text-center laptop:hidden font-bold text-[23px] font-inknutAntiqua">Honest VPN Reviews Based
                        On Real Testing</h1>
                    <div className="laptop:w-[40%]">
                        <div className="relative aspect-video h-full">
                            <Image loading="lazy" src="/Assests/test-vpn/Review.png" fill alt="logo" />
                        </div>
                    </div>
                    <div className="flex flex-col laptop:w-[60%] justify-evenly">
                        <h1 className="hidden laptop:block font-bold text-[23px] font-inknutAntiqua ">
                            Honest VPN Reviews Based On Real Testing
                        </h1>
                        <p className="text-[15px]">
                            All VPNs have been reviewed personally by our experts, using our transparent testing process and
                            rating system to bring you the most reliable and up-to-date recommendations.
                        </p>
                        <p className="text-sm laptop:pt-0 pt-2">Our Testing Process Focuses On:</p>
                    </div>
                </div>

                <div
                    className="gap-2 laptop:gap-20 px-[10px] laptop:px-[10%] laptop:bg-[#1C499E] py-2 flex justify-between laptop:justify-evenly flex-wrap laptop:flex-nowrap laptop:my-2 my-5">
                    <div
                        className="w-[48%] laptop:h-fit min-h-[52px] flex items-center gap-2 text-[12px] laptop:text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <Suspense fallback={<div>Loading components...</div>}><FaUnlockAlt className="inline text-[22px] laptop:text-[36px]" /></Suspense>Privacy & security
                    </div>
                    <div
                        className="w-[48%] laptop:h-fit min-h-[52px] flex items-center gap-2 text-[12px] laptop:text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <Suspense fallback={<div>Loading components...</div>}><IoSpeedometer className="inline text-[22px] laptop:text-[36px]" /></Suspense>Speed & Performance
                    </div>
                    <div
                        className="w-[48%] laptop:h-fit min-h-[52px] flex items-center gap-2 text-[12px] laptop:text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <Suspense fallback={<div>Loading components...</div>}><GiReceiveMoney className="inline text-[22px] laptop:text-[36px]" /></Suspense>Value for Money
                    </div>
                    <div
                        className="w-[48%] laptop:h-fit min-h-[52px] flex items-center gap-2 text-[12px] laptop:text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <Suspense fallback={<div>Loading components...</div>}><FaUserLarge className="inline text-[20px] laptop:text-[36px]" /></Suspense>User Review & Experience
                    </div>
                    <div
                        className="w-[48%] laptop:h-fit min-h-[52px] flex items-center gap-2 text-[12px] laptop:text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <Suspense fallback={<div>Loading components...</div>}><FaIdCard className="inline text-[22px] laptop:text-[36px]" /></Suspense>Ease of Use
                    </div>
                </div>

                <div className="flex laptop:flex-row flex-col laptop:gap-[60px] laptop:px-10 px-[10px] gap-4">
                    <div className="flex flex-col laptop:w-[60%] justify-evenly">
                        <h1 className="font-bold text-[23px] laptop:text-start text-center font-inknutAntiqua">
                            We Stand for Internet Privacy, Security & Freedom
                        </h1>
                        <p className="text-sm hidden laptop:block">
                            We are a team of independent experts with many years of experience in online privacy. We purchase
                            and test every VPN ourselves and provide you with honest, unbiased reviews. Our goal is to help you
                            find the best VPN to keep your online experience secure and private.
                        </p>
                    </div>
                    <div className="laptop:w-[40%]">
                        <div className="relative aspect-video w-full">

                            <Image loading="lazy" src="/Assests/test-vpn/About.png" fill alt="logo" />
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
            <div className="bg-gray-50 p-5 laptopl:max-w-[1060px] px-[10px] laptopl:px-0 my-10 rounded-[25px] shadow-md mx-auto">
                <div className="flex flex-col items-center gap-2 mb-10">
                    <h1 className="text-[30px] font-bold">Best VPN Plan</h1>
                    <p>Choose the best VPN with Great Discount</p>
                </div>

                <div className="flex flex-col tablet:flex-row gap-7">
                    {
                        vpnData.data
                            .filter((vpn) => vpnData.bestPlan.includes(vpn.attributes.slug))
                            .sort((a, b) => vpnData.bestPlan.indexOf(a.attributes.slug) - vpnData.bestPlan.indexOf(b.attributes.slug))
                            .map((itm: any, idx: number) => (
                                <Link
                                    key={idx}
                                    target="_blank"
                                    href={itm.attributes.link3}
                                    className={`group relative gap-4 tablet:w-1/3 w-full border-2 bg-white rounded-md border-white p-5 items-center flex-col flex hover:border-yellow-600 shadow-[0px_0px_10px_-5px_#1a202c] laptop:px-10 ${idx == 1 ? "border-yellow-600" : "laptop:scale-90 scale-95"}`}
                                >
                                    {idx == 1 && <div className="absolute top-[-25px] left-[50%] transform -translate-x-1/2 bg-white text-blue-600 border border-blue-600 rounded-full px-4 py-1 flex items-center justify-center flex-col shadow-lg">
                                        <Suspense fallback={<div>Loading components...</div>}><FaCrown className="text-xl" /></Suspense>
                                        <span className="font-semibold text-xs">BEST</span>
                                    </div>}

                                    <div className="flex flex-row justify-between tablet:flex-col w-full items-center">
                                        {/* image */}
                                        <div className="relative w-2/4 aspect-[2/1] laptop:w-3/4">
                                            <Image loading="lazy" src={`/Assests/test-vpn/vpn/${itm.attributes.img}`} layout="fill"
                                                className="object-contain" alt="vpn image" />
                                        </div>

                                        {/* ratting */}
                                        <div className="flex flex-col items-center ml-3 gap-2 w-2/4 tablet:w-full justify-center">
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
                                    <p className="laptop:px-5 text-center text-sm font-bold text-blue-600">{itm.attributes.offer}</p>
                                    <button
                                        className="bg-[#fd5522] hover:bg-[#04aa63] text-white font-bold px-3 py-1 rounded-lg mt-auto laptop:text-[20px]">Try
                                        for Free</button>
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
                <h1
                    className="font-kantumruyPro text-center laptop:text-[30px] text-[23px] text-[#545454] pb-[25px] font-semibold">
                    Are you ready to secure yourself with worldclass VPN</h1>
                <div className="flex flex-col laptop:flex-row justify-center laptop:gap-12 gap-5">
                    <Link href="https://track.vpns.guide/base2.php?cloid=1002&token4=Yes" target="_blank" className="laptop:w-[450px] flex items-center gap-9 px-10 border-2 cursor-pointer hover:bg-[#04aa6291] border-[#04AA63] h-[60px]">
                        <Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-[30px] inline" /></Suspense>
                        <span className="font-kantumruyPro text-[17px] text-[#545454] font-semibold ">Yes, I will Secure My Device NOW</span>
                    </Link>
                    <Link href="https://track.vpns.guide/base2.php?cloid=1002&token4=No" target="_blank"
                        className="laptop:w-[450px] flex items-center gap-9 px-10 border-2 cursor-pointer hover:bg-[#fd5522a5] border-[#FD5522] h-[60px]">
                        <Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-[30px] inline" /></Suspense>
                        <span className="font-kantumruyPro text-[17px] text-[#545454] font-semibold ">No, I need some more time</span>
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default TestVpnPage;
