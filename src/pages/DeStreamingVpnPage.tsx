"use client"
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import TestVpnCard from "@/components/De-vpn-card";
//import Popup from "@/components/Popup";
import DeComparison from "@/components/DeComparison";
import TooltipComp from "@/components/DeTooltipComp";
import ScrollToTopButton from "@/components/ScrollToTop";
import { SlCalender } from "react-icons/sl";
import { FaCrown, FaIdCard, FaUserLarge } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { IoSpeedometer } from "react-icons/io5";
import { FaUnlockAlt } from "react-icons/fa";
import RatingStars from "@/components/CustomStar";
import CustomCircularProgress from "@/components/CustomCircularRatting";
//import CardSlider from "@/components/CardSlider";
import DeFAQ from "@/components/DeFAQ";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineCheckCircle } from "react-icons/md";
import parse from 'html-react-parser';


interface VPNData {
    title?: string;
    list?: string[];
    slug?: string[];
    data: {
        attributes: BlogAttributes;
    }[];
}
export interface BlogAttributes {
    vpn_name: string;
    ratting: number;
    slug: string;
    offer?: string;
    details: string;
    img: String,
    features: { value: string }[];
    company_link: { name: string; value: string };
    link1: string;
    link2: string;
    link3: string;
    top_banner: { value: string }[];
    category_rating: {
        privacy: number,
        features: number,
        speed: number,
        userScore: number,
        valueForMoney: number,
    };
}


