function PurchaseUser() {
  return (
    <div className="flex items-center space-x-4">
      <span className="relative inline-block">
        <img className="h-20 w-20 rounded-full" src="/ProfileImg2.jpg" alt="" />
        <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white" />
      </span>
      <div>
        <h3 className="text-[0.9rem] pb-1 md:text-[1rem] font-medium text-blueGray-700">
          Ibad ur Rehman
          <p className="text-[0.7rem]  uppercase">Level 73</p>
        </h3>
        <div className="flex space-x-2 ">
          <button
            className="bg-red-500 hover:bg-red-400 active:bg-red-400   text-white font-semibold hover:shadow-md shadow text-[0.6rem] px-4 py-2 rounded-md  outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Message
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-500 active:bg-red-400 text-white   font-semibold hover:shadow-md shadow text-[0.7rem]  px-4  py-1.5  rounded-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default PurchaseUser;
