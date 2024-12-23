import Image from "next/image";
import { GiTrophyCup } from "react-icons/gi";
import { CiCreditCardOff } from "react-icons/ci";
import { BsGift, BsSpeedometer2 } from "react-icons/bs";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="flex flex-col items-center justify-center pt-12 pb-8 mx-[16px] laptopl:py-28 laptopl:mx-32">
            <div className="text-[34px] tablet:text-4xl laptop:text-5xl font-semibold mb-7 text-black text-center">
                VPN Advice You Can Trust
            </div>
            <div className="text-lg tablet:text-base laptop:text-lg font-medium text-grey text-center mb-2 tablet:pt-5">
                Take control of your internet privacy and security with our <Link href="/reviews" className="text-bluelink hover:underline">unbiased VPN reviews</Link> and independent advice.
            </div>
            <div className="h-[200px] tablet:h-[250px] laptop:h-[280px] mb-10 aspect-video relative">
                <Image src="/Assests/Homepage/Homepage_Header.png" alt="VPN Banner" fill className="mt-4 tablet:mt-6 laptop:mt-8" />
            </div>
            <div className="flex flex-col w-full px-3 tablet:grid tablet:grid-cols-1 tablet:w-1/2 laptop:grid laptop:grid-cols-2 laptop:w-2/3 laptopl:flex laptopl:flex-row laptopl:w-full 4k:flex 4k:flex-row 4k:w-1/2 gap-4 mt-4 tablet:mt-6 laptop:mt-8 ">
                <Link href="#" className="bg-white w-full pl-[12px] p-3 pr-[20px] mb-3 font-semibold rounded-3xl shadow-custom transition transform active:-translate-y-2 active:shadow-custom-active text-black flex justify-start items-center gap-3 text-center hovereff">
                    <GiTrophyCup className="text-3xl" />
                    <span className="text-[18px] pl-1">Best VPNs of 2024</span>
                </Link>
                <Link href="#" className="bg-white w-full pl-[12px] p-3 pr-[20px] mb-3 font-semibold rounded-3xl shadow-custom transition transform active:-translate-y-2 active:shadow-custom-active text-black flex justify-start items-center gap-3 text-center hovereff">
                    <CiCreditCardOff className="text-3xl" />
                    Best Free VPNs
                </Link>
                <Link href="#" className="bg-white w-full pl-[12px] p-3 pr-[20px] mb-3 font-semibold rounded-3xl shadow-custom transition transform active:-translate-y-2 active:shadow-custom-active text-black flex justify-start items-center gap-3 text-center hovereff">
                    <BsGift className="text-3xl" />
                    Best VPN Free Trials
                </Link>
                <Link href="#" className="bg-white w-full pl-[12px] p-3 pr-[20px] mb-3 font-semibold rounded-3xl shadow-custom transition transform active:-translate-y-2 active:shadow-custom-active text-black flex justify-start items-center gap-3 text-center hovereff">
                    <BsSpeedometer2 className="text-3xl" />
                    Fastest VPNs
                </Link>
            </div>
        </section>
    );
}

export default Banner;
