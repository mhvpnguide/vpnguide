import DeSpecialNavbar from "@/components/DeSpecialNavbar";
import Script from "next/script";

export default function testVpnLayoutreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Canonical tag */}
      <link rel="canonical" href="https://vpns.guide/de/bestes-vpn" />
      <section>
        <DeSpecialNavbar />
        {children}
      </section>
      {/* CPA Tracking Scripts */}
      <Script
        id="clpconfig"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                            var clpconfig = {
                            "clroot" : "https://track.vpns.guide/",
                            "engsec" : "60",
                            "clcsr" : "1"
                            };
                        `,
        }}
      />
      <Script src="//track.vpns.guide/landing.js" strategy="afterInteractive" />
      <Script
        id="checkdirect"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                        setTimeout("checkdirect(42,2)",2000);
                         `,
        }}
      />
    </>
  );
}
