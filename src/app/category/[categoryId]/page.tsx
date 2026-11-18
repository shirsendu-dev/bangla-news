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

const CategoryNews = async ({ params }:{params:{categoryId:string}}) => {

    const { categoryId } = await params;

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await res.json();

    const categoryNews: News[] = data.data;

    console.log(categoryNews);


    return (
        <div>
            <div className="bg-red-700 py-5">
                <div className="container mx-auto">
                    <h1 className="text-3xl text-white text-center font-bold">{data.title}</h1>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-4 py-10">
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