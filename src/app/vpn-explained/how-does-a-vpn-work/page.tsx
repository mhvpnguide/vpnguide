import HowDoesVpnWork from "@/pages/HowDoesVpnWork";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'VPN Explained',
  description: 'Learn more about our company, our mission, and the team behind our success.',
  keywords: 'About Us, WeGamble Guru, Team, Mission',
  authors: [{ name: 'WeGamble' }],
};
const Page = () => {
  return (
    <HowDoesVpnWork/>
  );
};

export default Page;
