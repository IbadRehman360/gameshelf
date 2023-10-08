import { useAuth } from "../context/AuthProvider";
import supabase from "../services/supabase";
import { useEffect, useState } from "react";


export async function useCreateChat(author, recipient) {
    const { data: allChatUsers } = await supabase.from("chat_users").select("*")
    // console.log(allChatUsers);
    if (allChatUsers.length > 0) {
        // console.log("in");
        allChatUsers.forEach(async (chat) => {
            // console.log(author, chat.author_id);
            // console.log(recipient, chat.recipient_id);

            if (chat.author_id !== author || chat.recipient_id !== recipient) {
                createChat(author, recipient);
                // console.log("test")
            }
        });
    } else {
        createChat(author, recipient);
    }
}

async function createChat(author, recipient) {
    const { data } = await supabase.from("chats").insert({}).select("*");

    const newChatObj = {
        id: data[0].id,
        author_id: author,
        recipient_id: recipient,
    };

    const { data: newChat } = await supabase
        .from("chat_users")
        .insert(newChatObj)
        .select("*");

}



export async function useCreateMessage(chatId, userId, content) {
    const messageObj = {
        chat_id: chatId,
        user_id: userId,
        content
    }
    const { data, error } = await supabase.from("chat_messages").insert(messageObj).select('*');
}


export function useGetChats() {
    const [isLoading, setIsLoading] = useState(true);
    const [userChats, setUserChats] = useState([]);
    const { userData } = useAuth();

    async function getChats() {
        const { data: userChatsData, error } = await supabase
            .from("chat_users")
            .select("*")
            .eq("author_id", userData.id)
            .select("recipient_id, users (username), chats (id)");

        let chats = [];

        for (let i = 0; i < userChatsData.length; i++) {
            const { data: userChatMessages } = await supabase
                .from("chat_messages")
                .select("*")
                .eq("chat_id", userChatsData[i].chats.id);
            let newChatObj = {
                ...userChatsData[i],
                lastMessage: {
                    content: userChatMessages.at(-1).content,
                    created_at: userChatMessages.at(-1).created_at,
                },
            };

            chats.push(newChatObj);
        }

        setUserChats(chats);
        setIsLoading(false);
    }

    useEffect(() => {
        getChats();
    }, [])

    return { userChats, isLoading };
}
