import moment from "moment";

function Chat({ chat, index }) {
  return (
    <div className="relative flex flex-row">
      <div className="absolute right-0 top-0 text-xs text-gray-500">
        {moment(chat.lastMessage.created_at).fromNow()}
      </div>
      <div className="flex h-12 w-12 shrink-0 rounded-full bg-pink-500 font-bold text-pink-300">
        <img
          src={`/images/avatars/avatar-${index}.webp`}
          className="rounded-full"
        ></img>
      </div>
      <div className="ml-3 flex grow flex-col text-start">
        <div className="text-sm font-medium capitalize">
          {chat.users.username}{" "}
        </div>
        <div className="w-40 truncate text-xs">{chat.lastMessage.content}</div>
      </div>
      <div className="mb-1 ml-2 shrink-0 self-end">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
          5
        </span>
      </div>
    </div>
  );
}

export default Chat;
