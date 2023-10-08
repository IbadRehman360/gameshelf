function GameProductsNavigate({ onClick }) {
  // Change "onclick" to "onClick"
  return (
    <div className="relative rounded border border-red-400 bg-red-100 px-4 py-2 text-red-700">
      <strong className="font-bold">Error:</strong> Please select a valid game
      name
      <span className="absolute bottom-0 right-0 top-0 px-4 py-3">
        <svg
          className="h-6 w-6 fill-current text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <button onClick={onClick}>Go to Dashboard</button>
      </span>
    </div>
  );
}

export default GameProductsNavigate;
