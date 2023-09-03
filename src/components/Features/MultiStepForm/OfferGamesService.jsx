function GameSelectionComponent() {
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
  return (
    <div className="step">
      <div className="mb-4">
        <label
          className="block text-gray-700  text-md font-bold mb-2"
          htmlFor="gameType"
        >
          Select Service
        </label>
        <select
          required
          id="gameType"
          name="gameType"
          className="border border-gray-400 rounded w-full py-2 px-3"
        >
          <option value="">Select an option</option>
          <option value="gameServer">Game Server</option>
          <option value="gameTopUp">Game Top Up</option>
          <option value="gameItems">Game Items</option>
          <option value="gameAccount">Game Account</option>
        </select>
      </div>
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
      <div className="px-1 mb-3">
        <p className="text-md mt-8 font-semibold  text-gray-900 mb-3">
          Notifications
        </p>
        <div className="mt-2 text-sm text-gray-600">
          <label htmlFor="comments" className="inline-flex items-center">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              className={`form-checkbox h-5 w-5  accent-gray-600 `} // Change the color here
            />
            <span className="ml-2 text-md font-medium text-gray-500 mb-0.5 ">
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
