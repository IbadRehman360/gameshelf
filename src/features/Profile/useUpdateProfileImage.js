import { useMutation } from "@tanstack/react-query";
import { storeBanners } from "../../services/apiStorage";
import { queryClient } from "./../../routes/routes";

export default function useUpdateProfileImage(userId, params, image_col) {
    const mutationFn = async (file) => {
        const updatedData = await storeBanners(file, userId, params, image_col);
        return updatedData;
    };

    const { mutate, isLoading } = useMutation(mutationFn, {
        onSuccess: () => {
            console.log("Data updated successfully!");
            queryClient.invalidateQueries(["profile"]);
        },
        onError: (error) => {
            console.error("Error updating data:", error);
        },
    });

    return { mutate, isLoading };
}
