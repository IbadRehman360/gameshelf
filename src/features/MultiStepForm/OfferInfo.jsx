import { useState } from "react";

function GameServiceComponent() {
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [customOptions, setCustomOptions] = useState([]); //eslint-disable-line
  const [newOption, setNewOption] = useState("");
  const [selectedKey, setSelectedKey] = useState("");

  const predefinedKeys = [
    "Game Items",
    "Account",
    "Gift Card",
    "Game",
    "Other",
    // Add more predefined keys here
  ];

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleInputChange = (e) => {
    setNewOption(e.target.value);
  };

  const handleKeySelect = (key) => {
    setSelectedKey(key);
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
          className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
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
      <label className="text-gray-700 text-sm font-bold mb-2 mr-2 tracking-wide" htmlFor="price">
        Product Price
      </label>
      <div className="mb-4 flex items-center">
        <input
          type="number"
          id="price"
          required
          name="price"
          className="border rounded w-full py-2 px-3"
        />
        <label className="block ml-10 mr-6 text-gray-700 text-sm font-bold mb-2 tracking-wider" htmlFor="quantity">
          Quantity:
        </label>
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:ring focus:ring-blue-300 outline-none"
          value={quantity}
          id="quantity"
          onChange={handleQuantityChange}
        >
          {[...Array(10).keys()].map((num) => (
            <option
              key={num}
              value={num + 1}
              className="bg-blue-100 hover:bg-blue-200 text-blue-900 font-medium"
            >
              {num + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-4">
        <h4 className="text-lg text-gray-700 font-semibold mt-4 mb-2">
          Optional Title
        </h4>
        <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
          {Object.entries(selectedOptions).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center px-3 py-2 bg-gray-200 text-gray-800 rounded-lg"
            >
              <span className="mr-2">
                {key}: {value}
              </span>
              <button
                onClick={() => handleDeleteOption(key)}
                className="text-red-500 font-bold"
              >
                X
              </button>
            </div>
          ))}
          {customOptions.map((option, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-2 bg-gray-200 text-gray-800 rounded-lg cursor-pointer"
              onClick={() => handleKeySelect(option)}
            >
              <span className="mr-2">
                Custom {index + 1}: {option}
              </span>
              <button
                onClick={() => handleDeleteOption(`custom${index + 1}`)}
                className="text-red-500 font-bold"
              >
                X
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:ring focus:ring-blue-300 outline-none"
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
            className="p-2 bg-gray-100 rounded-lg ml-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleAddOption}
            className="p-2 ml-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Add
          </button>
        </div>
      </div>

    </div>
  );
}

export default GameServiceComponent;