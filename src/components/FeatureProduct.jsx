export default function FeaturedProduct() {
  const now = new Date();
  const currentHour = now.getHours();

  return (
    <>
      <div className="flex flex-col p-3 lg:p-4 flex-co border-2 bg-[#fdfdfd] rounded-2xl  ">
        <div className="flex flex-col gap-1  ">
          <h3 className="sm:text-xs lg:text-sm xl:text-[0.95rem] text-[0.8rem] mt-1 mb-1   tracking-tighter   text-black   font-medium  line-clamp-2 ">
            Product Title
          </h3>
        </div>
        <div className="flex justify-between lg:mt-4 mt-2 sm:mb-4  mb-3">
          <div className="sm:text-[0.7rem] lg:text-[0.8rem] text-[0.6rem]  h-fit p-0.5 px-1.5 sm:px-2 bg-gray-200   rounded-lg">
            🕞 {currentHour}H
          </div>

          <p className=" text-slate-800  lg:text-[0.85rem]  sm:hidden md:text-[0.9rem] xl:text-[0.9rem]  sm:text-[0.8rem] text-[0.8rem]  font-medium">
            $20.99
            <span className="text-gray-800 md:text-[0.6rem] xl:text-[0.6rem] sm:text-[0.6rem] ml-[3px]  sm:text-sm text-[0.6rem] font-normal">
              USD
            </span>
          </p>
        </div>
        <div className="border-t   "></div>
        <div className="sm:text-[0.7rem] mb-1 text-[0.4rem] mt-1 sm-3    flex">
          <img
            className="w-8 h-8 sm:w-8 mt-1.5 sm:h-8 lg:h-9 lg:w-9 rounded-full"
            src="/userImage/3.jpg"
          />
          <div className="inline-flex justify-between items-center ml-2 flex-1">
            <div className="md:mt-2 mt-1 lg:mt-0.5">
              <h6 className="font-semibold inline-flex md:text-[10px] lg:text-[12px] text-[11px] text-gray-600 truncate">
                Ibad Khan
              </h6>
              <p className="md:text-[10px] text-[10px] lg:text-[11px] tracking-wide text-gray-500">
                Level 142{" "}
              </p>
            </div>
            <div className="mt-3">
              <p className=" text-slate-800 mb-2 lg:text-[0.85rem]  sm:flex hidden md:text-[0.8rem] xl:text-[0.9rem]  sm:text-[0.86rem] text-[0.96rem]   font-medium">
                20.99
                <span className="text-gray-800 md:text-[0.6rem] xl:text-[0.6rem] sm:text-[0.5rem] lg:ml-1   sm:mt-[2px] md:mt-[0.75px] ml-[1px] sm:ml-[3px]  sm:text-sm text-[0.5rem] font-meduim">
                  USD
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
