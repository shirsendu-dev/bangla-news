import Image from 'next/image';
import React from 'react';

const MainNews = ({ news }) => {
    const firstNews = news[0];
    console.log(firstNews);


    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                        src={firstNews.imageUrl}
                        width={500}
                        height={500}
                        alt="Shoes" />
                </figure>

                <div className="card-body">
                    <p className='font-bold text-red-700 text-[18px]'>{firstNews.category}</p>
                    <h2 className="card-title text-[22px]">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>
                </div>
            </div>
        </div>
    );
};

export default MainNews;