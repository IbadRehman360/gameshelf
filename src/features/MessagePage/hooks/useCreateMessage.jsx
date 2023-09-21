import supabase from "../../../services/supabase";

export default async function useCreateMessage(chatId, userId, content) {
    const messageObj = {
        chat_id: chatId,
        user_id: userId,
        content
    }
    const {data, error} = await supabase.from("chat_messages").insert(messageObj).select('*');
}
