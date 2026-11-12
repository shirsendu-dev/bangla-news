import MainNews from '@/components/MainNews';
import Marquee from '@/components/Marquee';
import { Suspense } from 'react';

const HomePage = async () => {

  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');

  if (!res.ok) {
    throw new Error('Failed to fetch data...');
  }

  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;

  console.log(mainNews);

  return (
    <div>
      <Suspense fallback="Loading...">
        <Marquee></Marquee>
      </Suspense>

      <div className='grid grid-cols-3 mx-auto container py-10'>

        {/* News section */}
        <div className='col-span-2'>
          <Suspense fallback="Loading...">
            <MainNews news={mainNews}></MainNews>
          </Suspense>
        </div>

        {/* Most read section */}
        <div className='col-span-1'>

        </div>

      </div>

    </div>
  );
};

export default HomePage;