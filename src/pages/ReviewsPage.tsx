"use client";
import { SearchIcon } from "../components/SearchIcon";
import { Input, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import CustomCircularProgress from "@/components/CustomCircularRatting";
import Link from "next/link";
import { IoLogoAndroid } from "react-icons/io";
import { FaLinux, FaWindows } from "react-icons/fa";
import { MdRouter } from "react-icons/md";
import { SiMacos } from "react-icons/si";
import config from "../../config.js";
import CustomBreadcrumb from "../components/Breadcrumb";
import ReviewCard from "../components/ReviewCard";
import { useEffect, useState } from "react";

export const fetchBlogs = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
    next: {
      revalidate: 180, // Revalidate after 3 minutes (180 seconds)
    },
    cache: "force-cache" as RequestCache,
    // cache: "no-store" as RequestCache,
  };
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/reviews?fields[0]=vpn_name&fields[1]=ratting&fields[2]=slug&fields[3]=offer&fields[4]=details&populate[features]=*&populate[logo]=*&populate[company_link]=*&populate[top_banner]=*`,
    reqOptions
  );
  const response = await request.json();

  return response.data;
};

const ReviewsPage = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndSetBlogs = async () => {
      try {
        const data = await fetchBlogs();

        const sortedBlogs = data.sort(
          (a: any, b: any) => b.attributes.ratting - a.attributes.ratting
        );

        setBlogs(sortedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetBlogs();
  }, [blogs]);

  return (
    <>
      <div className="bg-gray-100">
        <div className="bg-blue-100">
          <div className="mb-2 tablet:pt-[40px] laptop:pl-[50px] px-3">
            <CustomBreadcrumb />
          </div>

          <div className="px-3 flex items-center flex-col mb-3 ">
            <p className="text-3xl font-bold pb-6">All VPN Reviews</p>
            <p className="text-xl mb-4 text-center">
              Check out all our VPN reviews blow or use the filters to find the
              VPN best suits you needs. Of the 65 reviewed, found 35 in
              Spaninsh.
            </p>
            <div className="w-full tablet:w-1/2 laptop:w-2/5 laptopl:w-96">
              <Input
                classNames={{
                  base: "max-w-full h-12",
                  mainWrapper: "h-full",
                  input: "text-lg",
                  inputWrapper:
                    "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-full px-4 py-3 bg-white",
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<SearchIcon size={18} />}
                type="search"
              />
            </div>
          </div>
          <div className="flex justify-end pb-4 pr-10">
            <Tooltip
              content={
                <p className="">
                  It is important to us that you will find the perfect VPN
                  service for your needs - that is the aim and purpose of this
                  site. We aim to be 100% transparent about our reviewing
                  process (more about that in the &apos;How we review&apos;
                  section on this site). We earn money via commissions from the
                  VPN companies featured on this site, which we receive when you
                  click our links and make purchases. This impacts the ranking,
                  score and order in which the services we work with (and their
                  products) are presented. VPN listings on this page DO NOT
                  imply endorsement. We do not feature all of the available VPN
                  services, only those we have reviewed. We strive to keep this
                  site constantly updated, but cannot guarantee the accuracy of
                  the information at all times.
                </p>
              }
              placement="bottom"
              classNames={{
                base: ["text-right pr-5"],
                content: [
                  "text-sm text-gray-600 w-1/2 text-justify bg-[#4B5563] text-white p-6",
                ],
              }}
            >
              <span className="text-xs font-semibold text-gray-600 underline">
                ADEVRTISER DISCLOSURE
              </span>
            </Tooltip>
          </div>
        </div>

        {/* review section */}
        <div className="laptop:px-[10vw]">{loading ? "waiting" : <ReviewCard blogs={blogs} />}</div>
      </div>
      <section className="pt-12  flex flex-col laptop:flex-row justify-center items-center  laptopl:px-20">
        <div className="flex flex-col p-5 w-full laptop:w-1/2 gap-10 justify-center items-center laptop:justify-start laptop:items-start">
          <div className="home_heading ">DETAILED VPN REVIEWS</div>
          <div className="hidden laptop:flex home_subheading ">
            Honest VPN Reviews Based on Real Testing
          </div>
          <div className="hidden laptop:flex home_headContent">
            All 65 VPNs have been reviewed first-hand using our transparent
            testing process and rating system.By turning complex data into
            easy-to-understand ratings, we help you quickly find the VPN that
            best fits your needs.
          </div>
          <Link href="/about/how-we-review-vpn">
            <button className="hidden laptop:flex home_button hoverBtn">
              Test VPN
            </button>
          </Link>
        </div>

        <div className=" flex laptop:flex w-full laptop:w-1/2 justify-center items-center">
          <Image
            src="/Assests/Homepage/Homeimg.png"
            alt="VPN Banner"
            width={300}
            height={300}
            className="mt-4 sm:mt-6 md:mt-8"
          />
        </div>

        {/* text for mobile */}
        <div className="flex laptop:hidden laptopl:hidden 4k:hidden flex-col p-5 w-full laptop:w-1/2 gap-10 justify-center items-center laptop:justify-start laptop:items-start">
          <div className="home_subheading ">
            Honest VPN Reviews Based on Real Testing
          </div>
          <div className=" home_headContent">
            All 65 VPNs have been reviewed first-hand using our transparent
            testing process and rating system.By turning complex data into
            easy-to-understand ratings, we help you quickly find the VPN that
            best fits your needs.
          </div>
          <Link href="/about/how-we-review-vpn">
            <button className="home_button hoverBtn">Test VPN</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ReviewsPage;
