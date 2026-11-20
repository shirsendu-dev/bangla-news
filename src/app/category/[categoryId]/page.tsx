// import CategoryNewsCard from "@/components/CategoryNewsCard";
import CategoryNewsCard from "@/components/CategoryNewsCard";

export const instant = false;

interface News {
    id: string,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string,
}

const CategoryNews = async ({ params }: { params: { categoryId: string } }) => {

    const { categoryId } = await params;

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await res.json();

    const categoryNews: News[] = data.data;

    return (
        <div>
            <div className=" py-8">
                <div className="container mx-auto border-b-2 border-red-700">
                    <h2 className="text-2xl text-red-700 font-bold pb-2">{`${data.title}`}</h2>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-5">
                    {
                        categoryNews.map(news =>
                            <CategoryNewsCard key={news.id} news={news}></CategoryNewsCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryNews;