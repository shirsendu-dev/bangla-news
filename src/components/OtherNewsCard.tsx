import Image from 'next/image';

interface INews {
    id: string,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string,
}

const OtherNewsCard = ({article} : {article:INews}) => {
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm">
                <figure>
                    <Image
                        src={article.imageUrl}
                        className='w-full image-full'
                        width={500}
                        height={500}
                        alt={article.imageAlt} />
                </figure>

                <div className="card-body">
                    <p className='font-bold text-red-700 text-[16px]'>{article.category}</p>
                    <h2 className="card-title text-[22px]">{article.title}</h2>
                    <p>{article.description}</p>
                </div>
            </div>
        </div>
    );
};

export default OtherNewsCard;