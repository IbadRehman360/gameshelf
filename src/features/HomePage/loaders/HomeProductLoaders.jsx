import React from "react";

function HomeProductLoaders() {
  return (
    <div className="flex flex-col rounded-2xl border-2 bg-[#fdfdfd] p-3 lg:p-4 loader">
      <div className="flex flex-col gap-1">
        <h3 className="my-1 line-clamp-2 bg-slate-400 text-[0.8rem] font-medium tracking-tighter text-black sm:text-xs lg:text-sm xl:text-[0.95rem]">
          T
        </h3>
      </div>
      <div className="mb-3 mt-2 flex justify-between sm:mb-4 lg:mt-4">
        <div className="h-fit rounded-lg bg-slate-400 p-0.5 px-1.5 text-[0.55rem] sm:px-2 sm:text-[0.7rem] lg:text-[0.8rem]">
          🕞 H
        </div>

        <p className="-mt-0.5 text-[0.85rem] font-medium bg-slate-400 text-slate-800 sm:hidden sm:text-[0.8rem] md:text-[0.9rem] lg:text-[0.85rem] xl:text-[0.9rem]">
          P
          <span className="ml-[3px] text-[0.6rem] bg-slate-400 font-normal text-gray-700 sm:text-[0.6rem] md:text-[0.6rem] xl:text-[0.6rem]">
            USD
          </span>
        </p>
      </div>
      <div className="border-t"></div>
      <div className="m-0 my-1 flex text-[0.4rem] sm:text-[0.7rem]">
        <div className="bg-slate-400">
          <img className="mt-1.5 h-8 w-8 rounded-full sm:h-8 sm:w-8 lg:h-9 lg:w-9" />
        </div>
        <div className="ml-2 inline-flex flex-1 items-center justify-between">
          <div className="mt-1 md:mt-2 lg:mt-0.5">
            <h6 className="inline-flex truncate text-[11px] font-semibold bg-slate-400 text-gray-600 md:text-[10px] lg:text-[12px]">
              F
            </h6>
            <p className="text-[10px] tracking-wide bg-slate-400 md:text-[10px] lg:text-[11px]">
              Level
            </p>
          </div>
          <div className="mt-3">
            <p className="mb-2 hidden text-[1rem] font-medium text-slate-600  bg-slate-400 sm:flex sm:text-[0.85rem] md:text-[0.85rem] lg:text-[0.96rem] xl:text-[0.94rem]">
              C
              <span className="ml-[1px] text-[0.5rem] font-medium text-gray-800 bg-slate-400 sm:ml-[4px] sm:mt-[4.5px] sm:text-[0.59rem] md:mt-[3px] md:text-[0.65rem] lg:ml-1 lg:mt-[4px] xl:mt-[3.4px] xl:text-[0.7rem]">
                USD
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProductLoaders;
