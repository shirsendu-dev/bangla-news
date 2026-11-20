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
        <Link href={`/news/${news.id}`}>
            <div className="h-full">
                <div className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col">

                    {/* Image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image
                            src={news.imageUrl}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                            alt={news.imageAlt}
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">

                        <p className="mb-2 text-[16px] font-bold text-red-700">
                            {news.category}
                        </p>

                        <h2 className="mb-3 text-[21px] font-semibold leading-[1.45] line-clamp-2">
                            {news.title}
                        </h2>

                        <p className="text-[15px] leading-6 text-gray-700 line-clamp-3">
                            {news.description}
                        </p>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CategoryNewsCard;