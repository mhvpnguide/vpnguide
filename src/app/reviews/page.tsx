import ReviewsPage from "../../pages/ReviewsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'VPNs Reviews - VPNs Guide',
  description: '01 Oct 2024 — Read detailed Reviews about our top best VPNs',
  keywords: 'VPN, Best Vpn, VPNs Guide, Private browsing, Online security, VPN services, Review',
  authors: [{ name: 'VPNsGuide' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  canonical: 'https://vpns.guide/review',
};
const reviews = () => {
    return (
      <section className="">
        <ReviewsPage />
      </section>
    );
  };
  
  export default reviews;
