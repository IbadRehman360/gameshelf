import { useAuth } from "../../../context/AuthProvider";
import MessageSearchBar from "./MessageSearchBar";
import AllUsersMessagesBox from "./AllUsersMessagesBox";
import { useEffect, useState } from "react";
import { getCreateChat } from "../../../services/apiChat";
import { Link, useParams } from "react-router-dom";
import ChatBox from "./ChatBox";
import { useGetChats } from "../useChats";
import Header from "../../../layouts/Header";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineArrowLeft, AiOutlineRollback } from "react-icons/ai";
import { useRef } from "react";
import useGetUser from "../../../layouts/getUser";

export default function MessageBox() {
  const { userData } = useAuth();
  const params = useParams();
  const [selectedChat, setSelectedChat] = useState(null);
  const { userChats, isLoading, isError } = useGetChats();
  const isInitialRender = useRef(true);
  const { user } = useGetUser(userData.id);
  useEffect(() => {
    if (!isInitialRender.current) {
      if (params.userId && userData) {
        getCreateChat(userData.id, params.userId);
      }
    } else {
      isInitialRender.current = false;
    }
  }, [params.userId, userData]);
  const toggleChat = (chat) => {
    setSelectedChat((prevSelectedChat) =>
      prevSelectedChat === chat ? null : chat
    );
  };

  const goBackToChatList = () => {
    setSelectedChat(null);
  };

  if (isLoading || !userChats || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
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
  function renderUsername() {
    return user[0]?.username?.charAt(0).toUpperCase();
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
                  <div className="ml-2 flex items-center justify-center rounded-full text-[1.5rem]  tracking-wide font-extrabold text-gray-600">
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
              <Link to={`/profile/${user[0]?.username}`} className="ml-auto">
                {user[0]?.avatar_image ? (
                  <img
                    className="h-9 w-9 rounded-full"
                    src={user[0]?.avatar_image}
                    alt=""
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center  justify-center rounded-full bg-gray-400">
                    {renderUsername()}
                  </div>
                )}
              </Link>
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
              <div className="overflow-y-auto mt-6 border-t">
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
                      userData={userData}
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
              <ChatBox chat={selectedChat} userInfo={user} user={userChats} />
            </>
          ) : (
            <div className="sm:flex sm:flex-col items-center hidden sm:justify-center sm:h-full">
              <div className="bg-gray-300 rounded-full  w-40 h-40 flex items-center justify-center mb-4">
                <img src="/vector.png" className="rounded-full w-40 h-40" />
              </div>
              <div className="text-center  ">
                <p className="text-xl font-semibold">
                  Welcome to GamerShelf chat
                </p>
                <p className="text-gray-600">Start chatting now!</p>
              </div>
              <div className="bg-blue-100 p-5 rounded-lg mt-4 text-center">
                <h2 className="mb-4 text-xl font-semibold">
                  Online Trading Safety Tips
                </h2>
                <ul className="text-gray-600 list-disc pl-4">
                  <p className="mb-2 text-[0.92rem]  ">
                    Always prioritize safety when trading online.
                  </p>
                  <p className="mb-2 text-[0.92rem] ">
                    Never share your personal information with strangers.
                  </p>
                  <p className="mb-2 text-[0.92rem] ">
                    Use our platform responsibly and follow our guidelines.
                  </p>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
