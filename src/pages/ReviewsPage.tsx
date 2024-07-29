import { SearchIcon } from "@/components/SearchIcon";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import CustomCircularProgress from "@/components/CustomCircularRatting";
import Link from "next/link";
import { IoLogoAndroid } from "react-icons/io";
import { FaLinux, FaWindows } from "react-icons/fa";
import { MdRouter } from "react-icons/md";
import { SiMacos } from "react-icons/si";

const ReviewsPage = () => {
  interface subTopBanner {
    value: string;
  }
  interface GlobalLink {
    value: string;
    name: string;
  }
  interface ReviewItem {
    topBanner: subTopBanner[];
    imageLink: String;
    details: string;
    offer?: string;
    features: subTopBanner[];
    ratting: number;
    globalLink: GlobalLink;
    localLink: string;
  }
  const data: ReviewItem[] = [
    {
      "topBanner": [
        {
          "value": "Fastest VPN"
        },
        {
          "value": "Best VPN for 2024"
        }
      ],
      "features": [
        {
          "value": "Lightning-fat speeds to browse without tag"
        },
        {
          "value": "Servers in 105+ countries around the globe"
        },
        {
          "value": "Military-grade security to stay safe online"
        },
        {
          "value": "Try it risk-free with its money-back gurantee"
        },
        {
          "value": "Compatible with PC, mac, iOS, Android, Roters and more"
        },
      ],
      "imageLink": "https://www.expressvpn.com/logo.png",
      "details": "Uninterrupted, high-speed browsing, zero logs so your online activity is always is always private.",
      "offer": "70% of users choose EXPRESSVPN",
      "ratting": 9.8,
      "globalLink":
      {
        "name": "expressvpn.com",
        "value": "https://www.expressvpn.com"
      },
      "localLink": "expressvpn"
    },
    {
      "topBanner": [
        {
          "value": "Good VPN"
        },
        {
          "value": "Best VPN for 2026"
        }
      ],
      "features": [
        {
          "value": "11690+ servers with optimized options for even faster speeds"
        },
        {
          "value": "Zero-logs policy keeps your identity private"
        },
        {
          "value": "Military-grade security to stay safe online Military-grade security to stay safe online"
        },
        {
          "value": "Try it risk-free with its money-back gurantee"
        },
        {
          "value": "Compatible with PC, mac, iOS, Android, Roters and more"
        },
      ],
      "imageLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAkNladXvxLA1KBVsBepMXmUNbOE9XleSdX03dVWq0Rt0DhuMSG59BJF2afAiu3WF2MI&usqp=CAU",
      "details": "One of the most secure VPNs with 256-bit encryption and a range of protocols, including OpenVPN, WireGuard, AND ikEV2.",
      "ratting": 9.2,
      "globalLink":
      {
        "name": "cyberGhostvpn.com",
        "value": "https://www.cyberghostvpn.com"
      },
      "localLink": "cyberHost"

    }
  ]

  return (
    <div className="bg-gray-100">

      {/* top */}
      <div className="px-3 flex items-center flex-col pt-14 pb-10 mb-3 bg-red-100 ">
        <p className="text-3xl font-bold pb-6">All VPN Reviews</p>
        <p className="text-xl mb-4 text-center">Check out all our VPN reviews blow or use the filters to find the VPN best suits you needs. Of the 65 reviewed, found 35 in Spaninsh.</p>
        <div className="w-full tablet:w-1/2 laptop:w-2/5 laptopl:w-96">
          <Input
            classNames={{
              base: "max-w-full h-12",
              mainWrapper: "h-full",
              input: "text-lg",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-full px-4 py-3 bg-white",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </div>
      </div>

      {/* review section */}
      <section className="px-3 tablet:px-5 flex flex-col gap-7">

        {/* review card */}
        {
          data.map((item, idx) => (
            <div className="shadow-[0px_0px_10px_0px_#d1d5db] rounded-md bg-white">

              {/* top banner */}
              <div className="bg-red-500 w-fit rounded-tl-md flex items-center text-xs laptop:text-sm rounded-br-md">
                <div className="flex justify-center items-center px-3 py-1">{idx + 1}</div>
                {
                  item.topBanner.map((subitm, subidx) => (
                    <>
                      <div className={`bg-yellow-500  w-fit px-3 py-1 h-full ${subidx == 0 ? 'rounded-tl-md' : ''} ${item.topBanner.length == subidx + 1 ? 'rounded-br-md' : ''}`}>{subitm.value}</div>
                      {
                        item.topBanner.length == subidx + 1 ?
                          null
                          :
                          <span className="bg-yellow-500 py-1">|</span>
                      }
                    </>
                  ))
                }

              </div>

              <div className="flex laptop:flex-row flex-col">

                {/* vpn image */}
                <div className="flex flex-col laptop:flex-col tablet:flex-row tablet:border-b laptop:border-none border-gray-400 laptop:w-[30%]">

                  <div className=" flex justify-center tablet:justify-center  mb-2 border-b tablet:border-none border-gray-400 tablet:w-1/2 laptop:w-full ">
                    <Link href={`/reviews/${item.localLink}`} className="relative aspect-square w-3/4 tablet:w-1/2">
                      <Image src={item.imageLink} fill alt='express' />
                    </Link >
                  </div>

                  {/* vpn details */}
                  <div className="flex flex-col justify-center px-3 mb-3 tablet:w-1/2 laptop:w-full">
                    <p className="text-sm font-medium pb-1">{item.details}</p>
                    <p className="tablet:mt-2 text-sm font-semibold text-blue-600">{item.offer}</p>
                  </div>
                </div>

                <div className="laptop:w-[40%]">
                  <ul className="ml-6 mr-3 space-y-2 tablet:my-4">
                    {
                      item.features.map((subitm, subidx) => (
                        <li className="tick-list-item">{subitm.value}</li>
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
                      value={item.ratting}
                      color={`${item.ratting >= 9.5 ? 'warning' : 'primary'}`}
                      showValueLabel={true}
                      valueLabel={`${item.ratting}`} // Pass the value without the percentage sign
                      className="customRating"
                    />
                    <p className={`text-xs laptop:text-sm  font-bold ${item.ratting >= 9.5 ? 'text-[#c4841d]' : 'text-[#004493]'}`}>
                      {
                        item.ratting >= 9.5 ? "OUTSTANDING!" : "SUPERB!"
                      }

                    </p>
                  </div>

                  <div className="w-1/2 mr-3 flex justify-center items-center flex-col gap-2">
                    <Link href={`/reviews/${item.localLink}`} className="bg-red-700 text-white font-bold px-3 py-1 rounded-lg">Visit website</Link>
                    <Link href={`${item.globalLink.value}`} className="underline text-gray-500">{item.globalLink.name}</Link>
                  </div>
                </div>
              </div>

            </div>
          ))
        }

      </section>
    </div>
  );
}


export default ReviewsPage;