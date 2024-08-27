"use client";
import { Accordion, AccordionItem, Avatar, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import CustomBreadcrumb from "../components/Breadcrumb";

const TopCard = ({ title }: { title: string }) => {
  return (
    <>
      <div className="bg-blue-100">
        <div className="mb-2 tablet:pt-[40px] laptop:pl-[50px] px-3">
          <CustomBreadcrumb />
        </div>

        <div className=" flex justify-center pt-1  mb-2">
          <p className="text-3xl tablet:text-4xl font-bold">{title}</p>
        </div>
        <div className="flex justify-end pb-4 pr-10">
          <Tooltip
            content={
              <p className="">
                It is important to us that you will find the perfect VPN service
                for your needs - that is the aim and purpose of this site. We
                aim to be 100% transparent about our reviewing process (more
                about that in the &apos;How we review&apos; section on this
                site). We earn money via commissions from the VPN companies
                featured on this site, which we receive when you click our links
                and make purchases. This impacts the ranking, score and order in
                which the services we work with (and their products) are
                presented. VPN listings on this page DO NOT imply endorsement.
                We do not feature all of the available VPN services, only those
                we have reviewed. We strive to keep this site constantly
                updated, but cannot guarantee the accuracy of the information at
                all times.
              </p>
            }
            placement="bottom"
            classNames={{
              base: ["text-right pr-5"],
              content: [
                "text-sm text-gray-600 w-1/2 text-justify bg-[#4B5563] text-white p-6",
              ],
            }}
          >
            <span className="text-xs font-semibold text-gray-600 underline">
              ADEVRTISER DISCLOSURE
            </span>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default TopCard;
