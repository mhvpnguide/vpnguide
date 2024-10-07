import Head from "next/head";
import AboutUS from "../../pages/About";
import ReviewLayout from "@/components/ReviewLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About us',
  description: 'Learn more about our company, our mission, and the team behind our success.',
  keywords: 'VPN, Best Vpn, VPNs Guide, Private browsing, Online security, VPN services, About Us',
  authors: [{ name: 'VPNsGuide' }],
  viewport: 'width=device-width, initial-scale=1',
  charset: 'UTF-8',
  robots: 'index, follow',
  canonical: 'https://vpns.guide/about'
  themeColor: '#f9f6ee',
};
const aboutUs = () => {
    return (
            <AboutUS />
    )
}

export default aboutUs;