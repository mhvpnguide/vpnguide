"use client"
import Image from "next/image";
import Card from "./Crads";
import { Tooltip } from "@nextui-org/react";
import { fetchBlogs } from "../pages/ReviewsPage";
import ReviewCard from "./ReviewCard";
import Link from "next/link";
import { useEffect, useState } from "react";



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
  // const blogs = await fetchBlogs();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndSetBlog = async () => {
      try {
        const data = await fetchBlog();
        console.log(data);

        setBlogs(data);
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
      <section className="pt-12 pb-16  flex flex-col laptop:flex-row justify-center items-center laptop:mb-48 laptopl:px-20">
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
            src="/2808108_18383.png"
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

      <section className="wpt-12 pb-16  flex flex-col laptop:flex-row justify-center items-center laptop:mb-48 laptopl:px-20">
        <div className="laptop:hidden flex flex-col p-5 w-full laptop:w-1/2 gap-10 justify-center items-center laptop:justify-start laptop:items-start">
          <div className="home_heading">DETAILED VPN REVIEWS</div>
        </div>
        <div className="flex flex-col laptop:flex-row">
          <div className="flex laptop:flex w-full laptop:w-1/2 justify-center items-center">
            <Image
              src="/2808108_18383.png"
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

      <section>
        <div className="py-10 px-5">
          <div className="text-center">
            <h1 className="font-bold text-3xl mb-4">Top VPN Services for 2024</h1>
            <p className="">The best VPNs for online privacy and security-tested and reviewed by our experts.<br></br> By clicking on the product name in the list below, you can easily get updated prices, technical specs, and additonal info about each product.</p>
            <div className="flex justify-end pr-5">
              <Tooltip
                content={
                  <p className="">
                    It is important to us that you will find the perfect VPN service for your needs - that is the aim and purpose of this site. We aim to be 100% transparent about our reviewing process (more about that in the &apos;How we review&apos; section on this site). We earn money via commissions from the VPN companies featured on this site, which we receive when you click our links and make purchases. This impacts the ranking, score and order in which the services we work with (and their products) are presented. VPN listings on this page DO NOT imply endorsement. We do not feature all of the available VPN services, only those we have reviewed. We strive to keep this site constantly updated, but cannot guarantee the accuracy of the information at all times.
                  </p>
                }
                placement="bottom"
                classNames={{
                  base: [
                    "text-right pr-5",
                  ],
                  content: [
                    "text-sm text-gray-600 w-1/2 text-justify",
                  ],
                }}
              >
                <span className="text-xs font-semibold text-gray-600 underline">
                  ADEVRTISER DISCLOSURE
                </span>
              </Tooltip>
            </div>
          </div>
          <div className="mt-5 ">
            {
              blogs ?
                <ReviewCard blogs={blogs.slice(0, 4)} />
                :
                "waiting"

            }
          </div>
        </div>
      </section>

      <section className="pt-12 pb-16  flex flex-col laptop:flex-row justify-center items-center laptop:mb-48 laptopl:px-20">
        <div className="order-2 tablet-order-1 flex items-center justify-center p-4 tablet:w-full">
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4 w-full laptop:w-4/5  justify-center items-center tablet:px-20 laptop:px-0">
            <Card
              title="What is a VPN Service"
              imageSrc="/2808108_18383.png"
              link="/vpn-explained/what-is-a-vpn-service"
            />
            <Card
              title="How does a VPN worked"
              imageSrc="/2808108_18383.png"
              link="/vpn-explained/how-does-a-vpn-work"
            />
            <Card
              title="What is a VPN used for"
              imageSrc="/2808108_18383.png"
              link="/vpn-explained/what-is-vpn-used-for"
            />
            <Card
              title="Are VPN really worth it"
              imageSrc="/2808108_18383.png"
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
          <Link href="/guides">
            <button className="hidden laptop:flex home_button hoverBtn">
              See All Guides
            </button>
          </Link>
        </div>
      </section>

      <section className="pt-12 pb-16  flex flex-col laptop:flex-row justify-center items-center laptop:mb-48 laptopl:px-20">
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

        <div className="flex items-center justify-center p-4 tablet:w-full">
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4 w-full laptop:w-4/5  justify-center items-center tablet:px-20 laptop:px-0">
            <Card
              title="How to check your Ip Address"
              imageSrc="/2808108_18383.png"
              link="/guides/check-ip-address"
            />
            <Card
              title="How to hide your Ip Address"
              imageSrc="/2808108_18383.png"
              link="/guides/hide-your-ip-address"
            />
            <Card
              title="How to check if your VPN is working"
              imageSrc="/2808108_18383.png"
              link="/guides/is-my-vpn-working"
            />
            <Card
              title="What can someone do with your Ip Address"
              imageSrc="/2808108_18383.png"
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
