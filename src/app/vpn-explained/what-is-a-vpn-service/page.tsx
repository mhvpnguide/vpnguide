import WhatIsVpnService from "@/pages/WhatIsVpnService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'VPN Explained',
  description: 'Learn more about our company, our mission, and the team behind our success.',
  keywords: 'About Us, WeGamble Guru, Team, Mission',
  authors: [{ name: 'WeGamble' }],
};
const Page = () => {
  return (
    <WhatIsVpnService/>
  );
};

export default Page;
