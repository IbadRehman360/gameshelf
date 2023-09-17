import DashboardNavigationProducts from "./DashboardNavigationProducts";
import FeaturePagination from "../../components/FeaturePagination";
const trendingGames = [
  { title: "Valorant Account", link: "#", stock: 10 },
  { title: "CS:GO", link: "#", stock: 5 },
  { title: "Apex Legends", link: "#", stock: 15 },
  { title: "Minecraft Account", link: "#", stock: 8 },
  { title: "FIFA 22", link: "#", stock: 20 },
  { title: "Fortnite Accounts", link: "#", stock: 12 },
  { title: "Call of Duty", link: "#", stock: 7 },
  { title: "Cyberpunk 2077", link: "#", stock: 3 },
];
// F:\Study Folder\Privite\Team Projects\gameshelf\public\gamelogo1.png
const additionalGames = [
  { title: "Overwatch", link: "#", stock: 9 },
  { title: "Apex Legends", link: "#", stock: 18 },
  { title: "Call of Duty", link: "#", stock: 6 },
  { title: "The Elder", link: "#", stock: 14 },
  { title: "FIFA 22", link: "#", stock: 22 },
  { title: "Fortnite Accounts", link: "#", stock: 11 },
  { title: "World of Warcraft", link: "#", stock: 25 },
  { title: "Dota", link: "#", stock: 30 },
  { title: "Far Cry", link: "#", stock: 4 },
  { title: "Borderlands", link: "#", stock: 2 },
  { title: "Fallout", link: "#", stock: 1 },
  { title: "Rocket League", link: "#", stock: 16 },
  { title: "League of Legends", link: "#", stock: 28 },
  { title: "Hearthstone", link: "#", stock: 35 },
  { title: "Destiny 2", link: "#", stock: 13 },
  { title: "Genshin Impact", link: "#", stock: 9 },
  { title: "Rocket League", link: "#", stock: 21 },
  { title: "The Witcher 3", link: "#", stock: 17 },
  { title: "Cyberpunk 2077", link: "#", stock: 5 },
  { title: "Rocket League", link: "#", stock: 8 },
];

export default function DashboardItemsNavigationProduct() {
  return (
    <div className="">
      <div className="mx-auto max-w-4xl pb-40 lg:max-w-7xl lg:px-8">
        <h3 className="mb-10 mt-12 text-center text-2xl font-bold tracking-wide text-gray-700">
          Recent Trending
        </h3>
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {trendingGames.map((game, index) => (
            <DashboardNavigationProducts
              key={index}
              game={game}
              index={index}
            />
          ))}
        </div>
        <h3 className="mb-10 mt-16 text-center text-2xl font-bold tracking-wide text-gray-700">
          All brands for Accounts
        </h3>
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {additionalGames.map((game, index) => (
            <DashboardNavigationProducts
              key={index}
              game={game}
              index={index}
            />
          ))}
          <additionalGames />
        </div>
        <FeaturePagination onchange={"sm:flex"} onchange2={"sm:hidden"} />
      </div>
    </div>
  );
}
