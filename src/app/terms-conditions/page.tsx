import Term_Condition from "../../pages/Term_Condition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms and Conditions - VPNs Guide',
  description: 'Read the terms and conditions of using our services. Learn about your rights and responsibilities when using our website.',
  keywords: 'VPN, Best Vpn, VPNs Guide, Private browsing, Online security, VPN services, Terms and Condition',
  authors: [{ name: 'VPNsGuide' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};
const termCondition = ()=>{
    return(
        <Term_Condition/>
    )
}

export default termCondition;
