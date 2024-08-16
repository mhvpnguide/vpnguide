"use client"
import { SearchIcon } from "../components/SearchIcon";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import CustomCircularProgress from "@/components/CustomCircularRatting";
import Link from "next/link";
import { IoLogoAndroid } from "react-icons/io";
import { FaLinux, FaWindows } from "react-icons/fa";
import { MdRouter } from "react-icons/md";
import { SiMacos } from "react-icons/si";
import config from "../../config.js"
import CustomBreadcrumb from "../components/Breadcrumb";
import ReviewCard from "../components/ReviewCard";
import { useEffect, useState } from "react";


export const fetchBlogs = async () => {

  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    },
    cache: "no-store" as RequestCache,

  }
  const request = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/reviews?fields[0]=vpn_name&fields[1]=ratting&fields[2]=slug&fields[3]=offer&fields[4]=details&populate[features]=*&populate[logo]=*&populate[company_link]=*&populate[top_banner]=*`, reqOptions);
  const response = await request.json();


  return response.data;
}


const ReviewsPage = () => {
  //  const blogs = await fetchBlogs();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndSetBlogs = async () => {
      try {
        const data = await fetchBlogs();
        console.log(data);

        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetBlogs();
  }, []);

  return (
    <div className="bg-gray-100">

      <div className="about-upper-part pt-5 pb-10 flex ">
        <CustomBreadcrumb />
      </div>

      {/* top */}
      <div className="px-3 flex items-center flex-col pt-14 pb-10 mb-3 bg-red-100 ">
        <p className="text-3xl font-bold pb-6">All VPN Reviews</p>
        <p className="text-xl mb-4 text-center">Check out all our VPN reviews blow or use the filters to find the VPN best suits you needs. Of the 65 reviewed, found 35 in Spaninsh.</p>
        <div className="w-full tablet:w-1/2 laptop:w-2/5 laptopl:w-96">
          <Input
            classNames={{
              base: "max-w-full h-12",
              mainWrapper: "h-full",
              input: "text-lg",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-full px-4 py-3 bg-white",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </div>
      </div>

      {/* review section */}
      {
        loading ?
          "waiting"
          :
          <ReviewCard blogs={blogs} />

      }

    </div>
  );
}


export default ReviewsPage;