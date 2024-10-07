export default function vpnExplainedLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <>
        {/* canonical tag */}
        <link rel="canonical" href="https://vpns.guide/vpn-explained" />
            <section>
                {children}
            </section>
        </>
    )
}