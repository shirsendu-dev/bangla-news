import Image from "next/image";
import Link from "next/link";

interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

const MainNews = ({ news }: { news: News[] }) => {
    const [firstNews, ...otherNews] = news;

    return (
        <div className="flex flex-col lg:flex-row gap-5 justify-start">

            {/* First News */}
            <Link
                href={`/news/${firstNews.id}`}
                className="group block flex-1"
            >
                <div className="card bg-base-100 w-full h-full shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                    <figure className="overflow-hidden">
                        <Image
                            src={firstNews.imageUrl}
                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                            width={500}
                            height={500}
                            alt={firstNews.imageAlt}
                        />
                    </figure>

                    <div className="card-body">
                        <p className="font-bold text-red-700 text-[16px]">
                            {firstNews.category}
                        </p>

                        <h2 className="card-title text-[22px] transition-colors duration-300 group-hover:text-red-700">
                            {firstNews.title}
                        </h2>

                        <p className="text-gray-700">
                            {firstNews.description}
                        </p>
                    </div>
                </div>
            </Link>

            {/* Other News */}
            <div className="grid gap-3 flex-1">

                {otherNews.slice(0, 4).map(singleOtherNews => (
                    <Link
                        href={`/news/${singleOtherNews.id}`}
                        key={singleOtherNews.id}
                        className="group justify-center card bg-base-100 shadow-sm py-3 px-4 border border-transparent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-red-100"
                    >
                        <div className="flex flex-col justify-between gap-2">

                            <p className="text-red-700 font-bold text-[15px]">
                                {singleOtherNews.category}
                            </p>

                            <h2 className="font-bold leading-relaxed transition-colors duration-300 group-hover:text-red-700">
                                {singleOtherNews.title}
                            </h2>

                        </div>
                    </Link>
                ))}

            </div>

        </div>
    );
};

export default MainNews;