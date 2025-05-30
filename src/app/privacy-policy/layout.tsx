import Script from "next/script"

export default function privacyPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://vpns.guide/privacy-policy" />
      <section>
        {children}
      </section>
    </>
  )
}
