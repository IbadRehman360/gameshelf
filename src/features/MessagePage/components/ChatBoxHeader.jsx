import { Link } from "react-router-dom";

export default function ChatBoxHeader({ name, image }) {
  function renderUsername() {
    return name.charAt(0).toUpperCase();
  }
  const avatarContent = image ? (
    <Link
      to={`/profile/${name}`}
      className="flex h-11 w-11 shrink-0 items-center justify-center "
    >
      <img className="rounded-full " src={image} alt="User Avatar" />
    </Link>
  ) : (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500">
      {renderUsername()}
    </div>
  );

  return (
    <div className="flex flex-row items-center rounded-2xl px-6 py-4 shadow">
      {avatarContent}
      <div className="ml-3 flex flex-col">
        <Link to={`/profile/${name}`}>
          <div className="text-sm font-semibold capitalize">{name}</div>
        </Link>
        <div className="text-xs text-gray-500">Active</div>
      </div>
      <div className="ml-auto">
        <ul className="flex flex-row items-center space-x-2">
          <li>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200"
            >
              <span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  stroke="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200"
            >
              <span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  stroke="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200"
            >
              <span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
