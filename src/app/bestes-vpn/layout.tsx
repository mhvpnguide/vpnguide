import SpecialNavbar from "@/components/SpecialNavbar"
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
        <SpecialNavbar/>
        {children}
      </section>
      
    </>
  )
}
