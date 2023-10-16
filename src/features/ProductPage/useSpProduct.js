import { useQuery } from '@tanstack/react-query';
import { getUserItems } from '../../services/apiItem';

export default function useEqProduct(id) {
    const { data: product, isLoading, error } = useQuery(['single', id], () => getUserItems(id), {
        enabled: !!id,
        staleTime: 10000,
    });

    return { product, isLoading, error };
}