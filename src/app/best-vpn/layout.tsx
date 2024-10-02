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
                //Configuration script
                  <script>
                    var clpconfig = {"clroot" : "https://track.vpns.guide/",  "clcsr" : "1",};
                  </script>
                
                 //external script
                  <script src="https://track.vpns.guide/landing.js">
                  </script>

                 //function call
                 <script>checkdirect(8,1)
                 </script>
                {/* <!-- Tracking (script) END--> */}
                
            {children}
            </body>
        </section>
    )
}
