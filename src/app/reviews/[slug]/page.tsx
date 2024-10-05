import CompanyPage from '../../../pages/CompanyPage'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Reviews',
  description: 'Learn more about our company, our mission, and the team behind our success.',
  keywords: 'About Us, WeGamble Guru, Team, Mission',
  authors: [{ name: 'WeGamble' }],
};
export default function Page({ params }: { params: { slug: string } }) {
  const {slug} = params
  return (
    <CompanyPage slug={slug}/>
  );
}