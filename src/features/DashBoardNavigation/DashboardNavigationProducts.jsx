export default function DashboardNavigationProducts({ index, game }) {
  return (
    <div
      key={index}
      className=" bg-[#fdfdfd] p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-100 transform transition hover:scale-105 flex flex-col justify-between"
    >
      <div className="flex text-[0.8rem] justify-between items-center mt-4 mb-4">
        <a
          href={game.link}
          className="text-gray-600 lg:text-[0.96rem]   font-semibold text-md  hover:underline"
        >
          {game.title}
        </a>
        <p className=" text-white bg-zinc-400 hidden sm:flex text-xs mb-1 py-1 px-2  opocity-30 rounded-md justify-end self-end">
          {game.stock} offers
        </p>
      </div>
      <div className="flex justify-end">
        <img
          src="/gamelogo1.png"
          alt="game logo"
          className="text-white rounded w-12 sm:w-14 2xl:w-16"
        />
      </div>
    </div>
  );
}
