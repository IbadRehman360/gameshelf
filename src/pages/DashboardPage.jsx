import DashboardFeatureProductHero from "../features/DashBoard/components/DashboardFeatureProductHero";
import DashboardItemsNavigation from "../features/DashBoard/components/DashboardItemsNavigationProduct";
import DashboardSearchBar from "../features/DashBoard/components/DashboardSearchBoxNavigation";
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
