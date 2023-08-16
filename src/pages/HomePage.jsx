import HeroCarousel from "../components/HeroCarousel";
import CategoryList from "../components/CategoryList";
import TrendingGiftCards from "../components/TrendingGiftCards";
import TrendingVideoGames from "../components/TrendingVideoGames";
import PaymentOptions from "../components/PaymentOptions";
import FeaturesList from "../components/Features/FeaturesList";
import FeaturedProducts from "../components/FeaturedProducts";

export default function HomePage() {
  return (
    <div className="">
      <HeroCarousel />
      <CategoryList />
      <div className="bg-white mt-14 max-w-[1400px]  mx-auto">
        <FeaturedProducts />
        <TrendingGiftCards />
        <TrendingVideoGames />
      </div>
      <PaymentOptions />
      <FeaturesList />
    </div>
  );
}
