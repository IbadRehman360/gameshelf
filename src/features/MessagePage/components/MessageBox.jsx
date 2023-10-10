import { useAuth } from "../../../context/AuthProvider";
import MessageSearchBar from "./MessageSearchBar";
import AllUsersMessagesBox from "./AllUsersMessagesBox";
import { useEffect, useState } from "react";
import { useCreateChat } from "../../../services/apiChat";
import { useParams } from "react-router-dom";
import ChatBox from "./ChatBox";
import { useGetChats } from "../useChats";
import Header from "../../../layouts/Header";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineArrowLeft, AiOutlineRollback } from "react-icons/ai";

export default function MessageBox() {
  const params = useParams();
  const { userData } = useAuth();
  const { userChats, isLoading, isError } = useGetChats();
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    if (params.userId && userData) {
      useCreateChat(userData.id, params.userId);
    }
  }, [params.userId, userData]);

  const toggleChat = (chat) => {
    // If the selectedChat is already open, close it.
    // Otherwise, set the selectedChat to the clicked chat.
    setSelectedChat((prevSelectedChat) =>
      prevSelectedChat === chat ? null : chat
    );
  };

  const goBackToChatList = () => {
    setSelectedChat(null);
  };
  function renderUsername() {
    return userChats[0].your.username.charAt(0).toUpperCase();
  }

  if (isLoading || userChats.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* Loading UI */}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full p-6 text-center text-red-500">
        An error occurred while fetching user chats.
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="sm:flex h-[91vh] sm:flex-row  text-gray-800 antialiased">
        <div
          className={`${
            selectedChat && " hidden"
          } shrink-0 sm:flex-row sm:border-r-2 bg-white sm:flex sm:w-72 lg:w-80`}
        >
          <div className="h-full w-full flex-col sm:flex">
            <div className="flex flex-row items-center px-4 pt-6">
              <div className="mt-1 flex flex-row items-center">
                <a href="/">
                  <div className="ml-2 flex items-center justify-center rounded-full text-xl  tracking-wide font-extrabold text-gray-600">
                    GAMERSHELF
                    <span className="ml-2">
                      <AiOutlineMessage
                        className="mb-1   text-gray-600"
                        size={24}
                      />{" "}
                      {/* Add the message icon here */}
                    </span>
                  </div>
                </a>
              </div>
              <div className="ml-auto">
                {userChats[0]?.your?.avatar_image ? (
                  <img
                    className="h-9 w-9 rounded-full"
                    src={userChats[0]?.your?.avatar_image}
                    alt=""
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center  justify-center rounded-full bg-indigo-500">
                    {renderUsername()}
                  </div>
                )}
              </div>
            </div>
            <div className="px-3 sm:px-4 pt-2">
              <MessageSearchBar />
            </div>
            <div className="pl-3 sm:pl-4">
              <select className="block w-[38%] rounded-lg border border-gray-500 p-[4.5px] text-[0.86rem]   italic tracking-wide text-gray-700  shadow-md ring-gray-200 focus:outline-none focus:ring-1 sm:w-[46%] sm:p-[4.5px] sm:text-[0.8rem] sm:text-sm  xl:w-[39%]">
                <option className="text-gray-600  ">All Contacts</option>
              </select>
            </div>

            <div>
              <div className="overflow-y-auto mt-6  border-t">
                {userChats.map((chat, index) => (
                  <button
                    key={index}
                    className="w-full py-3 px-4 border hover:bg-gray-100 focus:outline-none"
                    onClick={() => toggleChat(chat)}
                  >
                    <AllUsersMessagesBox
                      chat={chat}
                      index={index}
                      key={index}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-col bg-white sm:px-4">
          {selectedChat ? (
            <>
              <button
                className="w-full py-3  px-4 border sm:hidden text-black hover:bg-gray-100 focus:outline-none"
                onClick={goBackToChatList}
              >
                <div className="flex items-center">
                  <div className="flex items-center mr-2">
                    <AiOutlineArrowLeft className="-mb-1.5" />
                    <AiOutlineRollback />
                  </div>
                  <span className="flex-grow mr-6">Back to Chat List</span>
                </div>
              </button>
              <ChatBox chat={selectedChat} user={userChats} />
            </>
          ) : (
            <div> HI</div>
          )}
        </div>
      </div>
    </>
  );
}
