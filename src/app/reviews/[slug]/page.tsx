import TopCard from "@/components/TopCard";
import config from '../../../../config';
import CustomProgress from "@/components/CustomProgressBar";
import ToggleCard from "@/components/ToggleCard";
import Image from "next/image";
import CustomTable from "@/components/Table";
import Link from "next/link";
import { FcGlobe, FcLinux } from "react-icons/fc";
import { FaChromecast, FaCity, FaFirefoxBrowser, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { FaChrome } from "react-icons/fa";
import { SiAmazonfiretv, SiAppletv, SiIos, SiMacos, SiMicrosoftedge, SiRoku } from "react-icons/si";
import { MdOutlineRouter } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";

interface DeviceOS {
  heading: string;
  before_table_text: string;
  after_table_text: string;
  Windows?: boolean;
  Android?: boolean;
  ChromeOS?: boolean;
  Mac?: boolean;
  Linux?: boolean;
  iOS?: boolean;
  Router?: boolean;
  Apple_TV?: boolean;
  Chromecast?: boolean;
  Roku?: boolean;
  Amazon_Fire_Tv?: boolean;
  Nintendo?: boolean;
  Smart_TV?: boolean;
  Android_TV?: boolean;
  PlayStation?: boolean;
  Xbox?: boolean;
  Chrome?: boolean;
  Microsoft_Edge?: boolean;
  Firefox?: boolean;
}
interface StreamingPlatform {
  streamingPlatform: string;
  value: boolean;
}
interface Support {
  type: string;
  availability: boolean;
}
const fetchBlog = async ({ slug }: { slug: string }) => {
const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    cache: 'no-store'as RequestCache,
  };
  const request = await fetch(`${config.api}/api/reviews/${slug}`, reqOptions);
  const response = await request.json();
  return response.data;
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blog = await fetchBlog({ slug });
  const rating = 9;

  // Use useState inside a functional component

  return (
    <section >
      {/* <TopCard title={`${blog.attributes.vpn_name} review`} /> */}
      <section className="flex gap-12 max-w-screen laptop:justify-center">

        {/* content */}
        <div className="w-full laptop:w-4/6">
          {/* overview */}
          <div id="overview" className="pt-16">
            {/* verdict & rating section */}
            <div className="px-3 flex flex-col tablet:flex-row tablet:justify-between mb-4">
              <span className="text-2xl font-bold">Our Verdict</span>
              <div className="flex justify-between">
                <span className="text-lg font-bold">Overall Rating:</span>
                <div className="w-[30%] flex items-center gap-2">
                  <CustomProgress value={blog.attributes.ratting} />
                  <div className="font-bold text-lg">{blog.attributes.ratting}/10</div>
                </div>
              </div>
            </div>

            {/* verdict review & category rating */}
            <div className="mx-3 border rounded-lg bg-slate-50">
              <p className="text-xl mb-6 m-3">
                {blog.attributes.review_verdict}
              </p>

              {/* category ratting */}
              <p className="text-lg font-semibold m-3">{blog.attributes.vpn_name} Category Ratings</p>
              <div className="flex flex-col gap-2 m-3">
                <div className="flex justify-between">
                  <span>Streaming</span>
                  <div className="w-[30%] flex items-center gap-2">
                    <CustomProgress value={blog.attributes.category_rating.streaming} />
                    <div>{blog.attributes.category_rating.streaming}/10</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Torrenting</span>
                  <div className="w-[30%] flex items-center gap-2">
                    <CustomProgress value={blog.attributes.category_rating.torrenting} />
                    <div>{blog.attributes.category_rating.torrenting}/10</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Privacy & Logging</span>
                  <div className="w-[30%] flex items-center gap-2">
                    <CustomProgress value={blog.attributes.category_rating.privacy_and_logging} />
                    <div>{blog.attributes.category_rating.privacy_and_logging}/10</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Speed</span>
                  <div className="w-[30%] flex items-center gap-2">
                    <CustomProgress value={blog.attributes.category_rating.speed} />
                    <div>{blog.attributes.category_rating.speed}/10</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Server Locations</span>
                  <div className="w-[30%] flex items-center gap-2">
                    <CustomProgress value={blog.attributes.category_rating.server_location} />
                    <div>{blog.attributes.category_rating.server_location}/10</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Bypassing Censorship</span>
                  <div className="w-[30%] flex items-center gap-2">
                    <CustomProgress value={blog.attributes.category_rating.bypassing_censorship} />
                    <div>{blog.attributes.category_rating.bypassing_censorship}/10</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Security & Features</span>
                  <div className="w-[30%] flex items-center gap-2">
                    <CustomProgress value={blog.attributes.category_rating.security_and_features} />
                    <div>{blog.attributes.category_rating.security_and_features}/10</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Ease of Use</span>
                  <div className="w-[30%] flex items-center gap-2">
                    <CustomProgress value={blog.attributes.category_rating.ease_of_use} />
                    <div>{blog.attributes.category_rating.ease_of_use}/10</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Customer Support</span>
                  <div className="w-[30%] flex items-center gap-2">
                    <CustomProgress value={blog.attributes.category_rating.customer_support} />
                    <div>{blog.attributes.category_rating.customer_support}/10</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Price & Value</span>
                  <div className="w-[30%] flex items-center gap-2">
                    <CustomProgress value={blog.attributes.category_rating.price_and_value} />
                    <div>{blog.attributes.category_rating.price_and_value}/10</div>
                  </div>
                </div>
              </div>


              <p className="text-lg font-semibold m-3">{blog.attributes.vpn_name} Pros & Cons</p>
              <ToggleCard pros={blog.attributes.pros} cons={blog.attributes.cons} />
            </div>

            {/* overview */}
            <div className="mx-3 beforeImage my-4" dangerouslySetInnerHTML={{ __html: blog.attributes.overview }}>
            </div>

            {/* review image */}
            <div className="relative aspect-square mx-3">
              <Image src={`${config.api}${blog.attributes.review_image.data.attributes.url}`} fill alt='express' />
            </div>

            {/* key data */}
            <div className="m-3 my-5">
              <p className="text-lg font-semibold m-3">{blog.attributes.vpn_name} Key Data</p>
              <CustomTable keyData={blog.attributes.key_data} />
            </div>
          </div>

          {/* Streaming */}
          <div id="streaming" className="pt-16">
            {/* title */}
            <div className="bg-indigo-200 px-3 py-5">
              <p className=" text-xl font-semibold mb-3">Streaming</p>
              <p className="text-3xl font-bold">{blog.attributes.stream.title}</p>
            </div>
            <div className="bg-slate-100 m-3 p-3 rounded-md">
              <div className="flex flex-col items-center tablet:justify-center tablet:gap-5 tablet:flex-row">
                <span className="text-lg font-bold">Streaming</span>
                <div className="w-[30%] flex items-center gap-2">
                  <CustomProgress value={blog.attributes.category_rating.streaming} />
                  <div className="font-bold">{blog.attributes.category_rating.streaming}/10</div>
                </div>
              </div>
              {/* -> className="text-lg my-3"*/}
              <p className="text-lg my-3">
                {blog.attributes.stream.deatils_about_streaming}
              </p>
            </div>
            {/* -> mt-5 textlg*/}
            <p className="mx-3 mt-5 text-lg">{blog.attributes.stream.before_table_text}</p>
            <div className="m-3 rounded-md">
              <div className="flex border-t-1 border-black ">
                <div className="w-1/2 py-3 px-2 font-bold">Straming Platform</div>
                <div className="w-1/2 py-3 px-2 font-bold">Works With Express VPN</div>
              </div>
              {
                blog.attributes.stream.streaming_platform.map((itm: StreamingPlatform, idx: number) => (
                  <div className={`flex border-b-1 border-gray-200 ${itm.value ? 'bg-green-50' : 'bg-red-50'
                    }`}>
                    <div className="w-1/2 py-3 px-2">{itm.streamingPlatform}</div>
                    <div className="w-1/2 py-3 px-2">{itm.value ? "Yes" : "No"}</div>
                  </div>
                ))
              }
            </div>
            {/* ->mt-10 */}
            <div className="streaming mx-3 mt-10" dangerouslySetInnerHTML={{ __html: blog.attributes.stream.after_table_text }}>
            </div>
          </div>

          {/* speed */}
          <div id="speed" className="pt-16 max-w-[100vw] laptop:w-full">
            {/* title */}
            <div className="bg-indigo-200 px-3 py-5">
              <p className=" text-xl font-semibold mb-3">Speed</p>
              <p className="text-3xl font-bold">{blog.attributes.speed.title}</p>
            </div>
            <div className="bg-slate-100 m-3 p-3 rounded-md ">
              <div className="flex flex-col items-center tablet:justify-center tablet:gap-5 tablet:flex-row">
                <span className="text-lg font-bold">Speed</span>
                <div className="w-[30%] flex items-center gap-2">
                  <CustomProgress value={blog.attributes.category_rating.speed} />
                  <div className="font-bold">{blog.attributes.category_rating.speed}/10</div>
                </div>
              </div>
              <p className="text-lg my-3">
                {blog.attributes.speed.details_about_speed}
              </p>
            </div>
            <p className="mx-3 mt-5 text-lg">{blog.attributes.speed.before_table_text}</p>
            <div className="m-3 rounded-md flex border-red border max-w-[100vw] laptop:w-full overflow-x-hidden">
              <div className="min-w-fit border-r-2 border-slate-100">
                <div className="font-semibold min-w-fit p-3">Server Loacation</div>
                <div className="font-semibold min-w-fit p-3">Download Speed</div>
                <div className="font-semibold min-w-fit p-3">Upload Speed</div>
                <div className="font-semibold min-w-fit p-3">Ping</div>
                <div className="font-semibold min-w-fit p-3">Distance</div>
              </div>
              <div className="flex overflow-x-auto">


                  {
                    blog.attributes.speed.speed_table.map((itm, idx) => (
                        <div className="flex flex-col">
                          <div className="font-bold py-3 px-3 min-w-fit text-center whitespace-nowrap bg-slate-50">{itm.server_location}</div>
                          <div className="py-3 px-6 text-center">{itm.download_speed}</div>
                          <div className="py-3 px-6 text-center bg-slate-50">{itm.upload_speed}</div>
                          <div className="py-3 px-6 text-center">{itm.ping}</div>
                          <div className="py-3 px-6 text-center bg-slate-50">{itm.distance}</div>
                        </div>
                    ))
                  }

              </div>

            </div>

            <div className="speed mx-3 mt-10" dangerouslySetInnerHTML={{ __html: blog.attributes.speed.after_table_text }}>
            </div>
          </div>

          {/* price Value */}
          <div id="pricevalue" className="pt-16">
            {/* title */}
            <div className="bg-indigo-200 px-3 py-5">
              <p className=" text-xl font-semibold mb-3">Price & Value</p>
              <p className="text-3xl font-bold">{blog.attributes.price_value.title}</p>
            </div>
            <div className="bg-slate-100 m-3 p-3 rounded-md">
              <div className="flex flex-col items-center tablet:justify-center tablet:gap-5 tablet:flex-row">
                <span className="text-lg font-bold">Price And Value</span>
                <div className="w-[30%] flex items-center gap-2">
                  <CustomProgress value={blog.attributes.category_rating.price_and_value} />
                  <div className="font-bold">{blog.attributes.category_rating.price_and_value}/10</div>
                </div>
              </div>
              <p className="text-lg my-3">
                {blog.attributes.price_value.details_about_priceValue}
              </p>
            </div>
            <p className="mx-3 mt-5 text-lg">{blog.attributes.price_value.before_table_text}</p>
            <div className="m-3 rounded-md flex flex-col gap-3">
              {
                blog.attributes.price_value.price_chart.map((itm, idx) => (
                  <div className="bg-slate-50 w-full p-3 shadow-[0px_0px_7px_-3px_#1a202c]">
                    <div className="flex justify-between mb-2 ">
                      <div className="text-lg font-bold">{itm.validity}</div>
                      {itm.save && <div className="bg-red-500 px-3 rounded-full text-white font-semibold">{itm.save}%</div>}
                    </div>
                    <div className="text-base font-semibold mb-4">${itm.price}/mo</div>
                    <div className="text-sl text-gray-500">{itm.total_bill}</div>
                  </div>
                ))
              }

            </div>
            <div className="speed mx-3 mt-10" dangerouslySetInnerHTML={{ __html: blog.attributes.price_value.after_table_text }}>
            </div>
          </div>

          {/* torrenting */}
          <div id="torrenting" className="pt-16">
            {/* title */}
            <div className="bg-indigo-200 px-3 py-5">
              <p className=" text-xl font-semibold mb-3">Torrenting</p>
              <p className="text-3xl font-bold">{blog.attributes.torrenting.title}</p>
            </div>
            <div className="bg-slate-100 m-3 p-3 rounded-md">
              <div className="flex flex-col items-center tablet:justify-center tablet:gap-5 tablet:flex-row">
                <span className="text-lg font-bold">Torrenting</span>
                <div className="w-[30%] flex items-center gap-2">
                  <CustomProgress value={blog.attributes.category_rating.torrenting} />
                  <div className="font-bold">{blog.attributes.category_rating.torrenting}/10</div>
                </div>
              </div>
              <p className="text-lg my-3">
                {blog.attributes.torrenting.details_about_torrenting}
              </p>
            </div>
            <p className="mx-3 mt-5 text-lg">{blog.attributes.torrenting.before_table_text}</p>
            <div className="m-3 rounded-md">
              <div className="flex border-t-2 border-purple font-semibold">
                <div className="w-1/2 py-3 px-2">Torrenting Attribute</div>
                <div className="w-1/2 py-3 px-2">Result</div>
              </div>
              {
                blog.attributes.torrenting.torrenting_test.map((itm, idx) => (
                  <div className={`flex border-b-1 border-gray-200}`}>
                    <div className="w-1/2 py-3 px-2 font-semibold">{itm.torrenting_attribute}</div>
                    <div className="w-1/2 py-3 px-2">{itm.value}</div>
                  </div>
                ))
              }
            </div>
            <div className="streaming mx-3 mt-10" dangerouslySetInnerHTML={{ __html: blog.attributes.stream.after_table_text }}>
            </div>
          </div>

          {/* server Location */}
          <div id="serverLocation" className="pt-16">
            {/* title */}
            <div className="bg-indigo-200 px-3 py-5">
              <p className=" text-xl font-semibold mb-3">Server Locations</p>
              <p className="text-3xl font-bold">{blog.attributes.server_locations.title}</p>
            </div>
            <div className="bg-slate-100 m-3 p-3 rounded-md">
              <div className="flex flex-col items-center tablet:justify-center tablet:gap-5 tablet:flex-row">
                <span className="text-lg font-bold">Server Locations Rating</span>
                <div className="w-[30%] flex items-center gap-2">
                  <CustomProgress value={blog.attributes.category_rating.server_location} />
                  <div className="font-bold">{blog.attributes.category_rating.server_location}/10</div>
                </div>
              </div>
              <p className="text-lg my-3">
                {blog.attributes.server_locations.details_about_server_locations}
              </p>
            </div>
            <div className="m-3 my-10 pl-5">
              <div className="flex items-center mb-5"><FcGlobe className="inline text-3xl mr-2" />{blog.attributes.server_locations.counting.count_countries} Countries</div>
              <div className="flex items-center mb-5"><FaCity className="inline text-3xl mr-2" />{blog.attributes.server_locations.counting.count_cities} Cities</div>
              <div className="flex items-center mb-5"><FaLocationDot className="inline text-3xl mr-2" />{blog.attributes.server_locations.counting.count_ip} IP Addresses</div>
            </div>
            <p className="mx-3 mt-5 text-lg">{blog.attributes.server_locations.before_table_text}</p>
            <div className="m-3 rounded-md">
              <div className="flex border-t-2 border-purple font-semibold">
                <div className="w-1/2 py-3 px-2">Continent</div>
                <div className="w-1/2 py-3 px-2"> 	Countries with Servers</div>
              </div>
              {
                blog.attributes.server_locations.continent.map((itm, idx) => (
                  <div className={`flex border-b-1 border-gray-200}`}>
                    <div className="w-1/2 py-3 px-2 font-semibold">{itm.name}</div>
                    <div className="w-1/2 py-3 px-2">{itm.count}</div>
                  </div>
                ))
              }
            </div>
            <div className="streaming mx-3 mt-10" dangerouslySetInnerHTML={{ __html: blog.attributes.server_locations.after_table_text }}>
            </div>
          </div>

          {/* Device & os compatibilty */}
          <div id="device" className="pt-16">
            {/* title */}
            <div className="bg-indigo-200 px-3 py-5">
              <p className=" text-xl font-semibold mb-3">Device & OS Compatibility</p>
              <p className="text-3xl font-bold">{blog.attributes.device_os.title}</p>
            </div>
            <div className="bg-slate-100 m-3 p-3 rounded-md">
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold">Device & OS Compatibility</span>
              </div>
              <p className="text-lg my-3">
                {blog.attributes.device_os.deatils_about_device}
              </p>
            </div>
            <div className="">
              {
                blog.attributes.device_os.individual.map((itm: DeviceOS, idx:number) => (
                  <div className="mx-3">
                    <h1 className="font-bold text-2xl mt-8 mb-6">{itm.heading}</h1>
                    <div className="streaming mb-10" dangerouslySetInnerHTML={{ __html: itm.before_table_text }}></div>
                    <div className="flex flex-wrap space-y-3 pl-4">
                      {
                        itm.Windows && <div className="flex items-center w-1/3"><FaWindows className="text-2xl inline mr-3" /> Windows</div>
                      }
                      {
                        itm.Android && <div className="flex items-center w-1/3"><IoLogoAndroid className="text-2xl inline mr-3" /> Android</div>
                      }
                      {
                        itm.ChromeOS && <div className="flex items-center w-1/3"><FaChrome className="text-2xl inline mr-3" /> Chrome OS</div>
                      }
                      {
                        itm.Mac && <div className="flex items-center w-1/3"><SiMacos className="text-3xl inline mr-3" /> Mac</div>
                      }
                      {
                        itm.Linux && <div className="flex items-center w-1/3"><FcLinux className="text-2xl inline mr-3" /> Linux</div>
                      }
                      {
                        itm.iOS && <div className="flex items-center w-1/3"><SiIos className="text-2xl inline mr-3" /> iOS</div>
                      }
                      {
                        itm.Router && <div className="flex items-center w-1/3"><MdOutlineRouter className="text-2xl inline mr-3" /> Router</div>
                      }
                      {
                        itm.Apple_TV && <div className="flex items-center w-1/3"><SiAppletv className="text-3xl inline mr-3" /> Apple TV</div>
                      }
                      {
                        itm.Chromecast && <div className="flex items-center w-1/3"><FaChromecast className="text-2xl inline mr-3" /> Chromecast</div>
                      }
                      {
                        itm.Roku && <div className="flex items-center w-1/3"><SiRoku className="text-2xl inline mr-3" /> Roku</div>
                      }
                      {
                        itm.Amazon_Fire_Tv && <div className="flex items-center w-1/3"><SiAmazonfiretv className="text-2xl inline mr-3" /> Amazon Fire TV</div>
                      }
                      {
                        itm.Nintendo && <div className="flex items-center w-1/3"><BsNintendoSwitch className="text-2xl inline mr-3" /> Nintendo</div>
                      }
                      {/* {
                        itm.Smart_TV && <div className="flex items-center w-1/3"><FaChrome className="text-2xl inline mr-3"/> Smart Tv</div>
                      }
                      {
                        itm.Android_TV && <div className="flex items-center w-1/3"><FaChrome className="text-2xl inline mr-3"/> Android TV</div>
                      } */}
                      {
                        itm.PlayStation && <div className="flex items-center w-1/3"><FaPlaystation className="text-2xl inline mr-3" /> Playstation</div>
                      }
                      {
                        itm.Xbox && <div className="flex items-center w-1/3"><FaXbox className="text-2xl inline mr-3" /> Xbox</div>
                      }
                      {
                        itm.Chrome && <div className="flex items-center w-1/3"><FaChrome className="text-2xl inline mr-3" /> Chrome</div>
                      }
                      {
                        itm.Microsoft_Edge && <div className="flex items-center w-1/3"><SiMicrosoftedge className="text-2xl inline mr-3" /> Microsoft Edge</div>
                      }
                      {
                        itm.Firefox && <div className="flex items-center w-1/3"><FaFirefoxBrowser className="text-2xl inline mr-3" /> Firefox</div>
                      }
                      {/* <SiMacos />
                      <FaLinux />
                      <MdRouter /> */}
                    </div>
                    <div className="streaming mx-3 mt-10" dangerouslySetInnerHTML={{ __html: itm.after_table_text }}></div>
                  </div>
                ))
              }
            </div>
            {/* <div className="streaming mx-3" dangerouslySetInnerHTML={{ __html: blog.attributes.ease_of_use.content }}></div> */}
          </div>

          {/* ease of use */}
          <div id="easeOfUse" className="pt-16">
            {/* title */}
            <div className="bg-indigo-200 px-3 py-5">
              <p className=" text-xl font-semibold mb-3">Ease of Use</p>
              <p className="text-3xl font-bold">{blog.attributes.ease_of_use.title}</p>
            </div>
            <div className="bg-slate-100 m-3 p-3 rounded-md">
              <div className="flex flex-col items-center tablet:justify-center tablet:gap-5 tablet:flex-row">
                <span className="text-lg font-bold">Ease of Use Rating</span>
                <div className="w-[30%] flex items-center gap-2">
                  <CustomProgress value={blog.attributes.category_rating.ease_of_use} />
                  <div className="font-bold">{blog.attributes.category_rating.ease_of_use}/10</div>
                </div>
              </div>
              <p className="text-lg my-3">
                {blog.attributes.ease_of_use.details_about_easeOfUse}
              </p>
            </div>
            <div className="streaming mx-3 mt-5" dangerouslySetInnerHTML={{ __html: blog.attributes.ease_of_use.content }}>
            </div>
          </div>

          {/* Customer Support */}
          <div id="customerSupport" className="pt-16">
            {/* title */}
            <div className="bg-indigo-200 px-3 py-5">
              <p className=" text-xl font-semibold mb-3">Customer Support</p>
              <p className="text-3xl font-bold">{blog.attributes.customer_support.title}</p>
            </div>
            <div className="bg-slate-100 m-3 p-3 rounded-md">
              <div className="flex flex-col items-center tablet:justify-center tablet:gap-5 tablet:flex-row">
                <span className="text-lg font-bold">Customer Support Rating</span>
                <div className="w-[30%] flex items-center gap-2">
                  <CustomProgress value={blog.attributes.category_rating.customer_support} />
                  <div className="font-bold">{blog.attributes.category_rating.customer_support}/10</div>
                </div>
              </div>
              <p className="text-lg my-3">
                {blog.attributes.customer_support.details_about_customer_support}
              </p>
            </div>
            <p className="mx-3 mt-5 text-lg">{blog.attributes.customer_support.before_table_text}</p>
            <div className="m-3 rounded-md">
              <div className="flex border-t-1 border-black font-semibold">
                <div className="w-1/2 py-3 px-2">Customer Support</div>
                <div className="w-1/2 py-3 px-2">Available in {blog.attributes.vpn_name}</div>
              </div>
              {
                blog.attributes.customer_support.support.map((itm: Support, idx: number) => (
                  <div className={`flex border-b-1 border-gray-200 ${itm.availability ? 'bg-green-50' : 'bg-red-50'
                    }`}>
                    <div className="w-1/2 py-3 px-2">{itm.type}</div>
                    <div className="w-1/2 py-3 px-2">{itm.availability ? "Yes" : "No"}</div>
                  </div>
                ))
              }
            </div>
            <div className="streaming mx-3 mt-10" dangerouslySetInnerHTML={{ __html: blog.attributes.customer_support.after_table_text }}>
            </div>
          </div>
        </div>

        {/* navigation */}
        <div className="hidden laptop:block w-fit ">
          <nav className=" sticky top-20 flex flex-col w-60 mt-10 border-1 border-gray-300">
            <div>
              <div className="relative aspect-video">
                <Image src={`${config.api}${blog.attributes.logo.data.attributes.url}`} fill alt='express' />
              </div>
            </div>
            <Link href="#overview" className=" border-1 border-gray-300 p-2">Overview</Link>
            <Link href="#streaming" className=" border-1 border-gray-300 p-2">Streaming</Link>
            <Link href="#speed" className=" border-1 border-gray-300 p-2">Speed</Link>
            <Link href="#pricevalue" className=" border-1 border-gray-300 p-2">Price & Value</Link>
            <Link href="#torrenting" className=" border-1 border-gray-300 p-2">Torrenting</Link>
            <Link href="#serverLocation" className=" border-1 border-gray-300 p-2">Server Locations</Link>
            <Link href="#device" className=" border-1 border-gray-300 p-2">Device And OS capability</Link>
            <Link href="#easeOfUse" className=" border-1 border-gray-300 p-2">Ease Of Use</Link>
            <Link href="#customerSupport" className=" border-1 border-gray-300 p-2">Customer Support</Link>
          </nav>
        </div>


      </section>


    </section >
  );
}
