import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/global/Footer";

export default function NotFound() {
    return (
        <div className="h-screen">
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-full w-full max-w-4xl flex-col items-center justify-center gap-4 text-center text-zinc-100">
                    <p className="text-4xl font-bold">404</p>

                    <p className="text-2xl">ไม่พบหน้าที่คุณต้องการค้นหา</p>

                    <Link
                        href="/"
                        className="group items-center justify-center text-sm hover:underline"
                    >
                        <ChevronLeft
                            className="inline ease-in-out group-hover:-translate-x-1 group-hover:transition-transform"
                            size={14}
                        />{" "}
                        ไปที่เว็บไซต์หลัก
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
