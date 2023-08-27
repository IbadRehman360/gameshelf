const gameList = [
  { title: "Valorant Account", link: "#", stock: 396 },
  { title: "CS:GO", link: "#", stock: 312 },
  { title: "Minecraft Account", link: "#", stock: 210 },
  { title: "Fortnite Skins", link: "#", stock: 150 },
];
export default function DashboardFeatureProductHero() {
  return (
    <div className="bg-white mt-10">
      <div className="mx-auto grid max-w-4xl   grid-cols-1    lg:max-w-7xl lg:grid-cols-2 ">
        <div className="xl:py-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-700 lg:text-4xl">
            Welcome to the Game Store
          </h2>
          <p className="mt-4 sm:text-sm text-[0.9rem]   leading-6 text-gray-500">
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

          <div className="mt-6 sm:mt-8 grid grid-cols-2  gap-x-2  sm:grid-cols-2 gap-y-8 lg:gap-x-8">
            {gameList.map((game, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-105 flex flex-col justify-between"
              >
                <div className="flex text-[0.8rem] justify-between items-center mt-4 mb-4">
                  <a
                    href={game.link}
                    className="text-gray-600 lg:text-[0.96rem]   font-semibold text-md  hover:underline"
                  >
                    {game.title}
                  </a>
                  <p className=" text-white whitespace-nowrap bg-zinc-400 hidden sm:flex text-xs mb-1 py-1 px-2  opocity-30 rounded-md justify-end self-end">
                    {game.stock} offers
                  </p>
                </div>
                <div className="flex justify-end">
                  <img
                    src="/gamelogo1.png"
                    alt="game logo"
                    className="text-white rounded w-12 sm:w-14 md:w-16"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2  xl:grid-rows-2 grid-rows-2  mt-8 sm:mt-14 lg:ml-10 gap-2 sm:gap-6 lg:gap-4">
          {["/1.webp", "/7.webp", "/8.webp", "/4.webp"].map((src, index) => (
            <div
              key={index}
              className=" rounded-lg border-2  border-orange-400  shadow-orange-300 shadow-md  sm:h-32 md:h-36 lg:h-44   xl:h-48 bg-gray-100 transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="rounded-lg h-full w-full object-cover "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
