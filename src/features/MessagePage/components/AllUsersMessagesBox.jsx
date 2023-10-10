import moment from "moment";

function AllUsersMessagesBox({ chat, index }) {
  return (
    <div className="relative   flex flex-row">
      <div className="absolute right-0 top-0 text-xs text-gray-500">
        {chat?.users?.created_at && (
          <span>
            {moment(chat.users.created_at).format("YYYY-MM-DD HH:mm:ss")}
          </span>
        )}
      </div>

      <div className="flex h-12 w-12 shrink-0 rounded-full bg-pink-500 font-bold text-pink-300">
        <img
          src={`${chat.users.avatar_image}`}
          className="rounded-full"
          alt={`Avatar ${index}`}
        />
      </div>
      <div className="ml-3 flex grow flex-col text-start">
        <div className="text-sm font-medium capitalize">
          {chat?.users?.username || "Unknown"}{" "}
        </div>
        <div className="w-40 truncate text-xs">
          <p className="truncate">
            {chat.lastMessage.content || "No messages"}
          </p>
        </div>
      </div>
      <div className="mb-1 ml-2 shrink-0 self-end"></div>
    </div>
  );
}

export default AllUsersMessagesBox;
