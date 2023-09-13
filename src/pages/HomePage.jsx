import HeroCarousel from "../features/HomePage/components/HeroCarousel";
import TrendingGiftCards from "../features/HomePage/components/FeatureTrendingGiftCards";
import TrendingVideoGames from "../features/HomePage/components/FeatureTrendingVideoGames";
import PaymentOptions from "../features/HomePage/components/PaymentOptions";
import FeaturesList from "../features/HomePage/components/FeaturesList";
import FeaturedProducts from "../features/HomePage/components/Products";

import CategoriesLoading from "../features/HomePage/components/loader/CategoriesLoading";
import ProductLoader from "../features/HomePage/components/loader/HomeProductLoader";

import { lazy, Suspense } from "react";

import useGetCategories from "../features/HomePage/hooks/useGetCategories";


const Categories = lazy(() =>
  import("../features/HomePage/components/CategoryList")
);

export default function HomePage() {
  const [categories, error] = useGetCategories();

  return (
    <div className="bg-[#fdfdfd]">
      <HeroCarousel />
      <Suspense fallback={<CategoriesLoading />}>
        <Categories categories={categories} />
      </Suspense>
      <div className=" bg-[#fdfdfd] mt-16 max-w-[1400px] px-0 xl:px-14 mx-auto">
        <Suspense fallback={<ProductLoader />}>
          <FeaturedProducts />
        </Suspense>
        <TrendingGiftCards />
        <TrendingVideoGames />
      </div>
      <PaymentOptions />
      <FeaturesList />
    </div>
  );
}
