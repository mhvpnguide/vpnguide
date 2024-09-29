import Image from "next/image";
import Link from "next/link";
import { FaLinux, FaWindows } from "react-icons/fa6";
import { SiMacos } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { AiOutlineApple } from 'react-icons/ai';
import { MdOutlinePrivacyTip, MdRouter } from "react-icons/md";
import CustomCircularProgress from "./CustomCircularRatting";
import CustomProgress from "./CustomProgressBar";
import RatingStars from "./CustomStar";
import { BsFillLightbulbFill } from "react-icons/bs";
import AccordianComponent from "./AccordianComponent";

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
    streaming: number;
    privacy_and_logging: number;
    server_location: number;
    security_and_features: number;
    customer_support: number;
    torrenting: number;
    speed: number;
    bypassing_censorship: number;
    ease_of_use: number;
    price_and_value: number;
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
  const backgroundColors = ['bg-[#ef4444]', 'bg-[#3b82f6]', 'bg-[#22c55e]', 'bg-[#eab308]', 'bg-[#ec4899]'];
  const lightBackgroundColors = ['bg-[#f87171]', 'bg-[#60a5fa]', 'bg-[#4ade80]', 'bg-[#facc15]', 'bg-[#c084fc]'];
  const fontColors = ['text-[#f8fafc]', 'text-[#020617]', 'text-[#374151]', 'text-[#111827]', 'text-[#fef9c3]'];

  // this is for circular progress color
  const circularProgressColor = ['primary', 'secondary', 'success', 'warning', 'danger']

  const getColorByRating = (rating: number) => {
    if (rating >= 9.7 && rating <= 10) return circularProgressColor[0];   // Red
    if (rating >= 9.0 && rating < 9.7) return circularProgressColor[1];    // Orange
    if (rating >= 8.0 && rating < 9.0) return circularProgressColor[2];    // Yellow
    if (rating >= 6.0 && rating < 8.0) return circularProgressColor[3];    // Green
    if (rating >= 0 && rating < 6.0) return circularProgressColor[4];      // Blue
  };


  return (
    <section className="px-3 tablet:px-5 flex flex-col gap-4 py-5">

      {/* review card */}
      {
        blogs.map((blog: Blog, idx: number) => (
          <>
            <div className={`shadow-[0px_0px_10px_0px_#d1d5db] rounded-md bg-white hover:shadow-[0px_0px_8px_8px_#00000024] ${idx == 0 ? 'border-2 border-yellow-500 rounded-[9px]' : null}`} key={idx}>

              {/* top banner */}
              <div key={idx} className={`${backgroundColors[idx % backgroundColors.length]} ${fontColors[idx % fontColors.length]} w-fit rounded-tl-md flex items-center text-xs laptop:text-sm rounded-br-md`}>
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



              <div className="flex laptop:flex-row flex-col">

                {/* vpn image */}
                <div className="flex flex-col tablet:border-b laptop:border-none border-gray-400 laptop:w-[30%] laptop:justify-between">

                  <div className="flex justify-between laptop:justify-center pl-3 mb-2 border-b tablet:border-none border-gray-400 tablet:w-full ">
                    <div className="w-[55%] flex flex-col">
                      <div className="relative aspect-[2/1] ">
                        <Image src={`/Assests/test-vpn/vpn/${blog.attributes.img}`} fill alt="express" />
                      </div >
                      <div className="laptop:hidden flex justify-center pb-3">
                        <RatingStars value={blog.attributes.ratting} />
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
                  <div className="hidden laptop:flex flex-col justify-center px-3 mb-3 tablet:w-1/2 laptop:w-full">
                    <p className="text-[12px] pb-1 font-bold">{blog.attributes.details}</p>
                    <p className="tablet:mt-2 text-sm font-semibold text-blue-600">{blog.attributes.offer}</p>
                  </div>
                </div>

                <div className="laptop:w-[35%] flex flex-col laptop:justify-between">
                  <p className="laptop:hidden text-sm font-semibold text-blue-600 ml-6 pb-5">{blog.attributes.offer}</p>
                  <ul className="ml-6 space-y-2 tablet:my-4">
                    {
                      blog.attributes.features.map((subitm: Feature, subidx: number) => (
                        <li className="tick-list-item text-xs laptop:text-sm" key={subidx}>{subitm.value}</li>
                      ))
                    }
                  </ul>

                  <div className="hidden tablet:flex gap-5 text-gray-400 text-[24px] my-3 ml-6">
                    <FaWindows />
                    <SiMacos />
                    <IoLogoAndroid />
                    <AiOutlineApple />
                    <FaLinux />
                    <MdRouter />
                  </div>
                </div>

                <div className="hidden laptop:flex laptop:w-[15%]  flex-col gap-4 mt-4">
                  <div className="flex gap-2">
                    <MdOutlinePrivacyTip className="text-[20px]" />
                    <div className="w-full">
                      <div className="text-[10px] text-gray-700 flex justify-between pb-1"><span>Streaming</span><span>{blog.attributes.category_rating.streaming}</span></div>
                      <CustomProgress
                        value={blog.attributes.category_rating.streaming}
                        size="sm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <MdOutlinePrivacyTip className="text-[20px]" />
                    <div className="w-full">
                      <div className="text-[10px] text-gray-700 flex justify-between pb-1"><span>Streaming</span><span>{blog.attributes.category_rating.streaming}</span></div>
                      <CustomProgress
                        value={blog.attributes.category_rating.streaming}
                        size="sm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <MdOutlinePrivacyTip className="text-[20px]" />
                    <div className="w-full">
                      <div className="text-[10px] text-gray-700 flex justify-between pb-1"><span>Streaming</span><span>{blog.attributes.category_rating.streaming}</span></div>
                      <CustomProgress
                        value={blog.attributes.category_rating.streaming}
                        size="sm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <MdOutlinePrivacyTip className="text-[20px]" />
                    <div className="w-full">
                      <div className="text-[10px] text-gray-700 flex justify-between pb-1"><span>Streaming</span><span>{blog.attributes.category_rating.streaming}</span></div>
                      <CustomProgress
                        value={blog.attributes.category_rating.streaming}
                        size="sm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <MdOutlinePrivacyTip className="text-[20px]" />
                    <div className="w-full">
                      <div className="text-[10px] text-gray-700 flex justify-between pb-1"><span>Streaming</span><span>{blog.attributes.category_rating.streaming}</span></div>
                      <CustomProgress
                        value={blog.attributes.category_rating.streaming}
                        size="sm"
                      />
                    </div>
                  </div>

                </div>

                {/* bottom */}
                <div className="flex flex-col  my-3  laptop:items-center justify-evenly laptop:w-[20%]">

                  {/* ratting */}
                  <div className="flex-col items-center gap-2 w-1/2 hidden laptop:flex">
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
                      className="customRating"
                    />
                  </div>


                  <div className="laptop:flex hidden justify-center">
                    <RatingStars value={blog.attributes.ratting} />
                  </div>




                  <div className=" flex justify-center items-center flex-col gap-2 px-2">
                    <Link target="_blank" href={`${blog.attributes.company_link.value}`} className="bg-[#fd5522] text-[20px] text-white font-bold px-3 py-1 rounded-lg text-center hover:bg-[#04aa63] w-full">Visit Site {">>"}</Link>
                    <Link target="_blank" href={`${blog.attributes.company_link.value}`} className="hidden laptop:block underline text-gray-500 text-[14px]">{blog.attributes.company_link.name}</Link>
                  </div>
                  <div className="pt-2 laptop:hidden">
                    <AccordianComponent blog={blog.attributes.category_rating} />
                  </div>
                </div>

              </div>

            </div>
            <div className={`flex justify-center px-[15px] gap-2 laptop:px-0 text-sm text-center items-center ${idx == 0 ? 'block' : 'hidden'}`}>
              <div>

                <BsFillLightbulbFill className="inline text-green-600 text-[25px] laptop:text-[16px]" />
              </div>
              <p className="text-start">
                Expert Advice: Protecting your information online is more important than ever. Using a VPN is not only a good idea, it's essential
              </p>
            </div>
          </>
        ))
      }

    </section>
  )
}

export default TestVpnCard;