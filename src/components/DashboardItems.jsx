import { CiHeart } from "react-icons/ci";
import { BiLeftArrow, BiSolidLeftArrow } from "react-icons/bi";

export default function FeaturedProduct() {
  return (
    <>
      <div
        className="flex flex-col p-3 sm:p-4   border-2 rounded-2xl  "
        style={{ backgroundColor: "#FCFCFC " }}
      >
        <div className="flex flex-col gap-1  ">
          <h3 className="sm:text-xs lg:text-sm xl:text-[0.9rem] text-[0.8rem] mt-1 mb-1   tracking-tighter   text-black   font-medium line-clamp-2 ">
            [Asia] TL52 - Jing Yuan, Gepard, Himeko (E1)
          </h3>
        </div>
        {/* <div className="flex justify-between  ">
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
        </div> */}
        <div className="mb-4 border-t-2"></div>
        <div className=" mb-4 "></div>
        <div className="sm:text-[0.5rem] mb-1 text-[0.4rem] gap-2 lg:gap-3   sm-3  inline-flex items-center">
          <img
            className="w-6 h-6 sm:w-8 mt-1.5 sm:h-8 rounded-full"
            src="userImage/3.jpg"
          />
          <p className="flex flex-col  sm:mt-1.5 lg:text-xs xl:text-[0.8rem]  tracking-tighter font-semibold text-gray-700 truncate">
            <h4 className="">Ibad Khan</h4>
            <p className="text-[10px] tracking-wide text-gray-500">Level 142</p>
          </p>
          <span className="flex-grow"></span>
          <p className="text-black mt-3 mb-2 md:text-[1rem] xl:text-[0.9rem]  sm:text-sm text-[0.96rem] font-semibold">
            $20.99
            <span className="text-gray-800 md:text-[0.5rem] xl:text-[0.6rem] ml-1 sm:text-sm text-[0.4rem] font-semibold">
              USD
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
