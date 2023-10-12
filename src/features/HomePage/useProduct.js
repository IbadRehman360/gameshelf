import { useQuery } from "@tanstack/react-query";
import { getItem } from "../../services/apiItem";

export default function useProduct(orderBy, orderDirection) {
    const { data: items, isLoading: loadingItems, error: isItemsError } = useQuery(
        ['hpItem', orderBy, orderDirection],
        () => getItem(orderBy, orderDirection),
    );

    return { items, loadingItems, isItemsError };
}