export default function FeaturedProductLoading() {
  return (
    <>
      <div className="flex flex-col p-3 lg:p-4 flex-co border-2 bg-[#fdfdfd] rounded-2xl  ">
        <div className="flex flex-col gap-1  ">
          <h3 className="mt-1 mb-1   tracking-tighter   text-black   font-medium  line-clamp-2 bg-slate-400 h-6 w-52 md:w-44 animate-pulse"></h3>
        </div>
        <div className="flex justify-between lg:mt-4 mt-2 sm:mb-4  mb-3">
          <div className="sm:text-[0.7rem] lg:text-[0.8rem] text-[0.6rem]  h-4 bg-slate-400 animate-pulse w-8"></div>
        </div>
        <div className="border-t   "></div>
        <div className="sm:text-[0.7rem] mb-1 text-[0.4rem] mt-1 sm-3    flex items-center">
          <div
            className="w-8 h-8 sm:w-8 mt-1.5 sm:h-8 lg:h-9 lg:w-9 rounded-full animate-pulse bg-slate-400"
          ></div>
          <div className="inline-flex justify-between items-center ml-2 flex-1">
            <div className="md:mt-2 mt-1 lg:mt-0.5">
              <h6 className="inline-flex bg-slate-400 h-4 w-14 animate-pulse"></h6>
              <p className="bg-slate-400 animate-pulse h-4 w-14">
              </p>
            </div>
            <div className="mt-3 bg-slate-400 animate-pulse w-16 h-6">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
