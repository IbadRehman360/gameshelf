import { useEffect, useState } from "react";
import HomeProductLoaders from "../loaders/HomeProductLoaders";
import useProduct from "../useProduct";
import FeaturedProduct from "../../../components/FeatureProducts";

export default function FeaturedProducts() {
  const [orderBy, setOrderBy] = useState("created_at");
  const [orderDirection, setOrderDirection] = useState("asc");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(calculateSliceEnd());

  const { items, loadingItems, isItemsError } = useProduct(
    orderBy,
    orderDirection
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
  const products = items && items[0] ? items[0] : [];
  console.log(products);
  const handlePrevPage = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextPage = () => {
    if (currentSlide < 2) setCurrentSlide(currentSlide + 1);
  };

  const toggleSorting = (newOrderBy) => {
    if (newOrderBy === orderBy) {
      setOrderDirection(orderDirection === "desc" ? "asc" : "desc");
    } else {
      setOrderBy(newOrderBy);
    }
  };

  const slide1 = products.slice(0, sliceEnd);
  const slide2 = products.slice(sliceEnd, 2 * sliceEnd);

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
