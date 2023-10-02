// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";

import FeaturedProduct from "../../../components/FeatureProducts";
import useProduct from "../useCategoryItems";

export default function dashboardItems() {
  const game = 1;
  const { isGameLoading, isGameError, isGames } = useProduct(game);

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
          fullName={game.seller_id.fullName}
        />
      ))}
    </div>
  );
}
