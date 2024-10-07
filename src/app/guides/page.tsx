import CookiesPolicy from "../../pages/Cookies";
import Guides from "../../pages/Guides";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Learn how to stay safe, private, and free online with this collection of comprehensive guides from our VPN experts.',
  keywords: 'VPN, Best Vpn, VPNs Guide, Private browsing, Online security, VPN services, How to use a VPN for streaming',
  authors: [{ name: 'VPNsGuide' }],
  viewport: 'width=device-width, initial-scale=1',
  charset: 'UTF-8',
  robots: 'index, follow',
  canonical: 'https://vpns.guide/guides'
  themeColor: '#f9f6ee',
};
const guides = ()=>{
    return(
        <Guides/>
    )
}

export default guides;