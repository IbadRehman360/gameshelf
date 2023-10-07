import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../services/apiItem";

export default function useGetUser(userId) {
    const { data: user, isLoading: loadingUser, error: isUserError } = useQuery({
        queryKey: ["user"],
        queryFn: () => getUserInfo(userId),
    });

    return { user, loadingUser, isUserError };
}
