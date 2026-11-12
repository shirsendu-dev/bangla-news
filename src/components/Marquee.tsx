import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headlines {
    id: string;
    title: string;
}

const Marquee = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/news?limit=10"
    );

    const data = await res.json();
    const headlines: Headlines[] = data.data;

    return (
        <div className="bg-red-600 text-white">
            <div className="container mx-auto flex items-center overflow-hidden">

                <div className="shrink-0 bg-red-700 px-4 py-2">
                    <p>সর্বশেষ</p>
                </div>

                <div className="min-w-0 flex-1 overflow-hidden">
                    <MarqueeText
                        duration={20}
                        pauseOnHover={true}
                        direction="right"
                    >
                        <div className="flex whitespace-nowrap">
                            {headlines.map((headline) => (
                                <span key={headline.id}>
                                    {headline.title}
                                    <span className="mx-5">⬩</span>
                                </span>
                            ))}
                        </div>
                    </MarqueeText>
                </div>

            </div>
        </div>
    );
};

export default Marquee;