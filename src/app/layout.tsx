/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComp from "../components/Navbar";
import Script from "next/script";
import { Kaisei_Tokumin, Kantumruy_Pro, Inknut_Antiqua } from '@next/font/google';

// Font settings
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
  title: {
    template: "%s | VPNs Guide",
    default: "VPNs Guide",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Read our VPN recommendations and advice to protect your internet privacy and security."
        />
        <meta name="author" content="Mohit Singh" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:site_name" content="VPNs Guide" />
        <meta property="og:site" content="https://vpns.guide/" />
        <meta property="og:title" content="Read our VPN recommendations and advice to protect your internet privacy and security" />
        <meta property="og:description" content="Our VPN experts have spent hundreds of hours researching, testing and reviewing VPN services. See our recommendations and protect your online privacy." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://vpns.guide/" />
        <meta property="og:type" content="website" />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-V3J9MTSWW4`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V3J9MTSWW4', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Standard favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Additional favicon sizes */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Theme color */}
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body className={`${kantumruyPro.variable} ${kaiseiTokumin.variable} ${inknutAntiqua.variable}`}>
        <NextUIProvider>
          <NavbarComp />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
