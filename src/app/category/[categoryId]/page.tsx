import CategoryNewsCard from "@/components/CategoryNewsCard";

export const instant = false;

interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

const CategoryNews = async ({
    params,
}: {
    params: { categoryId: string };
}) => {
    const { categoryId } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/category/${categoryId}`
    );

    const data = await res.json();

    const categoryNews: News[] = data.data;

    return (
        <main className="bg-gray-50">

            {/* Category Heading */}
            <div className="py-6 sm:py-8">
                <div className="container mx-auto px-3 sm:px-6 lg:px-0">

                    <div className="border-b border-gray-200">

                        <h2 className="relative inline-block pb-3 text-2xl font-bold text-gray-900 sm:text-3xl">

                            {data.title}

                            <span className="absolute bottom-[-1px] left-0 h-[3px] w-full bg-red-700" />

                        </h2>

                    </div>

                </div>
            </div>

            {/* News Cards */}
            <div className="container mx-auto px-3 sm:px-6 lg:px-0">

                <div
                    className="
                        grid
                        grid-cols-2
                        gap-3
                        pb-8
                        md:grid-cols-3
                        md:gap-4
                        xl:grid-cols-4
                        xl:gap-5
                    "
                >
                    {categoryNews.map((news) => (
                        <CategoryNewsCard
                            key={news.id}
                            news={news}
                        />
                    ))}
                </div>

            </div>

        </main>
    );
};

export default CategoryNews;