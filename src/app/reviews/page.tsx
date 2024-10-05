import ReviewsPage from "../../pages/ReviewsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'VPNs Reviews - VPNs Guide',
  description: 'Read detailed Reviews about our top best VPNs',
  keywords: 'About Us, WeGamble Guru, Team, Mission',
  authors: [{ name: 'WeGamble' }],
};
const reviews = () => {
    return (
      <section className="">
        <ReviewsPage />
      </section>
    );
  };
  
  export default reviews;
