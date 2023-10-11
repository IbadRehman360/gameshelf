import { useQuery } from "@tanstack/react-query";
import { getChatMessages } from "../../services/apiChat";

export function useChatMessages(chat) {
    const {
        data: chatMessagesData,
        isLoading: loadingChatMessages,
        error: isChatMessagesError,
    } = useQuery({
        queryKey: ['chatMessages', chat.id],
        queryFn: () => getChatMessages(chat),
        config: {
            refetchOnWindowFocus: false,
        },
    });

    return { chatMessagesData, loadingChatMessages, isChatMessagesError };
}