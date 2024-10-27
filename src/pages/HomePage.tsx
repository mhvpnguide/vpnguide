import dynamic from "next/dynamic";
import { Suspense } from "react";

import Banner from "@/components/Banner";
// Dynamically import the components
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const WhoAreWe = dynamic(() => import("@/components/WhoAreWe"), { ssr: false });
const HomePageVpn = dynamic(() => import("@/components/HomePageVpn"), { ssr: false });

const HomePage = () => {
  return (
    <main className="flex flex-col main-bg">
      <Banner />
      <WhoAreWe />
      <Suspense fallback={<div>Loading content...</div>}>
        <HomePageVpn/>
        <FAQ />
      </Suspense>
    </main>
  );
}


export default HomePage;