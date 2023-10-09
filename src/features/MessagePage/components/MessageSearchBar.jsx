import { Menu } from "@headlessui/react";
import { AiOutlineSearch } from "react-icons/ai";

export default function DashboardSearchBar() {
  return (
    <div>
      <div className="">
        <div className="mb-8 mt-7 flex items-center justify-between rounded-3xl shadow-[0px_0px_6px_rgba(0,0,0,0.3)] lg:gap-4">
          <div className="relative flex w-[90%] items-center rounded-lg sm:w-[100%]">
            <input
              type="text"
              className="ml-1 w-[100%] rounded-full rounded-e-none border-none px-9 py-1.5 text-[0.9rem] focus:outline-none sm:mx-3 sm:mr-2 sm:rounded-lg md:py-2"
              placeholder="Search the name
              "
            />
            <AiOutlineSearch className="absolute mx-3 text-lg sm:mx-4" />
          </div>
          <Menu
            as="div"
            className="relative w-16 border-l-[1px] p-2 text-left sm:inline-block sm:w-fit sm:border-0 sm:py-0"
          ></Menu>
        </div>
      </div>
    </div>
  );
}
