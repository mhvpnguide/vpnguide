import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" flex flex-col py-28 max-w-full">
      
      {/* top part of footer */}
      <div className="flex px-3 tablet:px-10 4k:mx-[660px] flex-col tablet:flex-row">
        {/* left */}
        <div className="order-1 mb-14 tablet:w-[40%] laptop:w-[50%]">
          <Image src="https://www.top10vpn.com/static/images/logo.svg" alt="company name" height={150} width={150} />
          <p className="pt-5 text-lg laptopl:w-[80%]">We've been testing and reviewing VPN services since 2016. We also publish VPN research and advice to help protect your internet privacy and security.</p>
        </div>
        {/* middle */}
        <div className="order-3 tablet:order-2 tablet:w-[35%] laptop:w-[30%] tablet:mx-10" >
          <div className="text-lg tablet:text-base font-bold mb-6">Contact</div>
          <Link href="mailto:biswajti.basanti@gmail.com" className="text-sm hover:text-blue-700">
            <HiOutlineMail className="inline text-xl"/>
            <span className="pl-1 ">
              hello@top10vpn.com
            </span>
          </Link>
          <div className="flex flex-row gap-2 tablet:gap-4 mt-4">
            <Link href="https://www.twiter.com" className="bg-black rounded-full p-2">
              <FaXTwitter className="text-white" />
            </Link>
            <Link href="https://www.linkedin.com" className="bg-black rounded-full p-2">
              <FaLinkedinIn className="text-white"/>
            </Link>
            <Link href="https://www.youtube.com" className="bg-black rounded-full p-2">
              <FaYoutube className="text-white"/>
            </Link>
          </div>
        </div>
         {/* right */}
        <div className="flex flex-col order-2 tablet:order-3 tablet:w-[25%] laptop:w-[20%]">
          <div className="text-lg tablet:text-base font-bold mb-6">About</div>
          <Link href="about" className="text-base tablet:text-sm mb-4 tablet:mb-2 hover:text-blue-700">About Us</Link>
          <Link href="#" className="text-base tablet:text-sm mb-4 tablet:mb-2 hover:text-blue-700">Press</Link>
          <Link href="#" className="text-base tablet:text-sm mb-4 tablet:mb-2 hover:text-blue-700">Our VPN Experts</Link>
          <Link href="#" className="text-base tablet:text-sm mb-4 tablet:mb-2 hover:text-blue-700">Our Review Process</Link>
          <Link href="#" className="text-base tablet:text-sm mb-4 tablet:mb-2 hover:text-blue-700">How We Make Money</Link>
          <Link href="#" className="text-base tablet:text-sm mb-4 tablet:mb-2 hover:text-blue-700">Research Grant</Link>
        </div>
      </div>

      {/* bottom part of footer */}
      <div className="flex px-3 tablet:px-10 4k:mx-[660px] flex-col mt-14 ">
        <div className="flex flex-wrap pb-4 gap-2">
          <Link href="/privacy-policy" className="border-r h-fit border-black text-sm hover:text-blue-700 pr-2">Privacy Policy</Link>
          <Link href="/cookie-policy" className="border-r h-fit border-black text-sm hover:text-blue-700 pr-2">Cookie Policy</Link>
          <Link href="/terms-conditions" className="text-sm hover:text-blue-700 pr-2">Terms of Use</Link>
        </div>
        <p className="text-sm mb-4">Top10VPN.com is operated by PrivacyCo Ltd. | © 2016-2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;