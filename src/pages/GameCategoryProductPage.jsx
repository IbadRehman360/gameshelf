import GameProductItems from "../features/GameProducts/components/GameProducts";
import GameProductBreadTitle from "../features/GameProducts/components/GameProductsBreadTitle";
import GameProductListingFilter from "../features/GameProducts/components/GameProductsListingFilter";
import GameProductSearchBar from "../features/GameProducts/components/GameProductsSearchBar";
import GameProductPopularSearches from "../features/GameProducts/components/GameProductsPopularSearches";
import FeaturePagination from "../components/FeaturePagination";
import GameProductInfo from "../features/GameProducts/components/GameProductsInfo";
import { useParams } from "react-router-dom";
import useProduct from "../features/GameProducts/useCategoryItems";

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
};
export default function GameCategoryProductPage() {
  const { game } = useParams();
  const isGameNameValid = gameNameToIdMap.hasOwnProperty(game);

  const selectedGameId = isGameNameValid
    ? gameNameToIdMap[game]
    : alert("NO SUCH GAME EXISTS WITH THIS NAME");

  const { isGameLoading, isGameError, games } = useProduct(selectedGameId);
  const ifGames = games ? games.length : 0;

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
          <GameProductItems isGameLoading={isGameLoading} games={games} />
          <FeaturePagination
            onchange={"sm:flex"}
            onchange2={"sm:hidden"}
            total={ifGames}
          />
          <GameProductInfo />
        </div>
      </div>
    </>
  );
}
