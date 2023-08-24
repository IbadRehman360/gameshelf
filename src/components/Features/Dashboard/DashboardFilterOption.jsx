function DashboardFilterOption({ filterOption }) {
  return (
    <div key={filterOption.id} className="sm:flex items-center">
      <input
        name="notification-method"
        type="radio"
        defaultChecked={filterOption.id === "Recommended"}
        className=" text-red-600 focus:ring-red-600 h-4 w-4 border-gray-300"
      />
      <label
        htmlFor={filterOption.id}
        className="ml-2 mr-3 block text-sm font-medium leading-6 text-gray-900"
      >
        {filterOption.title}
      </label>
    </div>
  );
}

export default DashboardFilterOption;
