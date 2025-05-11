"use client";

import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { X, Save } from "lucide-react";
import { userStore } from "@/lib/store/user";
import { useRef } from "react";
import { toPng } from "html-to-image";
import { toast } from "sonner";

function majorName(str = "") {
    return str.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function IDCard() {
    const captureRef = useRef(null);
    const user = userStore((s) => s.user);

    const prefix = user.id?.slice(0, 2) || "";
    const bgColor =
        {
            DS: "bg-pink-800",
            PG: "bg-red-800",
            MK: "bg-yellow-800",
            CT: "bg-orange-800",
        }[prefix] ?? "bg-gray-900";

    const handleCapture = async () => {
        if (!captureRef.current) return;

        try {
            const dataUrl = await toPng(captureRef.current, {
                cacheBust: true,
            });

            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = `${user.id}_card.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            toast("เกิดข้อผิดพลาดในการดาวน์โหลด", {
                description: error.message,
            });
        }
    };

    if (!user.id) {
        return (
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex w-full items-center justify-between rounded-md bg-zinc-100 p-4">
                    <div className="flex items-center space-x-4">
                        <div className="h-24 w-24 animate-pulse rounded-md bg-zinc-200" />

                        <div className="flex animate-pulse flex-col space-y-2">
                            <div className="h-6 w-32 rounded bg-zinc-200" />
                            <div className="h-4 w-24 rounded bg-zinc-200" />
                            <div className="h-4 w-20 rounded bg-zinc-200" />
                        </div>
                    </div>

                    <div className="relative h-16 w-16 overflow-hidden">
                        <Image
                            src="/ywc20-icon.png"
                            alt="YWC20 Logo"
                            fill
                            className="object-contain saturate-0"
                        />
                    </div>
                </div>

                <Button
                    variant=""
                    className="w-full cursor-not-allowed opacity-90"
                    disabled
                >
                    <X className="ml-0.5 inline" />
                    โปรดเลือกรายชื่อ
                </Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <div
                id="capture"
                ref={captureRef}
                className={`flex w-full items-center justify-between rounded-md p-4 ${bgColor}`}
            >
                <div className="flex items-center space-x-4">
                    <div className="relative h-24 w-24 overflow-hidden rounded-md bg-zinc-100">
                        <Image
                            src="/default.jpg"
                            alt="Avatar"
                            fill
                            className="object-contain"
                            style={{ objectPosition: "center" }}
                        />
                    </div>

                    <div className="text-white">
                        <p className="overflow-hidden text-lg font-semibold text-ellipsis whitespace-nowrap">
                            {user.full_name}
                        </p>
                        <p className="overflow-hidden text-sm text-ellipsis whitespace-nowrap">
                            ID: {user.id}
                        </p>
                        <p className="overflow-hidden text-sm text-ellipsis whitespace-nowrap">
                            สาขา: {majorName(user.major)}
                        </p>
                    </div>
                </div>

                <div className="relative h-16 w-16 overflow-hidden">
                    <Image
                        src="/ywc20-icon.png"
                        alt="YWC20 Logo"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            <Button
                className="custom-bg w-full hover:brightness-75"
                onClick={handleCapture}
            >
                <Save strokeWidth={1.5} className="ml-0.5 inline" />
                ดาวน์โหลดรูปภาพ
            </Button>
        </div>
    );
}
