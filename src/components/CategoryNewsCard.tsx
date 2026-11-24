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
            className="group block min-w-0 h-full"
        >
            <article
                className="
                    flex
                    min-w-0
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-red-200
                    hover:shadow-lg
                    sm:rounded-xl
                "
            >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                    <Image
                        src={news.imageUrl}
                        fill
                        sizes="
                            (max-width: 767px) 50vw,
                            (max-width: 1023px) 33vw,
                            25vw
                        "
                        alt={news.imageAlt || news.title}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="flex min-w-0 flex-1 flex-col p-2.5 sm:p-4 lg:p-5">

                    {/* Category */}
                    <p className="mb-1 text-[10px] font-bold text-red-700 sm:mb-2 sm:text-[13px] lg:text-[14px]">
                        {news.category}
                    </p>

                    {/* Title */}
                    <h2
                        className="
                            line-clamp-2
                            min-w-0
                            py-0.5
                            text-[12px]
                            font-bold
                            leading-[1.7]
                            text-gray-900
                            transition-colors
                            duration-300
                            group-hover:text-red-700
                            sm:text-[16px]
                            lg:text-[19px]
                        "
                    >
                        {news.title}
                    </h2>

                    {/* Description */}
                    <p
                        className="
                            mt-1.5
                            line-clamp-2
                            min-w-0
                            text-[10px]
                            leading-[1.7]
                            text-gray-600
                            sm:mt-2
                            sm:text-[13px]
                            sm:leading-6
                            lg:line-clamp-3
                            lg:text-[14px]
                            lg:leading-7
                        "
                    >
                        {news.description}
                    </p>
                </div>
            </article>
        </Link>
    );
};

export default CategoryNewsCard;