import DashboardFeatureProductHero from "../features/DashBoard/components/DashboardFeatureProductHero";
import DashboardItemsNavigation from "../features/DashBoard/components/DashboardItemsNavigationProduct";
import DashboardSearchBar from "../features/DashBoard/components/DashboardSearchBoxNavigation";
import useGames from "../features/DashBoard/useGames";
import { AiOutlineLoading } from "react-icons/ai"; // Import the Loading icon

export default function DashboardPage() {
  const { loading, gamesError, games } = useGames();
  if (loading || !games) {
    return (
      <div className="flex h-screen items-center justify-center">
        <AiOutlineLoading className="animate-spin text-4xl sm:text-5xl lg:text-6xl text-gray-500" />
      </div>
    );
  }
  return (
    <div className="bg-[#fcfcfc]">
      <div className="px-4 pt-10 md:px-12">
        <DashboardSearchBar games={games} />
      </div>
      <div className="px-4 sm:px-4 lg:px-12">
        <DashboardFeatureProductHero games={games} loading={loading} />
        <DashboardItemsNavigation games={games} loading={loading} />
      </div>
    </div>
  );
}
