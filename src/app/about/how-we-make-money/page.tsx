import HowWeMakeMoney from "../../../pages/HowWeMakeMoney";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About us',
  description: 'Learn more about our company, our mission, and the team behind our success.',
  keywords: 'About Us, WeGamble Guru, Team, Mission',
  authors: [{ name: 'WeGamble' }],
};
const howWeMakeMoney = ()=>{
    return(
        <HowWeMakeMoney/>
    )
}

export default howWeMakeMoney;