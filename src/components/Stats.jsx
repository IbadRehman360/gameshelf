import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Card = () => {
  return (
    <div className="max-w-7xl mx-auto pt-2 rounded-lg  bg-white">
      <h2 className="text-lg sm:text-3xl xl:mt-6 font-bold text-center text-gray-800 md:mt-6  mt-4">
        Discover the World of <span className="text-orange-600">GameShelf</span>
      </h2>
      <h3 className="text-xs sm:text-sm md:text-lg text-gray-500 text-center p-3">
        Explore gaming realms with GameShelf&apos;s guide
      </h3>
      <span></span>
      <div className="carousel md:grid  md:grid-cols-2 xl:grid-cols-2 w-full lg:mb-3">
        <div
          id="slide1"
          className="carousel-item flex flex-col justify-center relative w-full"
        >
          <div className="flex justify-center py-2 md:border-0 border-t-2 ">
            <div className="p-3 text-center border-r   md:border-r-0 border-gray-300">
              <p className="text-md font-bold mb-1  md:text-2xl ">Members</p>
              <p className="text-sm font-medium md:text-lg  md:font-semibold text-blue-800">
                Join 839K+
              </p>
              <p className="text-gray-700 font-light mt-1 text-xs md:text-[1rem] md:font-light leading-5 lg:leading-6">
                Join the gaming revolution. Explore thriving Buy & Sell
                Marketplace.{" "}
              </p>
            </div>
            <div className="p-3 relative text-center">
              <div className="md:hidden absolute right-2 flex transform justify-center items-center  gap-1">
                <a
                  href="#slide2"
                  className="border-[1px] border-gray-400 rounded-xl shadow-lg"
                >
                  <MdKeyboardArrowRight color="black" />
                </a>
              </div>
              <p className="text-md font-bold mb-1  md:text-2xl ">Active</p>
              <p className="text-sm font-medium md:text-lg  md:font-semibold text-yellow-800">
                Explore 84K+
              </p>
              <p className="text-gray-700 font-light mt-1 md:text-[1rem] text-xs md:font-light leading-5 lg:leading-6">
                Uncover unique in-game Accounts and elevate your new play
                experience.
              </p>
            </div>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item flex flex-col justify-center relative w-full xl:my-1"
        >
          <div className="flex justify-center py-2  border-t-2 md:border-0">
            <div className="p-3 text-center  md:border-r-0 border-r border-gray-300">
              <p className="text-md font-bold mb-1  md:text-2xl ">
                Transactions
              </p>
              <p className="text-sm font-medium md:text-lg  md:font-semibold text-blue-800">
                Join 839K+
              </p>
              <p className="text-gray-700 font-light mt-1 text-xs md:text-[1rem] leading-5 lg:leading-6">
                Join the gaming revolution. Explore thriving Buy & Sell
                Marketplace.{" "}
              </p>
            </div>
            <div className="p-3 relative text-center">
              <div className="md:hidden absolute right-2 flex transform justify-center items-center  gap-1">
                <a
                  href="#slide3"
                  className="border-[1px] border-gray-400 rounded-xl shadow-lg"
                >
                  <MdKeyboardArrowLeft color="black" />
                </a>
              </div>
              <p className="text-md font-bold mb-1  md:text-2xl ">Rating</p>
              <p className="text-sm font-medium md:text-lg  md:font-semibold text-yellow-800">
                Explore 84K+
              </p>
              <p className="text-gray-700 font-light mt-1 text-xs md:text-[1rem] leading-5 lg:leading-6">
                Uncover unique in-game Accounts and elevate your new play
                experience.
              </p>
            </div>
          </div>
        </div>
        {/* <div
          id="slide3"
          className="md:hidden xl:flex carousel-item flex flex-col justify-center relative w-full"
        >
          <div className="flex py-2  md:border-0 border-t-2">
            <div className="p-3 relative text-center border-r md:border-r-0 border-gray-300">
              <div className="md:hidden absolute left-2 flex transform justify-center items-center  gap-1">
                <a
                  href="#slide1"
                  className="border-[1px] border-gray-400 rounded-xl shadow-lg"
                >
                  <MdKeyboardArrowLeft color="black" />
                </a>
              </div>
              <p className="text-md font-bold mb-1  md:text-2xl ">Sales</p>
              <p className="text-sm font-medium md:text-lg  md:font-semibold text-blue-800">
                Join 839K+
              </p>
              <p className="text-gray-700 font-light mt-1 text-xs md:text-[1rem] leading-5 lg:leading-6">
                Join the gaming revolution. Explore thriving Buy & Sell
                Marketplace.{" "}
              </p>
            </div>
            <div className="p-3 text-center">
              <p className="text-md font-bold mb-1  md:text-2xl ">
                Active Users
              </p>
              <p className="text-sm font-medium md:text-lg  md:font-semibold text-yellow-800">
                Explore 84K+
              </p>
              <p className="text-gray-700 font-light mt-1 text-xs md:text-[1rem] leading-5 lg:leading-6">
                Uncover unique in-game Accounts and elevate your new play
                experience.
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="border-t py-3 p-4 ">
        <div className="flex items-center justify-center gap-2 sm:gap-10">
          <p className="text-gray-500 font-normal sm:text-sm text-[0.65rem] ">
            Elevate your gaming experience with the GameShelfs exclusive
            offerings.
          </p>
          <a
            href="#"
            className="px-1 text-xs sm:text-sm lg:w-32 lg:h-10  h-8 bg-red-500 rounded-md text-white hover:bg-red-600 transition w-28  flex justify-center items-center"
          >
            <span>Join Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
