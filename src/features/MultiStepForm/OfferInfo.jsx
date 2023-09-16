import { FiTrash } from "react-icons/fi";

function GameServiceComponent({ register, setValue, getValues }) {
  const predefinedKeys = [
    "Rank",
    "Level",
    "Items",
    "Battle-Passes",
    "Currency",
  ];
  const handleAddClick = () => {
    const key = getValues("key");
    const value = getValues("value");
    let currentOptions = getValues("options") || [];

    const existingIndex = currentOptions.findIndex(
      (options) => options.key === key
    );

    if (existingIndex !== -1) {
      currentOptions[existingIndex].value = value;
    } else if (currentOptions.length < 4 && key && value) {
      currentOptions.push({ key, value });
    }

    setValue("options", currentOptions);
  };
  const handleRemoveClick = (index) => {
    let currentOptions = getValues("options") || [];

    if (index >= 0 && index < currentOptions.length) {
      currentOptions.splice(index, 1);
      setValue("options", currentOptions);
    }
  };
  return (
    <div className="step">
      <div className="mb-4">
        <label
          className="block tracking-wide text-gray-700 text-md mb-4 font-bold"
          htmlFor="title"
        >
          Title of the Offer
        </label>
        <input
          type="text"
          id="title"
          name="title"
          {...register("title")}
          required
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <label
        className="text-gray-700 text-md font-bold mr-2 tracking-wide"
        htmlFor="price"
      >
        Product Price
      </label>
      <div className="mb-6 mt-4  sm:flex items-center">
        <input
          type="number"
          id="price"
          name="price"
          {...register("price")}
          required
          className="border rounded w-full py-2 px-3"
        />
        <div className="my-5 sm:hidden"> </div>
        <label
          className="sm:block sm:ml-10 mr-6  text-gray-700 text-md font-bold mb-2 tracking-wider"
          htmlFor="quantity"
        >
          Quantity:
        </label>
        <div className="my-5 sm:hidden"> </div>

        <select
          className="px-6 py-1.5 sm:py-2 border border-gray-400 rounded-lg bg-white hover:bg-gray-100 focus:ring  outline-none"
          id="quantity"
          {...register("stock")}
        >
          {[...Array(10).keys()].map((num) => (
            <option
              key={num}
              value={num + 1}
              className="bg-gray-50 hover:bg-gray-200 text-blue-900 font-medium"
            >
              {num + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-4">
        <div className="flex flex-wrap gap-4 text-sm sm:text-base mb-2">
          {getValues("options").map((option, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg shadow-md sm:mb-0 my-1 w-auto"
            >
              <span className="mr-2">
                {option.key}: {option.value}
              </span>
              <button
                onClick={() => handleRemoveClick(index)}
                className="text-red-600 font-bold hover:text-red-700 focus:outline-none"
              >
                <FiTrash />
              </button>
            </div>
          ))}
        </div>
        <h4 className="text-[1.06rem] text-gray-600 font-bold">
          <span className="tracking-wide border-gray-400">Optional Titles</span>
        </h4>
        <div className="mt-2 mb-6 grid sm:gap-2 gap-6 sm:flex">
          <select
            {...register("key")}
            className="px-4 py-2 border border-purple-300 rounded-lg bg-white hover:bg-gray-200 focus:ring-2 focus:ring-purple-300 outline-none w-full sm:w-auto"
          >
            <option value="">Select a key</option>
            {predefinedKeys.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          <input
            {...register("value")}
            type="text"
            placeholder="Enter Value"
            className="p-2 bg-gray-50 rounded-lg sm:ml-2 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full sm:w-auto"
          />
          <button
            onClick={handleAddClick}
            className="p-2.5 sm:ml-2 bg-slate-600 px-6 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full sm:w-auto"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameServiceComponent;
