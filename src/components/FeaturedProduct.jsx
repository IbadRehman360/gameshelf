import { CiHeart } from "react-icons/ci";
import { BiLeftArrow, BiSolidLeftArrow } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function FeaturedProduct() {
  return (
    <>
      <div
        className="flex flex-col p-3 sm:p-4   border-2 rounded-2xl  divide-y "
        style={{ backgroundColor: "#FCFCFC " }}
      >
      <NavLink to="/product/1" className="flex flex-col p-3 sm:p-5  border-2 rounded-2xl  divide-y">
        <div className="flex flex-col gap-1 ">
          <h5 className="sm:text-[0.7rem] mb-1 text-[0.6rem]  uppercase gap-2 lg:gap-3 sm-3  inline-flex text-gray-500">
            <img
              className="w-6 h-6 sm:w-8  sm:h-8 rounded-full"
              src="userImage/3.jpg"
            ></img>{" "}
            <span className="mt-1 sm:mt-1.5 lg:text-xs xl:text-[0.85rem] truncate">
              {" "}
              Honkai: star rail
            </span>
          </h5>
          <h3 className="sm:text-xs lg:text-sm xl:text-[0.9rem] text-[0.8rem] mt-1 mb-1  text-gray-600 leading-4 line-clamp-2 ">
            [Asia] TL52 - Jing Yuan, Gepard, Himeko (E1)
          </h3>

          <h1 className="text-yellow-500 mt-1 mb-2 md:text-[1rem] xl:text-[1.1rem] lg:mb-4 sm:text-sm text-[0.96rem] font-semibold ">
            $20.99
          </h1>
        </div>
        <div className="flex justify-between  ">
          <div className="flex items-center xl:gap-1">
            <span className="text-2xl  pt-0.5 xl:mt-2 ">•</span>
            <span className="text-xs font-semibold px-1 pt-1  xl:mt-2 lg:text-sm xl:text-[0.96rem] ">
              In stock
            </span>
          </div>
          <div className="flex gap-2  mt-1.5 items-center">
            <CiHeart color="red" className="sm:h-5  sm:w-5 h-4 w-4 xl:mt-2" />
            <span className="relative xl:mt-2 border-[1px] rounded-md font-bold text-[0.7rem]  h-fit p-0.5 px-1">
              <BiLeftArrow
                color=""
                className="absolute -left-[0.55rem] top-1/4 text-gray-200"
              />
              <BiSolidLeftArrow
                color="white"
                className="absolute   -left-[0.45rem]  top-1/4"
              />
              2
            </span>
          </div>
        </div>
      </NavLink>
  );
}
