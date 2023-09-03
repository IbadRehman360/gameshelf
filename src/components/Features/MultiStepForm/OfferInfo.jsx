function GameServiceComponent() {
  return (
    <div className="step">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
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
          // Add appropriate onChange handler to update state
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="price"
        >
          Price
        </label>
        <input
          type="number"
          id="price"
          required
          name="price"
          className="border rounded w-full py-2 px-3"
        />
      </div>
    </div>
  );
}

export default GameServiceComponent;
