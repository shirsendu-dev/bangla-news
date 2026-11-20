import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Topic {
    id: string;
    name: string;
}

interface NewsBodyItem {
    type: "text" | "image";
    text?: string;
    url?: string;
    width?: number;
    height?: number;
    caption?: string;
    altText?: string;
    copyrightHolder?: string;
}

interface NewsArticle {
    id: string;
    title: string;
    imageUrl: string;
    firstPublished: string;
    source: string;
    sourceUrl: string;
    topics: Topic[];
    tags: string[];
    body: NewsBodyItem[];
}

const NewsDetailsPage = async ({
    params,
}: {
    params: Promise<{ newsId: string }>;
}) => {
    const { newsId } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/article/${newsId}`
    );

    // If API itself returns 404/500
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();

    // If response exists but data.data doesn't
    if (!data?.data) {
        console.log("Invalid article response:", data);
        notFound();
    }

    const news: NewsArticle = data.data;

    const publishedDate = news.firstPublished
        ? new Date(news.firstPublished).toLocaleDateString("bn-BD", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : null;

    const firstBodyImageIndex = news.body?.findIndex(
        item => item.type === "image"
    );

    return (
        <main className="py-8 md:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <article className="max-w-4xl mx-auto">

                    {news.topics?.[0] && (
                        <p className="text-red-700 font-bold text-lg mb-3">
                            {news.topics[0].name}
                        </p>
                    )}

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-5">
                        {news.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-2 md:gap-3 text-sm md:text-base text-gray-500 border-b border-gray-200 pb-5 mb-7">

                        <span>{publishedDate}</span>

                        <span>•</span>

                        <span>
                            সূত্র:{" "}
                            <Link
                                href={news.sourceUrl}
                                target="_blank"
                                className="text-red-700 font-semibold hover:underline"
                            >
                                {news.source}
                            </Link>
                        </span>

                    </div>

                    <div className="mb-8">
                        <Image
                            src={news.imageUrl}
                            width={1000}
                            height={600}
                            alt={news.title}
                            priority
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    <div className="space-y-7">

                        {news.body?.map((item, index) => {

                            if (
                                item.type === "image" &&
                                index === firstBodyImageIndex
                            ) {
                                return null;
                            }

                            if (item.type === "text" && item.text) {
                                return (
                                    <div
                                        key={index}
                                        className="space-y-5"
                                    >
                                        {item.text
                                            .split("\n")
                                            .filter(Boolean)
                                            .map((paragraph, paragraphIndex) => (
                                                <p
                                                    key={paragraphIndex}
                                                    className="text-[17px] md:text-[18px] leading-8 md:leading-9 text-gray-800"
                                                >
                                                    {paragraph}
                                                </p>
                                            ))}
                                    </div>
                                );
                            }

                            if (item.type === "image" && item.url) {
                                return (
                                    <figure
                                        key={index}
                                        className="my-8 md:my-10"
                                    >
                                        <Image
                                            src={item.url}
                                            width={item.width || 800}
                                            height={item.height || 450}
                                            alt={
                                                item.altText ||
                                                item.caption ||
                                                news.title
                                            }
                                            className="w-full h-auto rounded-lg"
                                        />

                                        {(item.caption ||
                                            item.copyrightHolder) && (
                                                <figcaption className="mt-2 text-sm md:text-[15px] leading-6 text-gray-500">

                                                    {item.caption}

                                                    {item.copyrightHolder && (
                                                        <span>
                                                            {" "}— ছবি:{" "}
                                                            {item.copyrightHolder}
                                                        </span>
                                                    )}

                                                </figcaption>
                                            )}
                                    </figure>
                                );
                            }

                            return null;
                        })}

                    </div>

                    {news.tags?.length > 0 && (
                        <div className="mt-12 pt-6 border-t border-gray-200">

                            <h3 className="text-lg font-bold mb-4">
                                বিষয়:
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {news.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </div>
                    )}

                </article>

            </div>
        </main>
    );
};

export default NewsDetailsPage;