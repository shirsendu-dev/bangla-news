'use client';
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log(user);

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    return (
        <div>
            {
                user ?
                    <div className="flex gap-3 items-center">

                        {/* user Image */}
                        <div className="avatar">
                            <div className=" ring-red-700 w-8 rounded-full ring-2 ring-offset-2">
                                <Image
                                    alt="User Image"
                                    src={user?.image as string}
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </div>

                        {/* User name */}
                        <div>
                            <p className="font-bold">{user?.name}</p>
                            <span className=""></span>
                        </div>

                        {/* logout button */}
                        <div >
                            <button
                                onClick={handleSignOut}
                                className="btn **:"
                            >
                                সাইন আউট করুন
                            </button>
                        </div>
                    </div>
                    :
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
            }

        </div>
    );
};

export default UserInfo;