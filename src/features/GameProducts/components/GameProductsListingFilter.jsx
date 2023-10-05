import DashboardFilterOption from "./GameProductsFilterOption";

const filterOptions = [
  { name: "Recommended", value: "Recommended" },
  { name: "Lowest Price", value: "Lowest" },
  { name: "Highest Price", value: "Highest" },
];

function GameProductListingFilter({ total, selectedFilter, onFilterChange }) {
  return (
    <div>
      <div className="mb-6 flex gap-4">
        <p className="mt-1.5 text-[0.85rem] font-medium text-gray-600 sm:text-[0.9em] md:text-[0.95rem]">
          About total {total} results
        </p>
        <div className="flex flex-1 justify-end lg:hidden">
          <select
            id="location"
            name="location"
            className="max-w-xs rounded-md border border-gray-400 bg-transparent px-3 py-[0.4rem] text-[0.8rem] font-semibold text-gray-900 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
            value={selectedFilter}
            onChange={onFilterChange}
          >
            {filterOptions.map((filterOption) => (
              <option key={filterOption.value} value={filterOption.value}>
                {filterOption.name}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden justify-end space-y-4 sm:items-center sm:space-x-2 sm:space-y-0 lg:flex lg:flex-1 lg:flex-row">
          {filterOptions.map((filterOption) => (
            <DashboardFilterOption
              key={filterOption.value}
              filterOption={filterOption}
              selectedFilter={selectedFilter}
              onFilterChange={onFilterChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default GameProductListingFilter;
