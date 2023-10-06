export default function CategoriesLoading() {
  return (
    <div>
      <div className="mx-auto w-72">
        <span className="mb-2 ml-2 mt-6 block h-6 animate-pulse bg-slate-400 md:mb-4 md:mt-8"></span>
      </div>
      <div className="mx-auto mb-4 grid max-w-[1400px] grid-cols-4 justify-items-center gap-10 p-4 pb-10 md:mb-6 md:grid-cols-8 md:gap-5 lg:gap-2 xl:gap-0 xl:p-3 xl:pb-6">
        {Array.from({ length: 8 }, (key) => (
          <div
            key={key}
            className="flex animate-pulse flex-col items-center gap-2"
          >
            <div className="h-12 w-11 rounded-2xl bg-slate-400 md:w-16 lg:h-16"></div>
            <div className="col-span-2 h-2 w-full rounded bg-slate-400"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
