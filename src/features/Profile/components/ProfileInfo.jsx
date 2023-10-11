import { Link } from "react-router-dom";

import ProfileAvatar from "./ProfileAvatar";
import { useAuth } from "../../../context/AuthProvider";

export default function ProfileInfo({ profileData }) {
  const user = profileData.data;
  const { session } = useAuth();
  return (
    <div className="md:order-3 lg:text-right">
      <ProfileAvatar user={user} />
      <div className="mt-16 text-center md:mt-0 lg:order-1">
        <h3 className="text-[1.15rem] text-gray-700  tracking-wide font-medium sm:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.35rem]">
          {profileData.data.username}
        </h3>
        <p className="mt-0.5 text-[0.8rem] uppercase">
          Level {profileData.data.level}
        </p>
      </div>
      {session?.user?.id === profileData?.data?.id ? (
        <div className="bg-gray-100 animate-pulse p-3.5 rounded-lg shadow-lg mt-5 text-center">
          <p className="text-gray-700 text-lg font-semibold mb-2">
            Viewing Your Profile
          </p>
          <p className="text-gray-500 text-sm">
            You are currently viewing your own profile.
          </p>
        </div>
      ) : (
        <div className="mt-5 flex justify-center gap-2 md:gap-1 lg:px-3">
          <button
            disabled={!session}
            className={`mb-1 rounded ${
              session ? "bg-red-500" : "bg-red-400"
            } bg-red-500 px-6 py-2.5 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-red-400 hover:shadow-md focus:outline-none active:bg-red-400 md:mr-2`}
            type="button"
          >
            Connect
          </button>
          <Link
            className={`mb-1 rounded ${session ? "bg-gray-500" : "bg-gray-400"}
 px-6 py-2.5 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-gray-500 hover:shadow-md focus:outline-none active:bg-red-400`}
            type="button"
            to={`/chat/new/${profileData.data.id}`}
          >
            Message
          </Link>
        </div>
      )}
    </div>
  );
}
