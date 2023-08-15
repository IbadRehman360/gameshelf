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
    <div className="max-w-7xl mx-auto px-4 ">
      <h2 className=" lg:text-[1.8rem] text-[1.4rem]  ml-2   font-semibold">
        Featured Products
      </h2>
      <div className="flex gap-3 my-3">
        <div className="flex flex-col gap-1">
          <h3 className="sm:text-sm text-[0.8rem] md:text-lg  font-semibold  text-yellow-500 text-center">
            New Items
          </h3>
          <hr className="border-yellow-500  border-[1px] w-24" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="sm:text-sm text-[0.8rem] md:text-lg  font-semibold text-purple-700 text-center">
            Most Views
          </h3>
          <hr className="border-purple-700 border-[1px] w-24" />
        </div>
      </div>
      <div className="carousel w-full  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5  justify-items-stretch md:gap-5 mt-1">
        <div
          id="featuredProductsSlide1"
          className="carousel-item sm:w-full w-full mx-auto   gap-3    md:gap-5"
        >
          <FeaturedProduct />
          <FeaturedProduct />
          <div className="md:flex hidden">
            <FeaturedProduct />
          </div>
          <div className="sm:flex hidden">
            <FeaturedProduct />
          </div>
          <div className="lg:flex hidden ">
            <FeaturedProduct />
          </div>
        </div>
        <div
          id="featuredProductsSlide2"
          className="carousel-item  sm:w-full  w-full    gap-3  md:gap-5 "
        >
          <FeaturedProduct />
          <FeaturedProduct />
        </div>
      </div>
      {/* <div className="hidden md:grid md-grid-col-4 lg:grid-cols-5 md:grid-cols-4 gap-5">
        <FeaturedProduct />
        <FeaturedProduct />
        <FeaturedProduct />
        <FeaturedProduct />
        <div className="lg:flex md:hidden">
          <FeaturedProduct />
        </div>
      </div> */}
      <div className="hidden md:flex justify-center mt-9">
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
