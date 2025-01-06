// BestVpnPage.tsx
import BestesVpnPage from "@/pages/InBestVpn";
import { Metadata } from "next";
import Head from "next/head";
import OptinMonster from "./OptinMonster";

export const metadata: Metadata = {
  title: "Compare the Best VPN Providers for India 2025",  // Custom title for this page
  description: "Learn more about the best VPN services and how they protect your online privacy.",
  keywords: "VPN, Best VPN, VPNs Guide, Private browsing, Online security, VPN services, buy, sell, discount",
};

const BestVpn = () => {
  return (
    <>
      <BestesVpnPage />
      <OptinMonster/>
    </>
  );
};

export default BestVpn;
