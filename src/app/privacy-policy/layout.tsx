import Script from "next/script"

export default function privacyPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section>
        {children}
      </section>
    </>
  )
}
