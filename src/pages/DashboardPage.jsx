import DashboardItems from "../components/FeatureProducts";
import DashboardBreadTitle from "../components/Features/Dashboard/DashboardBreadTitle";
import DashboardListingFilter from "../components/Features/Dashboard/DashboardListingFilter";
import DashboardSearchBar from "../components/Features/Dashboard/DashboardSearchBar";
import DashboardPopularSearches from "../components/Features/Dashboard/DashboardPopularSearches";
import FeaturePagination from "../components/FeaturePagination";
import DashBoardInfo from "../components/Features/Dashboard/DashBoardInfo";
export default function DashboardPage() {
  return (
    <>
      <div className="max-w-[1500px] mx-auto pt-8 px-4 sm:pb-6       ">
        <DashboardBreadTitle />
        <DashboardSearchBar />
        <DashboardPopularSearches />
      </div>
      <div
        className="sm:2 pt-4 px-2  pb-20 "
        style={{ backgroundColor: "#FCFCFC " }}
      >
        <div className="max-w-[1500px] mx-auto  pt-8 px-2  ">
          <DashboardListingFilter />
          <DashboardItems />
          <FeaturePagination />
          <DashBoardInfo />
        </div>
      </div>
    </>
  );
}
