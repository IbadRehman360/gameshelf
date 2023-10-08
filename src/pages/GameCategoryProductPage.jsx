import GameProductItems from "../features/GameProducts/components/GameProducts";
import GameProductBreadTitle from "../features/GameProducts/components/GameProductsBreadTitle";
import GameProductListingFilter from "../features/GameProducts/components/GameProductsListingFilter";
import GameProductSearchBar from "../features/GameProducts/components/GameProductsSearchBar";
import GameProductPopularSearches from "../features/GameProducts/components/GameProductsPopularSearches";
import FeaturePagination from "../components/FeaturePagination";
import GameProductInfo from "../features/GameProducts/components/GameProductsInfo";
import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../features/GameProducts/useCategoryItems";
import { useState } from "react";
import GameProductsNavigate from "../features/GameProducts/components/GameProductsNavigate";
export default function GameCategoryProductPage() {
  const { game } = useParams();
  const [selectedFilter, setSelectedFilter] = useState("Recommended");
  const isGameNameValid = gameNameToIdMap.hasOwnProperty(game);
  const navigate = useNavigate();

  // Move navigateToDashboard function declaration here

  const selectedGameId = isGameNameValid
    ? gameNameToIdMap[game]
    : (() => {
        navigate("/dashboard");
        return alert("Please select a valid game name");
      })();

  const { isGameLoading, games } = useProduct(selectedGameId);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <>
      <div className="mx-auto max-w-[1400px] border-b-2 border-gray-100 px-4 py-8 xl:px-14">
        <GameProductBreadTitle />
        <GameProductSearchBar />
        <GameProductPopularSearches />
      </div>
      <div className="pb-20" style={{ backgroundColor: "#FCFCFC " }}>
        <div className="mx-auto max-w-[1400px] px-2 pt-8 xl:px-14">
          <GameProductListingFilter
            total={game.length}
            selectedFilter={selectedFilter}
            onFilterChange={handleFilterChange}
          />
          <GameProductItems
            loading={isGameLoading}
            games={games}
            selectedFilter={selectedFilter}
          />
          <FeaturePagination
            onchange={"sm:flex"}
            onchange2={"sm:hidden"}
            total={game.length}
          />
          <GameProductInfo />
        </div>
      </div>
    </>
  );
}

const gameNameToIdMap = {
  apexlegends: 2,
  callofduty: 3,
  theelder: 4,
  fifa22: 5,
  fortnite: 6,
  worldofwarcraft: 7,
  farcry: 8,
  csgo: 1,
  valorant: 9,
  minecraft: 10,
  genshinimpact: 11,
  cyberpunk2077: 12,
  leagueoflegends: 13,
  witcher3: 15,
  gtav: 17,
  overwatch: 18,
  supermarioodyssey: 19,
  residentevilvillage: 20,
  assassinscreed: 16,
};
