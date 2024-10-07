
import VpnExplainedPage from "@/pages/VpnExplainedPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'VPN Explained',
  description: 'VPN stands for Virtual Private Network. It’s a type of software that establishes secure and private connections over the internet (or any other type of public network).',
  keywords: 'VPN, Best Vpn, VPNs Guide, Private browsing, Online security, VPN services, How to use a VPN for streaming, Vpn Explained',
  authors: [{ name: 'VPNsGuide' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  canonical: 'https://vpns.guide/vpn-explained',
};

const vpnExplained = () => {

  return (
    <>
      <VpnExplainedPage />
    </>
  );
};

export default vpnExplained;
