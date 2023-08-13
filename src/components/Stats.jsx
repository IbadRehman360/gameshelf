const Card = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      <div className="p-4 rounded-lg shadow-md bg-white">
        <div className="mb-4">
          <h2 className="text-2xl sm:text-3xl  font-bold text-center text-gray-800 mb-3 ">
            Discover the World of{" "}
            <span className="text-orange-600">GameShelf</span>
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 text-center border-r border-gray-300">
              <p className="text-xl font-bold mb-2">Members</p>
              <p className="text-lg font-medium text-blue-800">Join 839K+</p>
              <p className="text-gray-700 font-light mt-2 text-sm">
                Join the gaming revolution. Explore thriving Buy & Sell
                Marketplace.{" "}
              </p>
            </div>
            <div className="p-3 text-center">
              <p className="text-xl font-bold mb-2">Account</p>
              <p className="text-lg font-semibold text-yellow-800">
                Explore 84K+
              </p>
              <p className="text-gray-700 font-light mt-2 text-sm">
                Uncover unique in-game Accounts and elevate your new play
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t pt-4 mb-2 ">
          <div className="flex mb-1 ">
            <p className="text-gray-500 font-semibold text-sm">
              Elevate your gaming experience with GameShelfs exclusive
              offerings.
            </p>
            <a
              href="#"
              className="px-4 py-2 sm:text-sm text-xs  bg-red-500 flex justify-center rounded-md items-center
              text-white hover:bg-red-600 transition "
              style={{ width: "50%" }}
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
