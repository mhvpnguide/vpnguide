'use client'
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import Link from "next/link";

const TopCard = () => {
    const defaultContent =
        "Simon Migliano is a recognized world expert in VPNs. He's tested hundreds of VPN services and his research has featured on the BBC, The New York Times and more.";

    return (
        <div className="bg-blue-100 py-4 px-3">
            <p className="text-sm">Top10VPN is editorially independent. We may <Link href='/about/how-we-make-money/'>earn commissions</Link> if you buy a VPN via our links.</p>
            <p className="text-3xl font-bold">What Is a VPN (Virtual Private Network)?</p>
        </div>
    );
}

export default TopCard;