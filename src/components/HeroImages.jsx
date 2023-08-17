import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function HeroImages({ index, imageUrl }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="h-[28vh] w-full sm:h-[38vh] md:h-[48vh]  lg:h-[60vh]">
        <img
          className=" object-cover w-full h-full"
          src={`${imageUrl}`}
          alt={`bg ${index}`}
        />
      </div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-2 md:p-6 lg:px-8"
          aria-label="Global"
        >
          <div className=" lg:flex lg:flex-1   lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)} // Fix this line
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
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <div className="  justify-center items-center text-center  place-self-center">
          <div className="sm:mb-0 lg:mb-10"></div>
          <h2 className="text-lg sm:text-2xl md:text-[1.7rem] 2xl:text-[2.1rem] 2xl:mb-3  md:mb-1 lg:text-3xl  xl:mt-6 font-bold text-white md:mt-4  mt-4">
            Discover the World of{" "}
            <span className="text-orange-600">GameShelf</span>
          </h2>
          <h3 className="text-[0.7rem] sm:text-[0.9rem] 2xl:mb-6  mx-4  2xl:text-[1.1rem] lg:text-[1rem]   leading-loose md:text-md text-white ">
            Elevate your gaming with GameShelf's exclusive offerings.
            <br></br>
            Explore a vast library of games, gear up with accessories, Join us
            for an immersive gaming journey like no other.
            <br></br>
          </h3>
          <div className="mt-10 flex gap-x-6 lg:gap-x-8 justify-center align-middle items-center text-center  place-self-center">
            <a
              href="#"
              className=" bg-red-600 text-[0.7rem] sm:text-sm md:w-28 md:h-10 lg:w-32  h-10  2xl:text-[1.03rem] 2xl:h-14  2xl:w-38transition w-24  flex justify-center items-center rounded-md  lg:py-4 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Selling
            </a>

            <a
              href="#"
              className="  font-semibold border-2 md:p-3    text-[0.7rem] sm:text-sm md:w-28 md:h-10 lg:w-32  h-10  2xl:text-[1.03rem] 2xl:h-14  2xl:w-38transition w-24  flex justify-center items-center rounded-md  lg:py-4 text-sm text-white bg-gray-400 opacity-70 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
            >
              Find great deals <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>{" "}
      </header>
    </div>
  );
}
