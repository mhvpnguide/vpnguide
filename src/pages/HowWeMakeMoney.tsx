import Link from "next/link";
import Image from "next/image";
import Image1 from "next/image";
import TopCard from "../components/TopCard";
const HowWeMakeMoney = () => {
  return (
    <section className="laptop:flex flex-col laptop:justify-center laptop:items-center">
      <div className="w-full">
        <TopCard title="How we Make Money" />
      </div>
      <div className="px-3 laptop:w-3/4 ">
        <div className="flex flex-col justify-center items-center  laptop:flex tablet:flex ">
          <div className="h-[230px] tablet:h-[250px] laptop:h-[300px] aspect-video relative mt-5 mb-10">
            <Image
              src="/Assests/About/How-we-make-money/How_We_Make_Money.png"
              alt="VPN Banner"
              fill
              className="mt-4 tablet:mt-6 laptop:mt-8"
            />
          </div>
          <h2 className="text-3xl font-bold w-full mb-6">Our values</h2>
          <div className="tablet:flex tablet:justify-center tablet:items-center">
            <div className="tablet:w-2/3">
              <p className="text-left text-lg mb-4  font-medium">
                We built VPNs Guide around our core principles of impartiality,
                honesty and transparency. Your trust is of the utmost importance
                to us, which is why we&apos;ll always be straight-up about how we
                test and review VPNs. We launched it to improve the VPN
                industry, after realizing the market was flooded with hundreds
                of unsafe applications and review websites that weren&apos;t
                adequately testing them.
              </p>
              <p className="text-left text-lg mb-4  font-medium">
                Every VPN on our website has gone through our rigorous and{" "}
                <Link href="/about/how-we-review-vpn" className="text-bluelink hover:underline">
                  in-depth review VPN process.
                </Link>
                This means you can buy or download with confidence, knowing that our 
                VPN reviewsare based on our own testing results and experience.
              </p>
              <p className="text-left text-lg mb-4  font-medium">
                On this page, and throughout our website, we want to be entirely
                upfront about how we operate, how we make money, and how we keep
                the site a free resource for our visitors.
              </p>
              <p className="text-left text-lg mb-4  font-medium">
                We don&apos;t accept payment to provide positive reviews, and
                providers will never have any input in how we choose the Best
                Vpn Services. Our aim is to put you, the reader, first and foremost at all times.
              </p>
            </div>
            <ul className="tablet:w-1/3">
              <li className="flex justify-center items-center gap-3  font-semibold w-full text-[16px] pl-4 mb-4">
                <div className="w-[40px] h-[40px] relative ">
                  <Image1
                    src="/Assests/About/How-we-make-money/cross_red.png"
                    alt="VPN Banner"
                    fill
                    className=""
                  />
                </div>
                <span> We will never accept money to review a product</span>
              </li>
              <li className="flex justify-center items-center gap-3  font-semibold w-full text-[16px] pl-4 mb-4">
                <div className="w-[40px] h-[40px] relative ">
                  <Image1
                    src="/Assests/About/How-we-make-money/cross_red.png"
                    alt="VPN Banner"
                    fill
                    className=""
                  />
                </div>
                <span>
                  {" "}
                  We will never accept money to change a product review
                </span>
              </li>
              <li className="flex justify-center items-center gap-3  font-semibold w-full text-[16px] pl-4 mb-4">
                <div className="w-[40px] h-[40px] relative ">
                  <Image1
                    src="/Assests/About/How-we-make-money/cross_red.png"
                    alt="VPN Banner"
                    fill
                    className=""
                  />
                </div>
                <span>
                  {" "}
                  We will never accept money to turn a blind eye to an issue or
                  flaw
                </span>
              </li>
              <li className="flex justify-center items-center gap-3  font-semibold w-full text-[16px] pl-4 mb-4">
                <div className="w-[40px] h-[40px] relative ">
                  <Image1
                    src="/Assests/About/How-we-make-money/cross_red.png"
                    alt="VPN Banner"
                    fill
                    className=""
                  />
                </div>
                <span>
                  {" "}
                  We will never accept money to bias our research or
                  investigations
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center  tablet:mt-10 ">
          <div>
            <h2 className="text-3xl font-bold w-full mb-6">
              Our Business Model
            </h2>
            <p className="text-left text-lg mb-4  font-medium">
              So, how do we make money? We receive fees from some of the VPN
              services we refer new subscribers to. These referral fees are also
              known as affiliate commissions.
            </p>
            <p className="text-left text-lg mb-4  font-medium">
              When you click on a link or a button that takes you to a
              provider&apos;s website, and you then purchase a VPN subscription, we
              may receive compensation for having referred you to them.
            </p>
            <p className="text-left text-lg mb-4  font-medium">
              Crucially, referral fees are only negotiated by our Advertising
              team{" "}
              <b>
                after our VPN researchers and testers have fully conducted all
                tests.
              </b>{" "}
              Money plays no factor in the review process.
            </p>
            <p className="text-left text-lg mb-4  font-medium">
              Referral fees{" "}
              <b>
                do not influence our software review ratings and
                recommendations,
              </b>{" "}
              with our VPN research and testing team firewalled from our
              Advertising team.
            </p>
            <p className="text-left text-lg mb-4  font-medium">
              However, the compensation we receive may influence how, where, and
              in what order products appear solely on our paid search comparison
              pages. These specific pages are separate from our editorial
              content, contain ad listings, and are only accessible via search
              engine advertisements.
            </p>
            <p className="text-left text-lg mb-4  font-medium">
              You may have also noticed that we haven&apos;t reviewed every single
              VPN product on the market. It&apos;s our intention to cover as many as
              possible, and we&apos;re getting there, but unfortunately we can&apos;t
              promise to have total coverage.
            </p>
            <p className="text-left text-lg mb-4  font-medium">
              Why are we telling you all of this? We aim to be the most
              knowledgeable, reliable, and trustworthy VPN resource on the web,
              and that trust begins right here on this page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeMakeMoney;
