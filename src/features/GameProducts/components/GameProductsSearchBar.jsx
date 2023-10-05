import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiFilter3Line } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardSearchBar() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <div className="">
        <div className="mb-8 mt-7 flex items-center justify-between rounded-3xl shadow-[0px_0px_6px_rgba(0,0,0,0.3)] sm:p-4 lg:gap-4">
          <div className="relative flex w-[90%] items-center rounded-lg sm:w-[30%]">
            <input
              type="text"
              className="w-[100%] rounded-full rounded-e-none border-none px-8 py-1.5 text-[0.9rem] focus:outline-none sm:mr-2 sm:rounded-lg md:py-2"
              placeholder="Find Offers"
            />
            <AiOutlineSearch className="absolute mx-3 sm:mx-1" />
          </div>
          <div className="hidden w-[100%] flex-1 space-x-4 sm:ml-8 sm:flex sm:gap-4 md:ml-14 md:gap-8 lg:gap-14">
            <a
              href="#"
              className="font-semibold text-gray-500 transition duration-300 hover:text-gray-400"
            >
              Server
            </a>
            <a
              href="#"
              className="font-semibold text-gray-500 transition duration-300 hover:text-gray-400"
            >
              Rank
            </a>
            <a
              href="#"
              className="font-semibold text-gray-500 transition duration-300 hover:text-gray-400"
            >
              Budget
            </a>
          </div>

          <Menu
            as="div"
            className="relative w-16 border-l-[1px] p-2 text-left sm:inline-block sm:w-fit sm:border-0 sm:py-0"
          >
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-lg rounded-l-none bg-white px-3 py-[0.44rem] text-sm font-semibold text-gray-900 sm:hidden sm:justify-center sm:rounded-md sm:bg-slate-50 sm:shadow-sm sm:ring-1 sm:ring-inset sm:ring-gray-300 sm:hover:bg-gray-50 md:py-2">
                <RiFilter3Line className="inline-block h-5 w-5" />
              </Menu.Button>
            </div>

            <div>
              <label className="hidden items-center gap-3 text-sm font-semibold text-black sm:flex">
                <span className="text-gray-500">Online Seller</span>
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black focus:outline-none">
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
