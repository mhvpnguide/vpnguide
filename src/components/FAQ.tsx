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
            <p>A Virtual Private Network (VPN) is a tool that creates a secure and encrypted connection between your device and the internet. It masks your IP address, making it appear as though you're browsing from a different location. This helps protect your online privacy and security by preventing third parties like hackers, internet service providers, or advertisers from tracking your activities..</p>
            <p>VPNs are commonly used to access restricted content in specific regions, ensuring anonymity while browsing, and securing data on public Wi-Fi networks. By rerouting your internet traffic through a VPN server, your data is encrypted, reducing the risk of cyber threats and unauthorized access.
</p>
            <p>Whether for personal use, streaming content, or ensuring business security, VPNs provide an additional layer of protection, allowing you to browse the internet with greater privacy and freedom.
</p>
          `,
  },
  {
    heading: "How to connect to a VPN",
    content: `
            <p>To connect to a VPN, follow these simple steps:
</p>
            <p><b>Choose a VPN provider ->> Create an account ->> Select a server ->> Connect to the VPN ->> Verify the connection ->> Your connection is now secure and private!
</b></p>
          `,
  },
  {
    heading: "Which device can you use VPN on",
    content: `
            <p>You can use a VPN on a wide range of devices. Most personal VPNs offer native applications and client software for: </p>
            <ul style="list-style-type: inherit type; padding-left: 20px;">
            <li>iPhone and Android phones</li>
            <li>Windows, macOS, and Linux computers</li>
            <li>Chrome and Firefox web browsers</li>
            <li>Apple TV, Google Chromecast, and Amazon Fire TV Stick</li>
            <li>Additionally, VPNs can be installed on WiFi routers, which extends protection to all connected devices, including Roku, Smart TVs, Xbox, and PlayStation.</li>
            <li>It is also possible to set up your own VPN server at home using a router, personal computer or Cloud Computing Service.</li>
            </ul>
          `,
  },
  {
    heading: "Will using a VPN affect my internet speed?",
    content: `
            <p>Using a VPN may impact your internet speed, but some services, such as 
            <a href="https://vpnguide.in/reviews/cyberghost">Cyber Ghost</a>, 
            <a href="https://vpnguide.in/reviews/expressvpn">Express Vpn</a>,
            <a href="https://vpnguide.in/reviews/nordvpn">Nord Vpn</a>,
            <a href="https://vpnguide.in/reviews/privateinternetaccess">PIA</a>,
            are designed to minimize this effect and provide optimal performance.</p>
            `,
  },
  {
    heading: "What is the difference between free and paid VPNs?",
    content: `
            <p>The main difference between free and paid VPNs lies in features, security, and overall performance. Free VPNs typically have limitations like slower speeds, fewer server locations, data usage caps, and limited support. They may also display ads or collect user data to generate revenue, which can compromise privacy. Paid VPNs, on the other hand, offer faster speeds, more server options, stronger encryption, and 24/7 customer support.</p>
            <p>Paid services prioritize user privacy and security, ensuring no data logging or ads. Additionally, paid VPNs allow unrestricted access to streaming services, torrenting, and bypassing geo-restrictions.</p>
            <p>If you're looking for the best value for money, CyberGhost is an excellent choice. It offers competitive pricing, robust security features, and access to thousands of servers worldwide. Check out the best CyberGhost VPN deals for affordable, high-quality protection.</p>
            `,
  },
];

const FAQ = () => {
  return (
    <div className="flex-col laptopl:px-48 px-10 my-5">
      <div className="text-4xl font-semibold pb-10">Frequently Asked Question</div>
      <div className=" flex flex-col laptop:flex-row justify-center items-center">
        <Accordion>
          {content1.map((itm: ContentItem, idx: number) => (
            <AccordionItem
              key={idx}
              aria-label={itm.heading}
              title={itm.heading}
              className="font-bold"
            >
              <div
                dangerouslySetInnerHTML={{ __html: itm.content }}
                className="customAccr bg-gray-100 p-3 rounded-lg font-normal"
              />
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
