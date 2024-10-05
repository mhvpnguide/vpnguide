import IsMyVPNWorking from "@/pages/IsMyVpnWorking";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Learn more about our company, our mission, and the team behind our success.',
  keywords: 'About Us, WeGamble Guru, Team, Mission',
  authors: [{ name: 'WeGamble' }],
};
const Page = () => {
    return (
        <IsMyVPNWorking/>
    );
}

export default Page
