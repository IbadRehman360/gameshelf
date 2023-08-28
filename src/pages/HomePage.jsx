import HeroCarousel from "../components/Features/HomePage/HeroCarousel";
import CategoryList from "../components/Features/HomePage/CategoryList";
import TrendingGiftCards from "../components/FeatureTrendingGiftCards";
import TrendingVideoGames from "../components/FeatureTrendingVideoGames";
import PaymentOptions from "../components/Features/HomePage/PaymentOptions";
import FeaturesList from "../components/Features/HomePage/FeaturesList";
import FeaturedProducts from "../components/Features/HomePage/Products";

export default function HomePage() {
  return (
    <div className="bg-[#fdfdfd]">
      <HeroCarousel />
      <CategoryList />
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
