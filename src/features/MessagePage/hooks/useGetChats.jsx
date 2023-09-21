import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthProvider";
import supabase from "../../../services/supabase";

export default function useGetChats() {
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
  },[])

  return { userChats, isLoading };
}
