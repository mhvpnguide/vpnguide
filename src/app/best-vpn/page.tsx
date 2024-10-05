import BestVpnPage from "@/pages/BestVpnPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best VPN',
  description: 'Learn more about our company, our mission, and the team behind our success.',
  keywords: 'About Us, WeGamble Guru, Team, Mission',
  authors: [{ name: 'WeGamble' }],
};

const bestVpn = ()=>{
    return(
        <BestVpnPage/>
    )
}

export default bestVpn;