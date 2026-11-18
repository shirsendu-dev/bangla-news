import Image from 'next/image';

interface ICategoryNews {
    id: string,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string,
}

const CategoryNewsCard = ({ news }: { news: ICategoryNews }) => {

    // console.log(news);

    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm">
                <figure>
                    <Image
                        src={news.imageUrl}
                        className='w-full image-full'
                        width={700}
                        height={500}
                        alt={news.imageAlt} />
                </figure>

                <div className="card-body">
                    <p className='font-bold text-red-700 text-[16px]'>{news.category}</p>
                    <h2 className="card-title text-[22px]">{news.title}</h2>
                    <p>{news.description}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryNewsCard;