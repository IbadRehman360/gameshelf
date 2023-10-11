import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="relative" id="home">
      <div
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        aria-hidden="true"
      >
        {/* <div className="blur-[106px] mt-48 ml-20 h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[140px] h-32 mt-20 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div> */}
      </div>
      <div className="relative ml-auto pt-20">
        <div className="mx-auto text-center lg:w-2/3">
          <h1 className="text-[1.8rem] font-bold text-gray-800 md:text-[2.5rem] xl:text-[3rem]">
            Discover a Universe of Gaming <br />
            <span className="text-primary"> GamerShelf -</span>
          </h1>
          <p className="mt-8 text-sm leading-7 text-gray-500 lg:text-[0.98rem]">
            At GamerShelf, we welcome you to a world where gaming enthusiasts
            unite, and the possibilities are endless. As the ultimate
            destination for all things gaming, we proudly present an array of
            exhilarating gaming products that cater to your passion, excitement,
            and thirst for adventure.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <Link
              href="/"
              className="relative flex h-10 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-sm font-semibold text-white sm:text-base">
                Get started
              </span>
            </Link>
            <a
              href="#"
              className="relative flex h-10 items-center justify-center rounded-3xl border-gray-700 bg-gray-800 px-5 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <Link
                to={"/dashboard"}
                className="relative text-sm font-semibold text-white sm:text-base"
              >
                Explore Deals{" "}
              </Link>
            </a>
          </div>
          <div className="mt-16 hidden gap-20 border-y border-gray-100 py-8 dark:border-gray-800 sm:flex">
            <div>
              <h6 className="text-lg font-semibold text-gray-700">
                The lowest price
              </h6>
              <p className="mt-2 text-[0.9rem] text-gray-500">
                Unbeatable prices without compromise.
              </p>
            </div>
            <div className="">
              <h6 className="text-lg font-semibold text-gray-700">
                The fastest on the market
              </h6>
              <p className="mt-2 text-[0.9rem] text-gray-500">
                Swift delivery for instant gaming gratification.
              </p>
            </div>
            <div className="">
              <h6 className="text-lg font-semibold text-gray-700">
                The most loved
              </h6>
              <p className="mt-2 text-[0.9rem] text-gray-500">
                Cherished by gamers, backed by community.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./images/clients/microsoft.svg"
              className="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./images/clients/airbnb.svg"
              className="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./images/clients/google.svg"
              className="h-9 w-auto m-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./images/clients/ge.svg"
              className="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./images/clients/netflix.svg"
              className="h-8 w-auto m-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="./images/clients/google-cloud.svg"
              className="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
