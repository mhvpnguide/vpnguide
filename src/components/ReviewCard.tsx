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

const ReviewCard: React.FC<BlogsProps> = ({ blogs }) => {
  const backgroundColors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-pink-500'];
  const lightBackgroundColors = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-pink-400'];
  const fontColors = ['text-white', 'text-black', 'text-gray-700', 'text-gray-900', 'text-yellow-100'];
  return (
    <section className="px-3 tablet:px-5 flex flex-col gap-4 py-5">

      {/* review card */}
      {
        blogs.map((blog: Blog, idx: number) => (
          <div className="shadow-[0px_0px_10px_0px_#d1d5db] rounded-md bg-white" key={idx}>

            {/* top banner */}
            <div className={`${backgroundColors[idx % backgroundColors.length]} ${fontColors[idx % fontColors.length]}  w-fit rounded-tl-md flex items-center text-xs laptop:text-sm rounded-br-md`}>
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
              <div className="flex flex-col laptop:flex-col tablet:flex-row tablet:border-b laptop:border-none border-gray-400 laptop:w-[30%]">

                <div className=" flex justify-center tablet:justify-center  mb-2 border-b tablet:border-none border-gray-400 tablet:w-1/2 laptop:w-full ">
                  <Link href={`/reviews/${blog.attributes.slug}`} className="relative aspect-square w-3/4 tablet:w-[35%]">
                    <Image src={`${process.env.NEXT_PUBLIC_HOST}${blog.attributes.logo.data.attributes.url}`} fill alt="express" />
                  </Link >
                </div>

                {/* vpn details */}
                <div className="flex flex-col justify-center px-3 mb-3 tablet:w-1/2 laptop:w-full">
                  {/* <p className="text-sm font-medium pb-1">{blog.attributes.vpn_name}</p> */}
                  <p className="text-sm font-medium pb-1">{blog.attributes.details}</p>
                  <p className="tablet:mt-2 text-sm font-semibold text-blue-600">{blog.attributes.offer}</p>
                </div>
              </div>

              <div className="laptop:w-[40%]">
                <h1 className="text-sm font-bold text-center">{blog.attributes.vpn_name}</h1>
                <ul className="ml-6 mr-3 space-y-2 tablet:my-4">
                  {
                    blog.attributes.features.map((subitm: Feature, subidx: number) => (
                      <li className="tick-list-item" key={subidx}>{subitm.value}</li>
                    ))
                  }
                </ul>

                <div className="hidden tablet:flex gap-5 text-gray-400 pr-3 pl-6 text-2xl my-3">
                  <FaWindows />
                  <SiMacos />
                  <IoLogoAndroid />
                  <FaLinux />
                  <MdRouter />
                </div>
              </div>

              {/* bottom */}
              <div className="flex  my-3 laptop:w-[30%] laptop:items-center">

                {/* ratting */}
                <div className="flex flex-col items-center ml-3 gap-2 w-1/2">
                  <CustomCircularProgress
                    size="lg"
                    value={blog.attributes.ratting}
                    color={`${blog.attributes.ratting >= 9.5 ? "warning" : "primary"}`}
                    showValueLabel={true}
                    valueLabel={`${blog.attributes.ratting}`} // Pass the value without the percentage sign
                    className="customRating"
                  />
                  <p className={`text-xs laptop:text-sm  font-bold ${blog.attributes.ratting >= 9.5 ? "text-[#c4841d]" : "text-[#004493]"}`}>
                    {
                      blog.attributes.ratting >= 9.5 ? "OUTSTANDING!" : "SUPERB!"
                    }

                  </p>
                </div>

                <div className="w-1/2 mr-3 flex justify-center items-center flex-col gap-2">
                  <Link href={`/reviews/${blog.attributes.slug}`} className="bg-red-700 text-white font-bold px-3 py-1 rounded-lg">View Review</Link>
                  <Link href={`${blog.attributes.company_link.value}`} className="underline text-gray-500">{blog.attributes.company_link.name}</Link>
                </div>
              </div>
            </div>

          </div>
        ))
      }

    </section>
  )
}

export default ReviewCard;