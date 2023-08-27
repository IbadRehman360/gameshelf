export default function DashboardNavigationProducts({ index, game }) {
  return (
    <div
      key={index}
      className="bg-white p-6   rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-105 flex flex-col justify-between"
    >
      <div className="flex flex-col items-center mt-4">
        <a
          href={game.link}
          className="text-gray-600 text-center  font-semibold text-lg mb-2 hover:underline"
        >
          {game.title}
        </a>
        <p className="text-gray-700">{game.description}</p>
      </div>
      <div className="flex mt-4  sm:mt-0 justify-end">
        <img
          src="/gamelogo1.png"
          alt="game logo"
          className="text-white rounded w-16"
        />
      </div>
    </div>
  );
}
