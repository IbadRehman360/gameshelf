import { CiHeart } from "react-icons/ci";
import { BiLeftArrow, BiSolidLeftArrow } from "react-icons/bi";

export default function FeaturedProduct() {
  return (
    <div className="flex flex-col p-2 sm:p-5 gap-3 bg-white rounded-3xl">
      <img src="/giftcards/giftcard1.svg" className="object-cover h-24 mt-3" />
        <div className="flex flex-col gap-1 mt-4">
          <h4 className="text-[0.6rem] uppercase text-gray-500">
            Honkai: star rail
          </h4>
          <h3 className="text-xs font-bold leading-5">
            [ Asia ] TL52 - Jing Yuan, Gepard, Seele, Himeko(E1)
          </h3>
        </div>
        <h1 className="text-yellow-500">$20.99</h1>
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="text-3xl">•</span>
            <span className="text-xs font-semibold px-1 pt-1">In stock</span>
          </div>
          <div className="flex gap-2 items-center">
            <CiHeart color="red" className="h-5 w-5" />
            <span className="relative border-[1px] rounded-md font-bold text-[0.7rem] h-fit p-0.5 px-1">
              <BiLeftArrow
                color=""
                className="absolute -left-[0.55rem] top-1/4 text-gray-200"
              />
              <BiSolidLeftArrow
                color="white"
                className="absolute -left-[0.45rem] top-1/4"
              />
              2
            </span>
          </div>
      </div>
    </div>
  );
}
