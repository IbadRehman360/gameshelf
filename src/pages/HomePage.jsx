import Hero from "../components/Hero";
import CategoryList from "../components/CategoryList";
import Stats from "../components/Stats";
import TrendingGiftCard from "../components/TrendingGiftCard";
import TrendingVideoGames from "../components/TrendingVideoGames";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <Stats />
      <CategoryList />
      <TrendingGiftCard />
      <TrendingVideoGames />
    </div>
  );
}
