import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/NavHeader";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

import { setServers } from "node:dns/promises";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
setServers(["1.1.1.1", "8.8.8.8"]);

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", 'bengali'],
});



export const metadata: Metadata = {
  title: "Bangla News Bulletin",
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
        <Suspense>
          <NavHeader></NavHeader>
          <Marquee></Marquee>
        </Suspense>

        {children}

        <Suspense>
          <Footer></Footer>
        </Suspense>

        <Toaster
          position="top-right"
        />

      </body>
    </html >
  );
}
