function DashboardFilterOption({
  filterOption,
  selectedFilter,
  onFilterChange,
}) {
  return (
    <div key={filterOption.value} className="sm:flex">
      <input
        name="filterOption"
        type="radio"
        value={filterOption.value}
        checked={filterOption.value === selectedFilter}
        onChange={onFilterChange}
        className="w-4 border-gray-300 text-red-600 focus:ring-red-600"
      />
      <label
        htmlFor={filterOption.value}
        className="ml-2 mr-3 block text-sm font-medium leading-6 text-gray-900"
      >
        {filterOption.name}
      </label>
    </div>
  );
}
export default DashboardFilterOption;
