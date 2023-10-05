import { Link } from "react-router-dom";

function PurchaseUser({ user }) {
  return (
    <div className="flex items-center space-x-4">
      <span className="relative inline-block">
        <img className="h-20 w-20 rounded-full" src="/ProfileImg2.jpg" alt="" />
        <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white" />
      </span>
      <div>
        <h3 className="pb-1 text-[0.82rem] font-medium  text-gray-700 md:text-[1rem]">
          {user[0]?.seller_id?.username}
          <p className="-mt-0.5 text-[0.75rem] text-gray-600 ">
            Level{" "}
            <span className="text-[0.7rem] font-medium tracking-wider">
              {user[0]?.seller_id?.level}
            </span>
          </p>
        </h3>

        <div className="flex space-x-2">
          <Link
            to={`/profile/${user[0]?.seller_id?.username}`}
            className="mb-1 rounded-md bg-red-500 px-4 py-2 text-[0.6rem] font-semibold text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-red-400 hover:shadow-md focus:outline-none active:bg-red-400"
            type="button"
          >
            Message
          </Link>
          <Link
            className="mb-1 rounded-md bg-gray-600 px-4 py-1.5 text-[0.7rem] font-semibold text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-gray-500 hover:shadow-md focus:outline-none active:bg-red-400"
            type="button"
          >
            Follow
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PurchaseUser;
