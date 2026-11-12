import MainNews from '@/components/MainNews';
import Marquee from '@/components/Marquee';
import React, { Suspense } from 'react';

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
      <Suspense>
        <Marquee></Marquee>
      </Suspense>

      <div className='grid grid-cols-3 mx-auto container py-10'>

        {/* News section */}
        <div className='col-span-2'>
          <MainNews news={mainNews}></MainNews>
        </div>

        {/* Most read section */}
        <div className='col-span-1'>

        </div>

      </div>

    </div>
  );
};

export default HomePage;