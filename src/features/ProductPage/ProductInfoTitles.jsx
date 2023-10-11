function ProductInfoTitles({ product }) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-md mb-2 font-semibold sm:text-lg md:text-xl">
        Product Info
      </h3>
      <div className="flex w-fit flex-wrap gap-2 text-[10px] sm:text-xs">
        <span className="w-fit rounded-lg bg-gray-300 p-2">
          Item Type: {product[0]?.category_id?.name}
        </span>
        <span className="w-fit rounded-lg bg-gray-300 p-2">
          Game: {product[0]?.game_id?.title}
        </span>
        {product[0]?.options?.map((option, index) => {
          const optionObj = JSON.parse(option);
          const key = Object.keys(optionObj)[0];
          const value = optionObj[key];

          return (
            <span className="w-fit rounded-lg bg-gray-300 p-2" key={index}>
              {key}: {value}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ProductInfoTitles;
