import { useQuery } from "@tanstack/react-query";
import { useGetCategories } from "../../services/apiCategories";

export default function useCategories() {

    const {
        data: categories,
        isLoading: loadingCategories,
        error: isCategoryError,
    } = useQuery({
        queryKey: ["categories"],
        queryFn: useGetCategories,
    })
    return { categories, loadingCategories, isCategoryError };
}