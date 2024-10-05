import CookiesPolicy from "../../pages/Cookies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Cookies Policy - VPNs Guide',
  description: 'Learn about our cookies policy and how we use cookies to enhance your experience on our website. Understand your choices regarding cookies.',
  keywords: 'About Us, WeGamble Guru, Team, Mission',
  authors: [{ name: 'WeGamble' }],
};
const cookiespolicy = ()=>{
    return(
        <CookiesPolicy/>
    )
}

export default cookiespolicy;
