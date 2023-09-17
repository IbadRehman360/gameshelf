import DashboardFeatureProductHero from "../features/DashBoardNavigation/DashboardFeatureProductHero";
import DashboardItemsNavigation from "../features/DashBoardNavigation/DashboardItemsNavigationProduct";
import DashboardSearchBar from "../features/DashBoardNavigation/DashboardSearchBoxNavigation";
export default function DashboardPage() {
  return (
    <div className="bg-[#fcfcfc]">
      <div className="px-4 pt-10 md:px-12">
        <DashboardSearchBar />
      </div>
      <div className="px-4 sm:px-4 lg:px-12">
        <DashboardFeatureProductHero />
        <DashboardItemsNavigation />
      </div>
    </div>
  );
}
