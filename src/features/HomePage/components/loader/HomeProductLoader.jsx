import HomeProductLoaders from "./HomeProductLoaders";

export default function ProfileProductLoading() {
    return (
        <div className="  mb-16 px-3 xl:mt-4 bg-[#fdfdfd]  ">
            <h2 className=" lg:text-[1.8rem]  text-gray-700 3xl:text-[2rem]  md:text-[1.7rem] text-[1.4rem]   font-semibold">
                Featured Products
            </h2>
            <div className="flex gap-3 my-3  mt-4 sm:mt-6 ">
                <div className="flex flex-col gap-1 ">
                    <h3 className="sm:text-sm text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] font-semibold  text-red-500 text-center">
                        New Items
                    </h3>
                    <hr className="border-red-400 border-[1px] lg:w-32 md:w-28 w-24" />
                </div>
                <div className="flex flex-col gap-1">
                    <h3
                        className="sm:text-sm text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] font-semibold text-green-500 text-center"
                        style={{ color: " #22577a" }}
                    >
                        Most Views
                    </h3>
                    <hr
                        className="border-green-500 border-[1px] lg:w-32   md:w-28 w-24"
                        style={{ borderColor: " #22577a" }}
                    />
                </div>
            </div>
            <div className="carousel w-full  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 justify-items-stretch md:gap-5 sm:mt-4  mt-2">
                <div
                    id="featuredProductsSlide1"
                    className="carousel-item sm:w-full w-full mx-auto mt-4 gap-2 mb-4 md:gap-3"
                >
                    {Array.from({ length: 4 }, (item, i) => (
                        <HomeProductLoaders key={i} />
                    ))}
                </div>
            </div>
        </div >
    )
}
