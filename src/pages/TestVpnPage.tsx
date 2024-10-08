"use client"
import FAQ from "@/components/FAQ";
import Image from "next/image";
import Link from "next/link";
import CustomCircularProgress from "@/components/CustomCircularRatting";
import BestVpnCard from "@/components/best-vpn-card";
import { FaCrown } from "react-icons/fa6";
import TooltipComp from "@/components/TooltipComp";
import { SlCalender } from "react-icons/sl";
import TestVpnCard from "@/components/test-vpn-card";
import { FaUnlockAlt } from "react-icons/fa";
import RatingStars from "@/components/CustomStar";
import CardSlider from "@/components/CardSlider";
import Comparison from "@/components/Comparison";


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
        "expressvpn",
        "openvpn",
        "cybervpn",
    ],
    // These VPN Services have been featured on:
    featuredImage:
        [
            { link: "Fox_News_Channel_logo.png" },
            { link: "Fox_News_Channel_logo.png" },
            { link: "Fox_News_Channel_logo.png" }
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
                "vpn_name": "Express Vpn",
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
                    "name": "expressvpn.com",
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
                "vpn_name": "Express Vpn",
                "ratting": 9.8,
                "slug": "cybervpn",
                "offer": "Sign up today & get 3 extra months for free.",
                "details": "ExpressVPN: lightning-fast, highly secure, and trusted. Enjoy best-in-class service with 24/7 support. Outstanding!",
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
                    "name": "expressvpn.com",
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

    ],
    reviews: [
        {
            "img": "open.png",
            "rating": 9.6,
            "review": "Flawless installation starts automatically, great speed, I couldn't be happier with Express VPN. There are lots of servers to connect to. I've even used it while vacationing in Ireland. ExpressVPN is a great product and worth every penny!",
            "author": "Roma Bose",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "cyber.svg",
            "rating": 9.6,
            "review": "Flawless installation starts automatically, great speed, I couldn't be happier with Express VPN. There are lots of servers to connect to. I've even used it while vacationing in Ireland. ExpressVPN is a great product and worth every penny!",
            "author": "Soma Bose",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "express.svg",
            "rating": 9.6,
            "review": "Flawless installation starts automatically, great speed, I couldn't be happier with Express VPN. There are lots of servers to connect to. I've even used it while vacationing in Ireland. ExpressVPN is a great product and worth every penny!",
            "author": "Rima Bose",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "open.png",
            "rating": 9.6,
            "review": "Flawless installation starts automatically, great speed, I couldn't be happier with Express VPN. There are lots of servers to connect to. I've even used it while vacationing in Ireland. ExpressVPN is a great product and worth every penny!",
            "author": "Roma Bose",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "open.png",
            "rating": 9.6,
            "review": "Flawless installation starts automatically, great speed, I couldn't be happier with Express VPN. There are lots of servers to connect to. I've even used it while vacationing in Ireland. ExpressVPN is a great product and worth every penny!",
            "author": "Roma Bose",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "open.png",
            "rating": 9.6,
            "review": "Flawless installation starts automatically, great speed, I couldn't be happier with Express VPN. There are lots of servers to connect to. I've even used it while vacationing in Ireland. ExpressVPN is a great product and worth every penny!",
            "author": "Roma Bose",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "open.png",
            "rating": 9.6,
            "review": "Flawless installation starts automatically, great speed, I couldn't be happier with Express VPN. There are lots of servers to connect to. I've even used it while vacationing in Ireland. ExpressVPN is a great product and worth every penny!",
            "author": "Roma Bose",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "open.png",
            "rating": 9.6,
            "review": "Flawless installation starts automatically, great speed, I couldn't be happier with Express VPN. There are lots of servers to connect to. I've even used it while vacationing in Ireland. ExpressVPN is a great product and worth every penny!",
            "author": "Roma Bose",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "open.png",
            "rating": 9.6,
            "review": "Flawless installation starts automatically, great speed, I couldn't be happier with Express VPN. There are lots of servers to connect to. I've even used it while vacationing in Ireland. ExpressVPN is a great product and worth every penny!",
            "author": "Roma Bose",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
        {
            "img": "open.png",
            "rating": 9.6,
            "review": "Flawless installation starts automatically, great speed, I couldn't be happier with Express VPN. There are lots of servers to connect to. I've even used it while vacationing in Ireland. ExpressVPN is a great product and worth every penny!",
            "author": "Roma Bose",
            "company_link": {
                "name": "expressvpn.com",
                "value": "https://track.vpns.guide/base.php?c=11&key=c8f75004ff843dd185940d2d8c1d19e5"
            },
        },
    ]
}



