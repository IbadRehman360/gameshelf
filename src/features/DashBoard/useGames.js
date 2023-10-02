import { useQuery } from '@tanstack/react-query';
import { getGames } from '../../services/apiGames';

export default function useGames() {
    const {
        data: games,
        loading,
        error: gamesError,
    } = useQuery({ queryKey: ["games"], queryFn: getGames });


    return {
        games,
        loading,
        gamesError,
    };
}
