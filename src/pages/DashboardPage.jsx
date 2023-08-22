import DashboardItems from "../components/FeatureProducts";
import DashboardBreadTitle from "../components/Features/Dashboard/DashboardBreadTitle";
import DashboardListingFilter from "../components/Features/Dashboard/DashboardListingFilter";
import DashboardSearchBar from "../components/Features/Dashboard/DashboardSearchBar";

export default function DashboardPage() {
  return (
    <div className="max-w-[1400px] mx-auto my-10 p-5">
      <DashboardBreadTitle />
      <DashboardSearchBar />
      <DashboardListingFilter />
      <DashboardItems />
    </div>
  );
}
