import Script from "next/script"

export default function bestVpnForIndiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://vpns.guide/best-vpn-for-india" />
      <section>
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
                        setTimeout("checkdirect(8,3)",2000);
                         `,
                }}
            />
            {/* <!-- Cpa Tracking (script) END--> */}

    </>
  )
}
