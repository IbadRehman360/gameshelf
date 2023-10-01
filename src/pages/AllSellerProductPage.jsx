import GameProductItems from "../features/GameProducts/components/GameProducts";
import GameProductBreadTitle from "../features/GameProducts/components/GameProductsBreadTitle";
import GameProductListingFilter from "../features/GameProducts/components/GameProductsListingFilter";
import GameProductSearchBar from "../features/GameProducts/components/GameProductsSearchBar";
import GameProductPopularSearches from "../features/GameProducts/components/GameProductsPopularSearches";
import FeaturePagination from "../components/FeaturePagination";
import GameProductInfo from "../features/GameProducts/components/GameProductsInfo";
export default function DashboardPage() {
  return (
    <>
      <div className="mx-auto max-w-[1400px] border-b-2 border-gray-100 px-4 pt-8 sm:pb-6 xl:px-14">
        <GameProductBreadTitle />
        <GameProductSearchBar />
        <GameProductPopularSearches />
      </div>
      <div className="pb-20" style={{ backgroundColor: "#FCFCFC " }}>
        <div className="mx-auto max-w-[1400px] px-2 pt-8 xl:px-14">
          <GameProductListingFilter />
          <GameProductItems />
          <FeaturePagination onchange={"sm:flex"} onchange2={"sm:hidden"} />
          <GameProductInfo />
        </div>
      </div>
    </>
  );
}
