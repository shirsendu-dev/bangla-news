import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/NavHeader";
import Marquee from "@/components/Marquee";
import { Suspense } from "react";
import Footer from "@/components/Footer";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", 'bengali'],
});



export const metadata: Metadata = {
  title: "Bangla News Bullentin",
  description: "NextJs app by SB Shaon",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${notoSerifBengali.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" cz-shortcut-listen="true">

        <NavHeader></NavHeader>
        <Marquee></Marquee>

        {children}

        <Footer></Footer>

      </body>
    </html >
  );
}
