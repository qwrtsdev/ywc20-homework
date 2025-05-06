import Footer from "@/components/global/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen items-center justify-center">
        <div className="bg-[#190200] 4xl:px-0 flex w-full items-center justify-center px-4">
            <div className="w-full flex flex-col max-w-7xl justify-center items-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="">
                        <Image 
                            src="/ywc20-logo-main.webp"
                            alt="Young Webmaster Camp 20 Logo"
                            width={350}
                            height={350}
                            className="py-12"
                        />
                    </div>

                    <div className="grid grid-cols-2 grid-rows-1">
                        <div className=""></div>

                        <div className=""></div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  );
}
