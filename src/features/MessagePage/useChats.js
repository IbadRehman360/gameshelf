import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/AuthProvider";
import { fetchUserChatMessages, fetchUserChats, fetchUserDetails } from "../../services/apiChat";
import { useState } from "react";
import { useEffect } from "react";
export function useGetChats() {
    const { userData } = useAuth();

    const { data: userChats, isLoading, isError } = useQuery(
        ['userChats', userData],
        () => fetchUserChats(userData),
        {
            enabled: !!userData,
        }
    );

    const [resolvedUserChats, setResolvedUserChats] = useState([]);

    useEffect(() => {
        if (userChats) {
            Promise.all(
                userChats.map(async (chatUser) => {
                    const userChatMessages = await fetchUserChatMessages(chatUser.id);
                    const lastMessage = userChatMessages[userChatMessages.length - 1];
                    const userDetails = await fetchUserDetails(chatUser.recipient_id);
                    const yourDetails = await fetchUserDetails(chatUser.author_id);
                    const length = userChatMessages.length
                    return {
                        ...chatUser,
                        lastMessage: {
                            content: lastMessage ? lastMessage.content : "",
                            created_at: lastMessage ? lastMessage.created_at : null,
                        },
                        length: length || null,
                        users: userDetails || null,
                        your: yourDetails || null
                    };
                })
            )
                .then((chatsWithLastMessages) => {
                    setResolvedUserChats(chatsWithLastMessages);
                })
                .catch((error) => {
                    console.error("Error resolving user chats:", error);
                });
        }
    }, [userChats]);

    if (isError) {
        console.error("An error occurred while fetching user chats.");
    }

    return { userChats: resolvedUserChats, isLoading, isError };
}