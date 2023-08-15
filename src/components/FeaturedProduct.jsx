import { CiHeart } from "react-icons/ci";
import { BiLeftArrow, BiSolidLeftArrow } from "react-icons/bi";

export default function FeaturedProduct() {
  return (
    <div className="flex flex-col p-3 sm:p-5  bg-gray-50 rounded-3xl">
      <img
        src="/giftcards/giftcard1.svg"
        className="object-cover rounded-lg h-20 mt-0"
      />
      <div className="flex flex-col gap-1 ">
        <h4 className="sm:text-[0.6rem] text-[0.5rem] mt-2 uppercase text-gray-500">
          Honkai: star rail
        </h4>
        <h3 className="sm:text-xs text-[0.6rem]  font-semibold leading-4">
          [Asia] TL52 - Jing Yuan, Gepard, Himeko (E1)
        </h3>
        <h1 className="text-yellow-500 sm:text-sm text-[0.8rem] font-semibold ">
          $20.99
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="text-3xl">•</span>
          <span className="text-xs font-semibold px-1 pt-1">In stock</span>
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
  );
}
