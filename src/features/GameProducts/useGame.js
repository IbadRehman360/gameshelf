// import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
// import { getGames } from "../../services/apiGames";

// export default function useGame() {
//     const { game } = useParams();

//     const {
//         data: isGames,
//         loading: isGameLoading,
//         error: isGameError,
//     } = useQuery({
//         queryKey: [game],
//         queryFn: () => getGames(game),
//     });

//     return { isGameLoading, isGameError, isGames };
// }