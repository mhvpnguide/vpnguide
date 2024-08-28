import ContactPage from "../../pages/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact',
};
const contactPage = ()=>{
    return(
        <ContactPage/>
    )
}

export default contactPage;