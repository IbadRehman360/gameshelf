import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiFilter3Line } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function DashboardSearchBar(games) {
  const [searchInput, setSearchInput] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    if (searchInput.length < 2) {
      setFilteredGames([]);
      return;
    }

    const filterGames = () => {
      const filtered = games.games[0].filter((game) =>
        game.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredGames(filtered);
    };

    filterGames();
  }, [searchInput, games]);

  return (
    <div className="">
      <div className="flex items-center justify-between rounded-3xl bg-[#fdfdfd] shadow-[0px_0px_6px_rgba(0,0,0,0.3)] sm:p-4 lg:gap-4">
        <div className="relative flex w-[90%] items-center rounded-lg sm:w-[100%]">
          <input
            type="text"
            className="ml-1 w-[100%] rounded-full rounded-e-none border-none bg-[#fdfdfd] px-9 py-1.5 text-[0.9rem] font-medium focus:outline-none sm:mr-2 sm:rounded-lg sm:text-[1rem] md:py-2"
            placeholder="Search for Games"
            style={{ textTransform: "capitalize" }}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <AiOutlineSearch className="absolute mx-3 text-lg sm:mx-2" />
        </div>
        <div className="hidden w-[100%] justify-end space-x-4 sm:ml-8 sm:flex sm:gap-4 md:ml-14 md:gap-8 lg:gap-14">
          <a
            disabled
            className="font-semibold text-slate-400 transition duration-300"
          >
            Every one of the gaming accounts.{" "}
          </a>
        </div>

        <Menu
          as="div"
          className="relative w-16 border-l-[1px] p-2 text-left sm:inline-block sm:w-fit sm:border-0 sm:py-0"
        >
          <div>
            <button className="inline-flex w-full justify-center gap-x-1.5 rounded-lg rounded-l-none px-3 py-[0.44rem] text-sm font-semibold text-gray-900 sm:hidden sm:justify-center sm:rounded-md sm:shadow-sm sm:ring-1 sm:ring-inset sm:ring-gray-300 sm:hover:bg-gray-50 md:py-2">
              <RiFilter3Line className="inline-block h-5 w-5" />
            </button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mr-2 mt-2.5 w-48 origin-top-right rounded-lg border shadow-lg ring-1 ring-black focus:outline-none">
              <div className="py-1">
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        disabled
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-sm  "
                        )}
                      >
                        All of them{" "}
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="relative mt-0.5 ">
        <div className="absolute inset-x-0 mx-auto   w-full ">
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 gap-2">
              {filteredGames.map((game) => (
                <Link
                  to={`/dashboard/${game.title.toLowerCase()} `}
                  key={game.id}
                  className="relative rounded-2xl border border-t-0 border-gray-300 bg-white/80 p-3 shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="ml-4 ">{game.title}</span>
                    <div className="text-lg text-gray-500">
                      <AiOutlineInfoCircle />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            searchInput.length >= 3 && (
              <div className="relative rounded-2xl border border-t-0 border-gray-300 bg-white/80 p-3 shadow-md">
                <div className="py-2 text-gray-500">
                  No matching games found.
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
