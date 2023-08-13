export default function categoryItem({ category, index }) {
  return (
    <div className="text-center h-14 w-14 md:h-16 md:w-16 xl:h-24 xl:w-20 flex flex-col items-center gap-2">
      <div className={`${category.color} p-4 xl:p-5 rounded-xl xl:rounded-3xl`}>
        <img
          className="transition md:hover:scale-125"
          src={`/home/catergoriesBarImages/Navigation${index + 1}.webp`}
        />
      </div>
      <p className="text-[11px] sm:text-[11px] md:text-xs font-medium text-white whitespace-nowrap">
        {category.name}
      </p>
    </div>
  );
}
