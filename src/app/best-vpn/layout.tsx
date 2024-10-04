"use client"
import Script from "next/script";

export default function bestVpnLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <head>
                <title>Best VPN of 2024</title>
            </head>
            
            <body>
                {children}
                
                {/* <!-- Tracking (script) --> */}
                <Script
                    id="clpconfig"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            var clpconfig = {
                            "clroot" : "https://track.vpns.guide/",
                            "engsec" : "30",
                            "clcsr" : "1"
                            };
                        `,
                    }}
                />
                
                <Script async src="https://track.vpns.guide/landing.js" strategy="afterInteractive"/>

                <Script
                    id="checkdirect"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                        checkdirect(8,3);
                         `,
                    }}
                />
                        
                
                {/* <!-- Tracking (script) END--> */}

                {/* <!-- Tracking (script) --> */}
                   <Script
                    id="checkdirect-inline"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            checkdirect(8,3);
                        `,
                    }}
                  />
               {/* <!-- Tracking (script) END--> */}
                
            </body>
        </section>
    )
}
