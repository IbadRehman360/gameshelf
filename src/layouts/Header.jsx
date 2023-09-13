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
      navigate("/")
    }
  }
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };


  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto  border-b-[1px] border-gray-500 shadow-sm px-2 sm:px-2 bg-[#3b404e]   lg:px-3 xl:px-5 ">
            <div className="flex h-16 xl:h-[90px] justify-between  sm:mx-6 mx-4 ">
              <div className="flex  lg:px-0">
                <div className="flex flex-shrink-0  items-center ">
                  <img
                    className="lg:h-8 h-8 w-9 bg-gray-100  mr-4 object-contain  rounded-xl mt-1.5 "
                    src="/logo4.png"
                    alt="Your Company"
                  />

                  <Link
                    to="/"
                    className="   tracking-[0.4rem] font-extrabold  text-gray-100 text-[1.1rem]    sm:text-[1.4rem] xl:text-[1.7rem] lg:ml-1 mt-1  min-w-fit"
                  >
                    GAMESHELF
                  </Link>
                </div>
                <div className="hidden md:ml-14 md:flex md:space-x-12   ">
                  {/* <a
                    href="/about"
                    className="inline-flex items-center border-b-2 border-transparent px-1 mt-2 lg:text-[0.95rem] text-sm font-medium text-gray-700  hover:border-gray-500  hover:text-gray-700 "
                  >
                    About Us
                  </a> */}
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end"></div>
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end"></div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  style={{ border: "1px solid" }}
                  className="relative inline-flex items-center sm:w-9 -mr-2  sm:h-9 w-8 h-8 text-gray-400 justify-center rounded-md p-1 mt-1 bg-gray-700   hover:text-gray-300 border-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
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

              {!session ? (
                <div className="hidden lg:ml-4 gap-6 lg:flex lg:items-center">
                  <NavLink
                    className=" bg-gray-50 mt-1 hover:bg-gray-100 opacity-95 active:bg-gray-400 text-black font-medium hover:shadow-md shadow text-[1.1rem] px-9 py-[6px]  rounded-full  outline-none focus:outline-none  ease-linear transition-all duration-150"
                    type="button"
                    to={"/sell"}
                  >
                    Sell
                  </NavLink>
                  <div className="relative inline-block group">
                    <img
                      src="/dollar(1).png"
                      alt="Coin Image"
                      className={`w-10 h-[36px] transform transition-transform hover:scale-110 active:scale-95 ${isClicked ? 'scale-110' : ''
                        }`}
                      onClick={handleClick}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleMouseLeave}
                    />
                    <div
                      className={`absolute ${isHovered || isClicked ? 'block' : 'hidden'
                        } w-24 p-2 bg-white border  -bottom-14 border-gray-300 rounded-lg shadow-lg transform -translate-x-1/3 left-1/3 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-50`}
                    >
                      <p className="text-gray-800 text-center font-semibold">200 Coins</p>
                    </div>
                  </div>
                  <a
                    href="/chat"
                    type="button"
                    className="relative flex-shrink-0 rounded-full    text-gray-600 hover:text-slate-500 "
                  >
                    <span className="absolute " />
                    <span className="sr-only">View notifications</span>
                    <AiFillMessage
                      className="h-[37px] w-10 m-1 text-gray-100 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      aria-hidden="true"
                    />
                  </a>
                  <Menu as="div" className="relative  flex-shrink-0">
                    <div>
                      <Menu.Button className="relative flex rounded-full   text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="absolute " />
                        <span className="sr-only">Open user menu</span>
                        <div className="mt-0.5 rounded-full">
                          <img
                            className="h-[46px] border-[1px] border-gray-800 w-[50px]     object-cover  rounded-full"
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
                              href={() => handleSignOut()}
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
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={() => handleSignOut()}
                            >
                              Log Out
                            </a>
                          )}
                        </Menu.Item>

                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : <div className="hidden lg:ml-4 gap-6 lg:flex lg:items-center">
                <NavLink
                  className=" bg-gray-50 mt-1 hover:bg-gray-100 opacity-95 active:bg-gray-400 text-black font-medium hover:shadow-md shadow text-[1.1rem] px-9 py-[6px]  rounded-full  outline-none focus:outline-none  ease-linear transition-all duration-150"
                  type="button"
                  to={"/sell"}
                >
                  Sell
                </NavLink>
                <NavLink
                  className="  bg-rose-500 hover:opacity-95 hover:bg-rose-500 mt-1 active:bg-gray-400  font-medium hover:shadow-md shadow text-[1rem]  text-gray-100 py-2 px-5  rounded-full  outline-none focus:outline-none  ease-linear transition-all duration-150"
                  type="button"
                  to={"/sell"}
                >
                  Login / Sign up
                </NavLink>
              </div>
              }
            </div>

          </div>

          <Disclosure.Panel className="lg:hidden w-full absolute z-20 bg-[#3b404e]   ">
            <div className="space-y-1  ">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-3 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                View Profile
              </Disclosure.Button>
            </div>

            <div className="border-t border-gray-200 border-b-4 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
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
                  className="relative ml-auto flex-shrink-0 rounded-full -left-1   bg-white p-1  text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <div className="relative   group">
                    <img
                      src="/dollar(1).png"
                      alt="Coin Image"
                      className={`w-9 h-8 transform transition-transform hover:scale-110 active:scale-95 ${isClicked ? 'scale-110' : ''
                        }`}
                      onClick={handleClick}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleMouseLeave}
                    />
                    <div
                      className={`absolute ${isHovered || isClicked ? 'block' : 'hidden'
                        } w-20 p-1 bg-white border  -bottom-9 border-gray-300 rounded-lg shadow-lg transform -translate-x-1/3  opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-50`}
                    >
                      <p className="text-gray-800 text-center text-xs font-semibold">200 Coins</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-3   space-y-1"
              >
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2   font-medium text-[0.95rem] text-gray-200 hover:bg-gray-100 hover:text-white"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-[0.95rem] font-medium  text-gray-200 hover:bg-gray-100 hover:text-white"
                >
                  Login
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-[0.95rem] font-medium text-gray-200 hover:bg-gray-100 hover:text-white"
                >
                  Sign Up
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  onClick={() => handleSignOut()}
                  className="block px-4 py-2 text-[0.95rem] font-medium  text-gray-200 hover:bg-gray-100 hover:text-white"
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
