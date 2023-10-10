import moment from "moment";

function AllUsersMessagesBox({ chat, index }) {
  console.log(chat);
  const lastMessage = chat.lastMessage || {}; // Default to an empty object if lastMessage doesn't exist

  return (
    <div className="relative flex flex-row">
      <div className="absolute right-0 top-0 text-xs text-gray-500">
        {lastMessage.created_at
          ? moment(lastMessage.created_at).fromNow()
          : "No messages"}{" "}
        {/* Handle case when there are no messages */}
      </div>
      <div className="flex h-12 w-12 shrink-0 rounded-full bg-pink-500 font-bold text-pink-300">
        <img
          src={`/images/avatars/avatar-${index}.webp`}
          className="rounded-full"
          alt={`Avatar ${index}`}
        />
      </div>
      <div className="ml-3 flex grow flex-col text-start">
        <div className="text-sm font-medium capitalize">
          {chat?.users?.username || "Unknown"}{" "}
          {/* Handle case when username is missing */}
        </div>
        <div className="w-40 truncate text-xs">
          {lastMessage.content || "No messages"}{" "}
          {/* Handle case when there is no message content */}
        </div>
      </div>
      <div className="mb-1 ml-2 shrink-0 self-end">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
          5
        </span>
      </div>
    </div>
  );
}

export default AllUsersMessagesBox;
