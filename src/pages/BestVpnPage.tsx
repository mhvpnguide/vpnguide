"use client"
import FAQ from "@/components/FAQ";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CustomCircularProgress from "@/components/CustomCircularRatting";
import BestVpnCard from "@/components/best-vpn-card";
import { Tooltip } from "@nextui-org/react";
import { FaCrown } from "react-icons/fa6";
import TooltipComp from "@/components/TooltipComp";

interface VPNData {
    title?: string;
    updatedOn?: string;
    list?: string[];
    slug?: string[];
    bestPlan?: string[];
}


const vpnData: VPNData =
{
    title: "The Best VPNs for India",
    list: [
        "Lorem ipsum dolor sit <b>amet,</b> consectetur",
        "Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor <b>sit amet,</b> consectetur"
    ],
    updatedOn: '01-September-2024',
    slug: [
        "cyberghost",
        "dndlt",
        "expressvpn",
        "hideme"
    ],
    bestPlan: [
        "ipvanish",
        "hidemyass",
        "nordvpn",
    ]
}


export const fetchBlogs = async (vpnData: VPNData) => {
    // Construct filters from vpnData.bestPlan
    const filterParams = vpnData.slug?.map((plan, index) => `filters[slug][$in][${index}]=${plan}`).join('&');

    const reqOptions = {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        cache: "no-store" as RequestCache,

    };

    // Construct the URL with dynamic filters
    const request = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/reviews?fields[0]=vpn_name&fields[1]=ratting&fields[2]=slug&fields[3]=offer&fields[4]=details&populate[features]=*&populate[logo]=*&populate[company_link]=*&populate[top_banner]=*&${filterParams}`,
        reqOptions
    );

    const response = await request.json();

    return response.data;
};
export const fetchvpn = async (vpnData: VPNData) => {
    // Construct filters from vpnData.bestPlan
    const filterParams = vpnData.bestPlan?.map((plan, index) => `filters[slug][$in][${index}]=${plan}`).join('&');

    const reqOptions = {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        cache: "no-store" as RequestCache,
    };

    // Construct the URL with dynamic filters
    const request = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/reviews?fields[0]=vpn_name&fields[1]=ratting&fields[2]=slug&fields[3]=offer&populate[logo]=*&populate[company_link]=*&${filterParams}`,
        reqOptions
    );

    const response = await request.json();

    return response.data;
};

