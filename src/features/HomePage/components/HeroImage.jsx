import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";
import useGetUser from "../../../layouts/getUser";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const darkSlides = [0, 1, 2, 3, 4, 5, 8, 7, 6];

export default function HeroImages({ index, imageUrl }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { session } = useAuth();
  const user = session ? useGetUser(session.user.id)?.user || [] : [];

  return (
    <div className="relative">
      <div className="h-[32vh] w-full border-b    object-contain border-gray-400 sm:h-[52vh] md:h-[55vh] lg:h-[55vh] xl:h-[44vh]">
        <img
          className="h-full w-full object-cover"
          src={`/HeroImages/${imageUrl}`}
          alt={`bg ${index}`}
        />
      </div>
      <div className="absolute left-1/2 top-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-black opacity-40"></div>
      <nav
        className="absolute right-0 top-0 z-50 flex items-center justify-between p-2 md:p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1 justify-end">
          {!session && (
            <NavLink
              to="/about"
              className={`mr-2 mt-4  text-[0.8rem] font-semibold  leading-6  hover:text-stone-50 sm:mr-4 sm:text-sm md:mt-0 md:text-[1rem] lg:text-[1rem] ${
                darkSlides.includes(index) ? "text-white " : "text-gray-900"
              }`}
            >
              About Us <span aria-hidden="true">&rarr;</span>
            </NavLink>
          )}
        </div>
      </nav>
      <header className="absolute left-1/2 top-1/2 z-50 mt-4 w-full -translate-x-1/2 -translate-y-1/2">
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#fdfdfd] p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>

        <div className="text-center">
          <h2 className="mb-2 text-xl font-bold tracking-wide text-white sm:text-2xl md:text-[1.7rem] lg:text-3xl 2xl:text-[2.35rem]">
            Discover the World of{" "}
            <span className="text-orange-600">GameShelf</span>
          </h2>
          <h3 className="mx-4 mt-3 text-[0.6rem] leading-loose tracking-normal text-gray-100 sm:mt-3 sm:text-[0.65rem] md:mt-5 md:text-[0.7rem] lg:mt-4 lg:text-[0.9rem] 2xl:mb-4 2xl:mt-8 2xl:text-[1rem]">
            <p
              className=" font-semibold tracking-wider"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
            >
              Elevate your gaming with GameShelf&apos;s exclusive offerings.
            </p>
            <p
              className="font-semibold  block sm:hidden tracking-wider"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
            >
              Explore a vast library of games
            </p>

            <p className="hidden   sm:block">
              <p>
                Explore a vast library of games gear up with accessories, Join
                us for an immersive gaming journey like no other.
              </p>
            </p>
          </h3>
          <div className="my-4 mt-6 flex items-center justify-center gap-x-6 place-self-center text-center align-middle sm:my-0 sm:mt-6 lg:mt-8 lg:gap-x-8">
            <Link
              to={!session ? "login" : `/sell/${user[0]?.username}`}
              className="flex h-8 w-24 items-center justify-center  rounded-md bg-rose-600 text-[0.66rem] font-semibold text-gray-200 shadow-sm transition hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:h-9 sm:text-xs md:h-9 md:w-28 lg:h-10 lg:w-32 lg:py-4  2xl:h-14 2xl:text-[1.03rem]"
            >
              Start Selling
            </Link>

            <Link
              to="/dashboard"
              className="flex h-[34px]   sm:w-auto items-center justify-center rounded-md border-[1px] bg-gray-800 p-3 text-[0.66rem] font-semibold text-white opacity-80 shadow-sm transition hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:h-10 sm:text-xs lg:py-4 2xl:h-14 2xl:text-[1.03rem]"
            >
              Find great deals {""} <span aria-hidden="true ">→</span>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
