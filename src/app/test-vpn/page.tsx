import TestVpnPage from "@/pages/TestVpnPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best VPN for India',
  description: 'Learn more about our company, our mission, and the team behind our success.',
  keywords: 'About Us, WeGamble Guru, Team, Mission',
  authors: [{ name: 'WeGamble' }],
};
const bestVpn = ()=>{
    return(
        <TestVpnPage/>
    )
}

export default bestVpn;
