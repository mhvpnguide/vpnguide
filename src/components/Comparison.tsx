"use client"
import Link from 'next/link'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import React, { Suspense, useState } from 'react'
import RatingStars from './CustomStar';
import { MdOutlineCheckCircle } from 'react-icons/md';
import { RxCrossCircled } from 'react-icons/rx';

// Lazy load icons
// const RxCrossCircled = React.lazy(() => import('react-icons/rx').then(mod => ({ default: mod.RxCrossCircled })));
// const MdOutlineCheckCircle = React.lazy(() => import('react-icons/md').then(mod => ({ default: mod.MdOutlineCheckCircle })));


// Dynamically import the RatingStars component
// const RatingStars = dynamic(() => import('./CustomStar'), { ssr: false });

const compareData = [
    {
        usersReview: {
            vpnName: "CyberGhost",
            logo: "cyberghost.png",
            icon: "square_logo_cyberghost.png",
            ratting: 10,
            noRating: 5321,
        },
        BestFor: {
            title: "Overall Best"
        },
        speed: {
            title: "Very Fast (99Mbps)",
            point: 5
        },
        torrenting: {
            title: "Excellent",
            point: 5
        },
        streaming: {
            title: "Excellent",
            point: 5
        },
        gaming: {
            title: "Very Good",
            point: 4
        },
        easeOfUse: {
            title: "Excellent",
            point: 5
        },
        killSwitch: {
            value: true
        },
        wifiProtections: {
            value: true
        },
        noLogs: {
            value: true
        },
        noIp: {
            value: true
        },
        encryption: {
            value: "Military Grade Encryption"
        },
        customerSupport: {
            value: "Outstanding 24x7 Live Support"
        },
        discount: {
            value: "83% Discount + 4 Months Free"
        },
        moneyBack: {
            value: "45 Days"
        },
        valueForMoney: {
            title: "Best Deal",
            point: 5
        },
        link:{
            vlaue:"https://track.vpns.guide/base2.php?cloid=1002&token4=compare&token5=IN"
        }
    },
    {
        usersReview: {
            vpnName: "Total VPN",
            logo: "totalvpn.png",
            icon: "square_logo_total_vpn.png",
            ratting: 9.5,
            noRating: 3914,
        },
        BestFor: {
            title: "Gaming, Streaming"
        },
        speed: {
            title: "Very Fast (97Mbps)",
            point: 5
        },
        torrenting: {
            title: "Very Good",
            point: 4
        },
        streaming: {
            title: "Excellent",
            point: 5
        },
        gaming: {
            title: "Excellent",
            point: 5
        },
        easeOfUse: {
            title: "Very Good",
            point: 4
        },
        killSwitch: {
            value: true
        },
        wifiProtections: {
            value: true

        },
        noLogs: {
            value: true

        },
        noIp: {
            value: true
        },
        encryption: {
            value: "AES-256 Encryption"
        },
        customerSupport: {
            value: "Great 24x7 Support"
        },
        discount: {
            value: "80% Off + Free Antivirus"
        },
        moneyBack: {
            value: "30 Days"
        },
        valueForMoney: {
            title: "Moderate",
            point: 4
        },
        link:{
            vlaue:"https://track.vpns.guide/base2.php?cloid=1007&token4=compare&token5=IN"
        }
    },
    {
        usersReview: {
            vpnName: "Private Internet Access",
            logo: "privateinternetaccess.png",
            icon: "square_logo_private_internet_access.png",

            ratting: 9.5,
            noRating: 4791,
        },
        BestFor: {
            title: "Torrenting, Privacy"
        },
        speed: {
            title: "Fast (88Mbps)",
            point: 4
        },
        torrenting: {
            title: "Excellent",
            point: 5
        },
        streaming: {
            title: "Very Good",
            point: 4
        },
        gaming: {
            title: "Very Good",
            point: 4
        },
        easeOfUse: {
            title: "Very Good",
            point: 4
        },
        killSwitch: {
            value: true
        },
        wifiProtections: {
            value: true

        },
        noLogs: {
            value: true

        },
        noIp: {
            value: true
        },
        encryption: {
            value: "Military Grade Encryption"
        },
        customerSupport: {
            value: "Outstanding 24x7 Support"
        },
        discount: {
            value: "83% Discount + 4 Months Free"
        },
        moneyBack: {
            value: "30 Days"
        },
        valueForMoney: {
            title: "Great",
            point: 4
        },
        link:{
            vlaue:"https://track.vpns.guide/base2.php?cloid=1004&token4=compare&token5=IN"
        }
    },
]

