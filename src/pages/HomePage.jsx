import HeroCarousel from "../components/Features/HomePage/HeroCarousel";
import CategoryList from "../components/Features/HomePage/CategoryList";
import TrendingGiftCards from "../components/Features/HomePage/TrendingGiftCards";
import TrendingVideoGames from "../components/Features/HomePage/TrendingVideoGames";
import PaymentOptions from "../components/Features/HomePage/PaymentOptions";
import FeaturesList from "../components/Features/HomePage/FeaturesList";
import FeaturedProducts from "../components/Features/HomePage/Products";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#FCFCFC " }}>
      <HeroCarousel />
      <CategoryList />
      <div
        className="bg-white mt-16 max-w-[1400px] px-0 xl:px-14 mx-auto"
        style={{ backgroundColor: "#FCFCFC " }}
      >
        <FeaturedProducts />
        <TrendingGiftCards />
        <TrendingVideoGames />
      </div>
      <PaymentOptions />
      <FeaturesList />
    </div>
  );
}
