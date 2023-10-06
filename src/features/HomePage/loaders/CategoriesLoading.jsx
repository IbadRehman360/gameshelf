export default function CategoriesLoading() {
  return (
    <div>
      <div className="mx-auto mb-4 grid max-w-[1400px] grid-cols-4 justify-items-center gap-10 p-4 pb-10 md:mb-6 md:grid-cols-8 md:gap-5 lg:gap-2 xl:gap-0 xl:p-3 xl:pb-6">
        {Array.from({ length: 8 }, (key) => (
          <div
            key={key}
            className="flex animate-pulse flex-col items-center gap-2"
          >
            <div className="h-12 w-11 rounded-xl sm:w-14 sm:h-14  md:rounded-2xl bg-slate-400 md:w-16 lg:h-16"></div>
            <div className="col-span-2 h-2 sm:h-3 w-full rounded bg-slate-400"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
