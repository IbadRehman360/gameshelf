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
    <div className="  mb-16  xl:mt-4  ">
      <h2 className=" lg:text-[1.8rem] 3xl:text-[1.9rem]  md:text-[1.7rem] text-[1.5rem]    font-semibold">
        Featured Products
      </h2>
      <div className="flex gap-3 my-3  ">
        <div className="flex flex-col gap-1 ">
          <h3 className="sm:text-sm text-[0.8rem] md:text-[1rem]  font-semibold  text-yellow-500 text-center">
            New Items
          </h3>
          <hr className="border-yellow-500  border-[1px] md:w-28 w-24" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="sm:text-sm text-[0.8rem] md:text-[1rem]  font-semibold text-purple-700 text-center">
            Most Views
          </h3>
          <hr className="border-purple-700 border-[1px]  md:w-28 w-24" />
        </div>
      </div>
      <div className="carousel w-full  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5  justify-items-stretch md:gap-5 mt-1">
        <div
          id="featuredProductsSlide1"
          className="carousel-item sm:w-full w-full mx-auto mt-4  gap-3  mb-4    md:gap-5"
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
          className="carousel-item sm:w-full w-full mx-auto mt-4  gap-3 mb-4   md:gap-5"
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
      <div className="flex justify-center text-xs mt-2 md:mt-6 sm:mt-4">
        <p
          className="md:hidden  text-[0.97rem] sm:text-[1rem] "
          style={{ letterSpacing: "0.1em" }}
        >
          {currentSlide < 1 ? "1/2" : "2/2"}
        </p>
        <div className="hidden md:flex justify-center">
          <a
            href="#trendingGiftCardsSlide1"
            onClick={handlePrevPage}
            className={`block w-[28px] h-[4px] rounded-2xl mr-1 ${
              currentSlide === 0 ? "bg-[#f03827]" : "bg-[#888888]"
            } `}
            id="prevPage"
          />
          <a
            href="#trendingGiftCardsSlide2"
            onClick={handleNextPage}
            className={`block w-[28px] h-[4px]  rounded-2xl mr-1 ${
              currentSlide === 1 ? "bg-[#f03827]" : "bg-[#888888]"
            } `}
          />
        </div>
      </div>
    </div>
  );
}
