import Hero from "../components/Hero";
import CategoryList from "../components/CategoryList";
import Stats from "../components/Stats";
import TrendingGiftCards from "../components/TrendingGiftCards";
import TrendingVideoGames from "../components/TrendingVideoGames";
import PaymentOptions from "../components/PaymentOptions";
import FeaturesList from "../components/Features/FeaturesList";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProducts";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <Stats />
      <CategoryList />
      <div className="bg-white py-12">
        <FeaturedProducts />
        <TrendingGiftCards />
        <TrendingVideoGames />
      </div>
      <PaymentOptions />
      <FeaturesList />
      <Footer />
    </div>
  );
}
