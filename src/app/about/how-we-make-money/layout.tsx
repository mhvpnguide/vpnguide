import Script from "next/script"

export default function howWeMakeMoneyLayout({
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
