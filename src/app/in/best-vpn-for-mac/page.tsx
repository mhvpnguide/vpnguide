// BestVpnPage.tsx
import BestesVpnPage from "@/pages/InBestVpnMac";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "The 10 Best VPN Providers for Macbook in 2025",  // Custom title for this page
  description: "Learn more about the best VPN services and how they protect your online privacy.",
  keywords: "VPN, Best VPN, VPNs Guide, Private browsing, Online security, VPN services, buy, sell, discount",
};

const BestVpn = () => {
  return (
    <>
      <BestesVpnPage />
    </>
  );
};

export default BestVpn;
