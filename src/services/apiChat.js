import { queryClient } from "../routes/routes";
import supabase from "../services/supabase";


export async function getCreateChat(author, recipient) {
    try {
        const { data: chatUsers, error } = await supabase
            .from("chat_users")
            .select("*")
            .eq("author_id", author)
            .eq("recipient_id", recipient);

        if (error) {
            console.error("Error fetching chat users:", error);
            return;
        }

        if (chatUsers.length > 0) {
            return;
        }

        const { data: newChat, error: chatError } = await supabase
            .from("chats")
            .insert({})
            .select("*");


        if (chatError) {
            console.error("Error creating chat:", chatError);
            return;
        }

        const newChatObj = {
            id: newChat[0].id,
            author_id: author,
            recipient_id: recipient,
        };

        const { error: insertError } = await supabase
            .from("chat_users")
            .insert([newChatObj])
            .select("*");

        if (insertError) {
            console.error("Error inserting chat user:", insertError);
            return;
        }

        queryClient.invalidateQueries('userChats');
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

export function fetchUserChats(userData) {
    return supabase
        .from("chat_users")
        .select("*")
        .eq("author_id", userData.id)
        .then((response) => response.data)
        .catch((error) => {
            throw new Error("Error fetching user chats: " + error.message);
        });
}

export function fetchUserChatMessages(chatId) {
    return supabase
        .from("chat_messages")
        .select("*")
        .eq("chat_id", chatId)
        .then((response) => response.data)
        .catch((error) => {
            throw new Error("Error fetching chat messages: " + error.message);
        });
}

export async function fetchUserDetails(authorId) {
    try {
        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("id", authorId)
            .single();

        if (error) {
            throw new Error("Error fetching user details: " + error.message);
        }

        return data;
    } catch (error) {
        throw new Error("Error fetching user details: " + error.message);
    }
}

export async function getChatMessages(chat) {
    const { data: chatMessagesData, error } = await supabase
        .from("chat_messages")
        .select("*")
        .eq("chat_id", chat.id);
    if (error) {
        throw new Error("Error fetching user details: " + error.message);
    }
    return chatMessagesData
}


export async function getCreateMessage(chat) {
    const messageObj = {
        chat_id: chat.chatId,
        user_id: chat.userId,
        content: chat.content
    }
    const { data, error } = await supabase.from("chat_messages").insert([messageObj]).select('*');
    if (error) {
        console.log(error)
    }
    return data;
}
