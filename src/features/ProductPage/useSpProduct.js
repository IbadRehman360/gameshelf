import { useQuery } from '@tanstack/react-query';
import { getUserItems } from '../../services/apiItem';

export default function useEqProduct(id) {
    const {
        data: product,
        loading,
        error: productError,
    } = useQuery(
        ['spProduct', id], // Use the ID as part of the query key
        () => getUserItems(id),
        {
            enabled: !!id, // Enable the query only if id is truthy
            staleTime: 10000, // Set a short stale time for caching
        }
    );

    return {
        product,
        loading,
        productError,
    };
}
