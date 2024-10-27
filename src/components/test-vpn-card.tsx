import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogAttributes } from "@/pages/TestVpnPage";


// Dynamically import the icons
const FaLinux = React.lazy(() => import("react-icons/fa6").then((module) => ({ default: module.FaLinux })));
const FaWindows = React.lazy(() => import("react-icons/fa6").then((module) => ({ default: module.FaWindows })));
const SiMacos = React.lazy(() => import("react-icons/si").then((module) => ({ default: module.SiMacos })));
const IoLogoAndroid = React.lazy(() => import("react-icons/io").then((module) => ({ default: module.IoLogoAndroid })));
const AiOutlineApple = React.lazy(() => import("react-icons/ai").then((module) => ({ default: module.AiOutlineApple })));
const MdRouter = React.lazy(() => import("react-icons/md").then((module) => ({ default: module.MdRouter })));
const BsFillLightbulbFill = React.lazy(() => import("react-icons/bs").then((module) => ({ default: module.BsFillLightbulbFill })));
const CiDollar = React.lazy(() => import("react-icons/ci").then((module) => ({ default: module.CiDollar })));
const CiLock = React.lazy(() => import("react-icons/ci").then((module) => ({ default: module.CiLock })));
const CiUser = React.lazy(() => import("react-icons/ci").then((module) => ({ default: module.CiUser })));
const PiShieldWarningThin = React.lazy(() => import("react-icons/pi").then((module) => ({ default: module.PiShieldWarningThin })));
const PiSpeedometerThin = React.lazy(() => import("react-icons/pi").then((module) => ({ default: module.PiSpeedometerThin })));

// Dynamically import the components
const CustomCircularProgress = React.lazy(() => import("./CustomCircularRatting"));
const RatingStars = React.lazy(() => import("./CustomStar"));
const AccordianComponent = React.lazy(() => import("./AccordianComponent"));
const CustomTestVpnProgressbar = React.lazy(() => import("./CustomTestVpnProgressbar"));
const CustomTestCircularRatting = React.lazy(() => import("./CustomTestCircularRatting"));

interface Blog {
  attributes: BlogAttributes;
}
interface BannerItem {
  value: string;
}
interface Feature {
  value: string;
}
interface BlogsProps {
  blogs: Blog[]; // Define the type of the navdata prop
}

