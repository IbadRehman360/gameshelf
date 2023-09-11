import { useEffect } from "react";
import FeaturedProduct from "../../../components/FeatureProduct";
import useGetItem from "../../../hooks/ItemTable/useGetItem";
import { useState } from "react";
export default function FeaturedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, error] = useGetItem();
  const [featureProduct, setFeatureProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sliceEnd, setSliceEnd] = useState(5);
  useEffect(() => {
    if (data) {
      setIsLoading(false);
      setFeatureProduct(data);
    }
  }, [data, error]);

  const handlePrevPage = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextPage = () => {
    if (currentSlide < 2) setCurrentSlide(currentSlide + 1);
  };

  let sliceStart = 0;
  if (window.innerWidth <= 200) {
    setSliceEnd(2);
  } else if (window.innerWidth <= 640) {
    setSliceEnd(3);
  } else if (window.innerWidth <= 768) {
    setSliceEnd(4);
  } else if (window.innerWidth <= 1500) {
    setSliceEnd(5);
  }

  const slide1 = featureProduct.slice(sliceStart, sliceEnd);

  // Adjust the slice parameters for slide2 accordingly
  const slide2 = featureProduct.slice(sliceStart, sliceEnd);

  return (
    <div className="  mb-16 px-3 xl:mt-4 bg-[#fdfdfd]  ">
      <h2 className=" lg:text-[1.8rem]  text-gray-700 3xl:text-[2rem]  md:text-[1.7rem] text-[1.4rem]   font-semibold">
        Featured Products
      </h2>
      <div className="flex gap-3 my-3  mt-4 sm:mt-6 ">
        <div className="flex flex-col gap-1 ">
          <h3 className="sm:text-sm text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] font-semibold  text-red-500 text-center">
            New Items
          </h3>
          <hr className="border-red-400 border-[1px] lg:w-32 md:w-28 w-24" />
        </div>
        <div className="flex flex-col gap-1">
          <h3
            className="sm:text-sm text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] font-semibold text-green-500 text-center"
            style={{ color: " #22577a" }}
          >
            Most Views
          </h3>
          <hr
            className="border-green-500 border-[1px] lg:w-32   md:w-28 w-24"
            style={{ borderColor: " #22577a" }}
          />
        </div>
      </div>

      <div className="carousel w-full  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 justify-items-stretch md:gap-5 sm:mt-4  mt-2">
        <div
          id="featuredProductsSlide1"
          className="carousel-item sm:w-full w-full mx-auto mt-4 gap-2 mb-4 md:gap-3"
        >
          {slide1.map((product) => (
            <FeaturedProduct key={product.id} featureProduct={product} />
          ))}
        </div>
        <div
          id="featuredProductsSlide2"
          className="carousel-item sm:w-full w-full mx-auto mt-4 gap-2 mb-4 md:gap-3"
        >
          {slide2.map((product) => (
            <FeaturedProduct key={product.id} featureProduct={product} />
          ))}
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
