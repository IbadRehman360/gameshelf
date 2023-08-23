const popularGames = ["Fortnite", "CSGO", "Overwatch", "Apex Legend"];

function App() {
  return (
    <div className="flex flex-wrap gap-3" style={{ maxWidth: "100%" }}>
      <h6 className="font-bold text-[1.05rem]  text-gray-700">
        Popular searches:
      </h6>
      {popularGames.map((gameName, index) => (
        <button
          key={index}
          type="button"
          className="rounded-full  bg-gradient-to-r from-gray-700   to-gray-600 px-3 py-[5px] text-sm font-semibold  text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {gameName}
        </button>
      ))}
    </div>
  );
}
export default App;
