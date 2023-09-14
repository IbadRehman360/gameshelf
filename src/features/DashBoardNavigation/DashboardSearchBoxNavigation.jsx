import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiFilter3Line } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardSearchBar() {

  return (
    <div>
      <div className="  ">
        <div className="flex items-center justify-between bg-[#fdfdfd] rounded-3xl   lg:gap-4 shadow-[0px_0px_6px_rgba(0,0,0,0.3)] sm:p-4">
          <div className="relative rounded-lg flex items-center w-[90%] sm:w-[100%]">
            <input
              type="text"
              className="rounded-full rounded-e-none sm:rounded-lg py-1.5 ml-1 bg-[#fdfdfd] text-[0.9rem]  md:py-2 px-9 sm:text-[1rem] sm:mr-2 w-[100%] border-none focus:outline-none"
              placeholder="Search for Games
              "
            />
            <AiOutlineSearch className="absolute mx-3 text-lg sm:mx-2" />
          </div>
          <div className="sm:flex justify-end  sm:ml-8 sm:gap-4 md:ml-14   space-x-4 hidden md:gap-8 lg:gap-14  w-[100%] ">
            <a
              disabled
              className="text-slate-400  text-md   font-semibold   transition duration-300"
            >
              Every one of the gaming accounts.{" "}
            </a>
            {/* <a
              href="/"
              className="text-gray-500 hover:text-gray-100 font-semibold transition duration-300"
            >
              Rank
            </a>
            <a
              href="/"
              className="text-gray-500 hover:text-gray-100 font-semibold transition duration-300"
            >
              Budget
            </a> */}
          </div>

          <Menu
            as="div"
            className="relative p-2 w-16 border-l-[1px] border[rgba(0,0,0,0.12)] sm:py-0 sm:border-0 sm:w-fit sm:inline-block text-left  "
          >
            <div>
              <Menu.Button className="inline-flex w-full justify-center sm:justify-center sm:hidden gap-x-1.5 rounded-lg rounded-l-none sm:rounded-md   px-3  py-[0.44rem] md:py-2 text-sm font-semibold text-gray-900 sm:shadow-sm sm:ring-1 sm:ring-inset sm:ring-gray-300 sm:hover:bg-gray-50">
                <RiFilter3Line className="h-5 w-5 inline-block" />
              </Menu.Button>
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
              <Menu.Items className="absolute right-0 z-10 mt-2.5 mr-2 rounded-lg w-48  origin-top-right  shadow-lg ring-1 ring-black ring-opacity-5 border focus:outline-none">
                <div className="py-1 ">
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
      </div>
    </div>
  );
}
