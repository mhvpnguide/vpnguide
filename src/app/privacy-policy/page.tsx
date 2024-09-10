import PrivacyPolicy from "../../pages/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy - VPNs Guide',
  description: 'Understand our privacy policy and how we handle your personal information. Learn about data protection and your privacy rights.',
};
const privacyPolicy = ()=>{
    return(
        <PrivacyPolicy/>
    )
}

export default privacyPolicy;
