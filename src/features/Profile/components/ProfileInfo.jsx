import { Link } from "react-router-dom";

import ProfileAvatar from "./ProfileAvatar";

export default function ProfileInfo({ profileData }) {
  const user = profileData.data;

  return (
    <div className="md:order-3 lg:text-right">
      <ProfileAvatar user={user} />
      <div className="mt-5 flex justify-center gap-2 md:gap-1 lg:px-3">
        <button
          className="mb-1 rounded bg-red-500 px-6 py-2.5 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-red-400 hover:shadow-md focus:outline-none active:bg-red-400 md:mr-2"
          type="button"
        >
          Connect
        </button>
        <Link
          className="mb-1 rounded bg-gray-600 px-6 py-2.5 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-gray-500 hover:shadow-md focus:outline-none active:bg-red-400"
          type="button"
          to={`/chat/new/${profileData.id}`}
        >
          Message
        </Link>
      </div>
    </div>
  );
}
