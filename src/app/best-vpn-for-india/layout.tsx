"use client"
import Script from "next/script";


export default function bestVpnForIndiaLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
               {children}
        </section>
    )
}
