import HowWeMakeMoney from "../../../pages/HowWeMakeMoney";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About us',
};
const howWeMakeMoney = ()=>{
    return(
        <HowWeMakeMoney/>
    )
}

export default howWeMakeMoney;