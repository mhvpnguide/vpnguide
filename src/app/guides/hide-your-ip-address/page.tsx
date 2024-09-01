import HideIPAddress from "@/pages/HideYourIP";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Guides',
};
const Page = () => {
  return (
    <HideIPAddress/>
  );
}

export default Page
