import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/AuthProvider";
import { fetchUserChatMessages, fetchRecipientChats, fetchUserDetails, fetchAuthorChats } from "../../services/apiChat";
import { useState } from "react";
import { useEffect } from "react";

export function useGetChats() {
    const { userData } = useAuth();

    // Use two separate queries for recipient and author chats
    const recipientQuery = useQuery(
        ['recipientChats', userData],
        () => fetchRecipientChats(userData),
        {
            enabled: !!userData,
        }
    );

    const authorQuery = useQuery(
        ['authorChats', userData],
        () => fetchAuthorChats(userData),
        {
            enabled: !!userData,
        }
    );

    const [resolvedUserChats, setResolvedUserChats] = useState([]);

    useEffect(() => {
        if (recipientQuery.data && authorQuery.data) {
            // Combine recipient and author chats
            const combinedChats = [...recipientQuery.data, ...authorQuery.data];

            // Perform additional processing on the combined chats
            const chatPromises = combinedChats.map(async (chatUser) => {
                const chatId = chatUser.id;
                const userChatMessages = await fetchUserChatMessages(chatId);
                const userDetails = await fetchUserDetails(chatUser.recipient_id);
                const yourDetails = await fetchUserDetails(chatUser.author_id);
                const lastMessage = userChatMessages[userChatMessages.length - 1];

                return {
                    ...chatUser,
                    lastMessage: {
                        content: lastMessage ? lastMessage.content : "",
                        created_at: lastMessage ? lastMessage.created_at : null,
                    },
                    length: userChatMessages.length,
                    users: userDetails,
                    your: yourDetails,
                };
            });

            Promise.all(chatPromises)
                .then((chatsWithLastMessages) => {
                    setResolvedUserChats(chatsWithLastMessages);
                })
                .catch((error) => {
                    console.error("Error resolving user chats:", error);
                });
        }
    }, [recipientQuery.data, authorQuery.data]);

    if (recipientQuery.isError || authorQuery.isError) {
        console.error("An error occurred while fetching user chats.");
    }

    return { userChats: resolvedUserChats, isLoading: recipientQuery.isLoading || authorQuery.isLoading, isError: recipientQuery.isError || authorQuery.isError };
}
