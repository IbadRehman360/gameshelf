import Hero from "../components/Hero";
import CategoryList from "../components/CategoryList";
import Stats from "../components/Stats";
import TrendingGiftCard from "../components/TrendingGiftCard";
import TrendingVideoGames from "../components/TrendingVideoGames";
import PaymentOptions from "../components/PaymentOptions";
import FeaturesList from "../components/Features/FeaturesList";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className=''>
      <Hero />
      <Stats />
      <CategoryList />
      <TrendingGiftCard />
      <TrendingVideoGames />
      <PaymentOptions />
      <FeaturesList />
      <Footer />
    </div>
  );
}
