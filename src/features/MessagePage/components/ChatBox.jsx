import { useEffect, useState } from "react";
import ChatMessageSender from "./ChatMessageSender";
import ChatMessageRecipient from "./ChatMessageRecipient";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxInput from "./ChatBoxInput";
import { useAuth } from "../../../context/AuthProvider";
import supabase from "../../../services/supabase";

export default function ChatBox({ chat, user }) {
  const [chatMessages, setChatMessages] = useState([]);
  const { userData } = useAuth();

  async function getChatMessages() {
    const { data: chatMessagesData, error } = await supabase
      .from("chat_messages")
      .select("*")
      .eq("chat_id", chat.chats.id);

    setChatMessages(chatMessagesData);
  }

  useEffect(() => {
    const messageWatcher = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "chat_messages" },
        async () => {
          await getChatMessages();
        }
      )
      .subscribe();

    return () => {
      messageWatcher.unsubscribe();
    };
  }, []);

  useEffect(() => {
    getChatMessages();
  }, [chat]);

  return (
    <div className="flex h-full w-full flex-col bg-white px-4">
      <ChatBoxHeader name={chat.users.username} />
      <div className="h-full overflow-hidden py-4">
        <div className="h-full overflow-y-auto">
          <div className="grid grid-cols-12 gap-y-2">
            {chatMessages.map((message) =>
              message.user_id === userData.id ? (
                <ChatMessageSender
                  key={message.id}
                  message={message.content}
                  user={userData.email}
                />
              ) : (
                <ChatMessageRecipient
                  key={message.id}
                  message={message.content}
                  user={chat.users.username}
                />
              )
            )}
          </div>
        </div>
      </div>
      <ChatBoxInput chatId={chat.chats.id} userId={userData.id} />
    </div>
  );
}
