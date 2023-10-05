import { useQuery } from "@tanstack/react-query";
import { getGames, getOffers } from "../../services/apiGames";
export default function useGames() {
    const { data: games, loading: gamesLoading, error: gamesError } = useQuery(["games"], getGames);
    const { data: offers, loading: offersLoading, error: offersError } = useQuery(["offers"], getOffers);

    const gameOffersCount = {};

    if (offers && games) {
        games[0].forEach((game) => {
            const gameTitle = game.title;
            gameOffersCount[gameTitle] = 0;

            offers[0].forEach((offer) => {
                if (offer.game_id.title === gameTitle) {
                    gameOffersCount[gameTitle]++;
                }
            });

            game.offers = gameOffersCount[gameTitle];
        });
    }
    return {
        games,
        gamesLoading,
        gamesError,
    };
}
