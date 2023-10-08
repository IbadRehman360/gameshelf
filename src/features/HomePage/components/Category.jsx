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
    <div className="mx-auto mb-4 grid max-w-[1400px] grid-cols-4 justify-items-center gap-10 p-4 pb-10 md:mb-6 md:grid-cols-8 md:gap-5 lg:gap-2 xl:gap-0 xl:p-3 xl:pb-6">
      {categories.map((categoryItem, i) => (
        <CategoryItem key={i} category={categoryItem} />
      ))}
    </div>
  );
}
