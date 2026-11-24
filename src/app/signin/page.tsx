"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
    FaEnvelope,
    FaGithub,
    FaGoogle,
    FaLock,
    FaRightToBracket,
} from "react-icons/fa6";

const SignInPage = () => {
    const router = useRouter();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const user = Object.fromEntries(formData.entries()) as {
            email: string;
            password: string;
        };

        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || "সাইন ইন করা সম্ভব হয়নি");
            return;
        }

        if (data) {
            toast.success("আপনার সাইন ইন সফল হয়েছে");
            router.push("/");
        }
    };

    const handleGoogleSignin = async () => {
        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });

        if (error) {
            toast.error(
                error.message || "Google দিয়ে সাইন ইন করা সম্ভব হয়নি"
            );
        }
    };

    const handleGithubSignin = async () => {
        const { error } = await authClient.signIn.social({
            provider: "github",
            callbackURL: "/",
        });

        if (error) {
            toast.error(
                error.message || "GitHub দিয়ে সাইন ইন করা সম্ভব হয়নি"
            );
        }
    };

    return (
        <main className="bg-gray-50 py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-md">

                    {/* Heading */}
                    <div className="mb-7 text-center">
                        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            সাইন ইন
                        </h1>

                        <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-red-700" />

                        <p className="mt-4 text-sm leading-6 text-gray-500">
                            আপনার Bangla News Bulletin অ্যাকাউন্টে সাইন ইন করুন
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

                        {/* Email Sign In Form */}
                        <form onSubmit={onSubmit}>
                            <fieldset className="space-y-5">

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold text-gray-700"
                                    >
                                        ইমেইল
                                    </label>

                                    <label className="input input-bordered flex w-full items-center gap-3 focus-within:border-red-700 focus-within:outline-none">
                                        <FaEnvelope className="shrink-0 text-gray-400" />

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="আপনার ইমেইল লিখুন"
                                            autoComplete="email"
                                            className="grow"
                                            required
                                        />
                                    </label>
                                </div>

                                {/* Password */}
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="mb-2 block text-sm font-semibold text-gray-700"
                                    >
                                        পাসওয়ার্ড
                                    </label>

                                    <label className="input input-bordered flex w-full items-center gap-3 focus-within:border-red-700 focus-within:outline-none">
                                        <FaLock className="shrink-0 text-gray-400" />

                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="আপনার পাসওয়ার্ড লিখুন"
                                            autoComplete="current-password"
                                            className="grow"
                                            required
                                        />
                                    </label>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="btn mt-2 w-full border-none bg-red-700 text-white shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#111111] hover:shadow-md"
                                >
                                    <FaRightToBracket />
                                    সাইন ইন করুন
                                </button>

                                {/* Sign Up Link */}
                                <p className="text-center text-sm text-gray-500">
                                    এখনো অ্যাকাউন্ট নেই?{" "}
                                    <Link
                                        href="/signup"
                                        className="font-semibold text-red-700 transition-colors hover:text-red-900 hover:underline"
                                    >
                                        সাইন আপ
                                    </Link>
                                </p>

                            </fieldset>
                        </form>

                        {/* Divider */}
                        <div className="my-6 flex items-center gap-4">
                            <div className="h-px flex-1 bg-gray-200" />

                            <span className="text-sm text-gray-400">
                                অথবা
                            </span>

                            <div className="h-px flex-1 bg-gray-200" />
                        </div>

                        {/* Social Authentication */}
                        <div className="space-y-3">

                            {/* Google */}
                            <button
                                type="button"
                                onClick={handleGoogleSignin}
                                className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-700 hover:text-red-700 hover:shadow-md"
                            >
                                <FaGoogle className="text-xl text-red-600" />

                                <span>
                                    Google দিয়ে চালিয়ে যান
                                </span>
                            </button>

                            {/* GitHub */}
                            <button
                                type="button"
                                onClick={handleGithubSignin}
                                className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-md"
                            >
                                <FaGithub className="text-xl" />

                                <span>
                                    GitHub দিয়ে চালিয়ে যান
                                </span>
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </main>
    );
};

export default SignInPage;