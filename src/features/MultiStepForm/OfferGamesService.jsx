// const countries = [
//   "Afghanistan",
//   "Albania",
//   "Algeria",
//   "Andorra",
//   "Angola",
//   "Antigua and Barbuda",
//   "Argentina",
//   "Armenia",
//   "Australia",
//   "Austria",
//   "Azerbaijan",
//   "Bahamas",
//   "Bahrain",
//   "Bangladesh",
//   "Barbados",
//   "Belarus",
//   "Belgium",
//   "Belize",
//   "Benin",
//   "Bhutan",
//   "Bolivia",
//   "Bosnia and Herzegovina",
//   "Botswana",
//   "Brazil",
//   "Brunei",
//   "Bulgaria",
//   "Burkina Faso",
//   "Burundi",
//   "Cabo Verde",
//   "Cambodia",
//   "Cameroon",
//   "Canada",
//   "Central African Republic",
//   "Chad",
//   "Chile",
//   "China",
//   "Colombia",
//   "Comoros",
//   "Congo",
//   "Costa Rica",
//   "Croatia",
//   "Cuba",
//   "Cyprus",
//   "Czech Republic",
//   "Denmark",
//   "Djibouti",
//   "Dominica",
//   "Dominican Republic",
// ];
{/* <div className="mb-4">
  <label
    className="block text-gray-700 text-sm font-bold mb-2"
    htmlFor="country"
  >
    Select Country
  </label>
  <select
    required
    id="country" // Changed id and name to "country"
    name="country"
    className="border rounded w-full py-2 px-3"
  >
    <option value="">Select a country</option>
    {countries.map((country, index) => (
      <option key={index} value={country}>
        {country}
      </option>
    ))}
  </select>
</div> */}

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
]

function GameSelectionComponent() {
  return (
    <div className="step">
      <div className="mb-4">
        <label
          className="mb-2 block font-bold tracking-wide text-gray-700"
          htmlFor="gameType"
        >
          Select Service
        </label>
        <select
          required
          id="gameType"
          name="gameType"
          className="w-full rounded border border-gray-400 px-3 py-2"
        >
          <option value="">Select an option</option>
          <option value="video-games">Video Games</option>
          <option value="gift-cards">Gift Cards</option>
          <option value="game-coins">Game Coins</option>
          <option value="items">Items</option>
          <option value="accounts">Accounts</option>
        </select>
        <label
          className="mb-2 mt-4 block font-bold tracking-wide text-gray-700"
          htmlFor="game"
        >
          Select Game
        </label>
        <div className="overflow-hidden">

          <select
            required
            id="game"
            name="game"
            className="w-full overflow-hidden rounded border border-gray-400 px-3 py-2"
          >
            <option >Select an option</option>
            {Games.map((game, index) => (
              <option key={index}
                value={game}>{game} </option>

            ))}
          </select>
        </div>
      </div>
      <div className="mb-3 px-1">
        <p className="mb-3 mt-8 font-semibold text-gray-900">
          Notifications
        </p>
        <div className="mt-2 flex items-start text-sm text-gray-600">
          <label htmlFor="comments" className="inline-flex items-start">
            <input
              id="comments"
              name="comments"
              required
              type="checkbox"
              className={`mt-0.5 h-5 w-5 accent-gray-600 md:mt-0`} // Change the color here
            />
            <span className="ml-2 text-[0.8rem] font-medium text-slate-500 sm:text-[0.9rem] md:text-[0.92rem]">
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
