"use client";

import { AspectRatio } from "./ui/aspect-ratio";
import { useState } from "react";

export default function IDCard() {
    const [data, setData] = useState(null);

    if (!data) {
        return (
            <AspectRatio
                ratio={16 / 9}
                className="flex w-full items-center justify-center rounded-md border bg-zinc-950 text-center"
            >
                <p className="text-white">ไม่มีข้อมูลในขณะนี้</p>
            </AspectRatio>
        );
    }

    return (
        <>
            <AspectRatio
                ratio={16 / 9}
                className="flex w-full items-center justify-center rounded-md border bg-zinc-950 text-center"
            ></AspectRatio>
        </>
    );
}
