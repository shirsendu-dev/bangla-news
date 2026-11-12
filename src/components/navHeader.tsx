import Image from "next/image";
import Link from "next/link";

const NavHeader = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  const navLinks = [
    { name: "হোম", href: "/" },
    { name: "রাজনীতি", href: "/politics" },
    { name: "বিশ্ব", href: "/world" },
    { name: "অর্থনীতি", href: "/economy" },
    { name: "স্বাস্থ্য", href: "/health" },
    { name: "খেলা", href: "/sports" },
    { name: "প্রযুক্তি", href: "/technology" },
    { name: "দেখুন", href: "/watch" },
  ];

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          
          {/* Logo + Website Name */}
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <Image
              src="/logo.webp"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
              alt="Bangla News Bulletin Logo"
              priority
            />

            <div>
              <h1 className="text-xl font-semibold text-red-600 sm:text-2xl">
                Bangla News Bulletin
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                {date}
              </p>
            </div>
          </div>

          {/* Authentication Buttons */}
          <div className="flex items-center justify-center gap-2 md:justify-end">
            <button className="btn btn-ghost btn-sm sm:btn-md">
              সাইন ইন
            </button>

            <button className="btn btn-error btn-sm text-white sm:btn-md">
              সাইন আপ
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-5 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap pb-2 text-base font-medium md:justify-center md:overflow-visible md:pb-0 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors duration-200 hover:text-red-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

      </div>
    </header>
  );
};

export default NavHeader;