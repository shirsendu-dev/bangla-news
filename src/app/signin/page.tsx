'use client';

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import toast from "react-hot-toast";
import {
    FaEnvelope,
    FaLock,
    FaRightToBracket,
} from "react-icons/fa6";

const SignInPage = () => {

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as { email: string, password: string };

        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: '/'
        })

        if(data){
            toast.success('আপনার সাইন ইন সফল হয়েছে')
            console.log(data);
        }
        if(error){
            toast.error(error?.message as string);
            console.log(error);
            
        }
    }

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
                                            className="grow"
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
                                            className="grow"
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

                    </div>

                </div>

            </div>
        </main>
    );
};

export default SignInPage;