import Image from "next/image";
import Link from "next/link";
import { FaLinux, FaWindows } from "react-icons/fa6";
import { SiMacos } from "react-icons/si";
import { IoLogoAndroid, IoMdSpeedometer } from "react-icons/io";
import { AiOutlineApple, AiOutlineDollarCircle } from "react-icons/ai";
import { MdLockOutline, MdOutlinePrivacyTip, MdRouter } from "react-icons/md";
import CustomCircularProgress from "./CustomCircularRatting";
import CustomProgress from "./CustomProgressBar";
import RatingStars from "./CustomStar";
import { BsFillLightbulbFill } from "react-icons/bs";
import AccordianComponent from "./AccordianComponent";
import { CiDollar, CiLock, CiUser } from "react-icons/ci";
import { PiShieldWarningThin, PiSpeedometerThin, PiUserCircle } from "react-icons/pi";
import { GoShield } from "react-icons/go";
import { IoShieldCheckmarkOutline, IoSpeedometerOutline } from "react-icons/io5";
import CustomTestVpnProgressbar from "./CustomTestVpnProgressbar";
import CustomTestCircularRatting from "./CustomTestCircularRatting";

interface Blog {
  attributes: BlogAttributes;
}
interface BlogAttributes {
  vpn_name: string;
  ratting: number;
  slug: string;
  offer: string;
  details: string;
  img: String;
  features: { value: string }[];
  company_link: { name: string; value: string };
  top_banner: { value: string }[];
  category_rating: {
    privacy: number,
    features: number,
    speed: number,
    userScore: number,
    valueForMoney: number,
  };
}
interface BannerItem {
  value: string;
}
interface Logo {
  data: LogoData;
}
interface LogoData {
  attributes: LogoAttributes;
}
interface LogoAttributes {
  url: string;
}
interface Feature {
  value: string;
}
interface CompanyLink {
  name: string;
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

  // this is for circular progress color
  const circularProgressColor = ["primary", "secondary", "success", "warning", "danger"]

  const getColorByRating = (rating: number) => {
    if (rating >= 9.7 && rating <= 10) return circularProgressColor[0];   // Red
    if (rating >= 9.0 && rating < 9.7) return circularProgressColor[1];    // Orange
    if (rating >= 8.0 && rating < 9.0) return circularProgressColor[2];    // Yellow
    if (rating >= 6.0 && rating < 8.0) return circularProgressColor[3];    // Green
    if (rating >= 0 && rating < 6.0) return circularProgressColor[4];      // Blue
  };


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
                      <div className={`${lightBackgroundColors[idx % lightBackgroundColors.length]}  w-fit px-3 py-1 h-full ${subidx == 0 ? "rounded-tl-md" : ""} ${blog.attributes.top_banner.length == subidx + 1 ? "rounded-br-md" : ""}`}>{subitm.value}</div>
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

              <Link href={`${blog.attributes.company_link.value}`} target="_blank" className="flex laptop:flex-row flex-col justify-between laptop:px-3 px-1">

                {/* vpn image */}
                <div className="flex flex-col tablet:border-b laptop:border-none border-gray-400 laptop:w-[27%] laptop:justify-between">

                  <div className="flex justify-between laptop:justify-center border-b tablet:border-none border-gray-400 tablet:w-full ">
                    <div className="w-[80%] flex flex-col">
                      <div className="relative aspect-[2/1] ">
                        <Image src={`/Assests/test-vpn/vpn/${blog.attributes.img}`} fill alt="express" />
                      </div >
                      <div className="laptop:hidden flex justify-center pb-3">
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
                    <p className={`tablet:mt-2 text-[16px] font-semibold text-blue-600 font-kaiseiTokumin ${idx == 0 ? null : 'hidden'}`}>{blog.attributes.offer}</p>
                  </div>
                </div>

                {/* List item */}
                <div className="laptop:w-[30%] flex flex-col laptop:justify-between">
                  <p className={`laptop:hidden text-sm font-semibold text-blue-600 ml-6 pb-5 ${idx == 0 ? null : 'hidden'}`}>{blog.attributes.offer}</p>
                  <ul className="space-y-2 tablet:mb-4 pl-3 laptop:pl-0">
                    {
                      blog.attributes.features.map((subitm: Feature, subidx: number) => (
                        <li className="tick-list-green-item text-[16px] laptop:text-[14px] font-kantumruyPro" key={subidx}>{subitm.value}</li>
                      ))
                    }
                  </ul>

