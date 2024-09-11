"use client";
import TopCard from "@/components/TopCard";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Image from "next/image";
import Link from "next/link";


type ContentItem = {
  heading: string;
  content: string; // Using string to allow HTML content as a string
};
type ContentArray = ContentItem[];


const content1: ContentArray = [
  {
    heading: "What is a VPN?",
    content: `
          <p>VPN stands for Virtual Private Network. It’s a type of software that establishes <b>secure and private connections over the internet</b> (or any other type of public network).</p>
          <p>There are lots of different types of VPN, but by far the most common are personal VPN services, which are applications that run in the background on your device.</p>
          <p>Personal VPN services usually offer a network of different server locations to connect to. They’re used to bypass geo-restrictions and protect your privacy and security on the Internet.</p>
          <p>Other common types of VPN include Remote Access VPNs and Site-to-Site VPNs, which are often used by businesses to securely access company files while working from home, or to create a combined network between two or more organizations in different physical locations.</p>
        `,
  },
  {
    heading: "How does a VPN work?",
    content: `
          <p>VPN software works by encrypting your web traffic and rerouting it through a remote server before reaching your desired website, service, or application.</p>
          <p><b>All of the data transmitted between your device and the VPN server is encrypted.</b> This ensures that your browsing activity and communications are indecipherable, even if your data transfers are intercepted.</p>
          <p>It will also appear as though your connection is originating from the VPN server and not from your actual device. This hides your “true” IP address and location from the websites and applications you visit, who can only see the IP address of your chosen VPN server.</p>
          <p>This can allow you to spoof your geographic location. For example, if you connect to a Japanese VPN server, it will seem to websites and applications that you are located in Japan.</p>
        `,
  },
  {
    heading: "What are VPNs used for?",
    content: `
          <p>A personal VPN service serves two main functions: <b>encrypting your web traffic and hiding your IP address.</b> This allows for a number of popular use-cases, including:</p>
          <li>Avoiding ISP surveillance and protecting your privacy online.</li>
          <li>Unblocking geo-restricted websites and streaming services.</li>
          <li>Bypassing local firewalls and evading government censorship.</li>
          <li>Avoiding ISP throttling and protecting P2P file-sharing activity.</li>
          <li>Staying secure on unprotected public WiFi networks.</li>
        `,
  },
  {
    heading: "Which devices can I use a VPN on?",
    content: `
          <p>Personal VPNs typically offer native applications and client software for:</p>
          <li>iPhone and Android phones</li>
          <li>Windows, macOS, and Linux computers</li>
          <li>Chrome and Firefox web browsers</li>
          <li>Apple TV, Google Chromecast, and Amazon Fire TV Stick devices</li>
          <li>WiFi routers</li>
          <p>For streaming devices, including Roku, Smart TV, Xbox, or Playstation devices, you can <a href="#">install a VPN onto your WiFi router</a>. This will protect every device that’s connected to your WiFi network.</p>
          <p>It is also possible <a href="#">to set up your own VPN server at home</a> using a router, personal computer or Cloud Computing Service.</p>
          <p>While this is mostly free to do, it’s also technically difficult. You won’t be able to use it to flexibly spoof your geographic location, and it doesn’t protect your privacy from your ISP or anyone they share information with.</p>
          `,
  },
  {
    heading: "What are the drawbacks of using a VPN?",
    content: `
          <p>Using a VPN has limitations and disadvantages that are important to be aware of:</p>
          <li>Most good-quality VPN services charge a monthly subscription fee.</li>
          <li>All VPNs slow down your connection speeds to some degree.</li>
          <li>A VPN cannot make you completely anonymous online.</li>
          <li>Your safety depends on how trustworthy your VPN provider is.</li>
          <li>Using a VPN is illegal in a small number of countries.</li>
          <li>A VPN will not protect your device against most malware or cyberattacks.</li>
          <li>Using a VPN increases bandwidth consumption.</li>
          <li>Even the best VPN can’t unblock every website all of the time.</li>
          `,
  },
];


