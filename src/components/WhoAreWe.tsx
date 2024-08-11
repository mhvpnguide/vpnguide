import Image from "next/image";
import Card from "./Crads";
import Link from "next/link";

const WhoAreWe = () => {
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

      <section className="pt-12 pb-16  flex flex-col laptop:flex-row justify-center items-center laptop:mb-48 laptopl:px-20">
        <div className="order-2 tablet-order-1 flex items-center justify-center p-4 tablet:w-full">
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4 w-full laptop:w-4/5  justify-center items-center tablet:px-20 laptop:px-0">
            <Card
              title="VPN Features & Troubleshooting"
              imageSrc="/2808108_18383.png"
              link="home"
            />
            <Card
              title="VPN Features & Troubleshooting"
              imageSrc="/2808108_18383.png"
              link="about"
            />
            <Card
              title="VPN Features & Troubleshooting"
              imageSrc="/2808108_18383.png"
              link="title"
            />
            <Card
              title="VPN Features & Troubleshooting"
              imageSrc="/2808108_18383.png"
              link="example"
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
          <Link href="/guides"><button className="home_button hoverBtn">See all guides</button></Link>
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
              title="VPN Features & Troubleshooting"
              imageSrc="/2808108_18383.png"
              link="home"
            />
            <Card
              title="VPN Features & Troubleshooting"
              imageSrc="/2808108_18383.png"
              link="about"
            />
            <Card
              title="VPN Features & Troubleshooting"
              imageSrc="/2808108_18383.png"
              link="title"
            />
            <Card
              title="VPN Features & Troubleshooting"
              imageSrc="/2808108_18383.png"
              link="example"
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
