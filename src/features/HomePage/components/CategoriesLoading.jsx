export default function CategoriesLoading() {
  return (
    <div>
      <h3 className="block justify-center md:mt-8 mt-6 text-center text-1xl  text-gray-700 md:mb-4 mb-2 lg:text-[1.7rem] 3xl:text-[1.8rem]  md:text-[1.7rem] text-[1.3rem]  ml-2  font-semibold ">
        EXPLORE CATEGORIES
      </h3>

      <div className="max-w-[1400px] grid mx-auto md:mb-6 mb-4 gap-10 grid-cols-4 md:grid-cols-8 md:gap-5 lg:gap-2 xl:gap-0 justify-items-center p-4 xl:p-3 pb-10 xl:pb-6">
        {Array.from({ length: 8 }, (_, i) => (
          <di className="animate-pulse flex flex-col items-center gap-2">
            <div className="rounded-2xl bg-slate-400 h-12 w-11 lg:h-16 md:w-16 "></div>
            <div className="h-2 bg-slate-400 rounded col-span-2 w-full"></div>
          </di>
        ))}
      </div>
    </div>
  );
}
