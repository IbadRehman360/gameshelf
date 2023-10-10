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
  if (loadingChatMessages)
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-gray-300 rounded-full  w-24 h-24 sm:w-40 sm:h-40 flex items-center justify-center mb-4">
          <img
            src="/vector.png"
            alt="Profile Image"
            className="rounded-full w-24 h-24 sm:w-40 sm:h-40"
          />
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold">Welcome to GamerShelf chat</p>
          <p className="text-gray-600 text-sm">Start chatting now!</p>
        </div>
        <div className="bg-blue-100 p-5 rounded-lg mt-4 text-center">
          <h2 className="mb-4 text-xl font-semibold">
            Online Trading Safety Tips
          </h2>
          <ul className="text-gray-600 list-disc pl-4">
            <p className="mb-1.5 text-[0.92rem]  ">
              Always prioritize safety when trading online.
            </p>
            <p className="mb-1 text-[0.92rem] ">
              Never share your personal information with strangers.
            </p>
            <p className="mb-1.5   text-[0.92rem] ">
              Use our platform responsibly and follow our guidelines.
            </p>
          </ul>
        </div>
        <div className="flex space-x-2 sm:hidden pt-5 animate-pulse">
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    );
  return (
    <div className="flex h-full w-full flex-col bg-white sm:px-4">
      <ChatBoxHeader chat={chat} yourId={userData} />
      <div className="h-full overflow-hidden py-4">
        <div className="h-full overflow-y-auto">
          <div className="grid grid-cols-12 gap-y-2">
            {chatMessagesData.map((message) =>
              message.user_id === userData.id ? (
                <ChatMessageSender
                  key={message.id}
                  message={message}
                  user={user}
                  yourId={userData}
                  chat={chat}
                />
              ) : (
                <ChatMessageRecipient
                  key={message.id}
                  message={message.content}
                  yourId={userData}
                  user={user}
                  chat={chat}
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
