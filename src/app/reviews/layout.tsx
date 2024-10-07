import Script from "next/script"

export default function reviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://vpns.guide/reviews" />
      <section>
        {children}
      </section>
    </>
  )
}
