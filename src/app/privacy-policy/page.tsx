import PrivacyPolicy from "../../pages/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy',
};
const privacyPolicy = ()=>{
    return(
        <PrivacyPolicy/>
    )
}

export default privacyPolicy;