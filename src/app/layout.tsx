/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComp from "../components/Navbar";
import Script from "next/script";
import { Kaisei_Tokumin, Kantumruy_Pro, Inknut_Antiqua } from '@next/font/google'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Standard favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Read our VPN recommendations and advice to protect your internet privacy and security." />
        <meta name="author" content="Mohit Singh" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="VPNs Guide" />
        <meta property="og:site" content="https://vpns.guide/" />
        <meta property="og:title" content="Read our VPN recommendations and advice to protect your internet privacy and security" />
        <meta property="og:description" content="Our VPN experts have spent hundreds of hours researching, testing and reviewing VPN services. See our recommendations and protect your online privacy." />
        <meta name="author" content="Mohit Singh" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://vpns.guide/" />
        <meta property="og:type" content="website" />
        
        {/* Microsoft Clarity */}
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
      </body>
    </html>
  );
}
