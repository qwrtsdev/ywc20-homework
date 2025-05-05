import Footer from "@/components/global/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full items-center justify-center">
        <div className="4xl:px-0 flex w-full items-center justify-center px-4">
            <div className="w-full flex flex-col max-w-4xl justify-center items-center border-x-zinc-100 border-x">
                <Image 
                    src="/ywc20-logo-main.webp"
                    alt="Young Webmaster Camp 20 Logo"
                    width={350}
                    height={350}
                    className="py-8"
                />

                <input type="text" placeholder="กรอกชื่อ หรือ ID" />
                <input type="submit" value="" />
            </div>
        </div>

        <Footer />
    </div>
  );
}
