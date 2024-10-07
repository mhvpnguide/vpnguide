import Script from "next/script"

export default function cookiePageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://vpns.guide/cookie-policy" />
      <section>
        {children}
      </section>
    </>
  )
}
