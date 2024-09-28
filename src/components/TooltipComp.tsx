'use client'
import { Tooltip } from "@nextui-org/react";
import { useState } from "react";

const TooltipComp = () => {
  const [ttOpen, setTTOpen] = useState(false);
  
  return (
    <Tooltip
            content={
              <p>
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
            isOpen={ttOpen}
            placement="bottom"
            classNames={{
              base: "text-right pr-5",
              content:
               "text-sm w-full tablet:w-1/2 text-justify bg-[#ECFFDC] text-gray-800 p-6",

            }}
          >
            <button
              className="text-[8px] laptop:text-xs font-semibold text-gray-600 underline"
              onMouseEnter={() => setTTOpen(true)}
              onMouseLeave={() => setTTOpen(false)}
              onClick={() => setTTOpen((prev) => !prev)}
            >
              ADVERTISER DISCLOSURE
            </button>
          </Tooltip>
  );
};

export default TooltipComp;