const TestVpnCard: React.FC<BlogsProps> = ({ blogs }) => {

  // this is for top banner
  const backgroundColors = ["bg-[#E84803]", "bg-[#00A0B4]", "bg-[#22c55e]", "bg-[#eab308]", "bg-[#ec4899]"];
  const lightBackgroundColors = ["bg-[#FF8A00]", "bg-[#00C2DA]", "bg-[#4ade80]", "bg-[#facc15]", "bg-[#c084fc]"];
  const fontColors = ["text-[#FFF]", "text-[#020617]", "text-[#374151]", "text-[#111827]", "text-[#fef9c3]"];

  return (
    <section className="flex flex-col gap-4 laptop:my-[18px] py-[4px]">

      {/* review card */}
      {
        blogs.map((blog: Blog, idx: number) => (
          <>
            <div className={`shadow-[0px_0px_10px_0px_#d1d5db] rounded-md bg-white hover:shadow-[0px_0px_8px_8px_#00000024] ${idx == 0 ? "border-2 border-[#E84803] rounded-[9px]" : null}`} key={idx}>

              {/* top banner */}
              <div key={idx} className={`${backgroundColors[idx % backgroundColors.length]} ${fontColors[idx % fontColors.length]} w-fit rounded-tl-[4px] flex items-center text-xs laptop:text-sm rounded-br-md`}>
                <div className="flex justify-center items-center px-3 py-1">{idx + 1}</div>
                {
                  blog.attributes.top_banner.map((subitm: BannerItem, subidx: number) => (
                    <>
                      <div className={`${lightBackgroundColors[idx % lightBackgroundColors.length]}  w-fit px-3 font-semibold py-1 h-full ${subidx == 0 ? "rounded-tl-md" : ""} ${blog.attributes.top_banner.length == subidx + 1 ? "rounded-br-md" : ""}`}>{subitm.value}</div>
                      {
                        blog.attributes.top_banner.length == subidx + 1 ?
                          null
                          :
                          <span className={`${lightBackgroundColors[idx % lightBackgroundColors.length]} py-1`}>|</span>
                      }
                    </>
                  ))
                }

              </div>

              <div className="flex laptop:flex-row flex-col justify-between laptop:px-3 px-1">

                {/* vpn image */}
                <Link href={`${blog.attributes.link2}`} target="_blank" className="flex flex-col tablet:border-b laptop:border-none border-gray-400 laptop:w-[25%] laptop:justify-between">

                  <div className="flex justify-between laptop:justify-center border-b tablet:border-none border-gray-400 tablet:w-full ">
                    <div className="w-[80%] flex flex-col">
                      <div className="relative aspect-[2/1] laptop:w-full w-[80%]">
                        <Image loading="lazy" src={`/Assests/test-vpn/vpn/${blog.attributes.img}`} fill alt="express" />
                      </div >
                      <div className="laptop:hidden flex justify-start pl-4 pb-3">
                        <RatingStars value={blog.attributes.ratting} textSize="[25px]" emptyTextSize="[28px]" />
                      </div>
                    </div>
                    <div className=" laptop:hidden w-[30%] flex justify-center items-center flex-col">
                      <CustomCircularProgress
                        size="lg"
                        value={blog.attributes.ratting}
                        color={
                          blog.attributes.ratting >= 9.7 ? "warning" :
                            blog.attributes.ratting >= 9.0 ? "danger" :
                              blog.attributes.ratting >= 8.0 ? "primary" :
                                blog.attributes.ratting >= 6.0 ? "success" :
                                  "secondary"
                        }
                        showValueLabel={true}
                        valueLabel={`${blog.attributes.ratting}`} // Pass the value without the percentage sign
                        className="customRating manL"
                      />

                    </div>
                  </div>

                  {/* vpn details */}
                  <div className="hidden laptop:flex flex-col justify-center mb-3 tablet:w-1/2 laptop:w-full">
                    <p className="text-[14px] pb-1 font-kantumruyPro">{blog.attributes.details}</p>
                    <p className={`mt-2 text-[16px] font-semibold text-blue-600 font-kaiseiTokumin`}>{blog.attributes.offer}</p>
                  </div>
                </Link>

                {/* List item */}
                <Link href={`${blog.attributes.link2}`} target="_blank" className="laptop:w-[35%]  flex flex-col laptop:justify-between">
                  <p className={`laptop:hidden text-sm font-semibold text-blue-600 ml-6 pb-5 mt-2 ${idx == 0 ? null : 'hidden'}`}>{blog.attributes.offer}</p>
                  {/* for mobile view */}
                  <ul className="laptop:hidden space-y-2 tablet:mb-4 pl-3 laptop:pl-0 mt-2 laptop:mt-0">
                    {
                      blog.attributes.features.slice(0, 4).map((subitm: Feature, subidx: number) => (
                        <li className="tick-list-green-item text-[14px] laptop:text-[16px] font-kantumruyPro" key={subidx}>{subitm.value}</li>
                      ))
                    }
                  </ul>
                  {/* for laptop view */}
                  <ul className="hidden laptop:block space-y-2 tablet:mb-4 pl-3 laptop:pl-0 mt-2 laptop:mt-0">
                    {
                      blog.attributes.features.map((subitm: Feature, subidx: number) => (
                        <li className="tick-list-green-item text-[14px] laptop:text-[16px] font-kantumruyPro" key={subidx}>{subitm.value}</li>
                      ))
                    }
                  </ul>

                  <div className="hidden tablet:flex gap-5 text-gray-400 text-[24px] py-2 ml-6">
                    <Suspense fallback={<div>Loading...</div>}>
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
                <Link href={`${blog.attributes.link2}`} target="_blank" className="hidden laptop:flex laptop:w-[15%]  flex-col pt-[12px] pb-[38px] justify-between">
                  <div className="flex gap-2">
                    <CiLock className="text-[26px]" />
                    <div className="w-full">
                      <div className="font-kantumruyPro text-[12px] text-gray-700 flex justify-between pb-1"><span>Privacy</span><span>{blog.attributes.category_rating.privacy}</span></div>
                      <CustomTestVpnProgressbar
                        value={blog.attributes.category_rating.privacy}
                        size="sm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <PiShieldWarningThin className="text-[25px]" />
                    <div className="w-full">
                      <div className="font-kantumruyPro text-[12px] text-gray-700 flex justify-between pb-1"><span>Features</span><span>{blog.attributes.category_rating.features}</span></div>
                      <CustomTestVpnProgressbar
                        value={blog.attributes.category_rating.features}
                        size="sm"
                      />
                    </div>
                  </div>
                  <div className={`flex gap-2 ${idx <= 2 ? null : "hidden"}`}>
                    <PiSpeedometerThin className="text-[26px]" />
                    <div className="w-full">
                      <div className="font-kantumruyPro text-[12px] text-gray-700 flex justify-between pb-1"><span>Speed</span><span>{blog.attributes.category_rating.speed}</span></div>
                      <CustomTestVpnProgressbar
                        value={blog.attributes.category_rating.speed}
                        size="sm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CiUser className="text-[26px]" />
                    <div className="w-full">
                      <div className="font-kantumruyPro text-[12px] text-gray-700 flex justify-between pb-1"><span>User Score</span><span>{blog.attributes.category_rating.userScore}</span></div>
                      <CustomTestVpnProgressbar
                        value={blog.attributes.category_rating.userScore}
                        size="sm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CiDollar className="text-[26px]" />
                    <div className="w-full">
                      <div className="font-kantumruyPro text-[12px] text-gray-700 flex justify-between pb-1"><span>Value for Money</span><span>{blog.attributes.category_rating.valueForMoney}</span></div>
                      <CustomTestVpnProgressbar
                        value={blog.attributes.category_rating.valueForMoney}
                        size="sm"
                      />
                    </div>
                  </div>
                </Link>


                {/* bottom */}
                <div className="flex flex-col laptop:items-center laptop:w-[18%] laptop:pt-0 pt-3 laptop:pb-[28px] justify-between">

                  {/* ratting */}
                  <Link href={`${blog.attributes.link2}`} target="_blank" className="flex-col items-center gap-2 w-1/2 hidden laptop:flex">
                    <CustomTestCircularRatting
                      size="lg"
                      value={blog.attributes.ratting}
                      color={
                        blog.attributes.ratting >= 9.7 ? "warning" :
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

                  <Link href={`${blog.attributes.link2}`} target="_blank" className="laptop:flex hidden justify-center">
                    <RatingStars value={blog.attributes.ratting} textSize="[20px]" emptyTextSize="[22px]" />
                  </Link>

                  <div className=" flex justify-center items-center flex-col gap-2 laptop:px-2">
                    <Link href={`${blog.attributes.link1}`} target="_blank" className="bg-[#fd5522] laptopl:text-[20px] laptop:text-[15px] text-white font-bold px-3 py-1 rounded-lg text-center hover:bg-[#04aa63] w-full border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">Visit Site {">"}</Link>
                    <Link href={`${blog.attributes.company_link.value}`} target="_blank" className="hidden laptop:block underline text-gray-500 text-[12px] font-kantumruyPro">{blog.attributes.company_link.name}</Link>
                  </div>

                </div>

              </div >


              {/* Accordian */}
              <div className="py-2 laptop:hidden  px-1">
                <AccordianComponent blog={blog.attributes.category_rating} idx={idx} />
              </div>

            </div>

            <div className={`flex justify-center px-[15px] gap-2 laptop:px-0 text-sm text-center items-center ${idx == 0 ? "block" : "hidden"}`}>
              <div>
                <BsFillLightbulbFill className="inline text-green-600 text-[25px] laptop:text-[16px]" />
              </div>
              <p className="text-start font-kantumruyPro font-medium text-[16px]">
                Expert Advice: Protecting your information online is more important than ever. Using a VPN is not only a good idea, it&apos;s essential
              </p>
            </div>
          </>
        ))
      }

    </section>
  )
}

export default TestVpnCard;
