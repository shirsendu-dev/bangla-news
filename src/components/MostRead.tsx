interface MostReadNews {
    id: string,
    title: string,
    rank: number
}

const MostRead = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    const data = await res.json();
    const mostReadNews:MostReadNews[] = data.data;
    return (
        <div className="card p-5 shadow-sm">
            <h2 className="text-[22px] text-red-700 font-bold mb-6 border-b-2 border-red-700">সর্বাধিক পঠিত</h2>
            <div className="grid gap-4">
                {
                    mostReadNews.map(news =>

                        <div
                            key={news.id}
                            className="flex gap-4"

                        >
                            <p className="text-[20px] font-bold text-red-700">{news.rank}</p>
                            <h3 className="text-[18px] font-medium">
                                {news.title}
                            </h3>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MostRead;