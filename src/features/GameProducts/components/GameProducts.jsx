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

  if (games.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800">
            Oops! No Products Found
          </h1>
          <p className="text-lg text-gray-600">
            It seems like there are no products available in this category.
            <div className="mt-2" />
            Why not explore our other categories?
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5">
      {/* <Link to={`/dashboard/${games[0]?.game_id?.title}/ibadkhan`}> */}
      {games.map((game, i) => (
        <FeaturedProduct
          key={i}
          title={game.title}
          created_at={game.created_at}
          price={game.price}
          level={game.seller_id.level}
          fullName={game.seller_id.username}
          games={games}
          gamesID={game.id}
        />
      ))}
      {/* </Link> */}
    </div>
  );
}
