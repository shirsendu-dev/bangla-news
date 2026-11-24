import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import OtherNewsCard from "@/components/OtherNewsCard";
import { Suspense } from "react";

export const instant = false;

interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

const HomePage = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data...");
  }

  const data = await res.json();

  const sections = data.data;

  const mainNews = sections[0].articles;
  const otherSections: IOtherSection[] = sections.slice(1);

  return (
    <main className="bg-white">

      <div className="container mx-auto px-4 py-8 sm:px-6 md:py-10 lg:px-0">

        {/* Top News Area */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Main News */}
          <div className="lg:col-span-2">
            <Suspense
              fallback={
                <div className="h-96 animate-pulse rounded-xl bg-gray-100" />
              }
            >
              <MainNews news={mainNews} />
            </Suspense>
          </div>

          {/* Most Read */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-6">
              <Suspense
                fallback={
                  <div className="h-96 animate-pulse rounded-xl bg-gray-100" />
                }
              >
                <MostRead />
              </Suspense>
            </div>
          </aside>

        </section>

        {/* Other News Sections */}
        <div className="mt-12 space-y-12">

          {otherSections.map((singleOtherSection) => (
            <section key={singleOtherSection.curationId}>

              {/* Section Heading */}
              <div className="mb-6 flex items-center gap-4 border-b border-gray-200">

                <h2 className="relative pb-3 text-2xl font-bold text-gray-900">

                  {singleOtherSection.title}

                  {/* Red underline */}
                  <span className="absolute bottom-[-1px] left-0 h-[3px] w-full bg-red-700" />

                </h2>

              </div>

              {/* News Cards */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">

                {singleOtherSection.articles.map((article) => (
                  <OtherNewsCard
                    key={article.id}
                    article={article}
                  />
                ))}

              </div>

            </section>
          ))}

        </div>

      </div>

    </main>
  );
};

export default HomePage;