const Comparison = () => {
    const [vpn, setVpn] = useState(0)

    return (
        <div className="bg-white laptopl:max-w-[1060px] px-[10px] laptopl:px-0 mx-auto rounded-xl py-2 laptop:py-0 flex flex-col my-10 shadow-md" id='compare'>
            <span className="text-[22px] laptop:text-[40px]  font-semibold text-center py-3 bg-[#EEF1F9]">
                Compare Top 3 VPNs
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
                            <Image loading="lazy" src={`/Assests/test-vpn/vpn/${compareData[0].usersReview.logo}`} fill alt="CyberGhost" />
                        </div >
                        <RatingStars value={compareData[0].usersReview.ratting} textSize="[18px]" emptyTextSize="[19px]" />
                        <span className="text-[12px] ">
                            {compareData[0].usersReview.noRating} Reviews
                        </span>
                    </div>
                    <div className="flex-1 flex justify-center items-center border-2 border-l-0 border-t-0 flex-col pb-2">
                        <div className="relative aspect-[2/1] w-[50%]">
                            <Image loading="lazy" src={`/Assests/test-vpn/vpn/${compareData[1].usersReview.logo}`} fill alt="Total VPN" />
                        </div >
                        <RatingStars value={compareData[1].usersReview.ratting} textSize="[18px]" emptyTextSize="[19px]" />
                        <span className="text-[12px] ">
                            {compareData[1].usersReview.noRating} Reviews
                        </span>
                    </div>
                    <div className="flex-1 flex justify-center items-center border-2 border-l-0 border-r-0 border-t-0 flex-col pb-2 sticky top-0">
                        <div className="relative aspect-[2/1] w-[50%]">
                            <Image loading="lazy" src={`/Assests/test-vpn/vpn/${compareData[2].usersReview.logo}`} fill alt="Private Internet Access" />
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
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-center">{compareData[0].speed.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[0].speed.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] rounded-full shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)]" key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-center">{compareData[1].speed.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[1].speed.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-center">{compareData[2].speed.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[2].speed.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
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
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-center">{compareData[0].torrenting.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[0].torrenting.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-center">{compareData[1].torrenting.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[1].torrenting.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-center">{compareData[2].torrenting.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[2].torrenting.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
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
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-center">{compareData[0].streaming.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[0].streaming.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-center">{compareData[1].streaming.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[1].streaming.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-center">{compareData[2].streaming.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[2].streaming.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
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
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-center">{compareData[0].gaming.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[0].gaming.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-center">{compareData[1].gaming.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[1].gaming.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-center">{compareData[2].gaming.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[2].gaming.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
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
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-center">{compareData[0].easeOfUse.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[0].easeOfUse.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-center">{compareData[1].easeOfUse.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[1].easeOfUse.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-center">{compareData[2].easeOfUse.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[2].easeOfUse.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
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
                        <Suspense fallback={<div>Loading components...</div>}>
                            {
                                compareData[0].killSwitch.value ?
                                    <Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-2xl" /></Suspense>
                                    :
                                    <Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-2xl" /></Suspense>
                            }
                        </Suspense>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        <Suspense fallback={<div>Loading components...</div>}>
                            {
                                compareData[1].killSwitch.value ?
                                    <Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-2xl" /></Suspense>
                                    :
                                    <Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-2xl" /></Suspense>
                            }
                        </Suspense>
                    </div>
                    <div className="min-h-[66px] flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9] py-5">
                        {
                            compareData[2].killSwitch.value ?
                                <Suspense fallback={<div>Loading components...</div>}><Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-2xl" /></Suspense></Suspense>
                                :
                                <Suspense fallback={<div>Loading components...</div>}><Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-2xl" /></Suspense></Suspense>
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
                            <Suspense fallback={<div>Loading components...</div>}><Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-2xl" /></Suspense></Suspense>
                                :<Suspense fallback={<div>Loading components...</div>}><Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-2xl" /></Suspense></Suspense>
                        }
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        {
                            compareData[1].wifiProtections.value ?
                                <Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-2xl" /></Suspense>
                                :
                                <Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-2xl" /></Suspense>
                        }
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9] py-5">
                        {
                            compareData[2].wifiProtections.value ?
                                <Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-2xl" /></Suspense>
                                :
                                <Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-2xl" /></Suspense>
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
                                <Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-2xl" /></Suspense>
                                :
                                <Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-2xl" /></Suspense>
                        }
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        {
                            compareData[1].noLogs.value ?
                                <Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-2xl" /></Suspense>
                                :
                                <Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-2xl" /></Suspense>
                        }
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9] py-5">
                        {
                            compareData[2].noLogs.value ?
                                <Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-2xl" /></Suspense>
                                :
                                <Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-2xl" /></Suspense>
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
                                <Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-2xl" /></Suspense>
                                :
                                <Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-2xl" /></Suspense>
                        }
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-5">
                        {
                            compareData[1].noIp.value ?
                                <Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-2xl" /></Suspense>
                                :
                                <Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-2xl" /></Suspense>
                        }
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9] py-5">
                        {
                            compareData[2].noIp.value ?
                                <Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-2xl" /></Suspense>
                                :
                                <Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-2xl" /></Suspense>
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

                <div className="bg-[#EEF1F9]  pl-2 font-bold font-inknutAntiqua text-lg min-h-[37px] flex items-center">Value for Money</div>

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
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2 font-inknutAntiqua">{compareData[0].moneyBack.value}</div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2 font-inknutAntiqua">{compareData[1].moneyBack.value}</div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9] py-2 font-inknutAntiqua">{compareData[2].moneyBack.value}</div>
                </div>

                {/* Value for Money */}
                <div className="flex">
                    <div className="flex min-h-[66px] items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-6 font-semibold font-inknutAntiqua'>Value for Money</span>
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-[14px] text-center  font-semibold">{compareData[0].valueForMoney.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[0].valueForMoney.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col gap-1">
                        <span className="text-[14px] text-center  font-semibold">{compareData[1].valueForMoney.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[1].valueForMoney.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex min-h-[66px] justify-center items-center flex-1 border-2 border-l-0 border-b-0 border-r-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col gap-1">
                        <span className="text-[14px] text-center  font-semibold">{compareData[2].valueForMoney.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[2].valueForMoney.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex items-center flex-1  py-2"></div>
                    <div className="flex items-center flex-1 py-4 bg-[#EEF1F9] border-l-2 border-r-2 border-white border-l-[#EEF1F9]">
                        <Link target='_blank' href={compareData[0].link.vlaue} className="bg-[#fd5522] hover:bg-[#04aa63] text-white font-bold mx-8 px-3 py-1 rounded-lg mt-auto w-full text-center text-[25px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">Visit CyberGhost</Link>
                    </div>
                    <div className="flex items-center flex-1 py-4 bg-[#EEF1F9] border-r-2 border-white">
                        <Link target='_blank' href={compareData[1].link.vlaue} className="bg-[#fd5522] hover:bg-[#04aa63] text-white font-bold mx-8 px-3 py-1 rounded-lg mt-auto w-full text-center text-[25px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">Visit TotalVPN</Link>
                    </div>
                    <div className="flex items-center flex-1 py-4 bg-[#EEF1F9]">
                        <Link target='_blank' href={compareData[2].link.vlaue} className="bg-[#fd5522] hover:bg-[#04aa63] text-white font-bold mx-8 px-3 py-1 rounded-lg mt-auto w-full text-center text-[25px] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)]">Visit PrivateVPN</Link>
                    </div>
                </div>
            </div>

            {/* compare table for mobile */}
            <div className="laptop:hidden px-4 py-3 relative">

                {/* LOGO */}
                <div className="flex sticky top-0 bg-white">
                    <div className="flex-1 flex justify-center items-center border-2 border-l-0 border-t-0">
                        <div className={`relative aspect-square w-1/3 m-2 rounded-full border-3 ${vpn == 0 ? "border-red-300" : "border-white"}`} onClick={() => { setVpn(0) }}>
                            <Image loading="lazy" src={`/Assests/test-vpn/vpn/${compareData[0].usersReview.icon}`} fill alt="CyberGhost" className='rounded-full' />
                        </div>
                        <div className={`relative aspect-square w-1/3 m-2 rounded-full border-3 ${vpn == 1 ? "border-red-300" : "border-white"}`} onClick={() => { setVpn(1) }}>
                            <Image loading="lazy" src={`/Assests/test-vpn/vpn/${compareData[1].usersReview.icon}`} fill alt="TotalVPN" className='rounded-full' />
                        </div>
                        <div className={`relative aspect-square w-1/3 m-2 rounded-full border-3 ${vpn == 2 ? "border-red-300" : "border-white"}`} onClick={() => { setVpn(2) }}>
                            <Image loading="lazy" src={`/Assests/test-vpn/vpn/${compareData[2].usersReview.icon}`} fill alt="Private Internet Access" className='rounded-full' />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center border-2 border-r-0 border-t-0 flex-col pb-2">
                        <span className='text-center'>{compareData[vpn].usersReview.vpnName}</span>
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
                            <span className="text-[12px] text-center">{compareData[vpn].speed.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[vpn].speed.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
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
                            <span className="text-[12px] text-center">{compareData[vpn].torrenting.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[vpn].torrenting.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
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
                            <span className="text-[12px] text-center">{compareData[vpn].streaming.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[vpn].streaming.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
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
                            <span className="text-[12px] text-center">{compareData[vpn].gaming.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[vpn].gaming.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
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
                            <span className="text-[12px] text-center">{compareData[vpn].easeOfUse.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[vpn].easeOfUse.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
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
                                <Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-2xl" /></Suspense>
                                :
                                <Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-2xl" /></Suspense>
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
                                <Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-2xl" /></Suspense>
                                :
                                <Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-2xl" /></Suspense>
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
                                <Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-2xl" /></Suspense>
                                :
                                <Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-2xl" /></Suspense>
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
                                <Suspense fallback={<div>Loading components...</div>}><MdOutlineCheckCircle className="text-[#04AA63] text-2xl" /></Suspense>
                                :
                                <Suspense fallback={<div>Loading components...</div>}><RxCrossCircled className="text-red-500 text-2xl" /></Suspense>
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

                <div className="bg-[#EEF1F9] ">Value for Money</div>

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
                    <div className="flex justify-center items-center flex-1 border-2 border-r-0 border-b-0 border-[#EEF1F9] py-2">{compareData[vpn].moneyBack.value}</div>
                </div>

                {/* Value for Money */}
                <div className="flex">
                    <div className="flex items-center flex-1 border-2 border-l-0 border-b-0 border-[#EEF1F9] py-2">
                        <span className='ml-3 font-semibold'>Value for Money</span>
                    </div>
                    <div className="flex justify-center items-center flex-1 border-2 border-r-0 border-b-0 border-[#EEF1F9]  py-2">
                        <div className="flex flex-col">
                        <span className="text-[14px] text-center  font-semibold">{compareData[vpn].valueForMoney.title}</span>
                            <div className="flex flex-row gap-2">
                                {[...Array(5)].map((_, index) => (
                                    compareData[vpn].valueForMoney.point <= index ?
                                        <div className="h-[18px] w-[18px] border-2 border-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index}></div>
                                        :
                                        <div className="h-[18px] w-[18px] bg-[#04AA63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] rounded-full" key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex justify-center items-center flex-1  py-2 bg-[#EEF1F9] border-r-2 border-white"></div>
                    <div className="flex items-center flex-1 py-2 bg-[#EEF1F9] border-l-2 border-white">
                        <Link target='_blank' href={compareData[vpn].link.vlaue} className="bg-[#fd5522] hover:bg-[#04aa63] shadow-[0px_1.365px_1.365px_0px_rgba(0,0,0,0.25)] text-white font-bold mx-2 px-3 py-1 rounded-full mt-auto w-full text-center text-[20px]">Visit Website</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comparison
