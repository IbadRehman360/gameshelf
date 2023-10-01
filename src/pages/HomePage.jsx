import { lazy, Suspense } from "react";

import HeroCarousel from "../features/HomePage/components/HeroCarousel";
import TrendingGiftCards from "../features/HomePage/components/FeatureTrendingGiftCards";
import TrendingVideoGames from "../features/HomePage/components/FeatureTrendingVideoGames";
import PaymentOptions from "../features/HomePage/components/PaymentOptions";
import FeaturesList from "../features/HomePage/components/FeaturesList";

import CategoriesLoading from "../features/HomePage/components/loader/CategoriesLoading";
import ProductLoader from "../features/HomePage/components/loader/HomeProductLoader";

const Categories = lazy(() =>
  import("../features/HomePage/components/Category.jsx")
);
const FeaturedProducts = lazy(() =>
  import("../features/HomePage/components/Products")
);

export default function HomePage() {
  return (
    <div className="bg-[#fdfdfd]">
      <HeroCarousel />
      <Suspense fallback={<CategoriesLoading />}>
        <Categories />
      </Suspense>
      <div className="mx-auto mt-16 max-w-[1400px] bg-[#fdfdfd] px-0 xl:px-14">
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
