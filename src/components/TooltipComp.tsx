'use client'
import { Tooltip } from "@nextui-org/react";
import { useState } from "react";

const TooltipComp = () => {
  const [ttOpen, setTTOpen] = useState(false);
  
  return (
    <Tooltip
            content={
              <p>
                It is important to us that you find the perfect VPN service for your needs—that is the goal and purpose of this page.  
We strive to be 100% transparent about our unbiased review process. We may earn money through commissions from the VPN providers featured on this website. These commissions are earned when you click on our links and make purchases. This does not influence the ranking order.  
We make every effort to keep this page up to date; however, we cannot guarantee the accuracy of the information at all times.
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
