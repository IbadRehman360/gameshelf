export default function CategoriesLoading() {
  return (
    <div>
      <div className=" w-72 mx-auto">
        <span className="block md:mt-8 mt-6 md:mb-4 mb-2  ml-2  h-6 animate-pulse bg-slate-400"></span>
      </div>
      <div className="max-w-[1400px] grid mx-auto md:mb-6 mb-4 gap-10 grid-cols-4 md:grid-cols-8 md:gap-5 lg:gap-2 xl:gap-0 justify-items-center p-4 xl:p-3 pb-10 xl:pb-6">
        {Array.from({ length: 8 }, (key) => (
          <div key={key} className="animate-pulse flex flex-col items-center gap-2">
            <div className="rounded-2xl bg-slate-400 h-12 w-11 lg:h-16 md:w-16 "></div>
            <div className="h-2 bg-slate-400 rounded col-span-2 w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
