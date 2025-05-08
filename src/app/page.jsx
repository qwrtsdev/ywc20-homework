import Footer from "@/components/global/Footer";
import Searcher from "@/components/Searcher";
import IDCard from "@/components/IDCard";
import Image from "next/image";
import { getBaseUrl } from "@/lib/getBaseUrl";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default async function Home() {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/candidates`);
    const candidateData = await res.json();

    return (
        <div className="h-screen items-center justify-center">
            <div className="4xl:px-0 flex w-full items-center justify-center bg-[#190200] px-6 py-8">
                <div className="flex w-full max-w-6xl flex-col items-center justify-center">
                    <div className="flex w-full flex-col items-center justify-center">
                        <div className="w-full max-w-80">
                            <AspectRatio
                                ratio={16 / 9}
                                className="overflow-hidden rounded-md"
                            >
                                <Image
                                    src="/ywc20-logo-main.webp"
                                    alt="Young Webmaster Camp 20 Logo"
                                    sizes="100vw"
                                    layout="fill"
                                    objectFit="cover"
                                    className="py-4"
                                />
                            </AspectRatio>
                        </div>

                        <div className="flex w-full flex-col-reverse sm:flex-row">
                            <div className="w-full p-0 sm:w-1/2 sm:p-6">
                                <Searcher candidates={candidateData} />
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
