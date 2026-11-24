import Link from "next/link";
import { Suspense } from "react";

import FooterYear from "./FooterYear";
import NavLinks, { NavItem } from "./NavLinks";

const Footer = async () => {
    const response = await fetch(
        "https://news-api-v2.vercel.app/api/categories"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch footer navigation categories");
    }

    const data = await response.json();

    const navLinks: NavItem[] = data.data;

    const filteredNavLinks = navLinks.filter(
        (navLink) => navLink.scrapable
    );

    return (
        <footer className="bg-[#111111] text-gray-300">

            {/* Top Red Border */}
            <div className="h-1 bg-red-700" />

            {/* Main Footer */}
            <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                    {/* Brand */}
                    <div>

                        <Link
                            href="/"
                            className="inline-block text-2xl font-bold text-white transition-colors hover:text-red-500"
                        >
                            Bangla News Bulletin
                        </Link>

                        <p className="mt-4 max-w-lg text-sm leading-7 text-gray-400 md:text-base">
                            দেশ-বিদেশের সর্বশেষ খবর, রাজনীতি, অর্থনীতি,
                            স্বাস্থ্য, খেলা, প্রযুক্তি ও গুরুত্বপূর্ণ সংবাদ
                            সহজভাবে এক জায়গায়।
                        </p>

                    </div>

                    {/* Navigation */}
                    <div className="md:text-right">

                        <h3 className="mb-4 text-lg font-bold text-white">
                            সংবাদ বিভাগ
                        </h3>

                        <NavLinks
                            navLinks={filteredNavLinks}
                            variant="footer"
                        />

                    </div>

                </div>

            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">

                <div
                    className="
                        container
                        mx-auto
                        flex
                        flex-col
                        items-center
                        justify-between
                        gap-2
                        px-4
                        py-5
                        text-center
                        text-sm
                        text-gray-500
                        sm:flex-row
                        sm:px-6
                        sm:text-left
                        lg:px-8
                    "
                >

                    <Suspense
                        fallback={
                            <p>
                                Bangla News Bulletin
                            </p>
                        }
                    >
                        <FooterYear />
                    </Suspense>

                    <p>
                        সর্বস্বত্ব সংরক্ষিত
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;