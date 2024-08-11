"use client";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import Link from "next/link";
import CustomBreadcrumb from "@/components/Breadcrumb";

const TopCard = ({ title }: { title: string }) => {
  const defaultContent =
    "Simon Migliano is a recognized world expert in VPNs. He's tested hundreds of VPN services and his research has featured on the BBC, The New York Times and more.";

  return (
    <>
      <div className="bg-blue-100">
        <div className="mb-5 tablet:pt-[40px] laptop:pl-[50px] px-3">
          <CustomBreadcrumb />
        </div>

        <div className="pt-2 pb-14 px-3 laptop:pl-[20%] mb-10">
          <p className="text-sm mb-5">
            Top10VPN is editorially independent. We may{" "}
            <Link href="/about/how-we-make-money/">earn commissions</Link> if
            you buy a VPN via our links.
          </p>
          {/* <p className="text-3xl font-bold">What Is a VPN (Virtual Private Network)?</p> */}
          <p className="text-3xl tablet:text-4xl font-bold">{title}</p>
        </div>
      </div>
    </>
  );
};

export default TopCard;
