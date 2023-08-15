import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

export function LoggedInCta({ onToggle }) {
  return (
    <div className="hidden sm:flex gap-2 lg:gap-6 items-center">
      <Link
        onClick={onToggle}
        className="bg-gray-200 rounded-full text-gray-800 p-1"
      >
        <AiOutlineShoppingCart className="text-2xl" />
      </Link>
      <Link className="bg-gray-200 rounded-full text-gray-800 p-1">
        <AiOutlineHeart className="text-2xl" />
      </Link>
      <Link className="text-sm hover:bg-[#323445] p-2 rounded-full">
        username&gt;
      </Link>
    </div>
  );
}

export function NotLoggedInCta({ onToggle }) {
  return (
    <div
      className=" bg-slate-50 border-t py-2 fixed z-10 bottom-0 left-0 w-full shadow-xl flex justify-center items-center gap-8  opacity-95 text-sm font-light 
        sm:text-xs sm:bg-transparent sm:max-w-fit sm:border-none sm:static sm:py-0 sm:z-0 sm:shadow-none sm:gap-1 
        lg:gap-6 lg:text-sm"
    >
      <Link
        onClick={onToggle}
        className="border border-black py-2 w-[34%] h-[36px] justify-center text-center rounded text-black hover:bg-navy-blue hover:text-white
          sm:w-fit sm:rounded-full sm:px-4  sm:bg-[#323445] sm:border-none sm:text-white sm:font-medium sm:hover:bg-[#20212d]
          lg:px-6"
      >
        Sell
      </Link>
      <Link
        to="/login"
        className="border border-black py-2  w-[40%]  h-[36px]  text-center rounded bg-navy-blue hover:bg-transparent hover:text-black
          sm:w-fit sm:rounded-full sm:p-2 sm:bg-[#323445] sm:border-none sm:text-white sm:font-medium sm:hover:text-white sm:hover:bg-[#20212d]
          lg:px-6
        "
      >
        Log In/Sign Up
      </Link>
    </div>
  );
}
