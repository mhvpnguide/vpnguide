import Banner from "../components/Banner";
import WhoAreWe from "../components/WhoAreWe";
import Image from "next/image";

const HomePage = ()=> {
  return (
    <main className="flex flex-col main-bg">
      <Banner/>
      <WhoAreWe />
    </main>
  );
}


export default HomePage;