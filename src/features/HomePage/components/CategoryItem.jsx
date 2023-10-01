import { Link } from "react-router-dom";
export default function categoryItem({ category }) {
  function renderName() {
    return category.name.split("-").join(" ");
  }

  return (
    <Link to={`/dashboard/${category.name}`}>
      <div className="flex h-12 w-11 flex-col items-center gap-2 text-center md:mb-4 md:mt-2.5 md:w-14 lg:mb-0 lg:h-16 xl:h-[5.6rem] xl:w-[64px] 2xl:w-[72px]">
        <div
          className={`rounded-xl p-[0.75rem] xl:rounded-2xl xl:p-[0.9rem]`}
          style={{ backgroundColor: category.color, color: "white" }}
        >
          <img
            className="transition md:hover:scale-125"
            src={`${category.images}`}
            alt={category.name}
          />
        </div>
        <p className="whitespace-nowrap text-[11px] font-semibold capitalize text-black sm:text-[14px] md:text-[0.8rem] xl:text-[0.95rem]">
          {renderName()}
        </p>
      </div>
    </Link>
  );
}
