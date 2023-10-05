import { useQuery } from '@tanstack/react-query';
import { getUserItems } from '../../services/apiItem';

export default function useEqProduct(id) {

    const {
        data: product,
        loading,
        error: productError,
    } = useQuery({ queryKey: ["spProduct"], queryFn: () => getUserItems(id) });


    return {
        product,
        loading,
        productError,
    };
}
