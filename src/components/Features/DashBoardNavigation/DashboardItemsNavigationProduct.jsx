import DashboardNavigationProducts from "./DashboardNavigationProducts";
const trendingGames = [
  { title: "Valorant Account", link: "#" },
  { title: "CS:GO", link: "#" },
  { title: "Apex Legends", link: "#" },
  { title: "Minecraft Account", link: "#" },
  { title: "FIFA 22", link: "#" },
  { title: "Fortnite Accounts", link: "#" },
  { title: "Call of Duty", link: "#" },
  { title: "Cyberpunk 2077", link: "#" },
];
const additionalGames = [
  { title: "Overwatch", link: "#" },
  { title: "Apex Legends", link: "#" },
  { title: "Call of Duty", link: "#" },
  { title: "The Elder ", link: "#" },
  { title: "FIFA 22", link: "#" },
  { title: "Fortnite Accounts", link: "#" },
  { title: "World of Warcraft", link: "#" },
  { title: "Dota", link: "#" },
  { title: "Far Cry ", link: "#" },
  { title: "Borderlands", link: "#" },
  { title: "Fallout", link: "#" },

  { title: "Rocket League", link: "#" },
  { title: "League of Legends ", link: "#" },
  { title: "Hearthstone", link: "#" },
  { title: "Destiny 2", link: "#" },
  { title: "Genshin Impact", link: "#" },
  { title: "Rocket League", link: "#" },
  { title: "The Witcher 3", link: "#" },
  { title: "Cyberpunk 2077", link: "#" },
  { title: "Rocket League", link: "#" },
];

export default function DashboardItemsNavigationProduct() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 mb-40 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-2xl my-10 text-center font-bold tracking-tight text-gray-900">
          Recent Trending
        </h3>
        <h2 className="sr-only">Products</h2>
        <div className="grid  gap-x-6 gap-y-10  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {trendingGames.map((game, index) => (
            <DashboardNavigationProducts
              key={index}
              game={game}
              index={index}
            />
          ))}
        </div>
        <h3 className="text-2xl mb-10 mt-20 text-center font-bold tracking-tight text-gray-900">
          All brands for Accounts
        </h3>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {additionalGames.map((game, index) => (
            <DashboardNavigationProducts
              key={index}
              game={game}
              index={index}
            />
          ))}
          <additionalGames />
        </div>
      </div>
    </div>
  );
}
