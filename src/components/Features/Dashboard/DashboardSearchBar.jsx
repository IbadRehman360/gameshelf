import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiFilter3Line } from "react-icons/ri";
// import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardSearchBar() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <div className="  ">
        <div className="flex items-center justify-between  rounded-3xl mb-8 mt-7 lg:gap-4 bg-gradient-to-r from-gray-600   to-gray-600    to-slate-600 shadow-md p-4">
          <div className="relative rounded-lg  flex items-center w-[90%] sm:w-[30%]">
            <input
              type="text"
              className="rounded-lg py-1.5 md:py-2 px-3 text-[0.9rem] mr-2 w-[100%] border-none focus:outline-none"
              placeholder="Find Offers"
            />
          </div>
          <div className="sm:flex flex-1 sm:ml-8 sm:gap-4 md:ml-14 space-x-4 hidden md:gap-8 lg:gap-14  w-[100%] ">
            <a
              href="/"
              className="text-white hover:text-gray-100   font-semibold transition duration-300"
            >
              Server
            </a>
            <a
              href="/"
              className="text-white hover:text-gray-100 font-semibold transition duration-300"
            >
              Rank
            </a>
            <a
              href="/"
              className="text-white hover:text-gray-100 font-semibold transition duration-300"
            >
              Budget
            </a>
          </div>

          <Menu as="div" className="relative inline-block text-left  ">
            <div>
              <Menu.Button className="inline-flex w-full justify-center sm:hidden gap-x-1.5 rounded-md  bg-slate-50 px-3  py-1.5 md:py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <RiFilter3Line className="h-5 w-5 inline-block" />
              </Menu.Button>
            </div>

            <div>
              <label className="sm:flex items-center gap-3 font-semibold text-sm hidden text-slate-50 ">
                Online Seller
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={classNames(
                    enabled ? "bg-gray-300" : "bg-gray-100",
                    "relative   inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-600 border-black   focus:ring-offset-2"
                  )}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      enabled ? "translate-x-5" : "translate-x-0",
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                      enabled ? "bg-gray-800" : "bg-gray-400" // Change this color
                    )}
                  />
                </Switch>
              </label>
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-4 py-2 text-left text-sm"
                          )}
                        >
                          Sign out
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
