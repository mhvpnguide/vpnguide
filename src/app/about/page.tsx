import Head from "next/head";
import AboutUS from "../../pages/About";
import ReviewLayout from "@/components/ReviewLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About us',
  description: 'Learn more about our company, our mission, and the team behind our success.',
  keywords: 'About Us, WeGamble Guru, Team, Mission',
  authors: [{ name: 'WeGamble' }],
};
const aboutUs = () => {
    return (
            <AboutUS />
    )
}

export default aboutUs;