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
          className="mb-2 block text-sm font-bold tracking-wide text-gray-700"
          htmlFor="title"
        >
          Title of the Offer
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="w-full rounded border px-3 py-2"
        />
      </div>
      <label className="mb-2 mr-2 text-sm font-bold tracking-wide text-gray-700" htmlFor="price">
        Product Price
      </label>
      <div className="mb-4 flex items-center">
        <input
          type="number"
          id="price"
          required
          name="price"
          className="w-full rounded border px-3 py-2"
        />
        <label className="mb-2 ml-10 mr-6 block text-sm font-bold tracking-wider text-gray-700" htmlFor="quantity">
          Quantity:
        </label>
        <select
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none hover:bg-gray-100 focus:ring focus:ring-blue-300"
          value={quantity}
          id="quantity"
          onChange={handleQuantityChange}
        >
          {[...Array(10).keys()].map((num) => (
            <option
              key={num}
              value={num + 1}
              className="bg-blue-100 font-medium text-blue-900 hover:bg-blue-200"
            >
              {num + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-1">
        <h4 className="mb-2.5 mt-2 block text-sm font-bold tracking-wide text-gray-700">
          Optional title
        </h4>
        <div className="flex w-fit flex-wrap gap-2 text-[10px] sm:text-xs">
          {Object.entries(selectedOptions).map(([key, value]) => (
            <div key={key} className="flex w-fit items-center rounded-lg bg-gray-300 p-2">
              <span className="mr-2">
                {key}: {value}
              </span>
              <button
                onClick={() => handleDeleteOption(key)}
                className="font-bold text-red-500"
              >
                X
              </button>
            </div>
          ))}
          {customOptions.map((option, index) => (
            <div
              key={index}
              className="flex w-fit cursor-pointer items-center rounded-lg bg-gray-300 p-2"
              onClick={() => handleKeySelect(option)}
            >
              <span className="mr-2">
                Custom {index + 1}: {option}
              </span>
              <button
                onClick={() => handleDeleteOption(`custom${index + 1}`)}
                className="font-bold text-red-500"
              >
                X
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <select
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none hover:bg-gray-100 focus:ring focus:ring-blue-300"
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
            className="ml-2 rounded-lg bg-gray-200 p-2"
          />
          <button
            onClick={handleAddOption}
            className="ml-2 rounded-lg bg-blue-500 p-2 text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameServiceComponent;