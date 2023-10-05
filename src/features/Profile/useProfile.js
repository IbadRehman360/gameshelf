import { useQuery } from "@tanstack/react-query";
import { getProfileData } from "../../services/apiProfile";


export default function useProfile(user) {
    const { data: profileData, loading, error: profileError } = useQuery({
        queryKey: ["profile"],
        queryFn: () => getProfileData(user),
    });

    return {
        profileData,
        loading,
        profileError,
    };
}
