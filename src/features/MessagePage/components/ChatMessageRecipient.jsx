import { Link } from "react-router-dom";

export default function ChatMessageRecipient({ user, message }) {
  function renderUsername() {
    return user[0].users.username.charAt(0).toUpperCase();
  }

  const avatarContent = user[0].your.avatar_image ? (
    <Link
      to={`/profile/${user[0].users.username}`}
      className="flex h-11 w-11 shrink-0 items-center justify-center "
    >
      <img
        className="rounded-full "
        src={user[0].users.avatar_image}
        alt="User Avatar"
      />
    </Link>
  ) : (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500">
      {renderUsername()}
    </div>
  );

  return (
    <div className="col-start-1 col-end-11 rounded-lg p-3">
      <div className="flex flex-row items-center">
        {avatarContent}
        <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
}
