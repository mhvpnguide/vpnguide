import Head from "next/head";
import AboutUS from "../../pages/About";
import ReviewLayout from "@/components/ReviewLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About us',
};
  
const aboutUs = () => {
    return (
            <AboutUS />
    )
}

export default aboutUs;