                  <div className="hidden tablet:flex gap-5 text-gray-400 text-[24px] py-2 ml-6">
                    <FaWindows />
                    <SiMacos />
                    <IoLogoAndroid />
                    <AiOutlineApple />
                    <FaLinux />
                    <MdRouter />
                  </div>
                </div>

                {/* progress bar */}
                <div className="hidden laptop:flex laptop:w-[15%]  flex-col pt-[14px] pb-[38px] justify-between">
                  <div className="flex gap-2">
                    <CiLock className="text-[26px]" />
                    <div className="w-full">
                      <div className="font-kantumruyPro text-[14px] text-gray-700 flex justify-between pb-1"><span>Streaming</span><span>{blog.attributes.category_rating.privacy}</span></div>
                      <CustomTestVpnProgressbar
                        value={blog.attributes.category_rating.privacy}
                        size="sm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <PiShieldWarningThin className="text-[25px]" />
                    <div className="w-full">
                      <div className="font-kantumruyPro text-[14px] text-gray-700 flex justify-between pb-1"><span>Features</span><span>{blog.attributes.category_rating.features}</span></div>
                      <CustomTestVpnProgressbar
                        value={blog.attributes.category_rating.features}
                        size="sm"
                      />
                    </div>
                  </div>
                  <div className={`flex gap-2 ${idx <= 2 ? null : "hidden"}`}>
                    <PiSpeedometerThin className="text-[26px]" />
                    <div className="w-full">
                      <div className="font-kantumruyPro text-[14px] text-gray-700 flex justify-between pb-1"><span>Speed</span><span>{blog.attributes.category_rating.speed}</span></div>
                      <CustomTestVpnProgressbar
                        value={blog.attributes.category_rating.speed}
                        size="sm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CiUser className="text-[26px]" />
                    <div className="w-full">
                      <div className="font-kantumruyPro text-[14px] text-gray-700 flex justify-between pb-1"><span>User Score</span><span>{blog.attributes.category_rating.userScore}</span></div>
                      <CustomTestVpnProgressbar
                        value={blog.attributes.category_rating.userScore}
                        size="sm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CiDollar className="text-[26px]" />
                    <div className="w-full">
                      <div className="font-kantumruyPro text-[14px] text-gray-700 flex justify-between pb-1"><span>Value for Money</span><span>{blog.attributes.category_rating.valueForMoney}</span></div>
                      <CustomTestVpnProgressbar
                        value={blog.attributes.category_rating.valueForMoney}
                        size="sm"
                      />
                    </div>
                  </div>
                </div>

                {/* bottom */}
                <div className="flex flex-col laptop:items-center laptopl:w-[20%] laptop:w-[17%] laptop:pt-0 pt-3 laptop:pb-[28px] justify-between">

                  {/* ratting */}
                  <div className="flex-col items-center gap-2 w-1/2 hidden laptop:flex">
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
                  </div>

                  <div className="laptop:flex hidden justify-center">
                    <RatingStars value={blog.attributes.ratting} textSize="[20px]" emptyTextSize="[22px]" />
                  </div>

                  <div className=" flex justify-center items-center flex-col gap-2 laptop:px-2">
                    <div className="bg-[#fd5522] laptopl:text-[20px] laptop:text-[15px] text-white font-bold px-3 py-1 rounded-lg text-center hover:bg-[#04aa63] w-full border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">Visit Site {">"}</div>
                    <div className="hidden laptop:block underline text-gray-500 text-[12px] font-kantumruyPro">{blog.attributes.company_link.name}</div>
                  </div>

                </div>

              </Link >
              {/* Accordian */}
              <div className="py-2 laptop:hidden  px-1">
                <AccordianComponent blog={blog.attributes.category_rating} idx={idx} />
              </div>

            </div>

            <div className={`flex justify-center px-[15px] gap-2 laptop:px-0 text-sm text-center items-center ${idx == 0 ? "block" : "hidden"}`}>
              <div>
                <BsFillLightbulbFill className="inline text-green-600 text-[25px] laptop:text-[16px]" />
              </div>
              <p className="text-start font-kantumruyPro font-medium">
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
