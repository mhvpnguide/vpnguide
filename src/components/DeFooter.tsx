import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const DeFooter = () => {
  return (
    <>
      <footer className=" flex flex-col pt-16 max-w-full border-t border-gray-300 ">
        {/* top part of footer */}
        <div className="flex px-3 tablet:px-10 4k:mx-[200px] flex-col tablet:flex-row">
          {/* left */}
          <div className="order-1 mb-14 tablet:w-[40%] laptop:w-[50%]">
            <div className="flex justify-start items-center gap-2 text-2xl">
              <Image src="/logo.png" alt="logo" height={50} width={50} />
              <p className="font-bold text-inherit">VPNs GUIDE</p>
            </div>
            <p className="pt-5 text-[16px] laptop:text-[16px] mobile:text-[12px] laptop:w-[80%]">Unsere Mission ist es, sichere, schnelle und private Surferlebnisse zu bieten und Nutzer mit zuverlässigen VPN-Diensten zu unterstützen, um ihre Online-Aktivitäten weltweit zu schützen.</p>
          </div>
          {/* middle */}
          <div className="order-3 tablet:order-2 tablet:w-[35%] laptop:w-[30%] tablet:mx-10">
            <div className="text-lg tablet:text-base font-bold mb-6">
            Kontakt
            </div>
            <Link
              href="mailto:mhvpnguide@gmail.com"
              className="text-sm hover:text-blue-700"
            >
              <HiOutlineMail className="inline text-xl" />
              <span className="pl-1 ">mhvpnguide@gmail.com</span>
            </Link>
            <div className="flex flex-row gap-3 tablet:gap-4 mt-5 mb-6 laptop:mb-0">
              <Link href="/contact-us" className="bg-black rounded-full p-2" aria-label="Twitter">
                <FaXTwitter className="text-white" />
              </Link>
              <Link href="/contact-us" className="bg-black rounded-full p-2" aria-label="LinkedIn">
                <FaLinkedinIn className="text-white" />
              </Link>
              <Link href="/contact-us" className="bg-black rounded-full p-2" aria-label="Youtube">
                <FaYoutube className="text-white" />
              </Link>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col order-2 tablet:order-3 tablet:w-[25%] laptop:w-[20%]">
            <div className="text-lg tablet:text-base font-bold mb-6">Mehr</div>
            <Link
              href="/about"
              className="text-base tablet:text-sm mb-4 tablet:mb-2 hover:text-blue-700"
            >
              Über uns
            </Link>
            <Link
              href="/about/how-we-review-vpn"
              className="text-base tablet:text-sm mb-4 tablet:mb-2 hover:text-blue-700"
            >
              Unser Bewertungsprozess
            </Link>
            <Link
              href="/about/how-we-make-money"
              className="text-base tablet:text-sm mb-4 tablet:mb-2 hover:text-blue-700"
            >
              Wie wir Geld verdienen
            </Link>
          </div>
        </div>

        {/* bottom part of footer */}
        <div className="flex px-3 tablet:px-10 4k:mx-[200px] flex-col ">
          <div className="flex flex-wrap pb-4 gap-2">
            <Link
              href="/privacy-policy"
              className="border-r h-fit border-black text-sm hover:text-blue-700 pr-2"
            >
              Datenschutzbestimmungen
            </Link>
            <Link
              href="/cookie-policy"
              className="border-r h-fit border-black text-sm hover:text-blue-700 pr-2"
            >
              Cookie-Richtlinie
            </Link>
            <Link
              href="/terms-conditions"
              className="text-sm hover:text-blue-700 pr-2"
            >
              Nutzungsbedingungen
            </Link>
          </div>
        </div>
        <h6 className="text-center">
         ©2024 VPNsGuide | Alle Rechte vorbehalten
        </h6>
      </footer>
    </>
  );
};

export default DeFooter;
