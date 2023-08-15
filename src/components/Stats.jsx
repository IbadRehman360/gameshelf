// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Card = () => {
  return (
    <div className="max-w-7xl mx-auto sm:pd-2 rounded-lg  bg-white">
      <h2 className="text-lg sm:text-3xl xl:mt-6 font-bold text-center text-gray-800 md:mt-6  mt-2 ">
        Discover the World of <span className="text-orange-600">GameShelf</span>
      </h2>
      <h3 className="text-[0.72rem] sm:text-sm md:text-lg text-gray-500 text-center mb-3  md:p-3">
        Explore gaming realms with GameShelf&apos;s guide
      </h3>
      <span></span>

      <div className="border-t py-3 p-4 ">
        <div className="flex items-center justify-center text-center gap-2 sm:gap-10">
          <p className="text-gray-500 font-normal sm:text-sm text-[0.65rem] ">
            Elevate your gaming experience with the GameShelf's exclusive and
            immersive offerings,
          </p>
          <a
            href="#"
            className="px-1 text-[12px] sm:text-sm lg:w-32 lg:h-10  h-8 bg-red-500 rounded-md text-white hover:bg-red-600 transition w-28  flex justify-center items-center"
          >
            <span>Join Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
