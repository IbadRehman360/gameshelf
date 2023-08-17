export default function HeroImages({ index, imageUrl }) {
  return (
    <div className="relative">
      <div className="h-[28vh] w-full sm:h-[38vh] md:h-[48vh]  lg:h-[40vh]">
        <img
          className="xl:object-contain     w-full h-full"
          src={`${imageUrl}`}
          alt={`bg ${index}`}
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 bg-black   ">
        <div className="text-center sm:pb-0  ">
          <h2 className="text-[1.1rem] sm:text-[1.5rem] md:text-[1.7rem] 2xl:text-[1.8rem] 2xl:mb-3  md:mb-1 lg:text-3xl  xl:mt-6 font-bold text-white md:mt-4  mt-4">
            Discover the World of{" "}
            <span className="text-orange-600">GameShelf</span>
          </h2>
          <h3 className="text-[0.65rem] sm:text-[0.9rem] 2xl:mb-6  2xl:text-[1rem] lg:text-[1rem] md:text-md text-white text-center p-1 mb-4">
            Explore gaming realms with GameShelf&apos;s guide
          </h3>
        </div>
        <div className="border-t w-[20vh] pb-4  border-slate-500"></div>
        <div className="flex items-center justify-center gap-4  sm:gap-10  mx-4 ">
          <p className="text-white font-normal 2xl:text-[0.9rem] pl-4 md:text-md   sm:text-[0.8rem] text-[0.6rem]">
            Elevate your gaming experience with the GameShelf&apos;s exclusive
            offerings.
          </p>
          <a
            href="#"
            className="px-1 text-[0.7rem] sm:text-sm md:w-28 md:h-10 lg:w-32 lg:h-10 sm:h-9 2xl:text-[1.03rem] 2xl:h-11  2xl:w-32  h-8 bg-red-500 rounded-md text-white hover:bg-red-600 transition w-24  flex justify-center items-center"
          >
            <span>Join Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
