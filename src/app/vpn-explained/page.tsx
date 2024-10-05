
import VpnExplainedPage from "@/pages/VpnExplainedPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'VPN Explained',
  description: 'Learn more about our company, our mission, and the team behind our success.',
  keywords: 'About Us, WeGamble Guru, Team, Mission',
  authors: [{ name: 'WeGamble' }],
};

const vpnExplained = () => {

  return (
    <>
      <VpnExplainedPage />
    </>
  );
};

export default vpnExplained;
