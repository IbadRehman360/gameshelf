import { FiTrash } from "react-icons/fi";
function GameServiceComponent({ register, setValue, getValues }) {
  const predefinedKeys = [
    "Rank",
    "Acccount Level",
    "Items",
    "Battle-Passes",
    "Currency",
  ];
  const handleAddClick = (e) => {
    e.preventDefault();
    const key = getValues("key");
    const value = getValues("value");
    let currentOptions = getValues("options") || [];

    const existingIndex = currentOptions.findIndex(
      (options) => options[key] !== undefined
    );

    if (existingIndex !== -1) {
      currentOptions[existingIndex][key] = value;
    } else if (currentOptions.length < 2 && key && value) {
      const newOption = {};
      newOption[key] = value;
      currentOptions.push(newOption);
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
          className="mb-4 block font-bold tracking-wide text-gray-700"
          htmlFor="title"
        >
          Title of the Offer
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          {...register("title")}
          className="w-full rounded border px-3 py-2"
        />
      </div>
      <label
        className="mr-2 font-bold tracking-wide text-gray-700"
        htmlFor="price"
      >
        Product Price
      </label>
      <div className="mb-6 mt-4 items-center sm:flex">
        <input
          type="number"
          id="price"
          name="price"
          required
          {...register("price")}
          className="w-full rounded border px-3 py-2"
        />
        <div className="my-5 sm:hidden"> </div>
        <label
          className="mb-2 mr-6 font-bold tracking-wider text-gray-700 sm:ml-10 sm:block"
          htmlFor="quantity"
        >
          Quantity:
        </label>
        <div className="my-5 sm:hidden"> </div>

        <select
          className="rounded-lg border border-gray-400 bg-white px-6 py-1.5 outline-none hover:bg-gray-100 focus:ring sm:py-2"
          id="quantity"
          required
          {...register("stock")}
        >
          {[...Array(10)?.keys()].map((num) => (
            <option
              key={num}
              value={num + 1}
              className="bg-gray-50 font-medium text-blue-900 hover:bg-gray-200"
            >
              {num + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-4">
        <div className="mb-2 flex flex-wrap gap-4 text-sm sm:text-base">
          <div className="my-1 flex w-auto items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-700 shadow-md sm:mb-0">
            <span className="mr-2">Service: {getValues("serviceId")}</span>
          </div>
          <div className="my-1 flex w-auto items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-700 shadow-md sm:mb-0">
            <span className="mr-2">Game: {getValues("gameId")}</span>
          </div>
          {getValues("options")?.map((option, index) => (
            <div
              key={index}
              className="my-1 flex w-auto items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-700 shadow-md sm:mb-0"
            >
              {Object.entries(option)?.map(([key, value]) => (
                <div key={key}>
                  <span className="mr-2">
                    {key}: {value}
                  </span>
                </div>
              ))}
              <button
                onClick={() => handleRemoveClick(index)}
                className="font-bold text-red-600 hover:text-red-700 focus:outline-none"
              >
                <FiTrash />
              </button>
            </div>
          ))}
        </div>

        <h4 className="text-[1.06rem] font-bold text-gray-600">
          <span className="border-gray-400 tracking-wide">Optional Titles</span>
        </h4>
        <div className="mb-6 mt-2 grid gap-6 sm:flex sm:gap-2">
          <select
            {...register("key")}
            className="w-full rounded-lg border border-purple-300 bg-white px-4 py-2 outline-none hover:bg-gray-200 focus:ring-2 focus:ring-purple-300 sm:w-auto"
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
            className="w-full rounded-lg border border-purple-300 bg-gray-50 p-2 focus:outline-none focus:ring-2 focus:ring-purple-300 sm:ml-2 sm:w-auto"
          />
          <button
            onClick={handleAddClick}
            className="w-full rounded-lg bg-slate-600 p-2.5 px-6 text-sm font-semibold text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 sm:ml-2 sm:w-auto"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameServiceComponent;
