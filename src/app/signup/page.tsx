import Link from "next/link";
import {
    FaEnvelope,
    FaImage,
    FaLock,
    FaUser,
    FaUserPlus,
} from "react-icons/fa6";

const SignUpPage = () => {
    return (
        <main className="bg-gray-50 py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-md">

                    {/* Heading */}
                    <div className="mb-7 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            সাইন আপ
                        </h2>

                        <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-red-700" />

                        <p className="mt-4 text-sm leading-6 text-gray-500">
                            Bangla News Bulletin-এ আপনার অ্যাকাউন্ট তৈরি করুন
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

                        <form>
                            <fieldset className="space-y-5">

                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-semibold text-gray-700"
                                    >
                                        নাম
                                    </label>

                                    <label className="input input-bordered flex w-full items-center gap-3 focus-within:border-red-700 focus-within:outline-none">
                                        <FaUser className="shrink-0 text-gray-400" />

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="আপনার নাম লিখুন"
                                            className="grow"
                                        />
                                    </label>
                                </div>

                                {/* Image */}
                                <div>
                                    <label
                                        htmlFor="image"
                                        className="mb-2 block text-sm font-semibold text-gray-700"
                                    >
                                        ছবির URL
                                    </label>

                                    <label className="input input-bordered flex w-full items-center gap-3 focus-within:border-red-700 focus-within:outline-none">
                                        <FaImage className="shrink-0 text-gray-400" />

                                        <input
                                            id="image"
                                            name="image"
                                            type="url"
                                            placeholder="https://example.com/photo.jpg"
                                            className="grow"
                                        />
                                    </label>
                                </div>

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
                                            placeholder="পাসওয়ার্ড লিখুন"
                                            className="grow"
                                        />
                                    </label>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="btn mt-2 w-full border-none bg-red-700 text-white shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#111111] hover:shadow-md"
                                >
                                    <FaUserPlus />
                                    সাইন আপ করুন
                                </button>
                                {/* Sign In Link */}
                                <p className="text-center text-sm text-gray-500">
                                    ইতোমধ্যে একটি অ্যাকাউন্ট আছে?{" "}
                                    <Link
                                        href="/signin"
                                        className="font-semibold text-red-700 transition-colors hover:text-red-900 hover:underline"
                                    >
                                        সাইন ইন
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

export default SignUpPage;