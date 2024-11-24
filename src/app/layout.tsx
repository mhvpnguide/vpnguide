import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComp from "../components/Navbar";
import Script from "next/script";
import { Kaisei_Tokumin, Kantumruy_Pro, Inknut_Antiqua } from "@next/font/google";

// Google Fonts
const kantumruyPro = Kantumruy_Pro({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-kantumruyPro" });
const kaiseiTokumin = Kaisei_Tokumin({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-kaiseiTokumin" });
const inknutAntiqua = Inknut_Antiqua({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-inknutAntiqua" });

export const metadata: Metadata = {
  title: {
    template: "%s | VPN Guide",
    default: "VPN Guide",
  },
  description: "Read our VPN recommendations and advice to protect your internet privacy and security.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* SEO Meta Tags */}
        <meta name="description" content="Read our VPN recommendations and advice to protect your internet privacy and security." />
        <meta name="author" content="Mohit Singh" />
        <meta name="robots" content="index, follow" />

        {/* OG Meta Tags */}
        <meta property="og:site_name" content="VPNs Guide" />
        <meta property="og:title" content="Read our VPN recommendations and advice to protect your internet privacy and security" />
        <meta property="og:description" content="Our VPN experts have spent hundreds of hours researching, testing and reviewing VPN services." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://vpns.guide/" />
        <meta property="og:type" content="website" />

        {/* Microsoft Clarity */}
        <Script
          id="clarity"
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
          src="https://www.googletagmanager.com/gtag/js?id=G-V3J9MTSWW4"
          strategy="lazyOnload"
        />
        <Script
          id="ga4-config"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V3J9MTSWW4');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TV8QXFD7');
            `,
          }}
        />
      </head>

      <body className={`${kantumruyPro.variable} ${kaiseiTokumin.variable} ${inknutAntiqua.variable}`}>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TV8QXFD7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Layout Components */}
        <NextUIProvider>
          <NavbarComp />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
