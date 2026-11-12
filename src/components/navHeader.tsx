import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import CurrentDate from "./CurrentDate";
import NavLinks from "./NavLinks";

const NavHeader = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">

        {/* Top Section */}
        <div className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">

          {/* Logo + Brand */}
          <Link
            href="/"
            className="flex items-center justify-center gap-3 md:justify-start"
          >
            <Image
              src="/logo.webp"
              width={56}
              height={56}
              alt="Bangla News Bulletin Logo"
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              priority
            />

            <div>
              <h1 className="text-xl font-semibold text-red-600 sm:text-2xl">
                Bangla News Bulletin
              </h1>

              <Suspense
                fallback={
                  <p className="mt-1 text-sm text-gray-400">
                    তারিখ লোড হচ্ছে...
                  </p>
                }
              >
                <CurrentDate />
              </Suspense>
            </div>
          </Link>

          {/* Authentication Buttons */}
          <div className="flex items-center justify-center gap-2 md:justify-end">
            <Link
              href="/signin"
              className="btn btn-ghost btn-sm sm:btn-md"
            >
              সাইন ইন
            </Link>

            <Link
              href="/signup"
              className="btn btn-sm border-none bg-red-700 text-white hover:bg-red-800 sm:btn-md"
            >
              সাইন আপ
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <Suspense
          fallback={
            <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-400">
              নেভিগেশন লোড হচ্ছে...
            </div>
          }
        >
          <NavLinks />
        </Suspense>

      </div>
    </header>
  );
};

export default NavHeader;