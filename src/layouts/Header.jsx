import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { AiFillMessage } from "react-icons/ai";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className=" shadow  bg-[#222222]  border-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[1900px] px-2 sm:px-4 lg:px-3 xl:px-5 ">
            <div className="flex h-16 xl:h-20 justify-between ">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0  gap-4 items-center mr-8">
                  <img
                    className="lg:h-10 h-8    object-contain  w-auto  rounded-xl border-white mt-1 "
                    src="/logo3.png"
                    alt="Your Company"
                  />

                  <Link
                    to="/"
                    className=" font-bold  text-white text-[1.05rem]    sm:text-[1.3rem] xl:text-[1.45rem] lg:ml-2 mt-1  min-w-fit"
                  >
                    G A M E S H E L F
                  </Link>
                </div>
                <div className="hidden md:ml-14 md:flex md:space-x-12   ">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="/dashboard"
                    className="inline-flex items-center border-b-2 border-indigo-100 px-1 lg:text-[0.95rem] pt-1 text-sm font-medium text-gray-100  hover:text-white"
                  >
                    Dashboard
                  </a>
                  <a
                    href="/"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 lg:text-[0.95rem] text-sm font-medium text-gray-100  hover:border-gray-300 hover:text-white "
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 lg:text-[0.95rem] text-sm font-medium text-gray-100  hover:border-gray-300 hover:text-white "
                  >
                    About
                  </a>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end"></div>
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end"></div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  style={{ border: "1px solid" }}
                  className="relative inline-flex items-center sm:w-9  sm:h-9 w-8 h-8 justify-center rounded-md p-1 text-gray-200   hover:bg-navy-blue border-white  hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="hidden lg:ml-4 gap-6 lg:flex lg:items-center">
                <button
                  className=" bg-rose-500 hover:bg-red-400 active:bg-red-400   text-gray-100 font-semibold hover:shadow-md shadow text-[0.9rem] px-9 py-2  rounded-full  outline-none focus:outline-none  ease-linear transition-all duration-150"
                  type="button"
                >
                  Sell
                </button>

                <button
                  type="button"
                  className="relative flex-shrink-0 rounded-full w-8 bg-gray-100 p-1 text-gray-700 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute " />
                  <span className="sr-only">View notifications</span>
                  <AiFillMessage className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Profile dropdown */}
                <Menu as="div" className="relative  flex-shrink-0">
                  <div>
                    <Menu.Button className="relative flex rounded-full   text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute " />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-9 w-9  object-cover  rounded-full"
                        src="/ProfileImg2.jpg"
                        alt=""
                      />
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/profile/2"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/register"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign Up
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/login"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Log In
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Log Out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden w-full absolute z-20 bg-[#222222]">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                View Profile
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-slate-50">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-slate-200">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-800 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <AiOutlineShoppingCart
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="mt-3   space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base  font-medium text-slate-200 hover:bg-gray-100 hover:text-gray-800"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium  text-slate-200 hover:bg-gray-100 hover:text-gray-800"
                >
                  Login
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-slate-200 hover:bg-gray-100 hover:text-gray-800"
                >
                  Sign Up
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium  text-slate-200 hover:bg-gray-100 hover:text-gray-800"
                >
                  Logout
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
