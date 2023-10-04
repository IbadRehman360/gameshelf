/* eslint-disable no-prototype-builtins */
/* eslint-disable react/no-unknown-property */

import FeaturedProduct from "../../../components/FeatureProducts";

export default function GameProducts({ loading, games }) {
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
  console.log(games);
  if (games.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="text-center">
          <div class="flex justify-center">
            <img src="/NOPRODUCT.png" className=" w-3/4" />
          </div>
          <p className="md:text-lg text-sm -mt-4 sm:-mt-10 text-gray-600">
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
      {games.map((game, i) => (
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
