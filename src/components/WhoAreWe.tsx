"use client"
import Image from "next/image";
import Card from "./Crads";
import { Tooltip } from "@nextui-org/react";
import { fetchBlogs } from "../pages/ReviewsPage";
import ReviewCard from "./ReviewCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import TooltipComp from "./TooltipComp";



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

const WhoAreWe = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
    <>
      <section className="pt-12 pb-16  flex flex-col laptop:flex-row justify-center items-center laptop:mb-24 laptopl:px-20">
        <div className="flex flex-col p-5 w-full laptop:w-1/2 gap-10 justify-center items-center laptop:justify-start laptop:items-start">
          <div className="home_heading ">WHO WE ARE</div>
          <div className="hidden laptop:flex home_subheading ">
            We Stand for Internet Privacy, Security & Freedom
          </div>
          <div className="hidden laptop:flex home_headContent">
            Our mission is to enhance the VPN industry and strengthen online security, 
            empowering you to make informed choices about the VPNs you use for a safer, more private, and unrestricted internet experience.
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
            Our mission is to enhance the VPN industry and strengthen online security, 
            empowering you to make informed choices about the VPNs you use for a safer, more private, and unrestricted internet experience.
          </div>
          <Link href="/about">
            <button className="home_button hoverBtn">
              Discover Our Mission
            </button>
          </Link>
        </div>
      </section>

      <section className="wpt-12 pb-16  flex flex-col laptop:flex-row justify-center items-center laptop:mb-24 laptopl:px-20">
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
              All VPNs have been reviewed first-hand using our transparent
              testing process and rating system. By turning complex data into
              easy-to-understand ratings, we help you quickly find the VPN that
              best fits your needs.
            </div>
            <Link href="/how-we-review-vpn">
              <button className="home_button hoverBtn">
                See All VPN Reviews
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="py-10 px-5">
          <div className="text-center">
            <h1 className="font-bold text-3xl mb-4">Top VPN Services for 2024</h1>
            <p className="">The best VPNs for online privacy and security-tested and reviewed by our experts.<br></br> By clicking on the product name in the list below, you can easily get updated prices, technical specs, and additonal info about each product.</p>
            <div className="flex justify-end pr-5">
              <TooltipComp/>
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

      <section className="pt-12 pb-16  flex flex-col laptop:flex-row justify-center items-center laptop:mb-24 laptopl:px-20">
        <div className="order-2 tablet-order-1 flex items-center justify-center p-4 tablet:w-full">
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4 w-full laptop:w-4/5  justify-center items-center tablet:px-20 laptop:px-0">
            <Card
              title="What is a VPN Service"
              imageSrc="/Assests/Homepage/Homepage_Vpn_1.png"
              link="/vpn-explained/what-is-a-vpn-service"
            />
            <Card
              title="How does a VPN worked"
              imageSrc="/Assests/Homepage/Homepage_Vpn_2.png"
              link="/vpn-explained/how-does-a-vpn-work"
            />
            <Card
              title="What is a VPN used for"
              imageSrc="/Assests/Homepage/Homepage_Vpn_3.png"
              link="/vpn-explained/what-is-vpn-used-for"
            />
            <Card
              title="Are VPN really worth it"
              imageSrc="/Assests/Homepage/Homepage_Vpn_4.png"
              link="/vpn-explained/are-vpn-really-worth-it"
            />
          </div>
        </div>

        {/* text for mobile */}
        <div className="order-3 tablet-order-2 flex laptop:hidden laptopl:hidden 4k:hidden flex-col p-5 w-full laptop:w-1/2 gap-10 justify-center items-center laptop:justify-start laptop:items-start">
          <div className="hidden home_subheading ">
            We Stand for Internet Privacy, Security & Freedom
          </div>
          <div className=" home_headContent">
            Not sure where to start? Our experts have put together a set of
            simple, informative guides to help improve your online privacy,
            security, and freedom.
          </div>
          <Link href="/vpn-explained/"><button className="home_button hoverBtn">Read about VPN</button></Link>
        </div>

        <div className="order-1 tablet:order-3 flex flex-col p-5 w-full laptop:w-1/2 gap-10 justify-center items-center laptop:justify-start laptop:items-start">
          <div className="home_heading ">GUIDES & RESOURCES</div>
          <div className=" laptop:flex home_subheading ">Learn about VPNs</div>
          <div className="hidden laptop:flex home_headContent">
            Not sure where to start? Our experts have put together a set of
            simple, informative guides to help improve your online privacy,
            security, and freedom.
          </div>
          <Link href="/vpn-explained">
            <button className="hidden laptop:flex home_button hoverBtn">
              Read about VPNs
            </button>
          </Link>
        </div>
      </section>

      <section className="pt-12 pb-16  flex flex-col laptop:flex-row justify-center items-center laptop:mb-24 laptopl:px-20">
        <div className="flex flex-col p-5 w-full laptop:w-1/2 gap-10 justify-center items-center laptop:justify-start laptop:items-start">
          <div className="home_heading ">GUIDES & RESOURCES</div>
          <div className=" laptop:flex home_subheading ">Learn about VPNs</div>
          <div className="hidden laptop:flex home_headContent">
            Not sure where to start? Our experts have put together a set of
            simple, informative guides to help improve your online privacy,
            security, and freedom.
          </div>
          <Link href="/guides">
            <button className="hidden laptop:flex home_button hoverBtn">
              See All Guides
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-center p-4 tablet:w-full ">
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4 w-full laptop:w-4/5  justify-center items-center tablet:px-20 laptop:px-0">
            <Card
              title="How to check your Ip Address"
              imageSrc="/Assests/Homepage/Homepage_Guides_1.png"
              link="/guides/check-ip-address"
            />
            <Card
              title="How to hide your Ip Address"
              imageSrc="/Assests/Homepage/Homepage_Guides_2.png"
              link="/guides/hide-your-ip-address"
            />
            <Card
              title="How to check if your VPN is working"
              imageSrc="/Assests/Homepage/Homepage_Guides_3.png"
              link="/guides/is-my-vpn-working"
            />
            <Card
              title="What can someone do with your Ip Address"
              imageSrc="/Assests/Homepage/Homepage_Guides_4.png"
              link="/guides/what-can-people-do-with-your-ip-address"
            />
          </div>
        </div>

        {/* text for mobile */}
        <div className="flex laptop:hidden laptopl:hidden 4k:hidden flex-col p-5 w-full laptop:w-1/2 gap-10 justify-center items-center laptop:justify-start laptop:items-start">
          <div className=" home_headContent">
            Not sure where to start? Our experts have put together a set of
            simple, informative guides to help improve your online privacy,
            security, and freedom.
          </div>
          <Link href="/guides">
            <button className="home_button hoverBtn">See All Guides</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe;
