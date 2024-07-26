import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" flex flex-col py-32">
      {/* top part of footer */}
      <div className="top flex mx-96">
        <div className="left w-3/5 ">
          <Image src="https://www.top10vpn.com/static/images/logo.svg" alt="company name" height={150} width={150} />
          <p className="w-3/5 pt-5 text-lg">We've been testing and reviewing VPN services since 2016. We also publish VPN research and advice to help protect your internet privacy and security.</p>
        </div>
        <div className="middle  w-1/5">
          <div className="text-base font-bold pb-5">Contact</div>
          <Link href="mailto:biswajti.basanti@gmail.com" className="text-sm hover:text-blue-700 ">
            <HiOutlineMail style={{
              display: "inline",
            }} />
            <span className="pl-1 ">
              hello@top10vpn.com
            </span>
          </Link>
          <div className="flex flex-row gap-2 pt-12">
            <Link href="https://www.twiter.com" className="bg-black rounded-full px-1 py-1">
              <FaXTwitter className="text-white" />
            </Link>
            <Link href="https://www.linkedin.com" className="bg-black rounded-full px-1 py-1">
              <FaLinkedinIn className="text-white"/>
            </Link>
            <Link href="https://www.youtube.com" className="bg-black rounded-full px-1 py-1">
              <FaYoutube className="text-white"/>
            </Link>
          </div>
        </div>
        <div className="right  w-1/5 flex flex-col">
          <div className="text-base font-bold pb-5">About</div>
          <Link href="about" className="text-sm pb-3 hover:text-blue-700">About Us</Link>
          <Link href="#" className="text-sm pb-3 hover:text-blue-700">Press</Link>
          <Link href="#" className="text-sm pb-3 hover:text-blue-700">Our VPN Experts</Link>
          <Link href="#" className="text-sm pb-3 hover:text-blue-700">Our Review Process</Link>
          <Link href="#" className="text-sm pb-3 hover:text-blue-700">How We Make Money</Link>
          <Link href="#" className="text-sm pb-3 hover:text-blue-700">Research Grant</Link>
        </div>
      </div>

      {/* bottom part of footer */}
      <div className="bottom mx-96  pt-12">
        <div className="flex pb-6">
          <Link href="#" className="border-r h-fit border-black pr-2 text-sm hover:text-blue-700">Privacy Policy</Link>
          <Link href="#" className="border-r h-fit border-black px-2 text-sm hover:text-blue-700">Privacy Policy</Link>
          <Link href="#" className="border-r h-fit border-black px-2 text-sm hover:text-blue-700">Privacy Policy</Link>
          <Link href="#" className="border-r h-fit border-black px-2 text-sm hover:text-blue-700">Privacy Policy</Link>
          <Link href="#" className="px-2 text-sm hover:text-blue-700">Privacy Policy</Link>
        </div>
        <p className="text-sm">Top10VPN.com is operated by PrivacyCo Ltd. | © 2016-2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;