import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

import CurrentDate from "./CurrentDate";
import NavLinks, { NavItem } from "./NavLinks";
import UserInfo from "./UserInfo";

const NavHeader = async () => {
  const response = await fetch(
    "https://news-api-v2.vercel.app/api/categories"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch navigation categories");
  }

  const data = await response.json();

  const navLinks: NavItem[] = data.data;

  const filteredNavLinks = navLinks.filter(
    (navLink) => navLink.scrapable
  );

  return (
    <div className="drawer drawer-end">

      {/* Mobile Drawer Toggle */}
      <input
        id="mobile-nav-drawer"
        type="checkbox"
        className="drawer-toggle"
      />

      {/* Main Header */}
      <div className="drawer-content">

        <header className="border-b border-gray-200 bg-white">

          <div className="container mx-auto px-3 sm:px-5 md:px-6 lg:px-4 xl:px-0">

            {/* Top Header */}
            <div className="flex items-center justify-between gap-3 py-3 sm:py-4">

              {/* Logo + Brand */}
              <Link
                href="/"
                className="flex min-w-0 items-center gap-2.5 sm:gap-3"
              >

                <Image
                  src="/logo.webp"
                  width={56}
                  height={56}
                  alt="Bangla News Bulletin Logo"
                  priority
                  className="
                                        h-10
                                        w-10
                                        shrink-0
                                        object-contain
                                        sm:h-12
                                        sm:w-12
                                        lg:h-14
                                        lg:w-14
                                    "
                />

                <div className="min-w-0">

                  <h1
                    className="
                                            whitespace-nowrap
                                            text-[17px]
                                            font-bold
                                            leading-tight
                                            text-red-700
                                            sm:text-xl
                                            lg:text-[22px]
                                        "
                  >
                    Bangla News Bulletin
                  </h1>

                  <Suspense
                    fallback={
                      <div className="mt-1 h-3 w-28 animate-pulse rounded bg-gray-200" />
                    }
                  >
                    <CurrentDate />
                  </Suspense>

                </div>

              </Link>

              {/* Right Side */}
              <div className="flex shrink-0 items-center gap-3">

                {/* Tablet / Desktop User */}
                <div className="hidden md:block">

                  <Suspense
                    fallback={
                      <div className="h-10 w-32 animate-pulse rounded-full bg-gray-200" />
                    }
                  >
                    <UserInfo />
                  </Suspense>

                </div>

                {/* Mobile Menu Button */}
                <label
                  htmlFor="mobile-nav-drawer"
                  aria-label="Open navigation menu"
                  className="
                                        flex
                                        h-10
                                        w-10
                                        cursor-pointer
                                        items-center
                                        justify-center
                                        rounded-lg
                                        border
                                        border-gray-200
                                        bg-white
                                        text-gray-800
                                        shadow-sm
                                        transition-all
                                        duration-200
                                        hover:border-red-200
                                        hover:bg-red-50
                                        hover:text-red-700
                                        md:hidden
                                    "
                >
                  <FaBars className="text-xl" />
                </label>

              </div>

            </div>

            {/* Tablet / Desktop Navigation */}
            <div className="hidden md:block">

              <NavLinks
                navLinks={filteredNavLinks}
                variant="desktop"
              />

            </div>

          </div>

        </header>

      </div>

      {/* Mobile Slide-in Drawer */}
      <div className="drawer-side z-[100] md:hidden">

        {/* Dark Overlay */}
        <label
          htmlFor="mobile-nav-drawer"
          aria-label="Close navigation menu"
          className="drawer-overlay"
        />

        <aside
          className="
                        min-h-full
                        w-[86vw]
                        max-w-[340px]
                        bg-white
                        shadow-2xl
                    "
        >

          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">

            <div className="flex items-center gap-3">

              <Image
                src="/logo.webp"
                width={42}
                height={42}
                alt="Bangla News Bulletin Logo"
                className="h-10 w-10 object-contain"
              />

              <div>

                <p className="text-[15px] font-bold text-red-700">
                  Bangla News Bulletin
                </p>

                <p className="mt-0.5 text-xs text-gray-500">
                  সংবাদ বিভাগ
                </p>

              </div>

            </div>

            {/* Close */}
            <label
              htmlFor="mobile-nav-drawer"
              aria-label="Close navigation menu"
              className="
                                flex
                                h-9
                                w-9
                                cursor-pointer
                                items-center
                                justify-center
                                rounded-lg
                                text-gray-500
                                transition-colors
                                hover:bg-gray-100
                                hover:text-red-700
                            "
            >
              <FaXmark className="text-xl" />
            </label>

          </div>

          {/* Mobile User Area */}
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-4">

            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-400">
              আমার অ্যাকাউন্ট
            </p>

            <Suspense
              fallback={
                <div className="h-11 w-full animate-pulse rounded-lg bg-gray-200" />
              }
            >
              <UserInfo />
            </Suspense>

          </div>

          {/* Mobile Navigation */}
          <div className="py-3">

            <NavLinks
              navLinks={filteredNavLinks}
              variant="mobile"
            />

          </div>

        </aside>

      </div>

    </div>
  );
};

export default NavHeader;