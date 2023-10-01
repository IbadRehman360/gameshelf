import CategoryItem from "./CategoryItem";
import CategoriesLoading from "../loaders/CategoriesLoading";
import useCategories from "../useCategories";

export default function CategoryList() {
  const { categories, loadingCategories, isCategoryError } = useCategories();

  if (loadingCategories) {
    return <CategoriesLoading />;
  }

  if (isCategoryError) {
    return <p>Error loading categories</p>;
  }

  return (
    <div className="mx-auto border-2 bg-[#ffffff] bg-gradient-to-b">
      <h3 className="mb-2 ml-2 mt-6 block justify-center text-center text-[1.3rem] font-semibold text-gray-700 md:mb-4 md:mt-8 md:text-[1.7rem] lg:text-[1.7rem] 3xl:text-[1.8rem]">
        EXPLORE CATEGORIES
      </h3>
      <div className="mx-auto mb-4 grid max-w-[1400px] grid-cols-4 justify-items-center gap-10 p-4 pb-10 md:mb-6 md:grid-cols-8 md:gap-5 lg:gap-2 xl:gap-0 xl:p-3 xl:pb-6">
        {categories.map((categoryItem, i) => (
          <CategoryItem key={i} category={categoryItem} />
        ))}
      </div>
    </div>
  );
}
