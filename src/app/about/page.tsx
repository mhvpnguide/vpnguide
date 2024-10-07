import Head from "next/head";
import AboutUS from "../../pages/About";
import ReviewLayout from "@/components/ReviewLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About us',
  description: 'VPNsGUIDE is an independent VPN review website. We provide detailed VPN analysis and research to help protect your internet privacy and security.',
  keywords: 'VPN, Best Vpn, VPNs Guide, Private browsing, Online security, VPN services, About Us',
  authors: [{ name: 'VPNsGuide' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  canonical: 'https://vpns.guide/about',
};
const aboutUs = () => {
    return (
            <AboutUS />
    )
}

export default aboutUs;