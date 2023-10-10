import { Link } from "react-router-dom";

export default function ChatMessageSender({ user, message, yourId, chat }) {

  console.log(message.user_id, yourId.id)
  const displayData =
    yourId.id !== user[0].users.id ? user[0].your : user[0].users
  function renderUsername() {
    // return displayData.charAt(0).toUpperCase();
  }
  const avatarContent = displayData ? (
    <Link
      to={`/profile/${displayData.username}`}
      className="flex h-10 w-10 shrink-0 items-center justify-center "
    >
      <img
        className="rounded-full "
        src={displayData.avatar_image}
        alt="User Avatar"
      />
    </Link>
  ) : (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500">
      {renderUsername()}
    </div>
  );

  return (
    <div className="col-start-3 col-end-13 rounded-lg p-3">
      <div className="flex flex-row-reverse items-center justify-start">
        {avatarContent}
        <div className="relative mr-3 rounded-xl bg-indigo-50 px-4 py-2 text-sm shadow">
          <div>{message.content}</div>
        </div>
      </div>
    </div>
  );
}
