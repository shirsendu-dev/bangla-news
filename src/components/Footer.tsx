import Link from "next/link";
import NavLinks from "./NavLinks";

const Footer = () => {
    return (
        <footer className="mt-16 bg-[#111111] text-gray-300">

            {/* Top red border */}
            <div className="h-1 bg-red-700" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="inline-block text-2xl font-bold text-white hover:text-red-500 transition-colors"
                        >
                            Bangla News Bulletin
                        </Link>

                        <p className="mt-4 max-w-lg text-sm md:text-base leading-7 text-gray-400">
                            দেশ-বিদেশের সর্বশেষ খবর, রাজনীতি, অর্থনীতি,
                            স্বাস্থ্য, খেলা, প্রযুক্তি ও গুরুত্বপূর্ণ সংবাদ
                            সহজভাবে এক জায়গায়।
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="md:text-right">

                        <h3 className="text-lg font-bold text-white mb-4">
                            সংবাদ বিভাগ
                        </h3>

                        <div className="footer-nav">
                            <NavLinks />
                        </div>

                    </div>

                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-800">

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row gap-2 justify-between items-center text-sm text-gray-500">

                    <p>
                        © {new Date().getFullYear()} Bangla News Bulletin
                    </p>

                    <p>
                        সর্বস্বত্ব সংরক্ষিত
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;