// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";

import useGame from "../useGame";

export default function dashboardItems() {
  const game = 1;
  const { isGameLoading, isGameError, isGames } = useGame(game);

  const games = isGames ? isGames : [];
  console.log(games);
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5">
      {/* {Array.from({ length: 20 }, (item, i) => (
        <DashboardItems key={i} />
      ))} */}
    </div>
  );
}
