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
import { SlCalender } from "react-icons/sl";

interface VPNData {
    title?: string;
    updatedOn?: string;
    list?: string[];
    slug?: string[];
    bestPlan?: string[];
}


const vpnData: VPNData =
{
    title: "The Best VPNs for India in 2024",
    list: [
        "<b>Fast servers</b> for uninterrupted browsing and streaming in India",
        "<b>Change your IP address location</b> & use the internet privately & securely",
        "Connect <b>multiple devices</b> with a single VPN account simultaneously",
        "<b>Free trials</b>, <b>Discounts</b> and <b>Refund Policies</b> for all VPNs risk-free"
    ],
    updatedOn: '12-October-2024',
    slug: [
        "cyberghost",
        "privateinternetaccess",
        "expressvpn",
        "surfshark",
        "purevpn"
    ],
    bestPlan: [
        "privateinternetaccess",
        "cyberghost",
        "expressvpn",
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

    const responseData: Array<{ attributes: { slug: string } }> = response.data;

    // Sort the response data based on the order of vpnData.bestPlan
    const sortedData = (vpnData.slug ?? []).map(plan => responseData.find(item => item.attributes.slug === plan)).filter((item): item is { attributes: { slug: string } } => item !== undefined); // Filter out undefined

    return sortedData;

    // return response.data;
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
    const responseData: Array<{ attributes: { slug: string } }> = response.data;

    // Sort the response data based on the order of vpnData.bestPlan
    const sortedData = (vpnData.bestPlan ?? []).map(plan => responseData.find(item => item.attributes.slug === plan)).filter((item): item is { attributes: { slug: string } } => item !== undefined); // Filter out undefined

    return sortedData;
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
            <div className="flex tablet:px-10 laptop:px-32 py-5 bg-[#F9F6EE]">
                {/* left */}
                <div className="tablet:ml-7 content w-full tablet:w-1/2 max-h-fit ">
                    <h1 className="ml-2 text-lg laptop:text-4xl font-semibold mb-5 mt-10 text-blue-950">{vpnData.title}</h1>
                    <ul className=" mb-8 text-sm laptop:text-base">
                        {
                            vpnData.list?.map((itm: any, idx: number) => (
                                <li className="tick-list-item ml-3 mb-[8px]" key={idx} dangerouslySetInnerHTML={{
                                    __html: itm,
                                }}></li>
                            ))
                        }
                    </ul>
                </div>
                {/* right */}
                <div className="hidden w-1/2  tablet:flex items-stretch">
                    <div className=" relative w-full h-64">
                        <Image src="/Assests/best-vpn/new_hero_image.svg" layout="fill" className="object-contain" alt="vpn image" /></div>
                </div>
            </div>


            <div className="flex justify-between  items-center w-full px-3 tablet:px-9 laptop:px-48 bg-[#FAF9F6]">
                <span className="items-center tablet:items-start text-[14px] flex flex-col tablet:flex-row tablet:gap-2"><span><SlCalender className="inline mr-1" />Updated on:</span>{vpnData.updatedOn}</span>
                <div className="flex justify-end pb-4">
                    <TooltipComp />
                </div>
            </div>

            {/* reviews section */}
            <div className="laptop:px-[11vw] bg-[#F9F6EE]">{loading ? "waiting" : <BestVpnCard blogs={blogs} />}</div>

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
                                <Link href={itm.attributes.company_link.value} className="bg-[#fd5522] hover:bg-[#04aa63] text-white font-bold px-3 py-1 rounded-lg mt-auto">Buy Now</Link>
                            </Link>
                        ))
                    }



                </div>
            </div>

            {/* faqs */}
            <FAQ />
        </section>
    );
};

export default BestVpnPage;
