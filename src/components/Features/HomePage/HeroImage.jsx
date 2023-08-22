import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const darkSlides = [0, 1, 2, 3, 8, 6];
export default function HeroImages({ index, imageUrl }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="h-[32vh] w-full sm:h-[40vh] md:h-[46vh] border-4 border-black  lg:h-[52vh]">
        <img
          className=" object-cover w-full h-full"
          src={`${imageUrl}`}
          alt={`bg ${index}`}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full opacity-40 z-10 bg-black"></div>
      <nav
        className="z-50 absolute top-0 right-0 flex items-center justify-between p-2 md:p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1 justify-end">
          <a
            href="/login"
            className={`sm:text-sm text-[0.8rem]  font-semibold md:text-[1rem]  hover:text-stone-200  mt-4 sm:mr-4 mr-2 md:mt-0 leading-6 lg:text-[1.1rem] ${
              darkSlides.includes(index) ? "text-white " : "text-gray-900"
            } sm:text-gray-900"`}
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <header className="absolute top-1/2 left-1/2 -translate-y-1/2 mt-4 -translate-x-1/2 z-50 w-full">
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5  text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>

        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-[1.7rem]    2xl:text-[2.35rem]   tracking-wide  mb-2 lg:text-3xl   font-bold text-white ">
            Discover the World of{" "}
            <span className="text-orange-600">GameShelf</span>
          </h2>
          <h3 className=" text-gray-100 text-[0.7rem] sm:mt-3 sm:text-[0.82rem] 2xl:mb-4 mt-3 mx-4   lg:mt-4  md:mt-5 md:text-[0.9rem]   2xl:text-[1rem] lg:text-[0.9rem] tracking-normal 2xl:mt-8   leading-loose md:text-md ">
            <p>
              Elevate your gaming with GameShelf&apos;s exclusive offerings.
            </p>
            <p className="sm:hidden block">Explore a vast library of games</p>
            <p className="hidden sm:block">
              <p>
                Explore a vast library of games gear up with accessories, Join
                us for an immersive gaming journey like no other.
              </p>
            </p>
          </h3>
          <div className="my-4 sm:my-0 sm:mt-6 flex lg:mt-8 mt-6  gap-x-6 lg:gap-x-8 justify-center align-middle items-center text-center  place-self-center">
            <a
              href="#"
              className="  text-[0.55rem]   bg-rose-600 hover:bg-rose-500 sm:text-xs md:w-28 md:h-10 lg:w-32  h-8 sm:h-10  2xl:text-[1.03rem] 2xl:h-14  2xl:w-38transition w-20  flex justify-center items-center rounded-md  lg:py-4 text-sm font-semibold text-gray-200 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Selling
            </a>

            <a
              href="#"
              className="text-[0.55rem]   font-semibold border-[1px] p-3  sm:text-xs w-fit h-8 sm:h-10  2xl:text-[1.03rem] 2xl:h-14  2xl:w-38transition flex justify-center items-center rounded-md  lg:py-4 text-sm text-white bg-gray-800  hover:bg-gray-600 opacity-80 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
            >
              Find great deals <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
