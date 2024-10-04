"use client"
import Script from "next/script";


export default function bestVpnForIndiaLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <head>
            </head>
            <body>
                
               {children}

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
                        checkdirect(21,1);
                         `,
                    }}
                />
                        
                
                {/* <!-- Cpa Tracking (script) END--> */}

                {/* <!-- Cpa Tracking (script) --> */}
                   <Script
                    id="checkdirect-inline"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            checkdirect(21,1);
                        `,
                    }}
                  />
               {/* <!-- Cpa Tracking (script) END--> */}

            </body>
        </section>
    )
}
