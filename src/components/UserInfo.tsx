"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import {
    FaChevronDown,
    FaChevronRight,
    FaRightFromBracket,
    FaRightToBracket,
    FaUser,
    FaUserGear,
    FaUserPlus,
} from "react-icons/fa6";

const UserInfo = () => {
    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    // Loading state
    if (isPending) {
        return (
            <div className="flex items-center justify-center md:justify-end">
                <div className="flex items-center gap-3 rounded-full border border-gray-200 px-3 py-2">
                    <div className="h-9 w-9 animate-pulse rounded-full bg-gray-200" />

                    <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center md:justify-end">

            {user ? (
                /* Logged In */
                <div className="dropdown dropdown-end">

                    {/* Profile Button */}
                    <button
                        tabIndex={0}
                        type="button"
                        className="flex items-center gap-3 rounded-full border border-gray-200 bg-white py-1.5 pl-1.5 pr-3 shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-md"
                    >

                        {/* Avatar */}
                        {user.image ? (
                            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-red-700 ring-offset-1">

                                <Image
                                    src={user.image}
                                    alt={user.name || "User"}
                                    fill
                                    sizes="40px"
                                    className="object-cover"
                                />

                            </div>
                        ) : (
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-700 text-white">

                                <FaUser />

                            </div>
                        )}

                        {/* Name */}
                        <div className="text-left">

                            <p className="whitespace-nowrap px-1 text-sm font-bold leading-6 text-gray-900">
                                {user.name}
                            </p>

                            <p className="whitespace-nowrap px-1 text-xs leading-4 text-gray-500">
                                আমার অ্যাকাউন্ট
                            </p>

                        </div>

                        <FaChevronDown className="shrink-0 text-xs text-gray-400" />

                    </button>

                    {/* Dropdown */}
                    <div
                        tabIndex={0}
                        className="dropdown-content z-50 mt-3 w-72 rounded-xl border border-gray-200 bg-white p-2 shadow-xl"
                    >

                        {/* User Details */}
                        <div className="px-3 py-3">

                            <div className="flex items-center gap-3">

                                {/* Small Avatar */}
                                {user.image ? (
                                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">

                                        <Image
                                            src={user.image}
                                            alt={user.name || "User"}
                                            fill
                                            sizes="44px"
                                            className="object-cover"
                                        />

                                    </div>
                                ) : (
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-700 font-bold text-white">

                                        {user.name?.charAt(0).toUpperCase() || "U"}

                                    </div>
                                )}

                                <div className="min-w-0 flex-1">

                                    <p className="px-1 text-sm font-bold leading-6 text-gray-900">
                                        {user.name}
                                    </p>

                                    <p className="mt-0.5 truncate px-1 text-xs text-gray-500">
                                        {user.email}
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Divider */}
                        <div className="mx-2 border-t border-gray-100" />

                        {/* Profile Settings */}
                        <div className="py-2">

                            <Link
                                href="/profile"
                                className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-gray-50"
                            >

                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-700 transition-colors duration-200 group-hover:bg-red-700 group-hover:text-white">

                                    <FaUserGear />

                                </div>

                                <div className="min-w-0 flex-1">

                                    <p className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-red-700">
                                        প্রোফাইল সেটিংস
                                    </p>

                                    <p className="mt-0.5 text-xs text-gray-500">
                                        তথ্য দেখুন ও আপডেট করুন
                                    </p>

                                </div>

                                <FaChevronRight className="shrink-0 text-xs text-gray-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-red-700" />

                            </Link>

                        </div>

                        {/* Divider */}
                        <div className="mx-2 border-t border-gray-100" />

                        {/* Sign Out */}
                        <div className="pt-2">

                            <button
                                type="button"
                                onClick={handleSignOut}
                                className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-red-700 transition-colors duration-200 hover:bg-red-50"
                            >

                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 transition-colors duration-200 group-hover:bg-red-700 group-hover:text-white">

                                    <FaRightFromBracket />

                                </div>

                                <span>
                                    সাইন আউট করুন
                                </span>

                            </button>

                        </div>

                    </div>

                </div>
            ) : (
                /* Logged Out */
                <div className="flex items-center gap-2">

                    <Link
                        href="/signin"
                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-red-700"
                    >
                        <FaRightToBracket />

                        সাইন ইন
                    </Link>

                    <Link
                        href="/signup"
                        className="flex items-center gap-2 rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#111111] hover:shadow-md"
                    >
                        <FaUserPlus />

                        সাইন আপ
                    </Link>

                </div>
            )}

        </div>
    );
};

export default UserInfo;