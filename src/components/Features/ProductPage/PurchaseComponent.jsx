import { useParams } from "react-router-dom";
import BreadCrumbs from "../../BreadCrumbs";
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
    <div className="">
      <div className="max-w-7xl mx-auto p-4  mt-10 sm:p-8">
        <BreadCrumbs id={id} />
        <div className="flex  my-6 mb-10 ml-1 justify-between  ">
          <h1 className="text-lg  sm:text-xl md:text-2xl font-bold ">
            [Asia] TL52 - Jing Yuan, Gepard, Himeko (E1)
          </h1>
          {/* <div className="bg-blue-50 py-4 px-36 flex justify-between gap-10 text-auto rounded-md">
            <p>Free Insurance</p>
            <p> 14 Days</p>
          </div> */}
        </div>

        <div className="flex flex-col md:flex-row gap-24">
          <div className="md:w-1/2 lg:w-3/5 p-4 sm:p-8 flex flex-col gap-6 md:gap-8 rounded-lg border-[1px]">
            <div className=" ">
              <PurchaseUser />
            </div>
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
            <div className="flex flex-col gap-4">
              <h3 className="text-md sm:text-lg md:text-xl font-semibold">
                Details
              </h3>
              <p className="text-sm sm:text-md md:text-md">
                This battle-hardened account has reached the pinnacle of
                progression at Level 70. Countless battles have honed the skills
                and strategic prowess that are at your disposal. The path to
                mastery has been paved with dedication, and now the time has
                come to rise above all challenges. As the new owner of this
                account, you inherit not just its achievements, but also the
                thrill of surmounting insurmountable odds. The trials of the
                past have molded it into a beacon of prowess, ready to face any
                challenge that lies ahead.
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

          <div className="sm:w-full md:w-1/2 lg:w-2/5 flex flex-col items-center justify-center p-8 gap-6 bg-gray-100 rounded-lg">
            <div
              className="w-full 
      "
            >
              <Swiper
                className="flex flex-col  "
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
    </div>
  );
}
