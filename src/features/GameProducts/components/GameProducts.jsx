import { useParams } from "react-router-dom";
import FeaturedProduct from "../../../components/FeatureProducts";
import useProduct from "../useCategoryItems";

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
    : alert("NO SUCH GAME EXIST EXIST EXIST WITH THIS GAME");
  console.log(selectedGameId);

  const { isGameLoading, isGameError, isGames } = useProduct(selectedGameId);

  const games = isGames ? isGames : [];
  console.log(games);

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5">
      {games.map((game, i) => (
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
