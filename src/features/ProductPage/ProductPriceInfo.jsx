import { useState } from "react";
import { decimalConversion } from "../../utils/helpers";

function ProductPriceInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const convertedPrice = decimalConversion(product[0]?.price);

  function subQuantity() {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
  }

  function addQuantity() {
    if (product[0].stock > quantity) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  }
  return (
    <>
      <div className="flex flex-col gap-4 text-center">
        <span className="text-xs tracking-wide">
          {product[0].stock} in stock
        </span>
        <div className="flex items-center gap-2 rounded-full bg-white p-1">
          <button
            className="btn btn-sm rounded-full bg-gray-200"
            onClick={() => subQuantity()}
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            className="btn btn-sm rounded-full bg-navy-blue text-white hover:bg-[#323447]"
            onClick={() => addQuantity()}
          >
            +
          </button>
        </div>
        <span className="text-xs tracking-wider">
          Unit price {convertedPrice} USD
        </span>
      </div>
      <hr className="w-full border-[1px] border-gray-400" />
      <div className="flex w-full flex-col gap-4">
        <div className="flex justify-between">
          <h3 className="text-[1.05rem] font-medium text-gray-600 sm:text-[1.1rem] xl:text-[1.15rem]">
            Total
          </h3>
          <h3 className="text-[1rem] font-medium tracking-wide text-gray-600 sm:text-[1.1rem] xl:text-[1.15rem]">
            ${(convertedPrice * quantity).toFixed(2)}
          </h3>
        </div>
      </div>
    </>
  );
}

export default ProductPriceInfo;