const BestVpnPage = () => {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [vpn, setVpn] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [ttOpen, setTTOpen] = useState(false);


    useEffect(() => {
        const fetchAndSetBlogs = async () => {
            try {
                const data = await fetchBlogs(vpnData);
                console.log(data);

                setBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };
        const fetchAndSetBestVPN = async () => {
            try {
                const data = await fetchvpn(vpnData);

                setVpn(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAndSetBlogs();
        fetchAndSetBestVPN();
    }, []);
    return (
        <section>
            {/* top section */}
            <div className="flex tablet:px-10 laptop:px-32 py-5 bg-[#FF0000]">
                {/* left */}
                <div className="content w-full tablet:w-1/2 max-h-fit ">
                    <h1 className="text-lg laptop:text-4xl font-semibold mb-4 mt-5 text-blue-950">{vpnData.title}</h1>
                    <ul className="ml-7 mb-5 text-sm laptop:text-base">
                        {
                            vpnData.list?.map((itm: any, idx: number) => (
                                <li className="tick-list-item ml-3" key={idx} dangerouslySetInnerHTML={{
                                    __html: itm,
                                }}></li>
                            ))
                        }
                    </ul>

                    {/* <div className="flex gap-5 text-gray-400 pr-3 pl-6 text-lg my-3 items-center">
                        <span className="text-black text-sm">Available on:</span>
                        <FaWindows />
                        <SiMacos />
                        <SiIos />
                        <IoLogoAndroid />
                        <FaLinux />
                        <SiAmazonfiretv />
                        <MdRouter />
                    </div> */}
                </div>
                {/* right */}
                <div className="hidden w-1/2  tablet:flex items-stretch">
                    <div className=" relative w-full">
                        <Image src="/Assests/best-vpn/India VPN.png" layout="fill" className="object-contain" alt="vpn image" /></div>
                </div>
            </div>


            <div className="flex justify-between w-full px-3 tablet:px-9 laptop:px-48 bg-[#FFFF00]">
                <span className="font-semibold">Updated on: {vpnData.updatedOn}</span>
                <div className="flex justify-end pb-4">
                    <TooltipComp/>
                </div>
            </div>

            {/* reviews section */}
            <div className="laptop:px-[11vw] pt-10 bg-[#0000FF]">{loading ? "waiting" : <BestVpnCard blogs={blogs} />}</div>

            <section className="laptop:mx-20 pt-12 pb-16  flex flex-col laptop:flex-row justify-center items-center laptop:mb-24 laptopl:px-20">
                <div className="flex flex-col p-5 w-full laptop:w-1/2 gap-10 justify-center items-center laptop:justify-start laptop:items-start">
                    <div className="home_heading ">WHO WE ARE</div>
                    <div className="hidden laptop:flex home_subheading ">
                        We Stand for Internet Privacy, Security & Freedom
                    </div>
                    <div className="hidden laptop:flex home_headContent">
                        Our goal is to improve the VPN industry and help you make better
                        decisions about the VPNs you use for a more private, secure, and
                        open internet experience.
                    </div>
                    <Link href="/about">
                        <button className="hidden laptop:flex home_button hoverBtn">
                            Discover Our Mission
                        </button>
                    </Link>
                </div>

                <div className=" flex laptop:flex w-full laptop:w-1/2 justify-center items-center">
                    <Image
                        src="/Assests/Homepage/Homepage_Who_We_Are.png"
                        alt="VPN Banner"
                        width={300}
                        height={300}
                        className="mt-4 sm:mt-6 md:mt-8"
                    />
                </div>

                {/* text for mobile */}
                <div className="flex laptop:hidden laptopl:hidden 4k:hidden flex-col p-5 w-full laptop:w-1/2 gap-10 justify-center items-center laptop:justify-start laptop:items-start">
                    <div className="home_subheading ">
                        We Stand for Internet Privacy, Security & Freedom
                    </div>
                    <div className=" home_headContent">
                        Our goal is to improve the VPN industry and help you make better
                        decisions about the VPNs you use for a more private, secure, and
                        open internet experience.
                    </div>
                    <Link href="/about">
                        <button className="home_button hoverBtn">
                            Discover Our Mission
                        </button>
                    </Link>
                </div>
            </section>

            <section className="laptop:mx-20 pb-16  flex flex-col laptop:flex-row justify-center items-center laptop:mb-24 laptopl:px-20">
                <div className="laptop:hidden flex flex-col p-5 w-full laptop:w-1/2 gap-10 justify-center items-center laptop:justify-start laptop:items-start">
                    <div className="home_heading">DETAILED VPN REVIEWS</div>
                </div>
                <div className="flex flex-col laptop:flex-row">
                    <div className="flex laptop:flex w-full laptop:w-1/2 justify-center items-center">
                        <Image
                            src="/Assests/Homepage/Homepage_How_We_Review.png"
                            alt="VPN Banner"
                            width={300}
                            height={300}
                            className="mt-4 sm:mt-6 md:mt-8"
                        />
                    </div>

                    {/* text for mobile */}
                    <div className="flex flex-col p-5 w-full laptop:w-1/2 gap-10 justify-center items-center laptop:justify-start laptop:items-start">
                        <div className="hidden laptop:flex home_heading">
                            DETAILED VPN REVIEWS
                        </div>
                        <div className="home_subheading ">
                            Honest VPN Reviews Based On Real Testing
                        </div>
                        <div className="home_headContent">
                            All 62 VPNs have been reviewed first-hand using our transparent
                            testing process and rating system. By turning complex data into
                            easy-to-understand ratings, we help you quickly find the VPN that
                            best fits your needs.
                        </div>
                        <Link href="/reviews">
                            <button className="home_button hoverBtn">
                                See All VPN Reviews
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* faqs */}
            <FAQ />

            {/* Best Plan */}
            <div className="bg-gray-50 p-5 laptop:mx-48 tablet:mx-4 my-5">
                <div className="flex flex-col items-center gap-3 mb-10">
                    <h1 className="text-xl font-bold">Best Plan</h1>
                    <p>Our best pick for all your VPN needs.</p>
                </div>

                <div className="flex flex-col tablet:flex-row gap-7">

                    {
                        vpn?.map((itm: any, idx: number) => (
                            <Link key={idx} href={itm.attributes.company_link.value} className={`group relative tablet:w-1/3 w-full border-2 bg-white rounded-md border-white p-5  items-center flex-col flex gap-10 hover:border-yellow-600 shadow-[0px_0px_10px_-5px_#1a202c] laptop:px-10 ${idx == 1 ? "border-yellow-600" : "laptop:scale-90 scale-95"}`}>

                                {idx == 1 && <div className="absolute top-[-25px] left-[50%] transform -translate-x-1/2 bg-white text-blue-600 border border-blue-600 rounded-full px-4 py-1 flex items-center justify-center flex-col shadow-lg">
                                    <FaCrown className="text-xl" />
                                    <span className="font-semibold text-xs">BEST</span>
                                </div>}

                                <div className="flex flex-row justify-between tablet:flex-col w-full items-center">
                                    {/* image */}
                                    <div className="relative w-2/4 aspect-[2/1] laptop:w-3/4">
                                        <Image src={`${process.env.NEXT_PUBLIC_HOST}${itm.attributes.logo.data.attributes.url}`} layout="fill" className="object-contain" alt="vpn image" />
                                    </div>

                                    {/* ratting */}
                                    <div className="flex flex-col items-center ml-3 gap-2 w-1/4 tablet:w-full justify-center">
                                        <CustomCircularProgress
                                            size="lg"
                                            value={itm.attributes.ratting}
                                            color={
                                                itm.attributes.ratting >= 9.7 ? "warning" :
                                                    itm.attributes.ratting >= 9.0 ? "danger" :
                                                        itm.attributes.ratting >= 8.0 ? "primary" :
                                                            itm.attributes.ratting >= 6.0 ? "success" :
                                                                "secondary"
                                            }
                                            showValueLabel={true}
                                            valueLabel={`${itm.attributes.ratting}`} // Pass the value without the percentage sign
                                            className="customRating"
                                        />
                                        <p className={`text-xs laptop:text-sm  font-bold ${itm.attributes.ratting >= 9.5 ? "text-[#c4841d]" : "text-[#004493]"}`}>
                                            {
                                                itm.attributes.ratting >= 9.7 ? "OUTSTANDING!" :
                                                    itm.attributes.ratting >= 9.0 ? "SUPERB!" :
                                                        itm.attributes.ratting >= 8.0 ? "GREAT!" :
                                                            itm.attributes.ratting >= 6.0 ? "GOOD!" :
                                                                "BLANK!"
                                            }

                                        </p>
                                    </div>
                                </div>

                                {/* details */}
                                <p className="laptop:px-5 text-center text-sm font-bold text-blue-600">{itm.attributes.offer}</p>
                                <Link href={itm.attributes.company_link.value} className="bg-red-700 hover:bg-red-800 text-white font-bold px-3 py-1 rounded-lg mt-auto">Buy Now</Link>
                            </Link>
                        ))
                    }



                </div>
            </div>
        </section>
    );
};

export default BestVpnPage;
