"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FaChevronRight,
    FaHouse,
} from "react-icons/fa6";

export interface NavItem {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

interface NavLinksProps {
    navLinks: NavItem[];
    variant?: "desktop" | "mobile" | "footer";
}

const cx = (...classes: (string | false | null | undefined)[]) => {
    return classes.filter(Boolean).join(" ");
};

const NavLinks = ({
    navLinks,
    variant = "desktop",
}: NavLinksProps) => {
    const pathname = usePathname();

    const closeMobileMenu = () => {
        const drawer = document.getElementById(
            "mobile-nav-drawer"
        ) as HTMLInputElement | null;

        if (drawer) {
            drawer.checked = false;
        }
    };

    /*
        MOBILE NAVIGATION
    */
    if (variant === "mobile") {
        return (
            <nav
                className="px-3"
                aria-label="Mobile navigation"
            >
                <p className="px-3 pb-2 pt-1 text-xs font-bold uppercase tracking-wide text-gray-400">
                    সংবাদ বিভাগ
                </p>

                <div className="space-y-1">

                    {/* Home */}
                    <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={cx(
                            "group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200",
                            pathname === "/"
                                ? "bg-red-50 text-red-700"
                                : "text-gray-800 hover:bg-gray-50 hover:text-red-700"
                        )}
                    >
                        <div
                            className={cx(
                                "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                                pathname === "/"
                                    ? "bg-red-700 text-white"
                                    : "bg-gray-100 text-gray-600 group-hover:bg-red-50 group-hover:text-red-700"
                            )}
                        >
                            <FaHouse />
                        </div>

                        <span className="flex-1 text-[15px] font-bold">
                            হোম
                        </span>

                        <FaChevronRight className="text-xs text-gray-400" />
                    </Link>

                    {/* Categories */}
                    {navLinks.map((navLink) => {
                        const href = `/category/${navLink.slug}`;
                        const isActive = pathname === href;

                        return (
                            <Link
                                key={navLink.slug}
                                href={href}
                                onClick={closeMobileMenu}
                                className={cx(
                                    "group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200",
                                    isActive
                                        ? "bg-red-50 text-red-700"
                                        : "text-gray-800 hover:bg-gray-50 hover:text-red-700"
                                )}
                            >
                                <span
                                    className={cx(
                                        "h-2 w-2 shrink-0 rounded-full",
                                        isActive
                                            ? "bg-red-700"
                                            : "bg-gray-300 group-hover:bg-red-500"
                                    )}
                                />

                                <span className="flex-1 text-[15px] font-bold">
                                    {navLink.title}
                                </span>

                                <FaChevronRight
                                    className={cx(
                                        "text-xs transition-all duration-200 group-hover:translate-x-0.5",
                                        isActive
                                            ? "text-red-700"
                                            : "text-gray-400"
                                    )}
                                />
                            </Link>
                        );
                    })}

                </div>
            </nav>
        );
    }

    /*
        FOOTER NAVIGATION
    */
    if (variant === "footer") {
        return (
            <nav aria-label="Footer navigation">

                <div className="flex flex-wrap justify-start gap-x-5 gap-y-3 text-sm font-semibold text-gray-400 md:justify-end">

                    <Link
                        href="/"
                        className="transition-colors duration-200 hover:text-red-500"
                    >
                        হোম
                    </Link>

                    {navLinks.map((navLink) => (
                        <Link
                            key={navLink.slug}
                            href={`/category/${navLink.slug}`}
                            className="transition-colors duration-200 hover:text-red-500"
                        >
                            {navLink.title}
                        </Link>
                    ))}

                </div>

            </nav>
        );
    }

    /*
        TABLET + DESKTOP NAVIGATION
    */
    return (
        <nav
            className="border-t border-gray-200"
            aria-label="Main navigation"
        >
            <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap py-3.5 text-[14px] font-bold text-gray-800 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-8 lg:text-[15px] xl:justify-center xl:gap-10 xl:py-4 xl:text-[16px]">

                {/* Home */}
                <Link
                    href="/"
                    className={cx(
                        "relative shrink-0 px-1 py-1.5 transition-colors duration-200",
                        pathname === "/"
                            ? "text-red-700"
                            : "hover:text-red-700"
                    )}
                >
                    হোম

                    {pathname === "/" && (
                        <span className="absolute inset-x-0 -bottom-[15px] h-[3px] bg-red-700 xl:-bottom-[17px]" />
                    )}
                </Link>

                {/* Categories */}
                {navLinks.map((navLink) => {
                    const href = `/category/${navLink.slug}`;
                    const isActive = pathname === href;

                    return (
                        <Link
                            key={navLink.slug}
                            href={href}
                            className={cx(
                                "relative shrink-0 px-1 py-1.5 transition-colors duration-200",
                                isActive
                                    ? "text-red-700"
                                    : "hover:text-red-700"
                            )}
                        >
                            {navLink.title}

                            {isActive && (
                                <span className="absolute inset-x-0 -bottom-[15px] h-[3px] bg-red-700 xl:-bottom-[17px]" />
                            )}
                        </Link>
                    );
                })}

            </div>
        </nav>
    );
};

export default NavLinks;