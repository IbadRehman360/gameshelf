import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../routes/routes";
import { uploadImageToStorage } from "../../services/apiItem";

export default function useUpdateProfileImage() {
    const mutationFn = async (file) => {

        try {
            const { data } = await uploadImageToStorage(file);
        } catch (error) {
            console.error("Error updating data:", error);
            throw error;
        }
    };

    const { mutate, isLoading } = useMutation(mutationFn, {
        onError: (error) => {
            console.error("Error updating data:", error);
        },
        onSuccess: () => {
            console.log("Data updated successfully!");
            queryClient.invalidateQueries(["profile"]);
        },
    });
    return { mutate, isLoading };
}
