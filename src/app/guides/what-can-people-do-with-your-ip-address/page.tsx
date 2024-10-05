import WhatCanPeopleDo from "@/pages/WhatCanPeopleDoWithYourIp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Learn more about our company, our mission, and the team behind our success.',
  keywords: 'About Us, WeGamble Guru, Team, Mission',
  authors: [{ name: 'WeGamble' }],
};
const Page = () => {
  return (
    <WhatCanPeopleDo/>
  );
}

export default Page
