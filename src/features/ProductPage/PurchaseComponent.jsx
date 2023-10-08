/* eslint-disable tailwindcss/no-custom-classname */
import BreadCrumbs from "./BreadCrumbs";
import { useState } from "react";
import PurchaseUser from "./PurchaseUser";
import useEqProduct from "./useSpProduct";
import { decimalConversion } from "../../utils/helpers";
import { AiOutlineLoading } from "react-icons/ai";
import ProductImage from "./ProductImage";
import PurchaseBuyBtn from "./PurchaseBuyBtn";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export default function ProductPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { product, loading, productError } = useEqProduct(id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { session } = useAuth();
  if (productError) return <h1>ERROR</h1>;
  if (loading || !product) {
    return (
      <div className="flex h-screen items-center justify-center">
        <AiOutlineLoading className="animate-spin text-5xl text-gray-500 sm:text-6xl lg:text-7xl" />
      </div>
    );
  }

  const onNextClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product[0]?.images.length
    );
  };

  function subQuantity() {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
  }

  function addQuantity() {
    if (product[0].stock > quantity) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  }

  const productPrice = product[0]?.price;
  const sellerProductId = product[0].id;
  const imageUrl =
    product[0].images === null ? null : product[0]?.images[currentImageIndex];
  const convertedPrice = decimalConversion(product[0]?.price);
  const description = product[0]?.description;
  const productTitle = product[0].game_id.title;
  return (
    <div className="pb-20">
      {session?.user?.id === product[0]?.seller_id?.id && (
        <div className="mb-6 border-gray-500 border animate-pulse rounded-lg bg-gray-50 p-3.5 text-center shadow-lg">
          <p className="text-sm text-gray-900">
            You are currently viewing your own profile.
          </p>
        </div>
      )}
      <div className="mx-auto mt-4 max-w-7xl p-4 sm:p-8">
        <BreadCrumbs id={id} />
        <div className="my-6 mb-10 ml-1 flex justify-between">
          <h1 className="pt-2 text-lg font-bold text-gray-700 sm:text-xl lg:text-[1.3rem]">
            {product[0]?.title}
          </h1>
        </div>

        <div className="flex flex-col gap-10 md:flex-row lg:gap-20">
          <div className="flex flex-col gap-6 rounded-lg border-[1px] p-4 sm:p-8 md:w-2/3 md:gap-8 lg:w-3/5">
            <div className="">
              <PurchaseUser user={product} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-md mb-2 font-semibold sm:text-lg md:text-xl">
                Product Info
              </h3>
              <div className="flex w-fit flex-wrap gap-2 text-[10px] sm:text-xs">
                <span className="w-fit rounded-lg bg-gray-300 p-2">
                  Item Type: {product[0]?.category_id?.name}
                </span>
                <span className="w-fit rounded-lg bg-gray-300 p-2">
                  Game: {product[0]?.game_id?.title}
                </span>
                {product[0]?.options?.map((option, index) => {
                  const optionObj = JSON.parse(option);
                  const key = Object.keys(optionObj)[0];
                  const value = optionObj[key];

                  return (
                    <span
                      className="w-fit rounded-lg bg-gray-300 p-2"
                      key={index}
                    >
                      {key}: {value}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-md font-semibold sm:text-lg md:text-xl">
                Details
              </h3>
              <div
                className="text-[0.86rem] tracking-wide text-gray-800 pb-4 sm:pb-0 sm:md:text-sm"
                style={{ whiteSpace: "pre-wrap" }}
              >
                <p>{description}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-gray-100 p-6 sm:w-full md:w-1/2 lg:w-2/5">
            <div className="w-full">
              <ProductImage
                imageUrl={imageUrl}
                currentImageIndex={currentImageIndex}
                onNextClick={onNextClick}
              />
            </div>{" "}
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

              <PurchaseBuyBtn
                productPrice={productPrice}
                sellerProductId={sellerProductId}
                productTitle={productTitle}
                sellerProductId2={product[0]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
