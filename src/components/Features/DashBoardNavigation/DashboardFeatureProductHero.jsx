const gameList = [
  { title: "Valorant Account", link: "#" },
  { title: "CS:GO", link: "#" },
  { title: "Fortnite Skins", link: "#" },
  { title: "Minecraft Account", link: "#" },
  { title: "League of Legends Account", link: "#" },
];
export default function DashboardFeatureProductHero() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4  sm:px-6 py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {gameList.map((game, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-105 flex flex-col justify-between"
              >
                <div className="flex flex-col items-center mt-4">
                  <a
                    href={game.link}
                    className="text-blue-500 font-semibold text-lg mb-2 hover:underline"
                  >
                    {game.title}
                  </a>
                  <p className="text-gray-700">{game.description}</p>
                </div>
                <div className="flex justify-end">
                  <img
                    src="/gamelogo1.png"
                    alt="game logo"
                    className="text-white rounded w-20"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {["/1.webp", "/7.webp", "/8.webp", "/4.webp"].map((src, index) => (
            <div
              key={index}
              className="relative rounded-lg border-2 border-yellow-600 h-56 bg-gray-100 transition-transform duration-300 transform hover:scale-105 mt-4"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="rounded-lg h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
