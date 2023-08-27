const gameList = [
  { title: "Valorant Account", link: "#" },
  { title: "CS:GO", link: "#" },
  { title: "Fortnite Skins", link: "#" },
  { title: "Minecraft Account", link: "#" },
];
export default function DashboardFeatureProductHero() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-4xl   grid-cols-1  py-10 lg:max-w-7xl lg:grid-cols-2 ">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-700 lg:text-4xl">
            Welcome to the Game Store
          </h2>
          <p className="mt-4 text-gray-500">
            <p>
              Your Ultimate Destination for In-Game Purchases, Enhancements, and
              Personalization
            </p>
            <p>
              Stay connected with the latest trends and special offers. Follow
              us on social media for updates{" "}
              <a
                href="https://github.com/IbadRehman360"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                GitHub
              </a>
              , where your journey to a more immersive gameplay begins.{" "}
            </p>
          </p>

          <div className="mt-10 grid grid-cols-1  sm:grid-cols-2 gap-y-8 lg:gap-x-8">
            {gameList.map((game, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-105 flex flex-col justify-between"
              >
                <div className="flex flex-col items-center mt-4">
                  <a
                    href={game.link}
                    className="text-gray-700  font-semibold text-lg mb-2 hover:underline"
                  >
                    {game.title}
                  </a>
                  <p className="text-gray-700">{game.description}</p>
                </div>
                <div className="flex justify-end">
                  <img
                    src="/gamelogo1.png"
                    alt="game logo"
                    className="text-white rounded w-16"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 lg:mt-0 mt-16 lg:ml-10 gap-4 sm:gap-6 lg:gap-8">
          {["/1.webp", "/7.webp", "/8.webp", "/4.webp"].map((src, index) => (
            <div
              key={index}
              className=" rounded-lg border-2  border-orange-400  shadow-orange-300 shadow-md h-56 bg-gray-100 transition-transform duration-300 transform hover:scale-105"
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
