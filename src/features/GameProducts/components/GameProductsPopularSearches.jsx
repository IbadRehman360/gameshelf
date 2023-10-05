import { Link } from "react-router-dom";

const popularGames = ["Fortnite", "CSGO", "Overwatch", "Valorant"];

function App() {
  return (
    <div className="flex flex-wrap gap-3" style={{ maxWidth: "100%" }}>
      <h6 className="text-[1rem] font-semibold text-gray-700   md:tracking-wide">
        Popular searches:
      </h6>
      {popularGames.map((gameName, index) => (
        <Link to={`/dashboard/${gameName.toLowerCase()}`} key={index}>
          <button
            type="button"
            className="md-text[0.9rem] rounded-md bg-gray-600 bg-gradient-to-r px-2 py-[5px] text-[0.8rem] font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:px-3"
          >
            {gameName}
          </button>
        </Link>
      ))}
    </div>
  );
}
export default App;
