import { useParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import { useState } from "react";

export default function ProductPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  function subQuantity() {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
  }

  function addQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-8">
      <BreadCrumbs id={id} />
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold my-4">
        [Asia] TL52 - Jing Yuan, Gepard, Himeko (E1)
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 lg:w-3/5 p-4 sm:p-8 flex flex-col gap-6 md:gap-8 rounded-lg border-[1px]">
          <div className="flex flex-col gap-1">
            <h3 className="text-md sm:text-lg md:text-xl font-semibold mb-2">
              Product Info
            </h3>
            <div className="flex flex-wrap gap-2 w-fit text-[10px] sm:text-xs">
              <span className="p-2 bg-gray-300 w-fit rounded-lg">
                Item Type: Account
              </span>
              <span className="p-2 bg-gray-300 w-fit rounded-lg">
                Game: CSGO
              </span>
              <span className="p-2 bg-gray-300 w-fit rounded-lg">
                Account Level: 70
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-md sm:text-lg md:text-xl font-semibold">
              Details
            </h3>
            <p className="text-sm sm:text-md md:text-md">
              This battle-hardened account has reached the pinnacle of
              progression at Level 70. Countless battles have honed the skills
              and strategic prowess that are at your disposal. The path to
              mastery has been paved with dedication, and now the time has come
              to rise above all challenges.
            </p>
          </div>
        </div>
        <div className="sm:w-full md:w-1/2 lg:w-2/5 flex flex-col items-center justify-center p-8 gap-6 bg-gray-300 rounded-lg">
          <div className="flex flex-col gap-4 text-center">
            <span className="text-xs">1,000 in stock</span>
            <div className="flex gap-2 items-center bg-white rounded-full p-1">
              <button
                className="btn bg-gray-300 btn-sm rounded-full"
                onClick={() => subQuantity()}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="btn btn-sm bg-navy-blue hover:bg-[#323447] text-white rounded-full"
                onClick={() => addQuantity()}
              >
                +
              </button>
            </div>
            <span className="text-xs">Unit price $20.99 USD</span>
          </div>
          <hr className="border-gray-400 border-[1px] w-full" />
          <div className="flex flex-col w-full gap-4">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium">Total</h3>
              <h3 className="text-lg font-medium">$20.99</h3>
            </div>
            <button className="btn w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
