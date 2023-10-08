export default function ProfileStatsLoader() {
  return (
    <div className="row-span-2 mt-12">
      <div className="grid">
        <div className="flex flex-col gap-8">
          <div className="rounded-lg md:bg-gray-50 md:p-4">
            <div className="flex flex-col">
              <div className="flex justify-between border-y py-6 text-[0.92rem] sm:border-t-0 sm:py-2 sm:pb-4">
                <span className="text-gray-500">Member Since</span>
                <span className="w-1/3 animate-pulse bg-slate-400 text-[0.9rem] font-medium"></span>
              </div>
              <div className="flex justify-between border-b py-6">
                <span className="text-[0.92rem] text-gray-500">
                  Successful
                  <br /> delivery
                </span>
                <div className="flex flex-col gap-2">
                  <div className="h-5 w-24 animate-pulse bg-slate-400"></div>
                  <div className="h-5 w-24 animate-pulse bg-slate-400"></div>
                </div>
              </div>
              <div className="flex justify-between pb-4 pt-6 text-[0.92rem]">
                <span className="text-gray-500">Last days rating</span>
                <div className="flex gap-3 text-sm">
                  <div className="w-24 animate-pulse bg-slate-400"></div>
                </div>
              </div>
              <div className="flex justify-between pb-6">
                <span className="text-[0.92rem] text-gray-500">
                  All time rating
                </span>
                <div className="flex gap-4 text-[0.94rem]">
                  <div className="w-24 animate-pulse bg-slate-400"></div>
                </div>
              </div>
              <div className="flex justify-around border-y-2 py-6">
                <div className="text-center lg:block">
                  <span className="text-sm tracking-wide text-gray-500">
                    Followers
                  </span>
                  <div className="mt-1 h-6 w-24 animate-pulse bg-slate-400"></div>
                </div>
                <div className="border-r"></div>
                <div className="text-center">
                  <span className="text-sm tracking-wide text-gray-500">
                    Following
                  </span>
                  <div className="mt-1  h-6  w-24 animate-pulse bg-slate-400"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border-b-2 pb-4 md:bg-gray-50 md:p-4">
            <div className="flex flex-col gap-4">
              <h3 className="inline-flex justify-between text-lg sm:text-xl  font-semibold">
                Description
                <button className="mt-1 text-sm font-normal text-gray-500 underline">
                  Edit
                </button>
              </h3>
              <div className="flex md:h-52 h-36 sm:h-40 animate-pulse flex-wrap bg-slate-400"></div>
            </div>
          </div>
          <div className="rounded-lg border-b-2 pb-4 md:bg-gray-50 md:p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Languages</h3>
              <button className="mt-1 text-sm font-normal text-gray-500 underline">
                Edit
              </button>
            </div>
            <div className="flex flex-wrap gap-4 py-6">
              <div className="h-16 w-24 animate-pulse rounded-lg border-[1px] bg-slate-400 p-5"></div>
              <div className="h-16 w-24 animate-pulse rounded-lg border-[1px] bg-slate-400 p-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
