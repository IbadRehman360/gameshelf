function HomeProductLoaders() {
  return (
    <div className="flex flex-col rounded-2xl border-2 bg-[#fdfdfd] p-4 lg:p-4">
      <div className="flex flex-col gap-1">
        <h3 className="my-1 line-clamp-2 h-6 w-52 animate-pulse bg-slate-400 font-medium tracking-tighter text-black md:w-44"></h3>
      </div>
      <div className="mb-3 mt-2 flex justify-between sm:mb-4 lg:mt-4">
        <div className="h-4 w-8 animate-pulse bg-slate-400 text-[0.6rem] sm:text-[0.7rem] lg:text-[0.8rem]"></div>
      </div>
      <div className="border-t"></div>
      <div className="m-3 my-1 flex items-center text-[0.4rem] sm:text-[0.7rem]">
        <div className="mt-1.5 h-8 w-8 animate-pulse rounded-full bg-slate-400 sm:h-8 sm:w-8 lg:h-9 lg:w-9"></div>
        <div className="ml-2 inline-flex flex-1 items-center justify-between">
          <div className="mt-1 md:mt-2 lg:mt-0.5">
            <h6 className="inline-flex h-4 w-14 animate-pulse bg-slate-400"></h6>
            <p className="h-4 w-14 animate-pulse bg-slate-400"></p>
          </div>
          <div className="mt-3 h-4 w-8 animate-pulse bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeProductLoaders;
