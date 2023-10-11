import { useQuery } from "@tanstack/react-query";
import { getGames } from "../../services/apiGames";

function useGames() {
  const {
    data: games,
    isLoading: gamesLoading,
  } = useQuery(["games"], getGames, {
    onError: (error) => {
      console.error("An error occurred while fetching games:", error);
    },
  });

  return {
    games,
    gamesLoading,
  };
}

export default useGames;
