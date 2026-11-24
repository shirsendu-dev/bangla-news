const LoadingPage = () => {
    return (
        <main className="bg-white">
            <div className="container mx-auto px-4 py-8 sm:px-6 md:py-10 lg:px-0">

                {/* Top / Hero Section */}
                <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">

                    {/* Main News Skeleton */}
                    <div className="lg:col-span-2">

                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

                            {/* Featured News */}
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-4">

                                <div className="skeleton aspect-[16/9] w-full rounded-lg" />

                                <div className="mt-5 space-y-3">

                                    <div className="skeleton h-4 w-24" />

                                    <div className="skeleton h-6 w-full" />

                                    <div className="skeleton h-6 w-4/5" />

                                    <div className="mt-4 space-y-2">
                                        <div className="skeleton h-4 w-full" />
                                        <div className="skeleton h-4 w-full" />
                                        <div className="skeleton h-4 w-3/4" />
                                    </div>

                                </div>

                            </div>

                            {/* Side News */}
                            <div className="space-y-3">

                                {[1, 2, 3, 4].map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-xl border border-gray-200 bg-white p-4"
                                    >
                                        <div className="space-y-3">

                                            <div className="skeleton h-3 w-20" />

                                            <div className="skeleton h-5 w-full" />

                                            <div className="skeleton h-5 w-4/5" />

                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                    {/* Most Read Skeleton */}
                    <aside className="lg:col-span-1">

                        <div className="rounded-xl border border-gray-200 bg-white p-5">

                            <div className="mb-5 flex items-center justify-between">

                                <div className="skeleton h-6 w-32" />

                                <div className="skeleton h-4 w-10" />

                            </div>

                            <div className="space-y-5">

                                {[1, 2, 3, 4, 5].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-4"
                                    >

                                        <div className="skeleton h-10 w-10 shrink-0 rounded-lg" />

                                        <div className="flex-1 space-y-2">

                                            <div className="skeleton h-4 w-full" />

                                            <div className="skeleton h-4 w-4/5" />

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </aside>

                </section>

                {/* News Section Skeleton */}
                <section className="mt-12">

                    {/* Section Heading */}
                    <div className="mb-6 border-b border-gray-200 pb-3">

                        <div className="skeleton h-7 w-40" />

                    </div>

                    {/* News Cards */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div
                                key={item}
                                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                            >

                                <div className="skeleton aspect-[16/9] w-full rounded-none" />

                                <div className="space-y-3 p-5">

                                    <div className="skeleton h-4 w-24" />

                                    <div className="skeleton h-6 w-full" />

                                    <div className="skeleton h-6 w-4/5" />

                                    <div className="mt-4 space-y-2">

                                        <div className="skeleton h-4 w-full" />

                                        <div className="skeleton h-4 w-full" />

                                        <div className="skeleton h-4 w-2/3" />

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </section>

            </div>
        </main>
    );
};

export default LoadingPage;