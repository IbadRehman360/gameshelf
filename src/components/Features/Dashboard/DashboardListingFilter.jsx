import DashboardFilterOption from "./DashboardFilterOption";

const filterOptions = [
  { id: "Recommended", title: "Recommended" },
  { id: "Most Recent", title: "Recent" },
  { id: "Lowest Price", title: "Lowest Price" },
  { id: "Highest Price", title: "Highest Price" },
];

function DashboardListingFilter() {
  return (
    <div>
      <div className="flex mb-6 px-2 gap-4">
        <p className="text-gray-600 sm:text-[0.9em] text-[0.85rem]  md:text-[1rem] mt-1.5 ">
          About 93,741 results
        </p>
        <div className="sm:hidden flex flex-1  justify-end ">
          <select
            id="location"
            name="location"
            className=" max-w-xs px-3 py-[0.4rem] sm:text-[1.2em] text-[0.8rem] text-gray-900 bg-transparent border   border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
            defaultValue="Recommend"
          >
            <option>Recommend</option>
            <option>Most Recent</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
          </select>
        </div>

        <div className=" hidden sm:flex flex-1 grid-cols-2 justify-end space-y-4 sm:items-center sm:space-x-2 sm:space-y-0">
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
