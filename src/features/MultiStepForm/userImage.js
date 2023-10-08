import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../routes/routes";
import { createItem, uploadImageToStorage } from "../../services/apiItem";

export default function useUpdateProfileImage(values, userId) {
    console.log("TEST3")
    const mutationFn = async (file) => {
        console.log(file, "TEST2")

        try {
            const imageUrl = await uploadImageToStorage(file, "item_images");
            const updatedData = await createItem({ ...values, imageUrl }, userId);
            return updatedData;
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
