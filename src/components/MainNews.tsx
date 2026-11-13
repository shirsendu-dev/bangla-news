import Image from 'next/image';
import React from 'react';

interface News {
    id: string,
    title: string,
    description:string,
    category: string,
    imageUrl: string,
    imageAlt: string,
}

const MainNews = ({ news } : {news:News[]}) => {
    // const firstNews = news[0];
    // const otherNews = news.slice(1);

    const [firstNews, ...otherNews] = news

    return (
        <div className='flex gap-5 justify-start'>
            {/* First News */}
            <div className="card bg-base-100 w-full shadow-sm">
                <figure>
                    <Image
                        src={firstNews.imageUrl}
                        className='w-full image-full'
                        width={500}
                        height={500}
                        alt={firstNews.imageAlt} />
                </figure>

                <div className="card-body">
                    <p className='font-bold text-red-700 text-[16px]'>{firstNews.category}</p>
                    <h2 className="card-title text-[22px]">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>
                </div>
            </div>

            {/* other news */}
            <div className='grid gap-2'>
                {otherNews.slice(0,4).map(singleOtherNews =>

                        <div 
                        key={singleOtherNews.id}
                        className='card bg-base-100 shadow-sm py-3 px-4'
                        >
                            <div className='flex flex-col justify-between gap-4'>
                                <p className='text-red-700 font-bold text-[15px]'>{singleOtherNews.category}</p>
                                <h2 className='font-bold'>{singleOtherNews.title}</h2>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MainNews;