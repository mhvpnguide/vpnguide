import BestVpnPage from "@/pages/BestVpnPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best VPN',
};
const bestVpn = ()=>{
    return(
        <BestVpnPage/>
    )
}

export default bestVpn;