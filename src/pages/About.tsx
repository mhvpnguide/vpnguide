import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { MdOutlinePhone } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";
import CustomBreadcrumb from "../components/Breadcrumb";
import TopCard from "@/components/TopCard";

const AboutUS = () => {
  return (
    <main className="about-main laptop:px-0 laptop:w-full flex flex-col justify-center items-center">
      <div className="w-full">
        <TopCard title="About Us" />
      </div>
      <div className="w-3/4 ">
        <div className="flex flex-col justify-center items-center">
          <p className="text-left text-lg mb-4 text-grey font-medium">
            Top10VPN is an independent VPN review website founded by{" "}
            <Link href="#" className="text-bluelink hover:underline">
              Antonio Argiolas
            </Link>{" "}
            in 2016. He launched it to improve the VPN industry, after realizing
            the market was flooded with hundreds of unsafe applications and
            review websites that weren’t adequately testing them.
          </p>
          <p className="text-left text-lg mb-4 text-grey font-medium">
            Since then, we’ve conducted over 30,000 hours of in-depth VPN
            testing and shared our findings with our readers. We’ve also
            published original research and investigations on issues affecting
            internet privacy, security, and freedom around the world.
          </p>
          <div className="w-[280px] h-[280px] relative">
            <Image
              src="/2808108_18383.png"
              alt="VPN Banner"
              fill
              className="mt-4 tablet:mt-6 laptop:mt-8"
            />
          </div>
        </div>

        {/* Second part of About Section (What Do we Do?) */}
        <div className="flex flex-col laptop:flex-row  justify-center items-center laptop:px-20 pt-20 ">
          <div className="laptop:flex laptop:w-full laptop:gap-10 tablet:flex tablet:gap-10">
            <div className="tablet:w-2/3">
              <h1 className="text-2xl  font-bold text-start mb-10 w-full">
                What Do We Do?
              </h1>
              <p className="text-left text-lg mb-4 text-grey font-medium">
                Top10VPN.com was established to fight for a{" "}
                <b className="className=" ml-2>
                  better VPN industry and a freer internet.
                </b>
              </p>
              <p className="text-left text-lg mb-4 text-grey font-medium">
                For 8 years, our team of independent experts have used a
                scientific methodology to help consumers make better decisions
                about the VPN services they use.
              </p>
              <p className="text-left text-lg mb-4 text-grey font-medium">
                Unlike many other VPN review websites, we conduct all of our own
                testing and gather original, hands-on data to evaluate every
                VPN’s performance. Most importantly, our ratings are completely
                independent and free from any conflicts of interest.
              </p>
              <p className="text-left text-lg mb-4 text-grey font-medium">
                ecommendations and advice available in multiple languages,
                ensuring they are as useful as possible for readers around the
                world.
              </p>
              <p className="text-left text-lg mb-4 text-grey font-medium">
                We also publish informational resources, investigations, and
                research to draw attention to internet censorship, privacy, and
                security issues that impact consumers today.
              </p>
            </div>

            <ul className="mt-14 laptop:justify-center laptop:items-center  laptop:w-1/3 ">
              <li className="flex justify-center items-center mb-5">
                <b className="flex flex-col justify-center items-center gap-2 text-4xl text-[#eb603d]">
                  62
                  <span className="text-lg text-[#474852] font-medium">
                    VPNs Tested
                  </span>
                </b>
              </li>
              <li className="flex justify-center items-center mb-5">
                <b className="flex flex-col justify-center items-center gap-2 text-4xl text-[#414bd9]">
                  50+
                  <span className="text-lg laptop:text-center text-[#474852] font-medium">
                    Years of experience
                  </span>
                </b>
              </li>
              <li className="flex justify-center items-center mb-5">
                <b className="flex flex-col justify-center items-center gap-2 text-4xl text-[#eb603d]">
                  30,000+
                  <span className="text-lg text-[#474852] font-medium">
                    hours of testing
                  </span>
                </b>
              </li>
            </ul>
          </div>

          <div className="w-[280px] h-[280px] relative laptop:hidden">
            <Image
              src="/2808108_18383.png"
              alt="VPN Banner"
              fill
              className="mt-4 tablet:mt-6 laptop:mt-8"
            />
          </div>
        </div>

        {/* Third Part of About Section (Why VPN Services) */}
        <div className="flex flex-col justify-center items-center laptop:px-20 pt-20 ">
          <div className="laptop:flex laptop:gap-10 laptop:justify-center laptop:items-center">
            <div className="hidden w-[280px] h-[280px] relative laptop:flex laptop:w-1/3 laptop:justify-center laptop:items-center">
              <Image
                src="/2808108_18383.png"
                alt="VPN Banner"
                fill
                className="mt-4 tablet:mt-6 laptop:mt-8"
              />
            </div>

            <div className="laptop:w-2/3">
              <h1 className="text-2xl font-bold text-start mb-10 w-full">
                Why VPN Services?
              </h1>
              <p className="text-left text-lg mb-4 text-grey font-medium">
                The need for a more private, secure, and open Internet has
                driven a quarter of the world’s population to subscribe to a
                VPN.
              </p>
              <p className="text-left text-lg mb-4 text-grey font-medium">
                Sadly, not all VPN software can be trusted, and identifying safe
                applications requires technical knowledge. There are hundreds of
                unsafe VPNs on the market, and dozens of VPN review websites
                that
                <b className="ml-2">haven’t genuinely tested them.</b>
              </p>
              <p className="text-left text-lg mb-4 text-grey font-medium">
                When looking for trustworthy VPN information, we found that many
                VPN review websites are either biased due to their links with
                VPN providers, or lacked experience with VPN services, relying
                on flawed testing methods.
              </p>
              <p className="text-left text-lg mb-4 text-grey font-medium">
                For many VPN users, it can be difficult to know which VPN
                recommendations they can trust.
              </p>
              <p className="text-left text-lg mb-4 text-grey font-medium">
                Top10VPN was created to provide transparent, expert, and
                data-driven VPN recommendations that are unaffected by financial
                incentives.
              </p>
              <p className="text-left text-lg mb-4 text-grey font-medium">
                By sharing our advice, research, and recommendations, our goal
                is to
                <b className="ml-2">make the VPN industry better</b>, so
                consumers worldwide can be in more control of their lives
                online.
              </p>
            </div>
          </div>

          <div className="w-[280px] h-[280px] relative laptop:hidden">
            <Image
              src="/2808108_18383.png"
              alt="VPN Banner"
              fill
              className="mt-4 tablet:mt-6 laptop:mt-8"
            />
          </div>
        </div>

        {/* Fourth Section of About Section (Our Review Process) */}
        <div className="flex flex-col justify-start laptop:px-20 pt-20 ">
          <div className="laptop:flex laptop:gap-10 laptop:justify-center laptop:items-center">
            <div className="laptop:flex laptop:flex-col laptop:w-2/3">
              <h1 className="text-2xl font-bold text-start mb-10 w-full">
                Our Review Process
              </h1>
              <p className="text-left text-lg mb-4 text-grey font-medium">
                Unlike most VPN review websites, we conduct our own original
                testing and research to evaluate a VPN’s performance. Every
                recommendation you see is the result of a{" "}
                <Link href="#" className="text-bluelink hover:underline">
                  rigorous testing process
                </Link>
                consisting of <b>hours of use at the hands of our experts.</b>
              </p>
              <p className="text-left text-lg mb-4 text-grey font-medium">
                We are independently-owned and entirely separate from any VPN
                service provider. There’s no potential for conflicts of
                interest, and we never bow to pressure from some VPN companies
                to alter our reviews.
              </p>
              <p className="text-left text-lg mb-4 text-grey font-medium">
                In the interest of total impartiality, we also purchase our own
                subscriptions to every VPN we test. We{" "}
                <Link href="#" className="text-bluelink hover:underline">
                  don’t accept payment
                </Link>{" "}
                to conduct a VPN review or provide positive coverage, and VPN
                providers will never have a say in how we rate their products.
              </p>
              <p className="text-left text-lg mb-4 text-grey font-medium">
                It’s simple: our readers are our first priority. We dedicate all
                of our time and resources towards creating objective,
                independent, and unbiased advice for you.
              </p>

              <button className="px-2 py-3 font-medium w-fit btn-readMore">
                Read More
              </button>
            </div>
            <div className="w-[280px] h-[280px] relative laptop:flex tablet:hidden">
              <Image
                src="/2808108_18383.png"
                alt="VPN Banner"
                fill
                className="mt-4 tablet:mt-6 laptop:mt-8"
              />
            </div>
          </div>

          <div className="hidden tablet:flex tablet:justify-center tablet:items-center tablet:w-full">
            <div className="w-[280px] h-[280px] relative laptop:hidden ">
              <Image
                src="/2808108_18383.png"
                alt="VPN Banner"
                fill
                className="mt-4 tablet:mt-6 laptop:mt-8"
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-24 flex flex-col gap-8 laptop:flex laptop:flex-row laptop:justify-center laptop:items-center laptop:px-20">
          <div className="laptop:w-1/2">
            <ContactForm />
          </div>
          <div className="laptop:w-1/2">
            <h3 className="font-bold text-xl mb-8">
              Don't like filling out forms?Here are other ways to connect with
              us:
            </h3>
            <ul className="mb-8">
              <li className="flex text-lg mb-6 gap-3 justify-start items-center">
                <MdOutlinePhone className="text-xl" />
                <span>+44(0)2034680724</span>
              </li>
              <li className="flex text-lg mb-6 gap-3 justify-start items-center">
                <SlEnvolope className="text-xl" />
                <span>hello@top10vpn.com</span>
              </li>
              <li className="flex text-lg mb-6 gap-3 justify-start items-center">
                <MdOutlineLocationOn className="text-5xl laptop:text-2xl" />
                <span>
                  Fourth Floor 33 Great Sutton Street London EC1V 0DX UK
                </span>
              </li>
            </ul>
            <div>
              <p className="mb-3">
                <b>Company Information</b>
              </p>
              <div>
                Top10VPN is part of{" "}
                <Link href="#" className="text-bluelink hover:underline">
                  PrivacyCo Ltd.
                </Link>
                , registered in England & Wales with Company No. 09435976 and
                VAT Registration No. 211062276.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUS;
