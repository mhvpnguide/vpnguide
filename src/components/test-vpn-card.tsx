import { BlogAttributes } from "@/pages/TestVpnPage";
import React, { Suspense } from "react";
import { BsFillLightbulbFill } from "react-icons/bs";
import AccordianComponent from "./AccordianComponent";
import Link from "next/link";
import RatingStars from "./CustomStar";
import CustomCircularProgress from "./CustomCircularRatting";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaLinux, FaWindows } from "react-icons/fa6";
import { SiMacos } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { AiOutlineApple } from "react-icons/ai";
import { MdRouter } from "react-icons/md";
import { CiDollar, CiLock, CiUser } from "react-icons/ci";
import CustomTestVpnProgressbar from "./CustomTestVpnProgressbar";
import { PiShieldWarningThin, PiSpeedometerThin } from "react-icons/pi";
import CustomTestCircularRatting from "./CustomTestCircularRatting";

// const CustomCircularProgress = dynamic(() => import("./CustomCircularRatting"), { ssr: false });


interface Blog {
  attributes: BlogAttributes;
}
interface BannerItem {
  value: string;
}
interface BlogsProps {
  blogs: Blog[];
}
interface Feature {
  value: string;
}


const TestVpnCard: React.FC<BlogsProps> = React.memo(({ blogs }) => {
  console.log("TestVpnCard rendered");

  // Banner color schemes
  const backgroundColors = ["bg-[#E84803]", "bg-[#00A0B4]", "bg-[#22c55e]", "bg-[#eab308]", "bg-[#ec4899]"];
  const lightBackgroundColors = ["bg-[#FF8A00]", "bg-[#00C2DA]", "bg-[#4ade80]", "bg-[#facc15]", "bg-[#c084fc]"];
  const fontColors = ["text-[#FFF]", "text-[#020617]", "text-[#374151]", "text-[#111827]", "text-[#fef9c3]"];

  return (
    <section className="flex flex-col gap-4 py-[4px] laptop:my-[18px]">

      {/* Map over blogs */}
      {blogs.map((blog: Blog, idx: number) => (
        <div key={idx}>

          {/* Review Card */}
          <div className={`shadow-[0px_0px_10px_0px_#d1d5db] rounded-md bg-white hover:shadow-[0px_0px_8px_8px_#00000024] ${idx === 0 ? "border-2 border-[#E84803] rounded-[9px]" : ""}`}>

            {/* Top Banner */}
            <div className={`${backgroundColors[idx % backgroundColors.length]} ${fontColors[idx % fontColors.length]} w-fit rounded-tl-[4px] flex items-center text-xs laptop:text-sm rounded-br-md`}>
              <div className="flex items-center justify-center px-3 py-1">{idx + 1}</div>
              {blog.attributes.top_banner.map((subitm: BannerItem, subidx: number) => (
                <React.Fragment key={subidx}>
                  <div className={`${lightBackgroundColors[idx % lightBackgroundColors.length]} w-fit px-3 font-semibold py-1 h-full ${subidx === 0 ? "rounded-tl-md" : ""} ${blog.attributes.top_banner.length === subidx + 1 ? "rounded-br-md" : ""}`}>{subitm.value}</div>
                  {blog.attributes.top_banner.length !== subidx + 1 && <span className={`${lightBackgroundColors[idx % lightBackgroundColors.length]} py-1`}>|</span>}
                </React.Fragment>
              ))}
            </div>

            <div className="flex flex-col justify-between px-1 laptop:flex-row laptop:px-3">

              {/* vpn image */}
              <Link href={`${blog.attributes.link2}`} target="_blank"
                className="flex flex-col border-gray-400 tablet:border-b laptop:w-[25%] laptop:justify-between laptop:border-none">

                <div
                  className="flex justify-between border-b border-gray-400 tablet:w-full tablet:border-none laptop:justify-center">
                  <div className="flex w-[80%] flex-col">
                    <div className="relative aspect-[2/1] w-[80%] laptop:w-full">
                      <img src={`/Assests/test-vpn/vpn/${blog.attributes.img}`} alt="express" width ="60" height = "60" loading= "lazy" sizes="(max-width: 1024px) 80vw, 100vw" />
                    </div>
                    <div className="flex justify-start pb-3 pl-4 laptop:hidden">
                      <RatingStars value={blog.attributes.ratting} textSize="[25px]" emptyTextSize="[28px]" />
                    </div>
                  </div>
                  <div className="flex w-[30%] flex-col items-center justify-center laptop:hidden">
                    <Suspense fallback={<div>Loading content</div>}>
                      <CustomCircularProgress size="lg" value={blog.attributes.ratting} color={blog.attributes.ratting >= 9.7 ?
                        "warning" :
                        blog.attributes.ratting >= 9.0 ? "danger" :
                          blog.attributes.ratting >= 8.0 ? "primary" :
                            blog.attributes.ratting >= 6.0 ? "success" :
                              "secondary"
                      }
                        showValueLabel={true}
                        valueLabel={`${blog.attributes.ratting}`} // Pass the value without the percentage sign
                        className="customRating manL"
                      />
                    </Suspense>
                  </div>
                </div>

                {/* vpn details */}
                <div className="mb-3 hidden flex-col justify-center tablet:w-1/2 laptop:flex laptop:w-full">
                  <p className="pb-1 font-kantumruyPro text-[14px]">{blog.attributes.details}</p>
                  <p className={`mt-2 font-kaiseiTokumin text-[16px] font-semibold text-blue-600`}>{blog.attributes.offer}</p>
                </div>
              </Link>


              {/* List item */}
              <Link href={`${blog.attributes.link2}`} target="_blank"
                className="flex flex-col laptop:w-[35%] laptop:justify-between">
                <p className={`ml-6 mt-2 pb-3 font-kaiseiTokumin text-sm font-semibold text-blue-600 laptop:hidden`}>
                  {blog.attributes.offer}</p>
                {/* for mobile view */}
                <ul className="mt-2 space-y-2 pl-3 tablet:mb-4 laptop:mt-0 laptop:hidden laptop:pl-0">
                  {
                    blog.attributes.features.slice(0, 4).map((subitm: Feature, subidx: number) => (
                      <li className="tick-list-green-item font-kantumruyPro text-[14px] laptop:text-[16px]" key={subidx}>{subitm.value}
                      </li>
                    ))
                  }
                </ul>
                {/* for laptop view */}
                <ul className="mt-2 hidden space-y-2 pl-3 tablet:mb-4 laptop:mt-0 laptop:block laptop:pl-0">
                  {
                    blog.attributes.features.map((subitm: Feature, subidx: number) => (
                      <li className="tick-list-green-item font-kantumruyPro text-[14px] laptop:text-[16px]" key={subidx}>{subitm.value}
                      </li>
                    ))
                  }
                </ul>

                <div className="ml-6 hidden gap-5 py-2 text-[24px] text-gray-400 tablet:flex">
                  <Suspense fallback={<div>Loading...
                  </div>}>
                    <FaWindows />
                    <SiMacos />
                    <IoLogoAndroid />
                    <AiOutlineApple />
                    <FaLinux />
                    <MdRouter />
                  </Suspense>
                </div>
              </Link>


              {/* progress bar */}
              <Link href={`${blog.attributes.link2}`} target="_blank"
                className="hidden flex-col justify-between pb-[38px] pt-[12px] laptop:flex laptop:w-[15%]">
                <div className="flex gap-2">
                  <CiLock className="text-[26px]" />
                  <div className="w-full">
                    <div className="flex justify-between pb-1 font-kantumruyPro text-[12px] text-gray-700">
                      <span>Privacy</span><span>{blog.attributes.category_rating.privacy}</span>
                    </div>
                    <CustomTestVpnProgressbar value={blog.attributes.category_rating.privacy} size="sm" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <PiShieldWarningThin className="text-[25px]" />
                  <div className="w-full">
                    <div className="flex justify-between pb-1 font-kantumruyPro text-[12px] text-gray-700">
                      <span>Features</span><span>{blog.attributes.category_rating.features}</span>
                    </div>
                    <CustomTestVpnProgressbar value={blog.attributes.category_rating.features} size="sm" />
                  </div>
                </div>
                <div className={`flex gap-2 ${idx <= 2 ? null : "hidden"}`}>
                  <PiSpeedometerThin className="text-[26px]" />
                  <div className="w-full">
                    <div className="flex justify-between pb-1 font-kantumruyPro text-[12px] text-gray-700">
                      <span>Speed</span><span>{blog.attributes.category_rating.speed}</span>
                    </div>
                    <CustomTestVpnProgressbar value={blog.attributes.category_rating.speed} size="sm" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <CiUser className="text-[26px]" />
                  <div className="w-full">
                    <div className="flex justify-between pb-1 font-kantumruyPro text-[12px] text-gray-700"><span>User
                      Score</span><span>{blog.attributes.category_rating.userScore}</span></div>
                    <CustomTestVpnProgressbar value={blog.attributes.category_rating.userScore} size="sm" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <CiDollar className="text-[26px]" />
                  <div className="w-full">
                    <div className="flex justify-between pb-1 font-kantumruyPro text-[12px] text-gray-700"><span>Value for
                      Money</span><span>{blog.attributes.category_rating.valueForMoney}</span></div>
                    <CustomTestVpnProgressbar value={blog.attributes.category_rating.valueForMoney} size="sm" />
                  </div>
                </div>
              </Link>

              {/* bottom */}
              <div className="flex flex-col justify-between pt-3 laptop:w-[18%] laptop:items-center laptop:pb-[28px] laptop:pt-0">

                {/* ratting */}
                <Link href={`${blog.attributes.link2}`} target="_blank"
                  className="hidden w-1/2 flex-col items-center gap-2 laptop:flex">
                  <CustomTestCircularRatting size="lg" value={blog.attributes.ratting} color={blog.attributes.ratting >= 9.7 ? "warning"
                    :
                    blog.attributes.ratting >= 9.0 ? "danger" :
                      blog.attributes.ratting >= 8.0 ? "primary" :
                        blog.attributes.ratting >= 6.0 ? "success" :
                          "secondary"
                  }
                    showValueLabel={true}
                    valueLabel={`${blog.attributes.ratting}`} // Pass the value without the percentage sign
                    className="customRating"
                  />
                </Link>

                <Link href={`${blog.attributes.link2}`} target="_blank" className="hidden justify-center laptop:flex">
                  <RatingStars value={blog.attributes.ratting} textSize="[20px]" emptyTextSize="[22px]" />
                </Link>

                <div className="flex flex-col items-center justify-center gap-2 laptop:px-2">
                  <Link href={`${blog.attributes.link1}`} target="_blank"
                    className="w-full rounded-lg border border-black bg-[#fd5522] px-3 py-1 text-center font-bold text-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#04aa63] laptop:text-[15px] laptopl:text-[20px]">
                    Visit Site {">"}</Link>
                  <Link href={`${blog.attributes.company_link.value}`} target="_blank"
                    className="hidden font-kantumruyPro text-[12px] text-gray-500 underline laptop:block">
                    {blog.attributes.company_link.name}</Link>
                </div>

              </div>

            </div>


            {/* Accordian */}
            <div className="px-1 py-2 laptop:hidden">
              <AccordianComponent blog={blog.attributes.category_rating} idx={idx} />
            </div>
          </div>

          {/* Expert Advice Section */}
          {idx === 0 && (
            <div className="flex items-center justify-center gap-2 px-[15px] pt-4 text-center text-sm laptop:px-0">
              <BsFillLightbulbFill className="inline text-[25px] text-green-600 laptop:text-[16px]" />
              <p className="text-start font-kantumruyPro text-[16px] font-medium">
                Expert Advice: Protecting your information online is more important than ever. Using a VPN is not only a good idea, it&apos;s essential
              </p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
});
// Set the display name for better debugging
TestVpnCard.displayName = "TestVpnCard";

export default TestVpnCard;
