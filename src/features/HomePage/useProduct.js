import { useQuery } from "@tanstack/react-query";
import { GetItem } from "../../services/apiItem";

export default function useProduct(orderBy, orderDirection) {

    const {
        data: items,
        isLoading: loadingItems,
        error: isItemsError,
    } = useQuery({
        queryKey: ["hpItem"],
        queryFn: () => GetItem(orderBy, orderDirection),
    });
    return { items, loadingItems, isItemsError }
}