import IsMyVPNWorking from "@/pages/IsMyVpnWorking";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Guides',
};
const Page = () => {
    return (
        <IsMyVPNWorking/>
    );
}

export default Page
