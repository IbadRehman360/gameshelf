import { useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import { useState } from "react";
import PurchaseUser from "./PurchaseUser";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductImages from "./ProductImages";
import "swiper/css";
import useEqProduct from "./useSpProduct";
import { decimalConversion } from "../../utils/helpers";

export default function ProductPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const images = Array.from({ length: 4 }, (_, index) => `${index + 1}.webp`);
  const { product, loading, productError } = useEqProduct(id);

  function subQuantity() {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
  }
  function addQuantity() {
    if (product[0].stock > quantity) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  }

  if (!product || loading) {
    return (
      <>
        <h1>h</h1>
        <h1>w</h1>
        <h1>h</h1>
      </>
    );
  }

  const convertedPrice = decimalConversion(product[0]?.price);
  const description = product[0]?.description;
  const words = description?.split(" ");
  const firstHalf = words?.slice(0, 140).join(" ");
  const secondHalf = words?.slice(140).join(" ");
  return (
    <div className="pb-20">
      <div className="mx-auto mt-4 max-w-7xl p-4 sm:p-8">
        <BreadCrumbs id={id} />
        <div className="my-6 mb-10 ml-1 flex justify-between">
          <h1 className="pr-14 pt-4 text-lg font-bold sm:text-xl lg:text-2xl ">
            {product[0]?.title}
          </h1>
        </div>

        <div className="flex flex-col gap-10 md:flex-row lg:gap-20">
          <div className="flex flex-col gap-6 rounded-lg border-[1px] p-4 sm:p-8 md:w-2/3 md:gap-8 lg:w-3/5">
            <div className="">
              <PurchaseUser user={product} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="mb-2 font-semibold sm:text-lg md:text-xl">
                Product Info
              </h3>
              <div className="flex w-fit flex-wrap gap-2 text-[10px] sm:text-xs">
                <span className="w-fit rounded-lg bg-gray-300 p-2">
                  Item Type: {product[0]?.category_id?.name}
                </span>
                <span className="w-fit rounded-lg bg-gray-300 p-2">
                  Game: {product[0]?.game_id?.title}
                </span>
                <span className="w-fit rounded-lg bg-gray-300 p-2">
                  Account Level: 70
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold sm:text-lg md:text-xl">Details</h3>
              <p className="sm:md:text-sm">{firstHalf}</p>
              <div>{secondHalf}</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-gray-100 p-6 sm:w-full md:w-1/2 lg:w-2/5">
            <div
              className="w-full 
      "
            >
              <Swiper
                className="flex flex-col"
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
              >
                {images.map((imageUrl, index) => (
                  <SwiperSlide key={imageUrl}>
                    <ProductImages index={index} imageUrl={imageUrl} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <span className="text-xs  tracking-wide">
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
              <span className="text-xs   tracking-wider">
                Unit price {convertedPrice} USD
              </span>
            </div>
            <hr className="w-full border-[1px] border-gray-400" />
            <div className="flex w-full flex-col gap-4">
              <div className="flex justify-between">
                <h3 className="text-[1.1rem] font-medium text-gray-700 xl:text-[1.15rem]">
                  Total
                </h3>
                <h3 className="text-[1rem] font-medium tracking-wide  text-gray-700 sm:text-[1.1rem] xl:text-[1.15rem]">
                  ${(convertedPrice * quantity).toFixed(2)}
                </h3>
              </div>
              <div className="mt-4 rounded-lg border border-gray-200">
                <button className="btn w-full bg-white">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
