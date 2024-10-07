import TestVpnPage from "@/pages/TestVpnPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Test VPN of Vpns Guide',
  description: 'Learn more about our company, our mission, and the team behind our success.',
  keywords: 'VPN, Best Vpn, VPNs Guide, Private browsing, Online security, VPN services, buy, sell, discount',
  authors: [{ name: 'VPNsGuide' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  canonical: 'https://vpns.guide/test-vpn',
};
const bestVpn = ()=>{
    return(
        <TestVpnPage/>
    )
}

export default bestVpn;
