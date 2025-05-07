import Footer from "@/components/global/Footer";
import Searcher from "@/components/Searcher";
import IDCard from "@/components/IDCard";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <div className="h-screen items-center justify-center">
            <div className="4xl:px-0 flex w-full items-center justify-center bg-[#190200] px-6 py-8">
                <div className="flex w-full max-w-6xl flex-col items-center justify-center">
                    <div className="flex w-full flex-col items-center justify-center">
                        <div className="">
                            <Image
                                src="/ywc20-logo-main.webp"
                                alt="Young Webmaster Camp 20 Logo"
                                width={300}
                                height={300}
                                className="py-4"
                            />
                        </div>

                        <div className="flex w-full flex-col-reverse sm:flex-row">
                            <div className="w-full p-0 sm:w-1/2 sm:p-6">
                                <Searcher />
                            </div>

                            <div className="w-full py-6 sm:w-1/2 sm:p-6">
                                <IDCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
