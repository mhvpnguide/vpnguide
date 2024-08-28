import Term_Condition from "../../pages/Term_Condition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'terms',
};
const termCondition = ()=>{
    return(
        <Term_Condition/>
    )
}

export default termCondition;