import CookiesPolicy from "../../pages/Cookies";
import Guides from "../../pages/Guides";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Guides',
};
const guides = ()=>{
    return(
        <Guides/>
    )
}

export default guides;