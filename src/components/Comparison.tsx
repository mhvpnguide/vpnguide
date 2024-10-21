"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { RxCrossCircled, RxValue } from "react-icons/rx";
import { MdOutlineCheckCircle } from "react-icons/md";
import Image from 'next/image';
import RatingStars from './CustomStar';

const compareData = [
    {
        usersReview: {
            vpnName: "Express Vpn",
            logo: "expressvpn.png",
            icon: "square_logo_express_vpn.png",
            ratting: 4.9,
            noRating: 21,
        },
        BestFor: {
            title: "Gaming, Streaming 1"
        },
        speed: {
            title: "Very Fast (10022Mbps)",
            point: 3
        },
        torrenting: {
            title: "Very Fast (100Mbps)",
            point: 2
        },
        streaming: {
            title: "Very Fast (100Mbps)",
            point: 1
        },
        gaming: {
            title: "Very Fast (100Mbps)",
            point: 4
        },
        easeOfUse: {
            title: "Very Fast (100Mbps)",
            point: 4
        },
        killSwitch: {
            value: false
        },
        wifiProtections: {
            value: false
        },
        noLogs: {
            value: false
        },
        noIp: {
            value: false
        },
        encryption: {
            value: "Military Grade Encryption"
        },
        customerSupport: {
            value: "Outstanding 24x7 Support"
        },
        discount: {
            value: "83% Discount + 3 Months Free"
        },
        moneyBack: {
            value: "45 Days"
        },
        valueForMoney: {
            title: "great",
            point: 4
        },
        link:{
            vlaue:"https://vpns.guide"
        }
    },
    {
        usersReview: {
            vpnName: "Cyber Ghost",
            logo: "cyberghost.png",
            icon: "square_logo_cyberghost.png",
            ratting: 4.8,
            noRating: 14,
        },
        BestFor: {
            title: "Gaming, Streaming 2"
        },
        speed: {
            title: "Very Fast (100Mbps)",
            point: 4
        },
        torrenting: {
            title: "Very Fast (100Mbps)",
            point: 4
        },
        streaming: {
            title: "Very Fast (100Mbps)",
            point: 4
        },
        gaming: {
            title: "Very Fast (100Mbps)",
            point: 4
        },
        easeOfUse: {
            title: "Very Fast (100Mbps)",
            point: 4
        },
        killSwitch: {
            value: true
        },
        wifiProtections: {
            value: false

        },
        noLogs: {
            value: false

        },
        noIp: {
            value: false
        },
        encryption: {
            value: "Military Grade Encryption"
        },
        customerSupport: {
            value: "Outstanding 24x7 Support"
        },
        discount: {
            value: "83% Discount + 3 Months Free"
        },
        moneyBack: {
            value: "45 Days"
        },
        valueForMoney: {
            title: "Awsome",
            point: 4
        },
        link:{
            vlaue:"https://vpns.guide/best-vpn"
        }
    },
    {
        usersReview: {
            vpnName: "Private Internet Access",
            logo: "privateinternetaccess.png",
            icon: "square_logo_private_internet_access.png",

            ratting: 4.6,
            noRating: 11,
        },
        BestFor: {
            title: "Gaming, Streaming 3"
        },
        speed: {
            title: "Very Fast (100Mbps)",
            point: 4
        },
        torrenting: {
            title: "Very Fast (100Mbps)",
            point: 4
        },
        streaming: {
            title: "Very Fast (100Mbps)",
            point: 3
        },
        gaming: {
            title: "Very Fast (100Mbps)",
            point: 4
        },
        easeOfUse: {
            title: "Very Fast (100Mbps)",
            point: 4
        },
        killSwitch: {
            value: true
        },
        wifiProtections: {
            value: false

        },
        noLogs: {
            value: true

        },
        noIp: {
            value: false
        },
        encryption: {
            value: "Military Grade Encryption"
        },
        customerSupport: {
            value: "Outstanding 24x7 Support"
        },
        discount: {
            value: "83% Discount + 3 Months Free"
        },
        moneyBack: {
            value: "45 Days"
        },
        valueForMoney: {
            title: "Outstanding",
            point: 4
        },
        link:{
            vlaue:"https://vpns.guide/best-vpn-for-india"
        }
    },
]

