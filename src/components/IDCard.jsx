"use client";

import { AspectRatio } from "./ui/aspect-ratio";
import { useState } from "react";
import { Camera } from "lucide-react";

export default function IDCard() {
    const [data, setData] = useState(null);

    if (!data) {
        return (
            <div className="flex flex-col gap-4">
                <AspectRatio
                    ratio={16 / 9}
                    className="flex w-full items-center justify-center rounded-md border bg-zinc-950 text-center"
                >
                    <p className="text-white">ไม่มีข้อมูลในขณะนี้</p>
                </AspectRatio>

                <div className="text-center">
                    <button className="rounded-md bg-zinc-600 px-3 py-2 text-white">
                        เลือกผู้สมัครก่อน
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            <AspectRatio
                ratio={16 / 9}
                className="flex w-full items-center justify-center rounded-md border bg-zinc-950 text-center"
            ></AspectRatio>

            <div className="text-center">
                <button className="custom-bg rounded-md px-3 py-2 font-semibold text-white">
                    <Camera
                        color="#ffffff"
                        size={18}
                        className="mr-2 inline -translate-y-0.5 items-center justify-center"
                    />
                    โหลดรูปภาพ
                </button>
            </div>
        </div>
    );
}
