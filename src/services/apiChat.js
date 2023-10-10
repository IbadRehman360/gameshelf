import { useEffect, useState } from "react";
import supabase from "../services/supabase";
import { useAuth } from "../context/AuthProvider";

export async function useCreateChat(author, recipient) {
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

        if (chatUsers.length === 0) {
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

            const { data, error: insertError } = await supabase
                .from("chat_users")
                .insert([newChatObj])
                .select("*");

            if (insertError) {
                console.error("Error inserting chat user:", insertError);
                return;
            }
        }
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
