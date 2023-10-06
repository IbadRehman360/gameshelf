import HeroCarousel from "../features/HomePage/components/HeroCarousel";
import TrendingGiftCards from "../features/HomePage/components/FeatureTrendingGiftCards";
import TrendingVideoGames from "../features/HomePage/components/FeatureTrendingVideoGames";
import PaymentOptions from "../features/HomePage/components/PaymentOptions";
import FeaturesList from "../features/HomePage/components/FeaturesList";

import Categories from "../features/HomePage/components/Category.jsx";
import FeaturedProducts from "../features/HomePage/components/Products";
import ProductsFilter from "../features/HomePage/components/ProductsFilter";
import { useState } from "react";

export default function HomePage() {
  const [sortCriteria, setSortCriteria] = useState({
    orderBy: "created_at",
    orderDirection: "asc",
  });

  return (
    <div className="bg-[#fdfdfd]">
      <HeroCarousel />
      <Categories />
      <div className="mx-auto mt-16 max-w-[1400px] bg-[#fdfdfd] px-0 xl:px-14">
        <ProductsFilter
          sortCriteria={sortCriteria}
          setSortCriteria={setSortCriteria}
        />
        <FeaturedProducts
          sortCriteria={sortCriteria}
          setSortCriteria={setSortCriteria}
        />
        <TrendingGiftCards />
        <TrendingVideoGames />
      </div>
      <PaymentOptions />
      <FeaturesList />
    </div>
  );
}
