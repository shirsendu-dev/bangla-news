import Image from "next/image";
import Link from "next/link";

interface INews {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

const OtherNewsCard = ({ article }: { article: INews }) => {
    return (
        <Link
            href={`/news/${article.id}`}
            className="group block h-full"
        >
            <div className="card bg-base-100 w-full h-full shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                {/* Image */}
                <figure className="relative aspect-video w-full overflow-hidden">
                    <Image
                        src={article.imageUrl}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        alt={article.imageAlt}
                    />
                </figure>

                {/* Content */}
                <div className="card-body flex flex-1 flex-col">

                    <p className="font-bold text-red-700 text-[16px]">
                        {article.category}
                    </p>

                    <h2 className="card-title text-[22px] leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-red-700">
                        {article.title}
                    </h2>

                    <p className="text-gray-700 line-clamp-3">
                        {article.description}
                    </p>

                </div>
            </div>
        </Link>
    );
};

export default OtherNewsCard;