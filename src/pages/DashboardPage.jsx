import DashboardFeatureProductHero from "../components/Features/DashBoardNavigation/DashboardFeatureProductHero";
import DashboardItemsNavigation from "../components/Features/DashBoardNavigation/DashboardItemsNavigationProduct";
import DashboardSearchBar from "../components/Features/DashBoardNavigation/DashboardSearchBoxNavigation";
export default function DashboardPage() {
  return (
    <>
      <div className="md:px-12 mt-10 px-4">
        <DashboardSearchBar />
      </div>
      <div className="lg:px-12 px-2 sm:px-4  ">
        <DashboardFeatureProductHero />
        <DashboardItemsNavigation />
      </div>
    </>
  );
}
