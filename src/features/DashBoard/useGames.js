import { useQuery } from '@tanstack/react-query';
import { getGames } from '../../services/apiGames';

export function useGames() {
    const {
        data: isGames,
        loading: isGamesLoading,
        error: gamesError,
    } = useQuery({ queryKey: ["games"], queryFn: getGames });
    return {
        isGames,
        isGamesLoading,
        gamesError,
    };
}
