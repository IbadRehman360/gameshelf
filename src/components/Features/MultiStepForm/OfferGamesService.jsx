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
      <h5 className="text-md mt-8 font-semibold  text-gray-900 mb-3">
        Notifications
      </h5>
      <div className="mt-2 text-sm text-gray-600">
        <label htmlFor="comments" className="inline-flex items-center">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600 focus:ring-indigo-600"
          />
          <span className="ml-2">
            I agree to receive notifications about important changes and
            optional updates.
          </span>
        </label>
      </div>
    </div>
  );
}

export default GameSelectionComponent;
