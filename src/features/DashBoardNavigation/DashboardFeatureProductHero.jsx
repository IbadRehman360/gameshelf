const gameList = [
  { title: "Valorant ", link: "/valorant", stock: 396 },
  { title: "CS:GO", link: "/csgo", stock: 312 },
  { title: "Minecraft ", link: "/minecraft", stock: 210 },
  { title: "Fortnite", link: "/fortnite", stock: 150 },
];
export default function DashboardFeatureProductHero() {
  return (
    <div className="mt-10">
      <div className="mx-auto grid max-w-4xl grid-cols-1 lg:max-w-7xl lg:grid-cols-2">
        <div className="xl:py-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl lg:text-4xl">
            Welcome to the Game Store
          </h2>
          <p className="mt-4 text-[0.9rem] leading-6 text-gray-500 sm:text-sm">
            Your Ultimate Destination for In-Game Purchases, Enhancements, and
            Personalization Stay connected with the latest trends and special
            offers. Follow us on social media for updates{" "}
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

          <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-8 sm:mt-8 sm:grid-cols-2 lg:gap-x-8">
            {gameList.map((game, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-lg bg-[#fdfdfd] p-6 shadow-md transition hover:scale-105 hover:shadow-lg"
              >
                <div className="my-4 flex items-center justify-between text-[0.8rem]">
                  <a
                    href={game.link}
                    className="font-semibold text-gray-600 hover:underline lg:text-[0.96rem]"
                  >
                    {game.title}
                  </a>
                  <p className="mb-1 hidden justify-end self-end whitespace-nowrap rounded-md bg-zinc-400 px-2 py-1 text-xs text-white sm:flex">
                    {game.stock} offers
                  </p>
                </div>
                <div className="flex justify-end">
                  <img
                    src="/gamelogo1.png"
                    alt="game logo"
                    className="w-12 rounded text-white sm:w-14 md:w-16"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 grid-rows-2 gap-2 sm:mt-14 sm:gap-6 lg:ml-10 lg:gap-4 xl:grid-rows-2">
          {["/1.webp", "/7.webp", "/8.webp", "/4.webp"].map((src, index) => (
            <div
              key={index}
              className="rounded-lg border-2 border-orange-400 shadow-md shadow-orange-300 transition-transform duration-300 hover:scale-105 sm:h-32 md:h-36 lg:h-44 xl:h-48"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