const VpnExplainedPage = () => {
  return (
<section className="w-full flex justify-center flex-col items-center">
      <div className="w-full">
        <TopCard title="What Is a VPN" />
      </div>
      <section className="px-3 laptop:w-3/4 flex-col justify-center">
        <p className="text-xl font-semibold pb-2">Our Verdict</p>
        <p className="laptop:text-lg text-[15px] mb-5">
          A <b>Virtual Private Network (VPN)</b> is a type of software that runs
          in the background while you’re using the Internet. It establishes an
          encrypted connection between your device and a remote server, hiding
          your physical location from the websites and applications you visit.
          This allows you to bypass geo-restrictions and other types of internet
          censorship, and it also prevents third parties from seeing your
          browsing activity or intercepting your data on hostile networks.
        </p>

        <div className="h-[300px] tablet:h-[400px] laptop:h-[500px] w-full tablet:w-3/4 laptop:w-3/4 mx-auto relative">
            <Image
              src="/Assests/VPN-explained/VpnExplained.png"
              alt="VPN Explained"
              className="object-contain mt-4 tablet:mt-6 laptop:mt-8"
              fill
            />
       </div>

        <div className="my-5 bg-blue-100 p-2">
          <p className="laptop:text-xl font-semibold pb-2 text-[19px]">
            Summary: What Is a VPN and Why Do You Need One?
          </p>
          <p className="laptop:text-xl text-[16px]">
            Use the Q&A sections below for a quick summary of what VPNs are,
            what they do, and what their limitations are.
          </p>

          <Accordion>
            {content1.map((itm: ContentItem, idx: number) => (
              <AccordionItem
                key={idx}
                aria-label={itm.heading}
                title={itm.heading}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: itm.content }}
                  className="customAccr"
                />
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p className="my-3">
          In the remainder of this article, we’ll take an in-depth look at{" "}
          <b>
            everything you need to know about VPN technology and VPN services.
          </b>
        </p>
        <p className="my-3">
          If you have a specific question about VPNs, feel free to email us or
          visit one of the following articles for a detailed answer:
        </p>

        <p className="font-semibold my-3">
          Have a specific question about VPNs? You can find detailed answers in the articles below:
</p>
  <ul className="flex flex-wrap pl-5 list-disc list-inside">
          <li className="w-full p-2">1 {" "}
                  <Link href="/vpn-explained/what-is-a-vpn-service" className="text-bluelink hover:underline">
                        What is a VPN Service? 
                  </Link> 
          </li>
          <li className="w-full p-2">2 {" "}
                  <Link href="/vpn-explained/how-does-a-vpn-work" className="text-bluelink hover:underline">
                        How Do VPNs Work? 
                  </Link> 
          </li>
          <li className="w-full p-2">3 {" "}
                  <Link href="https://vpns.guide/vpn-explained/what-is-vpn-used-for" className="text-bluelink hover:underline">
                        What Are VPNs Used For? 
                  </Link> 
          </li>
          <li className="w-full p-2">4 {" "}
                  <Link href="https://vpns.guide/vpn-explained/are-vpn-really-worth-it" className="text-bluelink hover:underline">
                        Are VPNs Really Worth It? 
                  </Link> 
          </li>
          <li className="w-full p-2">5 {" "}
                  <Link href="/vpn-explained/vpn-logging-policies" className="text-bluelink hover:underline">
                        What Are VPN Logging Policies? 
                  </Link> 
          </li>
        </ul>

        <p className="laptop:text-3xl pt-5 font-bold text-2xl">Types of VPN Connection</p>
        <p className="py-3 laptop:text-xl text-[16px]">
          There are different types of VPN depending on the type
          of connection a user requires.
        </p>
        <p className="py-3 laptop:text-xl text-[16px]">
          Personal VPN services are designed for normal internet users who want
          to improve their privacy, security, and freedom online. For this
          reason, they are sometimes also called <b>consumer VPNs.</b>
        </p>
        <p className="py-3 laptop:text-xl text-[16px]">
          By contrast, remote access VPNs, mobile VPNs, and site-to-site VPNs
          are all types of <b>business VPN.</b> They are designed for remote
          employees to gain secure access to internal resources.
        </p>
        <p className="laptop:text-3xl pt-5 font-bold text-2xl">What Are the Benefits of a VPN Service?</p>
        <p className="py-3 laptop:text-xl text-[16px]">
          There is a large amount of false or misleading information online regarding what a VPN can and cannot do, which can make it difficult to decide whether you actually need to use one or not.
        </p>
        <p className="py-3 laptop:text-xl text-[16px]">
          A personal VPN has two primary benefits:
          </p>
        <p className="py-3 laptop:text-xl text-[16px]">
          It hides your IP address and geographic location from the websites, services and applications you use. Without this information, it’s much harder to link your online activity to your identity, which makes it more difficult to track, profile, or block you.
          </p>
        <p className="py-3 laptop:text-xl text-[16px]">
          It hides your activity from your ISP or network administrator. Encrypting your data transfers makes it almost impossible for your ISP, mobile carrier, WiFi administrator, or eavesdroppers on a public WiFi network to see which websites you’re visiting, the files you upload or download, or any personal details you enter into HTTP websites.
          </p>
        <p className="py-3 laptop:text-xl text-[16px]">
          With these two basic functions, a VPN can be used for a number of different purposes related to improving your privacy, security and freedom online.
          </p>
      </section>
    </section>
  );
};

export default VpnExplainedPage;
