export default function ProfileInfo() {

  return (
    <div className="mt-12 order-0 row-span-2 ">
      <div className="grid">
        <div className="flex flex-col gap-8 ">
          <div className="md:bg-gray-50 md:p-4 rounded-lg">
            <div className="flex flex-col ">
              <div className="flex justify-between text-[0.92rem] sm:border-t-0 border-y  sm:py-2 sm:pb-4 py-6">
                <span className="text-gray-500  ">Member Since</span>
                <span className="text-[0.9rem] font-medium bg-slate-400 w-1/3 animate-pulse"></span>
              </div>
              <div className="flex justify-between border-b    py-6">
                <span className="text-gray-500 text-[0.92rem]  ">
                  Successful
                  <br /> delivery
                </span>
                <div className="flex flex-col gap-2">
                  <div className="bg-slate-400 h-5 w-24 animate-pulse"></div>
                  <div className="bg-slate-400 h-5 w-24 animate-pulse"></div>
                </div>
              </div>
              <div className="flex justify-between  text-[0.92rem] pt-6 pb-4">
                <span className="text-gray-500">Last days rating</span>
                <div className="flex gap-3 text-sm ">
                  <div className="bg-slate-400 animate-pulse w-24"></div>
                </div>
              </div>
              <div className="flex justify-between pb-6 ">
                <span className="text-gray-500 text-[0.92rem]">
                  All time rating
                </span>
                <div className="flex gap-4 text-[0.94rem] ">
                  <div className="bg-slate-400 animate-pulse w-24"></div>
                </div>
              </div>
              <div className="flex justify-around border-y-2  py-6">
                <div className=" text-center  lg:block  ">
                  <span className="text-sm text-gray-500 tracking-wide">
                    Followers
                  </span>
                  <div className="bg-slate-400 animate-pulse h-6 w-24 mt-1"></div>
                </div>
                <div className="border-r "></div>
                <div className=" text-center ">
                  <span className="text-sm text-gray-500 tracking-wide">
                    Following
                  </span>
                  <div className="bg-slate-400 animate-pulse h-6 w-24 mt-1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:bg-gray-50 md:p-4 pb-4 rounded-lg border-b-2 ">
            <div className="flex flex-col gap-4 ">
              <h3 className="text-xl inline-flex justify-between font-semibold">
                Description
                <button className="text-sm text-gray-500 mt-1 font-normal underline">
                  Edit
                </button>
              </h3>
              <div className="flex flex-wrap bg-slate-400 animate-pulse h-52"></div>
            </div>
          </div>
          <div className="md:bg-gray-50 md:p-4 pb-4 rounded-lg border-b-2 ">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Languages</h3>
              <button className="text-sm text-gray-500 mt-1 font-normal underline">
                Edit
              </button>
            </div>
            <div className="flex flex-wrap gap-4 py-6">
              <div className="h-16 w-24 p-5 rounded-lg border-[1px] bg-slate-400 animate-pulse "></div>
              <div className="h-16 w-24 p-5 rounded-lg border-[1px] bg-slate-400 animate-pulse "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
