import { Link } from "react-router-dom";

export default function DashboardNavigationProducts({ index, game }) {
  return (
    <Link
      to={"/dashboard/" + game.title.toLowerCase().split(" ").join("")}
      key={index}
      className="flex flex-col justify-between rounded-lg border border-gray-100 bg-[#fdfdfd] px-3.5 pt-2 pb-5 sm:p-6 shadow-md transition hover:scale-105 hover:shadow-lg"
    >
      <div className="my-4 flex items-center justify-between text-[0.82rem]">
        <p className="font-semibold text-gray-600 tracking-wide hover:underline lg:text-[0.96rem]">
          {game.title}
        </p>
        <div className="flex justify-end self-end">
          <p className="mb-1 hidden rounded-md bg-zinc-400 px-2 py-1 text-xs tracking-wide text-white sm:flex">
            Offers <span className="ml-0.5  font-bold"> :</span>{" "}
            <span className="ml-0.5 font-semibold">{game.offers}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-start self-start">
          <p className="mt-2 flex rounded-md bg-zinc-200 px-1 text-black  text-[0.7rem] tracking-wide sm:hidden">
            <span className="ml-0.5"> {game.offers}</span>
          </p>
        </div>
        <img
          src="/gamelogo1.png"
          alt="game logo"
          className="w-12 rounded text-white sm:w-14 2xl:w-16"
        />
      </div>
    </Link>
  );
}
