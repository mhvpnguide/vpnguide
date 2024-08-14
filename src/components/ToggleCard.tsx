"use client"
import { useState } from "react";

// Define the type for individual pro items
interface Pro {
    id: number;
    value: string;
}

// Define the props type for the component
interface ProsListProps {
    pros: Pro[];
    cons: Pro[];
}

const ToggleCard: React.FC<ProsListProps> = ({ pros, cons }) => {

    const [active, setActive] = useState("cons");

    return (
        <div className="bg-rose-50 p-[2px]">
            <div className="flex ">
                <div className={`cursor-pointer w-1/2 text-center text-green-600 ${active == "pros" ? "bg-white" : ""}`} onClick={() => setActive("pros")}>Pros</div>
                <div className={`cursor-pointer w-1/2 text-center text-red-600 ${active == "cons" ? "bg-white" : ""}`} onClick={() => setActive("cons")}>Cons</div>
            </div>
            {
                active == "pros" ?
                    <ul className="bg-white p-1 space-y-2">
                        {
                            pros.map((itm, idx) => (
                                <li className="tick-list-item ml-3" key={idx}>{itm.value}</li>
                            ))
                        }

                    </ul>
                    :
                    <ul className="bg-white p-1 space-y-2">
                        {
                            cons.map((itm, idx) => (
                                <li className="cross-list-item ml-3" key={idx}>{itm.value}</li>
                            ))
                        }
                    </ul>
            }
        </div>
    );
}

export default ToggleCard;