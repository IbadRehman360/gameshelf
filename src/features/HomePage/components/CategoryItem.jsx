export default function categoryItem({ category, index }) {
  function renderName(){
    return category.name.split("-").join(" ")
  }
  return (
    <div className="text-center h-12 w-11  lg:h-16    md:w-14 xl:h-[5.6rem] md:mt-2.5 md:mb-4 lg:mb-0   xl:w-[70px] flex flex-col items-center gap-2">
      <div
        className={`${category.color} p-[0.75rem] xl:p-[1rem] rounded-xl xl:rounded-3xl`}
      >
        <img
          className="transition md:hover:scale-125"
          src={`/home/catergoriesBarImages/Navigation${index + 1}.webp`}
        />
      </div>
      <p className="capitalize text-[11px] sm:text-[14px] md:text-[0.8rem] xl:text-[0.95rem] text-black whitespace-nowrap font-semibold">
        {renderName()}
      </p>
    </div>
  );
}
