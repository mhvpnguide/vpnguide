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
      {/* OptinMonster Script */}
      <Script
        id="optinmonster-script"
        strategy="lazyOnload" // Lazy load the script after page content has loaded
        dangerouslySetInnerHTML={{
          __html: `
          (function(d,u,ac){
            var s=d.createElement('script');
            s.type='text/javascript';
            s.src='https://a.omappapi.com/app/js/api.min.js';
            s.async=true;
            s.dataset.user=u;
            s.dataset.account=ac;
            d.getElementsByTagName('head')[0].appendChild(s);
          })(document, 352620, 372811);
        `,
        }}
      />
    </>
  );
}
