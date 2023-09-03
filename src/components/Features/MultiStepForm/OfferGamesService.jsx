function GameSelectionComponent() {
  return (
    <div className="step">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="gameType"
        >
          Select Service
        </label>
        <select
          required
          id="gameType"
          name="gameType"
          className="border rounded w-full py-2 px-3"
        >
          <option value="">Select an option</option>
          <option value="gameServer">Game Server</option>
          <option value="gameTopUp">Game Top Up</option>
          <option value="gameItems">Game Items</option>
          <option value="gameAccount">Game Account</option>
        </select>
      </div>
    </div>
  );
}

export default GameSelectionComponent;
