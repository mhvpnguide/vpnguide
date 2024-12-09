import BestesVpnPage from "@/pages/BestesVpnPage";
import { Metadata } from "next";
import Head from "next/head";

const BestVpn = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Learn more about our company, our mission, and the team behind our success." />
        <meta name="keywords" content="VPN, Best Vpn, VPNs Guide, Private browsing, Online security, VPN services, buy, sell, discount" />
        <meta name="robots" content="index, follow" />
      </Head>
      <BestesVpnPage />
    </>
  );
};

export default BestVpn;
