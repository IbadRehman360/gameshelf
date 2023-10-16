import { useEffect, useState } from "react";
import useProduct from "../useProduct";
import FeaturedProduct from "../../../components/FeatureProducts";
import ProfileProductLoading from "../loaders/HomeProductLoader";

export default function FeaturedProducts({ sortCriteria, setSortCriteria }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(calculateSliceEnd());
  const { items, loadingItems, isItemsError } = useProduct(
    sortCriteria.orderBy,
    sortCriteria.orderDirection
  );

  const [displayedProducts1, setDisplayedProducts1] = useState([]);
  const [displayedProducts2, setDisplayedProducts2] = useState([]);

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

  useEffect(() => {
    if (items) {
      const sliceStart1 = 0;
      const sliceEnd1 = sliceStart1 + sliceEnd;
      setDisplayedProducts1(items.slice(sliceStart1, sliceEnd1));

      const sliceStart2 = sliceEnd;
      const sliceEnd2 = sliceStart2 + sliceEnd;
      setDisplayedProducts2(items.slice(sliceStart2, sliceEnd2));
    }
  }, [items, sliceEnd]);

  const handlePrevPage = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      // Wrap to the last slide when at the beginning
      setCurrentSlide(1);
    }
  };

  const handleNextPage = () => {
    if (currentSlide < 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Wrap to the first slide when at the end
      setCurrentSlide(0);
    }
  };

  if (loadingItems) {
    return <ProfileProductLoading />;
  }

  return (
    <div className="sm:mb-12 mb-10 md:mb-16 bg-[#fdfdfd] px-3">
      <div className="carousel mt-2 w-full justify-items-stretch sm:mt-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
        <div
          id="featuredProductsSlide1"
          className="carousel-item mx-auto my-4 w-full gap-2 sm:w-full md:gap-3"
        >
          {displayedProducts1.map((product) => (
            <FeaturedProduct
              key={product.id}
              title={product.title}
              created_at={product.created_at}
              price={product.price}
              level={product.users.level}
              fullName={product.users.username}
              productID={product.id}
              games={product.games.title.toLowerCase()}
              image={product.users.avatar_image}
            />
          ))}
        </div>
        <div
          id="featuredProductsSlide2"
          className="carousel-item mx-auto my-4 gap-2 w-full md:gap-3"
        >
          {displayedProducts2.map((product) => (
            <FeaturedProduct
              key={product.id}
              title={product.title}
              created_at={product.created_at}
              price={product.price}
              level={product.users.level}
              fullName={product.users.username}
              productID={product.id}
              games={product.games.title.toLowerCase()}
              image={product.users.avatar_image}
            />
          ))}
        </div>
      </div>
      <div className="mt-2 flex justify-center text-xs sm:mt-4 md:mt-6">
        <p
          className="text-[0.97rem] sm:text-[1rem] md:hidden"
          style={{ letterSpacing: "0.1em" }}
        >
          {currentSlide + 1}/2
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
            className={`mr-1 block h-[4px] w-[28px] rounded-2xl ${
              currentSlide === 1 ? "bg-[#f03827]" : "bg-[#888888]"
            } `}
          />
        </div>
      </div>
    </div>
  );
}
