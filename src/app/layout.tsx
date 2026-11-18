import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/NavHeader";
import Marquee from "@/components/Marquee";
import { Suspense } from "react";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", 'bengali'],
});



export const metadata: Metadata = {
  title: "Bangla Bulletin News",
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
        <Suspense fallback="Loading, Please wait...">
          <NavHeader></NavHeader>
          <Marquee></Marquee>
        </Suspense>

        {children}
      </body>
    </html>
  );
}
