/* eslint-disable no-prototype-builtins */
/* eslint-disable react/no-unknown-property */

import FeaturedProduct from "../../../components/FeatureProducts";

export default function GameProductItems({ loading, games, selectedFilter }) {
  const getFilteredGames = () => {
    if (selectedFilter === "Recommended") {
      return games;
    } else if (selectedFilter === "Lowest") {
      return games.slice().sort((a, b) => a.price - b.price);
    } else if (selectedFilter === "Highest") {
      return games.slice().sort((a, b) => b.price - a.price);
    }
    return games;
  };

  // Use the filtered games based on the selected filter
  const filteredGames = getFilteredGames();

  if (loading || !games) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>{" "}
      </div>
    );
  }
  if (filteredGames.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="text-center">
          <div class="flex justify-center">
            <img src="/NOPRODUCT.png" className=" w-3/4" />
          </div>
          <p className="-mt-4 text-sm text-gray-600 sm:-mt-10 md:text-lg">
            It seems like there are no products available in this category. {""}
            <div className="mt-2 hidden sm:flex" />
            Why not explore our other categories?
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5">
      {filteredGames.map((game, i) => (
        <FeaturedProduct
          key={i}
          title={game.title}
          created_at={game.created_at}
          price={game.price}
          level={game.seller_id.level}
          fullName={game.seller_id.username}
          productID={game.id}
          games={games[0]?.game_id.title?.toLowerCase()}
        />
      ))}
    </div>
  );
}
