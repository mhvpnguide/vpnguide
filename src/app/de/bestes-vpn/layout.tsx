import SpecialNavbar from "@/components/DeSpecialNavbar"
import Script from "next/script"

export default function testVpnLayoutreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://vpns.guide/bestes-vpn" />
      <section>
        <DeSpecialNavbar/>
        {children}
      </section>
      
    </>
  )
}
