"use client"
import FAQ from "@/components/FAQ";
import Image from "next/image";
import Link from "next/link";
import { FaLinux, FaWindows } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { MdRouter } from "react-icons/md";
import { SiAmazonfiretv, SiIos, SiMacos } from "react-icons/si";
import { useEffect, useState } from "react";
import ReviewCard from "@/components/ReviewCard";
import CustomCircularProgress from "@/components/CustomCircularRatting";

interface VPNData {
    title?: string;
    list?: string[];
    slug?: string[];
    bestPlan?: string[];
}


const vpnData: VPNData =
{
    title: "The Best VPNs for India",
    list: [
        "Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur"
    ],
    slug: [
        "dndlt",
        "cg1",
        "EVPN1",
        "exvpn2"
    ],
    bestPlan: [
        "cg2",
        "exvpn2",
        "pia2",
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
        `${process.env.NEXT_PUBLIC_HOST}/api/reviews?fields[0]=vpn_name&fields[1]=ratting&fields[2]=slug&fields[3]=details&populate[logo]=*&populate[company_link]=*&${filterParams}`,
        reqOptions
    );

    const response = await request.json();

    return response.data;
};

const BestVpnPage = () => {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [vpn, setVpn] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

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
            <div className="flex tablet:px-10 laptop:px-32 py-2 bg-gray-100 ">
                {/* left */}
                <div className="content w-full tablet:w-1/2 max-h-fit ">
                    <h1 className="text-lg laptop:text-2xl font-semibold mb-4">{vpnData.title}</h1>
                    <ul className="mb-5 text-sm laptop:text-base">
                        {
                            vpnData.list?.map((itm: any, idx: number) => (
                                <li className="tick-list-item ml-3" key={idx}>{itm}</li>
                            ))
                        }
                    </ul>
                    <div className="flex gap-5 text-gray-400 pr-3 pl-6 text-lg my-3 items-center">
                        <span className="text-black text-sm">Available on:</span>
                        <FaWindows />
                        <SiMacos />
                        <SiIos />
                        <IoLogoAndroid />
                        <FaLinux />
                        <SiAmazonfiretv />
                        <MdRouter />
                    </div>
                </div>
                {/* right */}
                <div className="hidden w-1/2  tablet:flex items-stretch">
                    <div className=" relative w-full">
                        <Image src="/Assests/best-vpn/map.png" layout="fill" className="object-contain" alt="vpn image" /></div>
                </div>
            </div>

            {/* reviews section */}
            <div className="laptop:px-20">{loading ? "waiting" : <ReviewCard blogs={blogs} />}</div>


            {/* faqs */}
            <FAQ />

            {/* Best Plan */}
            <div className="bg-gray-50 p-5 laptop:mx-36 tablet:mx-4 my-5">
                <div className="flex flex-col items-center gap-3 mb-10">
                    <h1 className="text-xl font-bold">Best Plan</h1>
                    <p>Our best pick for all your VPN needs.</p>
                </div>

                <div className="flex flex-col tablet:flex-row laptop:gap-7 gap-5">

                    {
                        vpn?.map((itm: any, idx: number) => (
                            <Link key={idx} href={itm.attributes.company_link.value} className="group  tablet:w-1/3 w-full border-2 bg-white rounded-md border-white p-5 laptop:px-10 items-center flex-col flex gap-3 hover:border-yellow-600 shadow-[0px_0px_10px_-5px_#1a202c]">
                                <div className="flex flex-row justify-between tablet:flex-col w-full items-center">
                                    {/* image */}
                                    <div className="relative w-2/4 aspect-[2/1] laptop:w-3/4">
                                        <Image src="https://mms.businesswire.com/media/20220621005546/en/1492193/23/ExpressVPN-logo.jpg" layout="fill" className="object-contain" alt="vpn image" />
                                    </div>
                                    {/* ratting */}
                                    <div className="flex flex-col items-center ml-3 gap-2 w-1/4 tablet:w-full justify-center">
                                        <CustomCircularProgress
                                            size="lg"
                                            value={itm.attributes.ratting}
                                            color={`${itm.attributes.ratting >= 9.5 ? "warning" : "primary"}`}
                                            showValueLabel={true}
                                            valueLabel={`${itm.attributes.ratting}`} // Pass the value without the percentage sign
                                            className="customRating"
                                        />
                                        <p className={`text-xs laptop:text-sm  font-bold ${itm.attributes.ratting >= 9.5 ? "text-[#c4841d]" : "text-[#004493]"}`}>
                                            {
                                                itm.attributes.ratting >= 9.5 ? "OUTSTANDING!" : "SUPERB!"
                                            }

                                        </p>
                                    </div>
                                </div>

                                {/* details */}
                                <p className="laptop:px-5 text-center text-sm">{itm.attributes.details}</p>
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
