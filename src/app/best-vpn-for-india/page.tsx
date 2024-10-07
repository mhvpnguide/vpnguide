import BestVpnIndia from "@/pages/BestVpnIndia";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best VPN for India',
  description: 'Learn more about our company, our mission, and the team behind our success.',
  keywords: 'VPN, Best Vpn for India, VPNs Guide, Private browsing, Online security, VPN services in India, buy, sell, discount',
  authors: [{ name: 'VPNsGuide' }],
  viewport: 'width=device-width, initial-scale=1',
  charset: 'UTF-8',
  robots: 'index, follow',
  canonical: 'https://vpns.guide/best-vpn-for-india'
  themeColor: '#f9f6ee',
};
const bestVpn = ()=>{
    return(
        <BestVpnIndia/>
    )
}

export default bestVpn;
