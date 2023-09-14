import CategoryItem from "./CategoryItem";
import useGetCategories from "../hooks/useGetCategories";
import {  useEffect, useState } from "react";

export default function CategoryList() {
  const [data] = useGetCategories();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  return (
    <div className="mx-auto bg-gradient-to-b bg-[#ffffff]  border-2">
      <h3 className="block justify-center md:mt-8 mt-6 text-center text-1xl  text-gray-700 md:mb-4 mb-2 lg:text-[1.7rem] 3xl:text-[1.8rem]  md:text-[1.7rem] text-[1.3rem]  ml-2  font-semibold ">
        EXPLORE CATEGORIES
      </h3>
      <div className="max-w-[1400px] grid mx-auto md:mb-6 mb-4 gap-10 grid-cols-4 md:grid-cols-8 md:gap-5 lg:gap-2 xl:gap-0 justify-items-center p-4 xl:p-3 pb-10 xl:pb-6">
        {categories.map((categoryItem, i) => (
          <CategoryItem key={i} index={i} category={categoryItem} />
        ))}
      </div>
    </div>
  );
}
