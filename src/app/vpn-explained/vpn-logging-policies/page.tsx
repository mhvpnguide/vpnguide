import VpnLoggingPolicies from "@/pages/VpnLoggingPolicies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'VPN Explained',
};
const Page = () => {
  return (
    <VpnLoggingPolicies/>
  );
};

export default Page;
