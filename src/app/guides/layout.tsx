import Script from "next/script"

export default function guidesPageLayout({
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
