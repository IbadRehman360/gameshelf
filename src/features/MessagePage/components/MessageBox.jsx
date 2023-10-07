import { useAuth } from "../../../context/AuthProvider";
import MessageSearchBar from "./MessageSearchBar";
import MessageComponentEachUser from "./Chat";
import { useEffect, useState } from "react";
import { useCreateChat, useGetChats } from "../../../services/apiChat";
import { useParams } from "react-router-dom";
import ChatBox from "./ChatBox";

export default function MessageBox() {
  const params = useParams();
  const { userData } = useAuth();
  const { userChats, isLoading } = useGetChats();
  const [selectedChat, setSelectedChat] = useState(null);
  useEffect(() => {
    if (params.userId) {
      useCreateChat(userData.id, params.userId);
    }
  }, []);

  useEffect(() => {
    //FIX REAL TIME DATA FOR CHATS
    // const messageWatcher = supabase
    //   .channel("any")
    //   .on(
    //     "postgres_changes",
    //     { event: "*", schema: "public", table: "chat_users" },
    //     async () => (await getChats())
    //   )
    //   .subscribe();
    // return () => {
    //   messageWatcher.unsubscribe();
    // };
  }, []);

  console.log(userChats);
  return (
    <div className="flex h-screen flex-row text-gray-800 antialiased">
      <div className="hidden w-72 shrink-0 flex-row border-r-2 bg-white sm:flex md:w-72 lg:w-80">
        <div className="h-full w-full flex-col sm:flex">
          <div className="flex flex-row items-center px-4 pt-6">
            <div className="mt-1 flex flex-row items-center">
              <a href="/" className="text-xl font-semibold">
                <img src="/logo4.png " className="h-6 w-10" alt="" />
              </a>
              <a href="/">
                <div className="ml-2 flex items-center justify-center rounded-full text-lg font-extrabold text-gray-700">
                  GAMERSHELF
                </div>
              </a>
            </div>
            <div className="ml-auto">
              <img
                className="h-9 w-9 rounded-full"
                src="/ProfileImg2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="px-4 pt-2">
            <MessageSearchBar />
          </div>
          <div className="pl-4">
            <select
              id="location"
              name="location"
              className="block w-[38%] rounded-lg border  border-gray-700  p-1.5  text-sm italic tracking-wide ring-gray-500 text-gray-700 shadow-md focus:outline-none  focus:ring-1"
              defaultValue="Canada"
            >
              <option className="text-gray-600">All Contacts</option>
            </select>
          </div>

          <div>
            <div className="overflow-y-auto">
              {isLoading
                ? "Loading..."
                : userChats.map((chat, index) => (
                    <button
                      key={index}
                      className="w-full p-4 hover:bg-red-100"
                      onClick={() => setSelectedChat(chat)}
                    >
                      <MessageComponentEachUser chat={chat} index={index} />
                    </button>
                  ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-col bg-white px-4">
        {selectedChat && <ChatBox chat={selectedChat} />}
      </div>
    </div>
  );
}
