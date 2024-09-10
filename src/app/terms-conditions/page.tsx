import Term_Condition from "../../pages/Term_Condition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms and Conditions - VPNs Guide',
  description: 'Read the terms and conditions of using our services. Learn about your rights and responsibilities when using our website.',
};
const termCondition = ()=>{
    return(
        <Term_Condition/>
    )
}

export default termCondition;