const vpnData: VPNData =
{
    title: "Die besten VPN-Anbieter 2025",
    list: [
        "<b>Ultra-schnelle Server</b> für unterbrechungsfreies Surfen und Streaming",  
        "<b>Ändere deinen IP-Standort</b> & nutze das Internet privat und sicher",  
        "<b>Verbinde mehrere Geräte</b> gleichzeitig mit einem einzigen VPN-Konto",  
        "<b>Kostenlose Testversionen</b> & <b>zeitlich begrenzte Rabatte</b> für alle VPNs"

    ],
    data: [
        {
            "attributes": {
                "vpn_name": "Cyber Ghost",
                "ratting": 9.8,
                "slug": "cyberghost",
                "offer": "83% Rabatt + 4 Monate kostenlos",
                "details": "CyberGhost: Blitzschnell, hochsicher und vertrauenswürdig. Genieße ein Premium-VPN mit globaler Abdeckung und 24/7 Kundenservice. Unser Testsieger!",
                "img": "cyberghost.svg",
                "features": [
                    { "value": "45 Tage kostenlos testen" },
                    { "value": "Sicher, schützt deine Online-Aktivitäten" },
                    { "value": "Ultra schnelle Geschwindigkeit für alle Geräte" },
                    { "value": "Strikte No-Logs-Policy für deine Sicherheit" },
                    { "value": "VPN-Kill-Switch für Sicherheit" },
                    { "value": "11690+ Server in 105 Ländern" }                    
                ],

                "company_link": {
                    "name": "cyberghost.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1002&token4=text&token5=DE"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1002&token4=button&token5=DE",
                "link2":"https://track.vpns.guide/base2.php?cloid=1002&token4=tile&token5=DE",
                "link3":"https://track.vpns.guide/base2.php?cloid=1002&token4=bo&token5=DE",
                "top_banner": [
                    { "value": "Unser Top-VPN" },
                    { "value": "45 Tage kostenlos" }
                ],
                "category_rating": {
                    "privacy": 9.9,
                    "features": 9.7,
                    "speed": 9.9,
                    "userScore": 9.9,
                    "valueForMoney": 9.9,
                },
            }
        },
        {
            "attributes": {
                "vpn_name": "Total Vpn",
                "ratting": 9.5,
                "slug": "totalvpn",
                "offer": "Kostenloses Antivirus & Ad-Blocker",
                "details": "Total VPN: Optimiert für Streaming, Torrenting & Gaming. Schnelle Geschwindigkeit mit Militärstandard-Verschlüsselung",
                "img": "totalvpn.svg",
                "features": [
                    { "value": "Teste es 30 Tage kostenlos" },
                    { "value": "Ultra-schnelle Geschwindigkeit ohne Verzögerung" },
                    { "value": "Verstärkter Schutz für öffentliches WLAN" },
                    { "value": "Strikte No-Logs-Policy & keine IP/DNS-Lecks" },
                    { "value": "Chrome- & Firefox-Erweiterung" },
                    { "value": "Benutzerfreundliche App für alle Geräte" }
                    
                ],
                "company_link": {
                    "name": "totalvpn.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1007&token4=text&token5=DE"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1007&token4=button&token5=DE&token5=DE",
                "link2":"https://track.vpns.guide/base2.php?cloid=1007&token4=tile&token5=DE",
                "link3":"https://track.vpns.guide/base2.php?cloid=1007&token4=bo&token5=DE",
                "top_banner": [
                    { "value": "Günstigstes VPN" },
                    { "value": "1,59 €/Monat nur!" }
                ],
                "category_rating": {
                    "privacy": 9.6,
                    "features": 9.5,
                    "speed": 9.7,
                    "userScore": 9.5,
                    "valueForMoney": 9.8,
                },
            }
        },
        {
            "attributes": {
                "vpn_name": "Private Internet Access",
                "ratting": 9.2,
                "slug": "privateinternetaccess",
                "offer": "Ein Konto, unbegrenzt Geräte",
                "details": "PIA: Schnelle Geschwindigkeit, starke Verschlüsselung und ohne Datenspeicherung für anonymes Surfen mit 24/7 Live-Support.",
                "img": "privateinternetaccess.svg",
                "features": [
                    { "value": "Hervorragend für privates Internet-Surfen" },
                    { "value": "Nutze bis zu 10 Geräte gleichzeitig" },
                    { "value": "Teste es 30 Tage kostenlos" },
                    { "value": "100% Open-Source, No-Logs VPN" },
                    { "value": "Server in 91 Ländern" },
                    { "value": "Eingebauter Schutz vor Werbung & Schadsoftware" }                    
                ],
                "company_link": {
                    "name": "privateinternetaccess.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1004&token4=text&token5=DE"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1004&token4=button&token5=DE&token5=DE",
                "link2":"https://track.vpns.guide/base2.php?cloid=1004&token4=tile&token5=DE",
                "link3":"https://track.vpns.guide/base2.php?cloid=1004&token4=bo&token5=DE",
                "top_banner": [
                ],
                "category_rating": {
                    "privacy": 9.2,
                    "features": 9.3,
                    "speed": 9.5,
                    "userScore": 9.2,
                    "valueForMoney": 9.6,
                },
            }
        },
  {
            "attributes": {
                "vpn_name": "SurfShark",
                "ratting": 8.9,
                "slug": "surfshark",
                "offer": "",
                "details": "SurfShark: Perfektes Einsteiger-VPN für Anfänger. Starke Sicherheits- und Datenschutzfunktionen.",
                "img": "surfshark.svg",
                "features": [
                    { "value": "Ausgezeichneter Kundensupport" },
                    { "value": "Gute Download-Geschwindigkeit" },
                    { "value": "Chrome- & Firefox-Erweiterung" },
                    { "value": "Überwacht und verhindert Datenlecks" },
                    { "value": "Kostenlose Testversion für 30 Tage" }                    
                ],
                "company_link": {
                    "name": "surfshark.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1005&token4=text&token5=DE"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1005&token4=button&token5=DE",
                "link2":"https://track.vpns.guide/base2.php?cloid=1005&token4=tile&token5=DE",
                "link3":"https://track.vpns.guide/base2.php?cloid=1005&token4=bo&token5=DE",
                "top_banner": [
                ],
                "category_rating": {
                    "privacy": 9.0,
                    "features": 8.8,
                    "speed": 5.9,
                    "userScore": 8.9,
                    "valueForMoney": 9.0,
                },
            }
        },



        {
            "attributes": {
                "vpn_name": "Private VPN",
                "ratting": 8.6,
                "slug": "privatevpn",
                "offer": "",
                "details": "Private VPN: legt großen Wert auf die Sicherheit der Benutzer mit 128- und 256-Bit-Verschlüsselung.",
                "img": "privatevpn.svg",
                "features": [
                    { "value": "Effektives Stealth-VPN-Protokoll" },
                    { "value": "Sichert öffentliche WLAN & Hotspot" },
                    { "value": "30 Tage Geld-zurück-Garantie" },
                    { "value": "Schnell & einfach zu verbinden" },
                    { "value": "Server in 62 Ländern verfügbar" }                    
                ],
                "company_link": {
                    "name": "privatevpn.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1008&token4=text&token5=DE"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1008&token4=button&token5=DE",
                "link2":"https://track.vpns.guide/base2.php?cloid=1008&token4=tile&token5=DE",
                "link3":"https://track.vpns.guide/base2.php?cloid=1008&token4=bo&token5=DE",
                "top_banner": [
                ],
                "category_rating": {
                    "privacy": 8.7,
                    "features": 8.4,
                    "speed": 8.0,
                    "userScore": 8.5,
                    "valueForMoney": 8.7,
                },
            }
        },
        {
            "attributes": {
                "vpn_name": "Pure Vpn",
                "ratting": 8.5,
                "slug": "purevpn",
                "offer": "",
                "details": "Pure VPN: Gute Geschwindigkeiten & robuste Sicherheitsstufen. 24/7 Support per Live-Chat.",
                "img": "purevpn.svg",
                "features": [
                    { "value": "30 Tage Geld-zurück-Garantie" },
                    { "value": "Schützt deine Online-Aktivität" },
                    { "value": "Schnelle Geschwindigkeit für alle Geräte" },
                    { "value": "Chrome- & Firefox-Erweiterung" },
                    { "value": "Keine Datenspeicherung für deine Sicherheit" }                    
                ],
                "company_link": {
                    "name": "purevpn.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1006&token4=text&token5=DE"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1006&token4=button&token5=DE",
                "link2":"https://track.vpns.guide/base2.php?cloid=1006&token4=tile&token5=DE",
                "link3":"https://track.vpns.guide/base2.php?cloid=1006&token4=bo&token5=DE",
                "top_banner": [
                ],
                "category_rating": {
                    "privacy": 8.5,
                    "features": 8.4,
                    "speed": 8.0,
                    "userScore": 8.6,
                    "valueForMoney": 8.4,
                },
            }
        },
        {
            "attributes": {
                "vpn_name": "Proton VPN",
                "ratting": 8.2,
                "slug": "protonvpn",
                "offer": "",
                "details": "Proton VPN: Benutzerfreundliches VPN für Anfänger. Starke Sicherheits- und Datenschutzfunktionen.",
                "img": "protonvpn.svg",
                "features": [
                    { "value": "Unbegrenzte Geschwindigkeit" },
                    { "value": "Benutzerfreundliche Apps" },
                    { "value": "Keine Datenspeicherung" },
                    { "value": "Chrome- & Firefox-Erweiterung" },
                    { "value": "30 Tage Geld-zurück-Garantie" }                    
                ],
                "company_link": {
                    "name": "protonvpn.com",
                    "value": "https://track.vpns.guide/base2.php?cloid=1009&token4=text&token5=DE"
                },
                "link1":"https://track.vpns.guide/base2.php?cloid=1009&token4=button&token5=DE",
                "link2":"https://track.vpns.guide/base2.php?cloid=1009&token4=tile&token5=DE",
                "link3":"https://track.vpns.guide/base2.php?cloid=1009&token4=bo&token5=DE",
                "top_banner": [
                ],
                "category_rating": {
                    "privacy": 8.4,
                    "features": 8.6,
                    "speed": 8.0,
                    "userScore": 8.6,
                    "valueForMoney": 8.4,
                },
            }
        },


    ]
}



const TestVpnPage = () => {
    const today = new Date(); // Get the current date upfront
    const day = today.getDate();
    const month = today.toLocaleString(undefined, { month: "long" });
    const year = today.getFullYear();

    const [currentDate, setCurrentDate] = useState<string>(`${day} ${month}, ${year}`);
    const [currentmontY, setCurrentmontY] = useState<string>(`${month} ${year}`);

    return (
        <section className="bg-[#F9F6EE]">
            <ScrollToTopButton />

            {/* top section */}
            <div className="mx-auto flex flex-col bg-[#F9F6EE] px-[10px] pt-[17px] laptop:flex-row laptop:py-2 laptop:pb-[28px] laptop:pt-10 laptopl:max-w-[1060px] laptopl:px-0">
                {/* left */}
                <div className="content mx-0 max-h-fit w-full pb-4 tablet:mx-auto tablet:w-[55%] laptop:mx-0">
                    <h1 className="mb-4 font-kantumruyPro text-[25px] font-bold laptop:text-[35px]">{vpnData.title}</h1>
                    <h2 className="mb-[25px] font-kantumruyPro text-[14px] text-blue-950 laptop:mb-[30px] laptop:text-[14px]">
                        {currentmontY} – Top Sicherheitsfunktionen, private, umfassende Servernetzwerke und zuverlässige Rückerstattungen - sicheres Surfen mit wenigen Klicks.
                    </h2>
                    <ul className="mb-[20px] text-[16px] laptop:text-base">
                        {
                            vpnData.list?.map((itm: any, idx: number) => (
                                <li className="tick-list-green-item mb-[14px] font-kantumruyPro" key={idx}>  {parse(itm)} </li>
                            ))
                        }
                    </ul>

                    {/* featured section */}
                    <div className="hidden tablet:block">
                        <span className="font-kantumruyPro">Diese VPN-Dienste wurden vorgestellt auf:</span>
                        <div className="mb-1 ml-3 mt-[10px] flex items-center gap-7">
                            <div className="relative h-[40px] w-[120px]">
                                <Image src={`/Assests/test-vpn/derspiegel.svg`} alt="Derspiegel"
                                    className="w-full" fill/>
                            </div>
                            <div className="relative h-[40px] w-[60px]">
                                <Image src={`/Assests/test-vpn/BBC.svg`} alt="BBC"
                                    className="w-full" fill />
                            </div>
                            <div className="relative h-[40px] w-[50px]">
                                <Image src={`/Assests/test-vpn/CNN.svg`} alt="CNN"
                                    className="w-full" fill />
                            </div>
                            <div className="relative h-[40px] w-[80px]">
                                <Image src={`/Assests/test-vpn/heise.svg`} alt="Fox News"
                                    className="w-full" fill />
                            </div>
                            <div className="relative h-[35px] w-[70px]">
                                <Image src={`/Assests/test-vpn/chip.svg`} alt="CNET"
                                    className="w-full" fill />
                            </div>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className="hidden w-[full] items-center justify-center tablet:flex laptop:w-[45%]">
                    <div className="relative aspect-video w-[70%] laptop:w-full">
                        <Image src="/Assests/test-vpn/Hero-Section-germany.avif" layout="fill" className="object-contain" priority unoptimized 
                            alt="vpn image" />
                    </div>
                </div>
            </div>

            {/* update date section */}
            <div className="w-full bg-[#fcfcfc] shadow-sm">
                <div className="mx-auto flex items-center justify-between px-[10px] py-[4px] text-xl laptop:py-[6px] laptop:text-xl laptopl:max-w-[1060px] laptopl:px-0">
                    <span className="flex items-center gap-1 text-[10px] tablet:gap-1 laptop:text-[16px]">
                        <span className="font-kantumruyPro text-[15px]">
                            <SlCalender className="mr-1 inline text-[17px]" />Aktualisiert am:
                        </span>
                        <span className="text-[15px]">
                            {currentDate}
                        </span>
                    </span>
                    <div className="flex">
                        <TooltipComp />
                    </div>
                </div>
            </div>

            {/* reviews section */}
            <div className="mx-auto bg-[#F9F6EE] px-[10px] laptopl:max-w-[1060px] laptopl:px-0">
               
                <TestVpnCard blogs={vpnData.data} />
            </div>


            {/* comparison section */}
            <DeComparison />


            {/* honest vpn review */}
            
            {/* Best Plan */}
            
            {/* card slider */}
            

            {/* faqs */}
            <div className="py-[56px]">
                <DeFAQ />
            </div>




            {/* two button */}
            <div className="flex flex-col bg-white px-2 py-[50px] laptop:px-0">
                <h1 className="pb-[25px] text-center font-kantumruyPro text-[23px] font-semibold text-[#545454] laptop:text-[30px]">
                Bist du bereit, dich mit einem erstklassigen VPN zu schützen?</h1>
                <div className="flex flex-col justify-center gap-5 laptop:flex-row laptop:gap-12">
                    <Link href="https://track.vpns.guide/base2.php?cloid=1002&token4=Yes" target="_blank"
                        className="flex h-[60px] cursor-pointer items-center gap-9 border-2 border-[#04AA63] px-10 hover:bg-[#04aa6291] laptop:w-[450px]">
                        <Suspense fallback={<div>Loading components...
                        </div>}>
                            <MdOutlineCheckCircle className="inline text-[30px] text-[#04AA63]" />
                        </Suspense>
                        <span className="font-kantumruyPro text-[17px] font-semibold text-[#545454]">Ja, ich sichere mein Gerät JETZT</span>
                    </Link>
                    <Link href="https://track.vpns.guide/base2.php?cloid=1002&token4=No" target="_blank"
                        className="flex h-[60px] cursor-pointer items-center gap-9 border-2 border-[#FD5522] px-10 hover:bg-[#fd5522a5] laptop:w-[450px]">
                        <Suspense fallback={<div>Loading components...
                        </div>}>
                            <RxCrossCircled className="inline text-[30px] text-red-500" />
                        </Suspense>
                        <span className="font-kantumruyPro text-[17px] font-semibold text-[#545454]">Nein, ich brauche mehr Zeit</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TestVpnPage;
