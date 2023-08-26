import DashboardFeatureProductHero from "../components/Features/DashBoardNavigation/DashboardFeatureProductHero";
import DashboardItemsNavigation from "../components/Features/DashBoardNavigation/DashboardItemsNavigation";
import DashboardSearchBar from "../components/Features/DashBoardNavigation/DashboardSearchBoxNavigation";
export default function DashboardPage() {
  return (
    <div>
      <div className="md:px-12 mt-10 px-4">
        <DashboardSearchBar />
      </div>
      <div className="md:px-12  px-4">
        <DashboardFeatureProductHero />
        <DashboardItemsNavigation />
    </div>
  );
}
