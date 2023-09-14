import { Menu } from "@headlessui/react";
import { AiOutlineSearch } from "react-icons/ai";

export default function DashboardSearchBar() {
  return (
    <div>
      <div className="  ">
        <div className="flex items-center justify-between  rounded-3xl mb-8 mt-7  lg:gap-4 shadow-[0px_0px_6px_rgba(0,0,0,0.3)] ">
          <div className="relative rounded-lg flex items-center w-[90%] sm:w-[100%]">
            <input
              type="text"
              className="rounded-full rounded-e-none sm:rounded-lg sm:mx-3 py-1.5 ml-1 text-[0.9rem]  md:py-2 px-9  sm:mr-2 w-[100%] border-none focus:outline-none"
              placeholder="Search the name
              "
            />
            <AiOutlineSearch className="absolute mx-3 text-lg sm:mx-4" />
          </div>

          <Menu
            as="div"
            className="relative p-2 w-16 border-l-[1px] border[rgba(0,0,0,0.12)] sm:py-0 sm:border-0 sm:w-fit sm:inline-block text-left  "
          ></Menu>
        </div>
      </div>
    </div>
  );
}
