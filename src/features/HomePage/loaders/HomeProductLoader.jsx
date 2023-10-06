import { useEffect, useState } from "react";
import HomeProductLoaders from "./HomeProductLoaders";

function ProfileProductLoading() {
  const [sliceEnd, setSliceEnd] = useState(calculateSliceEnd());

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

  return (
    <div className="carousel mt-2 w-full justify-items-stretch sm:mt-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
      <div
        id="featuredProductsSlide1"
        className="carousel-item mx-auto my-4 w-full gap-2 sm:w-full md:gap-3"
      >
        {Array.from({ length: sliceEnd }, (_, index) => (
          <HomeProductLoaders key={index} />
        ))}
      </div>
    </div>
  );
}

export default ProfileProductLoading;
