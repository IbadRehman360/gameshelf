import { useEffect, useState } from "react";
import useProduct from "../useProduct";
import FeaturedProduct from "../../../components/FeatureProducts";
import HomeProductLoaders from "../loaders/HomeProductLoaders";

export default function FeaturedProducts({ sortCriteria, setSortCriteria }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(calculateSliceEnd());
  const { items, loadingItems, isItemsError } = useProduct(
    sortCriteria.orderBy,
    sortCriteria.orderDirection
  );

  function calculateSliceEnd() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 800 && windowWidth <= 2200) {
      return 4;
    } else if (windowWidth >= 600 && windowWidth < 800) {
      return 3;
    } else if (windowWidth >= 200 && windowWidth < 600) {
      return 2;
    } else {
      return 5;
    }
  }

  useEffect(() => {
    function updateSliceEnd() {
      setSliceEnd(calculateSliceEnd());
    }

    window.addEventListener("resize", updateSliceEnd);

    return () => {
      window.removeEventListener("resize", updateSliceEnd);
    };
  }, []);

  if (loadingItems) {
    return <HomeProductLoaders />;
  }
  const products = items ? items : [];

  const handlePrevPage = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextPage = () => {
    if (currentSlide < 2) setCurrentSlide(currentSlide + 1);
  };

  const slide1 = products.slice(0, sliceEnd);
  const slide2 = products.slice(sliceEnd, 2 * sliceEnd);

  return (
    <div className="mb-16 bg-[#fdfdfd] px-3">
      <div className="carousel mt-2 w-full justify-items-stretch sm:mt-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
        <div
          id="featuredProductsSlide1"
          className="carousel-item mx-auto my-4 w-full gap-2 sm:w-full md:gap-3"
        >
          {slide1.map((product) => (
            <FeaturedProduct
              key={product.id}
              title={product.title}
              created_at={product.created_at}
              price={product.price}
              level={product.users.level}
              fullName={product.users.username}
              productID={product.id}
              games={product.games.title.toLowerCase()}
            />
          ))}
        </div>
        <div
          id="featuredProductsSlide2"
          className="carousel-item mx-auto my-4 w-full gap-2 sm:w-full md:gap-3"
        >
          {slide2.map((product) => (
            <FeaturedProduct
              key={product.id}
              title={product.title}
              created_at={product.created_at}
              price={product.price}
              level={product.users.level}
              fullName={product.users.username}
              productID={product.id}
              games={product.games.title.toLowerCase()}
            />
          ))}
        </div>
      </div>
      <div className="mt-2 flex justify-center text-xs sm:mt-4 md:mt-6">
        <p
          className="text-[0.97rem] sm:text-[1rem] md:hidden"
          style={{ letterSpacing: "0.1em" }}
        >
          {currentSlide < 1 ? "1/2" : "2/2"}
        </p>
        <div className="hidden justify-center md:flex">
          <a
            href="#featuredProductsSlide1"
            onClick={handlePrevPage}
            className={`mr-1 block h-[4px] w-[28px] rounded-2xl ${
              currentSlide === 0 ? "bg-[#f03827]" : "bg-[#888888]"
            } `}
            id="prevPage"
          />
          <a
            href="#featuredProductsSlide2"
            onClick={handleNextPage}
            className={`mr-1 block h-[4px]  w-[28px] rounded-2xl ${
              currentSlide === 1 ? "bg-[#f03827]" : "bg-[#888888]"
            } `}
          />
        </div>
      </div>
    </div>
  );
}
