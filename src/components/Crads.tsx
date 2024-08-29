"use client"

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type CardProps = {
    title: string;
    imageSrc: string;
    link:string;
};

const Cards: React.FC<CardProps> = ({ title, imageSrc,link }) => {
    const router = useRouter();
    const handleClick = ()=>{
        router.push(link)
    }

    return (
            <button onClick={handleClick} className="w-[auto] h-[auto]  tablet:h-fit tablet:w-full overflow-hidden shadow-lg p-5  flex flex-col bg-white items-center rounded-[30px] hovereff cursor-pointer">
                <div className="relative w-4/5 tablet:w-1/4  aspect-square flex justify-start items-center laptop:w-1/2">
                    <Image src={imageSrc} alt={title} fill />
                </div>
                <div className="flex justify-between ta items-center text-center gap-2 w-full">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <Link href="#" className="text-blue-500 hover:text-blue-700 font-bold text-2xl">
                        →
                    </Link>
                </div>
            </button >
    );
};

export default Cards;
