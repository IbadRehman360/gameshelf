import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { AiFillMessage } from "react-icons/ai";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
// import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { signOutUser, session } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    if (signOutUser()) {
      navigate("/");
    }
  }
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto border-b-[1px] border-gray-500 bg-[#3b404e] px-2 shadow-sm sm:px-2 lg:px-3 xl:px-5">
            <div className="mx-4 flex h-16 justify-between sm:mx-6 md:h-[70px] xl:h-[90px]">
              <div className="flex lg:px-0">
                <div className="flex shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="mr-4 mt-1.5 h-8 w-9 rounded-xl bg-gray-100 object-contain lg:h-8"
                      src="/logo4.png"
                      alt="Your Company"
                    />
                  </Link>

                  <Link
                    to="/"
                    className="mt-1 min-w-fit text-[1.1rem] font-extrabold tracking-[0.4rem] text-gray-100 sm:text-[1.4rem] lg:ml-1 xl:text-[1.7rem]"
                  >
                    GAMESHELF
                  </Link>
                </div>
                <div className="hidden md:ml-14 md:flex md:space-x-12">
                  {/* <a
                    href="/about"
                    className="inline-flex items-center border-b-2 border-transparent px-1 mt-2 lg:text-[0.95rem] text-sm font-medium text-gray-700 hover:border-gray-500 hover:text-gray-700"
                  >
                    About Us
                  </a> */}
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end"></div>
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end"></div>
              <div className="flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  style={{ border: "1px solid" }}
                  className="relative -mr-2 mt-1 inline-flex h-8 w-8 items-center justify-center rounded-md border-white bg-gray-700 p-1 text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:h-9 sm:w-9"
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

              {session ? (
                <div className="hidden gap-6 md:flex md:items-center lg:ml-4">
                  <NavLink
                    className="mt-1 rounded-full bg-gray-50 px-9 py-[6px] text-[1.02rem] font-medium text-black opacity-95 shadow outline-none transition-all duration-150 ease-linear hover:bg-gray-100 hover:shadow-md focus:outline-none active:bg-gray-400"
                    type="button"
                    to={"/sell/ibadkhan"}
                  >
                    Sell
                  </NavLink>
                  <div className="group relative inline-block">
                    <img
                      src="/dollar(2).png"
                      alt="Coin Image"
                      className={`h-[35px] w-10 transition-transform hover:scale-110 active:scale-95 ${
                        isClicked ? "scale-110" : ""
                      }`}
                      onMouseEnter={handleHover}
                    />
                    <div
                      className={`absolute ${
                        isHovered || isClicked ? "block" : "hidden"
                      } -bottom-14 left-1/3 z-50 w-24  -translate-x-1/3 rounded-lg border border-gray-300 bg-white p-2 opacity-0 shadow-lg transition-all duration-300 ease-in-out group-hover:opacity-100`}
                    >
                      <p className="text-center font-semibold text-gray-800">
                        200 Coins
                      </p>
                    </div>
                  </div>
                  <a
                    href="/chat"
                    type="button"
                    className="relative shrink-0 rounded-full text-gray-600 hover:text-slate-500"
                  >
                    <span className="absolute" />
                    <span className="sr-only">View notifications</span>
                    <AiFillMessage
                      className="m-1 h-[36px] w-10 text-gray-100 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      aria-hidden="true"
                    />
                  </a>
                  <Menu as="div" className="relative shrink-0">
                    <div>
                      <Menu.Button className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="absolute" />
                        <span className="sr-only">Open user menu</span>
                        <div className="mt-0.5 rounded-full">
                          <img
                            className="h-[46px] w-[50px] rounded-full border-[1px] border-gray-800 object-cover"
                            src="/ProfileImg2.jpg"
                            alt=""
                          />
                        </div>
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/profile/ibadkhan"
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
                            <button
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block  text-start pl-4   w-full py-2 text-sm text-gray-700"
                              )}
                              onClick={() => handleSignOut()}
                            >
                              Log Out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                <div className="hidden gap-6 lg:ml-4 lg:flex lg:items-center">
                  <NavLink
                    className="mt-1 rounded-full bg-gray-50 px-10 py-[7px] font-medium text-[1.rem] text-black opacity-95 shadow outline-none transition-all duration-150 ease-linear hover:bg-gray-100 hover:shadow-md focus:outline-none active:bg-gray-400"
                    type="button"
                    to={"/sell/ibadkhan"}
                  >
                    Sell
                  </NavLink>
                  <NavLink
                    className="mt-1 rounded-full bg-rose-500 px-6 py-2.5 text-[0.9rem] font-medium text-gray-50 shadow outline-none transition-all duration-150 ease-linear hover:bg-rose-500 hover:opacity-95 hover:shadow-md focus:outline-none active:bg-gray-400"
                    type="button"
                    to={"/login"}
                  >
                    Login / Sign up
                  </NavLink>
                </div>
              )}
            </div>
          </div>

          <Disclosure.Panel className="absolute z-20 w-full bg-[#3b404e] lg:hidden">
            <div className="space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Disclosure.Button
                as="a"
                href="/profile/ibadkhan"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-3 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                View Profile
              </Disclosure.Button>
            </div>

            <div className="border-b-2 border-t border-gray-800 pb-3 pt-4">
              <div className="mt-2 flex items-center px-4">
                <div className="shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-100">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-300">
                    tom@example.com
                  </div>
                </div>
                <div
                  type="button"
                  className="relative -left-1 -top-1 ml-auto shrink-0 rounded-full bg-white p-1 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <div className="group relative">
                    <img
                      src="/dollar(1).png"
                      alt="Coin Image"
                      className={`h-8 w-9 transition-transform hover:scale-110 active:scale-95 ${
                        isClicked ? "scale-110" : ""
                      }`}
                      onMouseEnter={handleHover}
                    />
                    <div
                      className={`absolute ${
                        isHovered || isClicked ? "block" : "hidden"
                      } -bottom-9 z-50 w-20 -translate-x-1/3  rounded-lg border border-gray-300 bg-white p-1 opacity-0  shadow-lg transition-all duration-300 ease-in-out group-hover:opacity-100`}
                    >
                      <p className="text-center text-xs font-semibold text-gray-800">
                        200 Coins
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-1 pt-4">
                {!session ? (
                  <>
                    <Disclosure.Button
                      as="a"
                      href="/login"
                      className="block border-t border-gray-600 px-4 py-2 text-[0.9rem] font-medium text-gray-200 hover:bg-gray-100 hover:text-white"
                    >
                      Login
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="/register"
                      className="block px-4 py-2 text-[0.9rem] font-medium text-gray-200 hover:bg-gray-100 hover:text-white"
                    >
                      Sign Up
                    </Disclosure.Button>
                  </>
                ) : (
                  <Disclosure.Button
                    as="a"
                    onClick={() => handleSignOut()}
                    className="block border-t border-gray-600 px-2 py-3 pl-3 text-[0.9rem] font-medium text-gray-200 hover:bg-gray-100 hover:text-white"
                  >
                    Logout
                  </Disclosure.Button>
                )}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
