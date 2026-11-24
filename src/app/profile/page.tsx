"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    FaEnvelope,
    FaFloppyDisk,
    FaHouse,
    FaImage,
    FaNewspaper,
    FaRightFromBracket,
    FaShieldHalved,
    FaUser,
} from "react-icons/fa6";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    const [show, setShow] = useState(false);


    const handleProfileUpdate = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const newUserData = Object.fromEntries(formData.entries()) as { name: string, image: string }

        await authClient.updateUser({
            ...newUserData
        })
    };

    const handleShowForm = () => {
        setShow(!show);
    }


    // Loading state
    if (isPending) {
        return (
            <main className="min-h-[70vh] bg-gray-50 py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mx-auto max-w-4xl">

                        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                            <div className="h-40 animate-pulse bg-gray-200" />

                            <div className="px-6 pb-8 sm:px-8">

                                <div className="-mt-14 h-28 w-28 animate-pulse rounded-full border-4 border-white bg-gray-300" />

                                <div className="mt-5 space-y-3">
                                    <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />
                                    <div className="h-4 w-56 animate-pulse rounded bg-gray-200" />
                                </div>

                                <div className="mt-8 grid gap-4 md:grid-cols-2">
                                    <div className="h-28 animate-pulse rounded-xl bg-gray-100" />
                                    <div className="h-28 animate-pulse rounded-xl bg-gray-100" />
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </main>
        );
    }

    // No logged-in user
    if (!user) {
        return (
            <main className="flex min-h-[65vh] items-center justify-center bg-gray-50 px-4">

                <div className="max-w-md text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-2xl text-red-700">
                        <FaUser />
                    </div>

                    <h1 className="mt-5 text-2xl font-bold text-gray-900">
                        আপনি সাইন ইন করেননি
                    </h1>

                    <p className="mt-3 text-gray-500">
                        আপনার প্রোফাইল দেখতে প্রথমে আপনার অ্যাকাউন্টে সাইন ইন করুন।
                    </p>

                    <Link
                        href="/signin"
                        className="mt-6 inline-flex items-center rounded-lg bg-red-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#111111] hover:shadow-md"
                    >
                        সাইন ইন করুন
                    </Link>

                </div>

            </main>
        );
    };


    return (
        <main className="min-h-[70vh] bg-gray-50 py-8 sm:py-12">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-4xl">

                    {/* Page Heading */}
                    <div className="mb-6">

                        <p className="text-sm font-semibold text-red-700">
                            আমার অ্যাকাউন্ট
                        </p>

                        <h2 className="mt-1 text-3xl font-bold text-gray-900 sm:text-4xl">
                            প্রোফাইল
                        </h2>

                    </div>

                    {/* Main Profile Card */}
                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                        {/* Cover */}
                        <div className="relative h-36 bg-gradient-to-r from-[#111111] via-[#251313] to-red-800 sm:h-44">

                            <div className="absolute inset-0 flex items-center justify-end overflow-hidden px-8">
                                <FaNewspaper className="text-[120px] text-white/5 sm:text-[160px]" />
                            </div>

                        </div>

                        {/* Profile Content */}
                        <div className="px-5 pb-8 sm:px-8">

                            {/* User Header */}
                            <div className="-mt-14 flex flex-col gap-5 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">

                                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">

                                    {/* Profile Image */}
                                    {user.image ? (
                                        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-white bg-white shadow-md sm:h-32 sm:w-32">

                                            <Image
                                                src={user.image}
                                                alt={user.name || "User"}
                                                fill
                                                sizes="128px"
                                                className="object-cover"
                                                priority
                                            />

                                        </div>
                                    ) : (
                                        <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-4 border-white bg-red-700 text-4xl font-bold text-white shadow-md sm:h-32 sm:w-32">

                                            {user.name?.charAt(0).toUpperCase() || "U"}

                                        </div>
                                    )}

                                    {/* Name */}
                                    <div className="pb-1 text-center sm:text-left">

                                        <h2 className="text-2xl font-bold text-gray-900">
                                            {user.name}
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Bangla News Bulletin সদস্য
                                        </p>

                                    </div>

                                </div>

                                {/* Active Status */}
                                <div className="self-center pb-1 sm:self-auto">

                                    <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                                        <span className="h-2 w-2 rounded-full bg-green-500" />
                                        সক্রিয় অ্যাকাউন্ট
                                    </span>

                                </div>

                            </div>

                            {/* Account Information */}
                            <div className="mt-8 border-t border-gray-100 pt-7">

                                <h3 className="mb-5 text-lg font-bold text-gray-900">
                                    অ্যাকাউন্ট তথ্য
                                </h3>

                                <div className="grid gap-4 md:grid-cols-2">

                                    {/* Name */}
                                    <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4">

                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-700">
                                            <FaUser />
                                        </div>

                                        <div className="min-w-0">

                                            <p className="text-xs font-medium text-gray-500">
                                                নাম
                                            </p>

                                            <p className="mt-1 truncate font-semibold text-gray-900">
                                                {user?.name}
                                            </p>

                                        </div>

                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4">

                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-700">
                                            <FaEnvelope />
                                        </div>

                                        <div className="min-w-0">

                                            <p className="text-xs font-medium text-gray-500">
                                                ইমেইল
                                            </p>

                                            <p className="mt-1 truncate font-semibold text-gray-900">
                                                {user?.email}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* Update Profile Form */}
                            <div className="mt-8 border-t border-gray-100 pt-7">

                                <div className="flex justify-between items-center gap-3">
                                    <div className="mb-6">

                                        <h3 className="text-xl font-bold text-gray-900">
                                            প্রোফাইল আপডেট করুন
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-gray-500">
                                            আপনার ব্যক্তিগত তথ্য পরিবর্তন করতে নিচের তথ্যগুলো আপডেট করুন।
                                        </p>

                                    </div>


                                    {/* Update profile button */}
                                    <button onClick={handleShowForm} className="btn mb-5">তথ্য পরিবর্তন করুন</button>

                                </div>



                                {/* Update profile Form */}

                                {
                                    show &&

                                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6">

                                        <form onSubmit={handleProfileUpdate}>

                                            <fieldset className="space-y-5">

                                                {/* Name */}
                                                <div>

                                                    <label
                                                        htmlFor="name"
                                                        className="mb-2 block text-sm font-semibold text-gray-700"
                                                    >
                                                        নাম
                                                    </label>

                                                    <label className="input input-bordered flex w-full items-center gap-3 bg-white focus-within:border-red-700 focus-within:outline-none">

                                                        <FaUser className="shrink-0 text-gray-400" />

                                                        <input
                                                            id="name"
                                                            name="name"
                                                            type="text"
                                                            defaultValue={user.name || ""}
                                                            placeholder="আপনার নাম লিখুন"
                                                            className="grow"
                                                        />

                                                    </label>

                                                </div>

                                                {/* Image URL */}
                                                <div>

                                                    <label
                                                        htmlFor="image"
                                                        className="mb-2 block text-sm font-semibold text-gray-700"
                                                    >
                                                        ছবির URL
                                                    </label>

                                                    <label className="input input-bordered flex w-full items-center gap-3 bg-white focus-within:border-red-700 focus-within:outline-none">

                                                        <FaImage className="shrink-0 text-gray-400" />

                                                        <input
                                                            id="image"
                                                            name="image"
                                                            type="url"
                                                            defaultValue={user.image || ""}
                                                            placeholder="https://example.com/photo.jpg"
                                                            className="grow"
                                                        />

                                                    </label>

                                                </div>

                                                {/* Email */}

                                                {/* <div>

                                                <label
                                                    htmlFor="email"
                                                    className="mb-2 block text-sm font-semibold text-gray-700"
                                                >
                                                    ইমেইল
                                                </label>

                                                <label className="input input-bordered flex w-full items-center gap-3 bg-white focus-within:border-red-700 focus-within:outline-none">

                                                    <FaEnvelope className="shrink-0 text-gray-400" />

                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        defaultValue={user.email || ""}
                                                        placeholder="আপনার ইমেইল লিখুন"
                                                        className="grow"
                                                    />

                                                </label>

                                            </div> */}

                                                {/* Update Button */}
                                                <button
                                                    type="submit"
                                                    className="btn mt-2 w-full border-none bg-red-700 text-white shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#111111] hover:shadow-md"
                                                >
                                                    <FaFloppyDisk />

                                                    প্রোফাইল আপডেট করুন
                                                </button>

                                            </fieldset>

                                        </form>

                                    </div>
                                }

                            </div>

                        </div>

                    </div>

                    {/* Bottom Cards */}
                    <div className="mt-6 grid gap-5 md:grid-cols-2">

                        {/* Account Security */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                            <div className="flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-700">
                                    <FaShieldHalved className="text-lg" />
                                </div>

                                <div>

                                    <h3 className="font-bold text-gray-900">
                                        অ্যাকাউন্ট নিরাপত্তা
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        আপনার সেশন বর্তমানে সক্রিয়
                                    </p>

                                </div>

                            </div>

                            <p className="mt-5 text-sm leading-6 text-gray-600">
                                কাজ শেষে শেয়ার করা ডিভাইস থেকে অবশ্যই সাইন আউট করুন।
                            </p>

                            <button
                                type="button"
                                onClick={handleSignOut}
                                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-700 transition-all duration-300 hover:border-red-700 hover:bg-red-700 hover:text-white"
                            >
                                <FaRightFromBracket />

                                সাইন আউট করুন
                            </button>

                        </div>

                        {/* Navigation */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                            <div className="flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-800">
                                    <FaHouse />
                                </div>

                                <div>

                                    <h3 className="font-bold text-gray-900">
                                        সংবাদে ফিরে যান
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        সর্বশেষ সংবাদ পড়ুন
                                    </p>

                                </div>

                            </div>

                            <p className="mt-5 text-sm leading-6 text-gray-600">
                                দেশ-বিদেশের সর্বশেষ সংবাদ ও গুরুত্বপূর্ণ আপডেট দেখতে হোম পেজে ফিরে যান।
                            </p>

                            <Link
                                href="/"
                                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#111111] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-md"
                            >
                                <FaHouse />

                                হোম পেজে যান
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
};

export default ProfilePage;