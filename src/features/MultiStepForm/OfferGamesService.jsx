const Games = [
  "Overwatch",
  "Apex Legends",
  "Call of Duty",
  "The Elder",
  "FIFA 22",
  "Fortnite Accounts",
  "World of Warcraft",
  "Dota",
  "Far Cry",
  "Borderlands",
  "Fallout",
  "Rocket League",
  "League of Legends",
  "Hearthstone",
  "Destiny 2",
  "Genshin Impact",
  "Rocket League",
  "The Witcher 3",
  "Cyberpunk 2077",
  "Rocket League",
  "Valorant Account",
  "CS:GO",
  "Minecraft Account",
  "Fortnite Skins",
  "Valorant Account",
  "CS:GO",
  "Apex Legends",
  "Minecraft Account",
  "FIFA 22",
  "Fortnite Accounts",
  "Call of Duty",
  "Cyberpunk 2077",
];

function GameSelectionComponent({ formData, updateFormField }) {
  return (
    <div className="step">
      <div className="my-4 3xl:my-8">
        <label
          className="block text-gray-700 tracking-wide  text-md font-bold mb-2"
          htmlFor="gameType"
        >
          Select Service
        </label>
        <select
          required
          id="gameType"
          name="gameType"
          value={formData.service}
          onChange={(e) => updateFormField("service", e.target.value)}
          className="border border-gray-400 rounded w-full py-2 px-3"
        >
          <option value="">Select an option</option>
          <option value="video-games">Video Games</option>
          <option value="gift-cards">Gift Cards</option>
          <option value="game-coins">Game Coins</option>
          <option value="items">Items</option>
          <option value="accounts">Accounts</option>
        </select>
        <label
          className="block mt-4 text-gray-700 tracking-wide  text-md font-bold mb-2"
          htmlFor="game"
        >
          Select Game
        </label>
        <div className=" overflow-hidden">
          <select
            required
            id="game"
            name="game"
            value={formData.game}
            onChange={(e) => updateFormField("game", e.target.value)}
            disabled={!formData.service}
            className="border    border-gray-400 rounded   overflow-hidden w-full py-2 px-3"
          >
            <option>Select an option</option>
            {Games.map((game, index) => (
              <option key={index} value={game}>
                {game}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="px-1 mb-3">
        <p className="text-md mt-8 font-semibold text-gray-900 mb-3">
          Notifications
        </p>
        <div className="mt-2 text-sm text-gray-600 flex items-start">
          <label htmlFor="comments" className="inline-flex items-start">
            <input
              id="comments"
              name="comments"
              required
              type="checkbox"
              className={`form-checkbox h-5 w-5 accent-gray-600 md:mt-0 mt-0.5`}
            />
            <span className="ml-2 text-[0.8rem] sm:text-[0.9rem] md:text-[0.92rem] font-medium text-slate-500 ">
              I agree to receive notifications about important changes and
              optional updates.
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default GameSelectionComponent;
