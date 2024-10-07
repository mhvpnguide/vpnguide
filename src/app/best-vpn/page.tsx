import BestVpnPage from "@/pages/BestVpnPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best VPN of 2024',
  description: 'Learn more about our company, our mission, and the team behind our success.',
  keywords: 'VPN, Best Vpn, VPNs Guide, Private browsing, Online security, VPN services, buy, sell, discount',
  authors: [{ name: 'VPNsGuide' }],
  viewport: 'width=device-width, initial-scale=1',
  charset: 'UTF-8',
  robots: 'index, follow',
  canonical: 'https://vpns.guide/best-vpn'
  themeColor: '#f9f6ee',
};

const bestVpn = ()=>{
    return(
        <BestVpnPage/>
    )
}

export default bestVpn;