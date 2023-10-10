import { Link } from "react-router-dom";

export default function ChatMessageSender({ user, message }) {
  function renderUsername() {
    return user[0].your.username.charAt(0).toUpperCase();
  }

  const avatarContent = user[0].your.avatar_image ? (
    <Link
      to={`/profile/${user[0].your.username}`}
      className="flex h-10 w-10 shrink-0 items-center justify-center "
    >
      <img
        className="rounded-full "
        src={user[0].your.avatar_image}
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
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
}
