import TestVpnPage from "@/pages/TestVpnPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best VPN for India',
};
const bestVpn = ()=>{
    return(
        <TestVpnPage/>
    )
}

export default bestVpn;
