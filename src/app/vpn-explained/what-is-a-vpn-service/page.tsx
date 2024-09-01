import WhatIsVpnService from "@/pages/WhatIsVpnService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'VPN Explained',
};
const Page = () => {
  return (
    <WhatIsVpnService/>
  );
};

export default Page;
