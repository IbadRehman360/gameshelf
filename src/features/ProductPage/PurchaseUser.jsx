import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

function PurchaseUser({ user }) {
  const { session } = useAuth();
  const navigate = useNavigate();

  const isSessionAvailable = !!session;

  const handleButtonClick = () => {
    if (!isSessionAvailable) {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="">
        {session?.user?.id === user[0]?.seller_id?.id && (
          <div className="mb-6 border-gray-400 border animate-pulse rounded-lg bg-gray-50 p-2.5 text-center shadow-lg">
            <p className="text-xs text-gray-900">
              You are currently viewing your own profile.
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <span className="relative inline-block border-2 rounded-full border-gray-600 ">
          <Link to={`/profile/${user[0]?.seller_id?.username}`}>
            <img
              className="h-20 w-20 rounded-full"
              src="/ProfileImg2.jpg"
              alt=""
            />
          </Link>
          <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white" />
        </span>
        <div>
          <h3 className=" text-[0.82rem] font-medium text-gray-700 md:text-[1rem]">
            <Link to={`/profile/${user[0]?.seller_id?.username}`}>
              {user[0]?.seller_id?.username}
            </Link>
          </h3>
          <p className="mb-1 text-[0.75rem] text-gray-700 ">
            Level{" "}
            <span className="text-[0.7rem]  font-medium tracking-wider">
              {user[0]?.seller_id?.level}
            </span>
          </p>
          <div className="flex -ml-0.5 space-x-2">
            {isSessionAvailable && session?.user?.id === user[0]?.seller_id ? (
              <Link
                to={`/profile/${user[0]?.seller_id?.username}`}
                className="mb-1  rounded-md px-4 py-1.5 text-[0.6rem] font-semibold text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none bg-red-500 hover:bg-red-400 active:bg-red-400"
                type="button"
              >
                Message
              </Link>
            ) : (
              <button
                className="mb-1 rounded-md px-4 py-1.5 text-[0.6rem] font-semibold text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none bg-red-400 hover:bg-red-300 active:bg-red-300"
                type="button"
                onClick={handleButtonClick}
              >
                Message
              </button>
            )}

            {session?.user?.id === user[0]?.seller_id ? (
              <Link
                to={`/profile/${user[0]?.seller_id?.username}`}
                className="mb-1 rounded-md px-4 py-1.5 text-[0.7rem] font-semibold text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none bg-gray-600 hover:bg-gray-500"
                type="button"
              >
                Follow
              </Link>
            ) : (
              <button
                className="mb-1 rounded-md px-4 py-1.5 text-[0.7rem] font-semibold text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none bg-gray-400 hover:bg-gray-300"
                type="button"
                onClick={handleButtonClick}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchaseUser;
