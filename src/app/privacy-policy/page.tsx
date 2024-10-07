import PrivacyPolicy from "../../pages/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy - VPNs Guide',
  description: 'Understand our privacy policy and how we handle your personal information. Learn about data protection and your privacy rights.',
  keywords: 'VPN, Best Vpn, VPNs Guide, Private browsing, Online security, VPN services, Privacy Policy',
  authors: [{ name: 'VPNsGuide' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  canonical: 'https://vpns.guide/privacy-policy',
};
const privacyPolicy = ()=>{
    return(
        <PrivacyPolicy/>
    )
}

export default privacyPolicy;
