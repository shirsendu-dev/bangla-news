"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import {
    FaChevronDown,
    FaRightFromBracket,
    FaRightToBracket,
    FaUser,
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
                            <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-red-700 ring-offset-1">
                                <Image
                                    src={user.image}
                                    alt={user.name || "User"}
                                    fill
                                    sizes="40px"
                                    className="object-cover"
                                />
                            </div>
                        ) : (
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-white">
                                <FaUser />
                            </div>
                        )}

                        {/* Name */}
                        <div className="text-left">
                            <p className="max-w-32 truncate text-sm font-bold text-gray-900">
                                {user.name}
                            </p>

                            <p className="text-xs text-gray-500">
                                আমার অ্যাকাউন্ট
                            </p>
                        </div>

                        <FaChevronDown className="text-xs text-gray-400" />
                    </button>

                    {/* Dropdown */}
                    <div
                        tabIndex={0}
                        className="dropdown-content z-50 mt-3 w-64 rounded-xl border border-gray-200 bg-white p-3 shadow-xl"
                    >

                        {/* User Details */}
                        <div className="border-b border-gray-100 px-2 pb-3">
                            <p className="font-bold text-gray-900">
                                {user.name}
                            </p>

                            <p className="mt-1 mb-2 truncate text-xs text-gray-500">
                                {user.email}
                            </p>
                            <Link href={'/profile'} className="text-[14px] hover:text-red-700 hover:underline">Profile Settings</Link>
                        </div>

                        {/* Sign Out */}
                        <button
                            type="button"
                            onClick={handleSignOut}
                            className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-red-700 transition-colors hover:bg-red-50"
                        >
                            <FaRightFromBracket />

                            সাইন আউট করুন
                        </button>

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