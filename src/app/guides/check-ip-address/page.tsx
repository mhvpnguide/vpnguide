import { Metadata } from "next";
import CheckIPAddress from "@/pages/CheckIPAddress";

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Learn more about our company, our mission, and the team behind our success.',
  keywords: 'About Us, WeGamble Guru, Team, Mission',
  authors: [{ name: 'WeGamble' }],
};
const Page = () => {
  return (
    <CheckIPAddress/>
  );
}

export default Page
