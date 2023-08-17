export default function HeroImages({ index, imageUrl }) {
  return (
    <div className="relative">
      <img className="h-[30vh] w-full sm:h-[30vh] md:h-[50vh] lg:h-[90vh]" src={`${imageUrl}`} alt={`bg ${index}`} />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 bg-black   ">
        <div className="text-center sm:pb-0 pb-8">
          <h2 className="text-lg sm:text-2xl md:text-[1.7rem] 2xl:text-[2.1rem] 2xl:mb-3  md:mb-1 lg:text-3xl  xl:mt-6 font-bold text-white md:mt-4  mt-4">
            Discover the World of{" "}
            <span className="text-orange-600">GameShelf</span>
          </h2>
          <h3 className="text-[0.7rem] sm:text-[0.9rem] 2xl:mb-6  2xl:text-[1.1rem] lg:text-[1rem] md:text-md text-white text-center p-1 mb-4">
            Explore gaming realms with GameShelf&apos;s guide
          </h3>
        </div>

        <div className="border-t border-slate-500  ">
          <div className="flex items-center justify-center gap-4 sm:gap-10  mx-4 ">
            <p className="text-white font-normal 2xl:text-[0.9rem] pl-4 md:text-md   sm:text-[0.8rem] text-[0.65rem]">
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
    </div>
  );
}
