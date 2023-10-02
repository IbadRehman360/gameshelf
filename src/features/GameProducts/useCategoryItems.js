import { useQuery } from "@tanstack/react-query";
import { getCategoryItems } from "../../services/apiItem";
// import { useParams } from "react-router-dom";

export default function useProduct(game) {
    const {
        data: games,
        loading: isGameLoading,
        error: isGameError,
    } = useQuery({
        queryKey: [game],
        queryFn: () => getCategoryItems(game),
    });

    return { isGameLoading, isGameError, games };
}