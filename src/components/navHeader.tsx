
import Image from "next/image";
import Link from "next/link";

const NavHeader = () => {

    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full',
    });

    const navLinks =
        <>

            <Link href=''>হোম</Link>
            <Link href=''>রাজনীতি</Link>
            <Link href=''>বিশ্ব</Link>
            <Link href=''>অর্থনীতি</Link>
            <Link href=''>স্বাস্থ্য</Link>
            <Link href=''>খেলা</Link>
            <Link href=''>প্রযুক্তি</Link>

        </>
        ;

    return (
        <div className="py-5 px-5">
            <div className="flex flex-wrap gap-2 justify-center items-center">
                <div>
                    <Image
                        src={'/logo.webp'}
                        width={50}
                        height={50}
                        className="w-14 h-auto"
                        alt="Logo">
                    </Image>
                </div>
                <div>
                    <p className="text-red-400 text-[22px]">Bangla News Bullentin</p>
                    {date}
                </div>

                <div className="flex flex-wrap absolute right-5">
                    <button className="border-0 bg-transparent px-3">সাইন ইন</button>
                    <button className="btn bg-red-700 text-white">সাইন আপ</button>
                </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-8 text-[18px]">
                {navLinks}
            </div>
        </div>
    );
};

export default NavHeader;