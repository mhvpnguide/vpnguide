import CookiesPolicy from "../../pages/Cookies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Cookies Policy - VPNs Guide',
  description: 'Learn about our cookies policy and how we use cookies to enhance your experience on our website. Understand your choices regarding cookies.',
  keywords: 'VPN, Best Vpn, VPNs Guide, Private browsing, Online security, VPN services, Cokies',
  authors: [{ name: 'VPNsGuide' }],
  viewport: 'width=device-width, initial-scale=1',
  charset: 'UTF-8',
  robots: 'index, follow',
  canonical: 'https://vpns.guide/cookie-policy'
  themeColor: '#f9f6ee',
};
const cookiespolicy = ()=>{
    return(
        <CookiesPolicy/>
    )
}

export default cookiespolicy;
