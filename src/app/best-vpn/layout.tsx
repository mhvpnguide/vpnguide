import Script from "next/script"


export default function bestVpnLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <link rel="canonical" href="https://vpns.guide/best-vpn" />
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
                        setTimeout("checkdirect(8,1)",2000);
                         `,
                }}
            />
            {/* <!-- Cpa Tracking (script) END--> */}

            {/* <!-- ClickFunnel Tracking (script) --> */}
            <Script
                id="clickmagick-cmc"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                          window.clickmagick_cmc = {
                            uid: '202178',
                            hid: '3519712257',
                            cmc_project: 'test',
                            vid_info: 'on',
                            utm_source: 'organic',
                          };
                        `,
                }}
            />
            <Script
                src="//cdn.clkmc.com/cmc.js"
                strategy="afterInteractive"
            />
            {/* <!-- ClickFunnel Tracking (script) END--> */}
        </>
    )
}
