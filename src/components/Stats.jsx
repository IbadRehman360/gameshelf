import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Card = () => {
  return (
    <div className="max-w-7xl mx-auto pt-3 rounded-lg shadow-md bg-white">
      <h2 className="text-lg sm:text-3xl font-bold text-center text-gray-800">
        Discover the World of <span className="text-orange-600">GameShelf</span>
      </h2>
      <h3 className="text-xs sm:text-sm md:text-lg text-gray-600 text-center p-1">Explore gaming realms with GameShelf&apos;s guide</h3>
      <span></span>
      <div className="carousel md:grid md:grid-cols-2 xl:grid-cols-3 w-full">
        <div
          id="slide1"
          className="carousel-item flex flex-col justify-center relative w-full"
        >
          <div className="flex justify-center py-2">
            <div className="p-3 text-center border-r md:border-r-0 border-gray-300">
              <p className="text-md font-bold mb-1">Members</p>
              <p className="text-sm font-medium text-blue-800">Join 839K+</p>
              <p className="text-gray-700 font-light mt-1 text-xs md:text-base leading-5">
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
              <p className="text-md font-bold mb-1">Account</p>
              <p className="text-sm font-semibold text-yellow-800">
                Explore 84K+
              </p>
            <p className="text-gray-700 font-light mt-1 text-xs md:text-base leading-5">
                Uncover unique in-game Accounts and elevate your new play
                experience.
              </p>
            </div>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item flex flex-col justify-center relative w-full"
        >
          <div className="flex justify-center py-2">
            <div className="p-3 text-center border-r md:border-r-0 border-gray-300">
              <p className="text-md font-bold mb-1">Members</p>
              <p className="text-sm font-medium text-blue-800">Join 839K+</p>
            <p className="text-gray-700 font-light mt-1 text-xs md:text-base leading-5">
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
                  <MdKeyboardArrowRight color="black" />
                </a>
              </div>
              <p className="text-md font-bold mb-1">Account</p>
              <p className="text-sm font-semibold text-yellow-800">
                Explore 84K+
              </p>
            <p className="text-gray-700 font-light mt-1 text-xs md:text-base leading-5">
                Uncover unique in-game Accounts and elevate your new play
                experience.
              </p>
            </div>
          </div>
        </div>
        <div
          id="slide3"
          className="md:hidden xl:flex carousel-item flex flex-col justify-center relative w-full"
        >
          <div className="flex py-2">
            <div className="p-3 relative text-center border-r md:border-r-0 border-gray-300">
              <div className="md:hidden absolute left-2 flex transform justify-center items-center  gap-1">
                <a
                  href="#slide1"
                  className="border-[1px] border-gray-400 rounded-xl shadow-lg"
                >
                  <MdKeyboardArrowLeft color="black" />
                </a>
              </div>
              <p className="text-md font-bold mb-1">Members</p>
              <p className="text-sm font-medium text-blue-800">Join 839K+</p>
            <p className="text-gray-700 font-light mt-1 text-xs md:text-base leading-5">
                Join the gaming revolution. Explore thriving Buy & Sell
                Marketplace.{" "}
              </p>
            </div>
            <div className="p-3 text-center">
              <p className="text-md font-bold mb-1">Account</p>
              <p className="text-sm font-semibold text-yellow-800">
                Explore 84K+
              </p>
            <p className="text-gray-700 font-light mt-1 text-xs md:text-base leading-5">
                Uncover unique in-game Accounts and elevate your new play
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-3 p-4">
        <div className="flex items-center justify-center gap-2">
          <p className="text-gray-500 font-normal text-[0.65rem]">
            Elevate your gaming experience with GameShelfs exclusive offerings.
          </p>
          <a
            href="#"
            className="px-1 text-xs sm:text-sm  h-8 bg-red-500 rounded-md text-white hover:bg-red-600 transition w-24 flex justify-center items-center"
          >
            <span>Join Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
