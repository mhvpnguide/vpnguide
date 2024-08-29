
import VpnExplainedPage from "@/pages/VpnExplainedPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'VPN Explained',
};

const vpnExplained = () => {

  return (
    <>
      <VpnExplainedPage />
    </>
  );
};

export default vpnExplained;
