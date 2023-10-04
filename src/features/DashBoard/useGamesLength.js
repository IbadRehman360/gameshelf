import { useQuery } from "@tanstack/react-query";
import { getOffers } from "../../services/apiGames";

export default function useGamesLength() {
    const {
        data,
        loading,
        error,
    } = useQuery({ queryKey: ["offers"], queryFn: getOffers });

    return {
        data,
        loading,
        error,
    };
}
