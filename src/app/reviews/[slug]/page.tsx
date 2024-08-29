import CompanyPage from '../../../pages/CompanyPage'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Reviews',
};
export default function Page({ params }: { params: { slug: string } }) {
  const {slug} = params
  return (
    <CompanyPage slug={slug}/>
  );
}