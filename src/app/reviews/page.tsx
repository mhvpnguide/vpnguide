import ReviewsPage from "../../pages/ReviewsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Reviews',
};
const reviews = () => {
    return (
      <section className="">
        <ReviewsPage />
      </section>
    );
  };
  
  export default reviews;