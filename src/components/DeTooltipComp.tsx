'use client'
import { Tooltip } from "@nextui-org/react";
import { useState } from "react";

const TooltipComp = () => {
  const [ttOpen, setTTOpen] = useState(false);
  
  return (
    <Tooltip
            content={
              <p>
              Es ist uns wichtig, dass Sie den perfekten VPN-Dienst für Ihre Bedürfnisse finden – das ist das Ziel und der Zweck dieser Seite
              . Wir bemühen uns, 100 % transparent über unseren unparteiischen Bewertungsprozess zu sein. Wir können Geld durch Provisionen von 
              den auf dieser Website vorgestellten VPN-Anbietern verdienen. Diese Provisionen erhalten wir, wenn Sie auf unsere Links klicken 
              und Einkäufe tätigen. Dies beeinflusst die Bewertungsreihenfolge nicht. Wir bemühen uns, diese Seite ständig aktuell zu halten, 
              können jedoch die Genauigkeit der Informationen nicht jederzeit garantieren.  
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
