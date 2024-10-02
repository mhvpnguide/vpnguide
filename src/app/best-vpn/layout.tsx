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
                <script
                    id="clpconfig"
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
                
                <script async src="https://track.vpns.guide/landing.js"/>

                <script
                    id="checkdirect"
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
