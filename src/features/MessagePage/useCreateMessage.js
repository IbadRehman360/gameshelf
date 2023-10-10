import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../routes/routes";
import { getCreateMessage } from "../../services/apiChat";
export default function useCreateMessage(chatId) {
    const mutationFn = async (chat) => {
        try {
            const { data } = await getCreateMessage(chat);
            return data;
        } catch (error) {
            console.error("Error updating data:", error);
            throw error;
        }
    };

    const { mutate, isLoading } = useMutation(mutationFn, {
        onSuccess: () => {
            queryClient.invalidateQueries(["chatMessages", chatId]);
        },
        onError: (error) => {
            console.error("Error updating data:", error);
        },
    });
    return { mutate, isLoading };
}
