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

             {/* <!-- Tracking (script) --> */}
                <script>
                  window.clickmagick_cmc = 
                  {
                    uid: '202178',
                    hid: '3519712257',
                    cmc_project: 'test',
                    vid_info: 'on',
                    utm_source: 'organic',
                  }
             </script>

               <script src='//cdn.clkmc.com/cmc.js'>
               </script>
             {/* <!-- Tracking (script) END--> */} 

            </head>
            
            <body>
                {children}  
            </body>
        </section>
    )
}
