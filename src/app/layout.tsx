/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComp from "../components/Navbar";
// import { GoogleAnalytics } from "@next/third-parties/google";sjj
// import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { Kaisei_Tokumin, Kantumruy_Pro, Inknut_Antiqua } from '@next/font/google'
//import { GoogleTagManager } from "@next/third-parties/google";
import ScrollTracker from '../components/ScrollTracker';

const kantumruyPro = Kantumruy_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-kantumruyPro'
});
const kaiseiTokumin = Kaisei_Tokumin({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: '--font-kaiseiTokumin'
});
const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: '--font-inknutAntiqua'
});

export const metadata: Metadata = {
   //title: "VPN Guide",
  title: {
    template: "%s | VPNs Guide",
    default: "VPNs Guide",
  },
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Standard favicon --> */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* <!-- Recommended favicon size for general browser display --> */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        {/* <!-- Android Chrome Icon --> */}
        <link
          rel="icon"
          type="image/png"
          sizes="36x36"
          href="/android-chrome-36x36.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/android-chrome-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href="/android-chrome-72x72.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/android-chrome-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="/android-chrome-144x144.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="384x384"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-192x192.png"
        />
        {/* <!-- Apple Touch Icon (at least 200x200px) --> */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/apple-touch-icon-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/apple-touch-icon-57x57-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="/apple-touch-icon-60x60-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/apple-touch-icon-72x72-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="/apple-touch-icon-76x76-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/apple-touch-icon-114x114-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="/apple-touch-icon-120x120-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/apple-touch-icon-144x144-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/apple-touch-icon-152x152-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon-180x180.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="180x180"
          href="/apple-touch-icon-180x180-precomposed.png"
        />
        {/* <!-- Android Chrome Icon --> */}
        <link
          rel="icon"
          type="image/png"
          sizes="36x36"
          href="/android-chrome-36x36.png"
        />
        {/* Windows Tiles */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        {/* <!-- Safari Icon --> */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="browserconfig" href="/browserconfig.xml" />
        {/* <!-- The Web App Manifest --> */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* <!-- SEO Meta Tags --> */}
        <meta
          name="description"
          content="Read our VPN recommendations and advice to protect your internet privacy and security."
        />
        <meta name="author" content="Mohit Singh" />

        {/* <!-- Meta Robots --> */}
        <meta name="robots" content="index, follow" />

        {/* <!-- OG Meta Tags to improve the way the post looks when you share the page on Facebook, Twitter, LinkedIn --> */}
        <meta property="og:site_name" content="VPNs Guide" /> {/*website name */}
        <meta property="og:site" content="https://vpns.guide/" />{" "}
        {/*website link */}
        <meta
          property="og:title"
          content="Read our VPN recommendations and advice to protect your internet privacy and security"
        />{" "}
        {/*title shown in the actual shared post */}
        <meta
          property="og:description"
          content="Our VPN experts have spent hundreds of hours researching, testing and reviewing VPN services. See our recommendations and protect your online privacy."
        />
        <meta name="author" content="Mohit Singh" />
        {/* <!-- description shown in the actual shared post --> */}
        <meta property="og:image" content="/logo.png" />{" "}
        {/* image link, make sure it's jpg */}
        <meta property="og:url" content="https://vpns.guide/" />{" "}
        {/* where do you want your post to link to */}
        <meta property="og:type" content="website" />{" "}
        {/* The type of content (in this case, "website") */}

        {/* Microsost Clarity */}
        <Script
        id="my-script-1"
        strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y) {
                c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments) };
                t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
              })(window, document, "clarity", "script", "np9je9n7qi");
            `,
          }}
        />
{/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2S5WJYCWQZ"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2S5WJYCWQZ');
          `}
        </Script>
      </head>
      <body className={`${kantumruyPro.variable} ${kaiseiTokumin.variable} ${inknutAntiqua.variable}`}>


        <NextUIProvider>
          <NavbarComp />
          {children}
          <Footer />
        </NextUIProvider>
        <ScrollTracker /> {/* Add ScrollTracker to handle client-side logic */}
      </body>
    </html>
  );
}
