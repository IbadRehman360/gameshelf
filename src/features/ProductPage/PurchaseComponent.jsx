import { useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import { useState } from "react";
import PurchaseUser from "./PurchaseUser";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductImages from "./ProductImages";
import "swiper/css";
export default function ProductPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const images = Array.from({ length: 4 }, (_, index) => `${index + 1}.webp`);

  function subQuantity() {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
  }

  function addQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }
  return (
    <div className="pb-20">
      <div className="mx-auto mt-4 max-w-7xl p-4 sm:p-8">
        <BreadCrumbs id={id} />
        <div className="my-6 mb-10 ml-1 flex justify-between">
          <h1 className="text-lg font-bold sm:text-xl md:text-2xl">
            [Asia] TL52 - Jing Yuan, Gepard, Himeko (E1)
          </h1>
          {/* <div className="bg-blue-50 py-4 px-36 flex justify-between gap-10 text-auto rounded-md">
            <p>Free Insurance</p>
            <p> 14 Days</p>
          </div> */}
        </div>

        <div className="flex flex-col gap-24 md:flex-row">
          <div className="flex flex-col gap-6 rounded-lg border-[1px] p-4 sm:p-8 md:w-1/2 md:gap-8 lg:w-3/5">
            <div className="">
              <PurchaseUser />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="mb-2 font-semibold sm:text-lg md:text-xl">
                Product Info
              </h3>
              <div className="flex w-fit flex-wrap gap-2 text-[10px] sm:text-xs">
                <span className="w-fit rounded-lg bg-gray-300 p-2">
                  Item Type: Account
                </span>
                <span className="w-fit rounded-lg bg-gray-300 p-2">
                  Game: CSGO
                </span>
                <span className="w-fit rounded-lg bg-gray-300 p-2">
                  Account Level: 70
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold sm:text-lg md:text-xl">
                Details
              </h3>
              <p className="sm:md:text-sm">
                This battle-hardened account has reached the pinnacle of
                progression at Level 70. Countless battles have honed the skills
                and strategic prowess that are at your disposal. As the new
                owner of this account, you inherit not just its achievements,
                but also the thrill of surmounting insurmountable odds. T ready
                to face any challenge that lies ahead.
              </p>
              <div>
                <p>├ PC : ✔️</p>
                <p>├ IOS : ✔️ ├</p>
                <p>├ Android : ✔️ ├</p>
                <p>├ PlayStation : ⛔ └</p>
                <p> └ Xbox : ⛔</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-gray-100 p-8 sm:w-full md:w-1/2 lg:w-2/5">
            <div
              className="w-full 
      "
            >
              <Swiper
                className="flex flex-col"
                spaceBetween={0}
                slidesPerView={2}
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
              <span className="text-xs">1,000 in stock</span>
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
              <span className="text-xs">Unit price $20.99 USD</span>
            </div>
            <hr className="w-full border-[1px] border-gray-400" />
            <div className="flex w-full flex-col gap-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium">Total</h3>
                <h3 className="text-lg font-medium">$20.99</h3>
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
