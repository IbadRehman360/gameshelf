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
      <div className="mx-auto border-2 bg-[#ffffff] bg-gradient-to-b">
        <h3 className="mb-2 ml-2 mt-6 block justify-center text-center text-[1.3rem] font-semibold text-gray-700 md:mb-4 md:mt-8 md:text-[1.7rem] lg:text-[1.7rem] 3xl:text-[1.8rem]">
          EXPLORE CATEGORIES
        </h3>
        <Categories />
      </div>
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
