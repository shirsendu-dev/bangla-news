import Link from "next/link";
import { FaHouse } from "react-icons/fa6";

const NotFound = () => {
    return (
        <main className="min-h-[70vh] flex items-center justify-center px-4 py-16">

            <div className="max-w-2xl mx-auto text-center">

                <h1 className="text-[100px] sm:text-[130px] md:text-[160px] font-bold leading-none text-red-700">
                    ৪০৪
                </h1>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                    পেজটি খুঁজে পাওয়া যায়নি
                </h2>

                <p className="text-gray-600 text-base sm:text-lg leading-7 mt-4 max-w-xl mx-auto">
                    আপনি যে পেজ বা সংবাদটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে,
                    ঠিকানা পরিবর্তন হয়েছে অথবা এটি আর পাওয়া যাচ্ছে না।
                </p>

                <div className="w-20 h-1 bg-red-700 mx-auto my-7 rounded-full" />

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-red-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-red-800 hover:-translate-y-0.5 transition-all duration-300"
                >
                    <FaHouse />
                    হোম পেজে ফিরে যান
                </Link>

            </div>

        </main>
    );
};

export default NotFound;