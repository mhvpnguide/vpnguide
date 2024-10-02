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
                {/* <!-- Tracking (script) --> */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            var clpconfig = {"clroot" : "https://track.vpns.guide/", "clcsr" : "1"};
                            checkdirect(8,1);
                        `,
                    }}
                />
                <script src="https://track.vpns.guide/landing.js" />
                {/* <!-- Tracking (script) END--> */}
                
            {children}
            </body>
        </section>
    )
}
