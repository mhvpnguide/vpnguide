import Script from "next/script"

export default function areVPNEeallyWorthitLayout({
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
