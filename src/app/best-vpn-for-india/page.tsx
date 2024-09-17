import BestVpnPage from "@/pages/BestVpnIndia";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best VPN for India',
};
const bestVpn = ()=>{
    return(
        <BestVpnIndia/>
    )
}

export default bestVpn;
