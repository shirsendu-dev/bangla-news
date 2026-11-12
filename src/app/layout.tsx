import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/navHeader";

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
        <NavHeader></NavHeader>
        {children} 
        </body>
    </html>
  );
}
