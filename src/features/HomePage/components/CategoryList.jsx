import CategoryItem from "./CategoryItem";
import useGetCategories from "../hooks/useGetCategories";
import { useEffect, useState } from "react";

export default function CategoryList() {
  const [data, error] = useGetCategories();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
      setCategories(data);
    }
  }, [data]);

  return (
    <div className="mx-auto bg-gradient-to-b bg-[#ffffff]  border-2">
      <h3 className="block justify-center md:mt-8 mt-6 text-center text-1xl  text-gray-700 md:mb-4 mb-2 lg:text-[1.7rem] 3xl:text-[1.8rem]  md:text-[1.7rem] text-[1.3rem]  ml-2  font-semibold ">
        EXPLORE CATEGORIES
      </h3>
      <div className="max-w-[1400px] grid mx-auto md:mb-6 mb-4 gap-10 grid-cols-4 md:grid-cols-8 md:gap-5 lg:gap-2 xl:gap-0 justify-items-center p-4 xl:p-3 pb-10 xl:pb-6">
        {isLoading ? Array.from({ length: 8 }, () => (
          <div class="animate-pulse flex flex-col items-center gap-2">
            <div class="rounded-2xl bg-slate-700 h-12 w-11 lg:h-16 md:w-16 "></div>
            <div class="h-2 bg-slate-700 rounded col-span-2 w-full"></div>
          </div>
        )) :
        categories.map((categoryItem, i) => (
          <CategoryItem key={i} index={i} category={categoryItem} />
        ))}
      </div>
    </div>
  );
}
