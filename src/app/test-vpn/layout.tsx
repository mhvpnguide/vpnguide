import SpecialNavbar from "@/components/SpecialNavbar"
import Script from "next/script"

export default function testVpnLayoutreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://vpns.guide/test-vpn" />
      <section>
        <SpecialNavbar/>
        {children}
      </section>
      {/* <!-- Cpa Tracking (script) --> */}
<Script
                id="clpconfig"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                            var clpconfig = {
                            "clroot" : "https://track.vpns.guide/",
                            "engsec" : "45",
                            "clcsr" : "1"
                            };
                        `,
                }}
            />
            <Script
                src="//track.vpns.guide/landing.js"
                strategy="afterInteractive"
            />
            <Script
                id="checkdirect"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        setTimeout("checkdirect(8,2)",2000);
                         `,
                }}
            />
            {/* <!-- Cpa Tracking (script) END--> */}
    </>
  )
}
