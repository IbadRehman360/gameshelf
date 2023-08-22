export default function DashboardSearchBar() {
  return (
    <div>
      <div className="  bg-gray-50  ">
        <div className="flex items-center justify-between  rounded-3xl mb-8 mt-8 bg-gradient-to-r from-navy-blue   to-gray-600    to-slate-600 shadow-md p-4">
          <div className="relative rounded-lg  flex items-center  sm:w-[40%] md:w-[30%]">
            <input
              type="text"
              className="rounded-lg py-2 px-3 w-[100%] border-none focus:outline-none"
              placeholder="Search..."
            />
          </div>
          <div className="flex flex-1 sm:ml-8 sm:gap-10 md:ml-14 space-x-4 md:gap-16  w-[100%] ">
            <a
              href="/"
              className="text-white hover:text-gray-100 font-semibold transition duration-300"
            >
              Server
            </a>
            <a
              href="/"
              className="text-white hover:text-gray-100 font-semibold transition duration-300"
            >
              Rank
            </a>
            <a
              href="/"
              className="text-white hover:text-gray-100 font-semibold transition duration-300"
            >
              Budget
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
