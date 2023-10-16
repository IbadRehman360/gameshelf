function ProductsFilter({ sortCriteria, setSortCriteria }) {
  const toggleSorting = (newOrderBy) => {
    if (newOrderBy === sortCriteria.orderBy) {
      setSortCriteria({
        ...sortCriteria,
        orderDirection: sortCriteria.orderDirection === "desc" ? "asc" : "desc",
      });
    } else {
      setSortCriteria({ orderBy: newOrderBy, orderDirection: "asc" });
    }
  };

  return (
    <div className=" bg-[#fdfdfd] px-3 xl:mt-4">
      <h2 className="text-[1.4rem] ml-0.5 sm:ml-0 font-semibold text-gray-700 md:text-[1.7rem] lg:text-[1.8rem] 3xl:text-[2rem]">
        Featured Products
      </h2>
      <div className="my-3 mt-4 flex gap-3 sm:mt-6">
        <button onClick={() => toggleSorting("created_at")}>
          <div className="flex flex-col gap-1">
            <h3 className="text-center text-[0.8rem] font-semibold text-red-500 sm:text-sm md:text-[1rem] lg:text-[1.1rem]">
              New Items
            </h3>
            <hr className="w-24 border-[1px] border-red-400 md:w-28 lg:w-32" />
          </div>
        </button>
        <button onClick={() => toggleSorting("title")}>
          <div className="flex flex-col gap-1">
            <h3
              className="text-center text-[0.8rem] font-semibold text-green-500 sm:text-sm md:text-[1rem] lg:text-[1.1rem]"
              style={{ color: " #22577a" }}
            >
              Most Views
            </h3>
            <hr
              className="w-24 border-[1px] border-green-500 md:w-28 lg:w-32"
              style={{ borderColor: " #22577a" }}
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default ProductsFilter;
