import moment from "moment";

function AllUsersMessagesBox({ chat, index, userData }) {
  const displayData = chat.author_id === userData.id ? chat.users : chat.your;
  function renderUsername() {
    return displayData.username.charAt(0).toUpperCase();
  }
  return (
    <div className="relative   flex flex-row">
      <div className="absolute right-0 top-0 text-xs text-gray-500">
        {displayData?.created_at && (
          <span>
            {moment(chat.your.created_at).format("YYYY-MM-DD HH:mm:ss")}
          </span>
        )}
      </div>

      {displayData.avatar_image ? (
        <img
          src={`${displayData.avatar_image}`}
          className="rounded-full flex h-12 w-12 shrink-0 rounded-full"
          alt={`Avatar ${index}`}
        />
      ) : (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500">
          {renderUsername()}
        </div>
      )}
      <div className="ml-3 flex grow flex-col text-start">
        <div className="text-sm font-medium capitalize">
          {displayData?.username || "Unknown"}{" "}
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
