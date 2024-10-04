"use client"
import Head from "next/head"
import Script from "next/script"


export default function bestVpnLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <section>
                {children}
            </section>

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
