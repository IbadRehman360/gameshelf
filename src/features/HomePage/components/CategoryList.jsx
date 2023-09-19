import CategoryItem from "./CategoryItem";

const categories = [
  { name: "Video Games", color: "bg-[#6fb935]" },
  { name: "Gift Cards", color: "bg-[#2ebdb5]" },
  { name: "Software", color: "bg-[#f68500]" },
  { name: "Game Coins", color: "bg-[#f05f81]" },
  { name: "Items", color: "bg-[#7774ff]" },
  { name: "Accounts", color: "bg-[#3092eb]" },
  { name: "Coaching", color: "bg-[#ffc600]" },
  { name: "Games Top", color: "bg-[#39bbd8]" },
];

export default function CategoryList() {
  return (
    <div className="mx-auto border-2 bg-[#ffffff] bg-gradient-to-b">
      <h3 className="mb-2 ml-2 mt-6 block justify-center text-center text-[1.3rem] font-semibold text-gray-700 md:mb-4 md:mt-8 md:text-[1.7rem] lg:text-[1.7rem] 3xl:text-[1.8rem]">
        EXPLORE CATEGORIES
      </h3>
      <div className="mx-auto mb-4 grid max-w-[1400px] grid-cols-4 justify-items-center gap-10 p-4 pb-10 md:mb-6 md:grid-cols-8 md:gap-5 lg:gap-2 xl:gap-0 xl:p-3 xl:pb-6">
        {categories.map((categoryItem, i) => (
          <CategoryItem key={i} index={i} category={categoryItem} />
        ))}
      </div>
    </div>
  );
}
