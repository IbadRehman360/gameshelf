import ChatMessageSender from "./ChatMessageSender";
import ChatMessageRecipient from "./ChatMessageRecipient";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxInput from "./ChatBoxInput";
import { useChatMessages } from "../useChatMessages";
import { useAuth } from "../../../context/AuthProvider";

export default function ChatBox({ chat, user }) {
  const { userData } = useAuth();
  const { chatMessagesData, loadingChatMessages, isChatMessagesError } =
    useChatMessages(chat);

  if (loadingChatMessages) return "loading";
  return (
    <div className="flex h-full w-full flex-col bg-white sm:px-4">
      <ChatBoxHeader
        name={chat.users.username}
        image={chat.users.avatar_image}
      />
      <div className="h-full overflow-hidden py-4">
        <div className="h-full overflow-y-auto">
          <div className="grid grid-cols-12 gap-y-2">
            {chatMessagesData.map((message) =>
              message.user_id === userData.id ? (
                <ChatMessageSender
                  key={message.id}
                  message={message.content}
                  user={user}
                />
              ) : (
                <ChatMessageRecipient
                  key={message.id}
                  message={message.content}
                  user={user}
                />
              )
            )}
          </div>
        </div>
      </div>
      <div className="px-2 sm:px-0">
        <ChatBoxInput chatId={chat.id} userId={userData.id} />
      </div>
    </div>
  );
}
