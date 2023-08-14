import FeaturedProduct from "./FeaturedProduct";
import { useState } from "react";
export default function FeaturedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevPage = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextPage = () => {
    if (currentSlide < 2) setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="max-w-7xl mx-auto pt-10 px-5 ">
      <h2 className="text-2xl font-bold">Featured Products</h2>
      <div className="flex gap-3 my-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-yellow-500 text-center">
            New Items
          </h3>
          <hr className="border-yellow-500  border-[1px] w-28" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-purple-700 text-center">
            Most Views
          </h3>
          <hr className="border-purple-700 border-[1px] w-28" />
        </div>
      </div>

      <div className="carousel w-full md:grid md:grid-cols-2 lg:hidden justify-items-stretch md:gap-5">
        <div
          id="featuredProductsSlide1"
          className="carousel-item w-full gap-3 md:gap-5"
        >
          <FeaturedProduct />
          <FeaturedProduct />
        </div>
        <div
          id="featuredProductsSlide2"
          className="carousel-item w-full gap-3 md:gap-5"
        >
          <FeaturedProduct />
          <FeaturedProduct />
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-5 gap-5">
        <FeaturedProduct />
        <FeaturedProduct />
        <FeaturedProduct />
        <FeaturedProduct />
        <FeaturedProduct />
      </div>

      <div className="flex md:hidden justify-center mt-14">
        <a
          href="#featuredProductsSlide1"
          onClick={handlePrevPage}
          className={`block w-[25px] h-[3px] rounded-2xl mr-1 ${
            currentSlide === 0 ? "bg-[#f03827]" : "bg-[#888888]"
          } `}
          id="prevPage"
        />
        <a
          href="#featuredProductsSlide2"
          onClick={handleNextPage}
          className={`block w-[25px] h-[3px] rounded-2xl ${
            currentSlide === 0 ? "bg-[#888888]" : "bg-[#f03827]"
          } `}
          id="nextPage"
        />
      </div>
    </div>
  );
}
