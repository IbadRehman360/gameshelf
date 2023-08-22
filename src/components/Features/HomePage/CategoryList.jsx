import CategoryItem from "./CategoryItem";

const categories = [
  { name: "Games Top Up", color: "bg-[#6fb935]" },
  { name: "Gift Cards", color: "bg-[#2ebdb5]" },
  { name: "Video Games", color: "bg-[#39bbd8]" },
  { name: "Software", color: "bg-[#f68500]" },
  { name: "Game Coins", color: "bg-[#f05f81]" },
  { name: "Items", color: "bg-[#7774ff]" },
  { name: "Accounts", color: "bg-[#3092eb]" },
  { name: "Coaching", color: "bg-[#ffc600]" },
];

export default function CategoryList() {
  return (
    <div className="mx-auto bg-gradient-to-b bg-white  border-2">
      <h3 className="block justify-center md:mt-8 mt-6 text-center text-1xl  text-gray-700 md:mb-4 mb-2 lg:text-[1.8rem] 3xl:text-[1.9rem]  md:text-[1.7rem] text-[1.4rem]  ml-2  font-semibold ">
        EXPLORE CATEGORIES
      </h3>
      <div className="  max-w-[1460px] grid mx-auto md:mb-6 mb-4 gap-10 grid-cols-4 md:grid-cols-8 md:gap-5 lg:gap-2 xl:gap-0 justify-items-center p-4 xl:p-3 pb-10 xl:pb-6">
        {categories.map((categoryItem, i) => (
          <CategoryItem key={i} index={i} category={categoryItem} />
        ))}
      </div>
    </div>
  );
}
