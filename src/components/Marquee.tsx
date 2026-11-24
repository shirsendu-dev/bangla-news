import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

export const instant = false;

interface Headlines {
    id: string;
    title: string;
}

const Marquee = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/news?limit=10"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch latest headlines");
    }

    const data = await res.json();

    const headlines: Headlines[] = data.data;

    return (
        <section
            className="bg-red-600 text-white"
            aria-label="সর্বশেষ সংবাদ"
        >
            <div className="container mx-auto flex min-h-10 items-stretch overflow-hidden sm:min-h-11 lg:min-h-12">

                {/* Latest Label */}
                <div className="relative z-10 flex shrink-0 items-center bg-red-800 px-2.5 sm:px-4 lg:px-5">

                    <span
                        className="
                            whitespace-nowrap
                            text-[11px]
                            font-bold
                            leading-none
                            sm:text-[13px]
                            lg:text-[14px]
                        "
                    >
                        সর্বশেষ
                    </span>

                </div>

                {/* Marquee */}
                <div className="flex min-w-0 flex-1 items-center overflow-hidden">

                    <MarqueeText
                        duration={24}
                        pauseOnHover={true}
                        direction="right"
                    >
                        <div className="flex min-w-max items-center whitespace-nowrap">

                            {headlines.map((headline) => (
                                <div
                                    key={headline.id}
                                    className="flex items-center"
                                >

                                    <Link
                                        href={`/news/${headline.id}`}
                                        className="
                                            py-2
                                            text-[12px]
                                            font-medium
                                            leading-6
                                            transition-opacity
                                            duration-200
                                            hover:opacity-80
                                            hover:underline
                                            sm:text-[14px]
                                            lg:text-[15px]
                                        "
                                    >
                                        {headline.title}
                                    </Link>

                                    {/* Separator */}
                                    <span
                                        className="
                                            mx-3
                                            text-[9px]
                                            text-red-200
                                            sm:mx-5
                                            sm:text-[10px]
                                            lg:mx-6
                                        "
                                        aria-hidden="true"
                                    >
                                        ◆
                                    </span>

                                </div>
                            ))}

                        </div>
                    </MarqueeText>

                </div>

            </div>
        </section>
    );
};

export default Marquee;