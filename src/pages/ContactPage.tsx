import ContactForm from "../components/ContactForm";
import { MdOutlinePhone } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";
import Link from "next/link";
import TopCard from "../components/TopCard";

const ContactPage = () => {
  return (
    <section className="about-main   laptop:px-5 px-3 laptop:w-full">
      <div className="w-full">
        <TopCard title="Contact Us" />
      </div>
      <div className="mt-24 flex flex-col gap-8 laptop:flex laptop:flex-row laptop:justify-center laptop:items-center laptop:px-20">
        <div className="laptop:w-1/2">
          <ContactForm />
        </div>
        <div className="laptop:w-1/2">
          <h3 className="font-bold text-xl mb-8">
            Don&apos;t like filling out forms?Here are other ways to connect with us:
          </h3>
          <ul className="mb-8">
            <li className="flex text-lg mb-6 gap-3 justify-start items-center">
              <MdOutlinePhone className="text-xl" />
              <span>+44(0)2034680724</span>
            </li>
            <li className="flex text-lg mb-6 gap-3 justify-start items-center">
              <SlEnvolope className="text-xl" />
              <span>mhvpnguide@gmail.com</span>
            </li>
            <li className="flex text-lg mb-6 gap-3 justify-start items-center">
              <MdOutlineLocationOn className="text-5xl laptop:text-2xl" />
              <span>
                Fourth Floor 33 Great Sutton Street London EC1V 0DX UK
              </span>
            </li>
          </ul>
          <div>
            <p className="mb-3">
              <b>Company Information</b>
            </p>
            <div>
              Vpnguide is part of{" "}
              <Link href="#" className="text-bluelink hover:underline">
                PrivacyCo Ltd.
              </Link>
              , registered in England & Wales with Company No. 09435976 and VAT
              Registration No. 211062276.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
