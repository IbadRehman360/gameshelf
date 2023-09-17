import { useEffect } from "react";
import FeaturedProduct from "./HomeFeatureProduct";
import useGetItem from "../../../hooks/ItemTable/useGetItem";
import { useState } from "react";
export default function FeaturedProducts() {
  const [orderBy, setOrderBy] = useState("created_at");
  const [orderDirection, setOrderDirection] = useState("asc");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, error] = useGetItem(orderBy, orderDirection);
  const [sliceEnd, setSliceEnd] = useState();

  const products = data;
  const handlePrevPage = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextPage = () => {
    if (currentSlide < 2) setCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    const updateSliceEnd = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 800 && windowWidth <= 2200) {
        setSliceEnd(4);
      } else if (windowWidth >= 600 && windowWidth < 800) {
        setSliceEnd(3);
      } else if (windowWidth >= 200 && windowWidth < 600) {
        setSliceEnd(2);
      } else {
        setSliceEnd(5);
      }
    };

    window.addEventListener("resize", updateSliceEnd);

    updateSliceEnd();

    return () => {
      window.removeEventListener("resize", updateSliceEnd);
    };
  }, [setOrderBy]);
  const slide1 = products.slice(0, sliceEnd);
  const slide2 = products.slice(6, sliceEnd);

  const toggleSorting = (newOrderBy) => {
    if (newOrderBy === orderBy) {
      setOrderDirection(orderDirection === "desc" ? "asc" : "desc");
    } else {
      setOrderBy(newOrderBy);
    }
  };

  return (
    <div className="mb-16 bg-[#fdfdfd] px-3 xl:mt-4">
      <h2 className="text-[1.4rem] font-semibold text-gray-700 md:text-[1.7rem] lg:text-[1.8rem] 3xl:text-[2rem]">
        Featured Products
      </h2>
      <div className="my-3 mt-4 flex gap-3 sm:mt-6">
        <button onClick={() => toggleSorting("created_at")}>
          <div className="flex flex-col gap-1">
            <h3 className="text-center text-[0.8rem] font-semibold text-red-500 sm:text-sm md:text-[1rem] lg:text-[1.1rem]">
              New Items
            </h3>
            <hr className="w-24 border-[1px] border-red-400 md:w-28 lg:w-32" />
          </div>
        </button>
        <button onClick={() => toggleSorting("title")}>
          <div className="flex flex-col gap-1">
            <h3
              className="text-center text-[0.8rem] font-semibold text-green-500 sm:text-sm md:text-[1rem] lg:text-[1.1rem]"
              style={{ color: " #22577a" }}
            >
              Most Views
            </h3>
            <hr
              className="w-24 border-[1px] border-green-500 md:w-28 lg:w-32"
              style={{ borderColor: " #22577a" }}
            />
          </div>
        </button>
      </div>

      <div className="carousel mt-2 w-full justify-items-stretch sm:mt-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
        <div
          id="featuredProductsSlide1"
          className="carousel-item mx-auto my-4 w-full gap-2 sm:w-full md:gap-3"
        >
          {slide1.map((product) => (
            <FeaturedProduct key={product.id} featureProduct={product} />
          ))}
        </div>
        <div
          id="featuredProductsSlide2"
          className="carousel-item mx-auto my-4 w-full gap-2 sm:w-full md:gap-3"
        >
          {slide2.map((product) => (
            <FeaturedProduct key={product.id} feat ureProduct={product} />
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
      <div className="mt-2 flex justify-center text-xs sm:mt-4 md:mt-6">
        <p
          className="text-[0.97rem] sm:text-[1rem] md:hidden"
          style={{ letterSpacing: "0.1em" }}
        >
          {currentSlide < 1 ? "1/2" : "2/2"}
        </p>
        <div className="hidden justify-center md:flex">
          <a
            href="#trendingGiftCardsSlide1"
            onClick={handlePrevPage}
            className={`mr-1 block h-[4px] w-[28px] rounded-2xl ${currentSlide === 0 ? "bg-[#f03827]" : "bg-[#888888]"
              } `}
            id="prevPage"
          />
          <a
            href="#trendingGiftCardsSlide2"
            onClick={handleNextPage}
            className={`mr-1 block h-[4px]  w-[28px] rounded-2xl ${currentSlide === 1 ? "bg-[#f03827]" : "bg-[#888888]"
              } `}
          />
        </div>
      </div>
    </div>
  );
}
