import HomeProductLoaders from "./HomeProductLoaders";

export default function ProfileProductLoading() {
    return (
        <div className="mb-16 bg-[#fdfdfd] px-3 xl:mt-4">
            <h2 className="text-[1.4rem] font-semibold text-gray-700 md:text-[1.7rem] lg:text-[1.8rem] 3xl:text-[2rem]">
                Featured Products
            </h2>
            <div className="my-3 mt-4 flex gap-3 sm:mt-6">
                <div className="flex flex-col gap-1">
                    <h3 className="text-center text-[0.8rem] font-semibold text-red-500 sm:text-sm md:text-[1rem] lg:text-[1.1rem]">
                        New Items
                    </h3>
                    <hr className="w-24 border-[1px] border-red-400 md:w-28 lg:w-32" />
                </div>
                <div className="flex flex-col gap-1">
                    <h3
                        className="text-center text-[0.8rem] font-semibold text-green-500 sm:text-sm md:text-[1rem] lg:text-[1.1rem]"
                        style={{ color: " #22577a" }}
                    >
                        Most Views
                    </h3>
                    <hr
                        className="w-24 border-[1px] border-green-500 md:w-28 lg:w-32"
                        style={{ borderColor: " #22577a" }}
                    />
                </div>
            </div>
            <div className="carousel mt-2 w-full justify-items-stretch sm:mt-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
                <div
                    id="featuredProductsSlide1"
                    className="carousel-item mx-auto my-4 w-full gap-2 sm:w-full md:gap-3"
                >
                    {Array.from({ length: 4 }, (item, i) => (
                        <HomeProductLoaders key={i} />
                    ))}
                </div>
            </div>
        </div >
    )
}
