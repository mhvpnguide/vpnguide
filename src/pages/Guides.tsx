import Link from "next/link";
import Image from "next/image";
import TopCard from "../components/TopCard";

interface GuidesData {
  name: string;
  image: string;
  link: string;
}

const guidesData: GuidesData[] = [
  {
    name: "How to hide your ip address",
    image:
      "/Assests/Guides/Guides_2.png",
    link: "hide-your-ip-address",
  },
  {
    name: "How to check your ip address",
    image:
      "/Assests/Guides/Guides_1.png",
    link: "check-ip-address",
  },
  {
    name: "what can someone do with your ip address",
    image:
      "/Assests/Guides/Guides_4.pngp",
    link: "what-can-people-do-with-your-ip-address",
  },
  {
    name: "How to check if your vpn is working",
    image:
      "/Assests/Guides/Guides_3.png",
    link: "is-my-vpn-working",
  },
];

const Guides = () => {
  return (
    <section className="w-full laptop:justify-center laptop:items-center">
      <TopCard title="VPN Guides & Resources" />
      <div className="flex flex-col laptop:flex-row laptop:flex-wrap gap-2 laptop:gap-3 pl-[1%] laptop:w-3/4 laptop:mx-auto mt-10">
        {guidesData.map((itm: GuidesData, idx: number) => (
            <Link
              href={`guides/${itm.link}`}
              className="laptop:w-[49%] flex justify-center items-center h-fit gap-5"
              key={idx}
            >
              <div className="w-[50%] aspect-square relative">
                <Image
                  src={itm.image}
                  alt="An illustration depicting the concept of a virtual private network."
                  fill
                />
              </div>
              <h1 className="w-full text-lg font-bold">{itm.name}</h1>
            </Link>
        ))}
      </div>
    </section>
  );
};

export default Guides;
