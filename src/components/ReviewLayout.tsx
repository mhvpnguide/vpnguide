import Head from 'next/head';

export default function ReviewLayout({
    children,
    title = 'Default Title', // Default title if none is provided
}: {
    children: React.ReactNode,
    title?: string,
}) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <section>
                {children}
            </section>
        </>
    )
}