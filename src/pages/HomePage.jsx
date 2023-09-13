import HeroCarousel from "../features/HomePage/components/HeroCarousel";
import TrendingGiftCards from "../features/HomePage/components/FeatureTrendingGiftCards";
import TrendingVideoGames from "../features/HomePage/components/FeatureTrendingVideoGames";
import PaymentOptions from "../features/HomePage/components/PaymentOptions";
import FeaturesList from "../features/HomePage/components/FeaturesList";
import FeaturedProducts from "../features/HomePage/components/Products";
import CategoriesLoading from "../features/HomePage/components/CategoriesLoading";
import { lazy, Suspense } from "react";

const Categories = lazy(() =>
  import("../features/HomePage/components/CategoryList")
);

export default function HomePage() {
  return (
    <div className="bg-[#fdfdfd]">
      <HeroCarousel />
      <Suspense fallback={<CategoriesLoading />}>
        <Categories />
      </Suspense>
      <div className=" bg-[#fdfdfd] mt-16 max-w-[1400px] px-0 xl:px-14 mx-auto">
        <FeaturedProducts />
        <TrendingGiftCards />
        <TrendingVideoGames />
      </div>
      <PaymentOptions />
      <FeaturesList />
    </div>
  );
}
