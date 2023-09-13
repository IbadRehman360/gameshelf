import { useState } from "react";
import { FiTrash } from "react-icons/fi";
// import { LuDelete } from "react-icons/lu";

function GameServiceComponent({ formData, setFormData }) {
  // const [quantity, setQuantity] = useState(1);
  // const [selectedOptions, setSelectedOptions] = useState({
  //   Item: "Account",
  //   Game: "CSGO",
  // });

  const [newOption, setNewOption] = useState("");
  const [selectedKey, setSelectedKey] = useState("");

  const predefinedKeys = [
    "Rank",
    "Level",
    "Items",
    "Battle-Passes",
    "Currency",
  ];

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleInputChange = (e) => {
    setNewOption(e.target.value);
  };

  const handleAddOption = () => {
    if (selectedKey && newOption.trim() !== "") {
      setSelectedOptions({ ...selectedOptions, [selectedKey]: newOption });
      setNewOption("");
      setSelectedKey("");
    }
  };

  const handleDeleteOption = (key) => {
    const updatedSelectedOptions = { ...selectedOptions };
    delete updatedSelectedOptions[key];
    setSelectedOptions(updatedSelectedOptions);
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
          required
          name="price"
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
          value={quantity}
          id="quantity"
          onChange={handleQuantityChange}
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
          {Object.entries(selectedOptions).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg shadow-md sm:mb-0 my-1 w-auto"
            >
              <span className="mr-2">
                {key}: {value}
              </span>
              <button
                onClick={() => handleDeleteOption(key)}
                className="text-red-600  font-bold hover:text-red-700 focus:outline-none"
              >
                <FiTrash />
              </button>
            </div>
          ))}
        </div>
        <h4 className="text-[1.1rem]  text-gray-600 font-bold  ">
          <span className="  border-gray-400">Insert an Optional </span>
        </h4>
        <div className="mt-2 mb-6 grid sm:gap-2 gap-6 sm:flex">
          <select
            className="px-4 py-2 border border-purple-300 rounded-lg bg-white hover:bg-gray-200 focus:ring-2 focus:ring-purple-300 outline-none w-full sm:w-auto"
            value={selectedKey}
            onChange={(e) => setSelectedKey(e.target.value)}
          >
            <option value="">Select a key</option>
            {predefinedKeys.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Enter Value"
            value={newOption}
            onChange={handleInputChange}
            className="p-2 bg-gray-50 rounded-lg sm:ml-2 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full sm:w-auto"
          />
          <button
            onClick={handleAddOption}
            className="p-2.5 sm:ml-2 bg-slate-600 px-6 text-white text-sm font-semibold  rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full    sm:w-auto"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameServiceComponent;
