import { Link } from "react-router-dom";

export default function DashboardNavigationProducts({ index, game }) {
  return (
    <Link
      to={"/dashboard/" + game.title.toLowerCase().split(" ").join("")}
      key={index}
      className="flex flex-col justify-between rounded-lg border border-gray-100 bg-[#fdfdfd] p-6 shadow-md transition hover:scale-105 hover:shadow-lg"
    >
      <div className="my-4 flex items-center justify-between text-[0.8rem]">
        <p className="font-semibold text-gray-600 hover:underline lg:text-[0.96rem]">
          {game.title}
        </p>
        <div className="flex justify-end self-end">
          <p className="mb-1 hidden rounded-md bg-zinc-400 px-2 py-1 text-xs text-white sm:flex">
            Offers: <span className="ml-1 font-semibold">{game.offers}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <img
          src="/gamelogo1.png"
          alt="game logo"
          className="w-12 rounded text-white sm:w-14 2xl:w-16"
        />
      </div>
    </Link>
  );
}
