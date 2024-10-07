import CompanyPage from '../../../pages/CompanyPage'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Review',
  description: '01 Oct 2024 — FastestVPN is one of the best value VPNs around. It works well for streaming and is user-friendly enough for beginners.',
  keywords: 'VPN, Best Vpn, VPNs Guide, Private browsing, Online security, VPN services, Review',
  authors: [{ name: 'VPNsGuide' }],
  viewport: 'width=device-width, initial-scale=1',
  charset: 'UTF-8',
  robots: 'index, follow',
  canonical: 'https://vpns.guide/review/',
};
export default function Page({ params }: { params: { slug: string } }) {
  const {slug} = params
  return (
    <CompanyPage slug={slug}/>
  );
}