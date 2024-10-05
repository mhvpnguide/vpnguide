import CookiesPolicy from "../../pages/Cookies";
import Guides from "../../pages/Guides";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Learn more about our company, our mission, and the team behind our success.',
  keywords: 'About Us, WeGamble Guru, Team, Mission',
  authors: [{ name: 'WeGamble' }],
};
const guides = ()=>{
    return(
        <Guides/>
    )
}

export default guides;