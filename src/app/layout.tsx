/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";
import NavbarComp from "../components/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import Script from "next/script";
import { Kaisei_Tokumin, Kantumruy_Pro, Inknut_Antiqua } from "@next/font/google";

const kantumruyPro = Kantumruy_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kantumruyPro",
});

const kaiseiTokumin = Kaisei_Tokumin({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-kaiseiTokumin",
});

const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inknutAntiqua",
});

export const metadata: Metadata = {
  title: {
    template: "%s | VPNs Guide",
    default: "VPNs Guide",
  },
  description: "Read our VPN recommendations to protect your privacy and security online.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Windows Tiles */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="browserconfig" href="/browserconfig.xml" />

        {/* Safari Pinned Tab */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        {/* SEO Meta Tags */}
        <meta name="description" content="Read our VPN recommendations to protect your privacy online." />
        <meta name="author" content="Mohit Singh" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="VPNs Guide" />
        <meta property="og:title" content="VPN Recommendations and Advice" />
        <meta
          property="og:description"
          content="Our VPN experts spent hours testing and reviewing VPN services to protect your privacy."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://vpns.guide/" />
        <meta property="og:type" content="website" />

        {/* Lazy Load Google Analytics */}
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-V3J9MTSWW4', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Lazy Load Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y) {
                c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
                t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
              })(window, document, "clarity", "script", "np9je9n7qi");
            `,
          }}
        />
      </head>

      <body
        className={`${kantumruyPro.variable} ${kaiseiTokumin.variable} ${inknutAntiqua.variable}`}
      >
        <NextUIProvider>
          <NavbarComp />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
