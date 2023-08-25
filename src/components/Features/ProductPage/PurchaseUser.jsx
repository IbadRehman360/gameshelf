function PurchaseUser() {
  return (
    <div className="flex items-center space-x-4">
      <img
        alt="..."
        src="/ProfileImg2.jpg"
        className="shadow-xl rounded-full h-auto border-none max-w-[5rem]"
      />
      <div>
        <h3 className="text-[0.9rem] md:text-[1rem] font-medium text-blueGray-700">
          Ibad ur Rehman
          <p className="text-[0.7rem]  uppercase">Level 73</p>
        </h3>
        <div className="flex space-x-2 mt-2">
          <button
            className="bg-red-500 hover:bg-red-400 active:bg-red-400 text-white  font-semibold hover:shadow-md shadow text-[0.7rem]  px-2  py-1.5  rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Connect
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-500 active:bg-red-400  text-white font-semibold hover:shadow-md shadow text-[0.7rem] px-2 py-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default PurchaseUser;
