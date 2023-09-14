import { useState } from "react";
const initialOptions = {
  game: '',
  accountLevel: '',
};
function GameServiceComponent() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };
  const [selectedOptions, setSelectedOptions] = useState(initialOptions);
  const [customOptions, setCustomOptions] = useState([]);
  const [newOption, setNewOption] = useState('');


  const handleInputChange = (e) => {
    setNewOption(e.target.value);
  };

  const handleAddOption = () => {
    if (newOption.trim() !== '') {
      setCustomOptions([...customOptions, newOption]);
      setNewOption('');
    }
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
      <label className="text-gray-700 text-sm font-bold mb-2 mr-2 tracking-wide" htmlFor="price">Product Price</label>
      <div className="mb-4 flex items-center">
        <input type="number" id="price" required name="price" className="border rounded w-full py-2 px-3" />

        <label className="block ml-10 mr-6 text-gray-700 text-sm font-bold mb-2   tracking-wider" htmlFor="quantity">
          Quantity:
        </label>
        <select
          className="px-4   py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:ring focus:ring-blue-300 outline-none"
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
      <div className="grid gap-1 ">
        <h4
          className="block tracking-wide mt-2  text-gray-700 text-sm font-bold mb-2.5"
          htmlFor="title"
        >
          Optional title

        </h4>
        <div className="flex flex-wrap gap-2  w-fit text-[10px] sm:text-xs">
          {Object.entries(selectedOptions).map(([key, value]) => (
            <span key={key} className="p-2 bg-gray-300 w-fit rounded-lg">
              {key}: {value}
            </span>
          ))}

        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Add Custom Option"
            value={newOption}
            onChange={handleInputChange}
            className="p-2 bg-gray-200 rounded-lg"
          />
          <button
            onClick={handleAddOption}
            className="p-2 ml-2 bg-blue-500 text-white rounded-lg"
          >
            Add
          </button>
        </div>
      </div>
    </div >
  );
}

export default GameServiceComponent;
