import { useEffect } from "react";
import FeaturedProduct from "./HomeFeatureProduct";
import useGetItem from "../../../hooks/ItemTable/useGetItem";
import { useState } from "react";
export default function FeaturedProducts() {
  const [orderBy, setOrderBy] = useState("created_at");
  const [orderDirection, setOrderDirection] = useState("asc");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, error] = useGetItem(orderBy, orderDirection);
  const [featureProduct, setFeatureProduct] = useState([]);
  const [sliceEnd, setSliceEnd] = useState();

  useEffect(() => {
    if (data) {
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
  const slide1 = featureProduct.slice(0, sliceEnd);
  const slide2 = featureProduct.slice(6, sliceEnd);

  const toggleSorting = (newOrderBy) => {
    if (newOrderBy === orderBy) {
      // If the same sorting option is clicked again, toggle the order direction
      setOrderDirection(orderDirection === "desc" ? "asc" : "desc");
    } else {
      // If a different sorting option is clicked, update the orderBy and set to ascending order only for "created_at"
      setOrderBy(newOrderBy);
    }
  };

  return (
    <div className="  mb-16 px-3 xl:mt-4 bg-[#fdfdfd]  ">
      <h2 className=" lg:text-[1.8rem]  text-gray-700 3xl:text-[2rem]  md:text-[1.7rem] text-[1.4rem]   font-semibold">
        Featured Products
      </h2>
      <div className="flex gap-3 my-3  mt-4 sm:mt-6 ">
        <button onClick={() => toggleSorting("created_at")}>
          <div className="flex flex-col gap-1 ">
            <h3 className="sm:text-sm text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] font-semibold  text-red-500 text-center">
              New Items
            </h3>
            <hr className="border-red-400 border-[1px] lg:w-32 md:w-28 w-24" />
          </div>
        </button>
        <button onClick={() => toggleSorting("title")}>
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
        </button>
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
            className={`block w-[28px] h-[4px] rounded-2xl mr-1 ${currentSlide === 0 ? "bg-[#f03827]" : "bg-[#888888]"
              } `}
            id="prevPage"
          />
          <a
            href="#trendingGiftCardsSlide2"
            onClick={handleNextPage}
            className={`block w-[28px] h-[4px]  rounded-2xl mr-1 ${currentSlide === 1 ? "bg-[#f03827]" : "bg-[#888888]"
              } `}
          />
        </div>
      </div>
    </div >
  );
}
