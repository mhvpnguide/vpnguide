import { Metadata } from "next";
import CheckIPAddress from "@/pages/CheckIPAddress";

export const metadata: Metadata = {
  title: 'Guides',
};
const Page = () => {
  return (
    <CheckIPAddress/>
  );
}

export default Page
