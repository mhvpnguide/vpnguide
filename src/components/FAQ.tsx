"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

type ContentItem = {
  heading: string;
  content: string; // Using string to allow HTML content as a string
};
type ContentArray = ContentItem[];

const content1: ContentArray = [
  {
    heading: "Why should you trust VPNs Guide?",
    content: `
            <p>We are an independent company and purchase every VPN ourselves to ensure that our reviews are unbiased and trustworthy. We specifically test the following important criteria:</p>
            <ul style="list-style-type: inherit; padding-left: 25px;">
            <li>Privacy & Logging Policy</li>
            <li>Security & Encryption Standards</li>
            <li>Connection Speed</li>
            <li>Server Locations</li>
            <li>GEO Unblocking Capabilities</li>
            <li>Device Compatibility</li>
<li>User-Friendliness</li>
<li>Quality of Customer Support</li>
            </ul>
            <p>Our goal is to provide <span style="font-weight: 500;">clear and honest recommendations</span> so you can make the right decision.</p>
          `,
  },
  {
    heading: "What is a VPN and how does it work?",
    content: `
            <p>A VPN (Virtual Private Network) is particularly useful when using public Wi-Fi hotspots, such as in cafés, hotels, or airports. <span style="font-weight: 500;">It encrypts all data sent to and from your device (laptop, smartphone, or tablet), protects your privacy, and secures your data traffic.</span></p>

<p>All you need is a VPN app, which is available for a reasonable monthly price. Good VPN solutions work on various devices and provide protection no matter where you are.</p>
          `,
  },
  {
    heading: "How does a VPN protect my online activities?",
    content: `
            <p>A VPN (Virtual Private Network) protects your online activities by encrypting your internet connection. <span style="font-weight: 500;">It hides your IP address and makes your online activities invisible to hackers, internet providers, or others who may want to track you.</span></p>

<p>When you connect to a VPN, all your data is routed through a secure, encrypted tunnel. This protects private information such as passwords, banking data, and personal details, even in public Wi-Fi networks.</p>

<p>For the best results, we recommend trusted VPNs like <a href="https://track.vpns.guide/base2.php?cloid=1002&token4=faq&token5=DE">CyberGhost</a> and <a href="https://track.vpns.guide/base2.php?cloid=1007&token4=faq&token5=DE">Total VPN</a>. <span style="font-weight: 500;">They offer strong security features, fast connections, and reliable privacy for all your online activities.</span></p>
          `,
  },
  {
    heading: "Can I use a VPN on multiple devices?",
    content: `
            <p>Yes, most VPNs allow you to use a VPN <span style="font-weight: 500;">simultaneously on multiple devices</span>. This means you can protect your <span style="font-weight: 500;">laptop</span>, <span style="font-weight: 500;">smartphone</span>, <span style="font-weight: 500;">tablet</span>, and even your <span style="font-weight: 500;">smart TV</span> or <span style="font-weight: 500;">gaming console</span> with just one subscription.</p>

<p>Modern VPNs are compatible with various operating systems like <span style="font-weight: 500;">Windows, macOS, Android</span>, and <span style="font-weight: 500;">iOS</span>. Many providers also offer router apps, so all devices on your home network are protected.</p>

<p>Whether at home or on the go – <span style="font-weight: 500;">your online privacy and security are ensured across all your devices.</span></p>
          `,
  },
  {
    heading: "Is a free VPN safe?",
    content: `
            <p><span style="font-weight: 500;">Free VPNs may sound tempting, but they often have weaknesses in terms of security, performance, and reliability.</span> Many free VPN providers use outdated protocols or offer too few servers, putting your data at risk. Some even log your activities or sell your data to third parties, compromising your privacy.</p>

<p>In contrast, <span style="font-weight: 500;">paid VPN services take your security and privacy seriously. They use advanced encryption methods and a variety of secure protocols to optimally protect your data.</span> Paid VPNs also offer faster, more stable connections with higher bandwidth, which ensures fast and stable browsing, even in public Wi-Fi networks.</p>

<p>Paid VPN services also provide professional customer support, which is available anytime you need assistance. This is a significant advantage over free providers, where support is often limited or non-existent.</p>

<p>Overall, paid VPN services offer significantly better security, performance, and customer service compared to free alternatives, making them a safer and more reliable choice.</p>

<p><span style="font-weight: 500;">Paid services offer several advantages over free alternatives. The main benefits include:</span></p>
   <ul style="list-style-type: inherit; padding-left: 25px;">
<li>Higher security with advanced encryption</li>
<li>Multiple VPN protocols to choose from</li>
<li>Higher bandwidth for faster and more efficient connections</li>
<li>Professional customer and IT support, often available 24/7</li>
</ul>

  <p>If you're looking for the best value for money, <a href="https://track.vpns.guide/base2.php?cloid=1007&token4=faq&token5=DE">Total VPN</a> is an excellent choice. It offers fair prices, robust security features, and access to thousands of servers worldwide. Check out the <a href="https://track.vpns.guide/base2.php?cloid=1007&token4=faq&token5=DE">Total VPN deals</a> for affordable, high-quality protection.</p>
          `,
  },
];

const FAQ = () => {
  return (
    <div className="flex-col laptopl:px-96 px-5 my-5" id="faq">
      <div className="text-4xl font-semibold pb-10">Frequently Asked Questions</div>
      <Accordion variant="splitted">
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
              style={{
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            />
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
