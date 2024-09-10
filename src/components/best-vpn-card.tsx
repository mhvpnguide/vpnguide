import Image from "next/image";
import Link from "next/link";
import config from "../../config";
import { FaLinux, FaWindows } from "react-icons/fa6";
import { SiMacos } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { MdRouter } from "react-icons/md";
import CustomCircularProgress from "./CustomCircularRatting";
import { ReactNode } from "react";

interface Blog {
  id: number; // Assuming there"s an id for each blog
  attributes: BlogAttributes;
}
interface BlogAttributes {
  vpn_name: ReactNode;
  slug: string;
  top_banner: BannerItem[];
  logo: Logo;
  details: string;
  offer: string;
  features: Feature[];
  ratting: number;
  company_link: CompanyLink;
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

const BestVpnCard: React.FC<BlogsProps> = ({ blogs }) => {
  // this is for top banner
  const backgroundColors = ['bg-[#ef4444]', 'bg-[#3b82f6]', 'bg-[#22c55e]', 'bg-[#eab308]', 'bg-[#ec4899]'];
  const lightBackgroundColors = ['bg-[#f87171]', 'bg-[#60a5fa]', 'bg-[#4ade80]', 'bg-[#facc15]', 'bg-[#c084fc]'];
  const fontColors = ['text-[#f8fafc]', 'text-[#020617]', 'text-[#374151]', 'text-[#111827]', 'text-[#fef9c3]'];

  // this is for circular progress color
  const circularProgressColor=['primary','secondary','success','warning','danger']












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
          <Link target="_blank" href={blog.attributes.company_link.value} className={`shadow-[0px_0px_10px_0px_#d1d5db] rounded-md bg-white hover:shadow-[0px_0px_8px_8px_#00000024] ${idx==0 ? 'border-2 border-yellow-500 rounded-[9px]':null}`} key={idx}>

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
              <div className="flex flex-col laptop:flex-col tablet:flex-row tablet:border-b laptop:border-none border-gray-400 w-auto laptop:max-w-[30%]">

                <div className="flex justify-center table:justify-start pl-3 mb-2 border-b tablet:border-none border-gray-400 tablet:w-1/2 laptop:w-full ">
                  <div className="relative aspect-[2/1] w-3/4 ">
                    <Image src={`${process.env.NEXT_PUBLIC_HOST}${blog.attributes.logo.data.attributes.url}`} fill alt="express" />
                  </div >
                </div>

                {/* vpn details */}
                <div className="flex flex-col justify-center px-3 mb-3 tablet:w-1/2 laptop:w-full">
                  {/* <p className="text-sm font-medium pb-1">{blog.attributes.vpn_name}</p> */}
                  <p className="text-sm pb-1 font-bold">{blog.attributes.details}</p>
                  <p className="tablet:mt-2 text-sm font-semibold text-blue-600">{blog.attributes.offer}</p>
                </div>
              </div>

              <div className="laptop:w-[30%] flex flex-col laptop:justify-between">
    
                <ul className="ml-6 mr-3 space-y-2 tablet:my-4">
                  {
                    blog.attributes.features.map((subitm: Feature, subidx: number) => (
                      <li className="tick-list-item text-sm" key={subidx}>{subitm.value}</li>
                    ))
                  }
                </ul>

                <div className="hidden tablet:flex gap-5 text-gray-400 pr-3 pl-12 text-xl my-3">
                  <FaWindows />
                  <SiMacos />
                  <IoLogoAndroid />
                  <FaLinux />
                  <MdRouter />
                </div>
              </div>

              {/* bottom */}
              <div className="flex  my-3 laptop:w-[40%] laptop:items-center">

                {/* ratting */}
                <div className="flex flex-col items-center ml-3 gap-2 w-1/2">
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
                  <p className={`text-xs laptop:text-sm  font-bold ${blog.attributes.ratting >= 9.5 ? "text-[#c4841d]" : "text-[#004493]"}`}>
                    {
                      blog.attributes.ratting >= 9.7 ? "OUTSTANDING!" :
                      blog.attributes.ratting >= 9.0 ? "SUPERB!" :
                      blog.attributes.ratting >= 8.0 ? "GREAT!" :
                      blog.attributes.ratting >= 6.0 ? "GOOD!" : 
                                                        "BLANK!"
                    }

                  </p>
                </div>

                <div className="w-1/2 mr-3 flex justify-center items-center flex-col gap-2">
                  <Link href={`/reviews/${blog.attributes.slug}`} className="bg-red-700 text-[14px] text-white font-bold px-3 py-1 rounded-lg text-center hover:bg-green-900">Visit Site</Link>
                  <Link href={`${blog.attributes.company_link.value}`} className="underline text-gray-500 text-[6px]">{blog.attributes.company_link.name}</Link>
                </div>
              </div>

            </div>

          </Link>
        ))
      }

    </section>
  )
}

export default BestVpnCard;
