"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

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
            <p>Avoiding ISP surveillance and protecting your privacy online.</p>
            <p>Unblocking geo-restricted websites and streaming services.</p>
            <p>Bypassing local firewalls and evading government censorship.</p>
            <p>Avoiding ISP throttling and protecting P2P file-sharing activity.</p>
            <p>Staying secure on unprotected public WiFi networks.</p>
          `,
  },
  {
    heading: "Which devices can I use a VPN on?",
    content: `
            <p>Personal VPNs typically offer native applications and client software for:</p>
            <p>iPhone and Android phones</p>
            <p>Windows, macOS, and Linux computers</p>
            <p>Chrome and Firefox web browsers</p>
            <p>Apple TV, Google Chromecast, and Amazon Fire TV Stick devices</p>
            <p>WiFi routers</p>
            <p>For streaming devices, including Roku, Smart TV, Xbox, or Playstation devices, you can <a href="#">install a VPN onto your WiFi router</a>. This will protect every device that’s connected to your WiFi network.</p>
            <p>It is also possible <a href="#">to set up your own VPN server at home</a> using a router, personal computer or Cloud Computing Service.</p>
            <p>While this is mostly free to do, it’s also technically difficult. You won’t be able to use it to flexibly spoof your geographic location, and it doesn’t protect your privacy from your ISP or anyone they share information with.</p>
            `,
  },
  {
    heading: "What are the drawbacks of using a VPN?",
    content: `
            <p>Using a VPN has limitations and disadvantages that are important to be aware of:</p>
            <p>Most good-quality VPN services charge a monthly subscription fee.</p>
            <p>All VPNs slow down your connection speeds to some degree.</p>
            <p>A VPN cannot make you completely anonymous online.</p>
            <p>Your safety depends on how trustworthy your VPN provider is.</p>
            <p>Using a VPN is illegal in a small number of countries.</p>
            <p>A VPN will not protect your device against most malware or cyberattacks.</p>
            <p>Using a VPN increases bandwidth consumption.</p>
            <p>Even the best VPN can’t unblock every website all of the time.</p>
            `,
  },
];

const FAQ = () => {
  return (
    <div className="flex-col laptopl:px-20 px-10">
      <div className="text-4xl font-semibold pb-10">Frequently Asked Question</div>
      <div className=" flex flex-col laptop:flex-row justify-center items-center">
        <Accordion>
          {content1.map((itm: ContentItem, idx: number) => (
            <AccordionItem
              key={idx}
              aria-label={itm.heading}
              title={itm.heading}
            >
              <div
                dangerouslySetInnerHTML={{ __html: itm.content }}
                className="customAccr bg-gray-100 p-3 rounded-lg"
              />
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
