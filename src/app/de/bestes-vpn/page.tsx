import BestesVpnPage from "@/pages/BestesVpnPage";
import { Metadata } from "next";
import Head from "next/head";

const BestVpn = () => {
  return (
    <>
      <Head>
        <title>Best VPN Services - Find Your Perfect VPN</title> {/* Set individual title */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Learn more about the best VPN services and how they protect your online privacy." />
        <meta name="keywords" content="VPN, Best VPN, VPNs Guide, Private browsing, Online security, VPN services, buy, sell, discount" />
        <meta name="robots" content="index, follow" />
      </Head>
      <BestesVpnPage />
    </>
  );
};

export default BestVpn;
