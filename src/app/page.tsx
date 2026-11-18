import MainNews from '@/components/MainNews';
import Marquee from '@/components/Marquee';
import MostRead from '@/components/MostRead';
import OtherNewsCard from '@/components/OtherNewsCard';
import { Suspense } from 'react';

export const instant = false;

interface IOtherSection {
  curationId: string,
  title: string,
  articles: {
    id: string,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string
  }[];


}

const HomePage = async () => {

  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');

  if (!res.ok) {
    throw new Error('Failed to fetch data...');
  }

  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSections: IOtherSection[] = sections.slice(1);

  return (

    <div>
      
      <div className='grid grid-cols-3 mx-auto container py-10 gap-4'>

        {/* News section */}
        <div className='col-span-2'>
          <Suspense fallback="Loading...">
            <MainNews news={mainNews}></MainNews>
          </Suspense>

          {/* নির্বাচিত খবর */}
          <div className='my-5'>
            {
              otherSections.map(singleOtherSection =>
                <div
                  key={singleOtherSection.curationId}
                  className=''
                >
                  <h2 className='font-bold text-red-700 border-b-2 border-red-700 text-[22px] py-2'>{singleOtherSection.title}</h2>
                  <div className='grid grid-cols-3 gap-4 py-5'>
                    {
                      singleOtherSection.articles.map(article =>

                        <OtherNewsCard key={article.id} article={article}></OtherNewsCard>

                      )

                    }
                  </div>
                </div>
              )
            }
          </div>
        </div>

        {/* Most read section */}
        <div className='col-span-1'>
            <MostRead></MostRead>
        </div>

      </div>

    </div>
  );
};

export default HomePage;