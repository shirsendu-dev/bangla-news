import Image from "next/image";
import Link from "next/link";

interface ICategoryNews {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

const CategoryNewsCard = ({ news }: { news: ICategoryNews }) => {
    return (
        <Link
            href={`/news/${news.id}`}
            className="group block h-full"
        >
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-lg">

                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-50">
                    <Image
                        src={news.imageUrl}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        alt={news.imageAlt}
                    />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">

                    <p className="mb-2 text-[16px] font-bold text-red-700">
                        {news.category}
                    </p>

                    {/* Title */}
                    <h2
                        className="
                            -mx-1
                            mb-3
                            px-1
                            py-1
                            text-[21px]
                            font-semibold
                            leading-[1.6]
                            line-clamp-2
                            transition-colors
                            duration-300
                            group-hover:text-red-700
                        "
                    >
                        {news.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[15px] leading-7 text-gray-700 line-clamp-3">
                        {news.description}
                    </p>

                </div>

            </div>
        </Link>
    );
};

export default CategoryNewsCard;