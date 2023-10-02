import { useParams } from "react-router-dom";
import FeaturedProduct from "../../../components/FeatureProducts";
import useProduct from "../useCategoryItems";
import { Spinner } from "@material-tailwind/react";

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
export default function GameProducts() {
  const { game } = useParams();

  const isGameNameValid = gameNameToIdMap.hasOwnProperty(game);

  const selectedGameId = isGameNameValid
    ? gameNameToIdMap[game]
    : alert("NO SUCH GAME EXISTS WITH THIS NAME");

  const { isGameLoading, isGameError, isGames } = useProduct(selectedGameId);

  const games = isGames || [];

  if (isGameLoading || !isGames) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>{" "}
      </div>
    );
  }

  if (isGames.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Oops! No Products Found
          </h1>
          <p className="text-lg text-gray-600">
            It seems like there are no products available in this category.
            <div className="mt-2" />
            Why not explore our other categories?
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5">
      {isGames.map((game, i) => (
        <FeaturedProduct
          key={i}
          title={game.title}
          created_at={game.created_at}
          price={game.price}
          level={game.seller_id.level}
          fullName={game.seller_id.username}
        />
      ))}
    </div>
  );
}