const Comparison = () => {
    const [vpn, setVpn] = useState(0)

    return (
        <div className="bg-white laptopl:max-w-[1060px] px-[10px] laptopl:px-0 mx-auto rounded-xl py-2 laptop:py-0 flex flex-col my-10 shadow-md" id='compare'>
            <span className="text-[40px] font-semibold text-center py-3 bg-[#EEF1F9]">
                Compare Top 3 VPN
            </span>

            {/* compare table for desktop */}
            <div className="hidden laptop:block px-4 py-3 relative">
                {/* LOGO */}
                <div className="flex sticky top-0 bg-white">
                    {/* <div className="flex-1 flex justify-center items-center border-2 border-l-0 border-t-0 font-inknutAntiqua">Users Review</div> */}
                    <div className="flex items-center flex-1 border-2 border-t-0 border-l-0 border-[#EEF1F9] py-2">
                        <span className='ml-6 font-semibold font-inknutAntiqua' >Users Review</span>
                    </div>
                    <div className="flex-1 flex justify-center items-center border-2 border-l-0 border-t-0 flex-col pb-2">
                        <div className="relative aspect-[2/1] w-[50%]">
                            <Image src={`/Assests/test-vpn/vpn/${compareData[0].usersReview.logo}`} fill alt="express" />
                        </div >
                        <RatingStars value={compareData[0].usersReview.ratting} textSize="[18px]" emptyTextSize="[19px]" />
                        <span className="text-[12px] ">
                            {compareData[0].usersReview.noRating} Reviews
                        </span>
                    </div>
                    <div className="flex-1 flex justify-center items-center border-2 border-l-0 border-t-0 flex-col pb-2">
                        <div className="relative aspect-[2/1] w-[50%]">
                            <Image src={`/Assests/test-vpn/vpn/${compareData[1].usersReview.logo}`} fill alt="express" />
                        </div >
                        <RatingStars value={compareData[1].usersReview.ratting} textSize="[18px]" emptyTextSize="[19px]" />
                        <span className="text-[12px] ">
                            {compareData[1].usersReview.noRating} Reviews
                        </span>
                    </div>
                    <div className="flex-1 flex justify-center items-center border-2 border-l-0 border-r-0 border-t-0 flex-col pb-2 sticky top-0">
                        <div className="relative aspect-[2/1] w-[50%]">
                            <Image src={`/Assests/test-vpn/vpn/${compareData[2].usersReview.logo}`} fill alt="express" />
                        </div >
                        <RatingStars value={compareData[2].usersReview.ratting} textSize="[18px]" emptyTextSize="[19px]" />
                        <span className="text-[12px] ">
                            {compareData[2].usersReview.noRating} Reviews
                        </span>
                    </div>
                </div>

                {/* BEST FOR */}
                <div className="flex">
                    <div className="min-h-[66px] flex items-center flex-1 border-2 border-t-0 border-l-0 border-[#EEF1F9] py-2">
                        <span className='ml-6 font-semibold font-inknutAntiqua' >Best for</span>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-t-0 border-l-0 border-[#EEF1F9] py-2 font-inknutAntiqua">{compareData[0].BestFor.title}</div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-t-0 border-l-0 border-[#EEF1F9] py-2 font-inknutAntiqua">{compareData[1].BestFor.title}</div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-t-0 border-l-0 border-r-0 border-[#EEF1F9] py-2 font-inknutAntiqua">{compareData[2].BestFor.title}</div>
                </div>

                <div className="bg-[#EEF1F9] pl-2 font-bold font-inknutAntiqua text-lg min-h-[37px] flex items-center">Performance</div>

                {/* SPEED */}
                <div className="flex">
                    <div className="min-h-[66px] flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-6 font-semibold font-inknutAntiqua'>Speed</span>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[12px] text-center">{compareData[0].speed.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[0].speed.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] rounded-full shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)]" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[12px] text-center">{compareData[1].speed.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[1].speed.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[12px] text-center">{compareData[2].speed.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[2].speed.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* TORRENTING */}
                <div className="flex">
                    <div className="min-h-[66px] flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-6 font-semibold font-inknutAntiqua'>Torrenting</span>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[12px] text-center">{compareData[0].torrenting.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[0].torrenting.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[12px] text-center">{compareData[1].torrenting.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[1].torrenting.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[12px] text-center">{compareData[2].torrenting.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[2].torrenting.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Streaming */}
                <div className="flex">
                    <div className="min-h-[66px] flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-6 font-semibold font-inknutAntiqua'>Streaming</span>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[12px] text-center">{compareData[0].streaming.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[0].streaming.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full"  key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[12px] text-center">{compareData[1].streaming.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[1].streaming.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[12px] text-center">{compareData[2].streaming.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[2].streaming.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full"key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gaming */}
                <div className="flex">
                    <div className="min-h-[66px] flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-6 font-semibold font-inknutAntiqua'>Gaming</span>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[12px] text-center">{compareData[0].gaming.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[0].gaming.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[12px] text-center">{compareData[1].gaming.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[1].gaming.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[12px] text-center">{compareData[2].gaming.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[2].gaming.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ease of Use */}
                <div className="flex">
                    <div className="min-h-[66px] flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-6 font-semibold font-inknutAntiqua'>Ease of Use</span>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[12px] text-center">{compareData[0].easeOfUse.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[0].easeOfUse.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[12px] text-center">{compareData[1].easeOfUse.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[1].easeOfUse.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[12px] text-center">{compareData[2].easeOfUse.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[2].easeOfUse.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#EEF1F9]  pl-2 font-bold font-inknutAntiqua text-lg min-h-[37px] flex items-center">Security</div>

                {/* KILL SWITCH */}
                <div className="flex">
                    <div className="min-h-[66px] flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        <span className='ml-6 font-semibold font-inknutAntiqua'>Kill Switch</span>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        {
                            compareData[0].killSwitch.value ?
                                <MdOutlineCheckCircle className="text-[#04AA63] text-2xl" />
                                :
                                <RxCrossCircled className="text-red-500 text-2xl" />
                        }
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        {
                            compareData[1].killSwitch.value ?
                                <MdOutlineCheckCircle className="text-[#04AA63] text-2xl" />
                                :
                                <RxCrossCircled className="text-red-500 text-2xl" />
                        }
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9] py-5">
                        {
                            compareData[2].killSwitch.value ?
                                <MdOutlineCheckCircle className="text-[#04AA63] text-2xl" />
                                :
                                <RxCrossCircled className="text-red-500 text-2xl" />
                        }
                    </div>

                </div>

                {/* WIFI PROTECTION */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        <span className='ml-6 font-semibold font-inknutAntiqua'>Wi-Fi Protection</span>
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        {
                            compareData[0].wifiProtections.value ?
                                <MdOutlineCheckCircle className="text-[#04AA63] text-2xl" />
                                :
                                <RxCrossCircled className="text-red-500 text-2xl" />
                        }
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        {
                            compareData[1].wifiProtections.value ?
                                <MdOutlineCheckCircle className="text-[#04AA63] text-2xl" />
                                :
                                <RxCrossCircled className="text-red-500 text-2xl" />
                        }
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9] py-5">
                        {
                            compareData[2].wifiProtections.value ?
                                <MdOutlineCheckCircle className="text-[#04AA63] text-2xl" />
                                :
                                <RxCrossCircled className="text-red-500 text-2xl" />
                        }
                    </div>
                </div>

                {/* No - Logs Policy */}
                <div className="flex">
                    <div className="flex min-h-[66px] items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        <span className='ml-6 font-semibold font-inknutAntiqua'>No - Logs Policy</span>
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        {
                            compareData[0].noLogs.value ?
                                <MdOutlineCheckCircle className="text-[#04AA63] text-2xl" />
                                :
                                <RxCrossCircled className="text-red-500 text-2xl" />
                        }
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        {
                            compareData[1].noLogs.value ?
                                <MdOutlineCheckCircle className="text-[#04AA63] text-2xl" />
                                :
                                <RxCrossCircled className="text-red-500 text-2xl" />
                        }
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9] py-5">
                        {
                            compareData[2].noLogs.value ?
                                <MdOutlineCheckCircle className="text-[#04AA63] text-2xl" />
                                :
                                <RxCrossCircled className="text-red-500 text-2xl" />
                        }
                    </div>
                </div>

                {/* No IP */}
                <div className="flex">
                    <div className="flex min-h-[66px] items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        <span className='ml-6 font-semibold font-inknutAntiqua'>No IP / DNS Leaks</span>
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        {
                            compareData[0].noIp.value ?
                                <MdOutlineCheckCircle className="text-[#04AA63] text-2xl" />
                                :
                                <RxCrossCircled className="text-red-500 text-2xl" />
                        }
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        {
                            compareData[1].noIp.value ?
                                <MdOutlineCheckCircle className="text-[#04AA63] text-2xl" />
                                :
                                <RxCrossCircled className="text-red-500 text-2xl" />
                        }
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9] py-5">
                        {
                            compareData[2].noIp.value ?
                                <MdOutlineCheckCircle className="text-[#04AA63] text-2xl" />
                                :
                                <RxCrossCircled className="text-red-500 text-2xl" />
                        }
                    </div>
                </div>

                {/* ENCRYPTION */}
                <div className="flex">
                    <div className="flex min-h-[66px] items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-6 font-semibold font-inknutAntiqua'>Encryption</span>
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2 font-inknutAntiqua">{compareData[0].encryption?.value}</div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2 font-inknutAntiqua">{compareData[1].encryption?.value}</div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9] py-2 font-inknutAntiqua">{compareData[2].encryption?.value}</div>
                </div>

                <div className="bg-[#EEF1F9]  pl-2 font-bold font-inknutAntiqua text-lg min-h-[37px] flex items-center">Valure for Money</div>

                {/* CUSTOMER SUPPORT */}
                <div className="flex">
                    <div className="flex min-h-[66px] items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2 font-inknutAntiqua">
                        <span className='ml-6 font-semibold'>Customer Support</span>
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2 font-inknutAntiqua">{compareData[0].customerSupport.value}</div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2 font-inknutAntiqua">{compareData[1].customerSupport.value}</div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9] py-2 font-inknutAntiqua">{compareData[2].customerSupport.value}</div>
                </div>

                {/* Discount */}
                <div className="flex">
                    <div className="flex min-h-[66px] items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-6 font-semibold font-inknutAntiqua'>Discount</span>
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2 font-inknutAntiqua text-blue-600">{compareData[0].discount.value}</div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2 font-inknutAntiqua text-blue-600">{compareData[1].discount.value}</div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9] py-2 font-inknutAntiqua text-blue-600">{compareData[2].discount.value}</div>
                </div>

                {/* Money Back */}
                <div className="flex">
                    <div className="flex min-h-[66px] items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-6 font-semibold font-inknutAntiqua'>Money Back Guarantee</span>
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2 font-inknutAntiqua font-semibold">{compareData[0].moneyBack.value}</div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2 font-inknutAntiqua font-semibold">{compareData[1].moneyBack.value}</div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9] py-2 font-inknutAntiqua font-semibold">{compareData[2].moneyBack.value}</div>
                </div>

                {/* value for money */}
                <div className="flex">
                    <div className="flex min-h-[66px] items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-6 font-semibold font-inknutAntiqua'>Ease of Use</span>
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-center">{compareData[0].valueForMoney.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[0].valueForMoney.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-center">{compareData[1].valueForMoney.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[1].valueForMoney.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-center">{compareData[2].valueForMoney.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[2].valueForMoney.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex items-center flex-1  py-2"></div>
                    <div className="flex items-center flex-1 py-4 bg-[#EEF1F9] border-l-2 border-r-2 border-white border-l-[#EEF1F9]">
                        <Link target='_blank' href={compareData[0].link.vlaue} className="bg-[#fd5522] hover:bg-[#04aa63] text-white font-bold mx-8 px-3 py-1 rounded-lg mt-auto w-full text-center text-[25px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">Visit Site</Link>
                    </div>
                    <div className="flex items-center flex-1 py-4 bg-[#EEF1F9] border-r-2 border-white">
                        <Link target='_blank' href={compareData[1].link.vlaue} className="bg-[#fd5522] hover:bg-[#04aa63] text-white font-bold mx-8 px-3 py-1 rounded-lg mt-auto w-full text-center text-[25px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">Visit Site</Link>
                    </div>
                    <div className="flex items-center flex-1 py-4 bg-[#EEF1F9]">
                        <Link target='_blank' href={compareData[2].link.vlaue} className="bg-[#fd5522] hover:bg-[#04aa63] text-white font-bold mx-8 px-3 py-1 rounded-lg mt-auto w-full text-center text-[25px] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)]">Visit Site</Link>
                    </div>
                </div>
            </div>

            {/* compare table for mobile */}
            <div className="laptop:hidden px-4 py-3 relative">

                {/* LOGO */}
                <div className="flex sticky top-0 bg-white">
                    <div className="flex-1 flex justify-center items-center border-2 border-l-0 border-t-0">
                        <div className={`relative aspect-square w-1/3 m-2 rounded-full border-3 ${vpn==0 ? "border-red-300":"border-white"}`} onClick={() => { setVpn(0) }}>
                            <Image src={`/Assests/test-vpn/vpn/${compareData[0].usersReview.icon}`} fill alt="express" className='rounded-full'/>
                        </div>
                        <div className={`relative aspect-square w-1/3 m-2 rounded-full border-3 ${vpn==1 ? "border-red-300":"border-white"}`} onClick={() => { setVpn(1) }}>
                            <Image src={`/Assests/test-vpn/vpn/${compareData[1].usersReview.icon}`} fill alt="express" className='rounded-full'/>
                        </div>
                        <div className={`relative aspect-square w-1/3 m-2 rounded-full border-3 ${vpn==2 ? "border-red-300":"border-white"}`} onClick={() => { setVpn(2) }}>
                            <Image src={`/Assests/test-vpn/vpn/${compareData[2].usersReview.icon}`} fill alt="express" className='rounded-full'/>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center border-2 border-r-0 border-t-0 flex-col pb-2">
                        <span className='text-center'>{compareData[vpn].usersReview.vpnName} VPN</span>
                        <RatingStars value={compareData[vpn].usersReview.ratting} textSize="sm" emptyTextSize="17px" />
                    </div>
                </div>

                {/* BEST FOR */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-t-0 border-l-0 border-[#EEF1F9] py-2">
                        <span className='ml-3 font-semibold'>
                            Best for
                        </span>
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2 border-t-0  border-r-0 border-[#EEF1F9] py-2">{compareData[vpn].BestFor.title}</div>
                </div>

                <div className="bg-[#EEF1F9]">Performance</div>

                {/* SPEED */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-3 font-semibold'>Speed</span>
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2  border-r-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-center">{compareData[vpn].speed.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[vpn].speed.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* TORRENTING */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-3 font-semibold'>Torrenting</span>
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2 border-r-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-center">{compareData[vpn].torrenting.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[vpn].torrenting.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Streaming */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-3 font-semibold'>Streaming</span>
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2 border-r-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-center">{compareData[vpn].streaming.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[vpn].streaming.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gaming */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-3 font-semibold'>Gaming</span>
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2 border-r-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-center">{compareData[vpn].gaming.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[vpn].gaming.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ease of Use */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-3 font-semibold'>Ease of Use</span>
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2 border-r-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-center">{compareData[vpn].easeOfUse.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[vpn].easeOfUse.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-[#EEF1F9] ">Security</div>

                {/* KILL SWITCH */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        <span className='ml-3 font-semibold'>Kill Switch</span></div>
                    <div className="flex justify-center items-center flex-1 border-2 border-r-0 border-b-0 border-[#EEF1F9] py-5">
                        {
                            compareData[vpn].killSwitch.value ?
                                <MdOutlineCheckCircle className="text-[#04AA63] text-2xl" />
                                :
                                <RxCrossCircled className="text-red-500 text-2xl" />
                        }
                    </div>

                </div>

                {/* WIFI PROTECTION */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        <span className='ml-3 font-semibold'>Wi-Fi Protection</span>
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2 border-r-0 border-b-0 border-[#EEF1F9] py-5">
                        {
                            compareData[vpn].wifiProtections.value ?
                                <MdOutlineCheckCircle className="text-[#04AA63] text-2xl" />
                                :
                                <RxCrossCircled className="text-red-500 text-2xl" />
                        }
                    </div>
                </div>

                {/* No - Logs Policy */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        <span className='ml-3 font-semibold'>No - Logs Policy</span>
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2 border-r-0 border-b-0 border-[#EEF1F9] py-5">
                        {
                            compareData[vpn].noLogs.value ?
                                <MdOutlineCheckCircle className="text-[#04AA63] text-2xl" />
                                :
                                <RxCrossCircled className="text-red-500 text-2xl" />
                        }
                    </div>
                </div>

                {/* No IP */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        <span className='ml-3 font-semibold'>No IP / DNS Leaks</span>
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2 border-r-0 border-b-0 border-[#EEF1F9] py-5">
                        {
                            compareData[vpn].noIp.value ?
                                <MdOutlineCheckCircle className="text-[#04AA63] text-2xl" />
                                :
                                <RxCrossCircled className="text-red-500 text-2xl" />
                        }
                    </div>
                </div>

                {/* ENCRYPTION */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-3 font-semibold'>Encryption</span>
                    </div>
                    <div className="flex text-center items-center flex-1 border-2 border-r-0 border-b-0 border-[#EEF1F9] py-2">{compareData[vpn].encryption?.value}</div>
                </div>

                <div className="bg-[#EEF1F9] ">Valure for Money</div>

                {/* CUSTOMER SUPPORT */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-3 font-semibold'>Customer Support</span>
                    </div>
                    <div className="flex text-center items-center flex-1 border-2 border-r-0 border-b-0 border-[#EEF1F9] py-2">{compareData[vpn].customerSupport.value}</div>
                </div>

                {/* Discount */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-3 font-semibold'>Discount</span>
                    </div>
                    <div className="flex text-center items-center flex-1 border-2 border-r-0 border-b-0 border-[#EEF1F9] py-2 text-blue-600">{compareData[vpn].discount.value}</div>
                </div>

                {/* Money Back */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-3 font-semibold'>Money Back Guarantee</span>
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2 border-r-0 border-b-0 border-[#EEF1F9] py-2 font-semibold">{compareData[vpn].moneyBack.value}</div>
                </div>

                {/* Ease of use */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-3 font-semibold'>Ease of Use</span>
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2 border-r-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-center">{compareData[vpn].valueForMoney.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[vpn].valueForMoney.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex justify-center items-center flex-1  py-2 bg-[#EEF1F9] border-r-2 border-white"></div>
                    <div className="flex items-center flex-1 py-2 bg-[#EEF1F9] border-l-2 border-white">
                        <Link target='_blank' href={compareData[vpn].link.vlaue} className="bg-[#fd5522] hover:bg-[#04aa63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] text-white font-bold mx-2 px-3 py-1 rounded-full mt-auto w-full text-center text-[20px]">Visit Site</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comparison