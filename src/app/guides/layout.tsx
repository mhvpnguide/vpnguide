import Script from "next/script"

export default function guidesPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://vpns.guide/guides" />
      <section>
        {children}
      </section>
    </>
  )
}