const TestVpnPage = () => {

    return (
        <section className="bg-[#F9F6EE]">
            {/* top section */}
            <div className="flex laptop:flex-row flex-col px-[10px] laptop:px-[200px] laptop:py-2 pt-[17px] laptop:pt-10 laptop:pb-[28px] bg-[#F9F6EE]">
                {/* left */}
                <div className="content w-full tablet:w-[52%] max-h-fit ">
                    <h1 className="text-lg text-[21px] laptop:text-[35px] font-bold mb-2">{vpnData.title}</h1>
                    <h2 className="mb-[25px] laptop:mb-[30px] text-blue-950 text-xs laptop:text-[13px] ">
                        September 2024 - Excellent security features, widespread server networks, and reliable refund policie - secure internet access is just a few clicks away.
                    </h2>
                    <ul className=" mb-[30px] text-sm laptop:text-base">
                        {
                            vpnData.list?.map((itm: any, idx: number) => (
                                <li className="tick-list-item mb-[8px]" key={idx} dangerouslySetInnerHTML={{
                                    __html: itm,
                                }}></li>
                            ))
                        }
                    </ul>
                    {/* featured section */}
                    <div className="hidden tablet:block">
                        <span className="">These VPN Services have been featured on:</span>
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
                        <Image src="/Assests/best-vpn/new_hero_image.svg" layout="fill" className="object-contain" alt="vpn image" />
                    </div>
                </div>
            </div>

            {/* update date section */}
            <div className="flex laptop:px-[200px] px-[14px] justify-between  items-center py-[4px] laptop:py-[11.5px] bg-[#fcfcfc] text-xl laptop:text-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <span className="items-start text-[10px] laptop:text-[16px] flex  tablet:gap-2">
                    <span className="text-[14px]">
                        <SlCalender className="inline mr-1 text-[16px]" />Updated on:
                    </span>
                    <span className="text-[13px]">
                        {vpnData.updatedOn}
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
            <Comparison/>

            {/* honest vpn review */}
            <div className="bg-white laptop:mx-[200px] m-[10px] laptop:m-0 rounded-xl laptop:rounded-none py-2 laptop:py-0">
                <div className="flex laptop:flex-row flex-col laptop:gap-[60px]  laptop:px-10 px-[10px]">

                    <h1 className="text-center laptop:hidden font-bold text-[17px]">Honest VPN Reviews Based On Real Testing</h1>
                    <div className="laptop:w-[40%]">
                        <div className="relative aspect-video h-full">

                            <Image src="/Assests/test-vpn/honest-vpn-review.png" fill alt="logo" />
                        </div>
                    </div>
                    <div className="flex flex-col laptop:w-[60%] justify-evenly">
                        <h1 className="hidden laptop:block font-bold text-[23px]">
                            Honest VPN Reviews Based On Real Testing
                        </h1>
                        <p className="text-[15px]">
                            All VPNs have been reviewed personally by our experts, using our transparent testing process and rating system to bring you the most reliable and up-to-date recommendations.
                        </p>
                        <p className="text-sm laptop:pt-0 pt-2">Our Testing Process Focuses On:</p>
                    </div>
                </div>

                <div className="gap-2 laptop:gap-14 px-[10px] laptop:px-[10%] laptop:bg-[#1C499E] py-2 flex justify-between laptop:justify-evenly flex-wrap laptop:flex-nowrap my-2">
                    <div className="w-[48%] flex items-center gap-2 text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <FaUnlockAlt className="inline text-[26px]" />Privacy & security
                    </div>
                    <div className="w-[48%] flex items-center gap-2 text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <FaUnlockAlt className="inline text-[26px]" />Speed & Performance
                    </div>
                    <div className="w-[48%] flex items-center gap-2 text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <FaUnlockAlt className="inline text-[26px]" />Value for Money
                    </div>
                    <div className="w-[48%] flex items-center gap-2 text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <FaUnlockAlt className="inline text-[26px]" />User Experience
                    </div>
                    <div className="w-[48%] flex items-center gap-2 text-[13px] text-white bg-[#1C499E] laptop:bg-transparent p-2 rounded-full">
                        <FaUnlockAlt className="inline text-[26px]" />Ease of Use
                    </div>
                </div>

                <div className="flex laptop:flex-row flex-col laptop:gap-[60px] laptop:px-10 px-[10px]">
                    <div className="flex flex-col laptop:w-[60%] justify-evenly">
                        <h1 className="font-bold text-[23px] text-center">Honest VPN Reviews Based On Real Testing</h1>
                        <p className="text-sm">All VPNs have been reviewed personally by our experts, using our transparent testing
                            process and rating system to bring you the most reliable and up-to-date recommendations. </p>
                        <p className="text-sm">Our Testing Process Focuses On:</p>
                    </div>
                    <div className="laptop:w-[40%]">
                        <div className="relative aspect-video w-full">

                            <Image src="/Assests/test-vpn/honest-vpn-review.png" fill alt="logo" />
                        </div>
                    </div>
                </div>

            </div>


            {/* Best Plan */}
            <div className="bg-gray-50 p-5 laxptop:mx-48 tablet:mx-[200px] my-10 rounded-[25px]">
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
                                            <RatingStars value={itm.attributes.ratting} />
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
            <FAQ />


        </section>
    );
};

export default TestVpnPage;
