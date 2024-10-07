import CookiesPolicy from "../../pages/Cookies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Cookies Policy - VPNs Guide',
  description: 'Learn about our cookies policy and how we use cookies to enhance your experience on our website. Understand your choices regarding cookies.',
  keywords: 'VPN, Best Vpn, VPNs Guide, Private browsing, Online security, VPN services, Cokies',
  authors: [{ name: 'VPNsGuide' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  canonical: 'https://vpns.guide/cookie-policy',
};
const cookiespolicy = ()=>{
    return(
        <CookiesPolicy/>
    )
}

export default cookiespolicy;
