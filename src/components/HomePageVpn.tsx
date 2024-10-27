"use client"
import Link from 'next/link';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react'

import TooltipComp from "./TooltipComp";

const ReviewCard = dynamic(() => import("./ReviewCard"), { ssr: false });

const fetchBlog = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
    cache: 'no-store' as RequestCache,
  };
  const request = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/reviews?fields[0]=vpn_name&fields[1]=ratting&fields[2]=slug&fields[3]=offer&fields[4]=details&populate[features]=*&populate[logo]=*&populate[company_link]=*&populate[top_banner]=*`, reqOptions);
  const response = await request.json();
  return response.data;
};


const HomePageVpn = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchAndSetBlog = async () => {
      try {
        const data = await fetchBlog();
        // console.log(data);

        const sortedBlogs = data.sort((a: any, b: any) => b.attributes.ratting - a.attributes.ratting);

        setBlogs(sortedBlogs);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetBlog();
  }, []);

  return (
    <section>
      <div className="py-10 px-5">
        <div className="text-center">
          <h1 className="font-bold text-3xl mb-4">Top VPN Services for 2024</h1>
          <p className="">The best VPNs for online privacy and security-tested and reviewed by our experts.<br></br> By clicking on the product name in the list below, you can easily get updated prices, technical specs, and additonal info about each product.</p>
          <div className="flex justify-end pr-5">
            <TooltipComp />
          </div>
        </div>
        <div className="mt-5 ">
          {
            blogs ?
              <ReviewCard blogs={blogs.slice(0, 5)} />
              :
              "waiting"

          }
        </div>
        <div className="flex justify-center items-center">
          <Link href="/reviews" className="home_button hoverBtn mx-auto">See all reviews</Link>
        </div>
      </div>
    </section>
  )
}

export default HomePageVpn