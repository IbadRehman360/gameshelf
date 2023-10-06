function HomeProductLoaders() {
  return (
    <div className="flex  container sm:w-full flex-col rounded-2xl border-2 bg-[#fdfdfd] p-2 lg:p-4">
      <div className="flex flex-col gap-1">
        <h3 className="my-1 line-clamp-2 h-3.5 sm:h-4 w-20  rounded-sm sm:w-52 animate-pulse bg-slate-400 font-medium tracking-tighter text-black md:w-40"></h3>
      </div>
      <div className="mb-3 mt-2 flex justify-between sm:mb-4  lg:mt-4">
        <div className="h-3 w-10   rounded-sm animate-pulse bg-slate-400 text-[0.6rem] sm:text-[0.7rem] lg:text-[0.8rem]"></div>
      </div>
      <div className="border-t"></div>
      <div className=" my-1 flex items-center text-[0.4rem] sm:text-[0.7rem]">
        <div className="mt-1.5 h-8 w-8 animate-pulse rounded-full  bg-slate-400 sm:h-8 sm:w-8 lg:h-9 lg:w-9"></div>
        <div className="ml-1 sm:ml-2 inline-flex flex-1 items-center justify-between">
          <div className="mt-1 md:mt-2 lg:mt-0.5">
            <h6 className="inline-flex h-3 w-12 sm:w-14 rounded-sm animate-pulse bg-slate-400"></h6>
            <p className="h-3 w-12 sm:w-14  animate-pulse rounded-sm bg-slate-400"></p>
          </div>
          <div className="mt-3 h-3.5 sm:w-10 w-8 animate-pulse rounded-sm bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeProductLoaders;
