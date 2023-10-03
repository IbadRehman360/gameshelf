import DashboardFilterOption from "./GameProductsFilterOption";

const filterOptions = [
  { id: "Recommended", title: "Recommended" },
  { id: "Most Recent", title: "Recent" },
  { id: "Lowest Price", title: "Lowest Price" },
  { id: "Highest Price", title: "Highest Price" },
];

function DashboardListingFilter({ total }) {
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
            className="max-w-xs rounded-md border border-gray-400 bg-transparent px-3 py-[0.4rem] text-[0.8rem] font-semibold text-gray-900 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 sm:text-[1.2em]"
            defaultValue="Recommend"
          >
            <option>Recommend</option>
            <option>Most Recent</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
          </select>
        </div>

        <div className="hidden    justify-end space-y-4 sm:items-center sm:space-x-2 sm:space-y-0 lg:flex lg:flex-1 lg:flex-row">
          {filterOptions.map((filterOption) => (
            <DashboardFilterOption
              key={filterOption.id}
              filterOption={filterOption}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardListingFilter;
