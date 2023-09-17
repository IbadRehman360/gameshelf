import SellerListingItems from "../components/FeatureProducts";
import SellerListingBreadTitle from "../features/AllSellerProductPage/AllSellerListingBreadTitle";
import SellerListingListingFilter from "../features/AllSellerProductPage/AllSellerListingListingFilter";
import SellerListingSearchBar from "../features/AllSellerProductPage/AllSellerListingSearchBar";
import SellerListingPopularSearches from "../features/AllSellerProductPage/AllSellerListingPopularSearches";
import FeaturePagination from "../components/FeaturePagination";
import SellerListingInfo from "../features/AllSellerProductPage/AllSellerListingInfo";
export default function DashboardPage() {
  return (
    <>
      <div className="mx-auto max-w-[1400px] border-b-2 border-gray-100 px-4 pt-8 sm:pb-6 xl:px-14">
        <SellerListingBreadTitle />
        <SellerListingSearchBar />
        <SellerListingPopularSearches />
      </div>
      <div className="pb-20" style={{ backgroundColor: "#FCFCFC " }}>
        <div className="mx-auto max-w-[1400px] px-2 pt-8 xl:px-14">
          <SellerListingListingFilter />
          <SellerListingItems />
          <FeaturePagination onchange={"sm:flex"} onchange2={"sm:hidden"} />
          <SellerListingInfo />
        </div>
      </div>
    </>
  );
}
