import FAQ from "@/components/FAQ";
import Banner from "../components/Banner";
import WhoAreWe from "../components/WhoAreWe";
import Image from "next/image";

const HomePage = ()=> {
  return (
    <main className="flex flex-col main-bg">
      <Banner/>
      <WhoAreWe />
      <FAQ/>
    </main>
  );
}


export default HomePage;