import { CiHeart } from "react-icons/ci";
import { BiLeftArrow, BiSolidLeftArrow } from "react-icons/bi";

export default function FeaturedProduct() {
  return (
    <>
      <div className="flex flex-col p-2 sm:p-5   bg-gray-50/75 bg-gray-50 rounded-3xl">
        <div className="flex flex-col gap-1 ">
          <h4 className="sm:text-[0.7rem] mb-2 text-[0.6rem]  uppercase gap-3  inline-flex text-gray-500">
            <img className="w-8 h-8 rounded-full" src="12.jpg"></img>{" "}
            <span className="mt-2 lg:text-xs"> Honkai: star rail</span>
          </h4>
          <h3 className="sm:text-xs lg:text-sm text-[0.8rem] mt-1 mb-1 font-semibold leading-4">
            [Asia] TL52 - Jing Yuan, Gepard, Himeko (E1)
          </h3>
          <h1 className="text-yellow-500 mt-1  lg:text-sm sm:text-sm text-[0.9rem] font-semibold ">
            $20.99
          </h1>
        </div>
        <div className="flex justify-between p-1 ">
          <div className="flex items-center">
            <span className="text-2xl mt-0.5">•</span>
            <span className="text-xs font-semibold px-1 pt-1 lg:text-sm">
              In stock
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <CiHeart color="red" className="h-5 w-5" />
            <span className="relative border-[1px] rounded-md font-bold text-[0.7rem]  h-fit p-0.5 px-1">
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
      </div>
    </>
  );
}
