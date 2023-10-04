import { useQuery } from '@tanstack/react-query';
import { getOffers } from '../../services/apiGames';

export default function useOffers(game) {
    const {
        data: offers,
        loading,
        error,
    } = useQuery({ queryKey: ["offers"], queryFn: () => getOffers(game) });

    return {
        offers,
        loading,
        error,
    };
}
