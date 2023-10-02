import DashboardNavigationProducts from "./DashboardNavigationProducts";
import FeaturePagination from "../../../components/FeaturePagination";

export default function DashboardItemsNavigationProduct({
  games: isGames,
  isLoading,
}) {
  if (isLoading || !isGames) {
    return (
      <>
        <h1>loading...</h1>
        <h1>loading...</h1>
        <h1>loading...</h1>
        <h1>loading...</h1>
        <h1>loading...</h1>
        <h1>loading...</h1>
      </>
    );
  }
  const games = isGames[0];

  const trendingGames = games.slice(0, 8);
  const additionalGames = games.slice(8, 20);
  console.log(trendingGames, additionalGames);
  return (
    <div className="">
      <div className="mx-auto max-w-4xl pb-14 md:pb-20 lg:max-w-7xl lg:px-8 lg:pb-24">
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
        <div className="mb-16 grid grid-cols-2 gap-x-2 gap-y-6 sm:gap-x-6 sm:gap-y-10 lg:mb-20 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {additionalGames.map((game, index) => (
            <DashboardNavigationProducts
              key={index}
              game={game}
              index={index}
            />
          ))}
        </div>
        <FeaturePagination
          total={games.length}
          onchange={"sm:flex"}
          onchange2={"sm:hidden"}
        />
      </div>
    </div>
  );
}
