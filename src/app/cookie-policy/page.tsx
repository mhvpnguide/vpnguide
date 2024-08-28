import CookiesPolicy from "../../pages/Cookies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Cookies',
};
const cookiespolicy = ()=>{
    return(
        <CookiesPolicy/>
    )
}

export default cookiespolicy;