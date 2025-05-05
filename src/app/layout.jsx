import localFont from "next/font/local";
import "./globals.css";

const LineSeed = localFont({
    src: [
        {
            path: "../../public/LINESeedSansTH_W_Rg.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/LINESeedSansTH_W_Bd.woff2",
            weight: "700",
            style: "bold",
        },
    ],
});

export const metadata = {
    title: "YWC20: Homework",
    description: "การบ้านสำหรับส่งช่วงสัมภาษณ์สำหรับค่าย Young Webmaster Camp 20",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${LineSeed.className} relative h-screen w-screen overflow-hidden bg-[#190200] antialiased`}
            >
                <div className="scrollbar-hide h-full w-full overflow-auto">
                    {children}
                </div>
            </body>
        </html>
    );
}
