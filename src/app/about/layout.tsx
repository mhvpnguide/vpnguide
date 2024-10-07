import Script from "next/script"

export default function aboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://vpns.guide/about" />
      <section>
        {children}
      </section>
    </>
  )
}
