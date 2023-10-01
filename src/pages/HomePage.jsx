import HeroCarousel from "../features/HomePage/components/HeroCarousel";
import TrendingGiftCards from "../features/HomePage/components/FeatureTrendingGiftCards";
import TrendingVideoGames from "../features/HomePage/components/FeatureTrendingVideoGames";
import PaymentOptions from "../features/HomePage/components/PaymentOptions";
import FeaturesList from "../features/HomePage/components/FeaturesList";

import Categories from "../features/HomePage/components/Category.jsx";
import FeaturedProducts from "../features/HomePage/components/Products";

export default function HomePage() {
  return (
    <div className="bg-[#fdfdfd]">
      <HeroCarousel />
      <Categories />
      <div className="mx-auto mt-16 max-w-[1400px] bg-[#fdfdfd] px-0 xl:px-14">
        <FeaturedProducts />
        <TrendingGiftCards />
        <TrendingVideoGames />
      </div>
      <PaymentOptions />
      <FeaturesList />
    </div>
  );
}
